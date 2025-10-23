"use client"

import { UserRound, TrendingUp, Target, SquareCheckBig, CircleAlert, Lock, CircleCheck, ArrowRight } from "lucide-react"
import styles from "@/components/styles/AiAnswer.module.css"
import NavButton from "@/components/globals/NavButton"

export default function AiAnswer(){
    return(
        <section className={styles.display}>
            <div className={styles.title}>
                <h1>Diagnóstico Concluído!</h1>
                <h2>Aqui está o seu relatório</h2>
            </div>

            <div className={styles.overview}>
                <div className={styles.overview_title}>
                    <h1>80</h1>

                    <div>
                        <h1>Saúde Organizacional: Excelente</h1>
                        <h2>Baseado nas suas respostas das dimensões</h2>
                    </div>
                </div>

                <div className={styles.overview_info}>
                    <div>
                        <UserRound/>
                        <h1>Funcionários</h1>
                        <h2>50-200</h2>
                    </div>
                    <div>
                        <TrendingUp/>
                        <h1>Mercado</h1>
                        <h2>2-5 anos</h2>
                    </div>
                    <div>
                        <Target/>
                        <h1>Setor</h1>
                        <h2>Jorge</h2>
                    </div>
                    <div>
                        <SquareCheckBig/>
                        <h1>Estrutura</h1>
                        <h2>top</h2>
                    </div>
                </div>
            </div>

            <div className={styles.prioritize_area}>
                <div className={styles.prioritize_title}>
                    <CircleAlert color="rgb(214, 42, 42)"/>
                    <h1>Áreas Prioritárias Identificadas</h1>
                </div>

                <ul className={styles.prioritize_list}>
                    <li>
                        <h1>Engajamento de Equipe</h1>
                        <h2>Alta Prioridade</h2>
                    </li>
                    <li>
                        <h1>Gestão de Setores</h1>
                        <h2>Alta Prioridade</h2>
                    </li>
                </ul>
            </div>

            <div className={styles.plans_area}>
                <div className={styles.plans_title}>
                    <Lock color="rgb(199, 21, 21)" width={30} height={30}/>
                    <h1>Adquira o Formulário Completo</h1>
                </div>

                <ul className={styles.plans_benefits}>
                    <li>
                        <CircleCheck color="rgb(199, 21, 21)"/>
                        <h1>É bom</h1>
                    </li>
                    <li>
                        <CircleCheck color="rgb(199, 21, 21)"/>
                        <h1>Pode comprar</h1>
                    </li>
                </ul>

                <div className={styles.plans_buttons}>
                    <NavButton destination={6} buttonStyle={0} content={
                        <>
                            <h1>Adquirir Planos</h1>
                            <ArrowRight/>
                        </>
                    }/>
                    <button className={styles.redo_button}>Refazer Diagnóstico</button>
                </div>
            </div>

            <div className={styles.final_info}>
                <h1>Este é apenas um resumo inicial. O relatório completo contém mais de 15 páginas de análises profundas, insights acionáveis e um roadmap detalhado para transformação organizacional.</h1>
            </div>
        </section>
    )
}