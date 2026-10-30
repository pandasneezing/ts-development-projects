
function calculatePrice(sale: [string, number, number, boolean]) {
 const [productName, unitPrice, amount, paid] = sale;
let total = unitPrice * amount;
console.log(`Producto: ${productName} \nPrecio unitario:$ ${unitPrice} \nCantidad: ${amount}\nTotal: ${ total}\nEstado: ${paid ? "Pagado" : "Aún no ha pagado"}`)
}

calculatePrice(["Piñata Hello Kitty",450, 2, true]);

let product : [string, number, boolean];

product = ["Piñata Kuromi",450,true];
console.log(product);


product[1] = 500;

console.log(product[1], "Esto se supone que es el valor reasignado porque sí es posible modificar un valor ");


// ============= AQUÍ INICIANDO LOS GENERICS <T> CON FUNCTIONS ==============

function getValue<T> (value: T) : T {
   return value;
};

const productT = getValue<string>("Piñata Rilakkuma");
const priceT = getValue<number>(450);
const availableT = getValue<boolean>(true);


console.log(`Producto: ${productT}`);
console.log(`Precio: ${priceT}`);
console.log(`Disponible: ${availableT}`);



//============ GENERICS WITH ARRAYS===========0
function getLast<T>(items:[T, ...T[]]): T {
 return items[items.length - 1]!;
}

const last = getLast<string>(["My meloddy", "Rilakkuma", "Hello Kitty", "Capibara", "Pikachu"]);
console.log(`El último elemento del array es ${last}`);


console.log("ROSARIO FUENTES GARCIA")


//=========== PARTIAL =========

interface Stick {
   name: string;
   stock: number;
   available: boolean;
   price: number;
   colors: string[];
}

const updatedPinata: Partial< Stick> = {
   name: "Stick Piñata 45 cm",
   stock: 40,
   price: 45,
   colors: ["blue", "red", "purple"],

};

console.log(`El ${updatedPinata.name} tiene disponibiliad de ${updatedPinata.stock}, con precio de ${updatedPinata.price} cada, con colores de ${updatedPinata.colors}`);
