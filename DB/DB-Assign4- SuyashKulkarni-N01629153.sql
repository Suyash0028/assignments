--YOUR NAME HERE	ASSIGNMENT 4 GROUPING RESULTS
--Put your answers on the lines after each letter. E.g. your query for question 1A should go on line 5; your query for question 1B should go on line 7...
-- 1 
--A
SELECT MIN(price) FROM stock_items;
--B
SELECT MAX(inventory) FROM stock_items;

-- 2
--A
SELECT role, COUNT(last_name) FROM employees GROUP BY role;
--B
SELECT role, COUNT(id) AS "Number of employees", COUNT(phone) AS "Number of Phone Numbers" FROM employees GROUP BY role;

-- 3
--A
SELECT category AS "Mammals",COUNT(item) FROM stock_items WHERE category != "Piscine" GROUP BY category;
--B
SELECT category AS "Animal" , COUNT(inventory) AS "In Stock" FROM stock_items GROUP BY category ORDER BY COUNT(inventory) ASC;
--C
SELECT MAX(price) AS "Highest Price",category AS "Category" FROM stock_items GROUP BY category ORDER BY MAX(price) DESC;
--D
SELECT MAX(price),category FROM stock_items GROUP BY category HAVING MAX(price) > 50;