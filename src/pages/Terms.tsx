import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoSamurai from '../assets/logo-samurai.peg.jpeg';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden font-sans selection:bg-red-900/30 selection:text-red-200">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-red-900/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10 border-b border-zinc-900/50 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors font-bold uppercase tracking-wider text-xs">
          <ArrowLeft size={16} />
          Voltar para o Dojo
        </Link>
        <div className="flex items-center gap-3">
          <img src={logoSamurai} alt="Samurai Fit" className="w-9 h-9 rounded-lg object-cover shadow-[0_0_15px_rgba(185,28,28,0.3)]" />
          <span className="font-oriental text-red-700 text-xl hidden sm:block">Samurai Fit</span>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 relative z-10 max-w-4xl">
         {/* Title */}
         <div className="mb-16">
           <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
             Termos e Condições de <span className="text-red-700 font-oriental font-normal drop-shadow-sm">Uso</span>
           </h1>
           <p className="text-zinc-500 font-medium text-lg">Última atualização: 06 de Abril de 2026</p>
         </div>

         {/* Content */}
         <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">
            <section>
              <p>
                Bem-vindo ao Samurai Fit. Estes Termos de Uso regulam o acesso e a utilização do aplicativo Samurai Fit, desenvolvido pela <strong className="text-zinc-100">Pump Software</strong>. Ao baixar, acessar ou utilizar o nosso aplicativo, você concorda expressamente com estes termos. Se você não concorda com qualquer parte destes termos, não deve utilizar o aplicativo.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">1. Natureza do Serviço</h2>
              <p>
                O Samurai Fit é uma plataforma digital projetada para auxiliar professores (Senseis) na gestão de alunos (Clã), prescrição de treinos, organização financeira e acompanhamento de rotinas de exercícios físicos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">2. Aviso de Saúde e Isenção de Responsabilidade Médica</h2>
              <div className="bg-red-900/10 border border-red-900/20 p-6 rounded-2xl">
                <p className="font-bold text-red-500 mb-2 uppercase tracking-widest text-sm">Atenção:</p>
                <p className="text-red-200">
                  O Samurai Fit fornece ferramentas de gestão de treinos e protocolos de exercícios, mas não substitui o aconselhamento médico profissional, diagnóstico ou tratamento.
                </p>
              </div>
              <p>
                Recomendamos fortemente que todo usuário consulte um médico ou profissional de saúde qualificado antes de iniciar qualquer programa de exercícios ou protocolo de treinamento disponível no aplicativo.
              </p>
              <p>
                O uso das informações e treinos fornecidos no aplicativo é de sua inteira responsabilidade. O Samurai Fit e seus desenvolvedores não se responsabilizam por lesões, danos físicos ou problemas de saúde decorrentes da execução dos treinos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">3. Cadastro e Segurança da Conta</h2>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li>Para acessar os recursos do aplicativo, você deve fornecer informações precisas e completas (Nome, CPF/CNPJ, E-mail) durante o cadastro.</li>
                <li>Você é o único responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram sob sua conta.</li>
                <li>O acesso ao conteúdo é pessoal e intransferível.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">4. Pagamentos e Assinaturas</h2>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li>O Samurai Fit utiliza plataformas terceirizadas parceiras (como o Asaas) para o processamento de pagamentos e assinaturas (ex: PIX).</li>
                <li>Os valores das mensalidades são estipulados pelo Professor (Sensei) responsável pelo seu treinamento.</li>
                <li>A liberação de acesso às funcionalidades exclusivas do aplicativo está condicionada à confirmação do pagamento. Em caso de inadimplência, o acesso aos treinos poderá ser suspenso automaticamente até a regularização.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">5. Exclusão de Conta e Dados</h2>
              <p>Respeitamos o seu direito ao esquecimento e o controle sobre seus dados.</p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-400">
                <li>Você pode solicitar a exclusão permanente da sua conta e de todos os seus dados pessoais a qualquer momento.</li>
                <li>
                  Para solicitar a exclusão, envie um e-mail para <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 transition-colors">suporte@samuraifit.com.br</a> com o assunto "Exclusão de Conta", ou utilize a opção correspondente nas configurações do aplicativo (se aplicável). Os dados serão removidos de nossos servidores no prazo estipulado por lei, ressalvados os dados de transações financeiras que precisem ser mantidos para cumprimento de obrigações fiscais.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">6. Propriedade Intelectual</h2>
              <p>
                Todos os direitos de propriedade intelectual relacionados ao aplicativo Samurai Fit, incluindo, mas não se limitando a códigos, design, logotipos, textos, gráficos e inteligência artificial (prompts e arquitetura), são de propriedade exclusiva da <strong className="text-zinc-100">Pump Software</strong>. É estritamente proibida a cópia, modificação, distribuição ou engenharia reversa de qualquer parte do software.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">7. Modificações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Caso ocorram alterações significativas, os usuários serão notificados através do próprio aplicativo ou por e-mail. O uso contínuo do aplicativo após as alterações constitui a aceitação dos novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-100 border-l-4 border-red-700 pl-4">8. Contato</h2>
              <p>
                Se você tiver qualquer dúvida sobre estes Termos de Uso, entre em contato com nosso suporte através do e-mail: <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-bold transition-colors">suporte@samuraifit.com.br</a>.
              </p>
            </section>
         </div>
      </main>

      {/* Footer minimalista */}
      <footer className="border-t border-zinc-900 mt-12 py-10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-2">
          <span className="font-oriental text-red-800 text-2xl">Samurai Fit</span>
          <span className="text-zinc-600 text-sm font-medium">© {new Date().getFullYear()} Pump Software. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
};

export default Terms;