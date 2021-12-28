const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const JWT_SECRET='DoggieCatIsTheBest';
const fetchuser = require('../middleware/fetchuser')

const router = express.Router();
//POST("localhost:5000/api/auth/createuser")
// ROUTE 1 : CREATING USER
router.post('/createuser',[body('email').isEmail(),body('name').isLength({min:3}),body('password').isLength({min:5})],async (req,res)=>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 


  else {

    let user = await User.findOne({email: req.body.email});

    if(user){
      return res.status(400).json({error: "Sorry User With This Email Already Exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    
    user = await User.create({
    name: req.body.name,
    password: secPass ,
    email: req.body.email
    });

    const data ={
      id : user.id
    }  
    const authtoken = jwt.sign(data,JWT_SECRET);
    res.send({"authtoken":authtoken});
  }

})
//ROUTE 1 : END

//ROUTE 2 : LOGIN USER
router.post('/login',[body('email').isEmail(),body('password').exists()],async (req,res)=>{
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 

  const {email,password} = req.body;
  try {
    let user = await User.findOne({email});

    if(!user){
      return res.status(400).json({error:"Please Login With Correct Credentials"});
    }    

    const passwordCompare = await bcrypt.compare(password,user.password);

    if(!passwordCompare){
      return res.status(400).json({error:"Please Login With Correct Credentials"});
    } 

    const data ={
      user : {id : user.id}
    }  

    const authtoken = jwt.sign(data,JWT_SECRET);
    res.send({"authtoken":authtoken});
  } 
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error Occured")
  }


})
//ROUTE 2 : END


//ROUTE 3 : GET DETAILS OF LOGGED IN USER
router.post('/getuser',fetchuser,async (req,res)=>{
  const errors = validationResult(req);
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } 
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal Server Error Occured")
  }
})
//ROUTE 3 : END


module.exports = router;