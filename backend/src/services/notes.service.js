import NotesManager from "../dao/managers/notes.manager.js";

const manager= new NotesManager();

const getAllService=async()=>{
    const notes= await manager.getAll();
    return notes;
};

const getOneService=async(id)=>{
    const note= await manager.getOne(id);
    return note;
};

const createService=async(note)=>{
    const newNote= await manager.create(note);
    return newNote;
};

const uptadeService=async(id,note)=>{
    const newNote= await manager.uptade(id,note);
    return newNote;
};

const deleteService=async(id)=>{
    const notes= await manager.delete(id);
    return notes;
};

export{
    getAllService,
    getOneService,
    createService,
    uptadeService,
    deleteService
}