--YOUR NAME HERE	ASSIGNMENT 5 JOINING TABLES
--Put your answers on the lines after each letter. E.g. your query for question 1A should go on line 5; your query for question 1B should go on line 7...
--1 
-- A
SELECT sales.date,stock_items.item from sales JOIN stock_items WHERE sales.item = 1014;
-- B
SELECT employees.id AS "Employee Number", sales.item AS "Item Number", stock_items.category , stock_items.item FROM employees JOIN sales,stock_items WHERE stock_items.category = "Feline";

--2
-- A
SELECT sales.date, employees.first_name, employees.last_name, sales.item FROM sales LEFT JOIN employees ON sales.employee = employees.id WHERE sales.employee = 111;
-- B
SELECT CONCAT(employees.first_name, ' ', employees.last_name) AS "Employee Name", employees.sin, employees.role, sales.item FROM sales RIGHT JOIN employees ON sales.employee = employees.id WHERE employees.SIN LIKE '258%' OR employees.SIN LIKE '456%' OR employees.SIN LIKE '753%';

--3
-- A
SELECT sales.date, sales.item, employees.first_name FROM sales JOIN employees ON sales.employee = employees.id WHERE sales.date BETWEEN '2021-06-12' AND '2021-06-18';
-- B
SELECT CONCAT(employees.first_name, ' ', employees.last_name) AS "Sales Person",COUNT(*) AS "Total Sales" FROM employees JOIN sales ON sales.employee = employees.id GROUP BY CONCAT(employees.first_name, ' ', employees.last_name) ORDER BY COUNT(*) DESC;

--4
-- A
SELECT s.date, si.item AS stock_item, si.price, si.category, e.first_name AS employee_name FROM sales s JOIN stock_items si ON s.item = si.id JOIN employees e ON s.employee = e.id WHERE s.employee = 114;
-- B
SELECT s.item AS "Unique Item", si.id, si.item, si.price, si.category FROM stock_items si LEFT JOIN sales s ON si.id = s.item ORDER BY si.id;