const mongoose = require('mongoose')
const express = require('express')
const app = express()
const authRoutes = require('./routes/authRoutes');
const cookie = require('cookie-parser');
const cors = require('cors')
require('dotenv').config();



const dbUri = process.env.DB_URI;
const port = process.env.PORT || 3000;

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
app.use(cookie());
app.use('/api',authRoutes);




mongoose.connect(dbUri).then(()=>console.log('Database connected successfully')).catch((e)=>console.log(e))
app.listen(port,(()=>console.log(`Server running on port ${port}...`)));