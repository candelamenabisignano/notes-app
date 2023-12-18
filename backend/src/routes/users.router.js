import { Router } from "express";
import { getAll, getOne,register,login,authToken,current } from "../controllers/users.controller.js";

const router= Router();

router.get('/', getAll);
router.get('/:email', getOne);
router.get('/profile/current', authToken, current);
router.post('/register', register);
router.post('/login', login);

export default router;