const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

module.exports = router;

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
