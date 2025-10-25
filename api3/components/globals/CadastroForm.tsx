import React, { useState } from 'react';

import './CadastroForm.css'; 

// 1. INTERFACE ATUALIZADA para os novos campos
interface CadastroData {
  nomeEmpresa: string;
  cnpj: string;
  email: string;
  telefone: string;
  nomeResponsavel: string;
  cargoResponsavel: string;
  cidadeEstado: string;
}

const CadastroForm: React.FC = () => {
  // 2. ESTADO INICIAL ATUALIZADO
  const [formData, setFormData] = useState<CadastroData>({
    nomeEmpresa: '',
    cnpj: '',
    email: '',
    telefone: '',
    nomeResponsavel: '',
    cargoResponsavel: '',
    cidadeEstado: '',
  });
  
  const [erro, setErro] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.target.name deve corresponder às chaves da interface (e.g., 'nomeEmpresa', 'cnpj')
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (erro) setErro('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 3. LÓGICA DE VALIDAÇÃO SIMPLIFICADA (Apenas checa campos vazios)
    // Cria um array com todos os valores e verifica se algum está vazio
    const camposObrigatorios = [
      formData.nomeEmpresa, 
      formData.cnpj, 
      formData.email, 
      formData.telefone, 
      formData.nomeResponsavel, 
      formData.cargoResponsavel, 
      formData.cidadeEstado
    ];

    const camposVazios = camposObrigatorios.some(campo => !campo.trim());

    if (camposVazios) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }
    
    
    
    setErro('');
    
    // 4. LOG ATUALIZADO
    console.log('Dados para Cadastro de Empresa:', formData);
    
    alert('Cadastro simulado de empresa realizado com sucesso!');
  };

  return (
    // Usa nomes de classes que correspondem ao nosso CSS
    <div className="cadastro-page-wrapper">
        
      <div className="cadastro-form-container">
        <div className="cadastro-header">
          <span className="header-line"></span> 
          {/* 5. TÍTULO ATUALIZADO */}
          <h1 className="cadastro-title">Cadastro de Empresa</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="cadastro-form">
          {/* 6. CAMPOS ATUALIZADOS */}
          
          <input
            type="text"
            name="nomeEmpresa"
            placeholder="Nome da Empresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={formData.cnpj}
            onChange={handleChange}
            className="form-input"
          />
          
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="form-input"
          />

          <input
            type="text"
            name="nomeResponsavel"
            placeholder="Nome do Responsável"
            value={formData.nomeResponsavel}
            onChange={handleChange}
            className="form-input"
          />
          
          <input
            type="text"
            name="cargoResponsavel"
            placeholder="Cargo/Função do Responsável"
            value={formData.cargoResponsavel}
            onChange={handleChange}
            className="form-input"
          />
          
          <input
            type="text"
            name="cidadeEstado"
            placeholder="Cidade/Estado da Empresa"
            value={formData.cidadeEstado}
            onChange={handleChange}
            className="form-input"
          />
          
          {erro && <p className="error-text">{erro}</p>}

          <button type="submit" className="button-primary">
            Cadastrar
          </button>

          <p className="login-link">
            {/* 7. TEXTO DE LINK ATUALIZADO */}
            Já tem um cadastro? <a href="#" className="link-secondary">Voltar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;