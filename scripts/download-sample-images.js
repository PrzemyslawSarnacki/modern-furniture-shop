const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const productsDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'products');
const categoriesDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'categories');
const heroDir = path.join(__dirname, '..', 'public', 'assets', 'images');

[productsDir, categoriesDir, heroDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Unsplash API (free, no key required for these specific image IDs)
const images = {
  products: [
    {
      filename: 'sofa-1.jpg',
      url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'dining-table-1.jpg',
      url: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'chair-1.jpg',
      url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'coffee-table-1.jpg',
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'bedroom-set-1.jpg',
      url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'bookshelf-1.jpg',
      url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80&auto=format&fit=crop'
    },
  ],
  categories: [
    {
      filename: 'sofas.jpg',
      url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'tables.jpg',
      url: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'chairs.jpg',
      url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80&auto=format&fit=crop'
    },
    {
      filename: 'bedroom.jpg',
      url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&auto=format&fit=crop'
    },
  ],
  hero: [
    {
      filename: 'hero-bg.jpg',
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80&auto=format&fit=crop'
    }
  ]
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });
      } else {
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading product images...');
  for (const img of images.products) {
    const filepath = path.join(productsDir, img.filename);
    try {
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${img.filename}:`, error.message);
    }
  }

  console.log('\nDownloading category images...');
  for (const img of images.categories) {
    const filepath = path.join(categoriesDir, img.filename);
    try {
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${img.filename}:`, error.message);
    }
  }

  console.log('\nDownloading hero image...');
  for (const img of images.hero) {
    const filepath = path.join(heroDir, img.filename);
    try {
      await downloadImage(img.url, filepath);
    } catch (error) {
      console.error(`✗ Error downloading ${img.filename}:`, error.message);
    }
  }

  console.log('\n✓ All images downloaded successfully!');
}

downloadAllImages().catch(console.error);

