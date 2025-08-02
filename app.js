import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs"); 

app.get("/", (req, res) => {
    res.render("index", {activePage: "home"});
});

app.get("/story", (req, res) => {
    res.render("story", {activePage: "story"});
});

app.get("/menu", (req, res) => {
    res.render("menu", {activePage: "menu"});
});

app.get("/ourupdate", (req, res) => {
    res.render("ourupdate", {activePage: "ourupdate"});
});

app.get("/contact", (req, res) => {
    res.render("contact", {activePage: "contact"});
});

app.post("/reservation", (req, res)=>{
    const { fname, email, phone, persons, date, time, message} = req.body;
    res.send(`you are welcome ${fname} we will contact ${phone} and expecting ${persons} on ${date} by ${time}  `)
    
});


app.listen(3000, ()=>{
    console.log("Server responding at port 3000!!")
});
