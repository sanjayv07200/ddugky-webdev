/*Question 2 : Normalize and Group Emails by Domain
You are given an array of email addresses with inconsistent casing and possible extra spaces. Write a function groupEmailsByDomain(emails) that:

    Removes any leading/trailing spaces from each email.
    Converts the entire email to lowercase.
    Groups the cleaned emails by domain name (the part after @), storing them in an object.
    Each key in the returned object should be a domain, and its value should be an alphabetically sorted array of emails belonging to that domain.
> You must use method chaining and avoid any traditional loops (for, while, etc.).
Example Input:

const emails = [
  '  Alice@Example.com ',
  'BOB@GMAIL.COM',
  'charlie@Gmail.com ',
  'david@EXAMPLE.COM ',
  ' eve@yahoo.com'
];

Expected Output:

{
  "example.com": ["alice@example.com", "david@example.com"],
  "gmail.com": ["bob@gmail.com", "charlie@gmail.com"],
  "yahoo.com": ["eve@yahoo.com"]
}*/

const emails = [
  "  Alice@Example.com ",
  "BOB@GMAIL.COM",
  "charlie@Gmail.com ",
  "david@EXAMPLE.COM ",
  " eve@yahoo.com",
];

const getkey = (email) => email.split("@").at(1);

const res = emails
  .map((email) => email.trim().toLowerCase())
  .reduce(function (acc, email) {
    const key = getkey(email);
    if (!acc[key]) {
      acc[key] = [email];
    } else {
      acc[key].push(email);
    }
    return acc;
  }, {});

console.log(res);
