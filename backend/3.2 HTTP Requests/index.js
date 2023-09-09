import  Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})
