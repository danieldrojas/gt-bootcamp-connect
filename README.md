# BootcampConnect
[Heroku_Deployment](https://git-bootcamp-connect.herokuapp.com/)



![login_screen](/public/Assets/login_screen.png)

## Description 

**It’s not only WHAT you know, it’s WHO you know.**  Bootcamp Connect is your one stop app to keep you connected with your cohort and help you find meaningful employment.

This app is for Project 2 to make use of Express, Handlebars, MySql2, and Sequelize.  We incoporated Express-Sessions and Passport to add Authorization as well.

## Table of Contents (Optional)

* [ERD](#erd)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)


## ERD

![bcc_erd](/public/Assets/BCC.png)

## Installation

Clone the repository and run 'npm install'.  Create your local database and change the /config/config.json file to reflect your _user name_ and _password_.  Run 'node server.js' and that will create your tables.  Next you must use Postman or similar tool to populate your 'categories' table with "category": "General" and then do the same for "Jobs" and Collaborate.  Posts are have UserId and CategoryId for Foreign Keys so Catergories must be populated.

Once you have done the above, get playing around to add users and posts.

## Usage 

The landing page is Login.  If you have already signed up you can login here, if do not have an account, you need to Click Sign Up.  You must enter your First and Last name, an email address, and a password with at least 8 Characters. You will  


## Credits

Nick Mitchel | Steve Morris | Daniel Rojas | Chay Williams
------------ | ------------- | ------------ | -------------
[Github]() | [Github]() | [Github]() | [Github]()

@nmitchell34



## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.
