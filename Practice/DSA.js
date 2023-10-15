const sumPairV2 = (arr, X) => {
  const pairs = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const mapping = {};
    const firstVal = arr[i];

    for (let j = i + 1; j <= arr.length - 1; j++) {
      const secondVal = arr[j];
      const firstTwoNoSum = firstVal + secondVal;

      if (firstTwoNoSum > X) {
        continue;
      }

      const thirdVal = X - firstTwoNoSum;
      if (!mapping.hasOwnProperty(thirdVal)) {
        mapping[secondVal] = j;
        continue;
      }

      pairs.push([firstVal, secondVal, thirdVal]);
    }
  }
  console.log(pairs);
  console.log(pairs[0]);

  return pairs;
};

sumPairV2([1, 2, 3, 4, 5, 6], 10);
sumPairV2([1, 2, 3, 4, 5, 6], 10);












// /**
//  * -  To find a first three elements from a number array whose sum is X
//  *   X = 6
//  *   arr = [1,2,3,4,5,6] // 1,2,3
//  *Algorithm:-
//  * Use function with two paramters i.e input array=arr & sum value=X
//  * Traverse over arr using two for loops & find complement no.
//  * Check whether this complement no is available in obj if yes push it to new array arr1.
//  * If not then add element as key in the object
//  */

// function sumPair(arr, X) {
//   const arr1 = [];

//   for (let i = 0; i <= arr.length - 1; i++) {
//     const obj = {};
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (arr[i] + arr[j] <= X) {
//         const firstTwoNoSum = arr[i] + arr[j];
//         const remValue = X - firstTwoNoSum;
//         if (obj.hasOwnProperty(remValue)) {
//           arr1.push([arr[i], arr[j], remValue]);
//         } else {
//           obj[arr[j]] = j;
//         }
//       }
//     }
//   }
//   console.log(arr1);
//   console.log(arr1[0]);
// }

// sumPair([1, 2, 3, 4, 5, 6], 10);




// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>
// <script>
    
//     function tryMe(arr,x){
//         for(i=0;i<arr.length;i++){
//             for(j=i+1;j<=i;j++){
//                 arr[i]+arr[j] === x;
//                 console.log(arr[i],arr[j]);
//             }
//         }
//     }
//     tryMe([1,2,3,4,5,6],5);
// </script> -->