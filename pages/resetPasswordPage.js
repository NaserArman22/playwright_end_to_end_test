import { th } from "@faker-js/faker";

class ResetPasswordPage {
    constructor(page){
        this.page = page;

        this.btnResetLink = page.getByRole('link', { name: 'Reset it here' });
        this.txtEmail = page.getByRole('textbox', { name: 'Email' });
        this.btnSendRsetLink = page.getByRole('button', { name: 'SEND RESET LINK' });

        this.txtNewPassword = page.getByRole('textbox', { name: 'New Password' });
        this.txtConfirmPassword = page.getByRole('textbox', { name: 'Confirm Password' });
        this.btnResetPassword = page.getByRole('button', { name: 'RESET PASSWORD' });

        
    }

    async resetPassword(userModel){
        await this.btnResetLink.click();
        await this.txtEmail.fill(userModel.email);
        await this.btnSendRsetLink.click();
        // await this.page.waitForTimeout(1000);
        
        // await this.txtNewPassword.fill(userModel.newPassword);
        // await this.txtConfirmPassword.fill(userModel.newPassword);
        // await this.btnResetPassword.click();
    }
}
export default ResetPasswordPage;