// 1. I have no flipping idea but I have time to try and figure it out.
// I did not predict this. but i stuck the code in codepen and it gave "a defined? false" and "b defined? true". Could this be because a was defined as b, which is defined as 3? would that then make a no longer defined? I am not sure. 

// 2 Did not come up with this. got this from coderbyte. create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.
function createBase(baseNumber){
    return function(N){
        return baseNumber + N;
    }
}
var addSix = createBase(6);
addSix(10);
addSix(21);

// 3
// Pros and Cons Functional vs Object Oriented Programming
// Functional is great for data Service
// Functional is easier to understand
// functional does not require the same thing to be written over again and again.
// Functions can be invoked realitively easily 
// functions can be reused 
// functions are first class citizens
// Object Oriented has objects that can be reused in other applications
// objects are easily to be created
// functional emphasizes evaluation of functions      Object oriented is based on objects
// F uses immutable data OO uses mutable(variables can be changed) data
// F declarative programming model (instructing a program what needs to be done instead of telling it how to do it) OO imperative programming model(telling it how you want it done)
// f supports parallel programming oo no pararllel programming supports
// f statements can be executed in any order  oo statements should be executed in particular order
// f recursion for iterative data  OO loops for iterative data
// f basic elements are variables and functions OO basic elements are objects and methods
// F used when there are a few things with more operations  OO used when there are many things with few operations
