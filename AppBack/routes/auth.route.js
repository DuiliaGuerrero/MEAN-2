import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userSchema from "../../models/users.model.js"

router.post('/login', async (req, res)=>{
    
    const user = await userSchema.findOne({ email: req.body.email });
    if(!user){
        return res.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    const validar = bcrypt.compareSync(req.body.password, user.password)
    if(!validar){
        return res.json({ error: 'Error, revisa tu nombre de usuario y contraseña' })
    }

    res.json({ success: 'Has ingresado con éxito', 
    token: createToken(user)});
});

function createToken(user){
    const payload = {
        user_id: user._id,
        user_role: user.role
    }
     
    console.log(payload)
    return jwt.sign(payload, 'token') 
}