export default function DireçaoFuturo(){
     return(
          <section>
               <div>
                    <h2>Como a visão de futuro é comunicada?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_vision"/>
                              <label htmlFor="">Todos conhecem e entendem.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_vision"/>
                              <label htmlFor="">É conhecida, mas só pela gestão.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_vision"/>
                              <label htmlFor="">Quase não é falada.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_vision"/>
                              <label htmlFor="">Não é comunicada.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Como os líderes conectam pessoas à estratégia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_connection"/>
                              <label htmlFor="">Inspiram e alinham metas claramente.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_connection"/>
                              <label htmlFor="">Tentam alinhar, mas varia muito.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_connection"/>
                              <label htmlFor="">Há pouca conexão.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_connection"/>
                              <label htmlFor="">Não há esforço de alinhamento.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Qual é o papel da inovação no planejamento?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_innovation"/>
                              <label htmlFor="">Prioridade central, com projetos claros.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_innovation"/>
                              <label htmlFor="">Importante, mas sem orçamento.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_innovation"/>
                              <label htmlFor="">Acontece de forma isolada.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_innovation"/>
                              <label htmlFor="">Não é prioridade.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Como as atividades diárias se conectam com a estratégia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_diary"/>
                              <label htmlFor="">Sempre, com clareza.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_diary"/>
                              <label htmlFor="">Às vezes, depende do gestor.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_diary"/>
                              <label htmlFor="">Raramente, não chega claro.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_diary"/>
                              <label htmlFor="">Nunca, cada área segue isolada.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Como a empresa lida com propósito e impacto social?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_social_impact"/>
                              <label htmlFor="">Está no centro das decisões.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_social_impact"/>
                              <label htmlFor="">É importante, mas secundário.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_social_impact"/>
                              <label htmlFor="">Fala-se, mas não se aplica.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_social_impact"/>
                              <label htmlFor="">Não há preocupação.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Quais ferramentas apoiam a estratégia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="DirFut_tools"/>
                              <label htmlFor="">Dashboards, OKRs, planejamentos formais.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_tools"/>
                              <label htmlFor="">Algumas planilhas ou relatórios.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_tools"/>
                              <label htmlFor="">Discussões informais, sem registro contínuo.</label>
                         </li>
                         <li>
                              <input type="radio" name="DirFut_tools"/>
                              <label htmlFor="">Não temos instrumentos claros.</label>
                         </li>
                    </ul>
               </div>
          </section>
     );
}