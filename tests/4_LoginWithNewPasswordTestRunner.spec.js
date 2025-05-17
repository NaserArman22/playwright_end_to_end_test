import { test, expect } from '@playwright/test';
import jsonData from "../utils/userData.json";
import LoginPage from '../pages/loginPage.js';

test("Login with new password", async ({ page }) => {
    
    await page.goto("/")
    const loginPage = new LoginPage(page);
    const latestUser = jsonData[jsonData.length - 1];
   
    await loginPage.doLogin(latestUser.email, latestUser.password);

 
    // assertion
    await expect(page.getByText("Dashboard")).toBeVisible({ timeout: 5000 });

    // npx playwright test LoginWithNewPasswordTestRunner.spec.js

  });