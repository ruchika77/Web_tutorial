Create a theory-js.txt file, add and complete these:


Describe this code with words:


var a = 1 // variable a is declared and value 1 is assigned to it
var b // variable b is declared

function myFunc() { // myFunc() function definition
  var c = 3 //c is declared and value 3 is assigned to it
  return a + b + c // function myFucn() is returning the adding all 3 (a+b+c) variables. Print 6

b = 2 // variable b is assigned to 2

var c = function() { // variable c is assigned function
  return myFunc() // now, it will print value a+b+c as c is defined with var so, it's scope is not limited within the function, here 6 will be printed

console.log(c()) // print 6


What would the code do?

------

There is an error in this code. What was the intention of the code, and how can you fix the error?

var a = 1 
var b

function  sum() {
   return a + b
}

sum()
b = 2

Answer :

var a = 1 
var b
b = 2
function  sum() {
   return a + b
}

sum()


-----

What would this code do?

function myFunc(a) {
   return function(b) {
        console.log(b)
   }
}

var func = myFunc('Some string')

func('Another string')

Answer :
Another string 




