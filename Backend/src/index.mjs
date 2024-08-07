import { createApp } from "./createApp.mjs";
import 'dotenv/config';
import db from './db/index.mjs';
import mongoose from "mongoose";

db.authenticate()
    .then(() => console.log("Connected to the postgres database LMS"))
    .catch((err) => console.log(`Error: ${err.message}`));

    // Syncing database 
(async () => {        
    try {
        await db.sync({ force: false }); // `force: false` to avoid dropping existing tables
        console.log('Database synced!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

const mongoURI = "mongodb://localhost/lms";  // mongodb server

mongoose
   .connect(mongoURI)
   .then(() => console.log("Connected to Database"))
   .catch((err) => console.log(`Error: ${err}`));

const app = createApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})