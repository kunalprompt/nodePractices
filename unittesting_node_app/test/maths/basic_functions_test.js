const chai_assert = require('chai').assert;
const maths = require(__dirname + '/../../src/maths/basic_functions');

describe('maths', function(){
    it("check if two number parameters can be multiplied or not", function(){
        chai_assert.equal(9, maths.addTwoNumbers(3, 3));
    });

    it("check whether it is possible to multiply a number with \
        a non number argument", function(){
        maths.addTwoNumbers(3, "hello");
    });
});
