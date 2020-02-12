CREATE table studentBdays(
    id int auto_increment primary key,
    fname varchar(20),
    lname varchar(20),
    ssn char(11),
    dob date,
    age tinyint
);

-- CHARACTER DATA
----
-- char fixed length
-- varchar      variable length
-- tinytext     255
-- text         65, 535
-- mediumtext   16, 777, 215
-- longtext     4, 294, 967, 295

-- NUMERIC DATA TYPES
----
--              signed          unsigned
-- tinyint      -128 to 127     0 to 255
-- smallint     -32k to 32k     0 to 65k
-- mediumint    -8mil to 8mil   0 to 16mil
-- int          -2bil to 2bil   0 to 4bil
-- bigint       -9q to 9q       0 to 18q

-- TEMPORAL DATA
----
-- date         YYYY-MM-DD
-- datetime     YYYY-MM-DD HH:MI:SS
-- timestamp    YYYY-MM-DD HH:MI:SS   
-- year         YYYY
-- timestamp    HH:MI:SS
-- now()

-- CHARACTER SETS - limit the characters that can be used in the database
-- Latin
-- Swedish CI
-- UTF-8
-- Cyrillic [Russian]


