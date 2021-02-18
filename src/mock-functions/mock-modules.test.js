import axios from 'axios';
import Users from './class-axios';


// Once we mock the module we can provide a mockResolvedValue for 
// .get that returns the data we want our test to assert against.
// In effect, we are saying that we want axios.get('/users.json') 
// to return a fake response.
jest.mock('axios');
describe('mocking axios ',  () => {

    test('should fetch users',  () => {
       
        const users = [{name: 'Bob'}];
        const resp = {data: users};
        // axios.get.mockResolvedValue(resp);
        axios.get.mockImplementation(() => Promise.resolve(resp))
      
        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))
      
        return  Users.all().then(data => {
            console.log('data from axios', data);
           return  expect(data).toEqual(users)}
            );
      });

})