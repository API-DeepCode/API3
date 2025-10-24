import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function gerarRelatorioGemini(perguntasERespostas: any[]) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const textoBase = perguntasERespostas
    .map(
      (item, i) =>
        `Pergunta ${i + 1}: ${item.pergunta}\nResposta: ${item.resposta}\n`
    )
    .join("\n");

  const prompt = `
Você é um analista de negócios experiente.
Analise as respostas abaixo e gere um relatório com:

1. **Pontos fortes** da empresa  
2. **Pontos fracos ou oportunidades de melhoria**  
3. **Sugestões práticas de desenvolvimento**

Respostas:
${textoBase}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}