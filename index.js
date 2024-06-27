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
const largeNum = findMax(arr);
console.log('The largest number is', largeNum);


                        // Ans to the question no 4


function reverseString(reString) {
    const word = reString.split('');
    word.reverse();
    const reverseString = word.join('')

    return reverseString;
    
}

const reverse = 'Haire javascript';
const reversing = reverseString(reverse);

console.log(reversing);


                        // Ans to the question no 5


function filterOddNumbers(numbers) {
    const oddNum = numbers.filter(number => number % 2 !== 0);
    return oddNum;
};

const findOddNumbers = [23, 43, 32, 4, 54, 34, 45, 31];
const theOddNum = filterOddNumbers(findOddNumbers);
console.log("The odd numbers is", theOddNum);



                        // Ans to the question no 6

function sumArray (numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number
    }
    return sum;
}

const sumArr = [1,2,3,4,5,6,7,8,9];
const finalResult = sumArray(sumArr);

console.log(finalResult);


                        // Ans to the question no 7


function sortArray(numbers) {
    const number = numbers.sort((a, b) => a - b);
    return number;
    
}

const unsort = [2,3,5,7,4,6,1]
const sortNumber = sortArray(unsort);

console.log(sortNumber);


                        //   Ans to the question no 8

function capitalizedFirstLetter(string) {
    if(!string) return string
    const firstLetter = string[0].toUpperCase();
    const anotherletter = string.slice(1);
    return firstLetter + anotherletter;
}

const myString = "onek kosto holo"
const capitalString = capitalizedFirstLetter(myString);

console.log(capitalString);