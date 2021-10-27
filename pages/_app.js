
import { CalculadoraContext, CalculadoraProvider } from '../context/CalculadoraContext.tsx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <CalculadoraProvider>
  <Component {...pageProps} />
  </CalculadoraProvider>)
}

export default MyApp
