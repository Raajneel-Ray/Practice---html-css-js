/**
 * Exercise 3: Validate passwords
Problem:
Write a JavaScript program to validate a list of passwords. A password is valid if:

It contains only alphanumeric characters (letters and numbers)
It must be at least 8 characters long, but no more than 20 characters
Input details:

An array of passwords (strings)
Output details:

A message indicating whether each password is valid or invalid
Steps to implement:

Define an array of sample passwords
Write a function validatePasswords that takes this array as input
Use a loop to iterate through the passwords and check each against the validation criteria
Log whether each password is valid or invalid
 */

const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];
function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}
validatePasswords(passwords);