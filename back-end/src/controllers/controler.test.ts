import { DeveloperController } from "./developerController";
import { Developer } from "../entities/Developer";
import { createConnection } from "typeorm";
import { isObject } from "util";
const connection = createConnection();


describe('test developer controller',()=>{
    
    test('should test developer creation class',async()=>{
        const developerData = new Developer('joao','male',23,'25/09/1998','drive car')
        expect(developerData.name).toBe('joao')
        expect(developerData.gender).toBe('male')
        expect(developerData.age).toBe(23)
        expect(developerData.birthDate).toBe('25/09/1998')
        expect(developerData.hobby).toBe('drive car')
        
        
    })
    
    
    test('should test creation developer',async ()=>{
        
        (await connection).connect
        const developerctrl = new DeveloperController;
        const developerData = new Developer('joao','male',23,'25/09/1998','drive car')
        expect(await developerctrl.save(developerData)).toHaveProperty("id")
        expect(await developerctrl.save(developerData)).toBeDefined()
        


    })

      
    test('should test if have developers registered',async ()=>{
        
        (await connection).connect
        const developerctrl = new DeveloperController;
        expect((await developerctrl.getAllUsers()).length).toBeGreaterThan(0)
        


    })


    test('should test a unique developer registered',async ()=>{
        
        (await connection).connect
        const developerctrl = new DeveloperController;
        const dev = await developerctrl.getByid(3)
        expect(dev).toBeDefined()
        expect(dev).toHaveProperty("id")
        expect(dev).toHaveProperty("name")

    })


    test('should update developer registered',async ()=>{
        
        (await connection).connect
        const developerctrl = new DeveloperController;
        const developerData = new Developer('joao','male',23,'25/09/1998','drive car')
        const dev = await developerctrl.getByIdAndUpdate(3,developerData)
        expect(dev).toBeDefined()
        expect(dev.name).toEqual('joao')
        expect(dev.gender).toEqual('male')
        expect(dev.age).toEqual(23)
        expect(dev.birthDate).toEqual('25/09/1998')
        expect(dev.hobby).toEqual('drive car')
        

    })


    test('should update developer registered',async ()=>{
        
        (await connection).connect
        const developerctrl = new DeveloperController;
        const dev = await developerctrl.getByidAndDelete(16)
        expect(dev).toBeDefined()

    })


})


