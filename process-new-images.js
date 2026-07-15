const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectsDir = path.join(__dirname, 'public', 'images', 'projects');

async function processFolder(folderPath) {
    const folderName = path.basename(folderPath);
    // Pastikan ini adalah folder
    if (!fs.statSync(folderPath).isDirectory()) return;

    const files = fs.readdirSync(folderPath);
    
    // Temukan angka tertinggi pada format webp yang sudah ada
    let highestNum = 0;
    const existingWebps = files.filter(f => f.toLowerCase().endsWith('.webp') && f.toLowerCase().startsWith(folderName.toLowerCase()));
    existingWebps.forEach(f => {
        const match = f.match(new RegExp(`^${folderName}(\\d+)\\.webp$`, 'i'));
        if (match) {
            const num = parseInt(match[1]);
            if (num > highestNum) highestNum = num;
        }
    });

    // Cari file yang formatnya didukung (jpg, jpeg, png, jpeg)
    const supportedExts = ['.jpg', '.jpeg', '.png'];
    const filesToProcess = files.filter(f => supportedExts.includes(path.extname(f).toLowerCase()));

    for (const file of filesToProcess) {
        highestNum++;
        const ext = path.extname(file);
        const inputPath = path.join(folderPath, file);
        const outputPath = path.join(folderPath, `${folderName}${highestNum}.webp`);
        
        console.log(`Mengkonversi ${file} menjadi ${path.basename(outputPath)}...`);
        try {
            await sharp(inputPath)
                .rotate() // preserve EXIF rotation
                .webp({ quality: 100, lossless: true }) // Kualitas maksimal tanpa kompresi resolusi
                .toFile(outputPath);
                
            // Hapus file asli
            fs.unlinkSync(inputPath);
            console.log(`[BERHASIL] File asli dihapus: ${file}`);
        } catch (err) {
            console.error(`[ERROR] Gagal memproses ${file}:`, err);
        }
    }
}

async function main() {
    const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => path.join(projectsDir, dirent.name));
        
    for (const folder of folders) {
        await processFolder(folder);
    }
    console.log('Semua gambar baru telah berhasil diproses, direname, dan diconvert ke WebP secara lossless!');
}

main();
