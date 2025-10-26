import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function gerarRelatorioGemini(perguntasERespostas: any[]) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Monta o texto com as perguntas e respostas
  const textoBase = perguntasERespostas
    .map(
      (item, i) =>
        Pergunta ${i + 1}: ${item.pergunta}\nResposta: ${item.resposta}\n
    )
    .join("");

  // Prompt aprimorado
  const prompt = `
Você é uma IA especializada em diagnóstico empresarial e análise organizacional. 
Seu papel é gerar um *relatório analítico e detalhado* sobre a situação atual de uma empresa, 
com base nas respostas fornecidas a um questionário.
O relatório será lido por gestores e consultores empresariais que buscam entender o nível de maturidade da empresa.

As respostas abaixo representam as informações coletadas diretamente do cliente (empresa). 
Analise atentamente cada resposta e elabore um relatório coerente, objetivo e técnico, mostrando 
*o que a empresa já possui bem estruturado* e *o que ainda precisa melhorar*.

---
${textoBase}
---

### Diretrizes para o relatório:

1. *Objetivo:*  
   Elaborar um relatório claro e profissional que descreva a situação da empresa com base nas respostas, destacando:
   - Pontos fortes e boas práticas identificadas;  
   - Fragilidades, lacunas ou áreas que precisam de evolução;  
   - Interpretações e observações gerais sobre a maturidade e perfil organizacional.

2. *Estrutura sugerida:*  
   Divida a análise em *dimensões*, sempre que possível (por exemplo):
   - Pessoas & Cultura  
   - Estrutura & Operações  
   - Mercado & Clientes  
   - Direção & Futuro  
   (se alguma dimensão não for abordada nas respostas, omita-a naturalmente)

3. *Conteúdo de cada dimensão:*  
   - *Resumo da Situação:* visão geral do que foi percebido nas respostas.  
   - *Pontos Fortes:* comportamentos, recursos ou práticas já consolidadas.  
   - *Pontos de Melhoria:* carências, riscos ou oportunidades de aprimoramento.  
   - *Síntese Final:* comentário breve sobre o nível de maturidade dessa dimensão.

4. *Tom e estilo:*  
   - Linguagem consultiva, profissional e empática;  
   - Evite jargões excessivos ou termos muito técnicos;  
   - Use frases curtas e objetivas;  
   - Mantenha tom analítico, mas acessível para gestores e empresários.

5. *Saída esperada:*  
   Retorne *um texto contínuo bem formatado* (não em HTML), com títulos claros e divisões visuais entre as dimensões.  
   Use títulos em MAIÚSCULAS para cada seção (ex: "PESSOAS & CULTURA"), e separe as seções com linhas de “---”.  
   A primeira parte do texto deve funcionar como um *RESUMO EXECUTIVO GERAL*, seguido das análises por dimensão.

6. *Importante:*  
   Não gere recomendações de plano de ação, trilhas de desenvolvimento ou KPIs neste momento.  
   Foque apenas no diagnóstico e interpretação das respostas fornecidas.

Gere agora o relatório com base nas informações acima e nas respostas recebidas.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}