CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE report(
                       id SERIAL PRIMARY KEY,
                       tipo plataforma_de_denuncias.reporttypes NOT NULL,
                       descricao TEXT NOT NULL,
                       data_criacao DATE NOT NULL,
                       token_denuncia UUID UNIQUE DEFAULT gen_random_uuid()


);