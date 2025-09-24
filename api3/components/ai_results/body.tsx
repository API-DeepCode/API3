"use client";

import styles from "./styles/Pages.module.css"
import AiAnswer from "@/components/ai_results/AiPage";

export default function BodyAi(){
    return(
        <main className = "forms-content-size">
            <section className = "forms-content-display w-full">
                <AiAnswer/>
            </section>
        </main>
    )
}