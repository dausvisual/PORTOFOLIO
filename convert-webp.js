const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Target folder yang diawasi
const targetDir = path.join(__dirname, 'public', 'images');

// Ekstensi yang didukung (case-insensitive)
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Cek apakah dijalankan sebagai watcher (dev) atau one-shot (build)
const isWatchMode = process.argv.includes('--watch');

function convertToWebp(filePath) {
    const ext = path.extname(filePath).toLowerCase();

    // Hanya proses ekstensi yang didukung
    if (!SUPPORTED_EXTENSIONS.includes(ext)) return Promise.resolve();

    // Cegah konversi file yang sudah merupakan hasil konversi WebP
    const baseName = path.basename(filePath, ext);
    if (baseName.endsWith('.webp')) return Promise.resolve();

    const outputName = filePath.slice(0, -ext.length) + '.webp';

    // Cek apakah file WebP sudah ada
    if (fs.existsSync(outputName)) return Promise.resolve();

    return sharp(filePath)
        .rotate() // Auto-rotate based on EXIF before converting
        .withMetadata() // Preserve other metadata (optional, but good)
        .webp({ quality: 75 })
        .toFile(outputName)
        .then(() => console.log(`⚡ Berhasil konversi: ${path.basename(filePath)} → WebP`))
        .catch(err => console.error(`❌ Gagal konversi ${path.basename(filePath)}:`, err));
}

// Scan semua file di folder secara rekursif
function scanDirectory(dir) {
    const promises = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            promises.push(...scanDirectory(fullPath));
        } else {
            promises.push(convertToWebp(fullPath));
        }
    }
    return promises;
}

console.log(`🔍 Memindai folder gambar di ${targetDir}...`);

// Jalankan scan sekali
Promise.all(scanDirectory(targetDir)).then(() => {
    console.log('✅ Pemindaian selesai.');
    
    if (isWatchMode) {
        // Mode dev: gunakan chokidar untuk watch real-time
        const chokidar = require('chokidar');
        console.log('👀 Mode watch aktif — mengawasi perubahan file...');
        const watcher = chokidar.watch(targetDir, { 
            persistent: true,
            ignoreInitial: true,
        });
        watcher.on('add', filePath => convertToWebp(filePath));
    } else {
        // Mode build: keluar setelah scan selesai
        process.exit(0);
    }
});