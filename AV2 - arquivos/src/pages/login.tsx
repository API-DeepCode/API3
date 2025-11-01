import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./geral.css";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica os diferentes tipos de usuário
    if (usuario === "adm" && senha === "123") {
      onLogin();
      navigate("/principaladm");
    } else if (usuario === "eng" && senha === "123") {
      onLogin();
      navigate("/principaleng");
    } else if (usuario === "ope" && senha === "123") {
      onLogin();
      navigate("/principalope");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", display: "inline-block" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
