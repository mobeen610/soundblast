// Complete sound data for all categories
const SoundData = {
  // Trending Pakistan sounds (your exact list)
  getTrendingPakistan: function() {
    const pkSounds = [
      "FAHHHHHHHHHHHHHH", "FAAAH", "Chicken on tree screaming", 
      "VINE BOOM SOUND", "anime ahh", "GopGopGop", "Fart",
      "Anime Wow", "Tum Dum Tedau", "Among Us role reveal sound"
    ];
    
    return pkSounds.map((name, index) => ({
      id: `pk-${index}`,
      name: name,
      category: 'viral',
      plays: Math.floor(Math.random() * 50000) + 5000,
      likes: Math.floor(Math.random() * 5000) + 500,
      downloads: Math.floor(Math.random() * 10000) + 1000,
      uploader: 'user' + Math.floor(Math.random() * 1000),
      uploadDate: '2024-01-' + (Math.floor(Math.random() * 30) + 1)
    }));
  },
  
  // Get category information
  getCategoryInfo: function(category) {
    const categories = {
      memes: {
        name: 'Memes',
        icon: 'fa-laugh-squint',
        description: 'The funniest meme sounds on the internet',
        subcategories: [
          { id: 'dank', name: 'Dank Memes' },
          { id: 'wholesome', name: 'Wholesome' }
        ]
      },
      games: {
        name: 'Games',
        icon: 'fa-gamepad',
        description: 'Sound effects from your favorite games'
      }
      // ... Add all categories
    };
    return categories[category] || { name: category, icon: 'fa-music' };
  },
  
  // Get sounds by category
  getSoundsByCategory: function(category) {
    const categorySounds = {
      memes: [
        { name: 'Bruh Sound Effect', plays: 45000, likes: 3200 },
        { name: 'Emotional Damage', plays: 38000, likes: 2800 },
        { name: 'FBI Open Up', plays: 29000, likes: 2100 }
      ],
      games: [
        { name: 'Among Us Eject', plays: 52000, likes: 4100 },
        { name: 'Minecraft Oof', plays: 67000, likes: 5300 }
      ]
      // ... Add more categories
    };
    
    const sounds = categorySounds[category] || [];
    return sounds.map((sound, index) => ({
      id: `${category}-${index}`,
      ...sound,
      category: category
    }));
  },
  
  getSoundById: function(id) {
    // Find sound by ID across all categories
    // Implementation would search through all sound arrays
    return {
      id: id,
      name: 'VINE BOOM SOUND',
      category: 'memes',
      plays: 125000,
      likes: 8900,
      downloads: 34000,
      uploader: 'meme_lord',
      uploadDate: '2023-08-15',
      description: 'The iconic Vine boom sound effect',
      comments: [
        { user: 'user1', avatar: '👤', date: '2 days ago', text: 'Classic!' }
      ],
      related: [
        { id: 'vine-2', name: 'Vine Thud' },
        { id: 'bruh-1', name: 'Bruh' }
      ]
    };
  }
};