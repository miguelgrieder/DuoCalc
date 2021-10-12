import { createContext, ReactNode } from "react";

interface CalculadoraProviderProps {
    children: ReactNode
}

export const CalculadoraContext = createContext({});


export function CalculadoraProvider({children}: CalculadoraProviderProps) {
    const experienceToNextLevel = Math.pow((level + 1) * 4,2);
}