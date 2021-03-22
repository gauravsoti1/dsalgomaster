// [2,4,5,7]
/*
          18
      6       12
    2   4    5  7
*/

/* 
  if root at 0
    the children = 2n+1 , 2n+2
    left child will be at odd index
    right child will be at even index
    
  If root at 1
    the chidren = 2n, 2n+1
    left child will be at even index
    right child will be at odd index
*/

// at index 0 we will always have 0 because our root starts from index 1
function buildTree(nums) {
  const n = nums.length;
  const tree = new Array(n * 2).fill(0);
  // Update all the leaves
  // leaves will be input array
  for (let i = n, j = 0; i < 2 * n; i++, j++) tree[i] = nums[j];
  // console.log("after first loop", tree);
  // Update the parent with its children
  for (let i = n - 1; i > 0; --i) {
    // console.log(
    //   `parent at index ${i} has children at ${i * 2} and ${i * 2 +
    //     1}  with values = ${tree[i * 2]} and ${tree[i * 2 + 1]}`
    // );
    tree[i] = tree[i * 2] + tree[i * 2 + 1];
    // console.log("tree =", tree);
  }
  console.log("tree=", tree);
  return tree;
}

var NumArray = function(nums) {
  this.n = 0;
  if (nums.length > 0) {
    this.n = nums.length;
    this.tree = buildTree(nums);
  }
};

/*

    Time complexity : O(log⁡n).

    Algorithm has O(log⁡n) time complexity, 
    because there are a few tree nodes with range that include ith array element, 
    one on each level. There are log⁡(n) levels.

    Space complexity : O(1).

*/
NumArray.prototype.update = function(pos, val) {
  // Move to the particular leaft node which will happen if we shift by the total numbers present
  pos += this.n;
  this.tree[pos] = val;
  while (pos > 0) {
    let left = pos,
      right = pos;
    /*
      This if else is because we need both the children
      of the parent, i.e. we need the sibling
    */
    if (pos % 2 === 0) {
      right = pos + 1;
    } else {
      left = pos - 1;
    }
    // parent is updated after child is updated
    const parentIndex = Math.floor(pos / 2);
    this.tree[parentIndex] = this.tree[left] + this.tree[right];
    pos = parentIndex;
  }
};

NumArray.prototype.sumRange = function(left, right) {
  console.log(`range = ${left} to ${right}`);
  // get leaf with value 'l'
  left += this.n;
  // get leaf with value 'r'
  right += this.n;
  let sum = 0;
  while (left <= right) {
    console.log(`left leaf = ${left}, right leaf = ${right}`);
    // checking if left is on the right side
    if (left % 2 === 1) {
      sum += this.tree[left];
      left++;
    }
    // checking if right is on the left side
    if (right % 2 === 0) {
      sum += this.tree[right];
      right--;
    }
    left = Math.floor(left / 2);
    right = Math.floor(right / 2);
    console.log(`new left = ${left}, new right = ${right}, sum = ${sum}`)
    // console.log("sum = ", sum);
  }
  return sum;
};

// const numArray = new NumArray([1, 1, 1, 1, 1, 1]);
const numArray1 = new NumArray([2, 4, 5, 7]);
numArray1.sumRange(1, 2);
