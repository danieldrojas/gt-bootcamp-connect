# BootcampConnect
[Heroku_Deployment](https://git-bootcamp-connect.herokuapp.com/)



![login_screen](/public/Assets/login_screen.png)

## Description 

**It’s not only WHAT you know, it’s WHO you know.**

* BootCampConnect™ helps new Bootcamp students connect with Bootcamp alumni
* Users can post about jobs, collaborative opportunities or general coding questions

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

Clone the repository and run 'npm install'.  Create your local database and change the /config/config.json file to reflect your _user name_ and _password_.  Run 'node server.js' and that will create your tables.  Next you must use Postman or similar tool to populate your 'categories' table with "category": "General" and then do the same for "Jobs" and "Collaborate".  Posts are have UserId and CategoryId for Foreign Keys so Catergories must be populated.

Once you have done the above, get playing around to add users and posts.

## Usage 

When you first visit the site, you will need to Login or Sign Up. Here you can enter your credentials, or click "Sign Up" to create an account.  If you do have to create an account you will be taken to your Profile Page to complete your profile with GitHub, LinkedIn, Location, and Biography.  You can edit it whenever you please.  If you logged in without creating an account you will be taken to the Dashboard.  Here you can sort posts by category, return to your profile, or create a new post.

When you create a Post, you give it a title, the body of your post, and choose a category. It will then return you to the dashboard.

**Need to do Logout**


## Credits

Nick Mitchel | Steve Morris | Daniel Rojas | Chay Williams
------------ | ------------- | ------------ | -------------
[Github]() | [Github]() | [Github]() | [Github]()




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
