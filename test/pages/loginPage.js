class LoginPage{

    get signInButton() {
        return $('//*[@text="Sign in"]');
    }

    get emailField() {
        return $('(//*[@class="android.widget.EditText"])[1]');
    }

    get passwordField() {
        return $('(//*[@class="android.widget.EditText"])[2]');
    }

    get rememberMeCheckbox() {
        return $('//*[@text="Remember me"]');
    }

    get signInSubmitButton() {
        return $('//*[@content-desc="Sign in"]');
    }

    get allowButton() {
        return $('//*[@text="Allow"]');
    }

    get investmentIdeasText() {
        return $('//*[@text="Investment Ideas"]');
    }

    get errorMessage(){
        return $('//*[@text="The email or password provided is invalid. Please check your credentials and try again."]');
    }

    get createAccountButton(){
        return $('~Create account');
    }

    async clickCreateAccountBtn(){
        await this.createAccountButton.click();
    }


    async loginWithEmptyDetails(){
        await this.signInButton.click();
        await this.signInSubmitButton.click();
        await expect($('(//*[@text="This field is mandatory"])[1]')).toBeExisting();
        await expect($('(//*[@text="This field is mandatory"])[2]')).toBeExisting();
    }

    async loginWithValidEmailEmptyPassword(email){
        await this.signInButton.click();
        await this.emailField.click();
        await this.emailField.setValue(email);
        await this.signInSubmitButton.click();
        await this.signInSubmitButton.click();
        await expect($('//*[@text="This field is mandatory"]')).toBeExisting();
    }

    async login(username, password) {
        await this.signInButton.click();
        if(!(await this.emailField.isExisting())){
            await this.signInButton.click();
        }else{
            await this.emailField.click();
        }
        await this.emailField.setValue(username);
        await this.passwordField.click();
        await this.passwordField.setValue(password);
        await this.rememberMeCheckbox.click();
        await this.signInSubmitButton.click();
        
    }

    async clickAllowBtn(){
        await this.allowButton.click();
    }

    // Method to check if login was successful
    async verifyLogin() {
        await expect(this.investmentIdeasText).toBeExisting();
    }

    //Method to verify error message during invalid login
    async verifyErrorMessage() {
        await expect(this.errorMessage).toBeExisting();
    }

}

module.exports = new LoginPage();

