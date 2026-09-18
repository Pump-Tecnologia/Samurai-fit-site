import React, { useEffect, useRef, useState } from 'react';
import {
  Dumbbell,
  PlayCircle,
  CalendarRange,
  TrendingUp,
  Target,
  Flame,
  Mountain,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react';
import {
  Wordmark,
  SiteBackground,
  SiteFooter,
  TorriIcon,
  SakuraIcon,
  ZenStonesIcon,
  YinYangIcon,
} from '../components/site';
import { Reveal } from '../components/Reveal';

/* --- O Código do Samurai --- */
const BUSHIDO = [
  { icon: TorriIcon, title: 'Disciplina', desc: 'Treinar mesmo sem vontade.' },
  { icon: SakuraIcon, title: 'Respeito', desc: 'Pelo processo e pelo corpo.' },
  { icon: ZenStonesIcon, title: 'Constância', desc: 'Repetição todos os dias.' },
  { icon: Mountain, title: 'Coragem', desc: 'Sair da zona de conforto.' },
  { icon: Target, title: 'Honra', desc: 'Compromisso com a palavra.' },
  { icon: YinYangIcon, title: 'Autocontrole', desc: 'Domínio da mente sobre o impulso.' },
  { icon: TrendingUp, title: 'Evolução', desc: 'Melhoria real, todos os dias.' },
] as const;

/* --- Método: 3 etapas --- */
const METODO = [
  { n: '01', title: 'Despertar', desc: 'Conheça o seu propósito. Avaliação e consciência.' },
  { n: '02', title: 'Construção', desc: 'Treinamento inteligente. Hábitos que constroem.' },
  { n: '03', title: 'Domínio', desc: 'Resultados consistentes. Estilo de vida samurai.' },
] as const;

/* --- Resultados: transformações (antes/depois) --- */
const RESULTADOS = [
  { name: 'Caio', age: 28, stat: '-12KG · 4 MESES' },
  { name: 'Rafael', age: 35, stat: '-18KG · 6 MESES' },
  { name: 'Leandro', age: 41, stat: '-15KG · 5 MESES' },
] as const;

/* --- Depoimentos (carrossel, sem imagem) --- */
const DEPOIMENTOS = [
  {
    name: 'Gabriel M.',
    role: 'Aluno Warlley Samurai',
    quote: 'O método Warlley Samurai mudou completamente minha mente e meu corpo. Hoje vivo com mais energia, confiança e disciplina.',
  },
  {
    name: 'Rafael T.',
    role: 'Aluno Warlley Samurai',
    quote: 'Nunca tive constância em nada até encontrar esse método. Hoje treinar é parte da minha rotina, não mais uma obrigação.',
  },
  {
    name: 'Leandro S.',
    role: 'Aluno Warlley Samurai',
    quote: 'Sair da zona de conforto foi a parte mais difícil. O suporte e a estrutura do método me deram a coragem que eu precisava.',
  },
  {
    name: 'Felipe A.',
    role: 'Aluno Warlley Samurai',
    quote: 'Aprendi a ter autocontrole não só nos treinos, mas em todas as áreas da minha vida. Isso não tem preço.',
  },
  {
    name: 'Caio R.',
    role: 'Aluno Warlley Samurai',
    quote: 'Cada semana eu via minha evolução no aplicativo. Isso me manteve motivado até chegar no resultado que eu buscava.',
  },
] as const;

/* --- O que o ALUNO ganha no app (cards uniformes) --- */
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

const NAV_LINKS = [
  { href: '#metodo', label: 'Método' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#aplicativo', label: 'Aplicativo' },
  { href: '#contato', label: 'Contato' },
] as const;

const Home: React.FC = () => {
  const featuresCarouselRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showNavCta, setShowNavCta] = useState(false);

  const scrollFeatures = (direction: 1 | -1) => {
    featuresCarouselRef.current?.scrollBy({ left: direction * 236, behavior: 'smooth' });
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setShowNavCta(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-samurai-black text-zinc-100 relative selection:bg-samurai-red/30 selection:text-red-200">
      <SiteBackground />

      {/* Nav fixa — barra limpa sobre o fundo, sem glass */}
      <header className="sticky top-0 z-50 bg-samurai-black/95">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4 py-5">
            <Wordmark size="sm" showTagline={false} />
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-samurai-red transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contato"
              aria-hidden={!showNavCta}
              tabIndex={showNavCta ? undefined : -1}
              className={`inline-flex items-center gap-2 bg-samurai-red hover:bg-samurai-red-dark text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all duration-300 active:scale-95 whitespace-nowrap ${
                showNavCta ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
            >
              Começar Jornada <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section ref={heroRef} className="relative overflow-hidden">
          {/* Visual full-bleed à direita: homem + montanha + sol nascente (composto oficial) */}
          <img
            src="/homem-montanha edit.png"
            alt="Guerreiro diante da montanha e do sol nascente"
            className="hidden lg:block absolute top-0 right-0 h-full w-auto max-w-none object-cover object-right select-none pointer-events-none"
            fetchPriority="high"
          />
          {/* Gradiente para legibilidade do texto sobre a imagem */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-samurai-black from-30% via-samurai-black/50 via-55% to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left lg:min-h-[86vh] justify-center py-14 lg:py-0">
              <Reveal className="inline-flex items-center gap-2.5 mb-5">
                {['Disciplina', 'Constância', 'Evolução'].map((w, i) => (
                  <React.Fragment key={w}>
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-samurai-red" />}
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-samurai-red">{w}</span>
                  </React.Fragment>
                ))}
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-serif uppercase font-normal text-5xl sm:text-6xl lg:text-7xl text-zinc-50 leading-[0.98] tracking-[0.03em] mb-6 not-italic">
                  Forje o seu<br />caminho
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-9">
                  Disciplina física.<br />
                  Clareza mental.<br />
                  Resultados reais.
                </p>
              </Reveal>

              <Reveal delay={340} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 bg-samurai-red hover:bg-samurai-red-dark text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-lg transition-all active:scale-95 w-full sm:w-auto"
                >
                  Começar Jornada <ArrowRight size={15} />
                </a>
                <a
                  href="#metodo"
                  className="inline-flex items-center justify-center gap-2 text-zinc-400 hover:text-white text-xs font-semibold uppercase tracking-widest px-4 py-3 transition-colors w-full sm:w-auto"
                >
                  Conhecer o Método
                </a>
              </Reveal>
            </div>
          </div>

          {/* Imagem no mobile (abaixo do texto) */}
          <img
            src="/homem-montanha edit.png"
            alt=""
            aria-hidden="true"
            className="lg:hidden w-full max-w-lg mx-auto px-6 pb-6 select-none pointer-events-none"
          />
        </section>

        {/* Método + Código do Samurai */}
        <section id="metodo" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <Reveal className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-serif uppercase not-italic font-medium tracking-normal text-3xl md:text-4xl text-zinc-50 leading-tight">
              O Código do Samurai
            </h2>
            <span className="block mx-auto mt-5 h-[3px] w-14 rounded-full bg-samurai-red" />
            <p className="text-zinc-500 mt-6 leading-relaxed">
              Sete princípios guiam cada treino, cada escolha e cada dia dentro do método —
              a base de tudo o que construímos juntos.
            </p>
          </Reveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible mb-20">
            {BUSHIDO.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 60} className="shrink-0 snap-start w-[32%] sm:w-auto">
                <div className="h-full flex flex-col items-center text-center gap-3 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-3 py-6 hover:border-samurai-red/40 hover:-translate-y-1 transition-all">
                  <Icon className="w-7 h-7 text-zinc-300" />
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-100">{title}</p>
                  <p className="text-[11px] text-zinc-500 leading-snug">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Método — rótulo centralizado */}
          <Reveal className="mt-20 md:mt-28 flex flex-col items-center">
            <h3 className="font-serif uppercase not-italic font-medium tracking-normal text-2xl md:text-3xl text-zinc-50 text-center">
              Método
            </h3>
            <span className="mt-4 h-[3px] w-14 rounded-full bg-samurai-red" />
          </Reveal>

          {/* As 3 etapas: número (Poppins) + texto, ligados por linha e ponto */}
          <div className="mt-16 md:mb-8 flex flex-col md:flex-row md:items-start justify-center gap-12 md:gap-0">
            {METODO.map(({ n, title, desc }, i) => (
              <React.Fragment key={n}>
                <Reveal delay={i * 120} className="flex items-start justify-center gap-4">
                  <span className="font-sans font-normal leading-none text-samurai-red text-6xl md:text-7xl">
                    {n}
                  </span>
                  <div className="pt-1 text-left">
                    <h4 className="mb-2 font-sans text-xs font-semibold uppercase tracking-widest text-zinc-50">{title}</h4>
                    <p className="max-w-[190px] text-xs leading-relaxed text-zinc-500">{desc}</p>
                  </div>
                </Reveal>

                {i < METODO.length - 1 && (
                  <div className="relative hidden md:block w-24 lg:w-32 mt-8 mx-3 lg:mx-4">
                    <span className="block h-px w-full bg-zinc-700" />
                    <span
                      className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-samurai-red ${
                        i === 0 ? 'left-1/2 -translate-x-1/2' : 'right-0 translate-x-1/2'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Depoimento em destaque */}
          <Reveal className="mt-20 md:mt-24 max-w-2xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
            <Quote className="text-samurai-red mb-3 rotate-180" size={26} fill="currentColor" strokeWidth={0} />
            <p className="text-zinc-400 leading-relaxed mb-8 min-h-[4.5rem]">
              {DEPOIMENTOS[activeTestimonial].quote}
            </p>

            <div className="self-center flex items-center gap-3 mb-8">
              <img
                src="/depois.png"
                alt={DEPOIMENTOS[activeTestimonial].name}
                className="w-11 h-11 rounded-full object-cover object-top border-2 border-samurai-red/50 shrink-0"
              />
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-100">
                  {DEPOIMENTOS[activeTestimonial].name}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">{DEPOIMENTOS[activeTestimonial].role}</p>
              </div>
            </div>

            <div className="self-center flex items-center gap-2">
              {DEPOIMENTOS.map((depoimento, i) => (
                <button
                  key={depoimento.name}
                  type="button"
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Ver depoimento de ${depoimento.name}`}
                  aria-current={i === activeTestimonial}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeTestimonial ? 'w-6 bg-samurai-red' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* O Sensei */}
        <section id="jornada" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <Reveal className="flex flex-col items-center mb-16">
            <h2 className="font-serif uppercase not-italic font-medium tracking-normal text-2xl md:text-3xl text-zinc-50 text-center">
              O Sensei
            </h2>
            <span className="mt-4 h-[3px] w-14 rounded-full bg-samurai-red" />
          </Reveal>

          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-4xl mx-auto">
            <Reveal>
              <img
                src="/warlley.jpeg"
                alt="Warlley Oliveira — Personal Trainer e fundador do método"
                className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover aspect-[4/5] border border-zinc-800 shadow-2xl shadow-black/50 shrink-0"
              />
            </Reveal>

            <Reveal delay={150} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-50 mb-2 not-italic">Warlley Oliveira</h3>
              <p className="font-sans text-zinc-500 font-semibold uppercase tracking-widest text-xs mb-6">
                Personal Trainer & Fundador do Método
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Por trás de cada treino existe um método. Warlley criou o Warlley Samurai para entregar a
                você o mesmo acompanhamento de elite que transforma corpos e mentalidades — com a
                disciplina e a precisão de um mestre.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-samurai-red/60" />
                <span className="font-oriental text-samurai-red text-3xl">侍</span>
                <div className="h-px w-12 bg-samurai-red/60" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Resultados: Transformações + Depoimentos */}
        <section id="resultados" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <Reveal className="flex flex-col items-center mb-16">
            <h2 className="font-serif uppercase not-italic font-medium tracking-normal text-2xl md:text-3xl text-zinc-50 text-center">
              Resultados
            </h2>
            <span className="mt-4 h-[3px] w-14 rounded-full bg-samurai-red" />
            <p className="text-zinc-500 mt-6 max-w-xl text-center leading-relaxed">
              Cada aluno tem uma jornada — aqui é onde a sua conquista ganha espaço.
            </p>
          </Reveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible mb-14">
            {RESULTADOS.map(({ name, age, stat }, i) => (
              <Reveal key={name} delay={i * 100} className="shrink-0 snap-center w-[82%] md:w-auto">
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden hover:-translate-y-1 transition-transform">
                  <div className="flex gap-[2px] bg-samurai-red">
                    {[
                      { src: '/antes.png', label: 'Antes' },
                      { src: '/depois.png', label: 'Depois' },
                    ].map(({ src, label }) => (
                      <div key={label} className="relative w-1/2 aspect-[3/4] overflow-hidden bg-zinc-900">
                        <img src={src} alt={`${label} — ${name}`} className="w-full h-full object-cover" loading="lazy" />
                        <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/70 backdrop-blur-sm px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-zinc-100">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-zinc-100">
                      {name}, {age} anos
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-samurai-red mt-1.5">{stat}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </section>

        {/* Aplicativo */}
        <section id="aplicativo" className="container mx-auto px-6 py-24 border-t border-zinc-900/60 scroll-mt-28">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 w-full flex flex-col items-start text-left">
              <Reveal>
                <h2 className="font-serif uppercase not-italic font-medium tracking-normal text-2xl md:text-3xl text-zinc-50">
                  Aplicativo
                </h2>
                <span className="mt-4 h-[3px] w-14 rounded-full bg-samurai-red" />
              </Reveal>

              <Reveal delay={120} className="w-full">
                <p className="text-zinc-500 leading-relaxed mt-7 mb-8">
                  Sua jornada, na palma da sua mão. Acompanhe treinos, evolução, hábitos e conquistas.
                </p>

                <div className="flex flex-row items-stretch gap-3 mb-10">
                  <a href="#" className="flex flex-col items-start justify-center gap-0.5 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-lg shadow-lg">
                    <p className="text-[11px] text-zinc-500 leading-none font-semibold">Baixar na</p>
                    <img src="/Apple_Store.png" alt="App Store" className="h-6 w-auto" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.samuraipersonal.app" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-center gap-0.5 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-lg shadow-lg">
                    <p className="text-[11px] text-zinc-500 leading-none font-semibold">Baixar no</p>
                    <img src="/Google_Play_2022_logo.svg.png" alt="Google Play" className="h-6 w-auto" />
                  </a>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-600">
                      Deslize para o lado
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => scrollFeatures(-1)}
                        aria-label="Ver recursos anteriores"
                        className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-800 text-zinc-500 hover:text-samurai-red hover:border-samurai-red/50 transition-colors"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => scrollFeatures(1)}
                        aria-label="Ver mais recursos"
                        className="flex items-center justify-center w-7 h-7 rounded-full border border-zinc-800 text-zinc-500 hover:text-samurai-red hover:border-samurai-red/50 transition-colors"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-samurai-black to-transparent z-10" />
                    <div
                      ref={featuresCarouselRef}
                      className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1"
                    >
                      {FEATURES.map(({ icon: Icon, label, title, desc }) => (
                        <article
                          key={title}
                          className="group relative flex flex-col shrink-0 snap-start w-[220px] overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 hover:border-samurai-red/40 hover:-translate-y-1 transition-all"
                        >
                          <div className="inline-flex w-fit p-2.5 rounded-xl bg-samurai-red/15 text-samurai-red mb-3">
                            <Icon size={18} />
                          </div>
                          <p className="eyebrow text-samurai-red/80 mb-1">{label}</p>
                          <h4 className="font-sans text-sm font-semibold text-zinc-50 mb-1.5">{title}</h4>
                          <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:w-2/3 w-full flex justify-center">
              <img
                src="/mockup.png"
                alt="Aplicativo Samurai Fit — telas Dojo e Guerra"
                className="w-full max-w-lg lg:max-w-3xl object-contain"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>

        {/* CTA final */}
        <section id="contato" className="container mx-auto px-6 pb-16 scroll-mt-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-samurai-red/20 text-center">
            <img
              src="/FINAL.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-samurai-black/70" />
            <Reveal className="relative z-10 p-10 md:p-20">
              <p className="eyebrow text-samurai-red mb-4">Pronto para começar?</p>
              <h2 className="font-serif uppercase not-italic font-medium text-3xl md:text-5xl text-zinc-50 mb-9">
                Pronto para transformar<br />seu corpo e sua mente?
              </h2>
              <a
                href="#aplicativo"
                className="inline-flex items-center gap-2 bg-samurai-red hover:bg-samurai-red-dark text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 rounded-lg transition-all active:scale-95"
              >
                Iniciar Jornada <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
