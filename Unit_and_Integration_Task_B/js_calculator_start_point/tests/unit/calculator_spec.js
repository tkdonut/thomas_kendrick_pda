var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add two numbers', () => {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should be able to subtract two numbers', () => {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should be able to multiply two numbers', () => {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it('should be able to divide two numbers', () => {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should concatenate multiple number button clicks', () => {
    calculator.numberClick('1');
    calculator.numberClick('2');
    calculator.numberClick('3');
    assert.equal(calculator.runningTotal, 123);
  })

 it('should chain operations', () => {
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.operatorClick('+');
    calculator.numberClick('5');
    calculator.operatorClick('-');
    calculator.numberClick('2'); 
    calculator.numberClick('0'); 
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, -5);
  })

 it('should be able to clear without disrupting the calculation', () => {
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.operatorClick('+');
    calculator.clearClick();
    calculator.numberClick('5');
    calculator.operatorClick('-');
    calculator.numberClick('2'); 
    calculator.numberClick('0'); 
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, -5);
  })

});
