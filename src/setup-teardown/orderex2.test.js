// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

describe('outer', () => {
    console.log('describe outer-a');
  
    describe('inner 1', () => {
      console.log('describe inner 1');

      test('1', () => {
        console.log('test for describe inner 1');
        expect(true).toEqual(true);
      });
    });
  
    console.log('describe outer-b');
  
    test('1', () => {
      console.log('test for describe outer');
      expect(true).toEqual(true);
    });
  
    describe('inner 2', () => {
      console.log('describe inner 2');

      test('for describe inner 2', () => {
        console.log('test for describe inner 2');
        expect(false).toEqual(false);
      });
    });
  
    console.log('describe outer-c');
  });