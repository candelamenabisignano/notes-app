import express from 'express';
import config from './config.js';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import notesRouter from './routes/notes.router.js';
import cors from 'cors';
import mongoose from 'mongoose';



const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(cookieParser());


try {
    await mongoose.connect(config.mongoUrl);
    console.log('DB connected');
} catch (error) {
    console.log(error.message);
};

app.use('/api/users', usersRouter);
app.use('/api/notes', notesRouter);

app.listen(config.port, console.log('server running'));