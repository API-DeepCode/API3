// src/conversas.ts

// 1. Definição da Estrutura dos Tipos (para segurança do código)
type Opcao = {
    texto: string;         // O texto que aparece no botão
    proximoId: string;     // O ID da próxima pergunta na conversa
};

type EtapaConversa = {
    pergunta: string;      // O texto que o bot fala
    opcoes: Opcao[];       // As opções de resposta do usuário (os botões)
};

// 2. O Roteiro da Conversa (as perguntas pré-definidas)
// A chave é o ID da etapa ('INICIO', 'PRODUTOS', etc.)
export const ROTEIRO_CONVERSA: Record<string, EtapaConversa> = {
    INICIO: {
        pergunta: "Olá! Seja bem-vindo(a). Em que posso te ajudar hoje?",
        opcoes: [
            { texto: "Como funciona o teste?", proximoId: "PRODUTOS" },
            { texto: "O que é cada dimenção", proximoId: "PAGAMENTO" },
            { texto: "Como recebo o relatório", proximoId: "ENCERRAMENTO_ATENDENTE" },
            { texto: "Como comprar as trilhas", proximoId: "TRILHAS" },
        ],
    },
    
    PRODUTOS: {
        pergunta: "O teste funciona da seguinte forma...",
        opcoes: [
          //  { texto: "Eletrônicos", proximoId: "ELETRONICOS" },
            //{ texto: "Vestuário", proximoId: "VESTUARIO" },
            //{ texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },
    
    ELETRONICOS: {
        pergunta: "Temos um catálogo completo em nosso site! Deseja mais informações ou finalizar?",
        opcoes: [
            { texto: "Finalizar atendimento", proximoId: "ENCERRAMENTO_SUCESSO" },
        ],
    },

    // Etapas Finais
    PAGAMENTO: {
        pergunta: "As dimenções funcionam da seguinte maneira...",
        opcoes: [
            { texto: "Finalizar atendimento", proximoId: "ENCERRAMENTO_SUCESSO" },
        ],
    },

    ENCERRAMENTO_ATENDENTE: {
        pergunta: "Você irá receber seu relatório da seguinte forma...",
        opcoes: [], // Sem mais opções, conversa encerrada.
    },

    ENCERRAMENTO_SUCESSO: {
        pergunta: "Fico feliz em ter ajudado. Tenha um ótimo dia!",
        opcoes: [], // Sem mais opções, conversa encerrada.
    },

    TRILHAS: {
        pergunta: "As trilhas funcionam assim...",
        opcoes: [], // Sem mais opções, conversa encerrada.
    },
};