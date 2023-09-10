const Note=require('../models/note');


const fetchNotes=async (req,res)=>{
  // find teh notes

  const notes=await Note.find();

  // respond

  res.json({notes:notes});
};

const fetchNote= async (req,res)=>{
  //  get id off the url

  const noteId=req.params.id;

  // find notes

  const note=await Note.findById(noteId)

  // respond

  res.json({note:note})
};

const updateNote= async(req,res)=>{
       // get the id of url
  const noteId=req.params.id;

  // get ethe data of the req body
  const title=req.body.title;
  const body=req.body.body;

  // find and update
    await Note.findByIdAndUpdate(noteId,{
    title:title,
    body:body
    })
    // Find the update the record
    const note=await Note.findById(noteId);

    // response
    res.json({note:note});


}

const createNote=async(req,res)=>{

  const title=req.body.title;
  const body=req.body.body;

  const note=await Note.create({
    title:title,
    body:body,
  })

  res.json({note:note})
 
  }

  const deleteNote=async(req,res)=>{
    const noteId=req.params.id;

    await Note.deleteOne({_id:noteId})

    res.json({success:"record deleted"})

  };


module.exports={
  fetchNotes:fetchNotes,
  fetchNote:fetchNote,
  createNote:createNote,
  deleteNote:deleteNote,
  updateNote:updateNote,
}