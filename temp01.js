// const data = [
//   "Alice|Developer|Frontend",
//   "Bob|Designer|UI",
//   "Charlie|Developer|Frontend",
//   "David|Manager|Backend",
//   "Eve|Developer|Backend",
// ];

// // Expected output:
// /*
// {
//   Frontend: [
//     { name: "Alice", role: "Developer" },
//     { name: "Charlie", role: "Developer" }
//   ],
//   UI: [
//     { name: "Bob", role: "Designer" }
//   ],
//   Backend: [
//     { name: "David", role: "Manager" },
//     { name: "Eve", role: "Developer" }
//   ]
// }
// */
// data.forEach(function (str) {
//   const [name, role, team] = str.split("|");
//   const infoObj = { name: name, role: role };

//   if (infoObj.team == undefined) infoObj.team = [team];
//   else infoObj[team].push(team);
// });
