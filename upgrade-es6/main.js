// Iteración #1

// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.
const sumaDosNumeros = (num1, num2) =>  {
    console.log(num1 + num2)
}
// 1.1 Ejecuta esta función sin pasar ningún parametro
sumaDosNumeros; //No muestra nada por consola
// 1.2 Ejecuta esta función pasando un solo parametro
sumaDosNumeros(1); //Muestra NaN por consola
// 1.3 Ejecuta esta función pasando dos parametros
sumaDosNumeros(1,2) //Muestra 3 por consola

// Iteración #2

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year)

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];
console.log(`fruta1:${fruits[0]}, fruta2:${fruits[1]}, fruta3:${fruits[2]}`)
// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let animal = animalFunction();
// let {name, race} = animal;
// console.log(`Name:${name}  Race:${race}`)

// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
let {name, itv} = car;
console.log(`Name: ${name}. ITV:${itv}`)
console.log(itv[0], itv[1], itv[2]);

//Iteración #3
// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
let pointsListCopy = [...pointsList];
console.log(pointsListCopy)
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toy2 = {...toy1};
console.log(toy2)
// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
let pointsList3 = [...pointsList1, ...pointsList2];
console.log(pointsList3)

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyMix = {...toy, ...toyUpdate};
console.log(toyMix)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let colorsWithoutYellow = [...colors];
colorsWithoutYellow.splice(2,1);
console.log(colorsWithoutYellow)

// Iteración #4: Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let nombres = users1.map(user => user.name)
console.log(nombres)
// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let usersNames = users2.map(
    user => {
        if (user.name.startsWith('A')) {
            return 'Anacleto';
        }
        return user.name
});
console.log(usersNames);
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
let cities2 = cities.map(city => {
    if (city.isVisited) {
        return `${city.name} (Visitado)`
    } else {
        return city.name
    }
});
console.log(cities2)


// Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let ages1Older = ages1.filter(age => {
    if (age>18) {
        return age
    }
});
console.log(ages1Older);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let ages2Odd = ages2.filter(age => {
    if (age%2 == 0) {
        return age
    }
});
console.log(ages2Odd);
// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let streamers1LOL = streamers1.filter(streamer => {
    if(streamer.gameMorePlayed =='League of Legends'){
        return streamer
    }
});
console.log(streamers1LOL)
// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let streamers2U = streamers2.filter(streamer => {
    if(streamer.name.includes('u')){
        return streamer
    }
});
console.log(streamers2U)
// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.
let streamers1Legends = streamers1.filter(streamer => {
    if((streamer.gameMorePlayed.includes('Legends'))&& (streamer.age > 35)){
        streamer.gameMorePlayed.toUpperCase
        return streamer
    } else if (streamer.age > 35) {
        streamer.gameMorePlayed.toUpperCase
        return streamer
    }
});
console.log(streamers1Legends);

// Iteración 6

// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
let numberOneHundred = numbers.filter((number => number===100));
console.log(numberOneHundred)

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
let movieOf2010 = movies.filter(movie => {
    if (movie.date === 2010) {
        return movie
    }
});
console.log(movieOf2010)

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
let cucu = aliens.find((alien) => {
    return alien.name == "Cucushumushu";
});
let poro = mutations.find((mutation) => {
    return mutation.name == "Porompompero";
});
const alien = { ...cucu, mutación: { ...poro } };
console.log(alien)
// Iteración #7: Reduce

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const totalScore = exams.reduce(
    (accumulator, exam) => accumulator + exam.score,
    0
  );
  
console.log(totalScore);
// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().
totalAprovados = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
      return accumulator + exam.score;
    } else {
      return accumulator;
    }
  }, 0);
  
console.log(totalAprovados);
// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
  
const media = totalScore / exams.length;
  
console.log(media);

// Iteración #8: Bonus
// 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
// .filter() y usa .reduce() para conseguir la media de sus .score. 
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];
const rpgGames = videogames.filter(
    (videogame) => !!videogame.genders.find((gender) => gender === "RPG")
);
const totalScoreRpgGames = rpgGames.reduce(
    (accumulator, videogame) => accumulator + videogame.score,
    0
);
const averageScoreRPGGames = totalScoreRpgGames / rpgGames.length;
  
console.log(averageScoreRPGGames);