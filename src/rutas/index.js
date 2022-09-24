import { Router }from 'express';
import { getProductos, postProductos, getProductoId, putProduct,deleteProduct, loadProduct} from '../controllers/productoController.js';
import { postCarrito, deleteCarrito, listarCarritos, verCarrito, postProdInCart} from '../controllers/carritoController.js';
import { getLogin, getSignup, postRegister, postLogin, getFailsignup, getFaillogin, getLogout, checkAuth, rutaProtegida, info, getHome, getUserInfo } from '../controllers/usersController.js'
const router = Router();
import upload from '../multer/loadFile.js'
import passport from 'passport'

//Rutas Productos
router.get('/productos', getProductos)
router.get('/productos/:id', getProductoId)
router.post('/productos', postProductos)
router.put('/productos/:id', putProduct)
router.delete('/productos/:id', deleteProduct)
router.post('/load', loadProduct)

//Rutas Carrito
router.post('/carrito', postCarrito) 
router.delete('/carrito/:id', deleteCarrito)
router.get('/carrito', listarCarritos)
router.get('/carrito/:id/productos', verCarrito)
router.post('/carrito/:id_cart/productos/:id_prod', postProdInCart)

//Rutas de Login y Registro
router.get("/home", getHome)
router.get("/login", getLogin)
router.post("/login", passport.authenticate("login", {failureRedirect: "/faillogin"}), postLogin)
router.get("/register", getSignup)
router.post("/register", upload.single('images'), passport.authenticate("register", { failureRedirect: "/failsignup"}), postRegister)
router.get('/faillogin', getFaillogin)
router.get("/failsignup", getFailsignup)
router.get('/logout', getLogout)
router.get('/infoUser', getUserInfo)

//Rutas de funciones
router.get('/ruta-protegida', checkAuth, rutaProtegida)
router.get('/info', info)

export default router