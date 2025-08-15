CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS report (
                                      id SERIAL PRIMARY KEY,
                                      tipo plataforma_denuncia.reporttypes NOT NULL,
                                      descricao TEXT NOT NULL,
                                      data_criacao DATE NOT NULL,
                                      token_denuncia UUID UNIQUE DEFAULT gen_random_uuid()
);
