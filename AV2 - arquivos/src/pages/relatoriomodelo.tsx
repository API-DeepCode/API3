import React from "react";
import { useNavigate } from "react-router-dom";

export default function Relatoriomodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Relatório</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="cliente">Nome do cliente:</label>
        <textarea name="cliente" id="cliente"></textarea>
        <label htmlFor="dataEntrega">Data de entrega:</label>
        <textarea name="dataEntrega" id="dataEntrega"></textarea>
        <label htmlFor="aeronave">Aeronave:</label>
        <select name="aeronave" id="aeronave">
          <option value="comercial"></option>
          <option value="militar">Remo Glorioso</option>
        </select>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Baixar PDF</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}