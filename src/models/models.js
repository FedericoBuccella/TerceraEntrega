import mongoose from 'mongoose';

export default mongoose.model('Usuario',{
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    address: String,
    edad: Number,
    phone: Number,
    avatar: String
});