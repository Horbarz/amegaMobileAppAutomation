const LoginPage = require('../../pages/loginPage');
import { validEmailPassword } from "../../../fixtures/users";



describe('Trading Test Suite', () => {
    before(async () => {
        // Preconditions: Login to the app
        LoginPage.clickCreateAccountBtn();
        await LoginPage.login(validEmailPassword.username, validEmailPassword.password);
        await LoginPage.clickAllowBtn();
        await LoginPage.verifyLogin();
    });

    afterEach(async () => {
        // Teardown code
    });

    it('Test to ensure users can buy a stocks', async () => {
        //On the home page click on a Buy button
       await $('//*[@text="Buy now"]').click()
       //Buy now button does not respond

    });

    it('Test to ensure users can sell a stocks', async () => {
        //On the home page click on a Buy button
        await $('//*[@text="Sell now"]').click()
        //Sell now button does not respond
        
     });
});