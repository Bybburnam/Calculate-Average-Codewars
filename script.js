//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.
function findAverage(array) {
    let addedNumbers = 0;
    let totalSum = 0;
    
    if (array.length === 0) return 0;
    
    for (let i=0; i < array.length; i++){
      totalSum = totalSum + array[i];
      addedNumbers++
    }
    return (totalSum / addedNumbers);
  }