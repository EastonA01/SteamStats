# SteamStats
## Project focusing on the development of a steam statistics site that cross references you and your friend's data to create a comprehensive visual of your profiles
The SteamStats Project in it's original form is meant to display the data of Steam user's given their SteamID, alongside some additional data from their friends, with
the ability to jump between both your SteamStats and your friends' statistics. With the primary asset being the ability to compare your statistics with your friends'.

### Visualization of page once loaded
![visual](https://user-images.githubusercontent.com/97856048/232165756-ca146c79-2796-4217-ab80-213c6f290aa1.png)

### Installation
Eventually the application should be up and running on a hosted website, so no installation would be necessary. Check my GitHub for any updates!

### Developer Installation
For developing this application I followed the blogpost linked below.
https://blog.logrocket.com/using-react-django-create-app-tutorial/
There are some items in the gitignore that need to be attended to prior to running all the code.

When setting up the Environment for python to run inside, the config file mentioned below will need to match your personal install location, you may be able to run
where.exe python in order to find it.
![configfileschange](https://user-images.githubusercontent.com/97856048/232166486-07d8f7dd-ef6c-414c-84ed-d3a4a71abb71.png)
Afterwards, you'll want to have 2-3 terminals open, one to run the ENV, and the other for NPM to run React.
#### For the 1st Terminal:
-Cd into env/Scripts. Run the activate.bat file. Usually done with a period such as:
```
./activate’
```
-Terminal should now be in a virtual environment

-Cd out of there and into the backend folder (titleHere_be)

-Run ‘python manage.py runserver’


#### For the 2nd terminal


-Cd into the frontend folder

-As long as React is properly installed, run the following command

```
npm start
```

### Contributor Expectations
- Please make a pull and merge request prior to making any pushes to the project, as there may be some conflictions with files unless followed properly. Otherwise
following standard protocol for a repository is recommended.

### Known Issues
- Friend's tab on the "Dashboard" section should redirect to your friend's dashboard but instead redirects to the "User" page, with Navigate from React Router being
the culprit.
- Steam's API has limited functionality without being a game developer, and has very little advancements in it's versions of commands and requests, considering 
using a different form of their API.

### Consider Supporting
If you'd like to support any further contributions to the project- or any additional projects in the future- consider donating a couple shekels to the cause!
Paypal: https://paypal.me/eastonandrew01?country.x=US&locale.x=en_US
