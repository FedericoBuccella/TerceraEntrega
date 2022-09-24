import ContenedorMongo from "../../contenedores/contenedorMongo.js";
import mongoose from "mongoose";

export default class UsuarioDaoMongo extends ContenedorMongo {
  constructor() {
    super("usuarios", new mongoose.Schema({
      username: { type: String, require: true, max: 200, unique:true},
      password: { type: String, require: true, max: 200 },
      email: {type: String, require: true}, 
      nombre:{ type: String, require: true},
      apellido: { type: String, require: true},
      direccion:{ type: String, require: true},
      edad:{ type: String, require: true},
      telefono:{ type: String, require: true },
      avatar:{ type: String, require: true}
    })
    )
  }

  async newUser(username, password, nombre, apellido, direccion, edad, telefono, avatar){
    const doc = new this.collection({username, password, nombre, apellido, direccion, edad, telefono, avatar})
    await doc.save()   
    console.log(this.collection)       
  }

  async update(id, username, password, nombre, apellido, direccion, edad, telefono, avatar){
    await this.collection.updateOne({_id:id}, {username, password, nombre, apellido, direccion, edad, telefono, avatar})
    console.log(this.collection)        
  }

  async getByUsername(username){
    const doc = await this.collection.findOne({ username: username});
    return doc;
  }

}
