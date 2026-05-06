import React from 'react';
import logoSamurai from '../assets/logo-samurai.peg.jpeg';
import { Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden font-sans selection:bg-red-900/30 selection:text-red-200">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Navigation / Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <img src={logoSamurai} alt="Samurai Fit" className="w-10 h-10 rounded-lg object-cover shadow-[0_0_15px_rgba(185,28,28,0.3)]" />
          <span className="font-oriental text-red-700 text-2xl drop-shadow-md tracking-wider">Samurai Fit</span>
        </div>
      </header>

      <main className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Eleve seu Treino ao <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 font-oriental font-normal drop-shadow-sm">Nível Samurai</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl font-medium">
              A disciplina e a força de um guerreiro agora na palma da sua mão. 
              Domine seu corpo e mente através do nosso aplicativo.
            </p>

            <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-5">Disponível em</p>
            <div className="flex flex-row items-start gap-3">
              <a href="#" className="flex flex-col items-start gap-1 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-xl shadow-lg">
                <p className="text-xs text-zinc-500 leading-none font-medium">Baixar na</p>
                <img src="/Apple_Store.png" alt="App Store" className="h-6 w-auto" />
              </a>
              <a href="#" className="flex flex-col items-start gap-1 bg-white hover:bg-zinc-100 active:scale-95 transition-all px-6 py-2.5 rounded-xl shadow-lg">
                <p className="text-xs text-zinc-500 leading-none font-medium">Baixar no</p>
                <img src="/Google_Play_2022_logo.svg.png" alt="Google Play" className="h-6 w-auto" />
              </a>
            </div>
          </div>

          {/* App Mockup */}
          <div className="lg:w-1/2 flex justify-center lg:justify-center lg:ml-8">
            <img
              src="/mockup-login.png"
              alt="Samurai Fit App"
              className="w-[340px] md:w-[420px] lg:w-[480px] drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Warlley Oliveira - Criador */}
        <section className="py-24 border-t border-zinc-900/50">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 max-w-5xl mx-auto">
            {/* Foto */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-red-900/20 blur-[60px] rounded-full pointer-events-none scale-110"></div>
              <img
                src="/warlley.jpeg"
                alt="Warlley Oliveira"
                className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-zinc-800 shadow-2xl shadow-red-900/20"
              />
            </div>

            {/* Texto */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-3">O Sensei</p>
              <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">Warlley Oliveira</h2>
              <p className="text-zinc-500 font-bold mb-6 text-sm uppercase tracking-widest">Personal Trainer &amp; Fundador do Dojo</p>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                Com anos de experiência transformando corpos e mentalidades, Warlley criou o Samurai Fit para levar 
                a excelência do seu método de treinamento a cada aluno — com a disciplina e precisão de um guerreiro.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-red-800"></div>
                <span className="font-oriental text-red-700 text-2xl">侍</span>
                <div className="h-px w-12 bg-red-800"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Suporte e Contato */}
        <section className="py-24 border-t border-zinc-900/50">
          <div className="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Precisa de Ajuda?</h2>
              <p className="text-zinc-400 mb-10 text-lg">
                Se você encontrou algum obstáculo em seu caminho ou tem dúvidas sobre o aplicativo, nosso suporte está pronto para ajudar.
              </p>
              
              <a href="mailto:suporte@samuraifit.com.br" className="inline-flex items-center gap-4 bg-zinc-950 border border-zinc-800 hover:border-red-900/50 px-8 py-5 rounded-2xl transition-all group">
                <div className="p-3 bg-red-900/20 text-red-600 rounded-xl group-hover:bg-red-900/40 transition-colors">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">E-mail de Suporte</p>
                  <p className="text-xl font-bold text-zinc-200 group-hover:text-red-400 transition-colors">suporte@samuraifit.com.br</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md py-12 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="font-oriental text-red-800 text-xl">Samurai Fit</span>
            <span className="text-zinc-600 text-sm font-medium">© {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/privacidade" className="text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
              Política de Privacidade <ChevronRight size={14} className="opacity-50" />
            </Link>
            <Link to="/termos" className="text-sm font-bold text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
              Termos de Uso <ChevronRight size={14} className="opacity-50" />
            </Link>
            <Link to="/excluir-conta" className="text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors flex items-center gap-1">
              Exclusão de Conta <ChevronRight size={14} className="opacity-50" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
