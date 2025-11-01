import React from "react";
import { useNavigate } from "react-router-dom";

export default function Etapamodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Etapa</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="aeronave">Aeronave:</label>
        <select name="aeronave" id="aeronave">
          <option value="comercial"></option>
          <option value="militar">Remo Glorioso</option>
        </select>
        <label htmlFor="nome">Nome:</label>
        <textarea name="nome" id="nome"></textarea>
        <label htmlFor="prazo">Prazo:</label>
        <textarea name="prazo" id="prazo"></textarea>
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="pendente">Pendente</option>
          <option value="andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>
        <label htmlFor="funcionario">Funcionários:</label>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
            <button onClick={() => navigate("")}  style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>James Webber</button>
            <button onClick={() => navigate("")} style={{ marginBottom: "10px", backgroundColor: "lightgray" }}>Adicionar Funcionário</button><br />
        </div>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}