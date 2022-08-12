class User {
    constructor(name, surname, books, pets) {
        this.name = name
        this.surname = surname
        this.books = books
        this.pets = pets
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }

    addMacostas(pet) {
        this.pets.push(pet)
    }

    countMascotas() {
        return this.pets.length
    }

    addBook(nombre, autor) {
        this.books.push({ nombre: nombre, autor: autor })
    }

    getBookNames() {
        let bookNames = []
        this.books.forEach(name => {
            bookNames.push({ nombre: name.nombre })
        });
        return bookNames
    }
}

const miguel = new User('Miguel', 'Gutierrez', [{ nombre: 'libro1', autor: 'miguel' }], ['perro', 'gato', 'pez'])

const addMacostas = (pet) => { miguel.addMacostas(pet) }
const addBooks = (nombre, autor) => miguel.addBook(nombre, autor)
addMacostas('dragón')
addBooks('libro2', 'Juan')

const mascotasLength = miguel.countMascotas()
const miguelFullName = miguel.getFullName()
const miguelBooks = miguel.getBookNames()


console.table({ mascotasLength, miguelFullName, miguelBooks });