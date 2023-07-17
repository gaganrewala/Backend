import express from 'express';
import cors from 'cors'
import colors from 'colors'
import connectDB from './config/db.js';
import User from './model/userModel.js';

// import userRoutes from './routes/usersRoutes.js'
const app = express();
const port = 5000;
app.use(cors())
connectDB()

// Define a root route
app.get('/resdata',(req,res) =>{
    res.send("Hello Gagan")
})

app.get('/api/user', async (req, res) => {
    try {
      const data = await User.find(); // Retrieve data using your Mongoose model
      console.log(data)
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});