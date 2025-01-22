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

let arr = [1, 2, 2, 3, 4, 4, 4];
let freq = {};
for(let i=0;i<arr.length;i++)
{
    if(freq[arr[i]])
    {
        freq[arr[i]]++;
    }
    else
    {
        freq[arr[i]] = 1;
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

let arr2 = [1, 2, 3, 4, 5];
let rotateBy = 2;

let temp = arr2.pop();
arr2.unshift(temp);
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