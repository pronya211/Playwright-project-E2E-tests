import BasePage from './pages/BasePage.js';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage.js';


class Application extends BasePage {
    constructor(page) {
        super(page);
        this.loginPage = new LoginPage(page);
        this.registrationPage = new RegistrationPage(page);

    }
}
export default Application;