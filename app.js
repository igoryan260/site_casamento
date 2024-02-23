import express from "express";
import path from "path";
import dotenv from "dotenv/config.js"
import router from "./routes/index.js";

const __dirname = new URL('.', import.meta.url).pathname;

const app = express();

app.set('views', path.join("views"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(express.static(path.join("public")));

export default app;