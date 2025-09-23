"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useNavigation } from "@/hooks/Navigation"

export default function HeaderReturn(){
     const { navigateToFormsHome } = useNavigation();

     return(
          <header>
               <Image className="header-logo"
                    src="https://entrenova.com.br/wp-content/uploads/2025/02/logo_color.svg"
                    width={250}
                    height={80}
                    alt="Logo Entrenova"
               />

               <div className="return-header">
                    <button onClick={navigateToFormsHome}>
                         <ArrowLeft/>

                         <h1>Tela principal</h1>
                    </button>
               </div>
          </header>
     );
}