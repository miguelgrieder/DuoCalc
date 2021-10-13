import { time } from "console";
import { createContext, ReactNode, useState } from "react";


interface CalculadoraProviderProps {
    children: ReactNode
}

interface CalculadoraContextData{
    calcular: (num) => void;
    duodigito: number;
    timer: number;
    valor: number;
}

export const CalculadoraContext = createContext({} as CalculadoraContextData);


export function CalculadoraProvider({children}: CalculadoraProviderProps) {
    const [valor, setValor] = useState(0);
    const [duodigito, setDuodigito] = useState(0);
    const [timer, setTimer] = useState(0);


    function calcular(valor) {
        var timer_inicio = Date.now()
        var valor_string = valor.toString();
        var i = 0;
        var jaEncontrou = false;

        while(jaEncontrou==false){
        var jaEncontrou = verificadorDoisDigitos(valor, i);
        var i = i+1;
        console.log('calcular', valor_string.length, i);}

    

        function verificadorDoisDigitos(valor, i){
            const valor_testar = valor*i
            if (i<10){
                return false}; 
    
        }
        var timer_fim = Date.now()
        const timer =  timer_fim -timer_inicio
        const duodigito = valor*i;
        setValor(valor)
        setDuodigito(duodigito)
        setTimer(timer)
        console.log(timer)
    }



    return(
        <CalculadoraContext.Provider value={{calcular, duodigito, valor, timer}}>
            {children}
        </CalculadoraContext.Provider>)
}