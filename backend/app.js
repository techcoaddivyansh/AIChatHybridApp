import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import aiRoutes from './routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


connect();


const app = express();

app.use(cors());
// Use morgan middleware for logging HTTP requests in 'dev' format
app.use(morgan('dev'));
// Middleware to parse incoming JSON requests and puts the parsed data in req.body
app.use(express.json());

// Middleware to parse incoming requests with URL-encoded payloads and puts the parsed data in req.body
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies attached to the client request object
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use("/ai", aiRoutes)



app.get('/', (req, res) => {
    res.send('Welcome to your personal chat application with AI Intellisense!');
});

export default app; 
