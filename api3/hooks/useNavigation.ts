"use client";

import { useRouter } from "next/navigation";

export function useNavigation(){
     const router = useRouter();

     function navigateToLandingPage(){
          router.push("/")
     }

     function navigateToFormsFirstPart(){
          router.push("/forms/firstPart");
     }

     function navigateToFormsSecondPart(){
          router.push("/forms/SecondPart")
     }

     function navigateToFormsThirdPart(){
          router.push("/forms/ThirdPart")
     }

     function navigateToFormsFourthPart(){
          router.push("/forms/FourthPart")
     }

     function navigateToAiAnswer(){
          router.push("/AiAnswer")
     }

     function navigateToPlans(){
          router.push("/plans")
     }

     return {
          navigateToLandingPage,
          navigateToFormsFirstPart,
          navigateToFormsSecondPart,
          navigateToFormsThirdPart,
          navigateToFormsFourthPart,
          navigateToAiAnswer,
          navigateToPlans
     };
}