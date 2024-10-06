// configDotenv
import express from "express";
// import session from 'express-session';
import cookieParser from "cookie-parser";
import approutes from "./routes/app-routes.js";
import bodyParser from 'body-parser';
import { configDotenv } from "dotenv";
// import path from "path";

const app =express();
// const port = 3000;
const port = process.env.PORT ||3000 ;
// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: true,
//   }));

// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// app.set("view engine")
// app.get("/",(req,res)=>{
//     res.status(200).json({"Status":"Success"});
// })
app.get("/setcookie",(req,res)=>{

    res.cookie("token", "iamcookie", {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
        secure: true, // Uncomment this line for production if your site is served over HTTPS
      });
      res.status(200).json({"status":"sucesss avinash"})
})


app.use(approutes);

app.listen((3000),(req,res)=>{
    console.log("Listening at "+port)
})

