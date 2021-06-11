What is happening in the solution given in the book?

subListHead is always the node before the start of the sublistRange. 
For example: 
list = 1 -> 2 -> 3 -> 4 -> 5
range = 2 to 4
so sublist head will always be at 1

the solution is bases on rotating the values 1 by 1
in 1st step we bring 3 before 2
list = 1 -> 3 -> 2 -> 4 -> 5
in 2nd step we bring 4 before 3

essentially we are bring the next element at the start of the sublist 