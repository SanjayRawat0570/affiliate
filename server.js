import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

//Connect Server
connectDB().then(()=>{
  app.listen(process.env.PORT,()=>{
      console.log(`Server started on port ${process.env.PORT}`);
  })}
).catch(err=>console.log(err));

