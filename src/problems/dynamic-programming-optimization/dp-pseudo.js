let solutions = [[], []];
function add(x, y) {
 if(solutions.length > 0 && solutions[x][y] !== undefined) {
  return solutions[x][y];
 }
 
 solutions[x] = x + y;
 solutions[y][x] = solutions[x][y];
 return solutions[x][y];
}

console.log(add(2,3));

console.log(add(3,2));
