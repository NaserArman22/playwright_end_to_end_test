# End-to-End Automation Testing of DailyFinance Portal with Playwright

---
### Project Overview    
This project is an end-to-end UI automation testing suite for DailyFinance using **Playwright**, designed with a clean **Page Object Model (POM)** architecture. It automates the complete user journey starting from registration, programmatically accessing the Gmail inbox via the Gmail API with OAuth 2.0 to verify the congratulation email and asserting the toast message—then logging in, adding two random items and confirming their presence, uploading a profile picture in settings, logging out, performing a password reset via the login page by entering the email and sending a reset link, again programmatically fetching the reset email through the Gmail API, extracting the reset link, completing the password reset process, and finally logging in again with the new password to ensure successful authentication. Sensitive data and configuration are securely managed through dedicated files for maintainability and scalability.

---

## Tech Stack

- **Testing Framework:** Playwright  
- **Programming Language:** JavaScript   
- **Test Architecture:** Page Object Model (POM)  
- **Email Automation:** Gmail API with OAuth 2.0 (for reading congratulation and password reset emails)   
- **Assertion Library:** Built-in Playwright assertions
- **Test Runner:** Playwright Test Runner
- **Reporting Tools:** Allure
- **Package Manager:** npm
- **Version Control:** Git & GitHub

--- 

## Features Covered

#### This project automates the following test scenarios on the site [dailyfinance](https://dailyfinance.roadtocareer.net/):

1. **User Registration**  
   - Register a new user.  
   - Assert the appearance of a toast message confirming successful registration.  
   - Assert that a congratulation email is sent to the registered email.

2. **User Login and Item Management**  
   - Log in with the registered user credentials.  
   - Add two random items to the user's item list.  
   - Assert that the item list contains exactly two items.

3. **Profile Settings Update**  
   - Navigate to profile settings.  
   - Upload a profile photo.  
   - Log out successfully.

4. **Password Reset Flow**  
   - From the login page, click on **"Reset it here"** link.  
   - Reset the password using the password reset link received via email.  
   - Log in using the new password.  
   - Assert that the login is successful.

---

##  Test Case Documentation

 All standard and negative test cases are documented in this Google Sheet:  
   [Test Cases - DailyFinance Automation](https://docs.google.com/spreadsheets/d/1g-dvxlzvEiuoShk6_Bihj5EO7ZRY_haCnpip77R4APA/edit?usp=sharing)
   
---

## Full Automation Process Recording Video
You can watch the full automation process execution in the recorded video below:  
[Watch Full Automation Demo Video](https://drive.google.com/file/d/1akHqu7fT7wb0eiw6HhDwPY6wRPhppziE/view?usp=sharing)

---

## Allure Report 
![overview](https://github.com/user-attachments/assets/32438eac-288f-47f6-a820-136725b33159)

![behaviors](https://github.com/user-attachments/assets/b9bc2ad0-e082-4026-b5cb-6f4f6c492c09)

---

## Prerequisites

- **Node.js** (v14 or higher) installed on your machine  
- **npm** or **yarn** package manager  
- Access to a **Google Cloud Project** with Gmail API enabled  
- OAuth 2.0 credentials configured via **Google API Console** or **OAuth 2.0 Playground** for Gmail API access  
- Valid **Gmail account** for receiving and reading test emails  
- Basic understanding of Playwright and JavaScript  
- (Optional) Code editor like **VS Code** for development  
- Internet connection to access DailyFinance site and Google APIs

---

##  Project Setup & Execution
1. Clone the repository:
   ```bash
   git clone https://github.com/nadim45448/End-to-End-Automation-Testing-of-DailyFinance-Portal-with-Playwright.git

   ```
    - cd DailyFinance-FullStackAutomation

2. Install dependencies
     ```bash
      npm install
     ```
3. Configure Gmail API OAuth 2.0 credentials 
    - Enable Gmail API in your Google Cloud Console.
    - Obtain OAuth credentials or use OAuth 2.0 Playground.
    - Store tokens securely for programmatic email reading.
4. Run tests
   ```bash
   npx playwright test

   ```
5. Generate and view test report
    ```bash
   npx playwright show-report
   ```
    OR,
    ```bash
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report
   ```

---

   
   

