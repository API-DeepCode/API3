import React from "react";
import { useNavigate } from "react-router-dom";

export default function Pecamodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Peça</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="aeronave">Aeronave:</label>
        <select name="aeronave" id="aeronave">
          <option value="comercial"></option>
          <option value="militar">Remo Glorioso</option>
        </select>
        <label htmlFor="nome">Nome:</label>
        <textarea name="nome" id="nome"></textarea>
        <label htmlFor="tipopeca">Tipo de Peça:</label>
        <select name="tipopeca" id="tipopeca">
          <option value="nacional">nacional</option>
          <option value="importada">importada</option>
        </select>
        <label htmlFor="fornecedor">Fornecedor:</label>
        <textarea name="fornecedor" id="fornecedor"></textarea>
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="produção">Em produção</option>
          <option value="transporte">Em transporte</option>
          <option value="pronto">Pronto para uso</option>
        </select>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}