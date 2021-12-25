//Iteración #1
const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
function sortByCategory(array) {
  let result = {};
  for (const iterator of array) {
    for (key in iterator.categories) {
      if (iterator.categories[key] in result) {
        result[iterator.categories[key]].push(iterator.title);
      } else {
        result[iterator.categories[key]] = [];
        result[iterator.categories[key]].push(iterator.title);
      }
    }
  }
  return console.log(result);
}
sortByCategory(movies);

//Iteración #2
//Make the average of volume in every favorite sounds of users.
const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
function averageSounds(array) {
    let result = {total:0 , count:0};
    for (const iterator of array) {
        for (const key in iterator.favoritesSounds) {
            result.total += iterator.favoritesSounds[key].volume;
            result.count ++;
        }
    }
    return console.log("The average volume of the users is: " + result.total / result.count);
}
averageSounds(users);