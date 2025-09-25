"use client";

import styles from "./styles/Pages.module.css"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigation } from "@/hooks/Navigation";

export default function SecondPage(){
     const { navigateToFormsFirstPart, navigateToFormsThirdPart } = useNavigation()

     return(
          <main className="forms-content-size">
               <section className="forms-content-display">
                    <h1 className={styles.title}>Parte 2 - Desafios e Objetivos</h1>

                    <form action="" className="forms-questions">
                         <div className="forms-questions-display">
                              <div>
                                   <h2>Quando você pensa no desenvolvimento da sua equipe, quais aspectos considera mais desafiadores hoje?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Comunicação & Relacionamento (clareza, feedback, alinhamento)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Liderança & Colaboração (engajamento, delegação, gestão de conflitos)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Criatividade & Resolução de Problemas (inovação, adaptação)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Autogestão & Produtividade (tempo, autonomia, foco, bem-estar)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Cultura & Valores (cultura organizacional viva, propósito, ESG)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="aspec_desafiador"/>
                                             <label htmlFor="">Outro:</label>
                                             <input type="text"/>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Se tivesse que resumir, quais seriam os maiores resultados que você gostaria de alcançar com um programa de desenvolvimento humano?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="wanted_result"/>
                                             <label htmlFor="">Fortalecer Pessoas & Cultura (engajamento, bem-estar, liderança próxima)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="wanted_result"/>
                                             <label htmlFor="">Melhorar Estrutura & Operações (autonomia, eficiência, produtividade)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="wanted_result"/>
                                             <label htmlFor="">Aprimorar Mercado & Clientes (posicionamento, atendimento, diferenciação)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="wanted_result"/>
                                             <label htmlFor="">Consolidar Direção & Futuro (visão estratégica clara, inovação, ESG)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="wanted_result"/>
                                             <label htmlFor="">Outro:</label>
                                             <input type="text"/>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </form>

                    <div className={styles.navigation_buttons}>
                         <button className="pink-button" onClick={navigateToFormsFirstPart}>
                              <ArrowLeft/>

                              <h4>Voltar</h4>
                         </button>

                         <button className="pink-button" onClick={navigateToFormsThirdPart}>
                              <h4>Próximo</h4>

                              <ArrowRight/>
                         </button>
                    </div>
               </section>
          </main>
     );
}