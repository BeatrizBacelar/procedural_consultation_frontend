### Decisões tomadas e motivação

A arquitetura utilizada para organização das pastas/arquivos foi escolhida com base nos projetos da Rocketseat considerando, principalmente, a facilidade de visualização da função de cada arquivo para o projeto e manutenção. 
Isso se dá porque com essa estruturação se for necessário fazer uma manutenção em algum tipo de serviço a pasta service será o primeiro destino. Para editar estilização os componentes das páginas principais possuem seus arquivos próprios, em caso de funções que possam ser reutilizadas em outros lugares temos as utils e components também reutilizáveis (elementos de formulário, button) encontram-se em components.

### Testes

Foram feitos testes considerando possíveis variações nos filtros: tribunal, tribunal e número completo do processo, número do processo, tribunal e número parcial do processo.

Como os detalhes do processo e partes envolvidas só podem ser visualizados em uma tela com tamanho maior que 768 prezando pela boa visualização das informações disposta, foram realizados teste com diferentes tamanhos de tela para observar o comportamento do ComponentRight e dos elementos do layout.

### Possíveis implementações

Algo que implementaria com mais tempo seriam os styled components e utilização de constantes. O styled components ajudaria a trazer padronização para o projeto por observaria components que se repetem quanto a estilização e criaria para que fossem reaproveitados. Além disso, uma estruturação com nome específicos de componentes traz maior clareza ao código do que div com o seu className apenas. Quanto a constantes, segue a questão de padronização. Uma busca por valores muito utilizados ao decorrer da aplicação armazenados em um ou mais arquivos de constantes possibilitaria organização e manutenção mais eficiente tendo em vista que esses valores seriam alterados em apenas um local e aplicado em todo o projeto. 
