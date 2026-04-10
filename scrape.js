const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://farhand.live', { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const results = [];
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, button, span');
    
    elements.forEach(el => {
      const text = el.innerText?.trim();
      if (!text || text.length < 2) return;
      
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return;

      const rect = el.getBoundingClientRect();
      
      results.push({
        tag: el.tagName,
        text: text.substring(0, 100),
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        fontFamily: style.fontFamily,
        color: style.color,
        letterSpacing: style.letterSpacing,
        lineHeight: style.lineHeight,
        textTransform: style.textTransform,
        textAlign: style.textAlign,
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    });
    return results;
  });

  fs.writeFileSync('site_data.json', JSON.stringify(data, null, 2));
  await browser.close();
})();
