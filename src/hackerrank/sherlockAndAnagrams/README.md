### Mathematical approach

It uses combinatorics

I manged to solve this by a very simple math formula. First, I group and count frequencies of duplicated substrings . Then, the number of anagram pairs of a substring can be calculated by vertices-edges relationship.

E.g. For input,

1
aaa

I would have a HashMap like,

[{a:3}, {aa:2}]

Then,

'a' appears at 11,22,33 => number of pairs = (3)(3-1)/2 = 3

'aa' appears at 12,23 => number of pairs = (2)(2-1)/2 = 1

Just sum them up to get total number of anagram pairs for 'aaa'. E.g. 3+1 = 4