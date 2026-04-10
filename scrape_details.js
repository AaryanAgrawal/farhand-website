const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://farhand.live', { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    const getStyles = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const style = window.getComputedStyle(el);
      return {
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        padding: style.padding,
        borderRadius: style.borderRadius,
        border: style.border,
        textTransform: style.textTransform,
        letterSpacing: style.letterSpacing
      };
    };

    // Try to find the "Deploy smarter" button or similar CTA buttons
    const buttons = Array.from(document.querySelectorAll('button, a')).filter(el => 
      el.innerText.toLowerCase().includes('deploy') || 
      el.innerText.toLowerCase().includes('schedule')
    ).map(el => ({
      text: el.innerText,
      styles: window.getComputedStyle(el).backgroundColor !== 'rgba(0, 0, 0, 0)' ? {
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        color: window.getComputedStyle(el).color,
        padding: window.getComputedStyle(el).padding,
        borderRadius: window.getComputedStyle(el).borderRadius,
        border: window.getComputedStyle(el).border,
        fontSize: window.getComputedStyle(el).fontSize,
        fontWeight: window.getComputedStyle(el).fontWeight,
      } : null
    })).filter(b => b.styles);

    // Analyze the "challenges" section (Problem section)
    const challengesSection = Array.from(document.querySelectorAll('section, div')).find(el => 
      el.innerText.toLowerCase().includes("built a next-gen machine")
    );
    
    let challengesStyles = null;
    if (challengesSection) {
      const style = window.getComputedStyle(challengesSection);
      challengesStyles = {
        backgroundColor: style.backgroundColor,
        color: style.color
      };
    }

    return { buttons, challengesStyles };
  });

  fs.writeFileSync('detailed_styles.json', JSON.stringify(data, null, 2));
  await browser.close();
})();
