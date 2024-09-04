import { Page } from 'playwright';
import { SignUpPage } from './SignupPage';
import { ShopPage } from './ShopPage';
import { CheckoutPage } from './CheckoutPage';

class POManager {
  page: Page;
  signupPage: SignUpPage;
  shoppage:ShopPage;
  checkoutpage:CheckoutPage

  constructor(page: Page) {
    this.page = page;
    this.signupPage = new SignUpPage(page);
    this.shoppage = new ShopPage(page);
    this.checkoutpage = new CheckoutPage(page);
  }

  getSignUpPage() {
    return this.signupPage;
  }
  getShopPage() {
    return this.shoppage;
  }
  getCheckoutPage() {
    return this.checkoutpage;
  }
}

export { POManager };