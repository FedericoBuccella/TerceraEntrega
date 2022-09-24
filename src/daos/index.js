let ProductoDao;
let CarritoDao;
let UsuarioDao;

    const { default: ProductoDaoMongo } = await import("./productos/productoDaoMongo.js");
    const { default: CarritoDaoMongo } = await import("./carritos/carritoDaoMongo.js");
    const { default: UsuarioDaoMongo } = await import ("./usuarios/usuarioDaoMongo.js")

    ProductoDao = new ProductoDaoMongo;
    CarritoDao = new CarritoDaoMongo;
    UsuarioDao = new UsuarioDaoMongo

export { ProductoDao, CarritoDao, UsuarioDao}