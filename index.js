function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


console.log("The maximum of the two numbers is:", maxOfTwoNumbers(10,45));

function findLongestWord(words) {
    let maxLength = 0;
    let maxWord;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            maxWord = words[i];
        }
    }

    return maxWord;
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
console.log("The longest word is:", findLongestWord(words));
function sumNumbers(numbers)
{
    let i;
    let sum=0;
    for(i=0;i<numbers.length;i++)
    {
        sum=sum+numbers[i];
    }
    return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers));
function sum(arr) {
    let total = 0;

    for (let element of arr) {
        if (typeof element === 'number') {
            total += element;
        } else if (typeof element === 'string') {
            total += element.length;
        } else if (typeof element === 'boolean') {
            total += element ? 1 : 0;
        }
    }

    return total;
}

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
console.log(sum(mixedArr)); 
function averageNumbers(numbers2)
{
    let n=numbers2.length;
    let i,sum=0;
    for(i=0;i<n;i++)
    {
        sum=sum+numbers2[i];
    }
    return sum/n;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));
function averageWordLength(words) {
    if (words.length === 0) {
        return 0; 
    }

    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }

    return totalLength / words.length;
}

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
console.log("The average word length is:", averageWordLength(words2));

function avg(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            total += arr[i];
        } else if (typeof arr[i] === 'string') {
            total += arr[i].length;
        } else if (typeof arr[i] === 'boolean') {
            total += arr[i] ? 1 : 0;
        }
    }

    return total / arr.length;
}
console.log(avg(mixedArr));
function uniqueArr(arry) {
    let uniqueArray = [];

    for (let i = 0; i < arry.length; i++) {
        if (uniqueArray.indexOf(arry[i]) === -1) {
            uniqueArray.push(arry[i]);
        }
    }

    return uniqueArray;
}

const arr = [
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'playground',
    'poison',
    'communion',
    'simple',
    'bring'
];

console.log("Unique array:", uniqueArr(arr));
function doesWordExist(wordArray, targetWord) {
    for (let word of wordArray) {
        if (word === targetWord) {
            return true;
        }
    }

    return false;
}

const words3 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const searchWord = 'trouble';

if (doesWordExist(words, searchWord)) {
    console.log(`${searchWord} is present`);
} else {
    console.log(`${searchWord} is not present`);
}
function howManyTimes(wordArray, targetWord) {
    let count = 0;

    for (let word of wordArray) {
        if (word === targetWord) {
            count++;
        }
    }

    return count;
}

const words4 = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

const searchWord1 = 'matter';
console.log(`The word '${searchWord1}' appears ${howManyTimes(words4, searchWord1)} times.`);
function greatestProduct(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxProduct = 0;

 
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j <= numCols - 4; j++) {
            const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

 
    for (let i = 0; i <= numRows - 4; i++) {
        for (let j = 0; j < numCols; j++) {
            const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}


const matrix = [
    [1, 2, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5]
];

const result = greatestProduct(matrix);
console.log("The greatest product of four adjacent numbers is:", result);
