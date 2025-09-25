"use client";

import { useRouter } from "next/navigation";

export function useNavigation(){
     const router = useRouter();

     // Navegação entre as páginas dos formulários

     function navigateToFormsHome(){
          router.push("/")
     }

     function navigateToFormsFirstPart(){
          router.push("/forms/firstPart");
     }

     function navigateToFormsSecondPart(){
          router.push("/forms/secondPart")
     }

     function navigateToFormsThirdPart(){
          router.push("/forms/thirdPart")
     }

     function navigateToFormsFourthPart(){
          router.push("/forms/fourthPart")
     }

     function navigateToAiAnswer(){
          router.push("/ai")
     }

     return {
          navigateToFormsHome,
          navigateToFormsFirstPart,
          navigateToFormsSecondPart,
          navigateToFormsThirdPart,
          navigateToFormsFourthPart,
          navigateToAiAnswer
     };
}