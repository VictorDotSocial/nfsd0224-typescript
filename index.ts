// TYPESCRIPT

// TIPOS DE DATOS

// nombreVariable: tipoDeDato = valor
// nombreVariable = valor

// Number
let phone: number;
phone = 612612612;

let phoneNumber1: number = 4898234892893;
let phoneNumber2 = 49852398493;

// Valores hexadecimales
let hexadecimal: number = 0xf00d;

// Boolean
let hasPool: boolean = true;
let hasGym = false;

// String
let personName: string = "Horse Pedro";
let personName2 = "Horse Pedro";

let personName3: string = `Hola qué tal ${personName}`;

// Any
let userId: any;
userId = 1; // Number
userId = "1"; // String

let userData;
userData = 2121;
userData = "38qr398jfiw";

let introText = "Hola Mengano";
const theName = introText.substring(5);
console.log("El nombre al que has saludado es ", theName);

// TIPADO DE FUNCIONES

function showInfo1(user: any): string {
  console.log("User info", user.id, user.username);
  return "Hola";
}

function showInfo2(user: any): void {
  console.log("User info", user.id, user.username);
}

function handleError(code: number, message: string): never {
  throw new Error(`Error message: ${message} with code ${code}`);
}

let nullVar: null;
nullVar = null;

let undefinedVar: undefined = undefined;

// Objetos
let user = {
  id: 1,
  username: "Pepito",
  isAdmin: true,
};

// Arrays
let users: string[];
users = ["Pepito", "Ana", "Juanito"];

let users2 = ["Pepito", "Ana", "Juanito"];

// Tuplas
let listItem: [string, number];
listItem = ["Pepito", 25];

// Array de tuplas
let myUserList: [string, number][];
myUserList = [
  ["Pepito", 25],
  ["Ana", 20],
  ["Juanito", 30],
];

// Enum
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log("Valor de landscape", landscape);

enum Country {
  Espana = "esp",
  Alemania = "ale",
  Francia = "fra",
  Italia = "ita",
}

const country: Country = Country.Espana;

console.log("COUNTRY", country);

// UNIÓN DE TIPOS

let userId4: number | string;
userId4 = 10;
userId4 = "Hola";

let userId5: number | string;
userId5 = 10;
userId5 = "Hola";

// Alias de Tipos

type UserId = number | string;

let userId6: UserId;
userId6 = 10;
userId6 = "Hola";

type SquareSize = "100x100" | "500x500" | "1000x1000";

let smallPicture: SquareSize = "500x500";

// Extra funciones

function createPicture(title: string, date?: string, size?: SquareSize): void {
  console.log("Creando imagen con", title, size, date);
}

// INTERFACES

// interface Picture {
//   title: string;
//   date: string;
//   size?: SquareSize;
// }

function showPicture(picture: Picture): void {
  console.log("Título", picture.title);
}

const myPicture: Picture = {
  title: "Prueba",
  date: "2024-07-01",
  // size: '100x100'
};

showPicture(myPicture);

interface User {
  readonly id: number;
  username: string;
  isPremium: boolean;
}

let testUser: User;

testUser = {
  id: 10,
  username: "38rfiew",
  isPremium: true,
};

console.log("PRE", testUser);

testUser.username = "Nuevo";
testUser.id = 50;

console.log("POST", testUser);

interface Media {
  id: number;
  title: string;
}

interface Album extends Media {
  // Copia media
  description: string;
}

interface Picture extends Media {
  // Copia Media
  date: string;
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: "Playa",
  description: "sdjbjshbfsubjcsbdhk",
};

// CLASES

class Picture {
  // Propiedades
  private _id: number; // Hacemos privada la propiedad mediante TypeScript
  #title: string; // Hacemos privada la propiedad mediante JS normal
  orientation: PhotoOrientation;

  // Constructor
  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this.#title = title;
    this.orientation = orientation;
  }

  // Getters y Setters
  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    if (newId < 1) {
      return;
    }
    this._id = newId;
  }

  // Métodos
  toString() {
    return `${this.id}, ${this.title}, ${this.orientation}`;
  }
}

const myPicture2 = new Picture(12, "ifenwsdifndsk", 1);
myPicture2.id = 30042;

myPicture2.#title = "4893843874383"; // Esto funciona de forma nativa en JavaScript. No es TypeScript
