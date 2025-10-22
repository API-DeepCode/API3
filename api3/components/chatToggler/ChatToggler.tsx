import React, {useState} from 'react';

import { Chatbot } from '../globals/chatbot'; 


// --- Estilos Básicos (Posicionamento do botão e da tela do chat) ---
const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#E91E63', 
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    zIndex: 1000, 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
};

const chatWrapperStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px', 
    right: '20px',
    zIndex: 999,
};

export const ChatToggler: React.FC = () => {
    // 1. O estado que controla se a janela de chat está visível
    const [isOpen, setIsOpen] = useState(false);

    // 2. Função para alternar o estado (abrir/fechar)
    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // 3. Função que será passada como PROP para o Chatbot fechar a janela
    const handleCloseChat = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* 🖥 1. O Chat (A Pequena Tela) */}
            {isOpen && (
                <div style={chatWrapperStyle}>
                    {/* ⭐ CORREÇÃO: Usando a tag <Chatbot> */}
                    <Chatbot 
                        // Agora as props 'onClose' e 'titulo' são válidas!
                        onClose={handleCloseChat} 
                        titulo="Ajuda Rápida" 
                    />
                </div>
            )}

            {/* 🖱 2. O Botão de Alternância (Toggle Button) */}
            <button 
                style={buttonStyle}
                onClick={toggleChat}
            >
                {/* Ícone que muda: X se aberto, ? se fechado */}
                {isOpen ? 'X' : '?'}
            </button>
        </>
    );
};