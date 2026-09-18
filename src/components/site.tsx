import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail } from 'lucide-react';
import logoSamurai from '../assets/logo-samurai.peg.jpeg';

/* ------------------------------------------------------------------ */
/* Assinatura visual — Warlley Samurai                                 */
/* ------------------------------------------------------------------ */

interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'stacked';
  showTagline?: boolean;
  tone?: 'light' | 'dark';
}

/** Assinatura visual completa: símbolo (A) + logotipo (B), conforme o Manual de Identidade. */
export const Wordmark: React.FC<WordmarkProps> = ({
  size = 'md',
  layout = 'horizontal',
  showTagline = true,
  tone = 'light',
}) => {
  const logo = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-8 h-8' : 'w-11 h-11';
  const text = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl';
  const tagline = size === 'lg' ? 'text-[10px]' : 'text-[8px]';
  const textColor = tone === 'dark' ? 'text-samurai-black' : 'text-white';
  const taglineColor = tone === 'dark' ? 'text-samurai-black/60' : 'text-zinc-400';

  const nameBlock = (
    <div className={layout === 'stacked' ? 'flex flex-col items-center' : 'flex flex-col'}>
      <span className={`wordmark ${text} ${textColor} uppercase leading-[1.05]`}>
        Warlley<br />Samurai
      </span>
      {showTagline && (
        <span className={`${tagline} ${taglineColor} font-semibold uppercase tracking-[0.35em] mt-1.5`}>
          Personal Trainer
        </span>
      )}
    </div>
  );

  return (
    <div className={`flex items-center gap-3 ${layout === 'stacked' ? 'flex-col text-center' : ''}`}>
      <img
        src={logoSamurai}
        alt="Warlley Samurai"
        className={`${logo} rounded-xl object-cover shadow-[0_0_18px_rgba(227,6,19,0.35)] shrink-0`}
      />
      {nameBlock}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Ícones do Código do Samurai (bushido) — traço fino, estilo do manual */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

export const TorriIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="38" cy="8" r="3" fill="currentColor" className="text-samurai-red" />
    <path d="M4 14L44 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M7 19L41 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 19V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 19V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const SakuraIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="38" cy="8" r="3" fill="currentColor" className="text-samurai-red" />
    {[0, 72, 144, 216, 288].map((angle) => (
      <ellipse
        key={angle}
        cx="24"
        cy="14"
        rx="6"
        ry="9"
        stroke="currentColor"
        strokeWidth="2"
        transform={`rotate(${angle} 24 24)`}
      />
    ))}
    <circle cx="24" cy="24" r="2.5" fill="currentColor" />
  </svg>
);

export const ZenStonesIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="38" cy="8" r="3" fill="currentColor" className="text-samurai-red" />
    <ellipse cx="24" cy="38" rx="16" ry="5" stroke="currentColor" strokeWidth="2.5" />
    <ellipse cx="23" cy="27" rx="11" ry="4.5" stroke="currentColor" strokeWidth="2.5" />
    <ellipse cx="25" cy="16" rx="7" ry="4" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export const YinYangIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="38" cy="8" r="3" fill="currentColor" className="text-samurai-red" />
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
    <path
      d="M24 8a8 8 0 010 16 8 8 0 000 16 16 16 0 010-32z"
      fill="currentColor"
    />
    <circle cx="24" cy="16" r="2.4" fill="#0a0a0a" />
    <circle cx="24" cy="32" r="2.4" fill="currentColor" />
  </svg>
);

export const BambooIcon: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="38" cy="8" r="3" fill="currentColor" className="text-samurai-red" />
    <rect x="19" y="6" width="8" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M19 16H27M19 26H27M19 36H27" stroke="currentColor" strokeWidth="2" />
    <path d="M27 14C31 12 34 13 35 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 24C15 22 12 23 11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Silhueta angular de montanhas — território visual da marca. */
