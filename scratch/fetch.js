const urls = ['https://afatombukupratama.com', 'https://dausvisual.site', 'https://zonasvara.space'];
const https = require('https');

async function getOG(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta\s+property=[\"']og:image[\"']\s+content=[\"']([^\"']+)[\"']/i);
        if (match) resolve(match[1]);
        else resolve('No og:image found');
      });
    }).on('error', err => resolve('Error: ' + err.message));
  });
}

(async () => {
  for (let url of urls) {
    console.log(url, await getOG(url));
  }
})();
