import * as notesService from '../services/notes.service.js';
import { uptadeOneService } from '../services/users.service.js';
const getAllNotes=async(req,res)=>{
    try {
        const notes= await notesService.getAllService();
        return res.send({status:"success",payload:notes});
    } catch (error) {
        return res.status(500).send({status:"error", error:error.message});
    };
};

const getOneNote=async(req,res)=>{
    const {id}= req.params
    try {
       const note= await notesService.getOneService(id);
       if(!note) return res.status(404).send({status:'error', error:'resource not found'});
       return res.send({status:'success', payload:note}); 
    } catch (error) {
        return res.status(500).send({status:"error", error:error.message});
    };
};

const createNote=async(req,res)=>{
    try {
        const {title,content}=req.body;
        const user= req.user
        if(!title || ! content){
            return res.status(400).send({status:'error', error:'the title or content is missing'});
        };

        const newNote={
            title,
            content,
            created_at: new Date().toLocaleDateString(),
            user:user?._id
        };
        const note= await notesService.createService(newNote, user);
        await uptadeOneService(user.email, {...user, notes:[...user.notes, note._id]})
        return res.status(201).send({status:'success', payload:note});
    } catch (error) {
        return res.status(500).send({status:"error", error:error.message});
    };
};

const uptadeNote= async(req,res)=>{
    const {id}= req.params
    try {
        const {title,content}= req.body;
        const newNote={
            title,
            content
        };
        const note= await notesService.uptadeService(id,newNote);
        return res.send({status:'success', payload:note})
    } catch (error) {
        return res.status(500).send({status:"error", error:error.message});
    };
};

const deleteNote=async(req,res)=>{
    const {id}=req.params
    try {
        const notes= await notesService.deleteService(id);
        return res.status(204).send({status:'success'});
    } catch (error) {
        return res.status(500).send({status:"error", error:error.message});
    };
};

export{
    getAllNotes,
    getOneNote,
    createNote,
    uptadeNote,
    deleteNote
};