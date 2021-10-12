import { CalculadoraContext } from './context/CalculadoraContext.tsx';
import styles from '../styles/components/Calculadora.module.css';

export function Calculadora() {
    return(
        <div>
    <div className= {styles.calculadoraContainer}> 
        <h1> Calculadora</h1>
            <h2>Escreva um número maior que 100:</h2>
            <input type="text" />
            <button type="button" className={`${styles.calcularButton} `} >
                Calcular
            </button>
            <div> O menor duodigito multiplo de x é y</div>
            <div>Tempo para calculo: 32 milesimos</div>

    </div>
    </div>
    );
}
