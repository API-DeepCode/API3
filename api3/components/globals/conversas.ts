// src/conversas.ts

type Opcao = {
    texto: string;
    proximoId: string;
};

type EtapaConversa = {
    pergunta: string;
    opcoes: Opcao[];
};

export const ROTEIRO_CONVERSA: Record<string, EtapaConversa> = {
    INICIO: {
        pergunta: "👋 Olá! Seja bem-vindo(a) à nossa plataforma de desenvolvimento corporativo. Como posso te ajudar hoje?",
        opcoes: [
            { texto: "Quero entender como funciona o teste", proximoId: "TESTE" },
            { texto: "O que são as dimensões avaliadas?", proximoId: "DIMENSOES" },
            { texto: "Como recebo meu relatório final?", proximoId: "RELATORIO" },
            { texto: "Como posso adquirir as trilhas de aprendizagem?", proximoId: "TRILHAS" },
        ],
    },

    TESTE: {
        pergunta: "🧠 Nosso teste foi desenvolvido para identificar as competências e estilos comportamentais dos colaboradores. Ele leva em média 10 a 15 minutos e, ao final, gera um relatório completo com resultados personalizados.",
        opcoes: [
            { texto: "Quais tipos de resultados eu recebo?", proximoId: "RELATORIO" },
            { texto: "Posso aplicar o teste na minha empresa?", proximoId: "EMPRESAS" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    DIMENSOES: {
        pergunta: "📊 As dimensões representam diferentes aspectos comportamentais e profissionais avaliados no teste, como liderança, colaboração, inovação e foco em resultados. Cada dimensão ajuda a entender melhor os pontos fortes e áreas de desenvolvimento de cada pessoa.",
        opcoes: [
            { texto: "Pode me dar um exemplo prático?", proximoId: "EXEMPLO_DIMENSAO" },
            { texto: "Quero saber sobre o relatório", proximoId: "RELATORIO" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    EXEMPLO_DIMENSAO: {
        pergunta: "💡 Por exemplo: a dimensão 'Liderança' avalia como o profissional se comporta em situações que exigem iniciativa, tomada de decisão e gestão de pessoas. Já 'Colaboração' mede a capacidade de trabalhar em equipe e lidar com diferentes perfis.",
        opcoes: [
            { texto: "Interessante! E o relatório mostra isso?", proximoId: "RELATORIO" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    RELATORIO: {
        pergunta: "📄 O relatório é gerado automaticamente após a conclusão do teste. Você recebe um documento com análises detalhadas, gráficos e recomendações personalizadas para cada dimensão avaliada. Ele pode ser enviado por e-mail ou acessado diretamente na plataforma.",
        opcoes: [
            { texto: "Como posso aplicar o teste para minha equipe?", proximoId: "EMPRESAS" },
            { texto: "Quero ver os planos disponíveis", proximoId: "TRILHAS" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    EMPRESAS: {
        pergunta: "🏢 Sim! Nossa plataforma foi criada especialmente para uso corporativo. As empresas podem cadastrar colaboradores, acompanhar os resultados em tempo real e receber relatórios consolidados com métricas de desempenho e engajamento.",
        opcoes: [
            { texto: "Como contratar o serviço?", proximoId: "TRILHAS" },
            { texto: "Gostaria de uma demonstração", proximoId: "DEMO" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    TRILHAS: {
        pergunta: "🎯 As trilhas de aprendizagem são conjuntos de cursos e atividades personalizadas com base nos resultados dos testes. Elas ajudam a desenvolver as competências mais relevantes para cada colaborador ou equipe.",
        opcoes: [
            { texto: "Quero saber os planos disponíveis", proximoId: "PLANOS" },
            { texto: "Posso personalizar uma trilha?", proximoId: "PERSONALIZAR" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    PLANOS: {
        pergunta: "💼 Oferecemos três planos principais: *Essencial*, *Profissional* e *Corporativo*. Cada um inclui diferentes recursos, desde relatórios individuais até dashboards analíticos e suporte especializado.",
        opcoes: [
            { texto: "Quero contratar um plano", proximoId: "DEMO" },
            { texto: "Ver diferenças entre planos", proximoId: "DIFERENCA_PLANOS" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    DIFERENCA_PLANOS: {
        pergunta: "🔍 O plano *Essencial* é ideal para pequenas equipes. O *Profissional* traz acompanhamento em tempo real e relatórios comparativos. Já o *Corporativo* oferece personalização total e integração com sistemas internos da empresa.",
        opcoes: [
            { texto: "Solicitar proposta personalizada", proximoId: "DEMO" },
            { texto: "Voltar aos planos", proximoId: "PLANOS" },
        ],
    },

    PERSONALIZAR: {
        pergunta: "⚙️ Claro! As trilhas podem ser personalizadas conforme as necessidades da sua empresa. Você pode escolher as competências desejadas, definir a sequência de aprendizado e até integrar conteúdos próprios.",
        opcoes: [
            { texto: "Solicitar demonstração", proximoId: "DEMO" },
            { texto: "Ver planos disponíveis", proximoId: "PLANOS" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    DEMO: {
        pergunta: "📅 Perfeito! Você pode agendar uma demonstração com um de nossos especialistas para conhecer todos os recursos da plataforma e receber uma proposta personalizada.",
        opcoes: [
            { texto: "Agendar demonstração", proximoId: "ENCERRAMENTO_SUCESSO" },
            { texto: "Voltar ao início", proximoId: "INICIO" },
        ],
    },

    ENCERRAMENTO_SUCESSO: {
        pergunta: "✨ Fico feliz em ter ajudado! Se precisar de mais informações, estarei por aqui. Tenha um excelente dia!",
        opcoes: [],
    },
};
