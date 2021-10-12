import { CalculadoraContext } from './context/CalculadoraContext.tsx';
import styles from '../styles/components/Calculadora.module.css';

export function Calculadora() {
    return(
    <div className= {styles.calculadoraContainer}> 
        <h1> Calculadora</h1>
        <div>Escreva um número maior que 100</div>
        <input type="text" />
        <button type="button" className={`${styles.calcularButton} `} >
            Calcular
        </button>
        <div> O menor duodigito multiplo de x é y</div>
        <div>Tempo para calculo: 32 milesimos</div>

    </div>
    );
}