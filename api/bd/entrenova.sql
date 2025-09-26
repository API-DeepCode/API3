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

CREATE TABLE RespostasPart1 (
    RespostaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    setor TINYINT,
    setor_outro VARCHAR(255),
    num_colaboradores TINYINT,
    porte TINYINT,
    localizacao TINYINT,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE RespostasPart2 (
    RespostaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    aspc_desafiador TINYINT,
    aspc_desafiador_outro VARCHAR(255),
    result_programa TINYINT,
    result_programa_outro VARCHAR(255),
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE RespostasPart4 (
    RespostaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    invest TINYINT,
    resp_treinamentos TINYINT,
    resp_treinamentos_outro VARCHAR(255),
    treinamentos TINYINT,
    inov_aprendizagem TINYINT,
    colab_desenvolvimento TINYINT,
    soft_desenvolvimento TINYINT,
    cult_art_hobby TINYINT,
    empresa_impacto TINYINT,
    implement_projeto BOOLEAN,
    tempo_treinamento TINYINT,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE DimensionPart3 (
    RespostaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    pes_cult BOOLEAN,
    ert_ope BOOLEAN,
    mer_cli BOOLEAN,
    dir_fut BOOLEAN,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE QuestionsDimension (
    RespostaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    pergunta1 TINYINT,
    pergunta2 TINYINT,
    pergunta3 TINYINT,
    pergunta4 TINYINT,
    pergunta5 TINYINT,
    pergunta6 TINYINT,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);

CREATE TABLE RespostaIA (
    RespostaIAID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT NOT NULL,
    Relatorio TEXT NOT NULL,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID) ON DELETE CASCADE
);
