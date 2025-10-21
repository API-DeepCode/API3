// Caminho: api3/app/page.tsx

"use client"

import { Bot, ArrowDown, UserRound, Goal, PencilRuler, ChartNoAxesCombined, CircleCheck } from "lucide-react";
import styles from "./Home.module.css"
import NavButton from "@/components/globals/NavButton"
import Link from "next/link"; // Adicione este import

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

                <div className={styles.buttonContainer}>
                    <NavButton destination={1} buttonStyle={0} content={
                        <p>Preencher o Formulário</p>
                    }/>
                    <Link href="/plans" className={styles.secondaryButton}>
                        <p>Ver Planos</p>
                    </Link>
                </div>
            </div>


            <div className={styles.information}>
                <div className={styles.information_title}>
                    <h1>Saiba Mais sobre o Formulário</h1>

                    <ArrowDown/>
                </div>

                <section className={styles.main_content}>
                    <div className={styles.parts}>
                        <div>
                            <UserRound className={styles.part_icon}/>

                            <h1>Parte 1: Perfil</h1>

                            <p>Parâmetros básicos da sua empresa, setor, porte, localização</p>
                        </div>

                        <div>
                            <Goal className={styles.part_icon}/>

                            <h1>Parte 2: Objetivos</h1>

                            <p>Principais desafios, objetivos</p>
                        </div>

                        <div>
                            <PencilRuler className={styles.part_icon}/>

                            <h1>Parte 3: Dimensões</h1>

                            <p>Dividida em 4 dimensões, pessoas e cultura, estrutura e operações, mercado e clientes e direção e futuro</p>
                        </div>

                        <div>
                            <ChartNoAxesCombined className={styles.part_icon}/>

                            <h1>Parte 4: Inovação</h1>

                            <p>Investimento, inovação e urgência</p>
                        </div>
                    </div>

                    <div className={styles.dimension}>

                    </div>

                    <div className={styles.objective}>
                        <h1>O que Você vai Descobrir</h1>

                        <ul>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Principais gargalos operacionais
                            </li>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Oportunidades de melhoria imediata
                            </li>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Pontos fortes da sua organização
                            </li>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Áreas críticas que precisam de atenção
                            </li>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Comparativo com empresas do seu setor
                            </li>
                            <li>
                                <CircleCheck color="#f51966"/>
                                Recomendações personalizadas de ação
                            </li>
                        </ul>
                    </div>

                    <div className={styles.forms}>
                        <h1>Pronto para Transformar sua Empresa?</h1>

                        <h2>Leva apenas 10 minutos para completar o diagnóstico e receber insights valiosos</h2>

                        <NavButton destination={1} buttonStyle={0} content={
                            <p>Iniciar o diagnóstico</p>
                        }/>
                    </div>
                </section>
            </div>
        </main>
    );
}