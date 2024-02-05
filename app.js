import express from "express";
import path from "path";
import dotenv from "dotenv/config.js"

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

//app.set('views', path.join("views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join("public")));


app.get("/home", (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.error(error)
    }
})

export default app;