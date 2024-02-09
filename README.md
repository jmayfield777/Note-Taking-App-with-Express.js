# Note-Taking-App-with-Express.js

## Description

This project is a note taking application with Express.js. To start, the user must run the local server on their computer to use the note taking app. The user can then navigate to the specified port, 3001, to view the index.html file in the browser. Click the "Get Started" button to begin and you will be redirected to the notes.html page where you will be greeted with a section to enter a new note with title and body text. Once you click "Save Note" the new note will be pushed to the list on the left-hand side of the screen with the other notes. Each note has a trash icon button to delete the notes. This will delete the note from the webpage and from the "db.json" file.

[Screenshot of note-taking-app page 1]()

[Screenshot of note-taking-app page 2]()

## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [Credits](#credits)

 * [License](#license)

 * [Questions](#questions)

## Installation

To run this project, run the following command:

```
npm init 
```

(add "-y" to answer yes to all questions regarding the creation of the package.json), then run the following code to install the inquirer package to receive the questions to generate the README.md:

```

npm i 
```

Run this command once you have navigated to the folder holding the server.js file:

```
node server.js
```

## Usage

Clone this repo and save it locally to your computer. Open terminal, git bash, or whichever command line interface you are using and navigate to the directory holding the server.js file. 

```
node server.js
```

You should receive a message indicating "App listening at http://localhost:3001". Navigate to your browser of choice and enter "http://localhost:3001" to load the note taking app.

## Credits

https://github.com/jfisher396/express-note-taker (help building app)

https://developer.mozilla.org/en-US/docs/Web/API/fetch#examples (help debugging app)

https://stackoverflow.com/questions/36340747/error-enoent-no-such-file-or-directory-stat-public-main-html-at-error-nat (help debugging app)

https://stackoverflow.com/questions/49346759/nodejs-note-app-delete-function-is-not-working (help with creating delete route)

https://makeschool.org/mediabook/oa/tutorials/rotten-potatoes---movie-reviews-with-express-js/deleting-a-review/ (help creating delete route)

https://www.npmjs.com/package/uuid (help with generating random id's)


## License

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Questions

If you have any questions about this repo, please feel free to contact me at my email : josh.mayfield45@gmail.com and Github profile : https://github.com/jmayfield777