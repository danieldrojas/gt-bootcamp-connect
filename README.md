# BootcampConnect
[Heroku_Deployment](https://git-bootcamp-connect.herokuapp.com/)



![login_screen](/public/Assets/login_page.jpg)

## Description 


**It’s not only WHAT you know, it’s WHO you know.**  

* BootCampConnect™ helps new Bootcamp students connect with Bootcamp alumni
* Users can post about jobs, collaborative opportunities or general coding questions


## Table of Contents

* [ERD](#erd)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)



## ERD

![bcc_erd](/public/Assets/BCC.png)

## Installation

Clone the repository and run 'npm install'.  Create your local database and change the /config/config.json file to reflect your _user name_ and _password_.  Run 'node server.js' and that will create your tables.  Next you must use Postman or similar tool to populate your 'categories' table with "category": "General" and then do the same for "Jobs" and "Collaborate".  Posts are have UserId and CategoryId for Foreign Keys so Catergories must be populated.

Once you have done the above, get playing around to add users and posts.

## Usage 

The landing page is Login.  If you have already signed up you can login here, if do not have an account, you need to Click Sign Up.  You must enter your First and Last name, an email address, and a password with at least 8 Characters. You will then be directed to your Profile Page where you can edit your Location, Gihub, LinkedIn, and Bio fields.

If you already had credentials you will be taken straight to the Dashboard where you will be able to select posts by category, go to profile page, or create a post.  To create a post, enter the Title, Body, and pick a Category.


![profile_page](/public/Assets/profile_page.png)
![edit_profile](/public/Assets/edit_profile.png)
![dashboard](/public/Assets/dashboard.jpg)

## Credits

Nick Mitchel | Steve Morris | Daniel Rojas | Chay Williams
------------ | ------------- | ------------ | -------------

[Github](https://github.com/nmitchell34) | [Github](https://github.com/steveamorris) | [Github](https://github.com/danieldrojas) | [Github](https://github.com/Chayvw)




## License

MIT License

Copyright (c) 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.








