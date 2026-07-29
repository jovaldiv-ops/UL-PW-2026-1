-- migrate:up 

INSERT INTO sexs (id, name) VALUES (1, 'Hombre');
INSERT INTO sexs (id, name) VALUES (2, 'Mujer');

-- migrate:down 

DELETE FROM sexs;