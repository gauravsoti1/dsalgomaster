Intuition

The idea is to split the array in blocks with length of √n. Then we calculate the sum of each block and store it in auxiliary memory b. To query RSQ(i, j), we will add the sums of all the blocks lying inside and those that partially overlap with range [i…j].

Algorithm
<img src="../../../public/images/307_RSQ_Sqrt.png"> 


In the example above, the array `nums's` length is `9`, which is split into blocks of size `√9`
​. To get `RSQ(1, 7)` we add `b[1]`. It stores the sum of `range [3, 5]` and partially sums from `block 0` and `block 2`, which are overlapping boundary blocks.

```java

private int[] b;
private int len;
private int[] nums;

public NumArray(int[] nums) {
    this.nums = nums;
    double l = Math.sqrt(nums.length);
    len = (int) Math.ceil(nums.length/l);
    b = new int [len];
    for (int i = 0; i < nums.length; i++)
        b[i / len] += nums[i];
}

public int sumRange(int i, int j) {
    int sum = 0;
    int startBlock = i / len;
    int endBlock = j / len;
    if (startBlock == endBlock) {
        for (int k = i; k <= j; k++)
            sum += nums[k];
    } else {
        for (int k = i; k <= (startBlock + 1) * len - 1; k++)
            sum += nums[k];
        for (int k = startBlock + 1; k <= endBlock - 1; k++)
            sum += b[k];
        for (int k = endBlock * len; k <= j; k++)
            sum += nums[k];
    }
    return sum;
}

public void update(int i, int val) {
    int b_l = i / len;
    b[b_l] = b[b_l] - nums[i] + val;
    nums[i] = val;
}
// Accepted

```

Complexity Analysis

  Time complexity : O(n) - preprocessing, O(√n) -range sum query, O(1) - update query


  For range sum query in the worst-case scenario we have to sum approximately 3√n elements. In this case the range includes √n−2 blocks, which total sum costs √n−2 operations. In addition to this we have to add the sum of the two boundary blocks. This takes another 2 (√n - 1 operations. The total amount of operations is around 3√n.

  Space complexity : O(√n)

  We need additional √n memory to store all block sums. 