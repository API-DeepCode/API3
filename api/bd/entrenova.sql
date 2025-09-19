CREATE DATABASE entrenova;
USE entrenova;


CREATE TABLE Cliente (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(150) UNIQUE NOT NULL,
    Telefone VARCHAR(20),
    SenhaHash VARCHAR(255) NOT NULL,   -- Apenas caso precise futuramente no projeto
    DataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE RespostasClienteQuestionario (
    RespostaClienteID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    Pergunta1 TEXT,
    Pergunta2 TEXT,
    Pergunta3 TEXT,
    Pergunta4 TEXT,
    Pergunta5 TEXT,
    Pergunta6 TEXT,
    Pergunta7 TEXT,
    Pergunta8 TEXT,
    Pergunta9 TEXT,
    Pergunta10 TEXT,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE RespostaIA (
    RespostaIAID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    RespostaClienteID INT NOT NULL,
    Resposta TEXT NOT NULL,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE,
    FOREIGN KEY (RespostaClienteID) REFERENCES RespostasClienteQuestionario(RespostaClienteID) ON DELETE CASCADE
);
