const express=require('express');
const path = require('path')
const app= express();
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/contactDatabase", { useNewUrlParser: true, useUnifiedTopology: true });
const port = 80;

//define mongoose scheema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
  });
  const contact = mongoose.model('contact', contactSchema);

  //express stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view-engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req ,res)=>{
    const shivi={}
    res.status(200).render('home.pug',shivi)
})
app.get('/contact',(req ,res)=>{
    const shivi={}
    res.status(200).render('contact.pug',shivi)
})

app.post('/contact',(req ,res)=>{
    var myData=new contact(req.body);
    myData.save().then(()=>{
    res.send("Data saved successfully")
    }).catch(()=>{
        res.status(400).send("Something went wrong !")
    })
    // res.status(200).render('contact.pug')
    })

app.get('/about',(req ,res)=>{
    const shivi={}
    res.status(200).render('contact.pug',shivi)
})

app.get('/services',(req ,res)=>{
    const shivi={}
    res.status(200).render('services.pug',shivi)
})

app.get('/classInfo',(req ,res)=>{
    const shivi={}
    res.status(200).render('contact.pug',shivi)
})


app.listen(port,()=>{
    console.log(`Server is started successfully on port ${port}`);
})