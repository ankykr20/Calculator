const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post('/add',(req,res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const add = n1+n2 
    res.send("Addition = "+ add) 
})

app.post('/sub',(req,res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const sub = n1-n2 
    res.send("Subtraction = "+ sub) 
})

app.post('/mul',(req,res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const mul = n1*n2 
    res.send("Mutiplicatin = "+ mul) 
})

app.post('/div',(req,res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const div = n1/n2 
    res.send("Division = "+ div) 
})

app.listen(3000, (res)=>{
console.log("Server Started at port 3000")
})