const express = require('express');
const router = express.Router();


// =============================
// @route      POST api/users
// @desc       Register an User
// @access     Public
// =============================
router.post('/', (req, res) => {
    res.send('Register an user')
})


module.exports = router;
