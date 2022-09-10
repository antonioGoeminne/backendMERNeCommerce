const express = require('express')
const fs = require('fs')
const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('servidor HTTP');
})

server.on('error', (err) => {
    console.log(err.message);
})

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
            app.get('/productoRandom', (req, res) => {
                res.json(isInProducts)
            })
        } else {
            return null
        }
    }

    getAll() {
        const file = fs.readFileSync(this.file, 'utf-8')
        const newFile = JSON.parse(file)

        app.get('/productos', (req, res) => {
            res.json(newFile)
        })
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

container.getAll()
container.getById(1)
