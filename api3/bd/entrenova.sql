CREATE TABLE RespostasClienteQuestionario (
    RespostaClienteID INTEGER PRIMARY KEY AUTOINCREMENT,
    Pergunta1 TEXT,
    Pergunta2 TEXT,
    Pergunta3 TEXT,
    Pergunta4 TEXT,
    Pergunta5 TEXT,
    Pergunta6 TEXT,
    Pergunta7 TEXT,
    Pergunta8 TEXT,
    Pergunta9 TEXT,
    Pergunta10 TEXT
);

CREATE TABLE RespostaIA (
    RespostaIAID INTEGER PRIMARY KEY AUTOINCREMENT,
    ClienteID INTEGER NOT NULL,
    RespostaClienteID INTEGER NOT NULL,
    Resposta TEXT NOT NULL,
    DataResposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RespostaClienteID) REFERENCES RespostasClienteQuestionario(RespostaClienteID) ON DELETE CASCADE
);