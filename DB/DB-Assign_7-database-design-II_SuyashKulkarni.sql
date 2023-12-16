--YOUR NAME HERE	ASSIGNMENT 7 GROUPING RESULTS
--Put your answers on the lines after each letter. E.g. your query for question 1A should go on line 5; your query for question 1B should go on line 7...
-- 1 
--A
CREATE DATABASE Video_Games;
USE Video_Games;
CREATE TABLE Authors (
    AuthorId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(255),
    Join_Date DATETIME,
    About TEXT
);
CREATE TABLE Posts (
    PostId INT AUTO_INCREMENT PRIMARY KEY,
    AuthorId INT,
    Title VARCHAR(255),
    Details TEXT,
    Publication_Date DATETIME,
    FOREIGN KEY (AuthorId) REFERENCES Authors(AuthorId)
);
--B
INSERT INTO Authors (AuthorId, Name, Email, Join_Date, About)
VALUES
    (1, 'John', 'John@gmail.com', '2019-11-06 14:30:00', 'I am author who writes about AR games.'),
    (2, 'Jane', 'Jane@gmail.com', '2013-1-16 01:03:00', 'I am author who writes about PC games.'),
    (3, 'Alice', 'Alice@gmail.com', '2015-10-03 18:20:00', 'I am author who writes about Consoles games.');

INSERT INTO Posts (PostId, AuthorId, Title, Details, Publication_Date)
VALUES
    (1, 2, 'PC games New Launch', 'New Games Have been lauched recently and does work with the higher version of systems.', '2020-10-06 10:10:00'),
    (2, 3, 'Progress in Consoles', 'In last few years consoles have been a lot in demand.', '2017-01-05 12:20:00'),
    (3, 2, 'New PC Games Updated' , 'Nowadays PC games have a lot more higer PC requirements that usual.', '2012-02-01 02:10:00');

-- 2
--A
CREATE TABLE Comments (
    CommentsId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Comment TEXT
);
--B
INSERT INTO Comments (CommentsId, Name, Comment)
VALUES
    (1, 'Alex', 'Thanks for thos valuable post. Great Work!!!'),
    (2, 'Diego', 'A lot has been happening with a rapid speed.'),
    (3, 'Wilber' , 'WOW!!! That was really great to know.');


-- 3
--A
ALTER TABLE comments
ADD comment_date DATETIME;

UPDATE comments
SET comment_date = '2022-01-11 10:00:00'
WHERE CommentsId = 1;

UPDATE comments
SET comment_date = '2019-07-06 14:30:00'
WHERE CommentsId = 2;

UPDATE comments
SET comment_date = '2020-05-12 08:45:00'
WHERE CommentsId = 3;
--B
DELETE Authors, Posts
FROM Authors
LEFT JOIN Posts ON Authors.AuthorId = Posts.AuthorId
ORDER BY Authors.AuthorId
LIMIT 2;
