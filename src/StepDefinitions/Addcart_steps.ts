const { When, Given,Then } = require("@cucumber/cucumber")
import { poManager } from '../Utils/Hooks';
import {generatePassword,generateRandomText,generateRandomNumber} from '../Utils/CommonFunctions'
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(180000);

export let name:any;
export let price:any;

Given('Sign up and login', async function () {
    const loginPage = poManager.getSignUpPage();
    await loginPage.PageNavigation();
    await loginPage.ValidLogin(generateRandomText(5)+'@gmail.com', generatePassword(15));  
});


When('visit shop and add product to the Cart', async function () {
    const shoPage = poManager.getShopPage();
    await shoPage.ClickShopLabel();
    name = await shoPage.GetFirstItemTitle();
    price = await shoPage.GetFirstItemPrice();
    const prices = price.trim().split(' ');
    const lastPrice = prices[prices.length - 1];
    await shoPage.ClickAddCartButton();

    
});

When('procced tp checkout and Check the prodcut same as the selected product', async function () {
    const checkoutpage = poManager.getCheckoutPage();
    await checkoutpage.ClickCartLabel();
    await checkoutpage.ClickProceedtoCheckoutButton();
    
    await checkoutpage.FirstName(generateRandomText(5));
    await checkoutpage.lastName(generateRandomText(5));
    await checkoutpage.Phone(generateRandomNumber(5));
    await checkoutpage.Address(generateRandomText(5));
    await checkoutpage.City(generateRandomText(5));
    await checkoutpage.Country();
    await checkoutpage.state(generateRandomText(5));
    await checkoutpage.Zip(generateRandomNumber(5));

    await checkoutpage.GetproductNameTitle();
    
});