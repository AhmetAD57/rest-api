const express= require("express");
const app= express();


//app.get(), app.post(), app.put(), app.delete()



app.get("/", (req, res) =>{
    res.send("Hi -get");
});

app.get("/api/courses", (req, res) =>{
    res.send([1,2,3]);
});

//Port

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log(port + " Port listening...")})