const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const articleRouter=require("./routes/article");
const Article=require("./models/article");
const editRouter=require("./routes/edit")
const deleteRouter=require("./routes/delete");
const path=require('path')

const app=express();

app.set('view engine','ejs');

//static middleware
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended : false }))


app.get('/',function(req,res){
    var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; 
   var yyyy = today.getFullYear();
   var date=mm+'/'+dd+'/'+yyyy;
    Article.find({},function(err,docs){
        if(err){
            console.log(err);
        }else{
            res.render('home',{article:docs,date:date})
        }
    }).sort({createdAt:'desc'})
    
});
app.use('/article',articleRouter);
app.use('/edit',editRouter);
app.use('/delete',deleteRouter);

app.listen(3000,function(){
    console.log("sucessfully running")
});