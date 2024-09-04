import { Page, Locator } from 'playwright';


class ShopPage {
  page: Page;
 shoplabel: Locator;
 firstitemtitle: Locator;
 firstitemprice: Locator;
 addcart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.page.setDefaultTimeout(60000);
    this.page.setDefaultNavigationTimeout(60000);
    this.shoplabel = page.locator('//*[@id="menu-item-40"]');
    this.firstitemtitle = page.locator('//li[contains(@class, "product")][1]//h3');
    this.firstitemprice = page.locator('//li[contains(@class, "product")][1]//span[@class="price"]');
    this.addcart= page.locator('//li[contains(@class, "product")][1]//a[contains(@class, "add_to_cart_button")]');
  }
  

  async ClickShopLabel() {
    
    await this.shoplabel.waitFor({ state: 'visible' });
    await this.shoplabel.click();
    
  }

  async GetFirstItemTitle() {
    
    await this.firstitemtitle.waitFor({ state: 'visible' });
    return await this.firstitemtitle.textContent();
  
  }

  async GetFirstItemPrice() {
   
    await this.firstitemprice.waitFor({ state: 'visible' });
    return await this.firstitemprice.textContent();
    
  }

  async ClickAddCartButton() {
    
    await this.addcart.waitFor({ state: 'visible' });
    await this.addcart.click();
  }
}

export { ShopPage };