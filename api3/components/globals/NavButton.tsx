import { useNavigation } from "@/hooks/useNavigation";
import React from "react";
import styles from "@/components/styles/NavButton.module.css"

type navDestination = 0 | 1 | 2 | 3 | 4 | 5;
type buttonStyle = 0 | 1

interface props{
    destination: navDestination;
    buttonStyle: buttonStyle;
    content: React.ReactNode;
}

export default function NavButton({ destination, buttonStyle, content }: props){
    const nav = useNavigation();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        switch(destination){
            case 0:
                nav.navigateToLandingPage();
                break;
            case 1:
                nav.navigateToFormsFirstPart();
                break;
            case 2:
                nav.navigateToFormsSecondPart();
                break;
            case 3:
                nav.navigateToFormsThirdPart();
                break;
            case 4:
                nav.navigateToFormsFourthPart();
                break;
            case 5:
                nav.navigateToAiAnswer();
        };
    }
    
    let buttonClass = "";
    switch (buttonStyle){
        case 0:
            buttonClass = styles.pink_button;
            break;
        case 1:
            buttonClass = styles.pink_button_unavailable;
            break;
    }

    return(
        <button className={buttonClass}
        onClick={buttonStyle === 0 ? handleClick : undefined}>
            {content}
        </button>
    );
}