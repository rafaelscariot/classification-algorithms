// code -> github.com/rafaelscariot/classification-algorithms

// Insertion Sort

// objective: sort a list of numbers in ascending or descending order

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];

    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j -= 1;
    }

    array[j + 1] = currentValue;
  }

  return array;
}

let newArray = insertionSort([3, 2, 1]);
console.info(newArray); // [ 1, 2, 3 ]

newArray.push(0);
console.info(newArray); // [ 1, 2, 3, 0 ]

newArray = insertionSort(newArray);
console.info(newArray); // [ 0, 1, 2, 3 ]
