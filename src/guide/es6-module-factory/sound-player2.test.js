import SoundPlayer from './sound-player2';
import SoundPlayerConsumer from './sound-player-consumer2';

// In order to mock a constructor function, the module factory 
// must return a constructor function. In other words, the module 
// factory must be a function that returns a function - a higher-order 
// function (HOF).

const mockPlaySoundFile = jest.fn();
jest.mock('./sound-player2', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });
}); 

beforeEach(() => {
    SoundPlayer.mockClear();
    mockPlaySoundFile.mockClear();
  });
  
  it('The consumer should be able to call new() on SoundPlayer', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    // Ensure constructor created the object:
    expect(soundPlayerConsumer).toBeTruthy();
  });
  
  it('We can check if the consumer called the class constructor', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });
  
  it('We can check if the consumer called a method on the class instance', () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    const coolSoundFileName = 'song.mp3';
    soundPlayerConsumer.playSomethingCool();
    expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  });

// A limitation with the factory parameter is that, since calls
// to jest.mock() are hoisted to the top of the file, it's not
//  possible to first define a variable and then use it in the 
// factory. 


/* jest.mock('./sound-player2');
describe('When SoundPlayer throws an error', () => {
    beforeAll(() => {
      SoundPlayer.mockImplementation(() => {
        return {
          playSoundFile: () => {
            throw new Error('Test error');
          },
        };
      });
    });
  
    it('Should throw an error when calling playSomethingCool', () => {
      const soundPlayerConsumer = new SoundPlayerConsumer();
      expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
    });
  }); */