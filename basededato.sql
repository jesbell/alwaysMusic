/* Consultas y pasos que se hicieron para la creación de la bd
 de este proyecto. Se trabajo en la consola con postgres */


-- creación de la bd
CREATE DATABASE alwaysmusic;


-- Creación de la tabla 
CREATE TABLE estudiantes (
    Rut VARCHAR(12) PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Curso VARCHAR(50) NOT NULL,
    Nivel INT NOT NULL
); 

-- Datos ejemplos que se insertaron

INSERT INTO estudiantes (Rut, Nombre, Curso, Nivel) 
VALUES ('12.345.678-9', 'Juan Pérez', 'Guitarra', 1),
       ('98.765.432-1', 'María López', 'Piano', 3);

