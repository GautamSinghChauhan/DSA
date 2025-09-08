// function findRowWithMax1s(matrix) {
//     let maxCount = 0;
//     let maxRow = -1;

//     for (let i = 0; i < matrix.length; i++) {
//         let count = 0;
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === 1) {
//                 count++;
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             maxRow = i;
//         }
//     }

//     return maxRow;

//         }

//         const matrix = [
//             [0, 1, 1, 1],
//             [0, 0, 1, 1],
//             [1, 1, 1, 1],
//             [0, 0, 0, 0]
//           ];
          
//           const result = findRowWithMax1s(matrix);
//           console.log(result);



//           function findRowWithMax1s1(matrix) {
//             let rows = matrix.length;
//             // console.log(rows);
//             let cols = matrix[0].length;
//             // console.log("column",cols);
            
//             let maxRowIndex = -1; // Initialize with -1 for no row found
//             let col = cols - 1;   // Start from the last column
//             let row = 0;          // Start from the first row
//             // console.log(row < rows && col >= 0);
//             while (row < rows && col >= 0) {

//               if (matrix[row][col] === 1) {
//                 // Move left if 1 is found
//                 maxRowIndex = row; // Update row with max 1s
//                 console.log(maxRowIndex);
//                 col--;             // Move to the left column
//               } else {
//                 // Move down if 0 is found
//                 row++;
//               }
//             }
            
//             return maxRowIndex;
//           }
          
//           // Example usage:
//           const matrix1 = [
//             [0, 1, 1, 1],
//             [0, 0, 1, 1],
//             [1, 1, 1, 1],
//             [0, 0, 0, 0]
//           ];
          
//           console.log(findRowWithMax1s1(matrix1)); // Output: 2





          function findRowWithMax1s3(matrix,n,m){
            let maxCount = 0;
            let maxRow = -1;
            // console.log(cols);

            for(let i=0;i<n;i++){
                let count = 0;
                for(let j=0; j<m;j++){
                    if(matrix[i][j]===0){
                        count++;
                    }



                }
                if(count > maxCount){
                    maxCount=count;
                    maxRow=i;
                }

            }
            return maxRow;

          }

          // Example usage:
const matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
  ];

// Pass the matrix, number of rows, and columns
const n = matrix.length; // Number of rows
const m = matrix[0].length; // Number of columns

const result = findRowWithMax1s3(matrix, n, m);
console.log(result); // Output: 2
          
