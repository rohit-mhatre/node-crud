//import express
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.mjs'
const app = express();
const PORT = 3661;
app.use(bodyParser.json());

app.get('/', (req,res) => {res.send("Hello from homepage.");})
app.use('/users',usersRoutes);
app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));