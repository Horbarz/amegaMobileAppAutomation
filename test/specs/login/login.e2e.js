import { validEmailPassword, validEmailInvalidPassword, invalidEmailValidPassword, invalidEmailinValidPassword } from "../../../fixtures/users";
const LoginPage = require('../../pages/loginPage');

describe("Login Test Suite", () =>{
    before(async ()=> {
        LoginPage.clickCreateAccountBtn();
    });

    it('Test users cannot login successfully with empty email and password', async () => {
       await LoginPage.loginWithEmptyDetails();
    })

    // it('Test users cannot login successfully with empty email and valid password', async () => {
    //     await $('//*[@text="Sign in"]').click();
    //     await $('//*[@text="Password"]').click();
    //     const noThanksButton = $('//*[@text="No, thanks"]');
    //     // await noThanksButton.click();
    //     if (await noThanksButton.isExisting()) {
    //         await noThanksButton.click();
    //     }
    //     await $('//*[@text="Password"]').click();
    //     await $('(//*[@class="android.widget.EditText"])[2]').setValue(validEmailPassword.password)
    //     await $('//*[@content-desc="Sign in"]').click();
    //     await $('//*[@content-desc="Sign in"]').click();
    //     await $('//*[@content-desc="Sign in"]').click();
    //     await expect($('//*[@text="This field is mandatory"]')).toBeExisting();
    // })

    it('Test users cannot login successfully with valid email and empty password', async () => {
        await LoginPage.loginWithValidEmailEmptyPassword(validEmailPassword.username)
    })


    it('Test users cannot login successfully with valid email and invalid password', async () => {
        await LoginPage.login(validEmailInvalidPassword.username, validEmailInvalidPassword.password);
        await LoginPage.verifyErrorMessage();
    })

    it('Test users cannot login successfully with invalid email and valid password', async () => {
        await LoginPage.login(invalidEmailValidPassword.username, invalidEmailValidPassword.password);
        await LoginPage.verifyErrorMessage();
    })

    it('Test users cannot login successfully with invalid email and invalid password', async () => {
        await LoginPage.login(invalidEmailinValidPassword.username, invalidEmailinValidPassword.password);
        await LoginPage.verifyErrorMessage();
    })

    it('Test users can login successfully with valid email and valid password', async () => {
        // Call the login method from the LoginPage object
        await LoginPage.login(validEmailPassword.username, validEmailPassword.password);
        // Click the Allow button that reflects
        await LoginPage.clickAllowBtn();
        // Verify that login was successful
        await LoginPage.verifyLogin();
    })
})