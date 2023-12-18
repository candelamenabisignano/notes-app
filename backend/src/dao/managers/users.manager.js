import usersModel from "../models/users.model.js";

export default class UsersManager{
    constructor(){};

    getAll=async()=>{
        const users= await usersModel.find({}).lean();
        return users;
    };

    getOne=async(email)=>{
        const user= await usersModel.findOne({email:email});
        return user;
    };
     
    create=async(user)=>{
        const newUser= await usersModel.create(user);
        return newUser;
    };

    uptade=async(email, user)=>{
        const newUser= await usersModel.findOneAndUpdate({email:email}, user);
        return newUser;
    };

    delete=async(email)=>{
        const user=await usersModel.findOneAndDelete({email:email});
        return user;
    };
};