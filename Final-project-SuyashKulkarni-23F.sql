-- Create Table Queries
-- Create Animals Table
CREATE TABLE Animals (
    Animal_Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Animal_Name VARCHAR(255) NOT NULL,
    Species VARCHAR(255) NOT NULL,
    Join_Date DATE NOT NULL,
    Leave_Date DATE
);

-- Insert 10 sample data into Animals Table
INSERT INTO Animals (Animal_Name, Species, Join_Date, Leave_Date)
VALUES
    ('Lion', 'Mammal', '2023-01-01', NULL),
    ('Tiger', 'Mammal', '2023-02-15', NULL),
    ('Elephant', 'Mammal', '2023-03-10', NULL),
    ('Giraffe', 'Mammal', '2023-04-05', NULL),
    ('Penguin', 'Bird', '2023-05-20', NULL),
    ('Kangaroo', 'Mammal', '2023-06-15', NULL),
    ('Cheetah', 'Mammal', '2023-07-01', NULL),
    ('Zebra', 'Mammal', '2023-08-12', NULL),
    ('Gorilla', 'Mammal', '2023-09-25', NULL),
    ('Panda', 'Mammal', '2023-10-30', NULL);

-- Create Animal Movements Table
CREATE TABLE AnimalMovements (
    Movement_Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Animal_Id INT NOT NULL,
    Movement_Type VARCHAR(255) NOT NULL,
    Movement_Date DATE NOT NULL,
    FOREIGN KEY (Animal_Id) REFERENCES Animals(Animal_Id)
);

-- Insert 10 sample data into Animal Movements Table
INSERT INTO AnimalMovements (Animal_Id, Movement_Type, Movement_Date)
VALUES
    (1, 'Arrival', '2023-01-01'),
    (2, 'Arrival', '2023-02-15'),
    (3, 'Arrival', '2023-03-10'),
    (4, 'Arrival', '2023-04-05'),
    (5, 'Arrival', '2023-05-20'),
    (6, 'Arrival', '2023-06-15'),
    (7, 'Arrival', '2023-07-01'),
    (8, 'Arrival', '2023-08-12'),
    (9, 'Arrival', '2023-09-25'),
    (10, 'Arrival', '2023-10-30');

-- Create Donation Table
CREATE TABLE Donation (
    Donation_Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Animal_Id INT NOT NULL,
    Donor_Name VARCHAR(255) NOT NULL,
    Donor_Email VARCHAR(255),
    Amount INT NOT NULL,
    Donation_Date DATE NOT NULL,
    FOREIGN KEY (Animal_Id) REFERENCES Animals(Animal_Id)
);

-- Insert 10 sample data into Donation Table
INSERT INTO Donation (Animal_Id, Donor_Name, Donor_Email, Amount, Donation_Date)
VALUES
    (1, 'John Doe', 'john@example.com', 100, '2023-01-05'),
    (2, 'Jane Smith', 'jane@example.com', 150, '2023-02-20'),
    (3, 'Bob Johnson', 'bob@example.com', 200, '2023-03-15'),
    (4, 'Alice Brown', 'alice@example.com', 120, '2023-04-10'),
    (5, 'Charlie White', 'charlie@example.com', 80, '2023-05-25'),
    (6, 'Eva Green', 'eva@example.com', 90, '2023-06-20'),
    (7, 'David Lee', 'david@example.com', 180, '2023-07-05'),
    (8, 'Grace Taylor', 'grace@example.com', 130, '2023-08-17'),
    (9, 'Sam Wilson', 'sam@example.com', 160, '2023-09-30'),
    (10, 'Olivia Davis', 'olivia@example.com', 140, '2023-10-31');

-- Create Feeding Schedules Table
CREATE TABLE FeedingSchedules (
    FeedingSchedule_Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Animal_Id INT NOT NULL,
    Feeding_Time TIME NOT NULL,
    Quantity INT NOT NULL,
    Feeding_Frequency VARCHAR(255) NOT NULL,
    FOREIGN KEY (Animal_Id) REFERENCES Animals(Animal_Id)
);

