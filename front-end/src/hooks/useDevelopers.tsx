import { useState, useCallback} from "react"
import api from "../services/api"



interface IContent {
  id:string,
  name:string,
  gender:string,
  age:string,
  birthDate:string,
  hobby:string

}

export const useDevelopers = ()=>{
  const [developers,setDevelopers] = useState<IContent[]>([])

   const getDevelopers =  useCallback( async () => {
      const {status,data} = await api.get<IContent[]>('/developers')
        
      if(status !== 200) throw new Error();

      setDevelopers(data); 
   },[])
 
   return {
     developers,
     getDevelopers
   }
  }