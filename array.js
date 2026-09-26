const addNumbers = function(array, string) {
    array.push(string);
    console.log(array);
}
addNumbers([1, 2, 3], "Hello")

const concatStrings  = function(array, string1,string2) {
    array.push(string1, string2);
    const result = array.join("-");
    console.log(result);
    return result;
}
concatStrings(["apple", "banana"], "cherry", "date");


const toUppercase = function(array) {
    console.log(array.toUpperCase());

}

toUppercase("hello world");

function isUnique (array) {
    const uniqueArray = new Set(array);
    if (uniqueArray.size === array.length) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
isUnique([1, 2, 3, 4, 5]);
isUnique([1, 2, 3, 4, 5, 1]);

function removeDuplicates (array) {
    const uniqueArray = new Set(array);
    return [...uniqueArray];
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));

 function flattenArray (array) {
    const flattened=array.flat();
    console.log(flattened);
 }
 flattenArray([[1, 2], [3, 4], [5, 6]]);

 function chunkArray (array, chunkSize) {
    const result = [];
    
for (let i=0;i<array.length;i+=chunkSize) {
    result.push(array.slice(i, i + chunkSize));
}
console.table(result);
 }
chunkArray([1,2,3,4,5,6],2);