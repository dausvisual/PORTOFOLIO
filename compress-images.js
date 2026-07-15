const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images', 'projects');

async function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && fullPath.toLowerCase().endsWith('.webp')) {
            const stats = fs.statSync(fullPath);
            const sizeMB = stats.size / (1024 * 1024);

            // Hanya kompres jika ukuran file di atas 500 KB (0.5 MB)
            if (sizeMB > 0.5) {
                console.log(`Mengompresi ${entry.name} (${sizeMB.toFixed(2)} MB)...`);
                const tempPath = fullPath + '.tmp.webp';

                try {
                    const inputBuffer = fs.readFileSync(fullPath);
                    const metadata = await sharp(inputBuffer).metadata();
                    let sharpInstance = sharp(inputBuffer);

                    // Jika gambar sangat besar (lebih lebar dari 1920px), resize agar pas untuk web (HD/FHD)
                    if (metadata.width > 1920) {
                        sharpInstance = sharpInstance.resize({ width: 1920, withoutEnlargement: true });
                    }

                    // Kompres dengan quality 80 (keseimbangan terbaik antara ukuran super kecil dan gambar tetap sangat tajam/tidak blur)
                    await sharpInstance
                        .webp({ quality: 80, effort: 6 }) 
                        .toFile(tempPath);

                    // Ganti file lama dengan file yang sudah dikompresi
                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);

                    const newSizeMB = fs.statSync(fullPath).size / (1024 * 1024);
                    console.log(`[BERHASIL] ${entry.name} ditekan menjadi ${newSizeMB.toFixed(2)} MB`);
                } catch (err) {
                    console.error(`[ERROR] Gagal memproses ${entry.name}:`, err);
                    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                }
            }
        }
    }
}

async function main() {
    console.log('Memulai kompresi massal gambar besar...');
    await processDirectory(imagesDir);
    console.log('Proses selesai!');
}

main();
