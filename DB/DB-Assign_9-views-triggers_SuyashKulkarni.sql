--YOUR NAME HERE	ASSIGNMENT 7 GROUPING RESULTS
--Put your answers on the lines after each letter. E.g. your query for question 1A should go on line 5; your query for question 1B should go on line 7...
-- 1 
--A
CREATE VIEW Low_Inventory_Items_View
AS
SELECT
    category,
    item,
    inventory
FROM
    stock_items
WHERE
    inventory <= 20;
--B
CREATE VIEW Sales_Employee_Total_Sales_View
AS
SELECT
    E.first_name,
    E.last_name,
    COUNT(S.employee) AS TotalSales
FROM
    employees AS E
JOIN
    sales AS S ON E.id = S.employee
GROUP BY
    E.id, E.first_name, E.last_name
ORDER BY
    TotalSales DESC;

-- 2
--A
DELIMITER //
CREATE TRIGGER log_employee_name_change
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
	INSERT INTO data_log(timestamp,old_first_name, new_first_name)
    VALUES(NOW(),OLD.first_name ,NEW.first_name);
END; //
DELIMITER;

--B
DELIMITER //
CREATE TRIGGER log_data_delete
AFTER DELETE ON data_log
FOR EACH ROW
BEGIN
    INSERT INTO deleted_data_log (timestamp, deleted_old_first_name, deleted_new_first_name)
    VALUES (NOW(), OLD.old_first_name, OLD.new_first_name);
END; //
DELIMITER;


