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
                         <h3>👋 Bem-vindo ao Questionário da Entrenova!

Agradecemos por dedicar seu tempo para responder a este questionário. Sua participação é essencial para que possamos analisar os dados coletados e elaborar um relatório preciso e personalizado, contribuindo para a tomada de decisões estratégicas.

⚙️ Como funciona:

O preenchimento leva apenas alguns minutos.

Não existem respostas certas ou erradas — buscamos opiniões sinceras e objetivas.

Todas as informações serão tratadas com confidencialidade e utilizadas exclusivamente para fins de análise.</h3>
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