// sound-player-consumer.test.js
import SoundPlayer, {mockPlaySoundFile} from './sound-player1';
import SoundPlayerConsumer from './sound-player-consumer';
jest.mock('./sound-player1'); // SoundPlayer is now a mock constructor

// Create a manual mock by saving a mock implementation in 
// the __mocks__ folder. This allows you to specify the implementation, 
// and it can be used across test files.

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});


it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});


it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});