export const MountainSilhouette: React.FC<IconProps> = ({ className = '' }) => (
  <svg viewBox="0 0 400 220" fill="none" className={className} preserveAspectRatio="xMidYMax slice">
    <path
      d="M0 220L70 100L110 150L170 40L230 150L270 90L330 160L400 80V220H0Z"
      fill="currentColor"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Fundo atmosférico compartilhado                                     */
/* ------------------------------------------------------------------ */

export const SiteBackground: React.FC = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-samurai-black">
    <div className="absolute inset-0 grain opacity-60" />
    <div className="absolute top-[-18%] right-[-12%] w-[46rem] h-[46rem] bg-samurai-red/15 blur-[170px] rounded-full" />
    <div className="absolute bottom-[-15%] left-[-12%] w-[34rem] h-[34rem] bg-samurai-red/10 blur-[150px] rounded-full" />
  </div>
);

/* ------------------------------------------------------------------ */
/* Moldura de celular para vitrine de telas                            */
/* ------------------------------------------------------------------ */

export const PhoneFrame: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => (
  <div
    className={`relative rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/50 ${className}`}
  >
    <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-zinc-700/70" />
    <img src={src} alt={alt} className="w-full rounded-[2rem] object-cover" loading="lazy" />
  </div>
);

/* ------------------------------------------------------------------ */
/* Rodapé compartilhado                                                 */
/* ------------------------------------------------------------------ */

export const SiteFooter: React.FC = () => (
  <footer className="border-t border-zinc-900 bg-samurai-black/90 backdrop-blur-md py-12 relative z-10">
    <div className="container mx-auto px-6 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <Wordmark size="sm" />

        <nav className="flex flex-wrap justify-center gap-5 md:gap-7">
          <FooterLink to="/privacidade" label="Privacidade" />
          <FooterLink to="/termos" label="Termos de Uso" />
          <FooterLink to="/excluir-conta" label="Exclusão de Conta" danger />
        </nav>

        <a
          href="mailto:suporte@samuraifit.com.br"
          className="flex items-center gap-2 text-zinc-500 hover:text-samurai-red transition-colors text-xs font-bold uppercase tracking-widest"
        >
          <Mail size={14} />
          Contato
        </a>
      </div>

      <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-zinc-600 text-xs font-semibold tracking-wide text-center">
          © {new Date().getFullYear()} Warlley Samurai · Disciplina hoje. Liberdade amanhã.
        </span>
        <span className="text-zinc-700 text-xs font-semibold tracking-wide">
          Desenvolvido por{' '}
          <a
            href="https://pumpsites.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-samurai-red transition-colors font-bold"
          >
            Pump
          </a>
        </span>
      </div>
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
    className={`text-xs font-bold uppercase tracking-widest text-zinc-500 transition-colors flex items-center gap-1 ${
      danger ? 'hover:text-samurai-red' : 'hover:text-zinc-200'
    }`}
  >
    {label} <ChevronRight size={13} className="opacity-50" />
  </Link>
);

/* ------------------------------------------------------------------ */
/* Cabeçalhos das páginas legais                                       */
/* ------------------------------------------------------------------ */

export const LegalHeader: React.FC = () => (
  <header className="container mx-auto px-6 py-7 relative z-10 border-b border-zinc-900/60 flex items-center justify-between">
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-samurai-red transition-colors font-bold uppercase tracking-widest text-[11px]"
    >
      <ChevronRight size={15} className="rotate-180" />
      Voltar ao início
    </Link>
    <Wordmark size="sm" showTagline={false} />
  </header>
);

export const LegalTitle: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  updatedAt: string;
}> = ({ eyebrow, title, updatedAt }) => (
  <div className="mb-14">
    <p className="eyebrow text-samurai-red mb-4">{eyebrow}</p>
    <h1 className="text-4xl md:text-6xl mb-5 text-zinc-50">{title}</h1>
    <p className="text-zinc-500 font-semibold text-sm uppercase tracking-widest font-sans">
      Última atualização: {updatedAt}
    </p>
  </div>
);

export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl md:text-2xl text-zinc-50 border-l-4 border-samurai-red pl-4 leading-snug">
    {children}
  </h2>
);
