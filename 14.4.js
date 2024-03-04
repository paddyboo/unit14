function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }


  /* Write an ES2015 Version */

const filterOutOdds = (...nums) => {return nums.filters(num => num % 2 === 0)}

/*Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. */

  findMin(1,4,12,-3) // -3
  findMin(1,-1) // -1
  findMin(3,1) // 1

const findMin = (...nums) => Math.min(...nums)


/*Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.*/

  mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

  const mergeObjects(object1,object2) => ({...object1,...object2})
  

/*Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.*/

  doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
  doubleAndReturnArgs([2],10,4) // [2, 20, 8]

  const doubleAndReturnArgs(arr1,...arrs) => [...arr1, ...arrs.map(value + value * 2)]


/*For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!*/

 /** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

const removeRandom = items => {
  let i=Math.floor(Math.random()*items.length);
  return [...items.slice(0,i),...items.slice(i+1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}

const extend = (array1,array2)=> {
  return [...array1,...array2];
}
/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}

const addKeyVal = (obj,key,val) => {
  return ({...obj,[key]:val});
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {

}

const removeKey = (obj,key) => {
  let newObj={...obj}
  delete newObj[key];
  return newObj;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}

const combine=(obj1,obj2) => {
  return {...obj1,...obj2};
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

const update = (obj,key,val) => {
  return {...obj,[key]:val};
}