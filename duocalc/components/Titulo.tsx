import styles from '../styles/components/Titulo.module.css';


export function Titulo() {
    return(
    <div className= {styles.tituloContainer}> 
        <h1 > DuoCalc</h1>
        <div>A melhor calculadora de duodigitos!</div>
    </div>
    );
}