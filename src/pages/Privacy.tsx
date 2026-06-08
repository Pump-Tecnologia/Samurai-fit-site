import React from 'react';
import { SiteBackground, SiteFooter, LegalHeader, LegalTitle, SectionHeading } from '../components/site';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden selection:bg-red-900/30 selection:text-red-200">
      <SiteBackground />
      <LegalHeader />

      <main className="container mx-auto px-6 py-16 relative z-10 max-w-4xl">
        <LegalTitle
          eyebrow="Seus dados, sua honra"
          title={<>Política de <span className="text-red-600">Privacidade</span></>}
          updatedAt="06 de Abril de 2026"
        />

        {/* Corpo — texto normal (sem uppercase/itálico dos títulos) */}
        <div className="space-y-12 text-zinc-300 leading-relaxed text-lg normal-case not-italic">
          <section>
            <p>
              A privacidade e a segurança dos seus dados são prioridades para o Samurai Fit e para a <strong className="text-zinc-100">Pump Software</strong>. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as suas informações pessoais ao utilizar o nosso aplicativo.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>1. Dados que Coletamos</SectionHeading>
            <p>Para garantir o funcionamento adequado do Dojo e a prestação dos nossos serviços, coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mt-4">
              <li><strong className="text-zinc-200">Dados de Cadastro:</strong> Nome completo, e-mail e CPF/CNPJ. O CPF/CNPJ é estritamente necessário para a emissão de cobranças e integração com gateways de pagamento.</li>
              <li><strong className="text-zinc-200">Dados Físicos e de Saúde:</strong> Informações fornecidas voluntariamente por você ou pelo seu Professor (Sensei), como peso, altura, objetivos fitness e histórico de treinos, para a personalização adequada dos protocolos.</li>
              <li><strong className="text-zinc-200">Dados Financeiros:</strong> Status de pagamentos e histórico de mensalidades. <span className="text-red-400 italic">Nota: Não armazenamos dados de cartão de crédito.</span> Todo o processamento de pagamentos (como o PIX) é gerido de forma segura pelo nosso parceiro de pagamentos (Asaas).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>2. Como Usamos seus Dados</SectionHeading>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mt-4">
              <li>Criar e gerenciar sua conta de acesso (Aluno ou Sensei).</li>
              <li>Gerar rotinas de exercícios, protocolos e acompanhamento de evolução física.</li>
              <li>Processar pagamentos de mensalidades e verificar seu status financeiro (acesso ativo/inativo).</li>
              <li>Utilizar Inteligência Artificial para sugerir protocolos de treino baseados nos objetivos inseridos pelo Professor (seus dados pessoais identificáveis não são usados para treinar modelos públicos de IA).</li>
              <li>Enviar comunicações importantes sobre a sua conta, atualizações do aplicativo ou pendências financeiras.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>3. Compartilhamento de Dados</SectionHeading>
            <p>
              O Samurai Fit não vende ou aluga seus dados pessoais. Compartilhamos informações apenas com parceiros essenciais para o funcionamento do aplicativo:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mt-4">
              <li><strong className="text-zinc-200">Gateways de Pagamento (Asaas):</strong> Compartilhamos Nome, E-mail e CPF/CNPJ exclusivamente para a geração de cobranças (PIX) e verificação de pagamentos.</li>
              <li><strong className="text-zinc-200">Provedores de Infraestrutura (Supabase):</strong> Utilizamos serviços em nuvem seguros para armazenar o banco de dados do aplicativo.</li>
              <li><strong className="text-zinc-200">Serviços de Inteligência Artificial:</strong> Dados anonimizados de treinos e objetivos podem ser processados por APIs de IA (como Google Gemini ou OpenAI) unicamente para gerar os protocolos solicitados pelo Professor.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <SectionHeading>4. Segurança dos Dados</SectionHeading>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais (como criptografia e controle de acesso via RLS - Row Level Security) para proteger seus dados contra acessos não autorizados, perdas ou alterações.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>5. Seus Direitos e Exclusão de Conta</SectionHeading>
            <p>Em conformidade com as leis de proteção de dados (como a LGPD) e as diretrizes das lojas de aplicativos, você tem controle total sobre suas informações:</p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-400 mt-4">
              <li><strong className="text-zinc-200">Direito de Acesso e Correção:</strong> Você pode visualizar e atualizar seus dados diretamente no perfil do aplicativo.</li>
              <li><strong className="text-zinc-200">Direito de Exclusão (Apagar Dados):</strong> Você pode solicitar a exclusão permanente da sua conta e de todas as suas informações pessoais a qualquer momento. Para isso, envie um e-mail para <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 transition-colors">suporte@samuraifit.com.br</a> com o assunto "Exclusão de Conta".</li>
            </ul>
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl mt-4">
              <p className="text-zinc-400 text-base">
                Após a solicitação, seus dados serão removidos de nossos servidores em até 15 dias, exceto aqueles que somos obrigados a reter por obrigações legais ou fiscais (como histórico de faturamento).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionHeading>6. Alterações nesta Política</SectionHeading>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Sempre que houver mudanças significativas, avisaremos através do aplicativo ou por e-mail. A data da última atualização estará sempre no topo desta página.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading>7. Contato e Encarregado de Dados</SectionHeading>
            <p>
              Se você tiver qualquer dúvida sobre o uso dos seus dados ou sobre esta política, entre em contato através do e-mail: <a href="mailto:suporte@samuraifit.com.br" className="text-red-500 hover:text-red-400 font-bold transition-colors">suporte@samuraifit.com.br</a>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Privacy;
