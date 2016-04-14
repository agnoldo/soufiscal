define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {

      this.pad = function(num, size) {
          var s = "000000000" + num;
          return s.substr(s.length-size);
      }

      this.readTextFile = function(file, callback) {
          var rawFile = new XMLHttpRequest();
          rawFile.overrideMimeType("application/json");
          rawFile.open("GET", file, true);
          rawFile.onreadystatechange = function() {
              if (rawFile.readyState === 4 && rawFile.status == "200") {
                  callback(rawFile.responseText);
              }
          }
          rawFile.send(null);
      }

      var _this = this;

      this.readTextFile("data/convenios_municipio/convenios_municipio_11772.json", function(text){
        var data = JSON.parse(text);
        _this.events = data.convenios;
        _this.cont_events = data.metadados.total_registros;
        _this.events.forEach(function(item) {
          // extremos da RMBH
          // -19.4337589,-43.6079217,17
          // -20.2263119,-44.4214678,10
          item.lat = -19.4337589 - (Math.random() * 0.79);
          item.name = item.objeto_resumido;
          _this.readTextFile("data/proponente/proponente_" + item.proponente.Proponente.id + ".json", function(text){
            var prop = JSON.parse(text);
            item.endereco = prop.endereco;
            item.cep = prop.cep;
            item.telefone = prop.telefone;
            item.municipio = 'Jaboticatubas/MG'; //prop.municipio.id;
          });
          _this.readTextFile("data/empenhos_convenio/empenhos_convenio_" + item.id + ".json", function(text){
            var emps = JSON.parse(text);
            item.empenhos = emps.empenhos;
          });
          _this.readTextFile("data/ordensbancarias_convenio/ordensbancarias_convenio_" + item.id + ".json", function(text){
            var ords = JSON.parse(text);
            item.ordens_bancarias = ords.ordens_bancarias;
          });

          item.wheelchairLift = true;
          var date_fim = new Date(item.data_fim_vigencia);
          var date_ini = new Date(item.data_inicio_vigencia);
          var date_fim_obra = new Date((date_fim.getTime() - date_ini.getTime()) * 0.8 + date_ini.getTime());
          var date_ini_obra = new Date((date_fim.getTime() - date_ini.getTime()) * 0.2 + date_ini.getTime());
          item.dates = [
            _this.pad(date_ini_obra.getDate(), 2) + '/' + _this.pad((date_ini_obra.getMonth() + 1), 2) + '/' + date_ini_obra.getFullYear() + ' - Início de obra',
            _this.pad(date_fim_obra.getDate(), 2) + '/' + _this.pad((date_fim_obra.getMonth() + 1), 2) + '/' + date_fim_obra.getFullYear() + ' - Término de obra'
          ];
          item.data_inicial = date_ini; // new Date(2013, 1, 2)
          item.data_final = date_fim; // new Date(2016, 12, 31),
          item.contact = {
            tel: '1234/56789',
            email: 'test@example.com'
          };
          item.website = 'http://example.com';
          switch(item.id % 4) {
            case 0:
              item.task = 'Acompanhar semanalmente progresso da obra por meio de fotos'; break;
            case 1:
              item.task = 'Checar existência e instalações de empresa'; break;
            case 2:
              item.task = 'Checar histórico de empresa em Junta Comercial'; break;
            case 3:
              item.task = 'Obter informações junto a prestadores de serviço'; break;
          }

          item.tarefa = {
            descricao: 'Acompanhar progresso de obra',
            data_limite: '',
            nome_empresa: 'Posto de Saúde',
            endereco: 'Rua Olavo Bilac, 1865',
            Uf_Despesa: 'MG',
            Tx_Municipio: 'Jaboticatubas'
          };
          item.total_atualizacoes = Math.ceil(10 + (Math.random() * 90));
          item.ultima_atualizacao = Math.ceil(2 + (Math.random() * 18)) + ' dias atrás';
          item.minhastarefas = [{
            descricao: 'Acompanhar progresso de obra',
            data_limite: '',
            nome_empresa: 'Posto de Saúde de Jaboticatubas',
            Tx_Municipio: 'Jaboticatubas',
            Uf_Despesa: 'MG',
            Tx_Endereco: 'Rua Olavo Bilac, 1865'
          }];
          item.outrastarefas = [{
            descricao: 'Checar existência de empresa',
            data_limite: '20/04/2016',
            nome_empresa: 'Construtora DezenoveVezesNove',
            Tx_Municipio: 'Betim',
            Uf_Despesa: 'MG',
            Tx_Endereco: 'Rua Lima Barreto, 1881'
          },{
            descricao: 'Checar existência de empresa',
            data_limite: '27/04/2016',
            nome_empresa: 'Depósito TopaTudo',
            Tx_Municipio: 'Belo Horizonte',
            Uf_Despesa: 'MG',
            Tx_Endereco: 'Rua Monteiro Lobato, 1882'
          }];
          item.lng = -43.6079217 - (Math.random() * 0.82);
        });
        console.log(_this.events);
      });

/*
      this.events = [{
        id: 1,
        name: 'Construção do Posto de Saúde',
        city: 'Corruptolândia',
        district: 'Centro',
        street: 'Rua Olavo Bilac',
        number: '1865',
        zip: '32390-200',
        lat: -20.112860,
        lng: -43.057203,
        dates: [
          '02/01/2013 - Início de obra',
          '31/12/2016 - Término (previsão)'
        ],
        data_inicial: new Date(2013, 1, 2),
        data_final: new Date(2016, 12, 31),
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com',
        task: 'Acompanhar semanalmente progresso da obra por meio de fotos',
        tarefa: {
          descricao: 'Acompanhar progresso de obra',
          data_limite: '',
          nome_empresa: 'Posto de Saúde',
          endereco: 'Rua Olavo Bilac, 1865',
          Uf_Despesa: 'MG',
          Tx_Municipio: 'Corruptolândia'
        },
        total_atualizacoes: 47,
        ultima_atualizacao: '2 dias atrás',
        minhastarefas: [{
          descricao: 'Acompanhar progresso de obra',
          data_limite: '',
          nome_empresa: 'Posto de Saúde de Corruptolândia',
          Tx_Municipio: 'Corruptolândia',
          Uf_Despesa: 'MG',
          Tx_Endereco: 'Rua Olavo Bilac, 1865'
        }],
        outrastarefas: [{
          descricao: 'Checar existência de empresa',
          data_limite: '20/04/2016',
          nome_empresa: 'Construtora DezenoveVezesNove',
          Tx_Municipio: 'Safadópolis',
          Uf_Despesa: 'MG',
          Tx_Endereco: 'Rua Lima Barreto, 1881'
        },{
          descricao: 'Checar existência de empresa',
          data_limite: '27/04/2016',
          nome_empresa: 'Depósito TopaTudo',
          Tx_Municipio: 'Safadópolis',
          Uf_Despesa: 'MG',
          Tx_Endereco: 'Rua Monteiro Lobato, 1882'
        }]
      }, {
        id: 2,
        name: 'Construção de Ponte',
        city: 'Fraudópolis',
        district: 'Bairro Lagoa',
        street: 'Rua Machado de Assis',
        number: '1839',
        zip: '44839-125',
        dates: [
          '20/06/2015 - Início de obra',
          '31/10/2016 - Término (previsão)'
        ],
        data_inicial: new Date(2016, 6, 20),
        data_final: new Date(2016, 10, 31),
        lat: -20.111860,
        lng: -43.056203,
//        lat: -21.268739,
//        lng: -43.174784,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com',
        task: 'Acompanhar semanalmente progresso da obra por meio de fotos',
        tarefa: {
          descricao: 'Acompanhar progresso de obra',
          data_limite: '',
          nome_empresa: 'Ponte da Lagoa',
          endereco: 'Rua José de Alencar, 1829',
          Uf_Despesa: 'MG',
          Tx_Municipio: 'Fraudópolis'
        },
        total_atualizacoes: 39,
        ultima_atualizacao: '21/03/2016'
      }, {
        id: 3,
        name: 'Demolição da Antiga Cadeia Municipal',
        city: 'Fraudópolis',
        district: 'Centro',
        street: 'Rua Charles Darwin',
        number: '1809',
        zip: '44832-195',
        dates: [
          '20/03/2016 - Início de obra',
          '31/05/2016 - Término (previsão)'
        ],
        data_inicial: new Date(2016, 3, 20),
        data_final: new Date(2016, 5, 31),
        lat: -20.099860,
        lng: -43.049203,
//        lat: -21.268739,
//        lng: -43.174784,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com',
        task: 'Checar existência e instalações de empresa JogaProAlto Ltda',
        tarefa: {
          descricao: 'Checar existência de empresa',
          data_limite: new Date(2016, 4, 15),
          nome_empresa: 'JogaProAlto Ltda',
          endereco: 'Rua Beagle, 1839',
          Uf_Despesa: 'MG',
          Tx_Municipio: 'Fraudópolis'
        },
        total_atualizacoes: 18,
        ultima_atualizacao: '28/03/2016'
      }, {
        id: 4,
        name: 'Manutenção no Reator Nuclear da Usina de Explode Tudo',
        city: 'Explode Tudo',
        district: 'Bairro Nuclear',
        street: 'Rua Marie Curie',
        number: '1867',
        zip: '20800-100',
        dates: [
          '01/02/2016 - Início de obra',
          '31/10/2016 - Término (previsão)'
        ],
        data_inicial: new Date(2016, 2, 1),
        data_final: new Date(2016, 10, 31),
        lat: -17.099860,
        lng: -46.049203,
//        lat: -21.268739,
//        lng: -43.174784,
        wheelchairLift: true,
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com',
        task: 'Checar histórico de empresa Cabum Ltda em Junta Comercial municipal',
        tarefa: {
          descricao: 'Checar histórico de empresa',
          data_limite: new Date(2016,4,30),
          nome_empresa: 'Cabum Ltda',
          endereco: 'Rua Marie Curie, 1934',
          Uf_Despesa: 'MG',
          Tx_Municipio: 'Explode Tudo'
        },
        total_atualizacoes: 23,
        ultima_atualizacao: 'ontem'
      }];
*/

      this.lists = [
        {
          id: 1,
          thumb: 'img/osm/15_12402_18196.png', // 'https://b.tile.openstreetmap.org/15/12402/18196.png',
          nome: 'Seu município',
          total: 19,
          descricao: 'Município de Jaboticatubas/MG',
          descricao2: 'Navegar por todos os convênios',
          modalidades_esferas_administrativas: [
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'MUNICIPAL', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'MUNICIPAL', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'MUNICIPAL', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'MUNICIPAL', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'ESTADUAL', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'ESTADUAL', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'ESTADUAL', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'ESTADUAL', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'FEDERAL', total: 17 },
            { modalidade: 'Convênio', esfera_administrativa: 'FEDERAL', total: 2 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'FEDERAL', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'FEDERAL', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'PRIVADA', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'PRIVADA', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'PRIVADA', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'PRIVADA', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'CONSORCIO_PUBLICO', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'CONSORCIO_PUBLICO', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'CONSORCIO_PUBLICO', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'CONSORCIO_PUBLICO', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'EMPRESA_PUBLICA_SOCIEDADE_ECONOMIA_MISTA', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'EMPRESA_PUBLICA_SOCIEDADE_ECONOMIA_MISTA', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'EMPRESA_PUBLICA_SOCIEDADE_ECONOMIA_MISTA', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'EMPRESA_PUBLICA_SOCIEDADE_ECONOMIA_MISTA', total: 0 },
            { modalidade: 'Contrato de Repasse', esfera_administrativa: 'ORGANISMO_INTERNACIONAL', total: 0 },
            { modalidade: 'Convênio', esfera_administrativa: 'ORGANISMO_INTERNACIONAL', total: 0 },
            { modalidade: 'Termo de Cooperação', esfera_administrativa: 'ORGANISMO_INTERNACIONAL', total: 0 },
            { modalidade: 'Termo de Parceria', esfera_administrativa: 'ORGANISMO_INTERNACIONAL', total: 0 },
          ]
        }, {
          id: 2,
          thumb: 'img/osm/8_96_142.png', // https://b.tile.openstreetmap.org/8/96/142.png
          nome: 'Sua região',
          total: 1233,
          descricao: 'Região Metropolitana de Belo Horizonte/MG (34 municípios)',
          descricao2: 'Navegar por municípios e seus convênios'
        }, {
          id: 3,
          thumb: 'img/uf/MG.png',
          nome: 'Seu estado',
          total: 11298,
          descricao: 'Estado de Minas Gerais (MG) com 853 municípios',
          descricao2: 'Navegar por regiões, municípios e seus convênios'
        }, {
          id: 4,
          thumb: 'img/uf/BRASIL.png',
          nome: 'Todo o Brasil',
          total: 121042,
          descricao: 'Todo o Brasil agrupados por categoria/tema',
          descricao2: 'Navegar por UFs, regiões, municípios e seus convênios'
        }
      ];

      this.readTextFile("data/uf/ufs.json", function(text){
        var data = JSON.parse(text);
        _this.brasil = data;
      });
      this.readTextFile("data/uf/municipios_MG.json", function(text){
        var data = JSON.parse(text);
        _this.uf = data;
        _this.uf.sigla = 'MG';
      });
      this.readTextFile("data/regiao/regiao_MG_RMBH.json", function(text){
        var data = JSON.parse(text);
        _this.regiao = data;
      });

      this.randomString = function (length, chars) {
          var mask = '';
          if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
          if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          if (chars.indexOf('#') > -1) mask += '0123456789';
          if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
          var result = '';
          for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
          return result;
      }

      this.pages = [{
        alias: 'contexto',
        content: '<h1>Problema a ser resolvido</h1> <p>De acordo com <a href="http://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?jornal=3&pagina=95&data=29/02/2016">Edital publicado no D.O.U. em 29/02/2016<a>, "O Concurso de Aplicativos para enfrentamento da corrupção, promovido pelo Ministério da Justiça (MJ) e seus parceiros institucionais, (...), é voltado a representantes da sociedade civil, visando a envolvê-la na execução de políticas públicas realizadas por meio de transferências, facilitando o entendimento acerca de dados a elas relacionados e a fiscalização dessa execução de modo colaborativo entre Estado e sociedade.</p><p>Neste sentido e de acordo com a seção 3 da <a href="http://justica.gov.br/Hackathon%20-%20LabPi%20/labpi-editais">página Edital e orientações - LabPi/MJ</a>, o concurso pretende induzir a proposição de ideias e o desenvolvimento de aplicativos móveis voltados a:</p><ul><li>- Tornar informação acessível ao cidadão;</li><li>- Promover participação social na fiscalização;</li><li>- Permitir que a informação coletiva ajude o Estado.</li></ul><image style="width:100%" src="/img/desafioslabpi.png" alt="Ilustração site MJ"/><p>Existem inúmeros problemas relacionados ao combate à corrupção. Dentre eles, a cartilha "O Combate à Corrupção nas Prefeituras do Brasil", elaborada pela AMARRIBO, destaca:</p><ul><li>- **Constatação da Existência Física de Empresas Contratadas**: permite checar se uma empresa é "fantasma", o que é bastante comum em casos de fraude ao herário. Para isto normalmente é necessário ir ao endereço registrado e averiguar se a empresa lá se encontra. Caso suas instalações não sejam encontradas, deve-se verificar nas suas imediações se a empresa já esteve instalada no local. O registro fotográfico pode ser útil como prova documental;</li><li>- **Documentação de Indícios de Fraudes e Obtenção de Provas**: permite obter e registrar indícios ou provas de irregularidades e, a partir delas, motivar o Ministério Público Estadual ou Federal a, em sua atuação na defesa dos direitos do cidadão, iniciar uma investigação. A cartilha comenta que "a melhor maneira de motivar as autoridades judiciais no combate à corrupção é pela apresentação de fatos comprovados e consistentes. Quando a Promotoria e o judiciário se mostram ativos na defesa do interesse público, o processo flui e o objetivo de afastar e punir os corruptos é atingido";</li><li>- **Mobilização Popular**: é comum o pensamento entre a população de que a corrupção é algo que existe naturalmente e que não pode ser completamente erradicado. Isto se dá, em parte, por causa do histórico brasileiro de dificuldade em se enfrentar o problema. No entanto é fundamental a participação popular tendo em vista, entre outras coisas, a impossibilidade prática de o governo ser onisciente e onipresente. Além disso, a participação popular aumenta sensivelmente o grau de politização e o senso de empoderamento e propriedade do público com relação à sua comunidade e, em última análise, ao país.</li></ul>',
        title: 'Contexto',
        icon: 'ion-information-circled'
      }, {
        alias: 'proposta',
        content: '<h1>Objetivos</h1> <p>O <strong>projeto SouFiscal</strong> pretende promover a participação popular por meio da criação de uma rede de acompanhamento e investigação de obras públicas. Para isto, usará os dados do Portal de Convênios do Governo Federal (SICONV) para listar obras públicas em curso, apresentar seus dados para escrutínio e permitir aos cidadãos colaborarem na obtenção de vestígios de fraudes.</p><p>A ideia principal é engajar o cidadão de duas formas: facilitando o acesso a dados relativos a convênios, obras, compras e serviços e permitindo a sua atuação, quando desejado, como fiscal voluntário a serviço do estado e em prol do combate à corrupção.</p><p>O trabalho de fiscal voluntário poderá ser feito tanto no escopo de um convênio específico, alvo de interesse de um cidadão, quanto por localização geográfica, situação em que o fiscal voluntário simplesmente identifica diligências (tarefas) a serem realizadas, por exemplo, nas proximidades de sua casa, escola ou local de trabalho. Ou seja, um fiscal voluntário pode, por exemplo, passar em frente a um endereço para checar a existência de uma empresa cumprindo uma diligência solicitada por outra pessoa.</p><p>Tanto o cumprimento de diligências quanto a participação em discussões por meio de comentários geram pontuação para os usuários, convertida em medalhas virtuais e registros digitais de participação. Quadros com a classificação de usuários (ranking) serão implementados como forma de valorizar a participação. Outras técnicas de *gamificação* também podem ser aplicadas como forma de estimular o engajamento dos usuários.</p><p>Por questões de privacidade e segurança, a ferramenta permitirá, opcionalmente, a submissão de dados de forma anônima. Desta forma, mesmo pessoas muito próximas de crimes em andamento poderão expor dados, vestígios e até contribuir para a produção de provas com valor jurídico sem colocar em risco sua segurança e de seus entes próximos.</p>',
        title: 'Proposta',
        icon: 'ion-clipboard'
      }, {
        alias: 'funcionamento',
        content: '<h1>Projeto SouFiscal</h1><p>Este aplicativo móvel destina-se a disseminar informações sobre convênios, obras, compras e serviços e, em especial, viabilizar o trabalho de campo dos fiscais voluntários na investigação de fraudes que envolvam atos e processos públicos. De forma complementar, o site web destina-se a mesclar as informações de convênios com as informações coletadas por fiscais voluntários de forma visualmente poderosa e agradável, com fácil integração com redes sociais e órgãos públicos relacionados ao controle externo e à investigação de fraudes.</p><p>O funcionamento básico do aplicativo móvel será o seguinte:</p><ul><li>- ao entrar na ferramenta, o usuário pode navegar por convênios e obras em sua região por meio de mapa ou busca geográfica, ambos utilizando a sua localização corrente. Além disso, também pode procurar por convênios usando dados conhecidos como área, convenente e proponente;</li><li>- em cada convênio, o usuário pode analisar dados do SICONV como prazos de obra, dispêndio de recursos e empenhos realizados. O usuário também pode marcar o convênio nas categorias "De olho" ou "Fiscalizando", o que faz com que tal convênio tenha um atalho gravado nas respectivas telas homônimas;</li><li>- quando o usuário está "de olho" em um convênio, ele recebe notificações sobre ocorrências registradas neste convênio mas não pode alterar ou inserir vestígios e comentários;</li><li>- quando o usuário registra-se para fiscalizar um convênio, ele pode, além de receber notificações, fazer comentários sobre o convênio, enviar fotos, vídeos e gravações de áudio relacionadas a obras, compras e serviços e até mesmo solicitar o apoio de terceiros (fiscais voluntários) na realização de diligências, que normalmente incluem idas a um local para constatar o progresso de uma obra ou a existência física de uma empresa;</li><li>- qualquer usuário pode, em botão da tela principal, definir-se como fiscal voluntário, o que fará com que passe a receber notificações de diligências pendentes. Caso seja viável, ele pode realizar uma diligência utilizando a câmera ou o gravador de seu dispositivo móvel, em seguida submetendo eletronicamente o resultado ao site do projeto. Se o usuário tiver conexão à internet ativa no momento da realização da diligência, o resultado pode receber assinatura digital e carimbo do tempo, o que, em conjunto com a informação geográfica (no caso de foto e vídeo), pode até mesmo permitir o uso oficial da evidência em processo judicial;</li><li>- no quadro Comunidade, o usuário poderá ver o seu ranking (baseado na sua atividade na ferramenta por meio de comentários e diligências) e os usuários em destaque na sua região e em todo o país. Também poderá ver suas medalhas e certificados de participação como fiscal voluntário;</li><li>- todos os comentários sobre convênios analisados podem ser visualizados por toda a comunidade de usuários. A partir da ferramenta qualquer usuário pode entrar em contato automaticamente com repartições públicas incumbidas da investigação e persecução penal. Para isto, o usuário conta com funcionalidade de envio de email com texto e link para página na Internet com evidências obtidas e comentários realizados.</li></ul>',
        title: 'Funcionamento',
        icon: 'ion-gear-a'
        //      }, {
        //alias: 'contato',
        //content: '<h1>Entre em contato conosco</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        //title: 'Contato',
        //icon: 'ion-paper-airplane'
      }, {
        alias: 'creditos',
        content: '<h1>SouFiscal</h1> <p><strong>Ferramentas de Desenvolvimento:</strong><ul><li><a href="http://ionicframework.com/">ionic Framework</a> (versão 1.7.14)</li><li><a href="https://cordova.apache.org/">Apache Cordova</a> (versão 6.0.0)</li></ul></p> <p><strong>Imagens de abertura e menu</strong><br><ul><li><a href="https://unsplash.com/">unsplash</a></li><li>imagens produzidas por membros do projeto</li></ul></p> <p><strong>Imagens de obras e pessoas</strong><br><ul><li><a href="https://randomuser.me/">randomuser.me</a> (usuário/comunidade)</li><li><a href="http://lorempixel.com/">lorempixel.com</a> (convênios/obras)</li><li><a href="https://www.openstreetmap.org/">openstreetmap</a> (ladrilhos de mapas)</li></ul>',
        title: 'Licenças e Créditos',
        icon: 'ion-key'
      }, {
        alias: 'sobre',
        content: '<h1>SouFiscal</h1> <p><strong>Projeto desenvolvido por ocasião da hackathon LabPi promovida pelo Ministério da Justiça e entidades ligadas à ENCCLA</strong> </p> <h2>Equipe Desenvolvedora</h2> <ol> <li>Arnaldo Gomes dos Santos Junior<br><a href="mailto:agnoldo@gmail.com">agnoldo@gmail.com</a></li><br><li>Júnia Gaudereto Carvalho Gomes<br><a href="mailto:junia.gaudereto@gmail.com">junia.gaudereto@gmail.com</a></li><br><li>Diego de Castro Soares<br><a href="mailto:diegocs@gmail.com">diegocs@gmail.com</a></li> </ol>',
        title: 'Sobre o Projeto',
        icon: 'ion-thumbsup'
      }];

    }
  ]);
});
