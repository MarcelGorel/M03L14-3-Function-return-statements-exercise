console.log("Function return statements: exercise");
/*In this exercise we're going to use the return statement.

Checking if a number is big
We're going to write a function that checks if a number is bigger than 100.

1.create a function that has one parameter (argument)
2.think of good names for the function and the parameter
3.inside the function check the number
4.if the number is bigger than 100 use the return keyword to return true
5.if the number is 100 or smaller use the return keyword to return false
6.now we're going to check if the function works as we intended
7.call the function with different numbers
8.use console.log to display the return value of the function
9.the end result of this exercise should not use console.log inside of the function
Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
*/
const ratio = function (number1) {
    const bigNumber = number1;
    if (bigNumber > 100) {
        return "true";
    }
    return "false";
}
const result = ratio(101);
console.log(result);

/*Bouncer at a club
We're going to create an "AI" bouncer: Brenda the Bouncer Bot. Brenda will check that there aren't to many people in the club. She will also check the age of the people wanting to enter the club. Brenda will return one of three sentences:

"come in"
"it's too busy now, come back later"
"this is a club for adults"

To make these decisions we'll give Brenda the following arguments:

the maximum number of people in the club
the current number of people in the club
the age of the person wanting to enter the club

Tip
There are multiple ways to write this function. It's possible to use one or multiple return statements. If you've created one version of the function: can you think of another way to write it?

1.create a function with the right number of parameters
2.think of good names for the function and the parameters
3.inside the function write the code that decides what Brenda should say
4.return Brenda's response
5.call the function multiple times with different arguments
6.make sure you see all of Brenda's different responses
*/
console.log("Bouncer exercise")

const bouncer = function (number1, number2, number3) {
    const max = number1;
    const current = number2;
    const age = number3;
    if (age < 18) {
        return "this is a club for adults";
    } else if (current >= max) {
        return "it's too busy now, come back later";
    }
    return "come in";
}

const result2 = bouncer(100, 80, 26);
console.log(result2);
const result3 = bouncer(100, 100, 26);
console.log(result3);
const result4 = bouncer(100, 80, 17);
console.log(result4);
console.log("another way to write the function: you can return a const instead of a string");

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
console.log("this function does something, it shows the bouncer if somebody can enter the club");

/*Calculating the average
We're going to write a function that calculates the average of five numbers.

1.create a function with the right number of parameters
2.think of good names for the function and the parameters
3.inside the function calculate the average of the five numbers
4.bonus: use Math.round to round the average to a whole number
5.use the return keyword to return the average of the five numbers
6.call the function multiple times with different arguments
7.check that your function correctly calculates the average
8.use console.log to display the return value of the function
9.the end result of this exercise should not use console.log inside of the function
Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
*/
console.log("Calculating averages exercise");

const calculateAverage = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return (Math.round(average));
};

console.log("average check, answer should be 2:", calculateAverage([1, 2, 3]));

const distance = [56, 103, 87, 98, 36];
console.log(calculateAverage(distance));

const distance1 = [312.36, 222.95, 450.45, 100.2, 340.76];
console.log(calculateAverage(distance1));
console.log("this function produces something, it calculates the average");
