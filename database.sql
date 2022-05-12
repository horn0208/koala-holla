CREATE TABLE koalas (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(35),
	"age" integer,
	"gender" varchar(10),
	"ready_for_transfer" varchar(10),
	"notes" varchar(130)
);
SELECT * FROM koalas;
INSERT INTO koalas (name, age, gender, ready_for_transfer, notes) VALUES ('wanda', '2', 'male', 'yes', 'bites');