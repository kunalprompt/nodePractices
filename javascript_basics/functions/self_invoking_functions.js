/*
The main idea is that the anonymous self invoking function
or immediately invoked functions is invoked right after
it has been defined. The benefit of self-invoking functions
is that it enables you to execute code once without cluttering
the global namespace (without declaring any globals).
*/

(function () {
    var x = "Hello!!";      // I will invoke myself
    console.log(x);
})();
