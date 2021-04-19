function minimumEditDistance(str1, str2) {
  // Both strings are empty and hence equal, so minimum edit distance is 0
  if (str1.length === 0 && str2.length === 0) return 0;
  /* 
    If one string is empty, then we will have to add
    all the characters of the second string, hence 
    minimum edit distance will be the length of the non-empty string
  */
  if (str2.length === 0) return str1.length;
  if (str1.length === 0) return str2.length;
  // Characters at the current position are equal, we don't need to do
  // anything, move on to the next characters of both the strings
  if (str1[0] === str2[0])
    return minimumEditDistance(str1.slice(1), str2.slice(1));
  if (str1[0] !== str2[0]) {
    // update means move on to the next characters of both the strings
    let update = minimumEditDistance(str1.slice(1), str2.slice(1));
    // for delete, we are thinking that we are altering string1 to make it
    // look like string2, in code it is like moving on to the next character
    // for just this string
    let del = minimumEditDistance(str1.slice(1), str2);
    // for add, in code it is like don't do anything to this character of
    // string1, delete 1st character of string2
    let add = minimumEditDistance(str1, str2.slice(1));
    let min = Math.min(update, del);
    min = Math.min(min, add);
    return min + 1;
  }
}
