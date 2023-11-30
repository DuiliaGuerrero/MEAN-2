import express from "express";
import Goals from "../../models/goals.model.js";
import checkToken from "../../utils/middlewares.js";

const router = express.Router();

// Ruta para crear un nuevo registro de Goals
router.post('/goals', (req, res) => {
  const { name, target, deadline, createdBy } = req.body;

  // Crea una instancia del modelo Goals con los datos proporcionados
  const newGoal = new Goals({
    name,
    target,
    deadline,
    createdBy,
  });

  // Guarda el nuevo registro en la base de datos
  newGoal
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.use(checkToken);

router.get('/goals', async (req, res) => {
    try {
      const userId = req.user.user_id
  
      if (req.user.user_role == "regular") {
        let userGoals = await Goals.find({ createdBy: userId });
        res.json(userGoals);
      } else {
        res.statusCode = 401
        res.json({ "message": "No tienes permisos suficientes" })
      }
  
    } catch (error) {
      res.json({ error: error.message });
    }
  });



export default router;