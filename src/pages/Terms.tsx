import React from 'react';
import { SiteBackground, SiteFooter, LegalHeader, LegalTitle, SectionHeading } from '../components/site';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      <SiteBackground />
      <LegalHeader />

      <main className="container mx-auto px-6 py-16 relative z-10 max-w-4xl">
        <LegalTitle
          eyebrow="O código do guerreiro"
          title={<>Termos e Condições de <span className="text-red-600">Uso</span></>}
          updatedAt="06 de Abril de 2026"
        />

        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg normal-case not-italic">
          <section>
            <p>
              Bem-vindo ao Samurai Fit. Estes Termos de Uso regulam o acesso e a utilização do aplicativo Samurai Fit, desenvolvido pela <strong className="text-zinc-100">Pump Software</strong>. Ao baixar, acessar ou utilizar o nosso aplicativo, você concorda expressamente com estes termos. Se você não concorda com qualquer parte destes termos, não deve utilizar o aplicativo.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>1. Natureza do Serviço</SectionHeading>
            <p>
              O Samurai Fit é uma plataforma digital projetada para auxiliar professores (Senseis) na gestão de alunos (Clã), prescrição de treinos, organização financeira e acompanhamento de rotinas de exercícios físicos.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>2. Aviso de Saúde e Isenção de Responsabilidade Médica</SectionHeading>
            <div className="bg-red-900/10 border border-red-900/20 p-6 rounded-2xl">
              <p className="font-black text-red-500 mb-2 uppercase tracking-widest text-sm italic">Atenção:</p>
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
            <SectionHeading>3. Cadastro e Segurança da Conta</SectionHeading>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400">
              <li>Para acessar os recursos do aplicativo, você deve fornecer informações precisas e completas (Nome, CPF/CNPJ, E-mail) durante o cadastro.</li>
              <li>Você é o único responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram sob sua conta.</li>
              <li>O acesso ao conteúdo é pessoal e intransferível.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>4. Pagamentos e Assinaturas</SectionHeading>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400">
              <li>O Samurai Fit utiliza plataformas terceirizadas parceiras (como o Asaas) para o processamento de pagamentos e assinaturas (ex: PIX).</li>
              <li>Os valores das mensalidades são estipulados pelo Professor (Sensei) responsável pelo seu treinamento.</li>
              <li>A liberação de acesso às funcionalidades exclusivas do aplicativo está condicionada à confirmação do pagamento. Em caso de inadimplência, o acesso aos treinos poderá ser suspenso automaticamente até a regularização.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>5. Exclusão de Conta e Dados</SectionHeading>
            <p>Respeitamos o seu direito ao esquecimento e o controle sobre seus dados.</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400">
              <li>Você pode solicitar a exclusão permanente da sua conta e de todos os seus dados pessoais a qualquer momento.</li>
              <li>
                Para solicitar a exclusão, envie um e-mail para <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 transition-colors">suporte@samuraifit.com.br</a> com o assunto "Exclusão de Conta", ou utilize a opção correspondente nas configurações do aplicativo (se aplicável). Os dados serão removidos de nossos servidores no prazo estipulado por lei, ressalvados os dados de transações financeiras que precisem ser mantidos para cumprimento de obrigações fiscais.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>6. Propriedade Intelectual</SectionHeading>
            <p>
              Todos os direitos de propriedade intelectual relacionados ao aplicativo Samurai Fit, incluindo, mas não se limitando a códigos, design, logotipos, textos, gráficos e inteligência artificial (prompts e arquitetura), são de propriedade exclusiva da <strong className="text-zinc-100">Pump Software</strong>. É estritamente proibida a cópia, modificação, distribuição ou engenharia reversa de qualquer parte do software.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>7. Modificações nos Termos</SectionHeading>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Caso ocorram alterações significativas, os usuários serão notificados através do próprio aplicativo ou por e-mail. O uso contínuo do aplicativo após as alterações constitui a aceitação dos novos termos.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>8. Contato</SectionHeading>
            <p>
              Se você tiver qualquer dúvida sobre estes Termos de Uso, entre em contato com nosso suporte através do e-mail: <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-bold transition-colors">suporte@samuraifit.com.br</a>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Terms;
