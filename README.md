# Update-Priority-in-SQL-
Update priority of other records based on new /old value in SQL Server

CREATE TABLE P (
    Col1 VARCHAR(25),
    Priority INT
    );
INSERT INTO P VALUES
('val1', 1),
('val2', 2),
('val3', 3),
('val4', 4),
('val5', 5),
('val6', 6);
select * from P

--DECLARE @PrioriyToChange int = 6;
--DECLARE @NewPrioriy int = 2;
DECLARE @PrioriyToChange int = 6;
DECLARE @NewPriority int = 5;

 

select Col1,priority, case when priority = @PrioriyToChange then @NewPriority
                     when priority >= @NewPriority and priority<=@PrioriyToChange - 1 then priority + 1
					 when priority >= @PrioriyToChange and priority<=@NewPriority then priority - 1
                     else priority end Priority2 from P
																
--case when 3 = 2 then 6
--                     when 3 >= 6 and 3<=2 - 1
--                          then 3 + 1
--                     else 3
--                end

