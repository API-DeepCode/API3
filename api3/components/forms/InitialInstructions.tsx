"use client";

import styles from "./styles/InitialInstructions.module.css"
import { ArrowRight } from "lucide-react";
import { useNavigation } from "@/hooks/Navigation"

export default function InitialInstructions(){
     const { navigateToFormsFirstPart } = useNavigation();

     return(
          <main className="forms-content-size">
               <section className="forms-content-display">
                    <div>
                         <h1 className={styles.hi_message}>Olá! 🖐️</h1>

                         <div className={styles.welcome_message}>
                              <h2 className={styles.main_welcome_message}>Seja bem vindo ao </h2>
                              <h2 className={styles.product_name}>Entrenova AI</h2>
                         </div>
                    </div>

                    <div>
                         <h3>Explicação Lindinha aiai</h3>
                    </div>

                    <div className={styles.continue_button}>
                         <button className="pink-button" onClick={navigateToFormsFirstPart}>
                              <h4>Próximo</h4>

                              <ArrowRight/>
                         </button>
                    </div>
               </section>
          </main>
     );
}