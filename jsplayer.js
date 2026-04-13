// Audio player with Web Audio API
let audioContext = null;
let currentSource = null;

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

function playSound(index, category) {
  initAudio();
  
  // Stop any currently playing sound
  if (currentSource) {
    currentSource.stop();
  }
  
  // Generate a unique tone based on sound name
  const sounds = category ? 
    SoundData.getSoundsByCategory(category) : 
    SoundData.getTrendingPakistan();
  
  const sound = sounds[index];
  
  // Create oscillator for demo (in production, you'd load actual audio files)
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  // Generate frequency from sound name
  let hash = 0;
  for (let i = 0; i < sound.name.length; i++) {
    hash = ((hash << 5) - hash) + sound.name.charCodeAt(i);
  }
  const frequency = 300 + Math.abs(hash % 500);
  
  osc.frequency.value = frequency;
  osc.type = 'triangle';
  
  gain.gain.setValueAtTime(0.2, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
  
  osc.connect(gain);
  gain.connect(audioContext.destination);
  
  osc.start();
  currentSource = osc;
  osc.stop(audioContext.currentTime + 0.5);
  
  // Update UI to show playing state
  console.log(`Playing: ${sound.name}`);
}

function playSoundById(id) {
  const sound = SoundData.getSoundById(id);
  if (sound) {
    initAudio();
    // Similar playback logic
    console.log(`Playing sound: ${sound.name}`);
  }
}

function stopSound() {
  if (currentSource) {
    currentSource.stop();
    currentSource = null;
  }
}