import { useContext } from 'react';
import { CalculadoraContext } from '../context/CalculadoraContext.tsx';
import styles from '../styles/components/Historico.module.css';


export function Historico() {
    const {calcular, duodigito, valor, timer, jaCalculou, listaHistoricos} = useContext(CalculadoraContext)
  
    
    return(
    <div className= {styles.historicoContainer}> 
        <h1 > Histórico</h1>
        <h2>Operações Passadas:</h2>
        {jaCalculou ? (<div>
        <div>{listaHistoricos}</div>
        </div>):(<div>Histórico vazio!</div>)}
        
    </div>
    );
}