<a src="../../../../public/documents/Codility-Lesson-12.pdf"> Download pdf </a>

We can find GCM of 2 number by subtraction or division

### By Subtraction
Keep subtracting smaller number from the bigger one and recursively call gcd function


### By division
Let’s start by understanding the algorithm and then go on to prove its correctness. For two
given numbers a and b, such that a � b:
• if b | a, then gcd(a, b) = b,
• otherwise gcd(a, b) = gcd(b, a mod b).

gcd(24, 9) = gcd(9, 6) = gcd(6, 3) = 3
24 mod 9 = 6, 9 mod 6 = 3, 6 mod 3 = 0