
function myFunc(args,callback){

    callback(args[0],args[1]);

}

test('.mock property ', () => {
    const myMock = jest.fn((x,y)=> {
        console.log(x+y);
        return 'return value';
    });

  //  const a = new myMock();
  //  const b = {};
  //  const bound = myMock.bind(b);
  //  bound();

    console.log(myMock.mock.instances);
    myFunc(['first arg', 'second arg'], myMock);
    // > [ <a>, <b> ]

    // The function was called exactly once
    expect(myMock.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    expect(myMock.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(myMock.mock.calls[0][1]).toBe('second arg');

    // The return value of the first call to the function was 'return value'
    expect(myMock.mock.results[0].value).toBe('return value');

    // This function was instantiated exactly twice
    expect(myMock.mock.instances.length).toBe(1);

    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    //expect(myMock.mock.instances[0].name).toEqual('test');
})