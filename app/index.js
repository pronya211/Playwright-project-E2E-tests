import BasePage from './pages/BasePage.js';
import AuthorizationPage from './pages/AuthorizationPage.js';
import RegistrationPage from './pages/RegistrationPage.js';
import AccountPage from './pages/AccountPage.js';
import ProductPage from './pages/ProductPage.js';
import CartPage from './pages/CartPage.js';
import CheckoutPage from './pages/CheckoutPage.js';


class Application extends BasePage {
    constructor(page) {
        super(page);
        this.authorizationPage = new AuthorizationPage(page);
        this.registrationPage = new RegistrationPage(page);
        this.accountPage = new AccountPage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);

    }
}
export default Application;