import React from 'react'
import { Header } from '../header'

import './styles.css'
interface Props {
    id:string,
    name:string,
    gender:string,
    age:string,
    birthDate:string,
    hobby:string
}
export const Container:React.FC<Props> = ({ id, name,gender,age,birthDate,hobby})=>{
    return(   
        <div className="container">
            <Header>{name}</Header>
            <ul>
                <li>Genero: {gender}</li>
                <li>Idade: {age}</li>
                <li>Data de nascimento: {birthDate}</li>
                <li>Hobby: {hobby}</li>
                <li>Id de registro: {id}</li>
              
            </ul>
        </div>
  
    )}