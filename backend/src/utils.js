import {fileURLToPath} from 'url'; // obtiene la ruta de la consola
import { dirname } from 'path'; // traduce la ruta obtenida
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import configs from './config.js';

const __filename= fileURLToPath(import.meta.url);
const __dirname= dirname(__filename);
const PRIVATE_KEY= configs.privateKey;


const generateToken=(user)=>{ //lo que vamos a meter a ese JWT
    const token= jwt.sign({user}, PRIVATE_KEY, {expiresIn:'18h'});
    return token;
};

const createHash=(password)=>bcrypt.hashSync(password, bcrypt.genSaltSync(10))

const isValid=(plainPassword, hashedPassword)=>{
    bcrypt.compareSync(hashedPassword, plainPassword)
};


export{
    __dirname,
    createHash,
    isValid,
    generateToken,
    PRIVATE_KEY
}