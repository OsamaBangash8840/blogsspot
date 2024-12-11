const express = require('express');
const connectDB = require('./config/db')
const contactFormRoutes = require('./routes/contactForm')
require('dotenv').config();
const PORT = 7000 || process.env.PORT
const cors = require('cors')

const app = express();
app.use(express.json());

const corsOption = {
    exposedHeaders :  ['Content-Length','Authorization'],
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
  }
  
app.use(cors(corsOption))
connectDB();


app.use('/api',contactFormRoutes)

app.listen(PORT,()=>{
    console.log("API IS RUNNING ON 7000")
})

