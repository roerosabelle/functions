function firstLetterName(name) {
    alert("The name " + name + " starts with the letter " + name[0]);
}
firstLetterName("Gisselle");



function divisibleByTwo(num) {
    if(num % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(divisibleByTwo(3));


const numbersInArray = [7,81,13,21,50];
function largestNum (arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNum(numbersInArray));
firstLetterName("Gisselle");
divisibleByTwo(3);
