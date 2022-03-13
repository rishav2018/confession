const express = require('express')
const app = express()
var cors = require('cors')
const path = require("path");

const port = 9000
var bodyParser = require('body-parser')
app.use(bodyParser.json());
const Posts = require('./models/Posts')
const mongoose = require('mongoose');


app.use(cors())
app.use(express.static("build"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});



main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://rishav:nefindcc135@cluster0.fzdcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
}


app.post('/api', async(req,res)=>{
  const poste = new Posts({
    title : req.body.title,
    confession : req.body.confession,
  })
  
  try {
  const data = await poste.save()
   res.sendStatus(200)
    
  }catch(err){
    res.send("err")
  }
})
app.get('/api',async (req,res)=>{

Posts.find().then((response)=>{
  res.send(response)
}).catch(err=>{res.send(err)})
})



// making like dislike functions

app.post('/api/ratings', async (req,res)=>{

const result = await Posts.findByIdAndUpdate({_id:req.body.postid},{

      likes:req.body.likes+1

})

})






























app.listen(port, () => {
  console.log(`Backend is running on port ${port}`)
})
