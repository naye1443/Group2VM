const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    console.log("server is running on localhost3000");
    res.send();


    // Move to next server
});

module.exports = router;