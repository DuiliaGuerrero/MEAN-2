import express from "express";
import dotenv from "dotenv";
import connectToDataBase from "./config/db.js";

const app = express();
const port = process.env.PORT || 9000;
dotenv.config();
connectToDataBase();


app.listen(port, ()=>{
    console.log("El Servidor esta escuchando desde: ", port )
}); 

export default app;

