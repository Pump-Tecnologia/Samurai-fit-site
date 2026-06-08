import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import logoSamurai from '../assets/logo-samurai.peg.jpeg';

/** Wordmark da marca no estilo do app: "Samurai" claro + "Fit" vermelho. */
export const Wordmark: React.FC<{ size?: 'sm' | 'md' | 'lg'; withLogo?: boolean }> = ({
  size = 'md',
  withLogo = true,
}) => {
  const text = size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl';
  const logo = size === 'lg' ? 'w-11 h-11' : size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  return (
    <div className="flex items-center gap-3">
      {withLogo && (
        <img
          src={logoSamurai}
          alt="Samurai Fit"
          className={`${logo} rounded-xl object-cover shadow-[0_0_18px_rgba(185,28,28,0.35)]`}
        />
      )}
      <span className={`wordmark ${text} text-zinc-100`}>
        Samurai<span className="text-red-600"> Fit</span>
      </span>
    </div>
  );
};

/** Fundo atmosférico compartilhado: glows vermelhos + grão sutil.
 *  Fixo no viewport e -z-10 para não interferir no `sticky` do cabeçalho. */
export const SiteBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute inset-0 grain opacity-60" />
    <div className="absolute top-[-20%] right-[-10%] w-[42rem] h-[42rem] bg-red-900/15 blur-[160px] rounded-full" />
    <div className="absolute bottom-[-15%] left-[-12%] w-[34rem] h-[34rem] bg-red-950/20 blur-[140px] rounded-full" />
  </div>
);

/** Moldura de celular para vitrine de telas. */
export const PhoneFrame: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => (
  <div
    className={`relative rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-red-950/30 ${className}`}
  >
    <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-zinc-700/70" />
    <img src={src} alt={alt} className="w-full rounded-[2rem] object-cover" loading="lazy" />
  </div>
);

/** Rodapé compartilhado no estilo do app. */
export const SiteFooter: React.FC = () => (
  <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-12 relative z-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <Wordmark size="sm" />
        <span className="text-zinc-600 text-xs font-bold tracking-wide">
          © {new Date().getFullYear()} · Desenvolvido por{' '}
          <a
            href="https://pumpsites.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 transition-colors font-black"
          >
            Pump
          </a>
        </span>
      </div>

      <nav className="flex flex-wrap justify-center gap-5 md:gap-7">
        <FooterLink to="/privacidade" label="Privacidade" />
        <FooterLink to="/termos" label="Termos de Uso" />
        <FooterLink to="/excluir-conta" label="Exclusão de Conta" danger />
      </nav>
    </div>
  </footer>
);

const FooterLink: React.FC<{ to: string; label: string; danger?: boolean }> = ({
  to,
  label,
  danger,
}) => (
  <Link
    to={to}
    className={`text-xs font-black uppercase tracking-widest text-zinc-500 transition-colors flex items-center gap-1 ${
      danger ? 'hover:text-red-500' : 'hover:text-zinc-200'
    }`}
  >
    {label} <ChevronRight size={13} className="opacity-50" />
  </Link>
);

/** Cabeçalho compartilhado das páginas legais. */
export const LegalHeader: React.FC = () => (
  <header className="container mx-auto px-6 py-7 relative z-10 border-b border-zinc-900/60 flex items-center justify-between">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors font-black uppercase tracking-widest text-[11px]"
    >
      <ChevronRight size={15} className="rotate-180" />
      Voltar para o Dojo
    </Link>
    <Wordmark size="sm" />
  </header>
);

/** Cabeçalho de título das páginas legais (eyebrow + h1 + data). */
export const LegalTitle: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  updatedAt: string;
}> = ({ eyebrow, title, updatedAt }) => (
  <div className="mb-14">
    <p className="eyebrow text-red-600 mb-4">{eyebrow}</p>
    <h1 className="text-4xl md:text-6xl mb-5 text-zinc-50">{title}</h1>
    <p className="text-zinc-500 font-bold text-sm uppercase tracking-widest">
      Última atualização: {updatedAt}
    </p>
  </div>
);

/** Título de seção das páginas legais: numeração + barra vermelha. */
export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl md:text-2xl text-zinc-50 border-l-4 border-red-700 pl-4 leading-snug">
    {children}
  </h2>
);
