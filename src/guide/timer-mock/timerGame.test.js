'use strict';

jest.useFakeTimers();
// Here we enable fake timers by calling jest.useFakeTimers();. 
//This mocks out setTimeout and other timer functions with mock 
//functions. If running multiple tests inside of one file
// or describe block, jest.useFakeTimers(); can be called 
//before each test manually or with a setup function such
// as beforeEach. Not doing so will result in the internal usage 
// counter not being reset.

describe('timers', () => {

  afterEach(() => {
    jest.clearAllTimers()
});

test('waits 1 second before ending the game', () => {
  const timerGame = require('./timerGame');
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it('calls the callback after 1 second via advanceTimersByTime', () => {
  const timerGame = require('./timerGame');
  const callback = jest.fn();

  timerGame(callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
  jest.advanceTimersByTime(1000);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
});