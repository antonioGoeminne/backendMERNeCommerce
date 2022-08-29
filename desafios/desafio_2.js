const fs = require('fs')

const product1 = { title: 'dogChow', price: 1200, thumbnail: 'img/' }

class Contenedor {
    constructor(file) {
        this.file = file
    }
    save(obj) {

        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        const writeFile = async (file, obj) => {
            try {
                file.push(obj)
                await fs.writeFileSync(this.file, JSON.stringify(file))
            } catch (error) {
                console.log(error);
            }
        }

        const idToAssign = newFile.length ? newFile[newFile.length - 1]?.id + 1 : 1
        const newObj = { id: idToAssign, ...obj }

        writeFile(newFile, newObj)
    }

    getById(id) {
        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        const isInProducts = newFile.find(x => x.id === id)
        if (isInProducts) {
            console.log(isInProducts)
            return isInProducts
        } else {
            return null
        }
    }

    getAll() {
        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        return newFile
    }
    deleteById(id) {
        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        const deleteFile = (id, file) => {
            const fileWithProductRemoved = file.filter((x) => x.id !== id)
            fs.writeFileSync(this.file, JSON.stringify(fileWithProductRemoved))
        }
        deleteFile(id, newFile)
    }
    deleteAll() {
        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        const deleteFiles = (file) => {
            const filesRemoved = file.filter((x) => !x)
            fs.writeFileSync(this.file, JSON.stringify(filesRemoved))
        }
        deleteFiles(newFile)
    }
}

const container = new Contenedor('./products.json')

// container.save(product1)
// container.getById(1)
// container.deleteById(9)
// container.deleteAll()
