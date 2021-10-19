import React, { ChangeEvent  } from "react";
import "./styles.css"
import { useState} from "react"
import { Header } from '../../components/header'
import api from "../../services/api";
import { useHistory } from "react-router";






interface IContent {
  name: string;
  gender: string;
  age: number;
  birthDate: string;
  hobby: string;

}



export const RegisterPage : React.FC = ()=>{
    
  const [developer,setDeveloper] = useState<IContent>({
    name: "",
    gender: "",
    age: 0,
    birthDate: "",
    hobby: ""
  })
const history = useHistory()
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      if(e.target.name === 'birthDate'){
        e.target.value = e.target.value.replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
      }

      if(e.target.name === 'age'){
        e.target.value = e.target.value.replace(/[^0-9]+/g, "");
        if(parseInt(e.target.value)>=100){
          alert('insira um valor valido')
          e.target.value = ""
        }
      }
      if(e.target.name === 'gender'){
        if(e.target.value!== 'm' && e.target.value !=='f' && e.target.value!== 'M' && e.target.value !== 'F'){
          alert('digite m para masculino e f para feminino')
          e.target.value= ""
        }else{
          e.target.value = e.target.value.toUpperCase()
        }
      }
      setDeveloper({
          ...developer,
          
          [e.target.name]: e.target.value
      })
  }
  const goback = ()=>{
    history.push('/')
  }
 
  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) =>{
      e.preventDefault()
      
      if(developer.name === "" && developer.age <= 0 && developer.birthDate === "" && developer.hobby === "" ){
        alert('preencha os campos corretamente')
        return
      }
    
      
      if( developer.birthDate === "" ){
        alert('preencha os campos corretamente')
        return
      }



      
     const response =  await api.post('/developers', developer)
     goback()
     return response
    

  }
  
    return(
       
          <div className="container">
            <Header>
             Cadastro do Desenvolvedor
            </Header>
            <form className="form-register" onSubmit={handleSubmit}>
                
              
                
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} type="text" />

                <label htmlFor="gender">Genero</label>
                <input type="text" name="gender" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="gender" />

                <label htmlFor="age">Idade</label>
                <input type="text" name="age" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="age" />

                <label htmlFor="bornDate">Data de Nascimento</label>
                <input type="text" name="birthDate" id="birthDate" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} />

                <label htmlFor="hobby">Hobby</label>
                <input type="text" name="hobby" onChange={(e:ChangeEvent<HTMLInputElement>)=> handleChange(e)} id="hobby" />


                <button type="submit"  className="button1">Enviar</button>
            </form>

        </div>
            

      
  
    )}

