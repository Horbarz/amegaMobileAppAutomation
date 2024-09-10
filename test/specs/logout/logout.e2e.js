const { tapOnCoordinates } = require('../../pages/utils');
const LoginPage = require('../../pages/loginPage');
import { validEmailPassword } from "../../../fixtures/users";



describe('Logout Test Suite', () => {
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

    it.only('Test to ensure users can logout successfully', async () => {
        // Call the tapOnCoordinates function to click on the profile icon
        await tapOnCoordinates(668, 91);
        // Once I access the profile page, I click on the logout button
        await $('//*[@text="Logout"]').waitForDisplayed({ timeout: 5000 });
        await $('//*[@text="Logout"]').click();

        //After successful logout, it should redirect to home page
        await expect($('//*[@text="Investment Ideas"]')).toBeExisting();
    });
});