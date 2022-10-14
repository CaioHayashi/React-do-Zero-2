////////////// 1 - var, let const

var x = 10;
var y = 15;

if (y > 10) {
	var x = 5;
	console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
	let a = 5;
	console.log(a);
}

console.log(a);

for (let i = 10; i >= 1; i--) {
	console.log(i);
}

function logName() {
	const name = "Matheus";
	console.log(name);
}

const name = "Pedro";

logName();

console.log(name);

//////// 2- arrow function

const sum = function sum(a, b) {
	return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const user = {
	name: "Theo",
	sayUserName() {
		var self = this;
		setTimeout(function () {
			console.log(self.name);
			console.log("Username: " + self.name);
		}, 500);
	},
	sayArrowUserName() {
		setTimeout(() => {
			console.log(this.name);
			console.log("Username: " + this.name);
		}, 1000);
	}
};

user.sayUserName();
user.sayArrowUserName();

//filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((num) => {
	if (num >= 3) {
		return num;
	}
});

console.log(highNumbers);

const users = [
	{ name: "Matheus", avaliable: true },
	{ name: "Pedro", avaliable: false },
	{ name: "João", avaliable: false },
	{ name: "Marcos", avaliable: true },
	{ name: "Felipe", avaliable: true }
];

const avaliableUsers = users.filter((user) => user.avaliable);
const notAvaliableUsers = users.filter((user) => !user.avaliable);

console.log(avaliableUsers);
console.log(notAvaliableUsers);

//map
const products = [
	{
		name: "Camisa",
		price: 10.99,
		category: "Roupas"
	},
	{
		name: "Chaleira Elétrica",
		price: 259.99,
		category: "Eletro"
	},
	{
		name: "Microondas",
		price: 639.99,
		category: "Eletro"
	},
	{
		name: "Calça Jeans",
		price: 89.99,
		category: "Roupas"
	}
];

products.map((product) => {
	if (product.category === "Roupas") {
		product.onSale = true;
	}
});

console.log(products);

// destructuring
const fruits = ["Maçã", "Laranja", "Mamão"];

const [f1, f2, f3] = fruits;

console.log(f1);

console.log(f3);

const productDetails = {
	name: "mouse",
	price: 39.99,
	category: "perifericos",
	color: "cinza"
};

const {
	name: productName,
	price,
	category: productCategory,
	color
} = productDetails;

console.log(
	`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`
);

//Spread Operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = {
	km: 100000,
	price: 49000
};

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

//Classes
class Product {
	constructor(name, price) {
		(this.name = name), (this.price = price);
	}
	productWithDiscount(discount) {
		return this.price * ((100 - discount) / 100);
	}
}

const shirt = new Product("Camisa corinthians", 159.9);

console.log(shirt.name);

console.log(shirt.productWithDiscount(10));

console.log(shirt.productWithDiscount(15));

//Herança
class ProductWithAttributes extends Product {
	constructor(name, price, colors) {
		super(name, price), (this.colors = colors);
	}

	showColors() {
		console.log("As cores são:");
		this.colors.forEach((color) => {
			console.log(color);
		});
	}
}

const hat = new ProductWithAttributes("Chapéu", 39.9, [
	"Preto",
	"Cinza",
	"Branco"
]);

console.log(hat);
