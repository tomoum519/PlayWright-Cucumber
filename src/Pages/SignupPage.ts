import { expect } from '@playwright/test';
import { Page, Locator } from 'playwright';

class SignUpPage {
  page: Page;
 emailAdressTextbox: Locator;
 passwordTextBox: Locator;
 registerButton: Locator;
 Signoutlabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(60000);
    this.page.setDefaultNavigationTimeout(60000);
    this.emailAdressTextbox = page.locator('id=reg_email');
    this.passwordTextBox = page.locator('id=reg_password');
    this.registerButton = page.locator('//input[@type="submit" and @value="Register"]');
    this.Signoutlabel= page.locator('//a[text()="Sign out"]');
  }


  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  async PageNavigation() {
    await this.page.goto('https://practice.automationtesting.in/my-account/');
  }
  
  async ValidLogin(username: string, password: string) {
    await this.emailAdressTextbox.waitFor({ state: 'visible' });
    await this.emailAdressTextbox.pressSequentially(username);
    await this.passwordTextBox.waitFor({ state: 'visible' });
    
    await this.passwordTextBox.pressSequentially(password);
    await this.sleep(1000);
    await this.passwordTextBox.press('Backspace');
    await this.registerButton.waitFor({ state: 'visible' });
    await this.registerButton.click();
    //await this.page.waitForTimeout(30000000);
  }
}

export { SignUpPage };