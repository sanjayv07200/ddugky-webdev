/*

const inventory = {
  apple: { price: "10", quantity: "3", unit: "kg" },
  mango: { price: "20", quantity: "2", unit: "kg" },
  onion: { price: "15", quantity: "0", unit: "kg" },
};


//["Mango: ₹20 per kg, Quantity: 2kg", "Apple: ₹10 per kg, Quantity: 3kg"]
 
const output = [];
for (const item in inventory) {
  const { price, quantity, unit } = inventory[item];
  if (quantity != "0")
    output.push(
      `${item}: ₹${price} per ${quantity}, Quantity: ${quantity}${unit}`
    );
}
console.log(output);

const formData = {
  fullName: " Arpit Jana ",
  email: "arpit@domain.com ",
  hobbies: "coding, music,   reading, Coding",
};
// {
//   fullName: "Arpit Jana",
//   email: "arpit@domain.com",
//   hobbies: ["coding", "music", "reading"]
// }

const { fullName, email, hobbies } = formData;
formData.fullName = fullName.trim();
formData.email = email.trim();
formData.hobbies = Array.from(
  new Set(hobbies.split(",").map((str) => str.trim().toLocaleLowerCase()))
);
console.log(formData);

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "Samsung Galaxy", category: "mobile" },
  { id: 3, name: "MacBook", category: "laptop" },
  { id: 4, name: "Dell XPS", category: "laptop" },
  { id: 5, name: "iPad", category: "tablet" },
];

// {
//   mobile: ['iPhone', 'Samsung Galaxy'],
//   laptop: ['MacBook', 'Dell XPS'],
//   tablet: ['iPad']
// }

const result = {};

products.forEach(function (obj) {
  const { name, category } = obj;
  if (result[category] == undefined) result[category] = [];
  result[category].push(name);
});
console.log(result);

const comments = [
  { id: 1, user: "John", content: "Great post!", likes: "3" },
  { id: 2, user: "Sara", content: "Thanks!", likes: "5" },
  { id: 3, user: "John", content: "You're welcome", likes: "1" },
];

const output = {};
comments.forEach(function (comment) {
  const { user: userName, content: contentVal, likes: likesVal } = comment;
  if (!output[userName]) output[userName] = { likes: 0, comments: [] };
  output[userName].likes += Number(likesVal);
  output[userName].comments.push(contentVal);
});

console.log(output);*/
