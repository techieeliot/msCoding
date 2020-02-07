CREATE DATABASE vending-machine
CREATE TABLE products (
    id tinyint auto-increment,
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



