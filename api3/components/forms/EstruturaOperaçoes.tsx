export default function EstruturaOperaçoes(){
     return(
          <section>
               <div>
                    <h2>Como é a troca de informações entre áreas?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-informaçoes"/>
                              <label htmlFor="">Integrada e frequente.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-informaçoes"/>
                              <label htmlFor="">Funciona em parte, com alguns ruídos.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-informaçoes"/>
                              <label htmlFor="">Depende de reuniões formais.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-informaçoes"/>
                              <label htmlFor="">As áreas trabalham isoladas.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Como os gestores lidam com delegação?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-delegaçao"/>
                              <label htmlFor="">Delegam com clareza e confiança.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-delegaçao"/>
                              <label htmlFor="">Delegam, mas acompanham em excesso.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-delegaçao"/>
                              <label htmlFor="">Raramente delegam.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-delegaçao"/>
                              <label htmlFor="">Não delegam, concentram tudo.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Quando processos falham, o que acontece?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-processos"/>
                              <label htmlFor="">As equipes propõem melhorias rapidamente.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-processos"/>
                              <label htmlFor="">Há ajustes, mas com demora.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-processos"/>
                              <label htmlFor="">Só a gestão revisa processos.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-processos"/>
                              <label htmlFor="">Nada muda, seguimos com os problemas.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Quanta autonomia operacional os colaboradores têm?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-autonomia"/>
                              <label htmlFor="">Alta, com responsabilidade.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-autonomia"/>
                              <label htmlFor="">Alguma, mas dependem de aprovações.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-autonomia"/>
                              <label htmlFor="">Pouca, com muito controle.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-autonomia"/>
                              <label htmlFor="">Nenhuma, tudo vem da gestão.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Qual é a relação da empresa com padrões de qualidade?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-qualidade"/>
                              <label htmlFor="">Qualidade é prioridade e está no DNA.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-qualidade"/>
                              <label htmlFor="">Importante, mas não sempre seguida.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-qualidade"/>
                              <label htmlFor="">Depende da cobrança externa.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-qualidade"/>
                              <label htmlFor="">Não há padrão definido.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Quais ferramentas apoiam as operações do dia a dia?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="PesCult-ferramentasOper"/>
                              <label htmlFor="">Sistemas integrados (ERP, CRM, dashboards).</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentasOper"/>
                              <label htmlFor="">Algumas ferramentas digitais, mas sem integração.</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentasOper"/>
                              <label htmlFor="">Recursos básicos (planilhas, controles manuais).</label>
                         </li>
                         <li>
                              <input type="radio" name="PesCult-ferramentasOper"/>
                              <label htmlFor="">Não há ferramentas.</label>
                         </li>
                    </ul>
               </div>
          </section>
     );
}