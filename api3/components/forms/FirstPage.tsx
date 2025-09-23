"use client";

import { ArrowRight } from "lucide-react";
import styles from "./styles/Pages.module.css"
import { useNavigation } from "@/hooks/Navigation";

export default function FirstPage(){
     const { navigateToFormsSecondPart } = useNavigation();

     return(
          <main className="forms-content-size">
               <section className="forms-content-display">
                    <h1 className={styles.title}>Parte 1 - Perfil da Empresa</h1>

                    <form action="" className="forms-questions">
                         <div className="forms-questions-display">
                              <div>
                                   <h2>Setor principal da sua empresa</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Indústria</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Serviços</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Comércio/Varejo</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Tecnologia/Startups</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Educação/Cultura</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="setor"/>
                                             <label htmlFor="">Outro:</label>
                                             <input type="text"/>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Número de colabores</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="colaboradores"/>
                                             <label htmlFor="">Até 10</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="colaboradores"/>
                                             <label htmlFor="">Entre 11 e 30</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="colaboradores"/>
                                             <label htmlFor="">Entre 30 e 100</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="colaboradores"/>
                                             <label htmlFor="">Acima de 100</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="colaboradores"/>
                                             <label htmlFor="">Acima de 500</label>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Porte da empresa</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="porte"/>
                                             <label htmlFor="">Startup</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="porte"/>
                                             <label htmlFor="">PME (Pequena/Média Empresa)</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="porte"/>
                                             <label htmlFor="">Grande Empresa</label>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h2>Localização</h2>

                                   <ul>
                                        <li>
                                             <input type="radio" name="localização"/>
                                             <label htmlFor="">Região Sudeste</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="localização"/>
                                             <label htmlFor="">Região Sul</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="localização"/>
                                             <label htmlFor="">Região Nordeste</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="localização"/>
                                             <label htmlFor="">Região Norte</label>
                                        </li>
                                        <li>
                                             <input type="radio" name="localização"/>
                                             <label htmlFor="">Região Centro-Oeste</label>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </form>

                    <div className={styles.single_navigation_button}>
                         <button className="pink-button" onClick={navigateToFormsSecondPart}>
                              <h4>Próximo</h4>

                              <ArrowRight/>
                         </button>
                    </div>
               </section>
          </main>
     );
}