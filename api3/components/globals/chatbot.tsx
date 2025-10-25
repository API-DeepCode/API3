// Caminho: api3/components/globals/chatbot.tsx

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ROTEIRO_CONVERSA } from './conversas';
import { Button } from '@/components/ui/button';
import { X, RotateCcw } from 'lucide-react';
import { cn } from "@/components/ui/utils";

// Tipos de dados
export interface ChatProps {
  titulo: string;
  onClose: () => void;
}

type Mensagem = {
  texto: string;
  remetente: 'bot' | 'user';
};

// Exibição de mensagens (mantendo estilo escuro)
const MensagemDisplay: React.FC<{ mensagem: Mensagem }> = ({ mensagem }) => {
  const isBot = mensagem.remetente === 'bot';
  return (
    <div
      className={cn(
        "py-2 px-3.5 rounded-lg max-w-[85%] text-sm leading-snug break-words shadow-sm",
        isBot
          ? "bg-gray-700 text-gray-100 self-start rounded-bl-sm"
          : "bg-primary text-primary-foreground self-end rounded-br-sm"
      )}
    >
      <p dangerouslySetInnerHTML={{ __html: mensagem.texto.replace(/\n/g, '<br />') }} />
    </div>
  );
};

// Componente principal Chatbot
const Chatbot: React.FC<ChatProps> = ({ titulo, onClose }) => {
  const [historico, setHistorico] = useState<Mensagem[]>([]);
  const [etapaAtual, setEtapaAtual] = useState('INICIO');
  const mensagensEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático
  const scrollToBottom = () => {
    mensagensEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset da conversa
  const resetConversa = useCallback(() => {
    setHistorico([]);
    setEtapaAtual('INICIO');
  }, []);

  // Exibir mensagem do bot
  const exibirMensagemBot = useCallback((id: string) => {
    const etapa = ROTEIRO_CONVERSA[id];
    if (!etapa) return;

    setHistorico((prev) => [
      ...prev,
      { texto: etapa.pergunta, remetente: 'bot' },
    ]);
  }, []);

  // Lidar com resposta do usuário
  const lidarComResposta = useCallback(
    (opcaoTexto: string, proximoId: string) => {
      setHistorico((prev) => [
        ...prev,
        { texto: opcaoTexto, remetente: 'user' },
      ]);
      setEtapaAtual(proximoId);
    },
    []
  );

  // Efeitos
  useEffect(() => {
    scrollToBottom();
  }, [historico]);

  useEffect(() => {
    if (etapaAtual) exibirMensagemBot(etapaAtual);
  }, [etapaAtual, exibirMensagemBot]);

  useEffect(() => {
    resetConversa();
  }, [resetConversa]);

  const etapaAtualDados = ROTEIRO_CONVERSA[etapaAtual];
  const opcoesDisponiveis = etapaAtualDados ? etapaAtualDados.opcoes : [];

  return (
    <div className="w-80 sm:w-96 h-[500px] bg-[#1C1B29] border border-gray-700/50 rounded-lg shadow-xl flex flex-col overflow-hidden text-gray-200">
      {/* Cabeçalho com gradiente igual ao título principal */}
      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-violet-200 to-fuchsia-300 text-gray-900 shadow-md">
        <h3 className="text-base font-semibold">{titulo}</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 text-gray-800 hover:text-gray-900 hover:bg-white/20 rounded-full transition-all duration-300"
        >
          <X size={20} />
        </Button>
      </div>

      {/* Área de mensagens */}
      <div className="flex-grow overflow-y-auto p-4 space-y-3 flex flex-col bg-[#1C1B29] text-gray-100">
        {historico.map((msg, index) => (
          <MensagemDisplay key={index} mensagem={msg} />
        ))}
        <div ref={mensagensEndRef} />
      </div>

      {/* Opções de resposta */}
      <div className="p-4 border-t border-gray-700/40 space-y-2 bg-[#13121D]">
        {opcoesDisponiveis.map((opcao, index) => (
          <Button
            key={index}
            variant="secondary"
            size="sm"
            className="w-full justify-start text-left h-auto py-2 px-3 bg-[#27253A] text-violet-200 hover:bg-[#3B3757] hover:text-fuchsia-200 focus:ring-fuchsia-400 rounded-md transition-all duration-300"
            onClick={() => lidarComResposta(opcao.texto, opcao.proximoId)}
          >
            {opcao.texto}
          </Button>
        ))}

        {/* Botão de reiniciar conversa */}
        {(etapaAtual !== 'INICIO' || historico.length > 1) &&
          opcoesDisponiveis.length === 0 &&
          ROTEIRO_CONVERSA[etapaAtual]?.opcoes.length === 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center text-left h-auto py-2 px-3 text-gray-400 hover:bg-[#27253A] hover:text-violet-200 rounded-md transition-all duration-300"
              onClick={resetConversa}
            >
              <RotateCcw size={16} className="mr-2" /> Reiniciar Conversa
            </Button>
          )}
      </div>
    </div>
  );
};

export { Chatbot };
