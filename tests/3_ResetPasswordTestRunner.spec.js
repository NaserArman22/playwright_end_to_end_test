import {test, expect} from '@playwright/test';
import jsonData from "../utils/userData.json" ;
import fs from 'fs';
import path from 'path';
import ResetPasswordPage from '../pages/resetPasswordPage.js';
import { getEmailBody } from '../utils/utils.js';

test("Reset Password", async ({page, request}) => {
    const lastIndex = jsonData.length - 1;
    const latestUser = jsonData[lastIndex];
    const newPassword = "1234"
    
    const userModel = {
        email: latestUser.email
       
    }
    
    await page.goto("/");
    const reset = new ResetPasswordPage(page);
    await reset.resetPassword(userModel);
    await page.waitForTimeout(5000);

    
    const snippet = await getEmailBody( request );

    const urlRegex = /(https?:\/\/\S+)/;
    const match = snippet.match(urlRegex);
    if (!match) throw new Error('Password reset URL not found in email snippet');
    const resetUrl = match[0];

    await page.goto(resetUrl);
    await reset.txtNewPassword.fill(newPassword);
    await reset.txtConfirmPassword.fill(newPassword);
    await reset.btnResetPassword.click();
    await expect(page.locator('text=Password reset successfully')).toBeVisible();

    // save new password to json file
    latestUser.password = newPassword;
    fs.writeFileSync("./utils/userData.json", JSON.stringify(jsonData, null, 2));
    await page.waitForTimeout(3000);

 // npx playwright test ResetPasswordTestRunner.spec.js 
 
})