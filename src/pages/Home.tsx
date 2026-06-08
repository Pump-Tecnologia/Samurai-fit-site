import React from 'react';
import {
  Mail,
  Dumbbell,
  PlayCircle,
  CalendarRange,
  TrendingUp,
  Target,
  Flame,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Wordmark, SiteBackground, SiteFooter, PhoneFrame } from '../components/site';

/* --- O que o ALUNO ganha (cards uniformes) --- */
const FEATURES = [
  {
    icon: Dumbbell,
    label: 'Keiko',
    title: 'Seus Treinos',
    desc: 'Acesse seus protocolos com séries, repetições, carga e descanso de cada exercício.',
  },
  {
    icon: PlayCircle,
    label: 'Pergaminhos',
    title: 'Vídeos de Técnica',
    desc: 'Aprenda a execução correta de cada movimento com vídeo demonstrativo.',
  },
  {
    icon: CalendarRange,
    label: 'Ciclo de Batalha',
    title: 'Sua Periodização',
    desc: 'Acompanhe seu ciclo de treino semana a semana, do aquecimento ao pico.',
  },
  {
    icon: TrendingUp,
    label: 'Progresso',
    title: 'Sua Evolução',
    desc: 'Registre cada treino e veja sua constância e a progressão de carga ao longo do tempo.',
  },
  {
    icon: Target,
    label: 'Objetivo',
    title: 'Suas Metas',
    desc: 'Defina seu objetivo e mantenha a disciplina diária de um verdadeiro guerreiro.',
  },
  {
    icon: Flame,
    label: 'Sob Medida',
    title: 'Feito pra Você',
    desc: 'Protocolos personalizados, montados pelo seu mestre de acordo com a sua jornada.',
  },
] as const;

/* --- Vitrine de telas. Troque/adicione PNGs em /public e referencie aqui. --- */
type Shot =
  | { src: string; screen: string; desc: string }
  | { placeholder: true; screen: string; desc: string };

