/*

  This solution is not better than O(n(logn)) because in worst case
  the map would be equal to the size of the input array
  and we are sorting it, also sort in worst case of sort is O(n^2)

*/

/*

  Problems I faced while solving this:
  I needed to use heap but since JS doesn't have an inbuilt class
  I didn't use it. Being comfortable enough to write a heap class
  quickly in no time will take a lot of practice

*/

function sortDescending(a,b){
  return b[1] - a[1];
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /*
      Make a hashmap of count of elements
      element should be the key inside hashmap
      then get the kwys from hashmap which have value greater than or equal to k
    */
  const countMap = new Map();
  nums.forEach((num) => {
    const currentValue = countMap.get(num);
    countMap.set(num, currentValue ? currentValue + 1 : 1);
  })
  const array = Array.from(countMap).sort(sortDescending)
  return array.slice(0,k).map((arr) => arr[0]);
};


/*

    After looking at the solutions in leetcode,
    I found out that in case k === nums.length, we can
    just return num because that means all the elements 
    are unique



*/