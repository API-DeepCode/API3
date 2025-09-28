"use client";


import { useEffect, useState } from "react";
import { teste } from "@/lib/type";
import styles from '@/components/forms/styles/AiPage.module.css';


export default function AIanswer() {
  const [diagnostico, setDiagnostico] = useState("");
  const [loading, setLoading] = useState(true);
  
  // States para o chatbot
  const [input, setInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  // useEffect para gerar o diagnóstico inicial automaticamente
  useEffect(() => {
    async function fetchAndGenerateReport() {
      try {
        const res = await fetch("/api");
        const data: teste[] = await res.json();
        
        if (data && data.length > 0) {
          const latestAnswers = data[data.length - 1]; 
          const initialPrompt = createInitialPrompt(latestAnswers);
          const report = await sendPromptToAI(initialPrompt);
          setDiagnostico(report);
        } else {
            setDiagnostico("Nenhuma resposta de formulário foi encontrada para gerar o relatório.");
        }
      } catch (err) {
        console.error("Erro ao buscar dados ou gerar relatório:", err);
        setDiagnostico("Ocorreu um erro ao gerar o relatório. Verifique o console para mais detalhes.");
      } finally {
        setLoading(false);
      }
    }

    fetchAndGenerateReport();
  }, []);

  // Função para criar o prompt inicial, BASEADA NO DOCUMENTO "QUESTIONÁRIO INTELIGENTE"
  // Função para criar o prompt inicial, BASEADA NO DOCUMENTO "QUESTIONÁRIO INTELIGENTE"
function createInitialPrompt(answers: teste): string {
  return `
Você é um consultor de desenvolvimento organizacional. Sua tarefa é gerar um **Relatório de Retrato Inicial** de uma empresa com base nas respostas de um mini-diagnóstico, escreva com formatação sem deixar o texto em negrito ou itálico, use apenas texto simples.  

### Objetivo  
O relatório será usado como **ponto de partida para uma conversa consultiva** com a empresa, portanto deve valorizar os pontos fortes já existentes e apresentar as oportunidades de melhoria como espaços para evolução.  

### Estrutura esperada do relatório  
1. **Introdução**  
   - Breve abertura acolhedora, agradecendo pelas respostas.  
   - Contextualize que o relatório é uma fotografia inicial, não um diagnóstico definitivo.  

2. **Análise por Dimensão**  
   Para cada dimensão, escreva nos seguintes blocos:  
   - **O que já acontece bem**  
   - **O que pode ser fortalecido**  
   - **Por que isso importa**  
   - **Próximos passos possíveis**  

   Dimensões e respostas:  
   - **Pessoas & Cultura**  
     - Comunicação: ${answers.Pergunta1 || "Não respondida"}  
     - Liderança: ${answers.Pergunta2 || "Não respondida"}  
     - Resolução de problemas: ${answers.Pergunta3 || "Não respondida"}  

   - **Mercado & Clientes**  
     - Ouvir clientes: ${answers.Pergunta4 || "Não respondida"}  
     - Vendas e Atendimento: ${answers.Pergunta5 || "Não respondida"}  

   - **Estrutura & Operações**  
     - Troca de informações: ${answers.Pergunta6 || "Não respondida"}  
     - Delegação: ${answers.Pergunta7 || "Não respondida"}  
     - Falha de processos: ${answers.Pergunta8 || "Não respondida"}  

   - **Direção & Futuro**  
     - Comunicação da visão: ${answers.Pergunta9 || "Não respondida"}  
     - Conexão com a estratégia: ${answers.Pergunta10 || "Não respondida"}  

3. **Reflexão Ampliada**  
   - Um parágrafo integrando as quatro dimensões, destacando como elas se conectam.  

4. **E agora?**  
   - Encerramento inspirador, incentivando a empresa a usar esse retrato como base para próximas conversas e ações.  

### Tom de Voz  
- Consultivo, encorajador e construtivo.  
- Valorizar conquistas atuais.  
- Tratar pontos de melhoria como **potencial de evolução**.  
- Linguagem clara e acessível.  
`;
}


  async function sendPromptToAI(prompt: string): Promise<string> {
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Erro ao chamar a API:", errorData);
      return "Falha ao obter resposta da IA. Verifique os detalhes no console do navegador.";
    }

    const data = await res.json();
    return data.response;
  }

  async function handleChatSubmit() {
    if (!input.trim()) return;

    setIsChatLoading(true);
    setChatResponse("");
    
    const chatPrompt = `Com base no diagnóstico ("Retrato Inicial") gerado anteriormente e nas respostas do formulário, responda a seguinte pergunta do usuário: "${input}". Seja conciso e direto na resposta.`;
    
    const response = await sendPromptToAI(chatPrompt);
    setChatResponse(response);
    setIsChatLoading(false);
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="font-bold text-2xl mb-4 text-gray-800">Seu Retrato Inicial</h1>
      <section className={styles.scrollSection}>
        {loading ? (
          <p className="text-gray-600">Analisando dados e gerando seu diagnóstico...</p>
        ) : (
          // AQUI ESTÁ A CORREÇÃO!
          <p className="whitespace-pre-wrap text-gray-700">{diagnostico}</p>
        )}
      </section>

      <h2 className="font-bold text-xl mb-3 text-gray-800">Tem alguma dúvida sobre o diagnóstico? Pergunte aqui!</h2>
      <div className="bg-white p-6 border rounded-lg shadow-md">
        <textarea
          className="text-black border-gray-300 rounded-md shadow-sm p-2 w-full focus:ring focus:ring-blue-200 focus:border-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Como podemos melhorar a comunicação da visão da empresa?"
          rows={3}
        />
        <button
          onClick={handleChatSubmit}
          disabled={isChatLoading || loading}
          className="mt-3 bg-blue-900 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isChatLoading ? 'Pensando...' : 'Enviar Pergunta'}
        </button>
        
        {isChatLoading && <p className="mt-4 text-gray-600">Aguarde, buscando a melhor resposta...</p>}

        {chatResponse && (
            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                <p className="font-semibold text-gray-800">Resposta:</p>
                {/* AQUI ESTÁ A CORREÇÃO TAMBÉM! */}
                <p className="whitespace-pre-wrap text-gray-700">{chatResponse}</p>
            </div>
        )}
      </div>
    </div>
  );
}