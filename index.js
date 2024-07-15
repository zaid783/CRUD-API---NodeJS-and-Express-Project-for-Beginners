import express from 'express';
import bodyParser from 'body-parser';
const app = express();

import userRoutes from './routes/users.js'

const PORT = 8000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Welcome from the main page'));

// app.get('/', (req, res));

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));