// 1.    Sum of Elements
// Write a program to take an array of integers as input and calculate the sum of all elements in the array.

let num = [1, 2, 3, 4];
let sum = 0;
for(let i=0;i<num.length;i++) {
    
    sum = sum + num[i];
}
console.log(sum);

// 2.    Find Maximum and Minimum
// Write a program to find the maximum and minimum values in an array of integers.
let num1 = [1, 22 ,5, 3, 4];
let max =Math.max(...num1);
let min =Math.min(...num1);
console.log(max,min);

// 3.    Reverse an Array
// Write a program to reverse the elements of an array without using an additional array.
let revarray = ['a', 'b', 'c', 'd', 'e'];
let left =0;
let right = revarray.length-1;
while(left<right)
{
    let temp = revarray[left];
    revarray[left] = revarray[right];
    revarray[right] = temp;
    left++;
    right--;
}
console.log(revarray);


//  4.    Count Even and Odd Numbers
// Write a program to count the number of even and odd numbers in an array of integers.
let num2 = [1, 2, 3, 4, 5];
let even = 0;
    let odd = 0;
    for(let i=0;i<num2.length;i++)
        {
            if(num2[i]%2==0)
            {
                even++;
            }
            else
            {
                odd++;
            }
        }
console.log("Even numbers: ", even, "Odd numbers: ", odd);

//  5.    Search an Element
// Write a program to search for an element in an array and return its index. If the element is not found, display a message.
let elem = [1,2,3,4,5];
let findelement = function(elem,search)
{
    for(let i=0;i<elem.length;i++)
    {
        if(elem[i]==search)
        {
            return i;
        }
    }
    return "Element not found";
}
console.log(findelement(elem, 6));

//  6.    Frequency of Elements
// Write a program to count the frequency of each element in an array. Example:
// Input: [1, 2, 2, 3, 4, 4, 4]
// Output: 1: 1, 2: 2, 3: 1, 4: 3

let arr9 = [1, 2, 2, 3, 4, 4, 4];
let freq = {};
for(let i=0;i<arr9.length;i++)
{
    if(freq[arr9[i]])
    {
        freq[arr9[i]]++;
    }
    else
    {
        freq[arr9[i]] = 1;
    }
}
// 7.    Second Largest Element
// Write a program to find the second largest element in an array.
let arr1 = [1, 2, 3, 4, 5];
let max1 = Math.max(...arr1);

let secondMax = -Infinity;

for(let i=0;i<arr1.length;i++)
    {
    if(arr1[i]>max1 && arr1[i]<secondMax)
    {
        secondMax = arr1[i];
    }
}

console.log(secondMax);
// 8.    Rotate an Array
// Write a program to rotate an array to the right by a given number of steps. Example:
// Input: [1, 2, 3, 4, 5], Rotate by 2
// Output: [4, 5, 1, 2, 3]

let arr22 = [1, 2, 3, 4, 5];
let rotateBy = 2;

for (let i = 0; i < rotateBy; i++) {
    let temp = arr22.pop();  // Remove the last element
    arr22.unshift(temp);     // Add the element to the front
}

console.log(arr2);
// 9.    Check Palindrome Array
// Write a program to check if an array is a palindrome. Example:
// Input: [1, 2, 3, 2, 1]
// Output: true

let arr3 = [1, 2, 3, 2, 1];
let isPalindrome = true;

for(let i=0;i<arr3.length/2;i++)
{
    if(arr3[i]!== arr3[arr3.length-1-i])
    {
        isPalindrome = false;
        break;
    }
}
// 10. Merge Two Arrays
// Write a program to merge two arrays into a single array. 

let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];

let mergedArray = [...arr4,...arr5];
// 11. Remove Duplicates
// Write a program to remove duplicate elements from an array. Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

let arr6 = [1, 2, 2, 3, 4, 4];
let uniqueArray = [...new Set(arr6)];

// //1. Program to find longest word in a given sentence ?
    let sentence = "I am a full stack developer";
    let words = sentence.split(" ");
    let longestWord = "";
    
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length>longestWord.length)
        {
            longestWord = words[i];
        }
    }
    console.log(longestWord);
// 2. How to check whether a string is palindrome or not ?
    let str = "madam";
    let reversedStr = str.split("").reverse().join("");
    if(str === reversedStr)
    {
        console.log(str + " is a palindrome");
    }
