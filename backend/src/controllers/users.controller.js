import * as usersService from '../services/users.service.js';
import { createHash, generateToken, isValid, PRIVATE_KEY } from '../utils.js';
import jwt from 'jsonwebtoken';

const getAll=async(req,res)=>{
    try {
      const users= await usersService.getAllService();
      return res.send({status:'success', payload:users});  
    } catch (error) {
        res.status(500).send({status:'error', error:error.message});
    };
};

const getOne=async(req,res)=>{
    try {
        const {email}= req.params;
        const user= await usersService.getOneService(email);
        return res.send({status:'success', payload:user});
    } catch (error) {
        res.status(500).send({status:'error', error:error.message})
    };
};

const register=async(req,res)=>{
    try {
        const {first_name,last_name,email,username,age,password,notes,phone}= req.body;
        const exists= await usersService.getOneService(email);

        if(exists){
            return res.status(401).send({status:'error', error:'an user has been already registered with this email'});
        };
        const newPassword= createHash(password);
        const user={
            first_name,
            last_name,
            username,
            email,
            age,
            notes,
            phone,
            password:newPassword
        };

        const newUser= await usersService.registerService(user);
        return res.status(201).send({status:'success', payload:newUser});
    } catch (error) {
        res.status(500).send({status:'error', error:error.message})
    };
};

const login=async(req,res)=>{
    try {
        const {email, password}=req.body;
        const exists= await usersService.getOneService(email);
        if(!exists){
            return res.status(401).send({status:'error', error:'invalid credentials hola'});
        };
        if(isValid(password, exists.password) === false){
            return res.status(401).send({status:'error', error:'invalid credentials chau'});
        };
        req.user=exists;
        const {password:_, ...userToken}=exists._doc;
        const token= generateToken(userToken);
        res.s
        return res.header('Authorization',`Bearer ${token}`).send({status:'success', message:'login succeed'})
    } catch (error) {
        res.status(500).send({status:'error', error:error.message})
    }
};
const current=async(req,res)=>{
    try {
        if(req.user=== null|| req.user=== undefined){
            return res.status(401).send({status:"error", error:'invalid credentials'})
        };
        res.send({status:'success', payload:{user:req.user, token: req.headers['authorization']}})
    } catch (error) {
        res.status(500).send({status:'error', error:error.message})
    }
}
const authToken=(req,res,next)=>{
    let token= req.headers['authorization'];
    if(!token){
        return res.status(401).send({status:"error", error:'token not found'})
    }else{
        const bearer = token.split(' ');
        token = bearer[1];
    };

    jwt.verify(token,PRIVATE_KEY,(err,credentials)=>{
        if(err) return res.status(404).send({status:'error', error:'token not found'});
        req.user=credentials.user;
        req.headers['authorization']=token;
        next()
    });
};

export {getAll,getOne,login,register, authToken, current}