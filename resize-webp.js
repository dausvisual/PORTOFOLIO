const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images', 'projects');
const MAX_SIZE_KB = 300;
const MAX_WIDTH = 1200;

async function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && path.extname(fullPath).toLowerCase() === '.webp') {
            const stats = fs.statSync(fullPath);
            const sizeKB = stats.size / 1024;
            
            if (sizeKB > MAX_SIZE_KB) {
                console.log(`Processing: ${entry.name} (${sizeKB.toFixed(2)} KB)`);
                const tempPath = fullPath + '.temp';
                
                try {
                    const buffer = await sharp(fullPath)
                        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                        .webp({ quality: 60 })
                        .toBuffer();
                    
                    fs.writeFileSync(fullPath, buffer);
                    const newStats = fs.statSync(fullPath);
                    console.log(` -> Resized & Compressed to ${(newStats.size / 1024).toFixed(2)} KB`);
                } catch (err) {
                    console.error(`Error processing ${entry.name}:`, err);
                    if (fs.existsSync(tempPath)) {
                        fs.unlinkSync(tempPath);
                    }
                }
            }
        }
    }
}

console.log('Starting image compression...');
processDirectory(targetDir).then(() => console.log('Done!'));
