/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = (grid) => {
    let visited = new Set();
    let time = 0;
    let N = grid.length;
    
    let dirs = [[-1,0], [0,-1], [0,1],[1,0]];
    
    const dfs = (r, c) => {
        if(r < 0 || r > N -1 || c < 0 || c > N -1 || time < grid[r][c] || visited.has(r*N + c)) return;
        visited.add(r * N + c);
        for(let [rr, cc] of dirs) 
            dfs(r + rr, c + cc);
    };
    
    while(!visited.has(N * N-1)) {
        visited.clear();
        dfs(0,0);
        time++;
    }
    
    return time - 1;
};

console.log(swimInWater([[0,2], [1,3]]));
// console.log(swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]));