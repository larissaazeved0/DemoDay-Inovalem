/* Modelo Físico - Inovalem: */

CREATE DATABASE Inovalem;
USE Inovalem

CREATE TABLE empreendedor (
    id_usuario INT FOREIGN KEY NOT NULL,
    nome_usuario VARCHAR(100)NOT NULL,
    fk_filtragem_cpf_usuario VARCHAR,
    fk_cadastro_id_usuario INT
);

CREATE TABLE cadastro (
    email_usuario VARCHAR(100)NOT NULL,
    senha_usuario VARCHAR(10)NOT NULL,
    id_usuario INT PRIMARY KEY,
    data_nascimento DATE
);

CREATE TABLE login (
    email_usuario VARCHAR(100)NOT NULL,
    senha_usuario VARCHAR(10)NOT NULL
);

CREATE TABLE filtragem (
    holerite_usuario BLOB,
    sexo_usuario VARCHAR(10),
    cpf_usuario VARCHAR PRIMARY KEY,
    estado_usuario VARCHAR(30)NOT NULL,
    municipio_usuario VARCHAR(30)NOT NULL
);

CREATE TABLE precificação (
    custo_unidade_produto FLOAT NOT NULL,
    preco_sugerido FLOAT NOT NULL,
    id_produto INT,
    custo_produto FLOAT NOT NULL,
    id_ingrediente INT,
    quantidade_utilizada FLOAT NOT NULL,
    valor_ingrediente FLOAT NOT NULL,
    rendimento FLOAT NOT NULL,
    ingrediente VARCHAR(100)NOT NULL,
    precificação_TIPO INT,
    PRIMARY KEY (id_produto, id_ingrediente)
);

CREATE TABLE trilhas (
    nome_video VARCHAR(100)NOT NULL,
    descricao_video VARCHAR(200)NOT NULL,
    duracao_video VARCHAR(5)NOT NULL,
    id_video INT PRIMARY KEY
);

CREATE TABLE pra elas (
    email_usu VARCHAR(100)NOT NULL,
    data_nascimento DATE,
    motivo_formulário VARCHAR(300)NOT NULL,
    nome_completo VARCHAR(100)NOT NULL,
    localizacao_parceiros VARCHAR(100),
    nome_parceiros VARCHAR(100)NOT NULL,
    localizacao_usuario VARCHAR(100),
    pra elas_TIPO INT
);

CREATE TABLE home (
    id_meses INT PRIMARY KEY,
    janeiro FLOAT,
    fevereiro FLOAT,
    março FLOAT,
    abril FLOAT,
    maio FLOAT,
    juhho FLOAT,
    julho FLOAT,
    agosto FLOAT,
    setembro FLOAT,
    outubro FLOAT,
    novembro FLOAT,
    dezembro FLOAT
);

CREATE TABLE utiliza (
    fk_empreendedor_id_usuario INT,
    fk_precificação_id_produto INT,
    fk_precificação_id_ingrediente INT
);

CREATE TABLE acompanha (
    fk_empreendedor_id_usuario INT,
    fk_trilhas_id_video INT
);

CREATE TABLE acessar (
    fk_home_id_meses INT,
    fk_empreendedor_id_usuario INT
);
 
ALTER TABLE empreendedor ADD CONSTRAINT FK_empreendedor_2
    FOREIGN KEY (fk_filtragem_cpf_usuario)
    REFERENCES filtragem (cpf_usuario)
    ON DELETE RESTRICT;
 
ALTER TABLE empreendedor ADD CONSTRAINT FK_empreendedor_3
    FOREIGN KEY (fk_cadastro_id_usuario)
    REFERENCES cadastro (id_usuario)
    ON DELETE RESTRICT;
 
ALTER TABLE utiliza ADD CONSTRAINT FK_utiliza_1
    FOREIGN KEY (fk_empreendedor_id_usuario)
    REFERENCES empreendedor (id_usuario)
    ON DELETE SET NULL;
 
ALTER TABLE utiliza ADD CONSTRAINT FK_utiliza_2
    FOREIGN KEY (fk_precificação_id_produto, fk_precificação_id_ingrediente)
    REFERENCES precificação (id_produto, id_ingrediente)
    ON DELETE SET NULL;
 
ALTER TABLE acompanha ADD CONSTRAINT FK_acompanha_1
    FOREIGN KEY (fk_empreendedor_id_usuario)
    REFERENCES empreendedor (id_usuario)
    ON DELETE RESTRICT;
 
ALTER TABLE acompanha ADD CONSTRAINT FK_acompanha_2
    FOREIGN KEY (fk_trilhas_id_video)
    REFERENCES trilhas (id_video)
    ON DELETE SET NULL;
 
ALTER TABLE acessar ADD CONSTRAINT FK_acessar_1
    FOREIGN KEY (fk_home_id_meses)
    REFERENCES home (id_meses)
    ON DELETE SET NULL;
 
ALTER TABLE acessar ADD CONSTRAINT FK_acessar_2
    FOREIGN KEY (fk_empreendedor_id_usuario)
    REFERENCES empreendedor (id_usuario)
    ON DELETE SET NULL;