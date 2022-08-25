// what is IIEF?
// IIEF is an Immediately Invoked Function Expression.
// IIEF is a function that is immediately invoked when it is defined.

// IIEF example:

(function () {
    console.log('IIEF');
}());

// IIEF example 2:

(() => {console.log('IIEF 2')})();

// named IIEF should be easier to detect in the stack trace
(function myIIEF() {
    console.log('named IIEF 3')
})();


~function(){console.log("hi I'm IIFE")}();
+function(){console.log("hi I'm IIFE")}();
-function(){console.log("hi I'm IIFE")}();

