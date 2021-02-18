
var cities;

function initializeCityDatabase(){
   cities = [
        'Vienna',
        'San Juan',
        'Mérida'
    ];
    return cities;
}

function clearCityDatabase(){
    cities = [];
    
    return cities;
}

function isCity(name){

    const cities = initializeCityDatabase();

    if(cities.includes(name))
        return true

    return false;



}

beforeEach(() => {
    initializeCityDatabase();
  });
  
  afterEach(() => {
    clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });