// Import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
import cors from 'cors';
import Grid  from 'gridfs-stream';

import OAuth2Client from 'google-auth-library';
import GoogleAuth from 'google-auth-library';
import {auth} from 'google-auth-library'
import dotenv from 'dotenv';
dotenv.config();

// Import routes
import userRoutes from './routes/users.js';
import trailRoutes from './routes/trails.js';
import markerRoutes from './routes/marker.js';

const path = ('path');
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/trails', trailRoutes);
app.use('/marker', markerRoutes);

// TODO: Hide the CONNECTION_URL in a .env
// const PORT = process.env.PORT || 5000;
const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://gsmith32:Gregory1247@trails.uhojira.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {const db = mongoose.connection;
                 const grid = new Grid(db.db, mongoose.mongo);
                 app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));})

    .catch((error) => console.log(error.message));
