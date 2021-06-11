## Counting no of divisors 
For a number n, how to count the number of divisors?
One linear way is to go through 1 to n (as a number divides itself) and check if the the elem divides our number

One better way which halves our iterations:
If  `a` divides our number -> `n`, then `n/a` also divides our number `n`

Hence we need to iterate only till sqrt(n)


## Checking if a number is prime
Iterating from `2` to `sqrt(n)`, if the currElem divides `n` then `n` is not a prime

