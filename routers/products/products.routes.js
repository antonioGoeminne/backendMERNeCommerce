const express = require('express')
const fs = require('fs')
const products = require('../../products.json')
const router = express.Router()

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:id', (req, res) => {
    let allProducts = [...products]
    const id = Number(req.params.id)
    res.json(allProducts.find((x) => x.id === id))
})

router.post('/', (req, res) => {
    // let productReceived = { ...req.body.product }
    // let allProducts = [...products]
    // const lastID = Number(allProducts.pop().id)
    // if (Object.values(productReceived).length) {
    //     const productWithID = { ...productReceived, id: lastID + 1 }
    //     allProducts.push(productWithID)
    //     fs.writeFileSync('./products.json', allProducts)
    //     res.json(productWithID)
    // }
console.log(req.body)
})

router.put('/', (req, res) => {
    let idProduct = { ...req.params.id }

    res.json({
        status: 'updated',
        id: idProduct,
        data:req.body
    })
})

module.exports = router

// class Contenedor {
//     constructor(file) {
//         this.file = file
//     }
//     save(obj) {

//         const file = fs.readFileSync(this.file, 'utf-8')
//         const newFile = JSON.parse(file)

//         const writeFile = async (file, obj) => {
//             try {
//                 file.push(obj)
//                 await fs.writeFileSync(this.file, JSON.stringify(file))
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         const idToAssign = newFile.length ? newFile[newFile.length - 1]?.id + 1 : 1
//         const newObj = { id: idToAssign, ...obj }

//         writeFile(newFile, newObj)
//     }

//     getById(id) {
//         const file = fs.readFileSync(this.file, 'utf-8')
//         const newFile = JSON.parse(file)

//         const isInProducts = newFile.find(x => x.id === id)
//         if (isInProducts) {
//             app.get('/productoRandom', (req, res) => {
//                 res.json(isInProducts)
//             })
//         } else {
//             return null
//         }
//     }

//     getAll() {
//         const file = fs.readFileSync(this.file, 'utf-8')
//         const newFile = JSON.parse(file)

//         app.get('/productos', (req, res) => {
//             res.json(newFile)
//         })
//     }

//     deleteById(id) {
//         const file = fs.readFileSync(this.file, 'utf-8')
//         const newFile = JSON.parse(file)

//         const deleteFile = (id, file) => {
//             const fileWithProductRemoved = file.filter((x) => x.id !== id)
//             fs.writeFileSync(this.file, JSON.stringify(fileWithProductRemoved))
//         }
//         deleteFile(id, newFile)
//     }
//     deleteAll() {
//         const file = fs.readFileSync(this.file, 'utf-8')
//         const newFile = JSON.parse(file)

//         const deleteFiles = (file) => {
//             const filesRemoved = file.filter((x) => !x)
//             fs.writeFileSync(this.file, JSON.stringify(filesRemoved))
//         }
//         deleteFiles(newFile)
//     }
// }


// const container = new Contenedor('./products.json')
