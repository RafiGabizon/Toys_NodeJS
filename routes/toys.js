const express = require('express');
const router = express.Router();
const Toy = require('../models/toyModel');
const authMiddleware = require('../middleware/auth');

router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const toys = await Toy.find().skip(skip).limit(limit);
        res.json(toys);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


module.exports = router;
