import './styles.css'
export const Header : React.FC = (props)=>{
    return(
        <header>
            <h2>
            {props.children}
            </h2>
        </header>
  
    )}