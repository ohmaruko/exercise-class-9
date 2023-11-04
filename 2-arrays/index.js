/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * Use camel case where needed.
 * Initialise the variable called `vegetables` to an array containing the values:
 * onion, carrot, bell pepper
 * Initialise the variable called `fruits` to an array containing the values:
 * apple, orange, banana
 * Then, initialise the variable called `list` to an array that have 
 * all elements of `vegerables` and `fruits` in this order, using .concat() method.
 * Console log out `list`. 
 */
var vegetables = ["onion", "carrot", "bellPepper"]
var fruits = ["apple", "orange", "banana"]
var list = vegetables.concat(fruits);
console.log(list);

/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * Use camel case when needed.
 * Initialise the variable `shopping list` to a 2-Dimensional array containing the values below:
 *          column [0]  column[1]
 *  Row 1   onion          2
 *  Row 2   carrot         3
 *  Row 3   apple          1
 *  Row 4   orange         4
 * Then use console.table() to showcase the infomation in a table.
 * Then console log out the following sentence based on the table using concatenation.
 * I need _2_ _onion_s and _1_ _apple_.
 * 
 */
var shoppingList = [
    ["onion", 2],
    ["carrot", 3],
    ["apple", 1],
    ["orange", 4]
]
console.table(shoppingList);
console.log("I need " + shoppingList[0][1] + " " + shoppingList[0][0] + "s and " + shoppingList[2][1] + " " + shoppingList[2][0]+ ".")