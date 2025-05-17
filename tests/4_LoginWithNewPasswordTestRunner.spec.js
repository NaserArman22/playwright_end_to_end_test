import { test, expect } from '@playwright/test';
import jsonData from "../utils/userData.json";
import LoginPage from '../pages/loginPage.js';

test("Login with new password", async ({ page }) => {
    const latestUser = jsonData[jsonData.length - 1];
    await page.goto("/")
    const loginPage = new LoginPage(page);
    await loginPage.doLogin(latestUser.email, latestUser.password);
    // assertion
    // await expect(page.getByText("Dashboard")).toBeVisible({ timeout: 4000 });

    // npx playwright test LoginWithNewPasswordTestRunner.spec.js

  });