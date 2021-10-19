import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../header";
import "./styles.css"
export const SideBar : React.FC = ()=>{
    return(
       <>
       <div className="side-bar">
          <Header>Potential Crud</Header>
          <Link to="/">Desenvolvedores</Link>
          <Link to="/register">Cadastrar</Link>
       </div>
       </>
    )}

    export default SideBar;