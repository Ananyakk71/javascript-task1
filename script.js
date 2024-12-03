//Question 1

function isPalindrome(str) {
    let j = str.length - 1;
    for (let i=0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j-i];
        if (x == y) {
            return true
        } else {
            return false
        }
    }
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("apple"));


//question 5

function counter() {
    let counter = 0;
    return {
        increment() {
            counter++;
            console.log(counter) ;
        },
        decrement() {
            counter--;
            console.log(counter);
        }
    }
}
counter().increment();
counter().decrement();


//Question 2

function uniqueValues(arr) {
    var Values = arr.filter((value, index) => arr.indexOf(value)== index)
     console.log(Values)
 }
 uniqueValues([2,4,5,3,3,2]);
 uniqueValues(['a','b','a','d']);

 
 //Question 4

function deepClone(obj) {
    console.log(JSON.parse(JSON.stringify(obj)))
}
var main = {
    name: "Ann",
    age: 23,
    marks : {
        maths: 80,
        physics: 96
    }
};

deepClone(main);


// Question 6

function safeParse(jsonString){
    try {
        return JSON.parse(jsonString)
    } 
    catch {
        return `error: message `
    }
}

console.log(safeParse(899))
console.log(safeParse("hello"))


//Question 7


function findTwoSum(nums, target){
    for(let i = 0; i<= nums.length; i++){
        for(let j = 0; j<= nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
}

console.log(findTwoSum([2,4,5],6));
console.log(findTwoSum([1,2,3,4],7));



