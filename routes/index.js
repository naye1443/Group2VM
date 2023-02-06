const express = require('express');
const router = express.Router();

router.get('/api', (req, res, next) =>{
    console.log("server is running on localhost3000");
    res.send({"users": ["userOne", "userTwo", "userThree"]});

    // Move to next server
});

module.exports = router;