import { useContext } from 'react';
import { CalculadoraContext } from '../context/CalculadoraContext.tsx';
import styles from '../styles/components/Historico.module.css';


export function Historico() {
    const {calcular,operacoes, duodigito, valor, timer, jaCalculou, listaHistoricos} = useContext(CalculadoraContext)
  
    
    return(
    <div className= {styles.historicoContainer}> 
        <h1>Histórico</h1>
        
        {jaCalculou ? (
        <><h3>Número total de operações: {operacoes}</h3>
        <h2>Operações Passadas:</h2>
        <div>{listaHistoricos}
        </div></>):(
        <><h2>Histórico vazio!</h2>
        <h3>Começe a calcular na aba Calculadora!</h3></> )}
        
    </div>
    );
}