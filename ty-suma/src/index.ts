function calculatePrice(sale: [string, number, number, boolean]) {
  const [productName, unitPrice, amount, paid] = sale;
  let total = unitPrice * amount;
  console.log(
    `Producto: ${productName} \nPrecio unitario:$ ${unitPrice} \nCantidad: ${amount}\nTotal: ${total}\nEstado: ${paid ? "Pagado" : "Aún no ha pagado"}`,
  );
}

calculatePrice(["Piñata Hello Kitty", 450, 2, true]);

let product: [string, number, boolean];

product = ["Piñata Kuromi", 450, true];
console.log(product);
product[1] = 500;

console.log(
  product[1],
  "Esto se supone que es el valor reasignado porque sí es posible modificar un valor ",
);

// ============= AQUÍ INICIANDO LOS GENERICS <T> CON FUNCTIONS ==============

function getValue<T>(value: T): T {
  return value;
}

const productT = getValue<string>("Piñata Rilakkuma");
const priceT = getValue<number>(450);
const availableT = getValue<boolean>(true);

console.log(`Producto: ${productT}`);
console.log(`Precio: ${priceT}`);
console.log(`Disponible: ${availableT}`);

//============ GENERICS WITH ARRAYS===========0
function getLast<T>(items: [T, ...T[]]): T {
  return items[items.length - 1]!;
}

const last = getLast<string>([
  "My meloddy",
  "Rilakkuma",
  "Hello Kitty",
  "Capibara",
  "Pikachu",
]);
console.log(`El último elemento del array es ${last}`);

console.log("ROSARIO FUENTES GARCIA");

//=========== PARTIAL =========

interface Stick {
  name: string;
  stock: number;
  available: boolean;
  price: number;
  colors: string[];
}

const updatedPinata: Partial<Stick> = {
  name: "Stick Piñata 45 cm",
  stock: 40,
  price: 45,
  colors: ["blue", "red", "purple"],
};

console.log(
  `El ${updatedPinata.name} tiene disponibiliad de ${updatedPinata.stock}, con precio de ${updatedPinata.price} cada, con colores de ${updatedPinata.colors}`,
);

interface ProductoPinata {
  name: string;
  price: number;
  stock: number;
  available: boolean;
  size: number;
}

type PinataInventory = Pick<ProductoPinata, "name" | "stock" | "available">;
// ahora pinata inventory tiene unicamente name, stock y available.
const inventoryItem: PinataInventory = {
  name: "Piñata Pastel",
  stock: 5,
  available: true,
};

console.log(
  `Datos de inventory item ${inventoryItem.name}, ${inventoryItem.stock}, ${inventoryItem.available}`,
);

type PinataVenta = Omit<ProductoPinata, "stock" | "size">;

const productoVenta: PinataVenta = {
  name: "Piñata pastel boda",
  available: true,
  price: 950,
};
console.log(productoVenta);

// ====== TIPO RECORD =======

type Sizes = "small" | "medium" | "large";

type sizePrice = Record<Sizes, number>;

const prices: sizePrice = {
  small: 180,
  medium: 360,
  large: 560,
};

console.log(
  `Configured prices for sizes are small ${prices.small}, medium: ${prices.medium}, large: ${prices.large}`,
);
//===== Objeto que almacene el stock disponible de las categorías

type Category = "cakePinata" | "numbers" | "christmasLight";

type InventarioCategorias = Record<Category, number>;

const inventario: InventarioCategorias = {
  cakePinata: 14,
  numbers: 20,
  christmasLight: 12,
};

console.log(
  `Inventario de cake piñaatas: ${inventario.cakePinata} y de numeros ${inventario.numbers} y de Christmas lights de ${inventario.christmasLight}`,
);

//== Tema práctico con Required <T,K>;
interface PinataPokemon {
  name: string;
  price?: number;
  stock?: boolean;
  available: boolean;
  size: number;
}

type PinataCompleta = Required<PinataPokemon>;
const producto: PinataCompleta = {
  name: "Piñata Pikachu",
  price: 240,
  stock: true,
  available: true,
  size: 54,
};

console.log(
  ` Mi producto de piñata required es ${producto.name}, el precio es de ${producto.price}, ${producto.stock ? "sí" : "no"} hay stock ${producto.available ? "disponible" : "no disponible"}, y mide ${producto.size} cm de alto`,
);

// UTILITY TYPES QUE TABAJAN CON UNIONS

type PinataSize = "small" | "medium" | "large" | "extra-large";

type AvailableSizeKitty = Exclude<
  PinataSize,
  "medium" | "large" | "extra-large"
>;

let sizeA: AvailableSizeKitty;

sizeA = "small";

console.log(`El tamaño permitido para las piñatas de Hello Kitty es ${sizeA}`);

type Sections =
  | "piñatas"
  | "numbers"
  | "garlands"
  | "christmas lights"
  | "candies";

type Home = Extract<Sections, "garlands" | "christmas lights">;

const cat: Home = "christmas lights";

console.log(`Esto es una categoría de Home y es ${cat}`);

//NonNullable<T>

type ProductDescription = string | undefined | null;

type ValidDescription = NonNullable<ProductDescription>;

const pinataDescription: ValidDescription =
  "This beautiful piñata its all you want for christmas";

console.log(`Piñata description ${pinataDescription}`);

/// ReturnType<T> permite obtener automàticamente el tipo de dato que devuelve una función
//hago una simple función que devuelve un objeto, porque Ts puede inferir que esta función devuelve un objeto con tres propiedades

function getProductInformation() {
  return {
    id: 101,
    name: "Piñata birthday cake",
    price: 450,
    available: true,
    category: "cakes",
    size: 56,
  };
}

type ObjectTypeCake = ReturnType<typeof getProductInformation>;

const validCake: ObjectTypeCake = {
  id: 104,
  name: "Wedding pink cake",
  price: 450,
  available: true,
  category: "cakes",
  size: 14,
};
console.log(
  `El producto de cake resultante es ${validCake.id}, ${validCake.name}, mide ${validCake.size} cm`,
);

//Parameters <T> permite obtener el tipo de los parámetros que recibe una función
//creo una función para registrar mi producto de tipo piñata

function createProduct(name: string, price: number, stock: number) {
  return { name, price, stock };
}
// ahora quiero obtener el tipo de sus parámetros de name, price, stock
type ProductPams = Parameters<typeof createProduct>;
// creamos una tupla con esos parametros
const productParams: ProductPams = ["Piñata Kuromi", 450, 4];
console.log(`Mi tupla resultante fue ${productParams}`);
