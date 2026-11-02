"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePrice(sale) {
    const [productName, unitPrice, amount, paid] = sale;
    let total = unitPrice * amount;
    console.log(`Producto: ${productName} \nPrecio unitario:$ ${unitPrice} \nCantidad: ${amount}\nTotal: ${total}\nEstado: ${paid ? "Pagado" : "Aún no ha pagado"}`);
}
calculatePrice(["Piñata Hello Kitty", 450, 2, true]);
let product;
product = ["Piñata Kuromi", 450, true];
console.log(product);
product[1] = 500;
console.log(product[1], "Esto se supone que es el valor reasignado porque sí es posible modificar un valor ");
// ============= AQUÍ INICIANDO LOS GENERICS <T> CON FUNCTIONS ==============
function getValue(value) {
    return value;
}
;
const productT = getValue("Piñata Rilakkuma");
const priceT = getValue(450);
const availableT = getValue(true);
console.log(`Producto: ${productT}`);
console.log(`Precio: ${priceT}`);
console.log(`Disponible: ${availableT}`);
//============ GENERICS WITH ARRAYS===========0
function getLast(items) {
    return items[items.length - 1];
}
const last = getLast(["My meloddy", "Rilakkuma", "Hello Kitty", "Capibara", "Pikachu"]);
console.log(`El último elemento del array es ${last}`);
console.log("ROSARIO FUENTES GARCIA");
const updatedPinata = {
    name: "Stick Piñata 45 cm",
    stock: 40,
    price: 45,
    colors: ["blue", "red", "purple"],
};
console.log(`El ${updatedPinata.name} tiene disponibiliad de ${updatedPinata.stock}, con precio de ${updatedPinata.price} cada, con colores de ${updatedPinata.colors}`);
// ahora pinata inventory tiene unicamente name, stock y available.
const inventoryItem = { name: "Piñata Pastel", stock: 5, available: true };
console.log(`Datos de inventory item ${inventoryItem.name}, ${inventoryItem.stock}, ${inventoryItem.available}`);
const productoVenta = {
    name: "Piñata pastel boda",
    available: true,
    price: 950,
};
console.log(productoVenta);
const prices = {
    small: 180,
    medium: 360,
    large: 560,
};
console.log(`Configured prices for sizes are small ${prices.small}, medium: ${prices.medium}, large: ${prices.large}`);
const inventario = {
    cakePinata: 14,
    numbers: 20,
};
console.log(`Inventario de cake piñaatas: ${inventario.cakePinata} y de numeros ${inventario.numbers} y de Christmas lights de ${inventario.christmasLight}`);
//# sourceMappingURL=index.js.map