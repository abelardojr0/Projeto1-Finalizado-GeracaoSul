
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    marca VARCHAR(40),
    preco DECIMAL(5,2) NOT NULL 
);

CREATE TABLE servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    preco DECIMAL(5,2) NOT NULL 
);


INSERT INTO produtos (nome, marca, preco) VALUES
('Pomada Modeladora Efeito Matte', 'Barba Forte', 45.00),
('Óleo para Barba Hidratante', 'Sobrebarba', 59.90),
('Shampoo para Cabelo e Barba 3 em 1', 'QOD Barber Shop', 38.50),
('Balm de Barba Alinhador', 'Viking', 42.00),
('Cera de Bigode Extra Forte', 'Don Alcides', 29.90);


INSERT INTO servicos (nome, preco) VALUES
('Corte de Cabelo Masculino (Degradê / Clássico)', 50.00),
('Barba Completa com Toalha Quente', 40.00),
('Combo: Cabelo + Barba', 80.00);