import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import InitialInstructions from "@/components/forms/InitialInstructions";

export default function Home() {
     return(
          <>
               <link rel="icon" href="https://entrenova.com.br/wp-content/uploads/2025/02/favicon_novo.svg"/>

               <Header/>

               <InitialInstructions/>

               <Footer/>
          </>
     );
}