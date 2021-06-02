var findSmallestSetOfVertices = function(n, edges) {
  // Answer is all the nodes with 0 indegree
  // as it is given that there is a path present
  // so we must visit all the nodes with zero indegree
  const result = new Array(n).fill(true);
  edges.forEach(([from, to]) => {
    result[to] = false;
  });

  return result.reduce((result, value, index) => {
    if (value === true) result.push(index);
    return result;
  }, []);
};
