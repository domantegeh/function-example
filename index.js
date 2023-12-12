// function declaration
function multiply(a, b) {
  return a * b;
}
let result = multiply(3, 4);
console.log(result);

// function expression
const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};
console.log(greeting("Ron", "English"));

const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// rest parameter
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));

// arrow function
const sayName = (name) => {
  console.log("My name is " + name);
};
sayName("Leia");

const sayHello = () => {
  console.log("Selamat pagi semuanya!");
};
sayHello();

const multiply2 = (a, b) => a * b;
console.log(multiply2(5, 10));

// closure
function init() {
  const name = "Obi Wan";

  function greet() {
    console.log(`Hello, ${name}!`);
  }

  return greet;
}

const myFunction = init();
myFunction();

// challenge
function minimal(a, b) {
  if (a < b) {
    console.log(a);
  } else if (a > b) {
    console.log(b);
  } else {
    console.log(a);
  }
}
minimal(1, 4);
minimal(3, 2);
minimal(3, 3);

function findIndex(p1, p2) {
  for (let i = 0; i < p1.length; i++) {
    if (p1[i] == p2) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));
