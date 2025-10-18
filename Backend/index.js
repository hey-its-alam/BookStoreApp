import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './route/book.route.js';
import cors from 'cors';
import userRoute from './route/user.route.js';

const app = express()
app.use(cors());
//using middleware to parse json
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000

//connect to database
const URI=process.env.MongoDBURI;
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });    console.log("Connected to MongoDB")
}
catch(error){
    console.log("Could not connect to MongoDB",error)
}

//connect to route
app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`)
})