-- Insert 10 sample data into Feeding Schedules Table
INSERT INTO FeedingSchedules (Animal_Id, Feeding_Time, Quantity, Feeding_Frequency)
VALUES
    (1, '08:00:00', 5, 'Daily'),
    (2, '09:30:00', 8, 'Daily'),
    (3, '11:00:00', 10, 'Daily'),
    (4, '13:00:00', 7, 'Daily'),
    (5, '14:30:00', 3, 'Daily'),
    (6, '16:00:00', 6, 'Daily'),
    (7, '17:30:00', 9, 'Daily'),
    (8, '19:00:00', 4, 'Daily'),
    (9, '20:30:00', 12, 'Daily'),
    (10, '22:00:00', 7, 'Daily');

-- Create Employees Table
CREATE TABLE Employees (
    Employee_Id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Employee_FirstName VARCHAR(255) NOT NULL,
    Employee_LastName VARCHAR(255) NOT NULL,
    Employee_Designation VARCHAR(255) NOT NULL,
    Joining_Date DATE NOT NULL,
    Weekly_Hours INT NOT NULL,
    Department VARCHAR(255) NOT NULL,
    Salary_Per_Hr INT NOT NULL
);

-- Insert 10 sample data into Employees Table
INSERT INTO Employees (Employee_FirstName, Employee_LastName, Employee_Designation, Joining_Date, Weekly_Hours, Department, Salary_Per_Hr)
VALUES
    ('John', 'Doe', 'Zookeeper', '2023-01-10', 40, 'Animal Care', 25),
    ('Jane', 'Smith', 'Veterinarian', '2023-02-25', 35, 'Medical', 30),
    ('Bob', 'Johnson', 'Maintenance Worker', '2023-03-20', 30, 'Facilities', 20),
    ('Alice', 'Brown', 'Zookeeper', '2023-04-15', 40, 'Animal Care', 25),
    ('Charlie', 'White', 'Security Guard', '2023-05-30', 35, 'Security', 18),
    ('Eva', 'Green', 'Veterinarian', '2023-06-25', 40, 'Medical', 30),
    ('David', 'Lee', 'Maintenance Worker', '2023-07-10', 30, 'Facilities', 20),
    ('Grace', 'Taylor', 'Zookeeper', '2023-08-22', 40, 'Animal Care', 25),
    ('Sam', 'Wilson', 'Security Guard', '2023-09-05', 35, 'Security', 18),
    ('Olivia', 'Davis', 'Veterinarian', '2023-10-15', 40, 'Medical', 30);


-- AnimalMovement_Trigger - Trigger 
-- Creating a trigger to update Leave_Date in Animals table after an AnimalMovement insertion
DELIMITER //

CREATE TRIGGER AnimalMovement_Trigger
AFTER UPDATE ON AnimalMovements
FOR EACH ROW
BEGIN
    IF NEW.Movement_Type = 'Departure' THEN
        UPDATE Animals
        SET Leave_Date = NEW.Movement_Date
        WHERE Animal_Id = NEW.Animal_Id;
    END IF;
END;

//

DELIMITER ;




-- Creating a view to calculate total amount collected by animal type
CREATE VIEW TotalAmountCollectedByAnimalType_View AS
SELECT
    a.Species,
    SUM(d.Amount) AS TotalAmountCollected
FROM
    Animals a
JOIN
    Donation d ON a.Animal_Id = d.Animal_Id
GROUP BY
    a.Species;


-- GetFeedingSchedule_Procedure : Function to fetch feeding schedule for animals
DELIMITER //

CREATE PROCEDURE GetFeedingSchedule_Procedure(IN animalId INT)
BEGIN
    SELECT FeedingSchedule_Id, Feeding_Time, Quantity, Feeding_Frequency
    FROM FeedingSchedules
    WHERE Animal_Id = animalId;
END //

DELIMITER ;
