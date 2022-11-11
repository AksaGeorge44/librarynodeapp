var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var{libraryModel}=require('./models/libraryModels')
mongoose.connect("mongodb+srv://Aksageorge:aksageorge44@cluster0.3ictqpt.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})
var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get('/viewall',async(req,res)=>{
try{
    var result=await libraryModel.find()
    res.json(result)
}
catch(error){
res.send(error)
}
})
app.post('/search',async(req,res)=>{
    try{
        var result=await libraryModel.find(req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":"error"})
    }
})
app.post('/edit',async(req,res)=>{
    try{
        var result=await libraryModel.findByIdAndUpdate({"_id":req.body._id},req.body)
    }
    catch(error)
    
    {
        res.json({"status":"error"})
    }
})
app.post('/delete',async(req,res)=>{
    try{
        var result=await libraryModel.findByIdAndDelete({"_id":req.body._id},req.body)
    }
    catch(error)
    
    {
        res.json({"status":"error"})
    }
})
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