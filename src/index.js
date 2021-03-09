


module.exports = function towelSort(matrix) {
  let k = 0;
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; h++) {
      array[k] = matrix[i][j];
      k++;
    }
  }

  return array;
}
