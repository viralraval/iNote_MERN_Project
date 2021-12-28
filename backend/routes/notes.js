const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Notes');

//ROUTE 1 :  Get All Notes
router.get('/fetchallnotes',fetchuser, async(req,res)=>{
      
    const notes = await Note.find({user : req.user.id});
    res.json(notes);
})
//ROUTE 2 :  Insert a Note
router.post('/addnotes',fetchuser, [body('title').isLength({min:5}),body('description').isLength({min:5})], async (req,res)=>{
    
  const { title, description, tag } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 

  const note = new Note({
      title, description, tag ,user:req.user.id
  })
  const savedNote = await note.save();
  res.send({savedNote});

})

//ROUTE 3 : Update a Note
router.put('/updatenote/:id',fetchuser, async (req,res)=>{
  const {title,description,tag} = req.body;
  const newNote ={};
  if(title){newNote.title=title};
  if(description){newNote.description=description};
  if(tag){newNote.tag=tag};
  let  note = await Note.findById(req.params.id);
  if(!note){res.status(404).send("Not Found")};
  if (note.user.toString()!==req.user.id) {
    res.status(401).send("Unauthorized");
  }
  note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
  res.json({note});
})

//ROUTE 4 : Delete a Note
router.delete('/deletenote/:id',fetchuser,async (req,res)=>{
  const {title,description,tag} = req.body;
  const newNote ={};
  let  note = await Note.findById(req.params.id);
  if(!note){res.status(404).send("Not Found")};
  if (note.user.toString()!==req.user.id) {
    res.status(401).send("Unauthorized");
  }
  note = await Note.findByIdAndDelete(req.params.id);
  res.send("Deleted Succesfully");
})

module.exports = router;