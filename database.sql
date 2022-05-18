CREATE TABLE koalas (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(35),
	"age" integer,
	"gender" varchar(10),
	"ready_for_transfer" boolean,
	"notes" varchar(130)
);
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Scotty', '4', 'M', 'true', 'Born in Guatemala');
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Jean', '5', 'F', 'true', 'Allergic to lots of lava');
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Ororo', '7', 'F', 'false', 'Loves listening to Paula (Abdul)');
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Logan', '15', 'M', 'false', 'Loves the sauna');
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Charlie', '9', 'M', 'true', 'Favorite band is Nirvana');
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('Betsy', '4', 'F', 'true', 'Has a pet iguana');
SELECT * FROM koalas;
DELETE FROM koalas WHERE id=8;