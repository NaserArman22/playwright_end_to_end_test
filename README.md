# End-to-End Automation Testing of DailyFinance Portal with Playwright

---

## Description

### This project automates the following test scenarios on the site [dailyfinance](https://dailyfinance.roadtocareer.net/):

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
## Tech Stack

- **Test Automation Framework:** Playwright
- **Programming Language:** JavaScript 
- **Test Runner:** Playwright Test Runner
- **Reporting Tools:** Mochawesome / Allure
- **Package Manager:** npm 
- **Version Control:** Git & GitHub
  
---

##  Test Case Documentation

 All standard and negative test cases are documented in this Google Sheet:  
   [Test Cases - DailyFinance Automation]()
   
---

## Full Automation Process Recording Video
You can watch the full automation process execution in the recorded video below:  
[Watch Full Automation Demo Video](https://drive.google.com/file/d/1HUgFEgSCaPg3S_hBrkUbTwszeCrceEhN/view?usp=sharing)

---

## Report 
![report](https://github.com/user-attachments/assets/8bfd8a17-ef4b-4543-b69b-36027ce7bf47)



---
