"use client";
// Importa o objeto 'styles' do CSS Module
import React, { useState } from 'react';
import { addResponse } from '@/app/lib/firestoreService';
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica de validação simplificada (Apenas checa campos vazios)
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
    
    try {
      // Preparando os dados no formato do Firestore
      const dadosParaFirestore = {
        nome_empresa: formData.nomeEmpresa,
        cnpj: formData.cnpj,
        email_contato: formData.email,
        telefone_contato: formData.telefone,
        nome_responsavel: formData.nomeResponsavel,
        cargo_responsavel: formData.cargoResponsavel,
        cidade: formData.cidadeEstado
      };

      // Salvando no Firestore na coleção Id_Usuario
      await addResponse('Id_Usuario', dadosParaFirestore);
      
      alert('Cadastro realizado com sucesso!');
      
      // Limpar o formulário após o sucesso
      setFormData({
        nomeEmpresa: '',
        cnpj: '',
        email: '',
        telefone: '',
        nomeResponsavel: '',
        cargoResponsavel: '',
        cidadeEstado: ''
      });
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setErro('Erro ao realizar o cadastro. Por favor, tente novamente.');
    }
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