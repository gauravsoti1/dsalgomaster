## Easier Solution
  There is easier way to solve the question in O(n) time.
  Just use the hashmap for one of the list and then iterate through the other list and find the match.



# O(1) space solution explanation:
```
     4 -> 1 -> 8 -> 4 -> 5
               |
5 -> 6 -> 1 ----   
```

list1 has length of 5
list2 has length of 6

Algo:
  1. skip the longer length list by the difference of length
  2. Then we can easily iterate both the lists together until their heads are the same
  3. If the head was never the same, then list don't overlap