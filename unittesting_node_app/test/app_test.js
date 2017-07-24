const chai_assert = require('chai').assert;
const application = require(__dirname + '/../src/app');

describe('application', function(){
    it("check if application exists", function(){
        chai_assert.equal("application", application());
    });
});
