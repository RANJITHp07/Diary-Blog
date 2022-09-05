const express=require("express");
const Article = require("../models/article");
const router=express.Router();

router.get("/:id",function(req,res){
    id=req.params.id;
    Article.findByIdAndDelete(id,function(err){
      if(err){
        console.log(err)
      }else
        res.redirect("/")
   })
})



module.exports=router