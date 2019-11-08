var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // calculator.add() - add 1 to 4 and get 5
  it('adds 1 and 4 to get 5', function(){
    const previousTotal= 1;
    const runningTotal=calculator.add(4);
    return runningTotal;
    assert.equal(runningTotal,5);
  });

  // calculator.subtract() subtract 4 from 7 and get 3
  it('subtracts 4 from 7 to get 3', function(){
    const previousTotal= 7;
    const runningTotal=calculator.subtract(4);
    return runningTotal;
    assert.equal(runningTotal,3);
  });

  //calculator.multiply() - multiply 3 by 5 and get 15
  it('multiplies 3 and 5 to get 15', function(){
    const previousTotal= 3;
    const runningTotal=calculator.multiply(5);
    return runningTotal;
    assert.equal(runningTotal,15);
  });

  // calculator.divide() - divide 21 by 7 and get 3
  it('divides 21 by 7 to get 3', function(){
    const previousTotal= 21;
    const runningTotal=calculator.divide(7);
    return runningTotal;
    assert.equal(runningTotal,3);
  });

  // calculator.numberClick() - concatenate multiple number button clicks
  it('concatenate multiple number button clicks', function(){
    const runningTotal=calculator.numberClick(5);
    calculator.numberClick(4);
    return runningTotal;
    assert.equal(runningTotal,54);
  });

  // calculator.operatorClick() - chain multiple operations together
  it('chain multiple operations together', function(){
    const runningTotal=calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    return runningTotal;
    assert.equal(runningTotal,2);
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('clear the running total without affecting the calculation', function(){
    const runningTotal=calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(5);
    return runningTotal;
    assert.equal(runningTotal,10);
  })



});
