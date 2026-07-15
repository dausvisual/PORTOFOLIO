import glob
import re

for file in glob.glob('src/components/*.jsx'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = {
        "'PROJECTS' : 'PROYEK'": "'Projects' : 'Proyek'",
        "'CONTACT' : 'KONTAK'": "'Contact' : 'Kontak'",
        "'CLIENTS & PARTNERS' : 'KLIEN & MITRA'": "'Clients & Partners' : 'Klien & Mitra'",
        "'TESTIMONIALS' : 'TESTIMONI'": "'Testimonials' : 'Testimoni'",
        "'CERTIFICATION' : 'SERTIFIKASI'": "'Certification' : 'Sertifikasi'",
        "'ABOUT ME' : 'TENTANG SAYA'": "'About Me' : 'Tentang Saya'",
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
