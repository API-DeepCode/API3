"use client"

import { Bot, ArrowDown } from "lucide-react";
import styles from "./Home.module.css"
import NavButton from "@/components/globals/NavButton"

export default function Home() {
    return (
        <main className="pt-20 px-40">
            <div className={styles.welcome_message}>
                <h1>Bem-vindo ao</h1>

                <div>
                    <h1>EntrenovaFlix</h1>
                    <Bot size={50}/>
                </div>
            </div>

            <div className={styles.title}>
                <h1>Identifique os desafios da sua empresa com precisão</h1>

                <h2>Um diagnóstico completo com 4 etapas que analisa várias dimensões para transformar dados em insights acionáveis.</h2>

                <NavButton destination={1} buttonStyle={0} content={
                    <p>Preencher o Formulário</p>
                }/>
            </div>

            <div className={styles.information}>
                <div className={styles.information_title}>
                    <h1>Saiba Mais sobre o Formulário</h1>

                    <ArrowDown/>
                </div>

                <section>

                </section>
            </div>
        </main>
    );
}