# My notes:

## For first approach
[1] -> 1
[1,2] -> 2 papers, h index = 1
[1,3,4] -> 

// start considering from the length of the array to 1
// At least the numbers = n considered should be greater than or equal to n
// other numbers should be less than n


[1,3,4]
Starts with n = 3
Is 1 greater than equal to 3? No
Is 3 greater than equal to 3? Yes
Is 4 greater than equal to 3? Yes
n = 3, count = 2

Starts with n = 2
Is 1 >= 2? No
Is 3 >= 2? Yes
Is 4 >= 2? Yes
n = 2, count = 2 


## For second approach 


[1,3,4]
Starts with n = 3
Is element at (n - length) index >= n. If it is, then
all the elements after that will also be equal


[1,2,3,4,5,8]
n = 6
i = 6 - 6 = 0, 1 is not greater than 6

n = 5
i = 6-5 = 1, 2 is not greater than 5

n = 4
i = 2, 3 is not greater than 4

n = 3
i = 3, 4 is greater than 3