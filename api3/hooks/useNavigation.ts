"use client";

import { useRouter } from "next/navigation";

export function useNavigation(){
     const router = useRouter();

     function navigateToLandingPage(){
          router.push("/")
     }

     function navigateToFormsFirstPart(){
          router.push("/Forms/FirstPart");
     }

     function navigateToFormsSecondPart(){
          router.push("/Forms/SecondPart")
     }

     function navigateToFormsThirdPart(){
          router.push("/Forms/ThirdPart")
     }

     function navigateToFormsFourthPart(){
          router.push("/Forms/FourthPart")
     }

     function navigateToAiAnswer(){
          router.push("/AiAnswer")
     }

     return {
          navigateToLandingPage,
          navigateToFormsFirstPart,
          navigateToFormsSecondPart,
          navigateToFormsThirdPart,
          navigateToFormsFourthPart,
          navigateToAiAnswer
     };
}