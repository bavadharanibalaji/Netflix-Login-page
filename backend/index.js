const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

var username= "@bava_balaji"
var password= "bb0808"

app.use(express.urlencoded({extended:true}))

app.post("/login", (req, res)=>{

    console.log(req.query.username)
    
    if (req.body.username === username && req.body.password === password) {
        res.json(true)
    }else{
        res.json(false)
    }

})

app.listen(5000, ()=>{
    console.log("server started...")
})