                            // Ans to the question no 1

function calculateSum(num1, num2) {
    
    const sum = num1 + num2;
    return sum;
}

const result = calculateSum(5, 5);
console.log('calculate sum',result);



                            //   Ans to the question no 2


function isEven (evenorodd){
    const check = evenorodd % 2 === 0;
    return check;
}
console.log('This is even',isEven(2));
console.log('This is odd',isEven(3));


                        //    Ans to the qusetion no 3

function findMax(maxNumber) {
    const max = Math.max(...maxNumber);
    return max;
}

const arr = [20, 34, 35, 69, 24, 10, 100];
console.log('The largest number is',findMax(arr));