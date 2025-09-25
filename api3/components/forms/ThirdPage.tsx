"use client";

import styles from "./styles/Pages.module.css"
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigation } from "@/hooks/Navigation";
import React, { useState } from "react";
import PessoaCultura from "./PessoaCultura";
import EstruturaOperaçoes from "./EstruturaOperaçoes";
import MercadoCliente from "./MercadoCliente";
import DireçaoFuturo from "./DireçaoFuturo";

export default function ThirdPage(){
     const { navigateToFormsSecondPart, navigateToFormsFourthPart } = useNavigation()
     const [activeDimension, setActiveDimension] = useState("");
     const [ option, setOptions ] = useState(true);
     const [selectedDimensions, setSelectedDimensions] = useState<string[]>([]);

     const availableDimensions = [
          {valor: "PesCult", label: "Pessoas & Cultura"},
          {valor: "EstOpe", label: "Estrutura & Operações"},
          {valor: "MerCli", label: "Mercado & Cliente"},
          {valor: "DirFut", label: "Direção & Futuro"},
     ]

     function limitDimension(e: React.ChangeEvent<HTMLInputElement>){
          const { value, checked} = e.currentTarget;

          setSelectedDimensions((prev) => {
               if (checked && prev.length < 3) {
                    return [...prev, value];
               } else{
                    return prev.filter((item) => item !== value);
               }
          })
     }

     const hasDimension = selectedDimensions.length > 0;

     return(
          <main className="forms-content-size">
               <section className="forms-content-display">
                    <h1 className={styles.title}>Parte 3 - Mini-Diagnóstico das Dimensões</h1>

                    <form action="" className="forms-questions">
                         <div className="forms-questions-display">
                              {option ? (
                                   <div className={styles.thirdpage_questionary}>
                                        <div>
                                             <h2>Selecione no máximo 3 dimensões</h2>

                                             <ul>
                                                  {availableDimensions.map((dimension) => (
                                                       <li key={dimension.valor}>
                                                            <input type="checkbox"
                                                            value={dimension.valor}
                                                            name="dimensionSelector"
                                                            onChange={limitDimension}
                                                            checked={selectedDimensions.includes(dimension.valor)}
                                                            disabled={!selectedDimensions.includes(dimension.valor) && selectedDimensions.length >= 3}/>
                                                            <label htmlFor="">{dimension.label}</label>
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>

                                        <div className={styles.placeholder_button}>
                                             <button className="pink-button"
                                             disabled={!hasDimension} onClick={() => setOptions(false)}>Finalizar Escolhas</button>
                                        </div>
                                   </div>
                              ) : (
                                   <div className={styles.thirdpage_navbuttons_area}>
                                        {selectedDimensions.includes("PesCult") && (
                                             <button type="button" onClick={() => setActiveDimension("PesCult")}>
                                                  Pessoas & Cultura
                                             </button>
                                        )}

                                        {selectedDimensions.includes("EstOpe") && (
                                             <button type="button" onClick={() => setActiveDimension("EstOpe")}>
                                                  Estrutura & Operações
                                             </button>
                                        )}

                                        {selectedDimensions.includes("MerCli") && (
                                             <button type="button" onClick={() => setActiveDimension("MerCli")}>
                                                  Mercado & Clientes
                                             </button>
                                        )}

                                        {selectedDimensions.includes("DirFut") && (
                                             <button type="button" onClick={() => setActiveDimension("DirFut")}>
                                                  Direção & Futuro
                                             </button>
                                        )}
                                   </div>
                              )}

                              {activeDimension === "PesCult" && (
                                   <PessoaCultura/>
                              )}

                              {activeDimension === "EstOpe" && (
                                   <EstruturaOperaçoes/>
                              )}

                              {activeDimension === "MerCli" && (
                                   <MercadoCliente/>
                              )}

                              {activeDimension === "DirFut" && (
                                   <DireçaoFuturo/>
                              )}
                         </div>
                    </form>

                    <div className={styles.continue_button}>
                    <div className={styles.navigation_buttons}>
                         <button className="pink-button" onClick={navigateToFormsSecondPart}>
                              <ArrowLeft/>

                              <h4>Voltar</h4>
                         </button>

                         <button className="pink-button" onClick={navigateToFormsFourthPart}>
                              <h4>Próximo</h4>

                              <ArrowRight/>
                         </button>
                    </div>
                    </div>
               </section>
          </main>
     );
}