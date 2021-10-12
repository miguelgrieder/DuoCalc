import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { Titulo } from '../components/Titulo.tsx'
import { Calculadora } from '../components/Calculadora.tsx'
import { Historico } from '../components/Historico.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DuoCalca</title>
      </Head>

      <Titulo/>
      <section> <div>
      <Calculadora/>

      </div>
      <Historico/>

      <div>

      </div> </section>
      
    </div>
  )
}
