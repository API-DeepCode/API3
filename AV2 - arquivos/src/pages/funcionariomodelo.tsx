import React from "react";
import { useNavigate } from "react-router-dom";

export default function Funcionariomodelo() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Funcionário:</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="identificador">Identificador:</label>
        <textarea name="identificador" id="identificador"></textarea>
        <label htmlFor="nome">Nome:</label>
        <textarea name="nome" id="nome"></textarea>
        <label htmlFor="telefone">Telefone:</label>
        <textarea name="telefone" id="telefone"></textarea>
        <label htmlFor="endereco">Endereço:</label>
        <textarea name="endereco" id="endereco"></textarea>
        <label htmlFor="login">Login:</label>
        <textarea name="login" id="login"></textarea>
        <label htmlFor="senha">Senha:</label>
        <textarea name="senha" id="senha"></textarea>
        <label htmlFor="cargo">Cargo:</label>
        <select name="cargo" id="cargo">
          <option value="administrador">Administrador</option>
          <option value="engenheiro">Engenheiro</option>
          <option value="operador">Operador</option>
        </select>
      </div>
      <button onClick={() => navigate("/principaleng")}>Salvar</button><br />
      <button onClick={() => navigate("/principaleng")}>Voltar</button><br />
    </div>
  );
}