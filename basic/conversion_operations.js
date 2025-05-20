// let's see some fun things doing type conversion in JS...

let score = "33"

//console.log(typeof score) // console.log(typeof(score)) both are same...

let valueInNum = Number(score);
//console.log(typeof valueInNum); // score string converted to NUMBER DATATYPE...

// conversiob for intchar string data....

let intChar = "52abc"

//console.log(typeof intChar); // string

let intcharNUM = Number(intChar);
//console.log(typeof intcharNUM);// return NUMBER BUT LOOK DOWN...
//console.log(intcharNUM); //It is going to return NAN(Not a Number)special type...


// Conversion for null

let say = null

//console.log(typeof say);// object

let changetype = Number(say)

//console.log(typeof changetype);// converted to Number...

//console.log(changetype);// Note: null value are converted to 0 number while conversion from null to Number...

// conversion for undefined...

let dont = undefined

//console.log(typeof dont); // returns undefined...

let changedont = Number(dont)

//console.log(typeof changedont);// Shows type changes tonumber but....

//console.log(changedont); // returns NaN(Not a Number)...Point to remember...

/*
Note:
    for Boolean type
    true ----> 1
    false ---> 0
    "" ---> false
    "xyz" ---> true

    "33" ---> 33
    "52xyz" ---> Nan
    "undefined" ---> Nan
    null ---> 0
*/


// ****************************Operations*********************//

let num = 20

let neg = -num
//console.log(neg);// -20 simple..

//BASIC operations...
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hey"
let str2 = " Buddy"

let str3 = str1 + str2
//console.log(str3);


/*
Note:
    In these type of operaions predefined rules says preference of datatype if return on first position...
    for eg...
            console.log(value(#preferred datatype), value, value, value)...
*/

// console.log("1" + 2); // return 12
// console.log(1 + "2"); // return 12
// console.log("1" + 2 + 3); // return 123
// console.log(1 + 2 + "3"); // return 33

// console.log(+true) return 1 increment cant be done but change to number




