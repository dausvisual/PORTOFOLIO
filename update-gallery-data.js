const fs = require('fs');
const path = require('path');

const galleryDataPath = path.join(__dirname, 'src', 'data', 'galleryData.js');
const projectsDir = path.join(__dirname, 'public', 'images', 'projects');

// Read existing galleryData
let content = fs.readFileSync(galleryDataPath, 'utf8');

// Get all folders
const folders = fs.readdirSync(projectsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

for (const folder of folders) {
    const folderPath = path.join(projectsDir, folder);
    const webpFiles = fs.readdirSync(folderPath)
        .filter(f => f.toLowerCase().endsWith('.webp') && f.toLowerCase().startsWith(folder.toLowerCase()))
        .sort((a, b) => {
            // Sort correctly by number: vale1.webp, vale2.webp...
            const numA = parseInt(a.replace(/\D/g, '')) || 0;
            const numB = parseInt(b.replace(/\D/g, '')) || 0;
            return numA - numB;
        });

    if (webpFiles.length > 0) {
        // Buat string array yang baru
        const imagesArrayStr = 'images: [' + webpFiles.map(f => `"/images/projects/${folder}/${f}"`).join(', ') + '],';
        
        // Ganti baris images: [...] untuk folder ini menggunakan Regex
        // Regex ini mencari blok yang dimulai dengan `id: "folder"` (atau key folder) dan menimpa array images di dalamnya
        // Tapi format galleryData adalah:
        // folder: {
        //    title: "...",
        //    ...
        //    images: [...]
        // }
        // We will look for the folder block.
        const regex = new RegExp(`(${folder}\\s*:\\s*{[^}]*?images\\s*:\\s*\\[).*?(\\]\\s*,)`, 's');
        if (regex.test(content)) {
            content = content.replace(regex, `$1${webpFiles.map(f => `"/images/projects/${folder}/${f}"`).join(', ')}$2`);
        } else {
            console.log(`[WARNING] Could not find images array for project: ${folder}`);
        }
    }
}

fs.writeFileSync(galleryDataPath, content, 'utf8');
console.log('galleryData.js berhasil diperbarui secara otomatis!');
