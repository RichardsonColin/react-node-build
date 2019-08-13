const express = require('express');
const db = require('../queries');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ msg: 'Hello Universe!' }));
});

// TEST ROUTES
router.get('/users', db.getUsers);
router.get('/users/:id', db.getUserById);
router.post('/users', db.createUser);
router.put('/users/:id', db.updateUser);
router.delete('/users/:id', db.deleteUser);

module.exports = router;