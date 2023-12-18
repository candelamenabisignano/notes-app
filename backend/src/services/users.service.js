import UsersManager from "../dao/managers/users.manager.js";

const manager= new UsersManager();

const getAllService=async()=>{
    const users= await manager.getAll();
    return users;
};

const getOneService=async(email)=>{
    const user= await manager.getOne(email);
    return user
};

const registerService=async(user)=>{
    const newUser= await manager.create(user);
    return newUser;
};

const uptadeOneService=async(email,user)=>{
    const newUser= await manager.uptade(email,user);
    return newUser;
};

export{registerService,getOneService,getAllService, uptadeOneService};