const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = 2000;
const uri=`mongodb+srv://kendrobindu:eHfh2QHiepLZVnHP@cluster0.0pbks.mongodb.net/kendrobindu?retryWrites=true&w=majority&appName=Cluster0`

const subjectRoutes=require('./routes/subject.route');
const classRoutes = require('./routes/class.route');
const teacherRoutses= require('./routes/teacher.route');
const adminRoutes=  require('./routes/admin.route');
const studentoutes=require('./routes/student.route')


const subModel=require('./models/subjects')



const connectDB = async () => {

    try {
        
        await mongoose.connect(uri);
        mongoose.set('bufferCommands', false);
        console.log('MongoDB connected');
                   
       
            
    } catch (err) {
        console.log('Database connection error:', err);
    }
};

connectDB();
app.get('/delete', async (req, res) => {
    try {
      // Use $unset to remove the applicable_classes field from all documents
      const result = await subModel.updateMany(
        {}, // Empty filter to select all documents
        { $unset: { applicable_classes: 1 } } // Remove the field entirely
      );
      res.send({ result });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Failed to update documents' });
    }
  });
     
app.use('/class', classRoutes);
app.use('/teacher',teacherRoutses)
app.use('/subject',subjectRoutes)
app.use('/admin',adminRoutes)
app.use('/student',studentoutes)


app.get('/', (req, res) => {
    res.send('Welcome to the School Management API');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
