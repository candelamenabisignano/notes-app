import notesModel from "../models/notes.model.js";

export default class NotesManager{
    constructor(){};

    getAll=async()=>{
        const notes= await notesModel.find({}).lean();
        return notes;
    };

    getOne=async(id)=>{
        const note= await notesModel.findById(id);
        return note;
    };
     
    create=async(note)=>{
        const newNote= await notesModel.create(note);
        return newNote;
    };

    uptade=async(id, note)=>{
        const newNote= await notesModel.findByIdAndUpdate(id, note);
        return newNote;
    };

    delete=async(id)=>{
        const note=await notesModel.findByIdAndDelete(id);
        return note;
    };
};