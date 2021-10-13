import { time } from "console";
import { createContext, ReactNode, useEffect, useState } from "react";


interface CalculadoraProviderProps {
    children: ReactNode
}

interface CalculadoraContextData{
    calcular: (num) => void;
    duodigito: number;
    timer: number;
    valor: number;
    jaCalculou: boolean;
    listaHistoricos: any;
}

export const CalculadoraContext = createContext({} as CalculadoraContextData);


export function CalculadoraProvider({children}: CalculadoraProviderProps) {
    const [valor, setValor] = useState(0);
    const [duodigito, setDuodigito] = useState(0);
    const [timer, setTimer] = useState(0);
    const [jaCalculou, setJaCalculou] = useState(false);
    const [listaHistoricos, setListaHistoricos] = useState([]);


    function calcular(valor) {
        var timer_inicio = Date.now()
        var valor_string = valor.toString();
        var i = 1;
        var jaEncontrou = false;

        while(jaEncontrou==false){
        var jaEncontrou = verificadorDoisDigitos(valor_string, i);
        var i = i+1;}


        function verificadorDoisDigitos(valor, i){
            const arrayAlgarismos = (valor*i).toString().split('');
            console.log(arrayAlgarismos, valor, i)
            
                
                if(i>100){
                    return true
                }else{return false}; 
            
        }
        
        var timer_fim = Date.now()
        const timer =  (timer_fim -timer_inicio)+1;
        const duodigito = valor*i;
        setValor(valor);
        setDuodigito(duodigito);
        setTimer(timer);

        exibir_resposta()}
        



    function exibir_resposta(){
        var size = listaHistoricos.unshift(<div>Menor duodigito de {valor}: {duodigito}. Cálculo: {timer} milésimos.</div>)
        if(size>4){
            listaHistoricos.pop()
        };
        setListaHistoricos(listaHistoricos)
        setJaCalculou(true);
    }

    return(
        <CalculadoraContext.Provider value={{calcular, duodigito, valor, timer, jaCalculou, listaHistoricos}}>
            {children}
        </CalculadoraContext.Provider>)}
