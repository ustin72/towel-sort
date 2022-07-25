
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments[0] === undefined)
    return [];
  
    for(let i = 0; i < matrix.length; i++)      
      if(i % 2 === 1)
        matrix[i] = matrix[i].reverse();
    
    return matrix.flat(Infinity);
}
