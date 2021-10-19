import { getManager, getRepository } from "typeorm";
import { Developer } from "../entities/Developer";

export class DeveloperController {
    async save(developer: Developer){
       const saveDeveloper =  await getManager().save(developer);
       return saveDeveloper;
    }
    async getAllUsers() {
        const allDevelopers = await getManager().find(Developer);
        return allDevelopers;
    }

    async getByid(id:number) { 
        const developer = await getManager().findOne(Developer, id);
        return developer;

    }
    async getByName(name:string){
        const developer = await getManager().find(Developer,{ where: { name: name} });
        return developer;
    }
    async getByidAndDelete(id:number){
        const developer = await getManager().findOne(Developer,id);
        getManager().remove(developer)
        return developer;
    }
    
    async getByIdAndUpdate(id:any,body:any){
        const developer = await getRepository(Developer).findOne(id);
       
             getRepository(Developer).merge(developer, body )
             const results = await getRepository(Developer).save(developer)
             return results;
        
        
      
    }
}