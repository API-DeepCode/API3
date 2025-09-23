import Image from "next/image";

export default function Header(){
     return(
          <header>
               <Image className="header-logo"
                    src="https://entrenova.com.br/wp-content/uploads/2025/02/logo_color.svg"
                    width={250}
                    height={80}
                    alt="Logo Entrenova"
               />

               <ul>
                    <li><a href="https://entrenova.com.br/#inicio">Início</a></li>
                    <li><a href="https://entrenova.com.br/#quem-somos">Quem Somos</a></li>
                    <li><a href="https://entrenova.com.br/#estrategia">Estratégia</a></li>
                    <li><a href="https://entrenova.com.br/#servicos">Serviços</a></li>
                    <li><a href="https://entrenova.com.br/#portfolio">Portfólio</a></li>
                    <li><a href="https://entrenova.com.br/#contato">Contato</a></li>
               </ul>

               <div className="socialMedia">
                    <button>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="#ffffff" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                         </svg>
                    </button>

                    <button>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="#ffffff" d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/>
                         </svg>
                    </button>
               </div>
          </header>
     );
}