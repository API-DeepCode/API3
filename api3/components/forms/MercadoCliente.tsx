export default function MercadoCliente(){
     return(
          <section>
               <div>
                    <h2>Como a empresa ouve seus clientes?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_listen"/>
                              <label htmlFor="">Temos pesquisa estruturada e contínua.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_listen"/>
                              <label htmlFor="">Fazemos de forma ocasional.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_listen"/>
                              <label htmlFor="">Reagimos só em reclamações.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_listen"/>
                              <label htmlFor="">Não há escuta formal.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Como vendas e atendimento trabalham juntos?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_work_together"/>
                              <label htmlFor="">Colaboram e compartilham informações.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_work_together"/>
                              <label htmlFor="">Trocam parcialmente, com falhas.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_work_together"/>
                              <label htmlFor="">Atuam isolados, sem integração.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_work_together"/>
                              <label htmlFor="">Há conflitos ou competição entre áreas.</label>
                         </li>
                    </ul>
               </div>
               
               <div>
                    <h2>Quando o mercado muda, como a empresa reage?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_react"/>
                              <label htmlFor="">Antecipamos tendências e inovamos rápido.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_react"/>
                              <label htmlFor="">Ajustamos, mas com atraso.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_react"/>
                              <label htmlFor="">Só reagimos a crises.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_react"/>
                              <label htmlFor="">Não temos adaptação estruturada.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Como é o acompanhamento de metas comerciais?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_goals"/>
                              <label htmlFor="">Claro, transparente e frequente.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_goals"/>
                              <label htmlFor="">Existe, mas pouco revisado.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_goals"/>
                              <label htmlFor="">Informal, depende do gestor.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_goals"/>
                              <label htmlFor="">Não temos acompanhamento.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>O diferencial competitivo está claro?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_competitive"/>
                              <label htmlFor="">Sim, é comunicado e reconhecido.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_competitive"/>
                              <label htmlFor="">Existe, mas pouco divulgado.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_competitive"/>
                              <label htmlFor="">É incerto, varia por área.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_competitive"/>
                              <label htmlFor="">Não está claro.</label>
                         </li>
                    </ul>
               </div>

               <div>
                    <h2>Quais ferramentas apoiam mercado & clientes?</h2>

                    <ul>
                         <li>
                              <input type="radio" name="MerCli_market_client"/>
                              <label htmlFor="">CRM, BI e pesquisas estruturadas.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_market_client"/>
                              <label htmlFor="">Algumas planilhas e relatórios.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_market_client"/>
                              <label htmlFor="">Feedbacks informais, dados dispersos.</label>
                         </li>
                         <li>
                              <input type="radio" name="MerCli_market_client"/>
                              <label htmlFor="">Não há recursos específicos.</label>
                         </li>
                    </ul>
               </div>
          </section>
     );
}