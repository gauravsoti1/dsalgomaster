## Sieve of Eratosthenes

The Sieve of Eratosthenes is a very simple and popular technique for finding all the prime
numbers in the range from 2 to a given number n.

Initially, we have the array of all the numbers {2, 3, . . . , n} which we consider are primes. At each step we choose the
smallest prime number in the set and remove all its multiples.

<img src="../../../../public/images/sieve%20of%20erasthotnes.png">

We can do better, we don't need to check multiples less than i*i because they have already been removed before.

```javascript
  const primes = new Array(number+1).fill(false);
  let i = 2;
  while (i * i <= number) {
    if (primes[i]) {
      let k = i * i;
      while (k < number) {
        primes[k] = false;
        k += i;
      }
    }
    i++;
  }
```

## Factorization
Factorization is the process of decomposition into prime factors. More precisely, for a given
number x we want to find primes p 1 , p 2 , . . . , p k whose product equals x.