function bubbleSort(arr) {
let logik = arr.length;
let i = 0;

while (i < logik - 1) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let replace = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = replace;
            }
        }
        i++;
    }
    return arr;
}
const arr = [8, 2, 12, 0, 5, 9];
console.log(bubbleSort(arr));
  