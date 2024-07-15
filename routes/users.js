import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

//mock data set
let users = [];

router.get('/', (req, res) => {
    res.send(users);
});


router.post('/', (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4() });
    res.send(`${user.first_name} has added to the database`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`${id} deleted successfully from database`);
});


router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;
    const user = users.find((user) => user.id === id)

    if (first_name) user.first_name = first_name;
    if (first_name) user.last_name = last_name;
    if (first_name) user.email = email;

    res.send(`user with id ${id} is updated`);
})

export default router;