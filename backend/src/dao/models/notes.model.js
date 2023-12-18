import mongoose from "mongoose";

const notesCollection= 'notes';

const notesSchema= new mongoose.Schema({
    title: String,
    hour: String,
    content:String,
    user:String
});

const notesModel= mongoose.model(notesCollection,notesSchema);

export default notesModel;