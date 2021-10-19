import React, { ChangeEvent, useEffect  } from "react";
import "./styles.css"
import { useState} from "react"
import { Header } from '../../components/header'
import api from "../../services/api";
import { useHistory,useParams} from "react-router-dom";






interface IContent {
  name: string;
  gender: string;
  age: number;
  birthDate: string;
  hobby: string;
  
}



export const UpdatePage : React.FC = ()=>{
  
  
  const [developer,setDeveloper] = useState<IContent>({
    name: "",
    gender: "",
    age: 0,
    birthDate: "",
    hobby: ""
  })
  const {id}:any = useParams()
  const loadDeveloper = async ()=>{
    const response:any = await api.get(`/developers/${id}`)
    const data:IContent= response.data
    setDeveloper(data)
  }
  useEffect(()=>{
    loadDeveloper() 
  },[id])
 
  const history = useHistory()
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    
    setDeveloper({
      ...developer,
      
      [e.target.name]: e.target.value
    })
  }
  const goback = ()=>{
    history.push('/')
  }
  console.log(developer)
  
  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const response =  await api.put(`/developers/${id}`, developer)
    goback()
    return response
    
    
  }

  return(
    
    <div className="container">
            <Header>
             Atualizar Desenvolvedor
            </Header>
            <form onSubmit={handleSubmit}>
                
            
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" value={developer.name}  onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} type="text" />

                <label htmlFor="gender">Genero</label>
                <input type="text" name="gender" value={developer.gender}  onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="gender" />

                <label htmlFor="age">Idade</label>
                <input type="text" name="age"value={developer.age} onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="age" />

                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="text" name="birthDate" value={developer.birthDate}  id="birthDate" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} />

                <label htmlFor="hobby">Hobby</label>
                <input type="text" name="hobby" value={developer.hobby}  onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="hobby" />


                <button type="submit"  className="button1">Enviar</button>
            </form>

        </div>
            

      
  
    )}

