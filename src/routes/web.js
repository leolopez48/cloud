const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    // console.log(path.join(__dirname, '../public/index.html'))
    // return res.sendFile(path.join(__dirname, '../../public/index.html'));
    return res.render('index')
})

module.exports = router;