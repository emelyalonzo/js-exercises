//Iteración #1
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
function sortByCategory(array) {
    let result = {};
    for (const iterator of array) {
        for (let i = 0; i < iterator.categories.length; i++) {
            if (iterator.categories[i] in result) {
                result[iterator.categories[i]].push(iterator.title);
            } else {
                result[iterator.categories[i]] = [];
                result[iterator.categories[i]].push(iterator.title);
            }
        }
    }
    return console.log(result);
}
sortByCategory(movies);

//Iteración #2