const SHOWCASE: Shot[] = [
  { src: '/mockup-treino.png', screen: 'Meu Treino', desc: 'Escolha sua batalha do dia' },
  { src: '/mockup-evolucao.png', screen: 'Minha Evolução', desc: 'Acompanhe seu progresso real' },
  { src: '/mockup-sabio.png', screen: 'Sábio do Clã', desc: 'Seu mentor de treino com IA' },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative selection:bg-red-900/30 selection:text-red-200">
      <SiteBackground />

      {/* Nav fixa (pill) */}
      <header className="sticky top-4 z-50 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-black/40">
            <Wordmark />
            <nav className="hidden md:flex items-center gap-7">
              <a href="#recursos" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors">Recursos</a>
              <a href="#sensei" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors">O Sensei</a>
              <a href="#suporte" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors">Suporte</a>
            </nav>
            <a href="#download" className="bg-red-900 hover:bg-red-800 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-900/30">
              Baixar
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section id="download" className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 flex flex-col lg:flex-row items-center justify-between gap-16 scroll-mt-28">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-900/30 bg-red-900/10 px-4 py-1.5 mb-8">
              <Sparkles size={13} className="text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-red-400">Seu treino, no nível Samurai</span>
            </div>

            <h1 className="text-4xl md:text-5xl text-zinc-50 leading-[1.08] mb-7">
              Treine com a<br />
              disciplina de<br />
              um <span className="text-red-600">Samurai</span>
            </h1>

            <p className="text-zinc-400 text-lg mb-10 max-w-xl font-medium leading-relaxed">
              Receba os treinos do seu mestre, siga cada protocolo em vídeo e evolua todos os dias —
              com a força e a disciplina de um guerreiro na palma da mão.
            </p>

            <p className="eyebrow mb-4">Baixe agora</p>
            <div className="flex flex-row items-stretch gap-3">
              <a href="#" className="flex flex-col items-start justify-center gap-0.5 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-2xl shadow-lg">
                <p className="text-[11px] text-zinc-500 leading-none font-semibold">Baixar na</p>
                <img src="/Apple_Store.png" alt="App Store" className="h-6 w-auto" />
              </a>
              <a href="#" className="flex flex-col items-start justify-center gap-0.5 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-2xl shadow-lg">
                <p className="text-[11px] text-zinc-500 leading-none font-semibold">Baixar no</p>
                <img src="/Google_Play_2022_logo.svg.png" alt="Google Play" className="h-6 w-auto" />
              </a>
            </div>
          </div>

          {/* Mockup com glow + cards flutuantes */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-red-900/20 blur-[90px] rounded-full pointer-events-none scale-90" />
            <PhoneFrame
              src="/mockup-login.png"
              alt="Samurai Fit App"
              className="relative w-[230px] md:w-[260px] lg:w-[270px] animate-float-slow"
            />
            <div className="hidden md:flex absolute top-10 -left-4 lg:left-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur px-4 py-3 shadow-2xl">
              <div className="p-2 rounded-xl bg-red-900/20 text-red-500"><Dumbbell size={18} /></div>
              <div className="text-left">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Treino de hoje</p>
                <p className="text-xs font-black uppercase italic text-zinc-100">Push · 6 exercícios</p>
              </div>
            </div>
            <div className="hidden md:flex absolute bottom-12 -right-2 lg:right-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur px-4 py-3 shadow-2xl">
              <div className="p-2 rounded-xl bg-red-900/20 text-red-500"><CalendarRange size={18} /></div>
              <div className="text-left">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Seu ciclo</p>
                <p className="text-xs font-black uppercase italic text-zinc-100">Semana 1 de 8</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa de credibilidade (foco no aluno) */}
        <section className="container mx-auto px-6 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-zinc-900 bg-zinc-900/30 py-5 px-6">
            {[
              { icon: Sparkles, label: 'Treinos personalizados' },
              { icon: PlayCircle, label: 'Vídeo em cada exercício' },
              { icon: ShieldCheck, label: 'Seus dados protegidos · LGPD' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-zinc-400">
                <Icon size={15} className="text-red-600" />
                <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recursos (cards uniformes) */}
        <section id="recursos" className="container mx-auto px-6 py-24 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-red-600 mb-4">O Arsenal</p>
            <h2 className="text-3xl md:text-4xl text-zinc-50 leading-tight">
              Tudo para sua evolução<br />em um só app
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, label, title, desc }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-7 hover:border-red-900/40 transition-all"
              >
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-900/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-red-900/20 transition-colors" />
                <div className="relative flex flex-col flex-1">
                  <div className="inline-flex w-fit p-3 rounded-2xl bg-red-900/15 text-red-500 mb-5">
                    <Icon size={22} />
                  </div>
                  <p className="eyebrow text-red-600/80 mb-1">{label}</p>
                  <h3 className="text-lg text-zinc-50 mb-3">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Vitrine de telas (frames uniformes e alinhados) */}
        <section className="container mx-auto px-6 py-24 border-t border-zinc-900/60">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-red-600 mb-4">Por dentro do app</p>
            <h2 className="text-3xl md:text-4xl text-zinc-50 leading-tight">Veja o app por dentro</h2>
          </div>

          {/* Mobile: carrossel deslizável · Desktop: grid de 3 */}
          <div className="flex sm:grid sm:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
            {SHOWCASE.map((shot) => (
              <div key={shot.screen} className="snap-center shrink-0 w-[78%] sm:w-full max-w-[260px] mx-auto flex flex-col items-center">
                <div className="w-full aspect-[300/640] rounded-[2.2rem] border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-red-950/30 overflow-hidden">
                  {'src' in shot ? (
                    <img src={shot.src} alt={shot.screen} className="w-full h-full object-cover object-top rounded-[1.7rem]" loading="lazy" />
                  ) : (
                    <div className="w-full h-full rounded-[1.7rem] border border-dashed border-zinc-700/80 bg-zinc-950/40 flex flex-col items-center justify-center text-center px-6 gap-3">
                      <div className="p-3 rounded-2xl bg-red-900/15 text-red-500"><Sparkles size={22} /></div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Screenshot em breve</p>
                    </div>
                  )}
                </div>
                <div className="mt-5 text-center">
                  <p className="text-sm font-black uppercase italic text-zinc-100">{shot.screen}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 mt-1">{shot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sensei Warlley */}
        <section id="sensei" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 max-w-5xl mx-auto">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-red-900/25 blur-[60px] rounded-full pointer-events-none scale-110" />
              <img
                src="/warlley.jpeg"
                alt="Warlley Oliveira"
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-[2rem] object-cover object-top border border-zinc-800 shadow-2xl shadow-red-900/20"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="eyebrow text-red-600 mb-3">O Sensei</p>
              <h2 className="text-3xl md:text-4xl text-zinc-50 mb-2">Warlley Oliveira</h2>
              <p className="text-zinc-500 font-black uppercase tracking-widest text-xs mb-6">Personal Trainer & Fundador do Dojo</p>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl font-medium">
                Por trás de cada treino existe um método. Warlley criou o Samurai Fit para entregar a você,
                guerreiro, o mesmo acompanhamento de elite que transforma corpos e mentalidades — com a
                disciplina e a precisão de um mestre.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-red-800" />
                <span className="font-oriental text-red-700 text-3xl">侍</span>
                <div className="h-px w-12 bg-red-800" />
              </div>
            </div>
          </div>
        </section>

        {/* Suporte */}
        <section id="suporte" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] border border-zinc-800/60 bg-zinc-900/40 p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-900/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="eyebrow text-red-600 mb-4">Suporte</p>
              <h2 className="text-3xl md:text-4xl text-zinc-50 mb-4">Precisa de Ajuda?</h2>
              <p className="text-zinc-400 mb-10 text-lg max-w-2xl mx-auto font-medium">
                Encontrou um obstáculo no caminho ou tem dúvidas sobre o aplicativo? Nosso suporte está pronto para ajudar.
              </p>
              <a href="mailto:suporte@samuraifit.com.br" className="inline-flex items-center gap-4 bg-zinc-950 border border-zinc-800 hover:border-red-900/50 px-8 py-5 rounded-2xl transition-all group">
                <div className="p-3 bg-red-900/20 text-red-500 rounded-xl group-hover:bg-red-900/40 transition-colors"><Mail size={24} /></div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">E-mail de Suporte</p>
                  <p className="text-lg md:text-xl font-bold text-zinc-200 group-hover:text-red-400 transition-colors">suporte@samuraifit.com.br</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
