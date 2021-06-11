There are some linear time string matching algorithms in average time.
1. Rabin Karp (We will be using for this particular situation)
2. Kmp, location: "src/DsAlgo/algo/kmp"

I find Rabin Karp is easy to remember for me


## RabinKarp:
It needs a good hashing function to avoid collisions. Otherwise we will get worst case complexity, in which we need to compare pattern with the window of text again and again

We can chose to not use modulus like we haven't in our solution if we feel confident that the hash value won't be too big.