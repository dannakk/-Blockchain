CREATE TABLE accounts (id integer, name varchar(100), credit integer);

INSERT INTO accounts (id, name, credit) VALUES (1, 'First', 1000), (2, 'Second', 1000), (3, 'Third', 1000);

BEGIN;
UPDATE accounts SET credit = credit - 500
    WHERE name = 'First';
UPDATE accounts SET credit = credit + 500
    WHERE name = 'Third';
UPDATE accounts SET credit = credit - 700
    WHERE name = 'Second';
UPDATE accounts SET credit = credit + 700
    WHERE name = 'First';
UPDATE accounts SET credit = credit - 100
    WHERE name = 'Second';
UPDATE accounts SET credit = credit + 100
    WHERE name = 'Third';
COMMIT;
