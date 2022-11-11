var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var{libraryModel}=require('./models/libraryModels')
mongoose.connect("",{useNewUrlParser:true})
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("hello students")
})
app.post('/read',(req,res)=>{
var libraryObject=new libraryModel(req.body);
libraryObject.save()

    res.json(libraryObject)
}
)
app.listen(process.env.PORT||3000,()=>{
    console.log("server started at http://localhost:3000/")
})