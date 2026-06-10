const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const chokidar = require('chokidar');

// Tentukan target folder yang ingin diawasi (folder gambar portofolio kamu)
const targetDir = path.join(__dirname, 'public', 'images');

function convertToWebp(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const outputName = filePath.replace(ext, '.webp');

        // Cek apakah file webp sudah ada agar tidak kerja dua kali
        if (!fs.existsSync(outputName)) {
            sharp(filePath)
                .webp({ quality: 80 }) // Set kualitas kompresi WebP (0-100)
                .toFile(outputName)
                .then(() => console.log(`⚡ Berhasil konversi otomatis: ${path.basename(filePath)} -> WebP`))
                .catch(err => console.error(`❌ Gagal konversi ${path.basename(filePath)}:`, err));
        }
    }
}

// Jalankan pengawasan folder secara real-time
console.log(`🔍 Skrip Spasial: Mengawasi folder gambar di ${targetDir}...`);
const watcher = chokidar.watch(targetDir, { persistent: true });

watcher.on('add', filePath => convertToWebp(filePath));

// Jika dijalankan saat build, skrip akan menutup otomatis setelah memindai sekali
if (process.env.NODE_ENV === 'production') {
    setTimeout(() => {
        watcher.close();
        process.exit(0);
    }, 5000);
}