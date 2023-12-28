import { Router } from "express";
import { getAllNotes, getOneNote, createNote, uptadeNote, deleteNote } from "../controllers/notes.controller.js";
import { authToken } from "../controllers/users.controller.js";

const router= Router();

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.post('/',authToken, createNote);
router.put('/:id', uptadeNote);
router.delete('/:id', deleteNote);

export default router