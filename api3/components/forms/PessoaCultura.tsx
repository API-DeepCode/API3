export default function PessoaCultura(){
     return(
          <section>
               <div>
                    <h2>Como a comunicação acontece no dia a dia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-comunicaçao"/>
                              <label htmlFor="">Todos têm clareza e acesso fácil às informações.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-comunicaçao"/>
                              <label htmlFor="">Funciona na maior parte do tempo, mas com algumas falhas.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-comunicaçao"/>
                              <label htmlFor="">Normalmente só em reuniões formais ou quando há problemas.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-comunicaçao"/>
                              <label htmlFor="">É confusa, cada líder comunica de um jeito.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Como você descreveria o estilo de liderança predominante?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-liderança"/>
                              <label htmlFor="">Engajam e dão autonomia.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-liderança"/>
                              <label htmlFor="">São bons, mas variam conforme o líder.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-liderança"/>
                              <label htmlFor="">Centralizam muito as decisões.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-liderança"/>
                              <label htmlFor="">Raramente exercem liderança ativa.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Quando surgem problemas, como os times costumam agir?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-problemas"/>
                              <label htmlFor="">Trazem ideias e resolvem juntos.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-problemas"/>
                              <label htmlFor="">Resolvem, mas de forma reativa.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-problemas"/>
                              <label htmlFor="">Dependem sempre do gestor para decidir.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-problemas"/>
                              <label htmlFor="">Evitam mudanças e preferem manter como está.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Como está organizada a rotina de trabalho?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-rotina"/>
                              <label htmlFor="">Papéis e prioridades são claros.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-rotina"/>
                              <label htmlFor="">Há certa clareza, mas faltam recursos ou prazos realistas.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-rotina"/>
                              <label htmlFor="">Muitas vezes é confusa, com foco em “apagar incêndios”.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-rotina"/>
                              <label htmlFor="">Não há organização definida, cada um faz do seu jeito.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Até que ponto os valores da empresa estão presentes no dia a dia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-valores"/>
                              <label htmlFor="">Claros e vividos na prática.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-valores"/>
                              <label htmlFor="">Conhecidos, mas pouco aplicados.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-valores"/>
                              <label htmlFor="">Quase não são lembrados, só em discursos.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-valores"/>
                              <label htmlFor="">Não há clareza sobre os valores.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Quais ferramentas apoiam pessoas & cultura?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-ferramentas"/>
                              <label htmlFor="">Temos plataforma estruturada de desenvolvimento.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentas"/>
                              <label htmlFor="">Algumas iniciativas digitais, mas sem consistência.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentas"/>
                              <label htmlFor="">Recursos informais (planilhas, grupos de mensagens).</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentas"/>
                              <label htmlFor="">Não temos ferramentas definidas.</label>
                         </li>
                    </ul>
               </div>
          </section>
     );
}