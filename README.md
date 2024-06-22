# MULTI-STEP FORM WITH REACT

This project implements a responsive multi-step form using React.js. The form consists of three steps and includes data validation, error handling, navigation controls, state management, and local storage persistence. The form is designed to work well on desktop, tablet, and mobile screens.

## PROJECT SCREENSHOT
![Project Screenshot](./public/Screenshot%202024-06-22%20084730.png)

## TABLE OF CONTENTS
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [License](#license)

## FEATURES
- Multi-step form with three steps:
  - Step 1: Personal Information (Name, Email, Phone)
  - Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
  - Step 3: Confirmation (Review all entered data)
- Tabbed navigation to switch between steps.
- Back button disabled on the first step.
- Next button disabled on the last step, replaced by a submit button.
- Form data persistence using local storage.
- Form validation to ensure all fields are filled before allowing navigation to the next step.
- Responsive design for optimal viewing on different devices.

## INSTALL DEPENDENCIES
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
   cd multi-step-form

## INSTALL DEPENDENCIES:
   npm install

## START THE DEVELOPMENT SERVER:
   npm start

## USAGE

1.Navigate through the form steps by clicking the "Next" and "Back" buttons.
2.Enter the required information in each step.
3.Review the entered data on the confirmation step.
4.Submit the form by clicking the "Submit" button on the confirmation step.
5.An alert will appear indicating successful form submission, and the form data will be cleared.


## PROJECT STRUCTURE

multi-step-form/
├── public/
├── src/
│   ├── components/
│   │   ├── PersonalInfo.js
│   │   ├── AddressInfo.js
│   │   ├── Confirmation.js
│   ├── App.js
│   ├── index.js
│   ├── MultiStepForm.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md

## COMPONENTS

## PersonalInfo
Handles the form inputs for personal information such as name, email, and phone.

## AddressInfo
Handles the form inputs for address information such as address line 1, address line 2, city, state, and zip code.

## Confirmation
Displays the entered information for review before submission.

## MultiStepForm
Manages the state of the form, handles navigation between steps, and performs form submission.

## License
This project is licensed under the MIT License. See the LICENSE file for details.