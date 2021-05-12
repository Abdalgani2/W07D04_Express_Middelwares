const express = require("express");

const app = express();
const port = 3000;

const users = ["John", "Mark"];

app.get("/users", (req, res, next) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const logUsers =(req,res,next)=>{
    res.json(users);
    next();

};
app.use((req,res,next)=>{
    res.json(users)
    next()
})
const authRouter = express.Router();

const logMethod=(req,res,next)=>{


}
authRouter.use("/users", (req, res, next) => {
    console.log(" middleware");
    next();
  });
  app.use(express.json());
  app.get("/", (req, res, next) => {
      if(users===undefined){
    next(err);}
  });
  app.use((err, req, res, next) => {
    res.json("No users");
});
authRouter.use("/users", (req, res, next) => {
    users.forEach(element =>{
        res.json(element)
    })
    next();
  });
  app.post("/users/create",(req,res)=>{
    const name = req.body.name;
    users.push(name);
})
const product =["keyboard","mouse"];
app.post("/products/update",(req,res,next)=>{
   users.splice(0,req.body.data)
})
