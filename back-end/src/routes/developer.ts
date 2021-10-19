import { Router } from "express";
import { DeveloperController } from "../controllers/developerController";
import { Developer } from "../entities/Developer";

export const userRouter = Router();
const developerctrl = new DeveloperController;
/**
 *  cria as rotas de registro e consulta de desenvolvedores 
 */

    /**
     * cria usuario
     */
userRouter.post('/', async (req,res)=>{
    const {name, gender, age, birthDate, hobby} = req.body
    const user = new Developer(name, gender, age, birthDate, hobby)
    const savedUserData = await developerctrl.save(user);
    try {     
         res.status(200).send(savedUserData).json();
    } catch (e) {
        res.status(404).send({"message":"nao foi possivel consultar o banco de dados"}).json()
    }


})

userRouter.get('/', async (req,res)=>{
    const allDevelopersData = await developerctrl.getAllUsers() 
    try {     
        res.status(200).json(allDevelopersData)
    } catch (e) {
        res.status(400).json({"message":"nao foi possivel consultar o banco de dados"})
    }

})

userRouter.get('/:id', async (req,res)=>{
    const {id} = req.params;
    const data = await developerctrl.getByid(Number(id))
    try {     
        res.status(200).json(data);
    } catch (e) {
        res.status(404).json({"message":"nao foi possivel consultar o desenvolvedor no banco de dados"})
    }

   
})

userRouter.get('/dev/:name?', async (req,res)=>{
    const {name} = req.params
    const data = await developerctrl.getByName(name)
    try {     
        res.status(200).json(data);
    } catch (e) {
        res.status(404).json({"message":"nao foi possivel consultar o desenvolvedor no banco de dados"});
    }
})

userRouter.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    const data = await developerctrl.getByidAndDelete(Number(id))
    try {     
        res.status(200).json(data);
    } catch (e) {
        res.status(400).json({"message":"nao foi possivel consultar o banco de dados"})
    };
   
})

userRouter.put('/:id', async (req,res)=>{
    const {id} = req.params
   
    const data = await developerctrl.getByIdAndUpdate(Number(id),req.body)
    try {     
        res.status(200).send(data).json();
    } catch (e) {
        res.status(404).send({"message":"nao foi possivel consultar o banco de dados"}).json()
    }

   
})


