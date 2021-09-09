
-- Inserindo CATEGORIAS
INSERT INTO TB_CATEGORIA (DESCRICAO, VALOR_HORA) VALUES ('JUNIOR', 1500.00);
INSERT INTO TB_CATEGORIA (DESCRICAO, VALOR_HORA) VALUES ('PLENO', 2500.00);
INSERT INTO TB_CATEGORIA (DESCRICAO, VALOR_HORA) VALUES ('SENIOR', 4500.00);

-- Inserindo ADVOGADOS
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('MACK', '00000000001', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '2');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('DANNY', '00000000002', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '1');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('DEBORAH', '00000000003', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '2');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('LAURA', '00000000004', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '1');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('SAMARA', '00000000005', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '3');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('JUNIM', '00000000006', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '2');
INSERT INTO TB_ADVOGADO (NOME, CPF, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, TELEFONE, CATEGORIA_ID) VALUES ('LEILA', '00000000007', 'RUA DESEMBARGADOR CONTINENTINO, 120', 'CASA', 'CAICARA', 'BH', 'MG','30720170', '999999999', '3');

-- Inserindo USUARIOS
INSERT INTO TB_USUARIO (USUARIO, NOME, PASSWORD, ADVOGADO_ID) VALUES ('macks', 'Mackristofer', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 1);
INSERT INTO TB_USUARIO (USUARIO, NOME, PASSWORD, ADVOGADO_ID) VALUES ('deborah', 'Deborah', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 3);
INSERT INTO TB_USUARIO (USUARIO, NOME, PASSWORD, ADVOGADO_ID) VALUES ('laura', 'Laura', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 4);


-- Inserindo CLIENTES
INSERT INTO TB_CLIENTE (RAZAO, CNPJ_CPF, CONTATO, TELEFONE, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, OBS) VALUES ('M3TECH', '0000000000000','MACK','999999999','RUA DE CASA, 150',' ','CAICARA','BH','MG','35050100','CLIENTE BOM');
INSERT INTO TB_CLIENTE (RAZAO, CNPJ_CPF, CONTATO, TELEFONE, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, OBS) VALUES ('M3INFO', '0000000000000','DEBORAH','999999999','RUA DE CASA, 150',' ','CAICARA','BH','MG','35050100','CLIENTE BOM');
INSERT INTO TB_CLIENTE (RAZAO, CNPJ_CPF, CONTATO, TELEFONE, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, OBS) VALUES ('SOFTHOUSE', '0000000000000','LAURA','999999999','RUA DE CASA, 150',' ','CAICARA','BH','MG','35050100','CLIENTE BOM');
INSERT INTO TB_CLIENTE (RAZAO, CNPJ_CPF, CONTATO, TELEFONE, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, OBS) VALUES ('CAOS', '0000000000000','JUNIM','999999999','RUA DE CASA, 150',' ','CAICARA','BH','MG','35050100','CLIENTE BOM'); 
INSERT INTO TB_CLIENTE (RAZAO, CNPJ_CPF, CONTATO, TELEFONE, ENDERECO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, OBS) VALUES ('JACQUES ADV', '0000000000000','DEBORAH','999999999','RUA DE CASA, 150',' ','CAICARA','BH','MG','35050100','CLIENTE BOM');



-- Inserindo CASO
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 1', 'ATIVO', null, 1);
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 2', 'ATIVO', 120, 1);
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 3', 'ATIVO', 130, 2);
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 4', 'ATIVO', 160, 3);
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 5', 'ATIVO', 150, 3);
INSERT INTO TB_CASO (DESCRICAO, STATUS, VALOR, CLIENTE_ID) VALUES ('EXEMPLO 6', 'ATIVO', 100, 1);



-- Inserindo TIMESHEET
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-09-10', '2:00', 'Atendimento', 1, 1, 1);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-10-10', '1:00', 'Atendimento', 1, 1, 1);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-11-12', '1:40', 'Atendimento', 2, 1, 2);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-09-20', '0:30', 'Atendimento', 2, 0, 1);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-10-21', '5:30', 'Atendimento', 3, 0, 3);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-09-13', '2:10', 'Atendimento', 2, 1, 4);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-11-09', '0:40', 'Atendimento', 2, 0, 2);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-11-10', '1:00', 'Atendimento', 2, 0, 6);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-11-15', '2:40', 'Atendimento', 2, 0, 6);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-10-16', '3:10', 'Atendimento', 3, 0, 5);
INSERT INTO TB_TIMESHEET (DATA, TEMPO, DESCRICAO, ADVOGADO_ID, COBRANCA, CASO_ID) VALUES ('2020-09-18', '1:10', 'Atendimento', 4, 1, 4);

--Inserindo ROLES
INSERT INTO TB_ROLE (AUTHORITY) VALUES ('ROLE_OPERATOR');
INSERT INTO TB_ROLE (AUTHORITY) VALUES ('ROLE_ADMIN');

--Inserindo USUARIO_ROLES
INSERT INTO TB_USUARIO_ROLE (USUARIO_ID, ROLE_ID) VALUES (1, 2);
INSERT INTO TB_USUARIO_ROLE (USUARIO_ID, ROLE_ID) VALUES (2, 1);
INSERT INTO TB_USUARIO_ROLE (USUARIO_ID, ROLE_ID) VALUES (2, 2);
INSERT INTO TB_USUARIO_ROLE (USUARIO_ID, ROLE_ID) VALUES (3, 1);