"use client";

import React, { useState } from 'react';

// Importa o objeto 'styles' do CSS Module


// Força a subida de dois níveis (../..)
import styles from '../../components/globals/CadastroForm.module.css';

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
    // Usa estilos do CSS Module: styles.nomeDaClasse
    <div className={styles['cadastro-page-wrapper']}>
        
      <div className={styles['cadastro-form-container']}>
        <div className={styles['cadastro-header']}>
          <span className={styles['header-line']}></span> 
          {/* 5. TÍTULO ATUALIZADO */}
          <h1 className={styles['cadastro-title']}>Cadastro de Empresa</h1>
        </div>
        
        <form onSubmit={handleSubmit} className={styles['cadastro-form']}>
          {/* 6. CAMPOS ATUALIZADOS */}
          
          <input
            type="text"
            name="nomeEmpresa"
            placeholder="Nome da Empresa"
            value={formData.nomeEmpresa}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />

          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={formData.cnpj}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />
          
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />

          <input
            type="text"
            name="nomeResponsavel"
            placeholder="Nome do Responsável"
            value={formData.nomeResponsavel}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />
          
          <input
            type="text"
            name="cargoResponsavel"
            placeholder="Cargo/Função do Responsável"
            value={formData.cargoResponsavel}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />
          
          <input
            type="text"
            name="cidadeEstado"
            placeholder="Cidade/Estado da Empresa"
            value={formData.cidadeEstado}
            onChange={handleChange}
            className={styles['form-input']} // <-- CORRIGIDO
          />
          
          {erro && <p className={styles['error-text']}>{erro}</p>}

          <button type="submit" className={styles['button-primary']}>
            Cadastrar
          </button>

          <p className={styles['login-link']}>
            {/* 7. TEXTO DE LINK ATUALIZADO */}
            Já tem um cadastro? <a href="#" className={styles['link-secondary']}>Voltar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;