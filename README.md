# Projeto SouFiscal

## Introdução

Bem vindo ao Projeto SouFiscal.

É notória a dificuldade, em convênios públicos, de se verificar a existência de empresas, constatar obras não realizadas ou com baixa qualidade e detectar desvios de produtos ou serviços para locais ou obras de terceiros.

Como é praticamente impossível o estado acompanhar todos os convênios celebrados, é fundamental contar com a participação do cidadão na denúncia de possíveis fraudes.

A proposta deste projeto é criar um ambiente de colaboração para cidadãos interessados em analisar dados de convênios e publicar indícios de fraudes.

Este projeto foi inscrito no Concurso LabPi Hackathon sobre Participação no Combate à Corrução, realizado em abril de 2016 pelo Ministério da Justiça (MJ) e outras instituições.

Caso queira proceder com a instalação do protótipo Android para testes, favor seguir instruções que constam no fim desta página ([seção Instalação de Protótipo Android](https://github.com/agnoldo/soufiscal#instalação-de-protótipo-android)).

O  vídeo de apresentação do projeto [já está no ar no Youtube](https://youtu.be/Yp8CIDDS9Ns).


## Problema ou Oportunidade

### Contexto

De acordo com [Edital publicado no D.O.U. em 29/02/2016](http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?jornal=3&pagina=95&data=29/02/2016), "O Concurso de Aplicativos para enfrentamento da corrupção, promovido pelo Ministério da Justiça (MJ) e seus parceiros institucionais, (...), é voltado a representantes da sociedade civil, visando a envolvê-la na execução de políticas públicas realizadas por meio de transferências, facilitando o entendimento acerca de dados a elas relacionados e a fiscalização dessa execução de modo colaborativo entre Estado e sociedade."

Neste sentido e de acordo com a seção 3 da [página Edital e orientações - LabPi/MJ](http://justica.gov.br/Hackathon%20-%20LabPi%20/labpi-editais), o concurso pretende induzir a proposição de ideias e o desenvolvimento de aplicativos móveis voltados a:

- Tornar informação acessível ao cidadão;
- Promover participação social na fiscalização;
- Permitir que a informação coletiva ajude o Estado.

![Ilustração site MJ](http://justica.gov.br/desafioslabpi.png)

Existem inúmeros problemas relacionados ao combate à corrupção. Dentre eles, a cartilha "O Combate à Corrupção nas Prefeituras do Brasil", elaborada pela AMARRIBO, destaca:

- **Constatação da Existência Física de Empresas Contratadas**: permite checar se uma empresa é "fantasma", o que é bastante comum em casos de fraude ao herário. Para isto normalmente é necessário ir ao endereço registrado e averiguar se a empresa lá se encontra. Caso suas instalações não sejam encontradas, deve-se verificar nas suas imediações se a empresa já esteve instalada no local. O registro fotográfico pode ser útil como prova documental;

- **Documentação de Indícios de Fraudes e Obtenção de Provas**: permite obter e registrar indícios ou provas de irregularidades e, a partir delas, motivar o Ministério Público Estadual ou Federal a, em sua atuação na defesa dos direitos do cidadão, iniciar uma investigação. A cartilha comenta que "a melhor maneira de motivar as autoridades judiciais no combate à corrupção é pela apresentação de fatos comprovados e consistentes. Quando a Promotoria e o judiciário se mostram ativos na defesa do interesse público, o processo flui e o objetivo de afastar e punir os corruptos é atingido";

- **Mobilização Popular**: é comum o pensamento entre a população de que a corrupção é algo que existe naturalmente e que não pode ser completamente erradicado. Isto se dá, em parte, por causa do histórico brasileiro de dificuldade em se enfrentar o problema. No entanto é fundamental a participação popular tendo em vista, entre outras coisas, a impossibilidade prática de o governo ser onisciente e onipresente. Além disso, a participação popular aumenta sensivelmente o grau de politização e o senso de empoderamento e propriedade do público com relação à sua comunidade e, em última análise, ao país.


### Proposta

O projeto SouFiscal pretende promover a participação popular por meio da criação de uma rede de acompanhamento e investigação de obras públicas. Para isto, usará os dados do Portal de Convênios do Governo Federal (SICONV) para listar obras públicas em curso, apresentar seus dados para escrutínio e permitir aos cidadãos colaborarem na obtenção de vestígios de fraudes.

A ideia principal é engajar o cidadão de duas formas: facilitando o acesso a dados relativos a convênios, obras, compras e serviços e permitindo a sua atuação, quando desejado, como fiscal voluntário a serviço do estado e em prol do combate à corrupção.

O trabalho de fiscal voluntário poderá ser feito tanto no escopo de um convênio específico, alvo de interesse de um cidadão, quanto por localização geográfica, situação em que o fiscal voluntário simplesmente identifica diligências (tarefas) a serem realizadas, por exemplo, nas proximidades de sua casa, escola ou local de trabalho. Ou seja, um fiscal voluntário pode, por exemplo, passar em frente a um endereço para checar a existência de uma empresa cumprindo uma diligência solicitada por outra pessoa.

Tanto o cumprimento de diligências quanto a participação em discussões por meio de comentários geram pontuação para os usuários, convertida em medalhas virtuais e registros digitais de participação. Quadros com a classificação de usuários (ranking) serão implementados como forma de valorizar a participação. Outras técnicas de *gamificação* também podem ser aplicadas como forma de estimular o engajamento dos usuários.

Por questões de privacidade e segurança, a ferramenta permitirá, opcionalmente, a submissão de dados de forma anônima. Desta forma, mesmo pessoas muito próximas de crimes em andamento poderão expor dados, vestígios e até contribuir para a produção de provas com valor jurídico sem colocar em risco sua segurança e de seus entes próximos.


## Características

A solução a ser desenvolvida deve ser composta por dois componentes, a saber:

- aplicativo móvel, desenvolvido inicialmente para as plataformas Android e iOS;
- site web responsivo.

O aplicativo móvel destina-se a disseminar informações sobre convênios, obras, compras e serviços e, em especial, viabilizar o trabalho de campo dos fiscais voluntários na investigação de fraudes que envolvam atos e processos públicos. De forma complementar, o site web destina-se a mesclar as informações de convênios com as informações coletadas por fiscais voluntários de forma visualmente poderosa e agradável, com fácil integração com redes sociais e órgãos públicos relacionados ao controle externo e à investigação de fraudes.

O funcionamento básico do aplicativo móvel será o seguinte:

- ao entrar na ferramenta, é possível entrar com usuário e senha ou criar usuário anônimo, por email ou conexão com redes sociais;

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_login.png" width="300px" />

- na tela de convênios e obras, o usuário pode navegar por convênios e obras em sua região por meio de mapa ou busca geográfica, ambos utilizando a sua localização corrente. Além disso, também pode procurar por convênios usando dados conhecidos como área, convenente e proponente;

#### Navegação

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_navegacao_geral.png" width="300px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_navegacao_brasil.png" width="300px" />

#### Busca Textual

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_busca_textual.png" width="300px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_busca_textual_resultado.png" width="300px" />

- em cada convênio, o usuário pode analisar dados do SICONV como prazos de obra, dispêndio de recursos e empenhos realizados. Também pode adicionar fotos, vídeos ou comentários sobre o convênio, normalmente relacionados a indícios de fraudes. Outro recurso interessante é a linha do tempo, que mostra eventos relacionados ao convênio em face. Finalmente, o usuário pode solicitar tarefa a outros usuários ou pedir para "Acompanhar" o convênio, o que faz com que tal convênio tenha um atalho gravado na tela "Em Acompanhamento";

#### Convênio

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_convenio_geral2.png" width="300px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_convenio_linha_tempo.png" width="300px" />

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_convenio_todos1.png" width="300px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_convenio_todos2.png" width="300px" />

- quando o usuário está acompanhando um convênio, ele recebe notificações sobre ocorrências registradas neste convênio. Além disso, pode fazer comentários sobre o convênio, enviar fotos, vídeos e gravações de áudio relacionadas a obras, compras e serviços e até mesmo solicitar o apoio de terceiros (fiscais voluntários) na realização de diligências, que normalmente incluem idas a um local para constatar o progresso de uma obra ou a existência física de uma empresa;

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_convenio_solicitar_tarefa.png" width="300px" />

- por meio da tela "Tarefas Disponíveis", qualquer usuário pode atuar como fiscal voluntário, realizando diligências pendentes em sua região. As tarefas são listadas nominalmente ou visualizadas geograficamente em um mapa. Caso seja viável, ele pode realizar uma diligência utilizando a câmera ou o gravador de seu dispositivo móvel, em seguida submetendo eletronicamente o resultado ao site do projeto. Se o usuário tiver conexão à internet ativa no momento da realização da diligência, o resultado pode receber assinatura digital e carimbo do tempo, o que, em conjunto com a informação geográfica (no caso de foto e vídeo), pode até mesmo permitir o uso oficial da evidência em processo judicial;

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_tarefas_disponiveis.png" width="280px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_tarefas_disponiveis_mapa.png" width="280px" />&nbsp;<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_tarefas_realizar.png" width="280px" />

- no quadro Comunidade, o usuário poderá ver o seu ranking (baseado na sua atividade na ferramenta por meio de comentários e diligências) e os usuários em destaque na sua região e em todo o país. Também poderá ver suas medalhas e certificados de participação como fiscal voluntário;

<img src="https://raw.githubusercontent.com/agnoldo/soufiscal/master/img/tela_comunidade.png" width="300px" />

- futuramente todos os comentários sobre convênios analisados poderão ser visualizados por toda a comunidade de usuários. A partir da ferramenta qualquer usuário poderá entrar em contato automaticamente com repartições públicas incumbidas da investigação e persecução penal. Para isto, o usuário irá contar com funcionalidade de envio de email com texto e link para página na Internet com evidências obtidas e comentários realizados.

## Instalação de Protótipo Android

Para a participação no concurso, foi implementado um protótipo para a plataforma Android. O aplicativo se encontra na pasta [setup](https://github.com/agnoldo/soufiscal/tree/master/setup) e deve ser instalado da seguinte forma:

- baixar o instalador (arquivo com extensão APK) no *smartphone*. Caso se tenha alguma dificuldade neste processo, deve-se baixar o instalador em um computador com o *smartphone* conectado (normalmente por cabo USB) e copiar o arquivo do computador para o *smartphone*;
- permitir a instalação de aplicativos de fontes desconhecidas no Android, o que normalmente é feito por meio de item específico no aplicativo de Configurações (Ajustes) do Android na opção Segurança. NOTA: este procedimento é potencialmente perigoso e recomendamos que seja desfeito ao final do processo de instalação;
- usando um aplicativo navegador de arquivos, executar o instalador (arquivo APK) no *smartphone*. NOTA: a maioria dos aparelhos costuma trazer um aplicativo para isto sob o nome "Meus Arquivos" ou "Arquivos". Caso o seu *smartphone* não tenha um, boas opções são o [ES File Explorer](https://play.google.com/store/apps/details?id=com.estrongs.android.pop&hl=pt_BR) e o [Astro](https://play.google.com/store/apps/details?id=com.metago.astro&hl=pt_BR).
