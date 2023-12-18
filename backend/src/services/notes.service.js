import NotesManager from "../dao/managers/notes.manager.js";

const manager= new NotesManager();

const getAllService=async()=>{
    const notes= await manager.getAll();
    return notes;
};

const getOneService=async(id)=>{
    const user= await manager.getOne(id);
    return user
};

const registerService=async(user)=>{
    const newUser= await manager.create(user);
    return newUser;
};

const uptadeOneService=async(id,user)=>{
    const newUser= await manager.uptade(id,user);
    return newUser;
};