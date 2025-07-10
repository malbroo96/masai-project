function twoArrayAndProduct(n, m, matrix, p) {
  //write code here
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j + 2 < m) {
        let prod = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2];
        if (prod === p) count++;
      }


      if (i + 2 < n) {
        let prod = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j];
        if (prod === p) count++;
      }

      if (i + 2 < n && j + 2 < m) {
        let prod = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2];
        if (prod === p) count++;
      }

      if (i + 2 < n && j - 2 >= 0) {
        let prod = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2];
        if (prod === p) count++;
      }
    }
  }

  console.log(count);

}
