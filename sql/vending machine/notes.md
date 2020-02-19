<!-- setting up your mysql -->
<!-- mysql -uroot -p -->
<!-- ms1945324 -->

CREATE DATABASE vending_machine;
USE vending_machine;
CREATE TABLE products (
    id tinyint auto_increment,
    name varchar(20),
    price smallint,
    location varchar(6)
);

INSERT into products (name, price, location) values ('coke', 5, 'a1');
INSERT into products (name, price, location) values ('diet mountain dew', 10, 'a2');
INSERT into products (name, price, location) values ('sprite', 10, 'a3');

SELECT * from products;
SELECT name from products;
SELECT name, price from products;
SELECT now();

SELECT * products from products limit 500;
SELECT sum(price) from products;
SELECT avg(price) from products;
SELECT max(price) from products;
SELECT min(price) from products;

INSERT into orders(product_id, payment_method) values(5,'cc');

SELECT * from orders join products on product.id = orders.product_id;
SELECT p.name, p.price, o.date from orders o join products p on p.id = o.product_id;
SELECT p.name, p.price, sum from orders o join products p on p.id = o.product_id;

subqueries...


<!-- Creating a Stamp Data Model -->
JOINS - PIVOT TABLES
You need to tell sql to join the table for stamps and countries in a STAMP_COUNTRY table

Cons: 

One of the drawbacks of a mySQL database is to avoid JOINs. 

NoSQL databases deal with data integrity.

Pros: 

SQL has no issues with data integrity.

NoSQL scales well.

Both develop technical debt. 

You write it one way and you don't consider the scaleability of your project. After a while of issues piling up, then you have to spend time to tackle your technical debt.

You're going to make multiple passes and you're never going to get it right the first time. 

You must go under normalization and normal forms. 

what if you need to change the field.

alter table [tableName] change [fieldName] [fieldName] [type] auto-increment primary key;







