const https = require('https');
const getOG = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const match = data.match(/og:image["']\s+content=["']([^"']+)["']/i);
      resolve(match ? match[1] : 'not found');
    });
  });
});
(async () => {
  console.log('dausvisual:', await getOG('https://dausvisual.site'));
  console.log('zonasvara:', await getOG('https://zonasvara.space'));
})();
