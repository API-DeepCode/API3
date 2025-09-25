"use client";

import styles from "./styles/Pages.module.css"
import { ArrowLeft, Check } from "lucide-react";
import { useNavigation } from "@/hooks/Navigation";

export default function SecondPage(){
     const { navigateToFormsThirdPart, navigateToAiAnswer } = useNavigation()

     return(
          <main className="forms-content-size">
               <section className="forms-content-display">
                    <h1 className={styles.title}>Parte 4 - Investimento, Inovação & Urgência</h1>

                    <form action="" className="forms-questions">
                         <div className="forms-questions-display">
                              <div>
                                   <h2>Qual a faixa de investimento disponível para treinamentos atualmente?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="investment"/>
                                             <label htmlFor="">Até R$ 10 mil</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="investment"/>
                                             <label htmlFor="">Entre R$ 10 mil e R$ 50 mil</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="investment"/>
                                             <label htmlFor="">Acima de R$ 50 mil</label>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Quem geralmente decide sobre a contratação de treinamentos?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="responsable_hiring"/>
                                             <label htmlFor="">CEO / Diretor</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="responsable_hiring"/>
                                             <label htmlFor="">RH / Treinamento e Desenvolvimento</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="responsable_hiring"/>
                                             <label htmlFor="">Marketing / Comunicação</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="responsable_hiring"/>
                                             <label htmlFor="">Outro:</label>
                                             <input type="text"/>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Vocês preferem treinamentos:</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="type_training"/>
                                             <label htmlFor="">Presenciais</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="type_training"/>
                                             <label htmlFor="">Online</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="type_training"/>
                                             <label htmlFor="">Híbridos</label>
                                        </li>
                                   </ul>
                              </div>

                              <div className={styles.fourthpage_level_question}>
                                   <h2>De 1 a 5, como você classificaria a abertura da sua empresa para ideias inovadoras e métodos criativos de aprendizagem?</h2>

                                   <ul>
                                        <li><input type="number" min={1} max={5}/></li>
                                   </ul>
                              </div>

                              <div className={styles.fourthpage_level_question}>
                                   <h2>De 1 a 5, o quanto você considera importante:</h2>

                                   <ul>
                                        <li>
                                             <input type="number" name="important_development" min={1} max={5}/>
                                             <label htmlFor="">Investir em desenvolvimento profissional dos colaboradores.</label>
                                        </li>
                                        <li>
                                             <input type="number" name="important_softskill" min={1} max={5}/>
                                             <label htmlFor="">Desenvolver soft skills (comunicação, liderança, criatividade, autogestão).</label>
                                        </li>
                                        <li>
                                             <input type="number" name="important_encourage" min={1} max={5}/>
                                             <label htmlFor="">Incentivar cultura, arte e hobbies.</label>
                                        </li>
                                        <li>
                                             <input type="number" name="important_impact" min={1} max={5}/>
                                             <label htmlFor="">Reconhecer impacto do desenvolvimento humano na performance da empresa.</label>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Vocês já implementaram projetos inovadores em treinamentos anteriores?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="inovational_project"/>
                                             <label htmlFor="">Sim</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="inovational_project"/>
                                             <label htmlFor="">Não</label>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Em quanto tempo vocês desejam iniciar o treinamento?</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="time_start"/>
                                             <label htmlFor="">Imediatamente</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="time_start"/>
                                             <label htmlFor="">Em até 3 meses</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="time_start"/>
                                             <label htmlFor="">em 6 meses ou mais</label>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </form>

                    <div className={styles.navigation_buttons}>
                         <button className="pink-button" onClick={navigateToFormsThirdPart}>
                              <ArrowLeft/>

                              <h4>Voltar</h4>
                         </button>

                         <button className="pink-button" onClick={navigateToAiAnswer}>
                              <h4>Enviar</h4>

                              <Check/>
                         </button>
                    </div>
               </section>
          </main>
     );
}