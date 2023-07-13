const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Naviguer vers votre page à tester
  await page.goto('http://localhost:3000/');

  // Trouver et tester tous les liens de la page
  const links = await page.$$('a');
  for (const link of links) {
    const href = await link.getAttribute('href');
    if (href) {
      await Promise.all([
        page.waitForNavigation(), // Attendre la navigation
        link.click() // Cliquer sur le lien
      ]);
      console.log(`Navigué vers : ${href}`);
    }
  }

  // Trouver et tester tous les boutons de la page
  const buttons = await page.$$('button');
  for (const button of buttons) {
    await button.click();
    console.log('Cliqué sur un bouton');
  }

  await browser.close();
})();
