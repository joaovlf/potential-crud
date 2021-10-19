import React,{ useEffect, ChangeEvent, useState} from "react";
import "./styles.css"
import { Container } from "../../components/container";
import { useDevelopers } from "../../hooks/useDevelopers";
import { useHistory } from "react-router";
import api from "../../services/api";




export const Developers : React.FC = ()=>{
  

  interface IContent {
    id:string,
    name:string,
    gender:string,
    age:string,
    birthDate:string,
    hobby:string
  
  }
  
  const history = useHistory()
  const {developers,getDevelopers} = useDevelopers()
  const [r,setR] = useState<IContent[]>([])
  useEffect(() => {
    getDevelopers()
   },[getDevelopers]) 

   useEffect(()=>{
    setR(developers)
   },[developers])
   const handleClick = (e:number)=>{
     
     history.push(`/update/${e}`)
     
    }
    
  const handleDelete = async(e:number)=>{
    if(e!== undefined){
      await api.delete(`/developers/${e}`).then(()=>{
        window.location.reload()
      })
    }
  }


    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
          if (!e.target.value){
              setR(r)
          }
          const search = e.target.value
          const result = developers.filter(e=> e.name.includes(search))
          if(!result){
            setR(r)
          }
          setR(result)
  
  
    }
  
      console.log(r,developers)

    
return(
  <div>
    <form  className="form">
    <label htmlFor="search">Pesquisar</label>
    <br />
    <input id="search" name="search" className="input-dev-page"  onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} type="text" />
    </form>
      {r && r.map((e:IContent)=>
      < div key={e.id}>
      <Container 
      id={e.id}
      name={e.name}
      gender={e.gender}
      age={e.age}
      birthDate={e.birthDate}
      hobby={e.hobby}/>
        <button onClick = {()=>handleClick(parseInt(e.id))} className="button">Editar</button>  
        <button onClick= {()=>{handleDelete(parseInt(e.id))}} className="button">Deletar</button>  
      </div>
      )}
  </div>
)}
    
