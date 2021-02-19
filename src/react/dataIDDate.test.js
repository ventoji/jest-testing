// eslint-disable-next-line jest/no-commented-out-tests
// it.skip('will fail every time', () => {
//     const user = {
//       createdAt: new Date(),
//       id: Math.floor(Math.random() * 20),
//       name: 'LeBron James',
//     };
  
//     expect(user).toMatchSnapshot();
//   });

  // Jest allows providing an asymmetric matcher for any property. 
  // These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value

  it('will check the matchers and pass', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot({
      createdAt: expect.any(Date),
      id: expect.any(Number),
    });
  });