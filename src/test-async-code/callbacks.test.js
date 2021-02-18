//By default, Jest tests complete once they reach the end of their execution. That means this test will not work as intended:

let fetchData = jest.fn();
/* const fetchData = () => setTimeout(()=> {
    console.log('done');
}, 100) */

test.skip('the data is peanut butter with Callback', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });

fetchData = () => Promise.resolve('peanut butter');

  test('the data is peanut butter with Promise', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
//    return fetchData().then(data => {
//      expect(data).toBe('peanut butter');
//    });
  });

  let fetchData1 = () => Promise.reject('error');

  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchData1()).rejects.toMatch('error');
//    return fetchData1().catch(e => expect(e).toMatch('error'));
  });


  test('the data is peanut butter with ASYN AWAIT', async () => {
  //  const data = await fetchData();
 //  expect(data).toBe('peanut butter');
    await expect(fetchData()).resolves.toBe('peanut butter');
  });

  // let fetchData2 = () => Promise.resolve()
  //test('the fetch fails with an error with ASYN AWAIT', async () => {
   // expect.assertions(1);
    // await expect(fetchData2()).rejects.toThrow('error');
    // expect.assertions(1);
    // try {
    //   await fetchData1();
    // } catch (e) {
    //   expect(e).toMatch('error');
    // }
  //});