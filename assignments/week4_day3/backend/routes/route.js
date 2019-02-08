const express = require('express');
const router = express.Router();

const User = require('../models/register.js');
//retrieving data 
router.get('/register', (req, res, next)=>{
    User.find(function(err, users) {
        res.json(users);
    })
});

//add user
router.post('/register',(req, res, next)=>{
    //logic to add user
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    });

    newUser.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add User'});
        }
        else {
            res.json({msg: 'User added successfully'});
        }
    });
});



module.exports = router;