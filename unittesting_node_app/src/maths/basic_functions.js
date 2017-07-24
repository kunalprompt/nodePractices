function addTwoNumbers(arg1, arg2){
    if(typeof(arg1) == "number" && typeof(arg2) == "number")
        return arg1*arg2;
    throw "Arguments need to be numbers.";
}

module.exports = {
    addTwoNumbers: addTwoNumbers
}
