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

    countMascotas() {
        return this.pets.length
    }

    addBook(nombre, autor) {
        this.books.push({ nombre: nombre, autor: autor })
    }

    getBookNames() {
        let bookNames = []
        this.books.forEach(name => {
            bookNames.push({nombre:name.nombre})
        });
        return bookNames
    }
}

const miguel = new User('Miguel', 'Gutierrez', [{ nombre: 'libro1', autor: 'miguel' }], ['perro', 'gato', 'pez'])

const mascotasLength = miguel.countMascotas()
const miguelFullName = miguel.getFullName()

const miguelAddBooks = () => { miguel.addBook('libro2', 'juan') }
miguelAddBooks()
const miguelBooks = miguel.getBookNames()

console.table({ mascotasLength, miguelFullName, miguelBooks });