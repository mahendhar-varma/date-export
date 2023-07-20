const result = require("./index");

const date = result(new Date(2020, 7, 22), 1);
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
