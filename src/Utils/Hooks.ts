import { Before, After, Status, AfterStep, AfterAll } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';
import { POManager } from '../Pages/POManger';
import { exec } from 'child_process';

let browser: Browser;
let page: Page;
export let poManager: POManager;

Before(async function () {
  console.log("Before Scenario");
  browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
});

const context = await browser.newContext({
  viewport: null
});
page = await context.newPage();
poManager = new POManager(page);
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
      const screenshot = await page.screenshot({ path: `src/ScreenShots/${Date.now()}.png`, fullPage: true });
      this.attach(screenshot, 'image/png');
  }
});

After(async function () {
  await page.close();
  await browser.close();
});

AfterAll(async () =>
  {     
    console.log('All tests completed. Running npm script...');
    const ReportPath = __dirname.substring(0, __dirname.indexOf("Utils")) + "Report\\reportconfig.ts";
  exec(`npx ts-node ${ReportPath}`, (error, stdout, stderr) =>
    {       if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;}
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;       }
    });
  });
