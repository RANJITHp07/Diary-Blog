const express=require('express');
const router=express.Router();
const Article=require('./../models/article')

router.get("/:id",function(req,res){
    id=req.params.id;
    Article.findById(id,function(err,docs){
        if(err){
            console.log(err);
        }else 
           res.render("edit",{article:docs})
})
})
router.post("/:id",function(req,res){
     id=req.params.id;
     var title=req.body.title;
     var description=req.body.description
     Article.findByIdAndUpdate(id,{title:title,description:description},function(err){
        if(err){
            console.log(err)
        }else
            res.redirect("/")
     })

})

module.exports=router