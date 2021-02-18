import  foo  from './foo';

jest.mock('./foo.js'); // this happens automatically with automocking

describe(`there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function.`, () => {
    test('mock implementation example', () => {

        const myMockFn = jest.fn(cb => cb(null, true));

        myMockFn((err, val) => console.log(val));
        // > true
        expect(myMockFn .mock.calls.length).toBe(1);
 //       expect(myMockFn.mock.results[0].value).toBe(true);
    });

    test(`The mockImplementation method is useful when you need to define the default implementation of a mock function that is created from another module:`, () => {
        // test.js

 // jest.mock('../foo'); // this happens automatically with automocking
 // const foo = require('../foo');

    // foo is a mock function
    foo.mockImplementation(() => 42);
  //  foo();
    // > 42
    expect(foo()).toEqual(42);
    });

    test(`complex behavior of a mock function such that multiple function calls produce different results`, () => {
        const myMockFn = jest
                .fn()
                .mockImplementationOnce(cb => cb(null, true))
                .mockImplementationOnce(cb => cb(null, false));

    myMockFn((err, val) => console.log(val));
    // > true

    myMockFn((err, val) => console.log(val));
// > false
//console.log(myMockFn.mock.results);
// [
//     { type: 'return', value: undefined },
//     { type: 'return', value: undefined }
//   ]
    expect(myMockFn .mock.calls.length).toBe(2);
//    expect(myMockFn.mock.results[0].value).toBe(true);f
    });

    test('default implementation set with jest.fn', () => {

        const myMockFn = jest
        .fn(() => 'default')
        .mockImplementationOnce(() => 'first call')
        .mockImplementationOnce(() => 'second call');

        console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
        // > 'first call', 'second call', 'default', 'default'
        const myObj = {
            myMethod: jest.fn().mockReturnThis(),
        };
        
        // is the same as
        
        const otherObj = {
            myMethod: jest.fn(function () {
            return this;
            }),
        };
    });

    test('mock names and assertions ', () => {
        const mockFunc = jest
            .fn()
            .mockReturnValue('default')
            .mockImplementation(scalar => 42 + scalar)
            .mockName('add42');

            const arg1 = 1;
            const arg2 = 2;
            mockFunc();
            mockFunc(arg1,arg2)
            // The mock function was called at least once
        expect(mockFunc).toHaveBeenCalled();

        // The mock function was called at least once with the specified args
        expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

        // The last call to the mock function was called with the specified args
        expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

        // All calls and the name of the mock is written as a snapshot
        expect(mockFunc).toMatchSnapshot();

        // The mock function was called at least once
expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

// The mock function was called at least once with the specified args
expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

// The last call to the mock function was called with the specified args
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
  arg1,
  arg2,
]);

// The first arg of the last call to the mock function was `42`
// (note that there is no sugar helper for this specific of an assertion)
expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(1);

// A snapshot will check that a mock was invoked the same number of times,
// in the same order, with the same arguments. It will also assert on the name.
// expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
// expect(mockFunc.getMockName()).toBe('a mock name');
    });


});