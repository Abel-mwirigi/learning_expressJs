const express = require('express'); // Import express
const router = express.Router(); // Create a router

router.get('/', (req, res) => {
  res.send('Users!');
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ first_name: req.body.first_name });
        res.redirect(`/users/${users.length - 1}`);
    }else {
        console.log('Error');
        res.render( 'users/new', { first_name: req.body.first_name });
    }
});

router.route('/:id').get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
}).put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
}).delete((req, res) => {});

const users = [{ name: 'John' }, { name: 'Jane' }];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router; // Export the router