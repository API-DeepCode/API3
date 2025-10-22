import React, { useState, useEffect, useCallback } from 'react';
import { ROTEIRO_CONVERSA } from './conversas'; // Importa o nosso roteiro de perguntas

// --- 1. Definição de Tipos e Props ---

// Define a interface para as Props que o componente PAI irá passar
export interface ChatProps {
    titulo: string;
    onClose: () => void; // Função para fechar o chat
}

// Define o tipo de uma única mensagem no histórico
type Mensagem = {
    texto: string;
    remetente: 'bot' | 'usuario'; 
};

// --- 2. Componente de Exibição de Mensagem (Display) ---

const MensagemDisplay: React.FC<{ mensagem: Mensagem }> = ({ mensagem }) => {
    const isBot = mensagem.remetente === 'bot';
    
    const style: React.CSSProperties = {
        padding: '10px 15px', 
        borderRadius: '20px', 
        margin: '5px 0',
        maxWidth: '80%', 
        alignSelf: isBot ? 'flex-start' : 'flex-end',
        
        backgroundColor: isBot ? '#1E314D' : '#E91E63', 
        color: 'white', 
        
        fontSize: '15px', 
        lineHeight: '1.4'
    };

    return <div style={style}>{mensagem.texto}</div>;
};

// --- 3. Componente Principal Chatbot (Atualizado para receber Props) ---

// ⭐ ATUALIZAÇÃO: Recebendo as props e usando a interface ChatProps
const Chatbot: React.FC<ChatProps> = ({ titulo, onClose }) => {
    const [historico, setHistorico] = useState<Mensagem[]>([]);
    const [etapaAtual, setEtapaAtual] = useState('INICIO');

    const resetConversa = useCallback(() => {
        setHistorico([]); 
        setEtapaAtual('INICIO'); 
    }, []);

    const exibirMensagemBot = useCallback((id: string) => {
        const etapa = ROTEIRO_CONVERSA[id];
        if (etapa) {
            const novaMensagem: Mensagem = { texto: etapa.pergunta, remetente: 'bot' };
            setHistorico(prev => [...prev, novaMensagem]);
        }
    }, []);

    const lidarComResposta = useCallback((opcaoTexto: string, proximoId: string) => {
        const mensagemUsuario: Mensagem = { texto: opcaoTexto, remetente: 'usuario' };
        setEtapaAtual(proximoId);
        setHistorico(prev => [...prev, mensagemUsuario]);
    }, []);
    
    useEffect(() => {
        if (etapaAtual) {
            exibirMensagemBot(etapaAtual);
        }
    }, [etapaAtual, exibirMensagemBot]);

    const etapaAtualDados = ROTEIRO_CONVERSA[etapaAtual];
    const opcoesDisponiveis = etapaAtualDados ? etapaAtualDados.opcoes : [];

    return (
        <div style={chatbotContainerStyle}>
            {/* ⭐ NOVO: Cabeçalho com Título e Botão de Fechar */}
            <div style={headerStyle}>
                <h3 style={{ margin: 0, color: 'white' }}>{titulo}</h3>
                <button 
                    onClick={onClose} 
                    style={closeButtonStyle}
                >
                    X
                </button>
            </div>

            {/* Área de Mensagens (Scrollable) */}
            <div style={mensagensContainerStyle}>
                {historico.map((msg, index) => (
                    <MensagemDisplay key={index} mensagem={msg} />
                ))}
            </div>

            {/* Área de Opções (Botões) */}
            <div style={opcoesContainerStyle}>
                {opcoesDisponiveis.map((opcao, index) => (
                    <button 
                        key={index}
                        onClick={() => lidarComResposta(opcao.texto, opcao.proximoId)}
                        style={buttonStyle}
                    >
                        {opcao.texto}
                    </button>
                ))}

                {/* Botão Voltar ao Início (Global) */}
                {etapaAtual !== 'INICIO' && (
                    <button
                        onClick={resetConversa}
                        style={backButtonStyle}
                    >
                        Voltar ao Início
                    </button>
                )}
            </div>
            
            {/* Mensagem de Encerramento */}
            {opcoesDisponiveis.length === 0 && (
                <p style={encerramentoStyle}>
                    Conversa finalizada.
                </p>
            )}
        </div>
    );
};

// ⭐ EXPORTAÇÃO CORRIGIDA: Voltamos para a Exportação Nomeada
// para manter a coerência com o seu código inicial "export const Chatbot"
export { Chatbot }; 


// --- 4. Estilos (CSS-in-JS) - Com novos estilos de cabeçalho ---

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '10px',
    marginBottom: '10px',
    borderBottom: '1px solid #1E314D',
};

const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: '#E91E63', // Rosa para destaque
    fontSize: '20px', // Aumentado para ser mais visível
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '5px',
    lineHeight: 1,
};

// --- 4. Estilos (CSS-in-JS) - ATUALIZADOS PARA O TEMA ESCURO ---

const chatbotContainerStyle: React.CSSProperties = {
    width: '350px',
    height: '500px',
    border: 'none', 
    borderRadius: '12px', 
    padding: '15px', 
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0A1929', // Azul escuro
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)' // Sombra escura
};

const mensagensContainerStyle: React.CSSProperties = {
    flexGrow: 1, 
    overflowY: 'auto',
    padding: '5px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
};

const opcoesContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', 
    borderTop: '1px solid #1E314D', // Divisor sutil e escuro
    paddingTop: '15px',
};

// Estilo para os botões de opção PRINCIPAIS (Rosa/Magenta)
const buttonStyle: React.CSSProperties = {
    padding: '12px 15px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#E91E63', 
    color: 'white',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
};

// NOVO ESTILO: Para o botão "Voltar ao Início" (Diferente da opção principal)
const backButtonStyle: React.CSSProperties = {
    ...buttonStyle, // Começa com o mesmo estilo
    backgroundColor: 'transparent', // Fundo transparente
    border: '1px solid #E91E63', // Borda Rosa
    color: '#E91E63', // Texto Rosa
    fontWeight: 'normal',
};


const encerramentoStyle: React.CSSProperties = {
    textAlign: 'center', 
    fontSize: '14px', 
    color: '#888', // Cinza claro para visibilidade
    marginTop: '10px'
};