import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from './config/connectDB.js';
import UserRoute from './routes/UserRoute.js';
import FacRoute from './routes/FacRoute.js';
import CourseRoute from './routes/CourseRoute.js';
import SubjectRoute from './routes/SubjectRoute.js';

// env config
dotenv.config();

// mongodb connection
connectDB();

//rest object
const app = express();

// middelwares
app.use (cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.get('/',(req, res) =>{
    res.status(200).send({
        "message": "Node Server"
    })
});
app.use('/api/v1/user', UserRoute);
app.use('/api/v1/fac', FacRoute);
app.use('/api/v1/course', CourseRoute);
app.use('/api/v1/subject', SubjectRoute);

// Port
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white);
});