import React from 'react'
import { Header } from '../header'
import './styles.css'

interface Props {
   text:string
}

export const Input:React.FC<Props> = ({text})=>{
    return(   
        <div className="container">
            <Header>
             {text}
            </Header>
            <form action="">
            <label htmlFor="name">Nome</label>
                <input id="name" type="text" />
                <label htmlFor="gender">Genero</label>
                <input type="text" id="gender" />
                <label htmlFor="age">Idade</label>
                <input type="text" name="" id="age" />
                <label htmlFor="bornDate">Data de Nascimento</label>
                <input type="text" name="" id="bornDate" />
                <label htmlFor="hobby">Hobby</label>
                <input type="text" name="" id="hobby" />
                <label htmlFor="id">Id</label>
                <input type="text" name="" id="id" />
                
            </form>

        </div>
  
    )}