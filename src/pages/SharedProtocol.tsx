import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, Loader2, ScrollText, Swords } from 'lucide-react';
import { SiteBackground, SiteFooter, LegalHeader } from '../components/site';
import {
  fetchShared, prescription, PLAY_STORE_URL,
  type SharedProtocol as Shared, type SharedResult, type SharedWorkout,
} from '../lib/sharedProtocol';

/** Página pessoal de quem compartilhou: fora dos buscadores. */
const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);
};

const GetTheApp: React.FC<{ kind: Shared['kind'] }> = ({ kind }) => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-center gap-3 w-full rounded-2xl bg-samurai-red hover:bg-samurai-red-dark active:scale-[0.98] transition-all px-6 py-4 shadow-[0_10px_40px_-10px_rgba(227,6,19,0.6)]"
  >
    <Download size={20} className="shrink-0 group-hover:translate-y-0.5 transition-transform" />
    <span className="font-black uppercase tracking-wide text-sm md:text-base text-white">
      Obtenha este {kind === 'protocolo' ? 'protocolo' : 'treino'} no aplicativo
    </span>
  </a>
);

const WorkoutCard: React.FC<{ workout: SharedWorkout; index: number }> = ({ workout, index }) => (
  <section className="rounded-3xl border border-zinc-800/70 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
    <header className="flex items-baseline justify-between gap-3 px-6 pt-5 pb-3 border-b border-zinc-800/60">
      <h2 className="text-lg font-black uppercase italic text-zinc-50 leading-tight">
        <span className="text-samurai-red mr-2 not-italic font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
        {workout.title}
      </h2>
      {workout.day && <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-zinc-500">{workout.day}</span>}
    </header>
    {workout.exercises.length === 0 ? (
      <p className="px-6 py-5 text-sm text-zinc-500">Treino ainda sem exercícios.</p>
    ) : (
      <ol className="divide-y divide-zinc-800/50">
        {workout.exercises.map((exercise, i) => (
          <li key={`${exercise.name}-${i}`} className="flex items-baseline gap-4 px-6 py-3">
            <span className="w-5 shrink-0 text-right font-mono text-xs text-zinc-600">{i + 1}</span>
            {/* No celular, a prescrição desce para baixo do nome: lado a lado, espremia os dois. */}
            <span className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
              <span className="font-semibold text-zinc-200 break-words">{exercise.name}</span>
              <span className="shrink-0 text-sm tabular-nums text-zinc-400">{prescription(exercise)}</span>
            </span>
          </li>
        ))}
      </ol>
    )}
  </section>
);

const Content: React.FC<{ protocol: Shared }> = ({ protocol }) => {
  const perWeek = protocol.workouts.length;
  const facts = protocol.kind === 'protocolo'
    ? [protocol.weeks ? `${protocol.weeks} semanas` : null, perWeek ? `${perWeek} treino${perWeek > 1 ? 's' : ''} por semana` : null]
    : [`${protocol.workouts[0]?.exercises.length ?? 0} exercícios`];
  return (
    <>
      <div className="mb-10">
        <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-samurai-red mb-4">
          {protocol.kind === 'protocolo' ? <ScrollText size={14} /> : <Swords size={14} />}
          {protocol.kind === 'protocolo' ? 'Protocolo compartilhado' : 'Treino compartilhado'}
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.95] text-zinc-50 break-words">{protocol.title}</h1>
        <p className="mt-4 text-zinc-400 font-medium">{facts.filter(Boolean).join(' · ')}</p>
        {protocol.kind === 'protocolo' && (
          <p className="mt-2 text-sm text-zinc-500">A primeira semana do protocolo. No app, as próximas semanas progridem sozinhas.</p>
        )}
      </div>
      <GetTheApp kind={protocol.kind} />
      <div className="mt-10 space-y-5">
        {protocol.workouts.map((workout, index) => <WorkoutCard key={index} workout={workout} index={index} />)}
      </div>
      <div className="mt-10"><GetTheApp kind={protocol.kind} /></div>
    </>
  );
};

const Message: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="text-center py-16">
    <h1 className="text-3xl font-black uppercase italic text-zinc-50 mb-3">{title}</h1>
    <p className="text-zinc-400 mb-10">{text}</p>
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-samurai-red hover:bg-samurai-red-dark px-6 py-3 font-black uppercase text-sm text-white transition-colors">
      <Download size={18} /> Baixar o Samurai Fit
    </a>
  </div>
);

/** wsamurai.com.br/p/<token>: o protocolo ou treino que alguém compartilhou pelo app (#107). */
const SharedProtocol: React.FC = () => {
  const { token = '' } = useParams();
  const [result, setResult] = useState<SharedResult | null>(null);
  useNoIndex();

  useEffect(() => {
    let alive = true;
    setResult(null);
    void fetchShared(token).then(r => { if (alive) setResult(r); });
    return () => { alive = false; };
  }, [token]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      <SiteBackground />
      <LegalHeader />
      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10 max-w-3xl">
        {result === null && (
          <div role="status" className="flex items-center justify-center gap-3 py-24 text-zinc-500">
            <Loader2 size={20} className="animate-spin" /> Abrindo o pergaminho...
          </div>
        )}
        {result?.status === 'ok' && <Content protocol={result.protocol} />}
        {result?.status === 'missing' && (
          <Message title="Link não encontrado" text="Este compartilhamento não existe. Peça um link novo a quem te enviou." />
        )}
        {result?.status === 'expired' && (
          <Message title="Este link expirou" text="Os links de compartilhamento valem 90 dias. Peça um link novo a quem te enviou." />
        )}
        {result?.status === 'error' && (
          <Message title="Não foi possível abrir" text="Confira a sua conexão e tente de novo em instantes." />
        )}
      </main>
      <SiteFooter />
    </div>
  );
};

export default SharedProtocol;
