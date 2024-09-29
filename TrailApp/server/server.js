// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
// TODO: Could possible reuse this if we store videos on Mongo
//import Grid  from 'gridfs-stream';

// README: May need later.
import OAuth2Client from 'google-auth-library';
import GoogleAuth from 'google-auth-library';
import {auth} from 'google-auth-library'


// Import routes
import trailRoutes from './routes/trails.js';
import markerRoutes from './routes/marker.js';

import userRoutes from './routes/userRoutes.js'
import videoRoutes from './routes/videoRoutes.js'

// Creates object app that contains Express framework API by calling createApplication() in node_modules/express/lib/express.js
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use((req, res, next)  => {
    console.log(req.path, req.method)
    next()
})
app.use(express.json())

// Routes for API functions
app.use('/api/trails', trailRoutes)
app.use('/api/marker', markerRoutes)

app.use('/api/user', userRoutes)
app.use('/api/video', videoRoutes)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
                const db = mongoose.connection;
                //const grid = new Grid(db.db, mongoose.mongo);
                // Listen for requests
                app.listen(process.env.PORT, () => 
                    console.log('Connected to DB, server running on port:', process.env.PORT));
                })
    .catch((error) => 
        console.log(error.message)
    );