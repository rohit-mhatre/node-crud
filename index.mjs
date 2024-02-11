//import express
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3661;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));