import express from "express";


const app = express();
const port = 3500;

// var userIsAuthorised = false;

// app.use(bodyParser.urlencoded({ extended: true }));

// function passwordCheck(req, res, next) {
//   const password = req.body["password"];
//   if (password === "ILoveProgramming") {
//     userIsAuthorised = true;
//   }
//   next();
// }
// app.use(passwordCheck);

app.get("/", (req, res) => {
    let weekLog = "Hey it's weekday, work is needed!";
    const today = new Date();
    const day = today.getDay();
    if (day ===0 || day ===6){
        weekLog = "Hey it's the weekend, no work is needed!"
    }
    res.render("my_work.ejs",{
            resultLog:weekLog
        });
        
    });


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


