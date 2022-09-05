const express=require("express");
const Article=require("./../models/article");
const router=express.Router();

router.get("/",function(req,res){
    res.render("new")
});
router.post("/",function(req,res){
    const article=new Article({
        title:req.body.title,
        description:req.body.description
    })
    article.save()
    res.redirect("/");
})
router.get("/:id",function(req,res){
    id=req.params.id
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var date=mm+'/'+dd+'/'+yyyy;
    Article.findById(id,function(err,docs){
        if(err){
            console,log(err)
        }else{
            res.render("article",{article:docs,date:date})
        }
    })
})
module.exports=router