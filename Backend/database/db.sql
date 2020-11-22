CREATE TABLE patologias (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(90) UNIQUE,
  link VARCHAR(90),
  sintomas MEDIUMTEXT,
  exames MEDIUMTEXT,
  tratamentos MEDIUMTEXT,
  PRIMARY KEY(`id`)
);

INSERT INTO `patologias` (nome, link, sintomas, exames, tratamentos) VALUES 
('Patologia1', 'patologia1', 'sintomas1', 'exames1','tratamentos1'),
('Patologia2', 'patologia2', 'sintomas2', 'exames2','tratamentos2');


CREATE TABLE destaques (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200),
    texto MEDIUMTEXT,
    fotoLink1 VARCHAR(200),
    foto_alt1 VARCHAR(200),
    fotoLink2 VARCHAR(200),
    foto_alt2 VARCHAR(200),
    fotoLink3 VARCHAR(200),
    foto_alt3 VARCHAR(200),
    fotoLink4 VARCHAR(200),
    foto_alt4 VARCHAR(200),
    PRIMARY KEY (`ID`)
);

INSERT INTO `destaques` (nome, texto, fotoLink1, foto_alt1, fotoLink2, foto_alt2, fotoLink3, foto_alt3, fotoLink4, foto_alt4) VALUES
('nome Destaque 1','texto Destaque 1', 'foto 1 Destaque 1','alt Foto 1 Destaque 1', '', '', '', '','',''),
('nome Destaque 2','texto Destaque 2', 'foto 2 Destaque 1','alt Foto 2 Destaque 1', '', '', '', '','',''),
('nome Destaque 3','texto Destaque 3', 'foto 3 Destaque 1','alt Foto 3 Destaque 1', '', '', '', '','',''),
('nome Destaque 4','texto Destaque 4', 'foto 4 Destaque 1','alt Foto 4 Destaque 1', '', '', '', '','','');



CREATE TABLE homePage (
    CV_Pic VARCHAR (200),
    CV_Text MEDIUMTEXT
);

INSERT INTO homePage (CV_Pic, CV_Text) VALUES
('CV_Pic', 'CV_Text');

CREATE TABLE contactos (
    id INTEGER AUTO_INCREMENT,
    telefoneContacto VARCHAR (50),
    emailContacto VARCHAR (100),
    moradaContacto VARCHAR (200),
    PRIMARY KEY (`id`)
);

INSERT INTO contactos (telefoneContacto, emailContacto, moradaContacto) VALUES
('+351000000000', 'xpto@xpto.pt','Avenida Columbano Bordalo Pinheiro');



CREATE TABLE sintomas (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR (200),
    texto MEDIUMTEXT,
    fotoLink1 VARCHAR(200),
    foto_alt1 VARCHAR(200),
    fotoLink2 VARCHAR(200),
    foto_alt2 VARCHAR(200),
    fotoLink3 VARCHAR(200),
    foto_alt3 VARCHAR(200),
    fotoLink4 VARCHAR(200),
    foto_alt4 VARCHAR(200), 
    PRIMARY KEY (`ID`)
);

INSERT INTO sintomas(nome, texto, fotoLink1, foto_alt1, fotoLink2, foto_alt2, fotoLink3, foto_alt3, fotoLink4, foto_alt4) VALUES
('nomeSintoma1','descricaoSintoma1', 'foto 1 Sintoma 1','alt Foto 1 Sintoma 1', 'foto 2 Sintoma 1','alt Foto 2 Sintoma 1','','','',''),
('nomeSintoma2','descricaoSintoma2', 'foto 1 Sintoma 2','alt Foto 1 Sintoma 2', 'foto 2 Sintoma 2','alt Foto 2 Sintoma 2','','','','');






