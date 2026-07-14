const fs = require('fs');
let text = fs.readFileSync('d:/PORTOFOLIO V2/portofolio-firdaus-ikram/src/css/style.css', 'utf8');
let lines = text.split('\n');

// 1. Remove duplicate block (lines 745 to 928, which is index 744 to 927)
let newLines = [];
for (let i = 0; i < lines.length; i++) {
    if (i >= 744 && i <= 927) {
        continue;
    }
    newLines.push(lines[i]);
}

let css = newLines.join('\n');

// 2. Remove line 37 media query completely
css = css.replace(/@media \(min-width: 1024px\) \{ html \{ font-size: 90%; \} \}/g, '');

// 3. Fix the font-size jumps in existing media queries
css = css.replace(/html \{ font-size: 80%; \}/, 'html { font-size: 85%; }');
css = css.replace(/html \{ font-size: 75%; \}/, 'html { font-size: 80%; }');

// 4. Let's add a proper base font-size scaling at the top
css = css.replace('html {', 'html {\r\n    font-size: 90%; /* Base for large desktop */');

// 5. Update breakpoints safely
css = css.replace(/max-width: 1400px/g, 'max-width: 1200px');
css = css.replace(/max-width: 991px/g, 'max-width: 992px');
css = css.replace(/max-width: 600px/g, 'max-width: 576px');

// 6. Fix specific overflow issues like padding and gaps using clamp
css = css.replace(/gap: 8rem;/g, 'gap: clamp(2rem, 5vw, 8rem);');
css = css.replace(/gap: 6rem;/g, 'gap: clamp(2rem, 4vw, 6rem);');
css = css.replace(/gap: 4rem;/g, 'gap: clamp(1.5rem, 3vw, 4rem);');
css = css.replace(/gap: 3rem;/g, 'gap: clamp(1rem, 2vw, 3rem);');
css = css.replace(/padding: 10rem 10% 6rem;/g, 'padding: clamp(6rem, 8vw, 10rem) 5% clamp(4rem, 5vw, 6rem);');
css = css.replace(/padding: 6rem 5% 4rem;/g, 'padding: 5rem 5% 3rem;');

fs.writeFileSync('d:/PORTOFOLIO V2/portofolio-firdaus-ikram/src/css/style.css', css);
console.log('CSS fixed correctly.');