// 3. Write a program to remove duplicates from an array ?
    let arr = [1, 2, 2, 3, 4, 4];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
// 4. Program to find Reverse of a string without using built-in method ?
    let str1 = "hello";
    let reversedStr1 = "";
    for(let i=str1.length-1;i>=0;i--)
    {
        reversedStr1 += str1[i];
    }
    console.log(reversedStr1);
// 5. Find the max count of consecutive 1’s in an array ?
    let arr2 = [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1];
    let count = 0;
    let maxCount = 0;
    for(let i=0;i<arr2.length;i++)
    {
        if(arr2[i] === 1)
        {
            count++;
        }
        else
        {
            if(count > maxCount)
            {
                maxCount = count;
            }
            count = 0;
        }
    }

    // separete the str into 2 digts and find max

let str23 = '123123414123'
let separatedStr = str23.match(/.{1,2}/g)

console.log(separatedStr)
let max123 = Math.max(...separatedStr)
console.log(max123)


// print numbers as per integer
let text = "a1b2c3";
let result = "";

for (let i = 0; i < text.length; i++) {
  let letter = text[i];
  i++; // move to the number
  let number = text[i];

  result = result + letter.repeat(number);
}

console.log(result); // Output: abbccc

// 6. Find the factorial of given number ?
let num3 = 5;
let factorial = 1;
for(let i=1;i<=num3;i++)
{
    factorial *= i;
}
console.log(factorial);
// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
let arr7 = [0, 3, 4, 31];
let arr8 = [4, 6, 30];
let mergedArr = [...arr7, ...arr8];
let sortedArr = mergedArr.sort((a, b) => a - b);
console.log(sortedArr);
// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// Example: ([1,2,3],[1,4,9]) => true
// Example: ([1,2,3],[1,4,4]) => false
let arr1 = [1, 2, 3];
let arr2 = [1, 4, 9];
let isSameFrequency = function(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}
console.log(isSameFrequency(arr1, arr2)); // true
// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// Example: "abc" and "cab" => true
// Example: "abc" and "cde" => false
let strA = "abc";
let strB = "cab";
let canForm = function(strA, strB) {
    if(strA.length !== strB.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of strA) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of strB) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}
console.log(canForm(strA, strB)); // true
// 10. Write logic to get unique objects from below array ?
// [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

let arr10 = [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
let uniqueObjects = arr10.filter((obj, index, self) => 
    index === self.findIndex((t) => (
        t.name === obj.name
    ))
);  
console.log(uniqueObjects);


// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// Example: [1, 2, 3, 4, 5] => [2, 4]
let arr11 = [1, 2, 3, 4, 5];
let evenNumbers = arr11.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 13. Write a JavaScript function to check if a given number is prime.
// Example: 7 => true, 8 => false
let isPrime = function(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
let nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
let largestElement = function(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            max = Math.max(max, largestElement(arr[i]));
        } else {
            max = Math.max(max, arr[i]);
        }
    }
    return max;
}
console.log(largestElement(nestedArray)); // 709
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// Example: 5 => [0, 1, 1, 2, 3]
let fibonacci = function(num) {
    let fib = [0, 1];
    for(let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// Example: "hello" => {h: 1, e: 1, l: 2, o: 1}
let str12 = "hello";
let charCount = function(str) {
    let count = {};
    for(let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }
    return count;
}
console.log(charCount(str12)); // {h: 1, e: 1, l: 2, o: 1}

// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// Example: "Hello World" => "World Hello"
let reverseWords = function(sentence) {
    let words = sentence.split(" ");
    let reversed = "";
    for(let i = words.length - 1; i >= 0; i--) {
        reversed += words[i] + " ";
    }
    return reversed.trim();
}
console.log(reverseWords("Hello World")); // "World Hello"

// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// Example: [[1, 2], [3, 4], [5]] => [1, 2, 3, 4, 5]
let flattenArray = function(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}
let strInput = "a.b.c";
let valueInput = "someValue";
let convertToObject = function(str, value) {
    let keys = str.split(".");
    let obj = {};
    let current = obj;
    for(let i = 0; i < keys.length; i++) {
        current[keys[i]] = (i === keys.length - 1) ? value : {};
        current = current[keys[i]];
    }
    return obj;
}
console.log(convertToObject(strInput, valueInput)); // {a: {b: {c: "someValue"}}}
