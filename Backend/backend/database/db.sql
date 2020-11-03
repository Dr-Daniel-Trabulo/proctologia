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
('Hemorroidas', 'hemorroidas', 'sintomas1', 'exames1','tratamentos1'),
('Eczema Anal', 'eczemaanal', 'sintomas2', 'exames2','tratamentos2');


CREATE TABLE destaques (
    DestaquesID INTEGER NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200),
    texto MEDIUMTEXT,
    PRIMARY KEY (`DestaquesID`)
);

INSERT INTO `destaques` (nome, texto) VALUES
('nome Destaque 1','texto Destaque 1'),
('nome Destaque 2','texto Destaque 2');

CREATE TABLE fotosDestaques (
    DestaquesID INTEGER NOT NULL,
    fotosDestaquesID INTEGER NOT NULL AUTO_INCREMENT,
    fotoLink VARCHAR(200) NOT NULL,
    alt VARCHAR(200),
    PRIMARY KEY (`fotosDestaquesID`)
);

INSERT INTO `fotosDestaques`(DestaquesID,fotoLink,alt) VALUES
(1,'foto 1 Destaque 1','alt Foto 1 Destaque 1'),
(1,'foto 2 Destaque 1','alt Foto 2 Destaque 1'),
(2,'foto 1 Destaque 2','alt Foto 1 Destaque 2'),
(2,'foto 2 Destaque 2','alt Foto 2 Destaque 2');


CREATE TABLE homePage (
    CV_Pic VARCHAR (200),
    CV_Text MEDIUMTEXT
);

INSERT INTO homePage (CV_Pic, CV_Text) VALUES
('CV_Pic', 'CV_Text');

CREATE TABLE contactos (
    telefoneContacto VARCHAR (50),
    emailContacto VARCHAR (100),
    moradaContacto VARCHAR (200)
);

INSERT INTO contactos (telefoneContacto, emailContacto, moradaContacto) VALUES
('+351000000000', 'xpto@xpto.pt','Avenida Columbano Bordalo Pinheiro');



CREATE TABLE sintomas (
    sintomasID INTEGER NOT NULL AUTO_INCREMENT,
    nomeSintomas VARCHAR (200),
    descricaoSintomas MEDIUMTEXT,
    PRIMARY KEY (`sintomasID`)
);

INSERT INTO sintomas(nomeSintomas, descricaoSintomas) VALUES
('nomeSintoma1','descricaoSintoma1'),
('nomeSintoma2','descricaoSintoma2');

CREATE TABLE fotosSintomas (
    sintomasID INTEGER NOT NULL,
    fotosSintomasID INTEGER NOT NULL AUTO_INCREMENT,
    fotoLink VARCHAR(200) NOT NULL,
    alt VARCHAR(200),
    PRIMARY KEY (`fotosSintomasID`)
);

INSERT INTO `fotosSintomas`(sintomasID,fotoLink,alt) VALUES
(1,'foto 1 Sintoma 1','alt Foto 1 Sintoma 1'),
(1,'foto 2 Sintoma 1','alt Foto 2 Sintoma 1'),
(2,'foto 1 Sintoma 2','alt Foto 1 Sintoma 2'),
(2,'foto 2 Sintoma 2','alt Foto 2 Sintoma 2');





        let sintomas = [
            {
                id: 1, nome: 'nomeSintoma1', descricao: 'descricaoSintoma1',
                fotos: [
                    { fotoLink: 'foto1Sintoma1', alt: 'altFoto1Sintoma1' },
                    { fotoLink: 'foto2Sintoma1', alt: 'altFoto2Sintoma1' }
                ]
            },
            {
                id: 2, nome: 'nomeSintoma2', descricao: 'descricaoSintoma2',
                fotos: [
                    { fotoLink: 'foto1Sintoma2', alt: 'altFoto1Sintoma2' },
                    { fotoLink: 'foto2Sintoma2', alt: 'altFoto2Sintoma2' }
                ]
            }
        ]



