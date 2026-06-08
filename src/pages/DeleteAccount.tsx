import React from 'react';
import { AlertTriangle, Mail, Smartphone } from 'lucide-react';
import { SiteBackground, SiteFooter, LegalHeader, LegalTitle } from '../components/site';

const DeleteAccount: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      <SiteBackground />
      <LegalHeader />

      <main className="container mx-auto px-6 py-16 relative z-10 max-w-4xl">
        <LegalTitle
          eyebrow="O fim de um caminho"
          title={<>Solicitação de Exclusão de <span className="text-red-600">Conta</span></>}
          updatedAt="06 de Abril de 2026"
        />

        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg normal-case not-italic">
          <section>
            <p className="text-xl leading-relaxed">
              No <strong className="text-zinc-100">Samurai Fit</strong>, levamos a sua privacidade a sério. Se você deseja encerrar a sua jornada em nosso Dojo e solicitar a exclusão permanente da sua conta e dos seus dados pessoais, siga as instruções abaixo.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Opção 1: Pelo App */}
            <section className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-8 relative overflow-hidden group hover:border-red-900/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-900/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-900/15 rounded-2xl text-red-500"><Smartphone size={24} /></div>
                <h2 className="text-xl text-zinc-50">1. Pelo Aplicativo</h2>
              </div>
              <p className="text-zinc-500 mb-4 text-[11px] font-black uppercase tracking-widest">Se você ainda tem o aplicativo instalado:</p>
              <ol className="list-decimal pl-5 space-y-3 text-zinc-300 font-medium">
                <li>Abra o aplicativo Samurai Fit e faça login.</li>
                <li>Acesse a aba de <strong className="text-zinc-100">Perfil / Configurações</strong>.</li>
                <li>Procure pela opção <strong className="text-red-400">"Excluir Minha Conta"</strong>.</li>
                <li>Siga as instruções na tela para confirmar a exclusão.</li>
              </ol>
            </section>

            {/* Opção 2: Por E-mail */}
            <section className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-8 relative overflow-hidden group hover:border-red-900/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-900/20 transition-colors" />
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-900/15 rounded-2xl text-red-500"><Mail size={24} /></div>
                <h2 className="text-xl text-zinc-50">2. Por E-mail</h2>
              </div>
              <p className="text-zinc-500 mb-4 text-[11px] font-black uppercase tracking-widest">Se você já desinstalou o aplicativo:</p>
              <ol className="list-decimal pl-5 space-y-3 text-zinc-300 font-medium">
                <li>Envie um e-mail para <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 underline underline-offset-4">suporte@samuraifit.com.br</a>.</li>
                <li>Utilize o assunto: <strong className="text-zinc-100">"Solicitação de Exclusão de Conta"</strong>.</li>
                <li>Envie o e-mail a partir do <strong className="text-zinc-100">mesmo endereço</strong> que você utilizou para se cadastrar no aplicativo.</li>
                <li>No corpo do e-mail, informe o seu Nome Completo e, opcionalmente, o motivo de sua saída (seu feedback é importante para nós).</li>
              </ol>
            </section>
          </div>

          <section className="space-y-6 bg-red-950/10 border border-red-900/20 rounded-3xl p-8 md:p-10 mt-12">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="text-red-500" size={28} />
              <h2 className="text-xl md:text-2xl text-red-500">3. O que acontece após a solicitação?</h2>
            </div>
            <p className="text-zinc-300 mb-6">Ao solicitar a exclusão da sua conta:</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-zinc-50 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" /> Remoção de Dados
                </h3>
                <p className="text-zinc-400 pl-4 border-l border-zinc-800">
                  Seus dados de perfil, histórico de treinos, evolução física e protocolos gerados serão apagados permanentemente de nossos servidores.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-zinc-50 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" /> Irreversibilidade
                </h3>
                <p className="text-zinc-400 pl-4 border-l border-zinc-800">
                  Esta ação é irreversível. Uma vez excluída, não será possível recuperar sua conta ou seus dados. Para voltar a usar o Samurai Fit, será necessário criar um novo cadastro.
                </p>
              </div>

              <div>
                <h3 className="text-lg text-zinc-50 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" /> Prazos e Retenção Legal
                </h3>
                <p className="text-zinc-400 pl-4 border-l border-zinc-800">
                  O processo de exclusão será concluído em até <strong className="text-zinc-200">15 dias úteis</strong>. Ressaltamos que, por exigências legais e fiscais, informações relacionadas a transações financeiras e histórico de pagamentos (processados via PIX/Asaas) poderão ser mantidas em nossos registros pelo tempo estipulado por lei.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-zinc-900/60">
            <h2 className="text-xl md:text-2xl text-zinc-50 mb-4">Dúvidas?</h2>
            <p className="text-zinc-400">
              Se precisar de ajuda com este processo, nossa equipe de suporte está à disposição através do e-mail <br className="md:hidden" />
              <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-bold transition-colors mt-2 inline-block">suporte@samuraifit.com.br</a>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default DeleteAccount;
