
test('mock functions can also used to inject values', () => {

    const myMock = jest.fn();
    console.log(myMock());
// > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
});

test('Mock functions are also very effective in code that uses a functional continuation-passing style', () => {
    // this style helps avoid the need for complicated stubs that recreate the behavior of the real component
// In these cases, try to avoid the temptation to implement logic inside of any function that's not directly being tested
    const filterTestFn = jest.fn();

    // Make the mock return `true` for the first call,
    // and `false` for the second call
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    console.log(result);
    // > [11]
    console.log(filterTestFn.mock.calls[0][0]); // 11
    console.log(filterTestFn.mock.calls[0][1]); // 12
});