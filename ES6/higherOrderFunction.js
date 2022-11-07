//filter
const { childrenAge, mailList } = require("./data");
//crianças entre 2 - 12

const childrenFiltered = childrenAge.filter(
	(children) => children >= 2 && children <= 12
);

console.log(childrenFiltered);

//emails filtrados

const filteredRocketseatEmails = mailList.filter((mail) =>
	mail.includes("@rocketseat.com")
);
console.log(filteredRocketseatEmails);

//encontrar passageiro
const { passengers } = require("./data");

const enzo = passengers.find(
	(passanger) => passanger.name.toLowerCase() === "enzo"
);

console.log(enzo);

//foreach
//add a idade para cada pessoa

console.table(passengers);

passengers.forEach((passenger) => {
	passenger.age = 2022 - passenger.birthYear;
});

console.table(passengers);

//map
//não vai alterar meu objeto
//vai retornar um novo objeto RESPEITANDO o tamanho do objeto original

//quantos anos eles tem?

const newPassengers = passengers.map((passanger) => {
	return `${passanger.name} tem ${2022 - passanger.birthYear}`;
});

console.table(newPassengers);

//encontre o nome palindromo
const founds = passengers.map((passenger) => {
	const reverseName = [].map
		.call(passenger.name, (letter) => letter)
		.reverse()
		.join("");
	if (reverseName.toLowerCase() === passenger.name.toLowerCase()) {
		return `This is palindromo: ${passenger.name}`;
	}
});

console.table(founds);

//reduce
//Reduzir a um valor único

//Qual o valor total do carrinho de compras
const { shopCart } = require("./data");

const totalValue = shopCart.reduce((acumulator, item) => {
	return acumulator + item.quantity * item.unitPrice;
}, 0);

console.log(totalValue);

//Quantidade total de produtos no carrinho
const totalProducts = shopCart.reduce((acc, item) => {
	return acc + item.quantity;
}, 0);

console.log(totalProducts);

//SORT
//ordenar elementos
//ordenação segue a regra do unicode ASCII
//A-Z, a-z

console.log(
	"ordenado: ",
	[2, 5, 6, 8, 3, 4].sort((a, b) => a - b)
);

//organize o carrinho pelo número de produtos

const OrderByProducts = shopCart.sort((a, b) => b.quantity - a.quantity);

console.table(OrderByProducts);

const orderByPassengerName = passengers.sort((a, b) => {
	if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
	if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
	return 0;
});

console.table(orderByPassengerName);

// add o ano de nascimento das crianças para cada elemento do array

const childrenReduce = childrenAge.reduce((list, age) => {
	const currentyYear = new Date().getFullYear();
	list.push({
		age,
		birthYear: currentyYear - age
	});
	return [...list];
}, []);

console.table(childrenReduce);

const childrenMap = childrenAge.map((age) => {
	const currentyYear = new Date().getFullYear();

	return {
		age,
		birthYear: currentyYear - age
	};
});

console.table(childrenMap);

//Crie um array, somento com os dominios de email

const domainsReduce = mailList.reduce((list, mail) => {
	const arrSplit = mail.split("@");
	list.push({
		mail: mail,
		domain: arrSplit[1]
	});
	return [...list];
}, []);

console.log(domainsReduce);

const domainsMap = mailList.map((mail) => {
	const domainSplit = mail.split("@");

	return {
		mail,
		domain: domainSplit[1]
	};
});

console.table(domainsMap);

//Encontre o maior preço dos produtos abaixo de 100 reais
const bellow100 = shopCart
	.filter((product) => product.unitPrice <= 100)
	.reduce(
		(lastProduct, currentyProduct) => {
			if (lastProduct.unitPrice > currentyProduct.unitPrice) return lastProduct;

			return currentyProduct;
		},
		{ unitPrice: 0 }
	);

console.table(bellow100);
