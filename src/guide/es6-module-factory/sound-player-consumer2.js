 // sound-player-consumer.js
 import SoundPlayer from './sound-player2';
  
 export default class SoundPlayerConsumer {
   constructor() {
     this.soundPlayer = new SoundPlayer();
   }
 
   playSomethingCool() {
     const coolSoundFileName = 'song.mp3';
     this.soundPlayer.playSoundFile(coolSoundFileName);
   }
 }