// Example 1 - What is going to be the output?
// Do you remember variable hoisting?
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo());

// Example 2 - what is going to be the output?
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo());

// Example 3 - what is going to be the output?
console.log(foo());
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

// Example 4 - Predict output
function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
console.log(foo());
