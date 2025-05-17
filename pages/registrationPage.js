import { th } from "@faker-js/faker";

class RegistrationPage {

    constructor(page){
        
        this.page = page;

        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.txtFirstName = page.getByLabel('First Name');
        this.txtLastName = page.getByLabel('Last Name');
        this.txtEmail = page.getByLabel('Email');
        this.txtPassword = page.getByLabel('Password');
        this.txtPhoneNumber = page.getByLabel('Phone Number');
        this.txtAddress = page.getByLabel('Address');
        this.radioBtnGender = page.getByRole('radio');
        this.checkBoxTerms = page.getByRole('checkbox');
        this.btnRegister = page.getByRole('button', { name: 'REGISTER' });


    }  
    
    async registerUser(userModel){
        await this.registerLink.click();
        await this.txtFirstName.fill(userModel.firstName);
        await this.txtLastName.fill(userModel.lastName);
        await this.txtEmail.fill(userModel.email);
        await this.txtPassword.fill(userModel.password);
        await this.txtPhoneNumber.fill(userModel.phoneNumber);
        await this.txtAddress.fill(userModel.address);
        await this.radioBtnGender.first().click();
        await this.checkBoxTerms.click();
        await this.btnRegister.click();
    }



}
export default RegistrationPage;