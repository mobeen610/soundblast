function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function getIconForSound(name) {
  const lower = name.toLowerCase();
  if (lower.includes('fart')) return 'fa-poop';
  if (lower.includes('vine')) return 'fa-bolt';
  if (lower.includes('anime')) return 'fa-dragon';
  if (lower.includes('game')) return 'fa-gamepad';
  if (lower.includes('sad')) return 'fa-sad-tear';
  if (lower.includes('wow')) return 'fa-face-surprise';
  if (lower.includes('fah')) return 'fa-volume-up';
  return 'fa-music';
}

function getCategoryIcon(category) {
  const icons = {
    memes: 'fa-laugh-squint',
    games: 'fa-gamepad',
    anime: 'fa-dragon',
    movies: 'fa-film',
    music: 'fa-music',
    viral: 'fa-fire',
    reactions: 'fa-face-smile'
  };
  return icons[category] || 'fa-tag';
}

function toggleFavorite(soundId) {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.indexOf(soundId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(soundId);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  console.log('Favorites updated:', favorites);
}

function downloadSound(soundId) {
  console.log(`Downloading sound: ${soundId}`);
  // In production: trigger actual file download
}