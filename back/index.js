import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

let db
const CONNECTION_URL = "mongodb://localhost:27017"
const PORT = process.env.PORT || 5000;

try {
    db = await mongoose.connect(CONNECTION_URL)
    app.listen(PORT)
    console.log("App running on: http://localhost:" + PORT)

} catch(err){
    console.log(err)
}