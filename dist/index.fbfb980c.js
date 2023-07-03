/* global use, db */ // MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/
const username = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#mail");
const text = document.querySelector("#textarea");
use("contacts");
db.getCollection("contact").insertMany([
    {
        "name": username.value,
        "surname": surname.value,
        "mail": email.value,
        "message": text.value
    }
]);

//# sourceMappingURL=index.fbfb980c.js.map