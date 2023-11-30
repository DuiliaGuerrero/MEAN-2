import express from "express";
import userSchema from "../models/users.model.js"

const router = express.Router();

//Crear usuario
router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({ message: error }))
});
