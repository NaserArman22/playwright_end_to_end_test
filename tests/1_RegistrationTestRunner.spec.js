import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import jsonData from "../utils/userData.json" ;
import fs from 'fs';
import {generateRandomNumber} from '../utils/utils.js';
import RegistrationPage from "../pages/registrationPage.js";
import { getLatestEmailId, getEmailBody } from '../utils/utils.js';


test ("User Registration", async ({page, request}) => {
    await page.goto("/");
    const reg = new RegistrationPage(page);

    const userModel = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "nadim.cse.edu+" + generateRandomNumber(1000, 9999) + "@gmail.com",
        password: faker.internet.password(),
        phoneNumber: `0120${generateRandomNumber(1000000, 9999999)}`,
        address: faker.location.city(),

    }
    await reg.registerUser(userModel);
    
    // assert toast message
    const toastLocator = page.locator(".Toastify__toast");
    toastLocator.waitFor({timeout:20000});
    const msg = await toastLocator.textContent();
    expect(msg).toContain(" successfully");

    // assert congratulation email
    const messageId = await getLatestEmailId(request);
    const snippet = await getEmailBody(request, messageId);
    expect(snippet).toContain("Welcome to our platform");
    
    // save user data to json file
    jsonData.push(userModel);
    fs.writeFileSync('./utils/userData.json', JSON.stringify(jsonData, null, 2));

    
    // to run: npx playwright test RegistrationTestRunner.spec.js

})

