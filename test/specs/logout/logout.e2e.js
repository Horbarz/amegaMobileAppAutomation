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
        // Call the tapOnCoordinates function
        await tapOnCoordinates(668, 91);
        // Additional test steps
        await $('//*[@text="Logout"]').click();
        await expect($('//*[@text="Investment Ideas"]')).toBeExisting();
    });
});