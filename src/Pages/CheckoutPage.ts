import { expect } from '@playwright/test';
import { Page, Locator } from 'playwright';
import { price,name } from '../StepDefinitions/Addcart_steps';

class CheckoutPage {
  page: Page;
 cartlabel: Locator;
 ProceedtoCheckout: Locator;
 productName: Locator;
 productPrice: Locator;
 city: Locator;
 Firstname: Locator;
 lastname: Locator;
 phone: Locator;
 address: Locator;
 country: Locator;
 zip: Locator;
 countryDDL:Locator;
 SearchCountrybox:Locator;
 CountrySelection:Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(60000);
    this.page.setDefaultNavigationTimeout(60000);
    this.cartlabel = page.locator('//li[@id="wpmenucartli"]');
    this.ProceedtoCheckout= page.locator('//*[@id="page-34"]/div/div[1]/div/div/div/a');
    this.productName = page.locator('//td[contains(@class, "product-name") and .//strong[@class="product-quantity"]]');
    this.productPrice = page.locator('//td[@class="product-total"]');
    this.Firstname = page.locator('id=billing_first_name');
    this.lastname = page.locator('id=billing_last_name');
    this.phone = page.locator('id=billing_phone');
    this.address = page.locator('id=billing_address_1');
    this.city = page.locator('id=billing_city');
    this.country = page.locator('id=billing_state');
    this.zip = page.locator('id=billing_postcode');
    this.countryDDL= page.locator('id=select2-chosen-1');
    this.SearchCountrybox = page.locator('id=s2id_autogen1_search');
    this.CountrySelection= page.locator('//span[@class="select2-match" and text()="Egypt"]');
}

  async ClickCartLabel() {
    await this.cartlabel.waitFor({ state: 'visible' });
    await this.cartlabel.click();
    
  }

  async GetproductNameTitle() {
    
    await this.productName.waitFor({ state: 'visible' });
    expect(this.productName.textContent(),name)
  }

  async GetproductPrice() {
    
    await this.productName.waitFor({ state: 'visible' });
    expect(this.productPrice.textContent(),price) 
  }
  

  async ClickProceedtoCheckoutButton() {
    
    await this.ProceedtoCheckout.waitFor({ state: 'visible' });
    await this.ProceedtoCheckout.click();
  }

  
  async FirstName(username: string) {
    await this.Firstname.waitFor({ state: 'visible' });
    await this.Firstname.fill(username);
   
  }

  async lastName(username: string) {
    await this.lastname.waitFor({ state: 'visible' });
    await this.lastname.fill(username);
   
  }

  async Phone(username: string) {
    await this.phone.waitFor({ state: 'visible' });
    await this.phone.fill(username);
   
  }

  async Address(username: string) {
    await this.address.waitFor({ state: 'visible' });
    await this.address.fill(username);
   
  }
  async ValidLogin(username: string) {
    await this.Firstname.waitFor({ state: 'visible' });
    await this.Firstname.fill(username);
   
  }

  async City(username: string) {
    await this.city.waitFor({ state: 'visible' });
    await this.city.fill(username);
   
  }

   async Country() {
     await this.countryDDL.waitFor({ state: 'visible' });
     await this.countryDDL.click();
     await this.SearchCountrybox.waitFor ({state : 'visible'});
     await this.SearchCountrybox.pressSequentially('Egypt');
     await this.CountrySelection.waitFor({state: 'visible'});
     await this.CountrySelection.click();
   }
  
  async Zip(username: string) {
    await this.zip.waitFor({ state: 'visible' });
    await this.zip.fill(username);
  }

  async state(username:string)
  {
    await this.country.waitFor({state: 'visible'});
    await this.country.fill(username);
  }
}

export { CheckoutPage };