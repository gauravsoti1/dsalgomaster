## Xor Operator(^)
The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s. 

This can be used to figure out if 1 of the condition is true
For example: we have 2 big numbers stored in an array, which can be negative, so we need the final result of their 
multiplication, whether it will be positive or negative. We can do that in the following way:

```javascript
  function sign(num1 = [], num2 = []){
    // num1[0] < 0 ^ num2[0] < 0, this results in either 0 or 1 and we know 0 is falsy in js
    return num1[0] < 0 ^ num2[0] < 0 ? -1 : 1;
  }

```