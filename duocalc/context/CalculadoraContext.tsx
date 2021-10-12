import { createContext, ReactNode } from "react";

interface CalculadoraProviderProps {
    children: ReactNode
}

interface CalculadoraContextData{
    calcular: () => void;
}

export const CalculadoraContext = createContext({} as CalculadoraContextData);


export function CalculadoraProvider({children}: CalculadoraProviderProps) {
    function calcular() {
        console.log('calcular');
    }
    return(
        <CalculadoraContext.Provider value={{calcular}}>
            {children}
        </CalculadoraContext.Provider>)
}