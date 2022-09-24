import {ProductoDao} from '../daos/index.js' 

export const getProductos = async (req, res) => {
    const verProductos = await ProductoDao.getAll()
    res.render('catalogo', {verProductos})
}

export const postProductos = async (req, res) => {
    const {title, description, code, price, thumbnail, stock} = req.body 
    const elemento = await ProductoDao.newProduct(title, description, code, price, thumbnail, stock)
    console.log("AAAAAAAAAA", elemento)
    res.json(elemento)
}

export const getProductoId = async (req, res) => {
    const id = req.params.id
    console.log('id', id)
    const elemento = await ProductoDao.getById(id)
    console.log('elemento', elemento)
    if(!elemento){return res.status(404).json({error: "Producto no encontrado"})}
    res.json(elemento)
}

export const putProduct = async (req, res) => {
    const {title, description, code, price, thumbnail, stock} = req.body
    const id = req.params.id
    const elemento = await ProductoDao.getById(id)
    if(!elemento){return res.status(404).json({error: "Producto no encontrado"})}
    const elementChanged = await ProductoDao.update(id,title, description, code, price, thumbnail, stock)
    res.json(elementChanged)
    
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id
    if(!id){return res.json({ error: "El parámetro no es un número o el id no existe" })}
    await ProductoDao.deleteById(id)
    res.json(await ProductoDao.getAll())
}

export const loadProduct = async (req, res) => {
    const body = req.body
    res.render("loadProduct", {body} )
}