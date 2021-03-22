In level order we return nodes at every level as arrays

```
         3
    6         1
9      2         4
  5
8

```

The answer for above tree should be:

`[[3], [6,1], [9,2,4], [5], [8]]`

levelOrder traversal is similar to BFS

BFS code:

```javascript
  function BFS(root){
    if (!root)
      return null;
    let res = [], q = [root];
    while(q.length){
      let node = q.shift();
      res.push(node.val);
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    return res;
  }

```
BFS would give the following output for the above
question:
``` [3,6,1,9,2,4,5,8]  ```

Here we can see that only the knowledge of individual levels is missing