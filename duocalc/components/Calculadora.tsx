import { CalculadoraContext } from '../context/CalculadoraContext.tsx';
import styles from '../styles/components/Calculadora.module.css';
import { useContext } from 'react';


export function Calculadora() {
    const {calcular} = useContext(CalculadoraContext)

    function getNum() {
        const num = document.querySelector('input').value;
        if (num > 100) {
        calcular(num)}
    }

    return(
        <div>
    <div className= {styles.calculadoraContainer}> 
        <h1> Calculadora</h1>
            <h2>Escreva um número maior que 100:</h2>
            <input type="text" placeholder="digite"/>
            <button type="button" className={`${styles.calcularButton} `}  onClick={getNum}>
                Calcular
            </button>
            <div> O menor duodigito multiplo de x é y</div>
            <div>Tempo para calculo: 32 milesimos</div>
        <script>
        
        </script>
    </div>
    </div>
    );
}
