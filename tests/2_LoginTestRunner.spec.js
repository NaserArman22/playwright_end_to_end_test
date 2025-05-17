import { test, expect } from '@playwright/test';
import jsonData from "../utils/userData.json";
import LoginPage from '../pages/loginPage.js';
import CostPage from '../pages/costPage.js';
import ProfileSettingsPage from '../pages/profileSettingsPage.js';

test.beforeEach("User Login", async ({ page }) => {
  const latestUser = jsonData[jsonData.length - 1];
    await page.goto("/");
    const loginPage = new LoginPage(page);
    await loginPage.doLogin(latestUser.email, latestUser.password);
    
  });

  test("Login and add two random items", async ({ page }) => {
      const costPage = new CostPage(page);
      const cost1 = {
        name: 'Milk',
        quantity: 1,
        amount: 50,
        remarks: 'Morning milk'
      };

      const cost2 = {
        name: 'Bread',
        quantity: 2,
        amount: 30,
        remarks: 'Breakfast bread'
      };

      await costPage.addItem(cost1);
      await costPage.addItem(cost2);
      const count = await costPage.getItemCount();
      expect(count).toBeGreaterThan(1);
      // await page.pause();

    });

    test(" Go to profile settings and upload a profile photo and logout",async ({page})=>{

      const profile = new ProfileSettingsPage(page);
      const path = require('path');
      const filePath = path.resolve(process.cwd(), 'assets', 'sdet.jpg');

      await profile.uploadProfileImage(filePath);
      // await page.pause();

      // npx playwright test LoginTestRunner.spec.js 
      
    })

