[KMP Very Good Youtube explanation video](https://youtu.be/4jY57Ehc14Y)
Algo:
1. Make the pattern table
   1. We need to find for every index of the searc word, longest prefix which also a suffix
   2. It will be 0 for the first index
   3. For index = 1, if the element at index = 0 and 1 are both equal, 
      we store 1 in the pattern table. That means if we find a mismatch at index = 1 in our search
      we start again from index 1
   4. Whenever we find a match at prefix Index and suffix index, we increment the value of prefixLen
      and store it in pattern table
   5. When we don't find a match, we keep making prefixLen = value at patternTable[prefixLen-1] until we
      find a match with the char at suffix len and store that value or if we reach at 0, we store 0 there
2. Search the text using pattern table
   1. We try to match every char with text
   2. When we get a mismatch, we see the value in pattern table for what should be our new wordIndex

<img src="../../../public/images/kmpPatternTable.png">

<br />
<br />

### Explanation on the complexity:

Making the **LPS (Longest Proper Prefix which is also a suffix)** array requires one loop essentially and hence has O(M) complexity. 

The whole string is essentially processed only once, hence the complexity is O(N). 

Therefore the total complexity = O(M+N) = O(N) if N >> M