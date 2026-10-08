/**
 * Protocolo ou treino compartilhado pelo app (#107). A página pública lê pela
 * função `get_shared_protocol` do Supabase, que só devolve a cópia guardada no
 * compartilhamento: nomes, séries, repetições e descanso. A resposta vem da
 * rede, então tudo é conferido antes de ir para a tela.
 */

/** Endereço público do projeto e a chave pública (a mesma que vai no app). */
const SUPABASE_URL = 'https://knoxblscbwqkpiwdniys.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_eoAFHY78bwOfCzgFIFzN1w_o4QSmJ--';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.samuraipersonal.app';

const TOKEN = /^[0-9a-f]{32}$/;
const MAX_WORKOUTS = 7;
const MAX_EXERCISES = 30;

export interface SharedExercise {
  readonly name: string;
  readonly sets: number | null;
  readonly reps: string | null;
  readonly rest: string | null;
}

export interface SharedWorkout {
  readonly title: string;
  readonly day: string | null;
  readonly exercises: readonly SharedExercise[];
}

export interface SharedProtocol {
  readonly kind: 'protocolo' | 'treino';
  readonly title: string;
  /** Só no protocolo. */
  readonly weeks: number | null;
  readonly workouts: readonly SharedWorkout[];
}

export type SharedResult =
  | { readonly status: 'ok'; readonly protocol: SharedProtocol }
  | { readonly status: 'missing' }
  /** Passou dos 90 dias (até a limpeza diária apagar). */
  | { readonly status: 'expired' }
  | { readonly status: 'error' };

export const isShareToken = (value: string | undefined): value is string => !!value && TOKEN.test(value);

const text = (value: unknown, max: number): string | null =>
  typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : null;

const count = (value: unknown, max: number): number | null =>
  typeof value === 'number' && Number.isInteger(value) && value > 0 && value <= max ? value : null;

const list = (value: unknown): unknown[] => (Array.isArray(value) ? value : []);

const asRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};

const toExercise = (raw: unknown): SharedExercise | null => {
  const e = asRecord(raw);
  const name = text(e.name, 120);
  return name ? { name, sets: count(e.sets, 99), reps: text(e.reps, 20), rest: text(e.rest, 20) } : null;
};

const toWorkout = (raw: unknown): SharedWorkout => {
  const w = asRecord(raw);
  return {
    title: text(w.title, 80) ?? 'Treino',
    day: text(w.day, 20),
    exercises: list(w.exercises).slice(0, MAX_EXERCISES).map(toExercise).filter((e): e is SharedExercise => e !== null),
  };
};

/** A resposta da função, conferida; null quando não é um compartilhamento válido. */
export const parseShared = (raw: unknown): SharedProtocol | null => {
  const body = asRecord(raw);
  const kind = body.kind === 'protocolo' || body.kind === 'treino' ? body.kind : null;
  const title = text(body.title, 120);
  if (!kind || !title) return null;
  const content = asRecord(body.content);
  return {
    kind,
    title,
    weeks: kind === 'protocolo' ? count(content.weeks, 52) : null,
    workouts: list(content.workouts).slice(0, MAX_WORKOUTS).map(toWorkout),
  };
};

/** "4 × 10 · 60s", só com o que existir. */
export const prescription = (exercise: SharedExercise): string => {
  const volume = exercise.sets && exercise.reps ? `${exercise.sets} × ${exercise.reps}` : exercise.reps ?? (exercise.sets ? `${exercise.sets} séries` : '');
  return [volume, exercise.rest ? `descanso ${exercise.rest}` : ''].filter(Boolean).join(' · ');
};

export const fetchShared = async (token: string, fetchFn: typeof fetch = fetch): Promise<SharedResult> => {
  if (!isShareToken(token)) return { status: 'missing' };
  try {
    const response = await fetchFn(`${SUPABASE_URL}/rest/v1/rpc/get_shared_protocol`, {
      method: 'POST',
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_token: token }),
    });
    if (!response.ok) return { status: 'error' };
    const body = await response.json();
    if (asRecord(body).expired === true) return { status: 'expired' };
    const protocol = parseShared(body);
    return protocol ? { status: 'ok', protocol } : { status: 'missing' };
  } catch {
    return { status: 'error' };
  }
};
