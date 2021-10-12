import { createContext, ReactNode } from "react";

interface CalculadoraProviderProps {
    children: ReactNode
}

interface CalculadoraContextData{
    calcular: (num) => void;
}

export const CalculadoraContext = createContext({} as CalculadoraContextData);


export function CalculadoraProvider({children}: CalculadoraProviderProps) {
    function calcular(num) {
        console.log('calcular', num);
    }
    return(
        <CalculadoraContext.Provider value={{calcular}}>
            {children}
        </CalculadoraContext.Provider>)
}