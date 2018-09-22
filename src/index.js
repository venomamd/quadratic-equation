module.exports = function solveEquation(equation) {
  // your implementation
 
  let arr = [];
  let solutions = [];
  let a, b, c, D;
  let x1, x2;
  const regexp = /[^x^]\d+/g;
  
  equation = equation.replace(/\s/g, "");
  arr = equation.match(regexp);

  a = parseInt(arr[0]);
  b = parseInt(arr[1]);
  c = parseInt(arr[2]);
  D = b * b - 4 * a * c;

  if(D > 0) {
    x1 = Math.round((- b + Math.sqrt(D)) / (2 * a));
    x2 = Math.round((- b - Math.sqrt(D)) / (2 * a));
    solutions = [x1, x2];
    return solutions.sort((a, b) => a-b);
  }else if(D < 0) {
    solution = [null, null];
    return solutions;
  }  else if(D === 0) {
    x1 = Math.round((- b) / (2 * a));
    solutions = [x1, null];
    return solutions;
  }

}
