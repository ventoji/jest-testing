jest.mock('node-fetch');
// import fetch, {Response} from 'node-fetch';
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');
import {createUser} from './createUser';


// Jest allows you to mock out whole modules in your tests, 
//which can be useful for testing if your code is calling functions
//  from that module correctly


// Your test will want to mock the fetch function so that we 
// can be sure that it gets called without actually making the
// network request. However, you'll also need to mock the return 
// value of fetch with a Response (wrapped in a Promise), as our 
// function uses it to grab the created user's ID. So you might 
// initially try writing a test like this:

// However, if you ran that test you would find that the createUser 
//function would fail, throwing the error: TypeError: response.text 
//is not a function. This is because the Response class you've imported 
// from node-fetch has been mocked (due to the jest.mock call at the top
//  of the test file) so it no longer behaves the way it should.

// To get around problems like this, Jest provides the 
// jest.requireActual helper. To make the above test work, 
// make the following change to the imports in the test file:


test('createUser calls fetch with the right args and returns the user id', async () => {
  fetch.mockReturnValue(Promise.resolve(new Response('4')));

  const userId = await createUser();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('http://website.com/users', {
    method: 'POST',
  });
  expect(userId).toBe('4');
});

