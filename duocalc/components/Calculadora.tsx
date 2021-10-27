import { CalculadoraContext } from '../context/CalculadoraContext.tsx';
import styles from '../styles/components/Calculadora.module.css';
import { useContext } from 'react';



export function Calculadora() {
    const {calcular, duodigito, valor, timer, jaCalculou} = useContext(CalculadoraContext)

    function getInput() {
        const input_data = document.querySelector('input').value;
        const valorr = parseInt(input_data);
        if (valorr > 100) {
        calcular(valorr)}
    }

    return(
        <div>
    <div className= {styles.calculadoraContainer}> 
        <h1> Calculadora</h1>
            <h2>Escreva um número maior que 100:</h2>
            <input type="number" placeholder="digite"/>
            <button type="button" className={`${styles.calcularButton} `}  onClick={getInput}>
                Calcular
            </button>
            
            { jaCalculou ? (
                <div>
            <div> O menor duodigito múltiplo de {valor} é {duodigito}.</div>
            <div>Tempo para cálculo: {timer} ms.</div></div>):
            (<div>Calcule para exibir os dados!</div>)}
        
            

    </div>
    </div>
    );
}
