import * as notesService from '../services/notes.service.js';
import { uptadeOneService } from '../services/users.service.js';
import { generateToken } from '../utils.js';
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
        const user= req.user;
        const token= req.headers['authorization'];
        if(!title || ! content){
            return res.status(400).send({status:'error', error:'the title or content is missing'});
        };

        const newNote={
            title:title,
            content:content,
            created_at: new Date().toLocaleDateString(),
            user:user?._id
        };

        const note= await notesService.createService(newNote, user);
        return res.cookie('userCookie', token, {maxAge:10000*10000*10000, httpOnly:true}).send({status:'success', payload:note});
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