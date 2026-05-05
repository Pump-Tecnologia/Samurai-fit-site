import React from 'react';
import { Shield, Mail, ArrowRight, ChevronRight } from 'lucide-react';
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
          <div className="w-10 h-10 bg-red-800 rounded-md shadow-[0_0_15px_rgba(185,28,28,0.4)] border-2 border-red-900 flex items-center justify-center transform rotate-45 overflow-hidden">
            <span className="text-white text-lg font-black opacity-30 select-none font-oriental -rotate-45">侍</span>
          </div>
          <span className="font-oriental text-red-700 text-2xl drop-shadow-md tracking-wider">Samurai Fit</span>
        </div>
      </header>

      <main className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-32 h-32 bg-red-800 rounded-xl shadow-[0_0_30px_rgba(185,28,28,0.4)] border-4 border-red-900 transform rotate-45 flex items-center justify-center relative overflow-hidden mb-12 lg:mb-10">
              <div className="absolute inset-2 border border-red-700/50 rounded-lg"></div>
              <span className="text-white text-6xl font-black opacity-20 select-none font-oriental -rotate-45">侍</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Eleve seu Treino ao <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 font-oriental font-normal drop-shadow-sm">Nível Samurai</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-xl font-medium">
              A disciplina e a força de um guerreiro agora na palma da sua mão. 
              Domine seu corpo e mente através do nosso aplicativo.
            </p>

            <a href="#sobre" className="group bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-3xl font-black uppercase italic tracking-widest flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_30px_rgba(185,28,28,0.5)] active:scale-95">
              Conheça o Dojo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* App Mockup Placeholder */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col p-4 shadow-red-900/10">
              <div className="w-1/3 h-6 bg-zinc-950 rounded-b-xl mx-auto absolute top-0 left-0 right-0 z-20"></div>
              
              <div className="flex-1 w-full border border-zinc-800/50 rounded-[2rem] overflow-hidden relative bg-zinc-950 flex flex-col items-center justify-center p-6">
                <div className="w-24 h-24 bg-red-800 rounded-xl shadow-[0_0_30px_rgba(185,28,28,0.4)] border-4 border-red-900 transform rotate-45 flex items-center justify-center relative overflow-hidden mb-8">
                  <span className="text-white text-4xl font-black opacity-20 select-none font-oriental -rotate-45">侍</span>
                </div>
                <h3 className="font-oriental text-red-700 text-4xl mb-2">Samurai Fit</h3>
                <div className="w-full space-y-4 mt-8">
                  <div className="h-12 bg-zinc-900 border border-zinc-800 rounded-2xl w-full"></div>
                  <div className="h-12 bg-zinc-900 border border-zinc-800 rounded-2xl w-full"></div>
                  <div className="h-12 bg-red-900/50 border border-red-900 rounded-2xl w-full mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o App */}
        <section id="sobre" className="py-24 border-t border-zinc-900/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800 mb-8 shadow-lg text-red-700">
              <Shield size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Exclusivo para Guerreiros</h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
              O <span className="text-zinc-200 font-bold">Samurai Fit</span> não é apenas mais um aplicativo de treinos. 
              É uma ferramenta exclusiva forjada para os guerreiros do <span className="text-red-600 font-black italic">Dojo do Sensei Warlley</span>.
              Aqui, a tradição oriental se une à tecnologia para guiar você no Caminho da Maestria física e mental.
            </p>
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
