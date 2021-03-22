/*
  Time complexity : O(M×N) where MM is the number of rows and NN is the number 
                    of columns. Because every grid element is only visited
                    once.

  Space complexity : worst case O(M×N) 
                     in case that the grid map is filled with lands where 
                     DFS goes by M×N deep.
*/

function dfs(grid, r, c){
  let rows = grid.length, cols = grid[0].length;
  if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0')
    return
  // Since we don't want to visit this element again, instead of making
  // a visited datastructure, we are just setting the value to '0'
  grid[r][c] = '0';
  dfs(grid, r-1, c);
  dfs(grid, r, c-1);
  dfs(grid, r+1, c);
  dfs(grid, r, c+1);
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    let islands = 0;
    for (let i = 0; i < rows; i++){
      for (let j = 0; j < cols; j++){
        if (grid[i][j] === '1'){
          islands++;
          dfs(grid,i,j)
        }
      }
    }
  return islands;
};
