g_traducao_ajuda = {
	ferramentas: {
		"1": {
			titulo: "Filtro de cores",
			diretorio:"i3geo/ferramentas/tipoimagem",
			categoria:"1",
			pt:"O filtro possibilita gerar efeitos de colora��o no mapa. � aplicado sobre a imagem gerada toda vez que o mapa � alterado. No caso de temas baseados em dados RASTER, os n�veis de cores obtidos com a ferramenta de identifica��o n�o s�o alterados.",
			complemento:"Os filtros podem provocar um tempo maior de desenho do mapa, devendo ser utilizados com cuidado. As op��es s�pia e tons de cinza utilizam algor�tmos pr�prios do i3Geo, j� as demais, utilizam a op��o de filtro dispon�vel com o PHP 5. Mais detalhes <a href='http://www.php.net/manual/pt_BR/function.imagefilter.php' >aqui</a>.",
			tela:"ferramentas/tipoimagem/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.tipoimagem()"
		},
		"2": {
			titulo: "Legenda",
			diretorio:"i3geo/ferramentas/opcoes_legenda",
			categoria:"1",
			pt:"A legenda do mapa � utilizada em v�rias op��es do i3Geo e pode tamb�m ficar inserida na pr�pria imagem do mapa. A legenda mostra os s�mbolos utilizados no desenho de cada tema, podendo-se alterar caracter�sticas como fonte, tamanho dos textos, tamanho dos ret�ngulos com os s�mbolos, etc.",
			complemento:"Antes de aplicar uma altera��o, voc� pode testar os par�metros escolhidos para avaliar o resultado. No caso dos par�metros que definem cores, utilize -1,-1,-1 para anular seu efeito.",
			tela:"ferramentas/opcoes_legenda/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.opcoesLegenda()"
		},
		"3": {
			titulo: "Barra de escala",
			diretorio:"i3geo/ferramentas/opcoes_escala",
			categoria:"1",
			pt:"A barra de escala � uma imagem inserida no mapa que mostra a rela��o entre uma medida feita no mapa e no mundo real. A barra pode ser modificada especificando-se seu tamanho, n�mero de divis�es e cores.",
			complemento:"Existem dois modelos b�sicos para a escala: linear e bloco. Para n�o mostrar a escala no mapa, escolha a 'sem escala' na op��o estilo.",
			tela:"ferramentas/opcoes_escala/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.opcoesEscala()"
		},
		"4": {
			titulo: "Tamanho do mapa",
			diretorio:"i3geo/ferramentas/opcoes_tamanho",
			categoria:"1",
			pt:"O tamanho do mapa � definido automaticamente quando o i3Geo � aberto, buscando-se otimizar o uso do espa�o dispon�vel no monitor. A op��o de modifica��o do tamanho altera apenas o corpo do mapa, for�ando o ajuste dos outros elementos, o que nem sempre provoca bons resultados.",
			complemento:"O ajuste do tamanho do mapa pode ser utilizado para gerar imagens em tamanhos espec�ficos, principalmente para efeitos de impress�o. A medida do tamanho utilizado � pixel, que corresponde ao tamanho m�nimo de uma c�lula da imagem do mapa. Para calcular o tamanho do mapa em outra unidade de medida, necess�rio nos casos em que se deseja imprimir o mapa, deve ser feito considerando-se a resolu��o de impress�o desejada.",
			tela:"ferramentas/opcoes_tamanho/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.tamanho()"
		},
		"5": {
			titulo: "Cor da sele��o",
			diretorio:"i3geo/ferramentas/opcoes_querymap",
			categoria:"1",
			pt:"A cor da sele��o � utilizada para mostrar no mapa os elementos de um determinado tema que est�o selecionados. A sele��o consiste em destacar elementos para uso em determinadas opera��es, como por exemplo o c�lculo de entorno (buffer). A defini��o da cor � baseada no modelo R,G,B, sendo que cada componente varia de 0 a 255.",
			complemento:"Ao definir os valores de RGB, separe-os com ','. Quando um tema possuir elementos selecionados, � inclu�da uma marca antes do nome do tema na lista de camadas dispon�veis no mapa.",
			tela:"ferramentas/opcoes_querymap/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.queryMap()"
		},
		"6": {
			titulo: "Cor do fundo",
			diretorio:"i3geo/ferramentas/opcoes_fundo",
			categoria:"1",
			pt:"O corpo do mapa � constitu�do por uma imagem gerada com tamanho fixo. Essa imagem possu� uma cor padr�o, sobre a qual s�o sobrepostas as camadas. Por padr�o, a cor do fundo � definida como azul. A defini��o da cor � baseada no modelo R,G,B, sendo que cada componente varia de 0 a 255.",
			complemento:"Ao definir os valores de RGB, separe-os com ','. Ao utilizar as op��es de convers�o do mapa atual para kml ou WMS, a altera��o da cor do fundo para 255,255,255 oferece melhores resultados na visualiza��o dos dados.",
			tela:"ferramentas/opcoes_fundo/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.corFundo()"
		},
		"7": {
			titulo: "Grade de coordenadas",
			diretorio:"i3geo/ferramentas/gradecoord",
			categoria:"1",
			pt:"A grade de coordenadas � formada por linhas verticais e horizontais representando determinadas latitudes e longitudes. A grade � um dos elementos principais na defini��o de um mapa, sendo utilizada na impress�o ou gera��o de figuras.",
			complemento:"Ao adicionar uma grade, � criado uma nova camada no mapa, possibilitando que mais de uma grade seja criada. Uma grade pode ou n�o conter os textos indicando os valores de lat long, permitindo que se crie uma grade com espa�amento de linhas diferente do espa�amento dos textos.",
			tela:"ferramentas/gradecoord/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.gradeCoord()"
		},
		"8": {
			titulo: "Templates",
			diretorio:"i3geo/ferramentas/template",
			categoria:"1",
			pt:"Um template define como os componentes de um mapa s�o organizados no navegador. O administrador do i3Geo pode criar templates diferentes conforme as necessidades do usu�rio, sendo que alguns templates s�o fornecidos com o pr�prio i3Geo.",
			complemento:"A cria��o de templates � uma tarefa do administrador do i3Geo. Para abrir um template espec�fico diretamente, utilize a URL que � mostrada no navegador quando um template � escolhido.",
			tela:"ferramentas/template/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.template()"			
		},
		"9": {
			titulo: "Temporizador",
			diretorio:"i3geo/ferramentas/opcoes_autoredesenha",
			categoria:"1",
			pt:"O temporizador permite definir um intervalo de tempo em segundos que ir� disparar o redesenho do mapa.",
			complemento:"Quando o mapa � redesenhado, as camadas existentes s�o lidas novamente para compor o novo mapa. Essa op��o � �til quando existirem camadas no mapa que sofrem atualiza��es frequentes, como por exemplo o deslocamento de aeronaves, carros ou navios.",
			tela:"ferramentas/opcoes_autoredesenha/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.autoredesenha()"			
		},
		"10": {
			titulo: "Salvar mapa",
			diretorio:"i3geo/ferramentas/salvamapa",
			categoria:"2",
			pt:"O mapa que o usu�rio est� utilizando pode ser salvo localmente (na m�quina do usu�rio) para ser aberto posteriormente. Isso permite que um trabalho seja continuado em outro momento, uma vez que o mapa em uso � sempre perdido quando o usu�rio fecha o navegador.",
			complemento:"Os dados locais que foram criados n�o s�o salvos, sendo necess�rio o seu download quando desejado. Isso afeta as op��es de inclus�o de pontos ou convers�o de elementos selecionados em camadas.",
			tela:"ferramentas/salvamapa/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.salvaMapa()"			
		},
		"11": {
			titulo: "Carregar mapa",
			diretorio:"i3geo/ferramentas/carregamapa",
			categoria:"2",
			pt:"O mapa que o usu�rio est� utilizando pode ser salvo localmente (na m�quina do usu�rio) para ser aberto posteriormente. Isso permite que um trabalho seja continuado em outro momento, uma vez que o mapa em uso � sempre perdido quando o usu�rio fecha o navegador.",
			complemento:"A op��o de carregar um mapa permite enviar para o servidor, onde o i3Geo est� instalado, o mapa que foi salvo anteriormente.",
			tela:"ferramentas/carregamapa/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.carregaMapa()"
		},
		"12": {
			titulo: "Converter em WMS",
			diretorio:"i3geo/ferramentas/convertews",
			categoria:"2",
			pt:"Convertendo o mapa atual em um WMS � poss�vel utilizar outros softwares para visualizar o mesmo mapa visto no i3Geo. O resultado da convers�o � um endere�o (url) tempor�rio, esse endere�o deve ser inserido no software que se quer usar e que suporte WMS.",
			complemento:"WMS � um padr�o internacional e n�o espec�fico do i3Geo. Utilizando um WMS, pode-se adicionar ao mapa outras camadas de dados, inclusive dados locais, se estiver sendo utilizado um software instalado em um computador local. Conforme as caracter�sticas de cada servidor onde o i3Geo estiver instalado, o WMS poder� permanecer dispon�vel por per�odos de tempo vari�veis. Para acessar a lista de WMS dispon�veis utilize o link <a href='ogc.htm' >ogc.htm</a>.Mais informa��es em <a href='www.opengeospatial.org' >OGC.</a>",
			tela:"ferramentas/convertews/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.convertews()"
		},
		"13": {
			titulo: "Converter em KML",
			diretorio:"i3geo/ferramentas/convertekml",
			categoria:"2",
			pt:"Convertendo o mapa atual em KML � poss�vel utilizar outros softwares para visualizar o mesmo mapa visto no i3Geo. O resultado da convers�o � um endere�o (url) tempor�rio, esse endere�o deve ser inserido no software que se quer usar e que suporte KML. Para usar o KML no Google Earth, utilize a op��o desse softawre chamada 'adicionar link de rede'.",
			complemento:"KML � um padr�o internacional e n�o espec�fico do i3Geo. Conforme as caracter�sticas de cada servidor onde o i3Geo estiver instalado, o KML poder� permanecer dispon�vel por per�odos de tempo vari�veis. O KML gerado pelo i3Geo n�o cont�m as coordenadas dos elementos de uma camada, mas sim um WMS embutido no KML. Essa estrutura limita o uso do KML mas permite uma maior performance no acesso aos dados. Mais informa��es em <a href='www.opengeospatial.org' >OGC.</a>",
			tela:"ferramentas/convertekml/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.convertekml()"
		},
		"14": {
			titulo: "Grade de pol�gonos",
			diretorio:"i3geo/ferramentas/gradepol",
			categoria:"3",
			pt:"Cria uma nova camada no mapa contendo ret�ngulos com espa�amento determinado em x e y. A grade gerada pode ser obtida via download. O espa�amento � definido em d�cimos de grau e as coordenadas do ponto inicial podem ser definida clicando-se no mapa ou digitando-se o valor.",
			complemento:"A grade � �til para a realiza��o de an�lises onde deseja-se calcular ocorr�ncias de fen�menos pontuais e represent�-los posteriormente com base em totais. Observe que a �rea e as dist�ncias reais de cada pol�gono n�o s�o constantes, uma vez que � utilizada a proje��o geogr�fica na sua gera��o.",
			tela:"ferramentas/gradepol/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.gradePol()"
		},
		"15": {
			titulo: "Grade de pontos",
			diretorio:"i3geo/ferramentas/gradepontos",
			categoria:"3",
			pt:"Cria uma nova camada no mapa contendo pontos com espa�amento determinado em x e y. A grade gerada pode ser obtida via download. O espa�amento � definido em d�cimos de grau e as coordenadas do ponto inicial podem ser definida clicando-se no mapa ou digitando-se o valor.",
			complemento:"Observe que as dist�ncias reais entre cada ponto n�o s�o constantes, uma vez que � utilizada a proje��o geogr�fica na sua gera��o.",
			tela:"ferramentas/gradepontos/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.gradePontos()"
		},
		"16": {
			titulo: "Grade de hex�gonos",
			diretorio:"i3geo/ferramentas/gradehex",
			categoria:"3",
			pt:"Cria uma nova camada no mapa contendo hex�gonos com espa�amento determinado em x e y. A grade gerada pode ser obtida via download. O espa�amento � definido em d�cimos de grau e as coordenadas do ponto inicial podem ser definida clicando-se no mapa ou digitando-se o valor.",
			complemento:"A grade � �til para a realiza��o de an�lises onde deseja-se calcular ocorr�ncias de fen�menos pontuais e represent�-los posteriormente com base em totais. Observe que a �rea e as dist�ncias reais de cada pol�gono n�o s�o constantes, uma vez que � utilizada a proje��o geogr�fica na sua gera��o.",
			tela:"ferramentas/gradehex/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.gradeHex()"
		},
		"17": {
			titulo: "Dist�ncia entre pontos",
			diretorio:"i3geo/ferramentas/distanciaptpt",
			categoria:"3",
			pt:"O c�lculo de dist&acirc;ncias � feito de um ponto em rela&ccedil;&atilde;o aos mais pr&oacute;ximos. O ponto origem, deve estar selecionado em um dos temas existentes no mapa. Para restringir a dist�ncia de busca, � necess�rio definir um raio m�ximo, os pontos considerados ser�o aqueles dentro desse raio. Em cada linha ligando dois pontos s�o inseridos atributos que indicam a dist�ncia e o identificador dos pontos. Esses identificadores s�o escolhidos com base nas colunas de atributos do tema pontual escolhido.",
			complemento:"O resultado dos c�lculos s�o novas camadas inclu�das no mapa, sendo uma de linhas e uma com o entorno de busca considerado.",
			tela:"ferramentas/distanciaptpt/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.distanciaptpt()"
		},
		"18": {
			titulo: "Ponto em pol�gono",
			diretorio:"i3geo/ferramentas/pontoempoligono",
			categoria:"3",
			pt:"Ponto em pol&iacute;gono &eacute; uma opera&ccedil;&atilde;o que resulta em um novo tema contendo o cruzamento entre um tema com pontos e outros com pol&iacute;gonos (ou imagem raster). As informa&ccedil;&otilde;es do tema poligonal (ou raster) ser&atilde;o agregadas � tabela do novo tema pontual gerado. As colunas da tabela de atributos do novo tema gerado ser�o nomeadas em uma sequ�ncia num�rica, uma vez que o tema original pode ter colunas com nomes incompat�veis com o formato shapefile, utilizado na gera��o do novo tema.",
			complemento:"Pode-se escolher mais de um tema de origem dos dados, possibilitando agregar informa��es de temas diferentes. Essa op��o de cruzamento � �til nos casos onde a informa��o necess�ria para a an�lise de um tema encontra-se em outro tema. Por exemplo, � poss�vel cruzar um tema com a localiza��o das cidades com um tema com a delimita��o de biomas. O resultado permite elaborar estat�sticas por biomas com base nos dados dos pontos.",
			tela:"ferramentas/pontoempoligono/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.pontoempoligono()"
		},
		"19": {
			titulo: "N�mero de pontos por pol�gono",
			diretorio:"i3geo/ferramentas/nptpol",
			categoria:"3",
			pt:"Ponto em pol&iacute;gono &eacute; uma opera&ccedil;&atilde;o que resulta em um novo tema contendo o cruzamento entre um tema com pontos e outro com pol&iacute;gono. O resultado � um novo tema poligonal, cuja tabela de atributos conter� um item com o total de pontos em cada pol�gono",
			complemento:"O uso dessa ferramenta � indicado nas situa��es em que se deseja agregar dados de ocorr�ncias pontuais em pol�gonos, possibilitando a visualiza��o dos dados por meio de t�cnicas de classifica��o e representa��o coropl�tica.",
			tela:"ferramentas/nptpol/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.nptPol()"
		},
		"20": {
			titulo: "Distribui��o de pontos",
			diretorio:"i3geo/ferramentas/pontosdistri",
			categoria:"3",
			pt:"Essa op��o disponibiliza v�rias ferramentas de an�lise de distribui��o de pontos, a maior parte baseia-se no software estat�stico < href='www.r-project.org' >R</a>. Algumas das an�lises geram como resultado imagens RASTER e outras temas lineares e poligonais. A op��o de relat�rio gera uma nova p�gina com v�rios �ndices calculados com o software R.",
			complemento:"A imagem RASTER resultante utiliza a resolu��o (tamanho do pixel) compat�vel com a escala utilizada no mapa que est� sendo visto. A representa��o utiliza, por padr�o, tons de cinza. A altera��o nas cores utilizadas na representa��o podem melhorar de forma significativa a visualiza��o dos resultados. Utilize a op��o de edi��o da legenda do tema para fazer isso. As an&aacute;lises de distribui&ccedil;&atilde;o de pontos s&atilde;o realizadas com o software R. As an&aacute;lises de densidade de pontos, dist&acirc;ncia entre pontos e kernel, foram implantadas utilizando-se a biblioteca <a href='http://cran.r-project.org/web/packages/spatstat' target=blanck >SPATSTAT</a> do R. As an�lises de Delaunay e Voronoi utilizam a biblioteca <a href='http://cran.r-project.org/web/packages/deldir' target=blanck >DELDIR</a> e a an�lise de cluster espacial utiliza o <a href='http://cran.r-project.org/web/packages/spatclus' target=blanck >SPATCLUS</a>. As an&aacute;lises podem consumir muito tempo de processamento, portanto, tenha cuidado com o n&uacute;mero de pontos."
		},
		"21": {
			titulo: "Centr�ide",
			diretorio:"i3geo/ferramentas/centroide",
			categoria:"3",
			pt:"Os centr&oacute;ides s&atilde;o pontos localizados no centro de massa de uma geometria. Para gerar os centr&oacute;ides, voc&ecirc; precisa selecionar alguns elementos de um tema. Utilize para isso a op&ccedil;&atilde;o de sele&ccedil;&atilde;o ou a tabela de atributos do tema desejado.",
			complemento:"Dependendo da forma de uma geometria, o ponto calculado pode ser posicionado fora do pol�gono <a href='http://postgis.refractions.net/documentation/manual-svn/ST_Centroid.html' >exemplo</a>.",
			tela:"ferramentas/centroide/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.centroide()"
		},
		"22": {
			titulo: "Dissolver",
			diretorio:"i3geo/ferramentas/dissolve",
			categoria:"3",
			pt:"Essa ferramenta transforma v&aacute;rios pol&iacute;gonos em um s&oacute; eliminando as divisas entre eles. Para definir quais os pol&iacute;gonos devem ser unidos uns com os outros &eacute; preciso escolher um item da tabela de atributos do tema. Os pol&iacute;gonos que possu&iacute;rem o mesmo valor ser&atilde;o considerados no mesmo grupo e suas divisas eliminadas. Caso n&atilde;o tenha sido escolhido nenhum item, todas os pol&iacute;gonos ser&atilde;o agrupados em um s&oacute;.",
			complemento:"O resultado final ser&aacute; um novo tema com pol&iacute;gonos diferentes dos originais e cuja tabela de atributos conter&aacute; apenas o item escolhido. Caso as geometrias originais possuam fronteiras n�o ajustadas exatamente, o resultado pode apresentar pequenos pol�gonos internos.",
			tela:"ferramentas/dissolve/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.dissolve()"
		},
		"23": {
			titulo: "An�lise de geometrias",
			diretorio:"i3geo/ferramentas/analisageometrias",
			categoria:"3",
			pt:"Essa ferramenta permite processar elementos constituintes de um ou mais temas por meio de fun��es que atuam sobre a geometria que define o elemento. Essas fun��es possibilitam a realiza��o de c�lculos, como �rea e per�metro, e cruzamentos entre geometrias, como uni�o e intersec��o. Para utilizar a ferramenta, deve-se selecionar cada elemento desejado e convert�-los em uma geometria ou conjunto de geometrias. Feito isso, as geometrias convertidas podem ser utilizadas nas opera��es.",
			complemento:"Para selecionar elementos, utilize as op��es de sele��o dispon�veis no i3Geo ou ent�o clique no mapa no elemento desejado ap�s ativar a ferramenta. A sele��o � feita sobre o tema escolhido. Para ver as geometrias capturadas, clique na guia 'listar'. Para usar as op��es de an�lise, mostradas na guia 'an�lise', voc� deve marcar as geometrias desejadas na guia 'listar'.",
			tela:"ferramentas/analisageometrias/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.analisaGeometrias()"
		},
		"24": {
			titulo: "Entorno (buffer)",
			diretorio:"i3geo/ferramentas/buffer",
			categoria:"3",
			pt:"O entorno, ou buffer, &eacute; um pol&iacute;gono que circunda um elemento geogr&aacute;fico em uma dist&acirc;ncia fixa. Para o c�lculo de dist�ncia o i3Geo utiliza a proje��o polic�nica. Os atributos do tema alvo s�o copiados para os pol�gonos resultantes e uma nova camada � adicionada ao mapa. Opcionalmente, os pol�gonos resultantes podem ser unidos como um �nico.",
			complemento:"Para gerar o entorno, voc&ecirc; precisa selecionar alguns elementos de um tema. Utilize para isso a op&ccedil;&atilde;o de sele&ccedil;&atilde;o ou a tabela de atributos do tema desejado.",
			tela:"ferramentas/buffer/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.buffer()"
		},
		"25": {
			titulo: "Agrupa elementos",
			diretorio:"i3geo/ferramentas/agrupaelementos",
			categoria:"3",
			pt:"Essa ferramenta transforma v&aacute;rios elementos selecionados de um tema em um s&oacute; criando pol&iacute;gonos agrupados. Para definir quais elementos devem ser unidos uns com os outros &eacute; preciso escolher um item da tabela de atributos do tema. Os elementos que possu&iacute;rem o mesmo valor nesse item ser&atilde;o considerados no mesmo grupo e suas divisas eliminadas. Caso n&atilde; tenha sido escolhido nenhum item, todas os elementos ser&atilde;o agrupados em um s&oacute;.",
			complemento:"O resultado final ser&aacute; um novo tema com pol&iacute;gonos diferentes dos originais e cuja tabela de atributos conter&aacute; apenas o item escolhido.",
			tela:"ferramentas/agrupaelementos/exemplo.htm",
			apijs:"i3GEO.analise.dialogo.agrupaElementos()"
		},
		"26": {
			titulo: "Upload de arquivo DBF ou CSV",
			diretorio:"i3geo/ferramentas/uploaddbf",
			categoria:"4",
			pt:"Utilize essa op&ccedil;&atilde;o para acrescentar um tema baseado nas coordenadas x e y presentes em uma tabela DBF ou arquivo CSV. Os valores de x e y devem utilizar '.' como separador de decimal. Se as coordenadas estiverem na proje&ccedil;&atilde;o geogr&aacute;fica, os valores dever&atilde;o estar em d&eacute;cimos de grau, com sinal negativo para pontos ao sul do equador e oeste do meridiano 0.",
			complemento:"O arquivo DBF ou CSV ser� armazenado no servidor onde o i3geo est� instalado e permanecer� l� at� que os arquivos tempor�rios sejam apagados. N�o utilize essa op��o se existir alguma restri��o ao uso do arquivo e se a pol�tica de acesso aos dados, definidas pela entidade que hospeda o i3geo, n�o for compat�vel com essas restri&ccedil;&otilde;es.",
			tela:"ferramentas/uploaddbf/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas.dialogo.uploaddbf()"
		},
		"27": {
			titulo: "Upload se shapefile",
			diretorio:"i3geo/ferramentas/upload",
			categoria:"4",
			pt:"Permite que um arquivo do tipo shapefile seja enviado ao servidor e inclu�do no mapa como uma nova camada. O arquivo shapefile ser� armazenado no servidor onde o i3geo est� instalado e permanecer� l� at� que os arquivos tempor�rios sejam apagados. Um shapefile � composto basicamente por tr�s tipos de arquivos (dbf, shp e shx), todos devem ser submetidos",
			complemento:"N�o utilize essa op��o se existir alguma restri��o ao uso do arquivo e se a pol�tica de acesso aos dados, definidas pela entidade que hospeda o i3geo, n�o for compat�velcom essas restri&ccedil;&otilde;es.",
			tela:"ferramentas/upload/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas.dialogo.upload()"
		},
		"28": {
			titulo: "Conex�o WMS",
			diretorio:"i3geo/ferramentas/conectarwms",
			categoria:"4",
			pt:"Uma conex�o WMS permite que dados dispon�veis em outros servidores sejam inclu�dos como camadas no i3Geo. Na ferramenta de conex�o � mostrada uma lista de endere�os previamente cadastrados, mas pode-se digitar um outro endere�o qualquer, desde que seja um servi�o no padr�o WMS. Ap�s um servi�o ser escolhido, a lista de camadas dispon�veis � mostrada na guia 'Temas'.",
			complemento:"Camadas obtidas por meio de conex�o WMS n�o permitem que algumas opera��es dispon�veis no i3Geo sejam executadas, como por exemplo a altera��o na legenda, sele��o, entre outras. Quando um servidor apresentar problemas, a camada n�o poder� ser adicionada.",
			tela:"ferramentas/conectarwms/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas.conectarwms.upload()"
		},
		"29": {
			titulo: "Conex�o GeoRSS",
			diretorio:"i3geo/ferramentas/conectargeorss",
			categoria:"4",
			pt:"Uma conex�o GeoRSS permite obter a localiza��o de conte�dos dispon�veis no formato RSS com coordenadas geogr�ficas inclu�das. Na ferramenta de conex�o � mostrada uma lista de endere�os previamente cadastrados, mas pode-se digitar um outro endere�o qualquer, desde que seja um servi�o no padr�o GeoRSS.",
			complemento:"A camada adicionada ao mapa baseia-se em um arquivo shapefile criado temporariamente pelo i3Geo. Caso o servi�o GeoRSS sofrer altera��es, como a inclus�o de um novo item, � necess�rio fazer novamente a conex�o para que a camada reflita a altera��o.",
			tela:"ferramentas/conectargeorss/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas.conectargeorss.upload()"
		},
		"30": {
			titulo: "Nuvem de tags",
			diretorio:"i3geo/ferramentas/nuvemtags",
			categoria:"4",
			pt:"A nuvem de tags � uma forma de localizar camadas dispon�veis para ser vistas no mapa. A busca � feita por meio de tags ou palavras-chave. As tags s�o registradas pelo administrador do i3Geo para cada tema dispon�vel na �rvore de temas.",
			complemento:"Ao escolher uma tag, � feita dos temas correspondentes e o resultado � adicionado � arvore de temas. Opcionalmente, o usu�rio pode escolher navegar na nuvem 'animada' que mostra as tags como um globo 3d.",
			tela:"ferramentas/nuvemtags/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas.conectargeorss.nuvemTags()"
		},
		"31": {
			titulo: "Procurar tema",
			diretorio:"classe_arvoredetemas.js",
			categoria:"4",
			pt:"Localiza temas dispon�veis nos menus da �rvore de adi��o de temas. Os temas localizados s�o inclu�dos em um novo n� da �rvore, possibilitando sua adi��o ao mapa.",
			complemento:"Para procurar um tema, digite a palavra ou frase no campo de texto e clique no �cone existente no lado direito.",
			apijs: "i3GEO.arvoreDeTemas.buscaTema(palavra)"
		},
		"32": {
			titulo: "Acesso aos arquivos do servidor",
			diretorio:"classe_arvoredetemas.js",
			categoria:"4",
			pt:"Os usu�rios cadastrados no i3Geo como editores podem acessar arquivos existentes no servidor onde o i3Geo est� instalado. A navega��o permite localizar arquivos shapefile para inclus�o como uma nova camada no mapa.",
			complemento:"Por motivos de seguran�a, apenas os editores podem utilizar essa op��o. O cadastramento � feito pelo administrador do i3Geo, por meio da edi��o do arquivo ms_configura.php.",
			apijs: "i3GEO.arvoreDeTemas.montaDir(node)"
		},
		"33": {
			titulo: "�rvore de endere�os WMS",
			diretorio:"classe_arvoredetemas.js",
			categoria:"4",
			pt:"A conex�o com servi�os WMS (OGC) pode ser feita escolhendo-se o servidor e as camadas dispon�veis diretamente na �rvore de temas. A lista de endere�os utilizada nesse n� da �rvore � a mesma utilizada na op��o de conex�o que � aberta por meio do �cone 'Conex�o MWS'. Quando uma camada for encontrada no WMS, � mostrado um 'box' ao lado do nome da camada, permitindo sua adi��o ao mapa.",
			complemento:"A vantagem do uso da �rvore � a velocidade de acesso � lista de camadas, uma vez que o i3Geo faz um 'cache' do arquivo XML gerado com a lista de camadas dispon�veis. A �rvore permite ainda a vis�o correta da hierarquia de camadas configuradas no WMS, que pode ter v�rios n�veis. Cada vez que um usu�rio tenta acessar um WMS o sucesso ou n�o da conex�o � registrado, assim, � poss�vel mostrar ao lado de cada endere�o o percentual de tentativas de conex�o v�lidas.",
			apijs: "i3GEO.arvoreDeTemas.listaWMS(node)"
		},
		"34": {
			titulo: "Sistemas",
			diretorio:"classe_arvoredetemas.js",
			categoria:"4",
			pt:"O n� 'Sistemas' da �rvore de adi��o de temas, lista aplicativos especiais que precisam de intera��o com o usu�rio para a cria��o de uma camada.",
			complemento:"Alguns sistemas s�o fornecidos com a instala��o padr�o do i3Geo, mas cada administrador pode criar seus pr�prios.",
			apijs: "i3GEO.arvoreDeTemas.listaSistemas(g_sid,g_locaplic,funcao)"
		},
		"35": {
			titulo: "Procurar ocorr�ncias",
			diretorio:"i3geo/ferramentas/busca",
			categoria:"5",
			pt:"Cada tema possu� um conjunto de dados descritivos associados aos elementos geogr�ficos (tabela de atributos). A op��o 'procurar' realiza uma pesquisa nesses atributos e localiza as correspond�ncias. O resultado � mostrado em uma lista de elementos que permite destacar cada um deles.",
			complemento:"Para fazer a busca deve-se selecionar em quais titens da tabela de atributos a mesma ser� feita, podendo-se escolher mais de um. A busca pode ser feita no mapa todo ou apenas na regi�o vis�vel do mapa.",
			tela:"ferramentas/busca/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.procuraratrib()"
		},
		"36": {
			titulo: "Topon�mia",
			diretorio:"i3geo/ferramentas/toponimia",
			categoria:"5",
			pt:"A topon�mia s�o os textos mostrados no mapa que identificam lugares ou elementos que constituem um tema. Os textos s�o baseados na tabela de atributos de cada tema, que cont�m os dados descritivos de cada elemento.",
			complemento:"Ao inserir uma topon�mia, um novo tema � adicionado ao mapa, podendo ser exclu�do ou movimentado. Dessa forma � poss�vel incluir mais de um tema com a topon�mia. Ao inserir a topon�mia deve-se esco�her o item da tabela de atributos e, caso necess�rio, pode-se modificar as op��es padr�o de simbologia utilizadas nos textos, como fonte, cor, m�scara, etc. � poss�vel ainda testar as op��es antes de concluir a inclus�o da topon�mia.",
			tela:"ferramentas/toponimia/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.toponimia()"
		},
		"37": {
			titulo: "Etiquetas",
			diretorio:"i3geo/ferramentas/etiqueta",
			categoria:"5",
			pt:"As etiquetas s&atilde;o textos descritivos mostrados no mapa quando o mouse &eacute; estacionado por alguns instantes sobre um elemento. Cada tema pode ter uma etiqueta ativa, sendo esta baseada em um item da tabela de atributos do tema.",
			complemento:"Para ver as etiquetas, ative a opera&ccedil;&atilde;o de identifica&ccedil;&atilde;o.",
			tela:"ferramentas/etiqueta/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.etiquetas()"
		},
		"38": {
			titulo: "Filtro",
			diretorio:"i3geo/ferramentas/filtro",
			categoria:"5",
			pt:"Filtrar um tema significa definir um crit�rio para que um determinado elemento seja mostrado. Esse crit�rio � baseado nos dados descritivos (tabela de atributos). Um filtro � uma express�o que relaciona os itens da tabela de atributos e seus valores, por exemplo, 'UF' = 'SP', onde 'UF' � o nome da coluna (item) e 'SP' � o valor. As express�es podem ser definidas por meio de um 'construtor' (guia default da ferramenta) ou digitando-se diretamente a express�o. Veja <a href='http://mapserver.org/mapfile/expressions.html#mapserver-expressions' >como</a>.",
			complemento:"Cada tema pode ter apenas um filtro. O filtro apenas deixa de mostrar os dados no mapa, ou seja, os dados continuam na tabela de atributos. Antes de aplicar um filtro, pode-se test�-lo para verificar seu efeito. O construtor de express�es permite a utiliza��o de mais de uma coluna, para isso, deve-se adicionar novas linhas e escolher um conector, como 'e' ou 'ou'. Por exemplo, em um tema com os munic�pios pode-se mostrar apenas aqueles de determinados estados escolhendo-se 'colun' = 'valor' 'e' 'coluna' = 'valor'.",
			tela:"ferramentas/filtro/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.filtro()"
		},
		"39": {
			titulo: "Tabela",
			diretorio:"i3geo/ferramentas/tabela",
			categoria:"5",
			pt:"Cada tema possui informa��es descritivas associadas a cada elemento, esses dados s�o conhecidos como 'tabela de atributos'. Essa op��o mostra os dados existentes na tabela e permite a realiza��o de uma s�rie de opera��es diretamente sobre os registros existentes, como por exemplo, sele��o, zoom, relat�rios e gr�ficos.",
			complemento:"Como o n�mero de registros de um tema pode ser grande, os dados s�o mostrados em p�ginas. Ao lado de cada registro existe uma caixa que permite marcar os registros. Os registros marcados s�o mostrados na guia 'Marcados'. As opera��es dispon�veis nessa ferramenta atuam sobre todos os elementos da tabela ou sobre os selecinados. Para selecionar os elementos marcados, utilize a op��o 'Ativa sele��o' na guia 'Marcados'.",
			tela:"ferramentas/tabela/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.tabela()"
		},
		"40": {
			titulo: "Gr�ficos",
			diretorio:"i3geo/ferramentas/graficotema",
			categoria:"5",
			pt:"Permite inserir gr�ficos em cada elemento que comp�e uma camada para representar valores associados. Para a montagem de cada gr&aacute;fico &eacute; necess&aacute;rio selecionar um tema que contenha os dados que ser&atilde;o representados. Os dados s&atilde;o aqueles que encontram-se na tabela de atributos do tema.",
			complemento:"Ap&oacute;s selecionado o tema, &eacute; mostrada uma lista com os itens existentes na tabela de atributos. Escolha os itens que ser&atilde;o utilizados no gr&aacute;fico clicando no box que aparece na lista de itens. Cada item ir&aacute; compor uma fatia do gr&aacute;fico. Ao lado do item, &eacute; mostrada a cor que ser&aacute; utilizada na representa&ccedil;&atilde;o. Cada cor &eacute; definida em RGB. Na guia 'propriedades' &eacute; poss&iacute;vel definir propriedades de representa&ccedil;&atilde;o de cada gr&aacute;fico. As defini&ccedil;&otilde;es afetar&atilde;o a forma de cada gr&aacute;fico. Cada gr&aacute;fico adicionado &eacute; inclu&iacute;do no mapa como um novo tema.",
			tela:"ferramentas/graficotema/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.graficotema()"
		},
		"41": {
			titulo: "Editor de legenda",
			diretorio:"i3geo/ferramentas/legenda",
			categoria:"5",
			pt:"A legenda de um tema consiste nas defini��es dos s�mbolos utilizados na representa��o de cada elemento. A l�m dos s�mbolos, uma das propriedades da legenda � o tipo de classifica��o utilizado na representa��o dos dados, por exemplo, pode-se mostrar todos os elementos com um �nico s�mbolo ou agrupar elementos e utilizar s�mbolos diferentes para cada grupo. No editor, a guia 'Classes' permite definir a classifica��o e na guia principal s�o mostrados os s�mbolos. Quando um s�mbolo � clicado, � ativada a guia que permite definir as caracter�sticas do s�mbolo.",
			complemento:"As classes s�o definidas por meio de express�es que definem um tipo de filtro que ser� usado para definir que elementos fazem parte de cada classe. O editor possui alguns m�todos para defini��o autom�tica das classes, mas pode-se incluir classes livremente digitando-se o filtro. Veja <a href='http://mapserver.org/mapfile/class.html' >como</a>.",
			tela:"ferramentas/legenda/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.editaLegenda()"
		},
		"42": {
			titulo: "Opacidade",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Essa op��o modifica a opacidade de um tema permitindo ajustar a visibilidade dos elementos em rela��o aos outros temas. A opacidade varia de 0 a 100, sendo 100 o mais opaco.",
			complemento:"",
			apijs:"i3GEO.tema.mudatransp(idtema)"
		},
		"43": {
			titulo: "Altera nome",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Essa op��o permite alterar o nome do tema. O novo nome ser� mostrado no mapa e tamb�m na legenda.",
			complemento:"",
			apijs:"i3GEO.tema.mudanome(idtema)"
		},
		"44": {
			titulo: "Mostrar em janela",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"5",
			pt:"Inclui um ret�ngulo na tela que segue a movimenta��o do mouse e mostra o tema escolhido. Possibilita destacar a visualiza��o de uma camada sobre as outras.",
			complemento:"",
			apijs:"i3GEO.navega.destacaTema.inicia()"
		},
		"45": {
			titulo: "Zoom para o tema",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"5",
			pt:"Ajusta a visualiza��o do mapa alterando a extens�o geogr�fica para mostrar todos os componentes de um determinado tema.",
			complemento:"Essa op��o � mostrada como um pequeno �cone localizado logo abaixo de um tema na �rvore de temas.",
			apijs:"i3GEO.tema.zoom(idtema)"
		},
		"46": {
			titulo: "Farol indicativo de escala",
			diretorio:"",
			categoria:"5",
			pt:"Identifica se o tema possu� uma escala compat�vel ou n�o com a escala do mapa. O farol � um �cone com cores que variam entre verde, amarelo e vermelho, conforme a escala do mapa atual. A compatibilidade da escala � definida em fun��o da escala da fonte dos dados cartogr�ficos utilizada pelo tema.",
			complemento:"Essa op��o � mostrada como um pequeno �cone localizado logo abaixo de um tema na �rvore de camadas."
		},
		"47": {
			titulo: "Alterar ordem de desenho",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Os temas dispon�veis no mapa s�o desenhados como camadas que se sobrep�em para compor o mapa. Como uma pilha, as camadas seguem uma ordem de desenho, sendo que na lista de temas o primeiro que � mostrado � o �ltimo desenhado. A ordem da pilha pode ser alterada clicando-se e arrastando um tema (clicando no nome do tema) ou por meio de �cones que movem para cima ou para baixo apenas uma posi��o.",
			complemento:"Quando um novo tema � adicionado ao mapa, o i3Geo ir� posicion�-lo procurando evitar alguns tipos de sobreposi��o. Temas RASTER ou poligonais s�o sempre inseridos abaixo dos temas lineares e pontuais.",
			apijs:"i3GEO.tema.sobe(idtema) ou i3GEO.tema.desce(idtema)"
		},
		"48": {
			titulo: "Excluir tema",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Exclui um tema da lista de temas dispon�veis no mapa atual. A exclus�o pode ser feita arrastando-se o tema para o �cone da 'lixeira' ou ent�o por meio de um �cone mostrado abaixo de cada tema.",
			complemento:"Temas locais criados pelo usu�rio n�o podem ser recuperados ap�s uma exclus�o. J� os temas que constam na lista '+Temas' poder�o ser adicionados ao mapa novamente.",
			apijs:"i3GEO.tema.exclui(idtema)"
		},
		"48a": {
			titulo: "Selecionar elementos",
			diretorio:"i3geo/ferramentas/selecao.js",
			categoria:"5",
			pt:"Selecionar elementos consiste em destacar um sub-conjunto do conjunto total de componentes de um tema. Algumas opera��es do i3Geo atuam sobre o conjunto selecionado, como buffer, exporta��o, etc. Os elementos selecionados s�o mostrados em uma cor especial, diferente daquela definida na legenda do tema. Os temas que possuem elementos selecionados s�o marcados com um �cone circular mostrado junto ao nome na lista de camadas. A janela de op��es para sele��o, al�m das op��es de tipo de opera��o, permite gerar gr�ficos din�micos e criar um novo tema com base nos elementos selecionados.",
			complemento:"Existem v�rias maneiras de fazer a sele��o: clicando-se sobre cada elemento, desenhando-se um ret�ngulo ou pol�gono no mapa, definindo-se uma express�o que ir� buscar os elementos aderentes (com base na tabela de atributos) ou cruzando-se um tema com outro. Tendo-se um conjunto j� definido, novos elementos podem ser acrescentados ou retirados da sele��o.",
			tela:"ferramentas/selecao/exemplo.htm",
			apijs:"i3GEO.selecao.janelaOpcoes()"
		},
		"49": {
			titulo: "Impress�o",
			diretorio:"i3geo/ferramentas/imprimir",
			categoria:"6",
			pt:"Utilize essa op��o para gerar uma p�gina espec�fica para impress�o do mapa. Na janela de op��es deve-se escolher o tipo de p�gina desejada, que pode variar desde p�ginas padronizadas em PDF at� aplicativos onde o mapa � montado de forma interativa.",
			complemento:"",
			tela:"ferramentas/imprimir/exemplo.htm",
			apijs:"i3GEO.configura.funcoesBotoes"
		},
		"50": {
			titulo: "C�lculo de dist�ncias",
			diretorio:"i3geo/classesjs/classe_analise.js",
			categoria:"6",
			pt:"Ativa o modo de c�lculo de dist�ncias, permitindo que a cada clique do mouse sobre o mapa seja feito o c�lculo da dist�ncia em rela��o ao ponto anterior e em rela��o a todos os pontos clicados. O resultado � mostrado em uma janela aberta sobre o mapa. Em cada ponto � tamb�m desenhado um c�rculo representando a dist�ncia at� o �ltimo ponto.",
			complemento:"O c�lculo de dist�ncia � aproximado e depende da escala do mapa (quanto mais detalhado o mapa melhor). A f�rmula de c�lculo � baseada em <a href='http://www.movable-type.co.uk/scripts/latlong.html' >http://www.movable-type.co.uk/scripts/latlong.html</a>. Para parar o c�lculo basta clicar sobre um dos pontos j� inseridos.",
			apijs:"i3GEO.configura.funcoesBotoes"
		},
		"51": {
			titulo: "C�lculo de �rea",
			diretorio:"i3geo/classesjs/classe_analise.js",
			categoria:"6",
			pt:"Ativa o modo de c�lculo de �rea, permitindo que seja desenhado um pol�gono sobre o mapa para c�lculo da �rea. O pol�gono � criado clicando-se no mapa no local onde se quer criar um v�rtice.",
			complemento:"O c�lculo de dist�ncia � aproximado e depende da escala do mapa (quanto mais detalhado o mapa melhor). O c�lculo � baseado no tamanho do pixel do mapa, calculado ao iniciar a ferramenta. Esse c�lculo baseia-se na proje��o polic�nica com par�metros definidos em fun��o da extens�o geogr�fica do mapa atual.",
			apijs:"i3GEO.configura.funcoesBotoes"
		},
		"52": {
			titulo: "Alterar interface",
			diretorio:"i3geo/classesjs/classe_interface.js",
			categoria:"6",
			pt:"O i3Geo pode usar diferentes interfaces para manipular a navega��o sobre o mapa. Por padr�o, � utilizada uma interface pr�pria, desenvolvida para o i3Geo, mas pode-se optar pelo uso do Flamingo, OpenLayers, Google Maps ou Google Earth.",
			complemento:"As funcionalidade do i3Geo s�o afetadas pela interface escolhida, sendo que algumas opera��es diferem de uma para outra. A maior parte das funcionalidades s�o implementadas apenas na interface padr�o. No caso do Google Earth , que permite a visualiza��o do mapa em 3d, � necess�rio a instala��o de um plugin espec�fico.",
			apijs:"i3GEO.configura.oMenuData"
		},
		"53": {
			titulo: "Obter imagens geradas",
			diretorio:"i3geo/classesjs/classe_gadgets.js",
			categoria:"6",
			pt:"As imagens geradas durante o uso do mapa s�o registradas na mem�ria do i3Geo, dessa forma � poss�vel obter todas essas imagens. Essa op��o lista e mostra essas imagens, incluindo a extens�o geogr�fica de cada uma e legenda.",
			complemento:"Essa op��o � �til para os casos em que se deseja capturar as imagens geradas para a gera��o de apresenta��es, impress�o, etc.",
			apijs:"i3GEO.gadgets.quadros.listaImagens()"
		},
		"54": {
			titulo: "Anima��o",
			diretorio:"i3geo/ferramentas/opcoes_animacao",
			categoria:"6",
			pt:"As imagens geradas durante o uso do mapa s�o registradas na mem�ria do i3Geo, dessa forma � poss�vel recuperar as imagens de forma sequencial criando um efeito de anima��o.",
			complemento:"A op��o de anima��o utiliza um n�mero limitado de quadros, que s�o preenchidos de forma sequencial e c�clica. Utilize a op��o n�mero de quadros para aumentar esse n�mero. Utilize a op��o de tempo para definir o tempo de transi��o entre um quadro e outro (tempo em milisegundos). Para obter o resultado desejado, planeje sua anima��o antes. Para obter as imagens individualmente, utilize a op��o 'Pegar imagens'.",
			apijs:"i3GEO.gadgets.quadros.anima()"
		},
		"55": {
			titulo: "Extens�o geogr�fica",
			diretorio:"i3geo/ferramentas/mostraexten",
			categoria:"7",
			pt:"A extens�o geogr�fica � a abrang�ncia espacial do mapa definido por meio de uma lista de coordenadas em d�cimos de grau e na ordem menor longitude, menor latitude, maior longitude, maior latitude. A extens�o geogr�fica do mapa pode ser alterada digitando-se novas coordenadas por meio dessa ferramenta.",
			complemento:"O resultado final do mapa quando se altera a extens�o pode n�o corresponder as espectativas, uma vez que o mapa � um ret�ngulo cujas propor��es podem n�o ser compat�veis com as coordenadas digitadas.",
			tela:"ferramentas/mostraexten/exemplo.htm",
			apijs:"i3GEO.configura.funcoesBotoes"
		},
		"56": {
			titulo: "Deslocamento do mapa - PAN",
			diretorio:"",
			categoria:"7",
			pt:"O deslocamento do mapa do tipo PAN � realizado de forma interativa, deve-se clicar em um ponto do mapa e arrastar o mouse para a nova posi��o. O resultado � o deslocamento da extens�o geogr�fica do mapa movendo-se o ponto inicial at� o segundo ponto.",
			complemento:"Caso o primeiro ponto seja muito pr�ximo do segundo, ou se o usu�rio clicar e soltar o mouse, o ponto clicado � movido para o centro do mapa.",
			apijs:""
		},
		"57": {
			titulo: "Deslocamento direcional",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"O deslocamento direcional movimenta o mapa para o norte, sul, leste ou oeste uma dist�ncia fixa.",
			complemento:"Essa forma de deslocamento exige que o usu�rio clique apenas uma vez em um bot�o para realizar o deslocamento.",
			apijs:"i3GEO.navega.panFixo(locaplic,sid,direcao,w,h,escala)"
		},
		"58": {
			titulo: "Rosa dos ventos",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"A rosa dos ventos � uma imagem mostrada na posi��o atual do mouse e que possibilita deslocar, aproximar ou afastar o mapa. A rosa aparece quando o mouse � estacionado por alguns instantes sobre o mapa e permite movimentar o mapa sem a necessidade de abandonar a ferramenta escolhida no momento.",
			complemento:"A rosa dos ventos � opcional e por padr�o n�o fica habilitada.",
			apijs:"i3GEO.navega.mostraRosaDosVentos() e i3GEO.eventos.MOUSEPARADO"
		},
		"59": {
			titulo: "Aproximar",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"Aproxima o mapa tendo como refer�ncia o ponto central. A aproxima��o ocorre por um fator fixo, modificando a escala atual.",
			complemento:"",
			apijs:"i3GEO.navega.zoomin()"
		},
		"60": {
			titulo: "Afastar",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"Afasta o mapa tendo como refer�ncia o ponto central. O afastamento ocorre por um fator fixo, modificando a escala atual.",
			complemento:"",
			apijs:"i3GEO.navega.zoomout()"
		},
		"61": {
			titulo: "Aproximar regi�o",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"Ao ativar essa op��o deve-se desenhar um ret�ngulo sobre o mapa abrangendo a regi�o que se quer enquadrar a �rea de visualiza��o. O resultado � a aproxima��o do mapa em uma determinada regi�o.",
			complemento:"Para desenhar o ret�ngulo deve-se clicar em um ponto do mapa e arrastar o mouse. A medida que isso ocorre, � desenhado um ret�ngulo sobre o mapa.",
			apijs:"i3GEO.navega.zoomBox"
		},
		"62": {
			titulo: "Definir escala",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"A altera��o da escala do mapa � uma das formas de aproximar ou afastar a visualiza��o. Nessa op��o, para alterar a escala deve-se digitar o novo valor do denominador da escala que ser� aplicado.",
			complemento:"",
			apijs:"i3GEO.navega.aplicaEscala(locaplic,sid,escala)"
		},
		"63": {
			titulo: "Centralizar em um ponto",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"7",
			pt:"Essa op��o desloca o centro do mapa atual para um determinado ponto com coordenadas conhecidas. A escala do mapa n�o � alterada.",
			complemento:"Para usar essa opera��o, digite as coordenadas desejadas nos campos de formul�rio utilizados para mostrar a coordenada geogr�fica atual do mouse.",
			apijs:"i3GEO.navega.zoomponto(locaplic,sid,x,y)"
		},
		"64": {
			titulo: "Aproximar ou afastar din�mico",
			diretorio:"i3geo/classesjs/classe_barradebotoes.js",
			categoria:"7",
			pt:"A opera��o de zoom din�mico permite afastar ou aproximar o mapa por meio de um controle deslizante. O usu�rio move um controle para cima ou para baixo e ao soltar o mouse o mapa � modificado.",
			complemento:"",
			apijs:"i3GEO.barraDeBotoes.ativaBarraDeZoom()"
		},
		"65": {
			titulo: "Zoom pr�ximo ou anterior",
			diretorio:"i3geo/classesjs/classe_gadgets.js",
			categoria:"7",
			pt:"Ao navegar pelo mapa as posi��es obtidas s�o armazenadas em mem�ria. Essa op��o permite reestabelecer a abrang�ncia espacial anterior ou posterior, se houver, de forma sequencial.",
			complemento:"Essa opera��o n�o restaura a situa��o do mapa apenas modifica a abrang�ncia espacial com base nos temas vis�veis no mapa atual.",
			apijs:"i3GEO.gadgets.mostraHistoricoZoom(id)"
		},
		"66": {
			titulo: "Mapa de refer�ncia",
			diretorio:"i3geo/classesjs/classe_maparef.js",
			categoria:"7",
			pt:"O mapa de refer�ncia consiste em uma imagem com escala diferente do corpo do mapa atual, permitindo que a abrang�ncia geogr�fica atual seja mostrada em um contexto mais amplo. A navega��o pode ser feito sobre o mapa de refer�ncia, deslocando-se o ret�ngulo que mostra a abrang�ncia atual para um outro local.",
			complemento:"O mapa de refer�ncia pode ser fixo ou n�o. O mapa de refer�ncia din�mico pode ser montado tendo como base as camadas vistas no mapa atual. Nesse caso, a topon�mia especificada e a simbologia podem gerar mapas com pouca visibilidade.",
			apijs:"i3GEO.maparef"
		},
		"67": {
			titulo: "Extens�o total",
			diretorio:"",
			categoria:"7",
			pt:"Ao iniciar o mapa, a primeira extens�o geogr�fica utilizada para mostrar o mapa � armazenada em mem�ria. Essa op��o permite aplicar essa extens�o ao mapa atual, restaurando a abrang�ncia geogr�fica inicial.",
			complemento:"A aplica��o da extens�o total n�o restaura a situa��o inicial de camadas ligadas e desligadas, mantendo a situa��o do mapa atual.",
			apijs:""
		},
		"68": {
			titulo: "Google Maps",
			diretorio:"i3geo/ferramentas/googlemaps",
			categoria:"7",
			pt:"Essa op��o mostra em uma janela interna o mapa produzido pelo Google Maps. A janela � sincronizada com o mapa mostrado no i3Geo, permitindo que a navega��o em um ou noutro modifique os dois mapas.",
			complemento:"Al�m das op��es de tipo de mapa � poss�vel tra�ar rotas no Google Maps e mostrar nessa janela o mapa visto no i3Geo. Ao tra�ar uma rota, o resultado � inclu�do no i3Geo como uma nova camada, que pode inclusive ser obtida via download. Quando o mapa do i3Geo � inclu�do no mapa do Google, os pol�gonos com s�mbolos n�o transparentes podem encubrir o mapa, nesse caso, altere a legenda das camadas para permitir a visualiza��o correta.",
			apijs:"i3GEO.configura.funcoesBotoes a chave de acesso da API do Google Maps � definida em ms_configura.php",
			tela:"ferramentas/googlemaps/index.php"
		},
		"69": {
			titulo: "Visualiza��o 3d",
			diretorio:"i3geo/ferramentas/3d",
			categoria:"7",
			pt:"A visualiza��o em 3d gera um arquivo no formato 'wrl' considerando a abrang�ncia espacial do mapa atual. Para a gera��o do modelo � utilizado um mapa de fundo com a representa��o da altimetria, esse mapa � obtido por meio de um servi�o WMS baseado nos dados SRTM.",
			complemento:"Para ver o modelo 3d � necess�rio a instala��o de um plugin no navegador, ou ent�o, deve-se salvar o arquivo para visualiza��o em algum outro software. O modelo 3d � simplificado, permitindo apenas a navega��o b�sica.",
			apijs:"i3GEO.configura.funcoesBotoes",
			tela:"ferramentas/3d/exemplo.htm"
		},
		"70": {
			titulo: "Identificar",
			diretorio:"i3geo/ferramentas/identifica",
			categoria:"8",
			pt:"Com essa ferramenta ativa pode-se clicar em um elemento do mapa e visualizar os atributos associados. Quando a janela � aberta, deve-se escolher o tema que ser� identificado em uma lista. Al�m dos temas, s�o mostrados alguns sistemas especiais que permitem a busca de dados em fun��o da coordenada clicada, por exemplo, � poss�vel abrir uma p�gina do IBGE com informa��es sobre munic�pios.",
			complemento:"Alguns temas permitem a identifica��o sem o clique no mapa, os dados s�o mostrados quando o mouse � estacionado sobre um ponto no mapa. Em 'Buscadores web' � mostrada uma lista de sistemas que permitem a busca de dados por meio de coordenadas. A guia propriedades permite definir a toler�ncia de busca, ou seja, quantos pixels ser�o considerados entorno do ponto clicado.",
			apijs:"i3GEO.configura.funcoesBotoes"
		},
		"71": {
			titulo: "Busca r�pida",
			diretorio:"i3geo/ferramentas/buscarapida",
			categoria:"8",
			pt:"Essa op��o permite localizar dados com base em palavras ou frases, por esemplo 'S�o Paulo'. A busca � feita em um Web Service cujo banco de dados pode variar em cada instala��o do i3Geo. Quando um lugar � encontrado, uma nova janela � mostrada na tela com o resultado. Clicando-se nos links dispon�veis, o mapa � deslocado para o lugar definido e uma nova camada � adicionada ao mapa.",
			complemento:"A busca � feita tamb�m no Web Service do Google, permitindo a localiza��o de endere�os.",
			apijs:"i3GEO.gadgets.mostraBuscaRapida(id)",
			tela:"ferramentas/buscarapida/exemplo.htm",
			gadget:"ferramentas/buscarapida/gadget.php?palavra=tanabi&locaplic=../../../i3geo"
		},
		"72": {
			titulo: "Localizar IP",
			diretorio:"i3geo/classesjs/classe_navega.js",
			categoria:"8",
			pt:"Ao clicar nesse �cone � mostrado um ponto no mapa identificando a coordenada geogr�fica da localiza��o do usu�rio.",
			complemento:"Essa fun��o � baseada em uma tabela de correspond�ncia entre o n�mero IP e localidades. A localiza��o ser� mais precisa quanto for essa tabela de correspond�ncia.",
			apijs:"i3GEO.navega.zoomIP()"
		},
		"73": {
			titulo: "Wikipedia",
			diretorio:"i3geo/ferramentas/wiki",
			categoria:"8",
			pt:"A <a href='http://pt.wikipedia.org/wiki/P%C3%A1gina_principal' target='_blank' >Wikipedia</a> � uma base de conhecimento livre. Alguns dos artigos existentes s�o georreferenciados, permitindo sua busca por regi�o geogr�fica. Essa ferramenta abre uma janela sobre o mapa procurando resultados na Wikipedia para a regi�o de abrang�ncia do mapa.",
			complemento:"Para maior performance, o mapa deve estar na escala 1:500.000 ou maior. Ao navegar no mapa, a lista de lugares � atualizada.",
			apijs:"i3GEO.configura",
			tela:"ferramentas/wiki/exemplo.htm"
		},
		"74": {
			titulo: "Localizar fotos",
			diretorio:"i3geo/ferramentas/buscafotos",
			categoria:"8",
			pt:"Existem v�rios servi�os na Internet que permitem cadastrar e visualizar fotos georreferenciadas. Essa ferramenta procura fotos para a regi�o de abrang�ncia do mapa nos servi�os Panor�mio, Flicker e Locr.",
			complemento:"Para maior performance, o mapa deve estar na escala 1:150.000 ou maior.Ao passar o mouse sobre a foto, a sua localiza��o � mostrada no mapa.",
			apijs:"i3GEO.configura",
			tela:"ferramentas/buscafotos/exemplo.htm"
		},
		"75": {
			titulo: "Conflu�ncias",
			diretorio:"i3geo/ferramentas/confluence",
			categoria:"8",
			pt:"O projeto 'Confluences' registra expedi��es aos lugares na terra cuja coordenada geogr�fica corresponde ao cruzamento de 1 grau por 1 grau. Essa ferramenta permite localizar as conflu�ncias no mapa que est� sendo visto e abrir a p�gina correspondente.",
			complemento:"O mapa deve estar pelo menos na escala 1:2.000.000 para que as conflu�ncias sejam mostradas.",
			apijs:"i3GEO.configura",
			tela:"ferramentas/confluence/exemplo.htm"
		},
		"76": {
			titulo: "Conex�o WMS-T",
			diretorio:"i3geo/ferramentas/wmstime",
			categoria:"4",
			pt:"Uma conex�o WMS-T permite que dados dispon�veis em outros servidores sejam inclu�dos como camadas no i3Geo. Na ferramenta de conex�o � mostrada uma lista de endere�os previamente cadastrados, mas pode-se digitar um outro endere�o qualquer, desde que seja um servi�o no padr�o WMS-T. Ap�s ser escolhido o servi�o, deve-se definir o per�odo das imagens e o intervalo desejado (di�rio, mensal ou anual).",
			complemento:"Ap�s definido o per�odo, a ferramenta far� a busca das imagens para sua apresenta��o em sequ�ncia. Ao parar a anima��o, a imagem mostrada poder� ser acrescentada ao mapa como uma nova camada. A visualiza��o das imagens s� � poss�vel ap�s a carga de todas as datas selecionadas. Caso seja necess�rio cancelar a carga de uma ou mais datas, deve-se clicar em 'parar' na lista de imagens que est�o sendo carregadas.",
			tela:"ferramentas/wmstime/exemplo.htm",
			apijs:"i3GEO.arvoreDeTemas"
		},
		"78": {
			titulo: "Zoom para a sele��o",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Ajusta a extens�o geogr�fica do mapa tendo como base os elementos selecionados de um tema.",
			complemento:"Essa op��o � mostrada como um pequeno �cone, localizado ao lado do nome do tema, quando este possuir sele��o.",
			apijs:"i3GEO.tema.zoomsel(idtema)"
		},
		"79": {
			titulo: "Exporta SLD",
			diretorio:"i3geo/classesjs/classe_tema.js",
			categoria:"5",
			pt:"Exporta a legenda atual do tema para o formato SLD. O XML � mostrado na tela.",
			complemento:"O formato SLD � utilizado em clientes WMS. Essa fun��o objetiva auxiliar a constru��o de web Services OGC.",
			apijs:"i3GEO.tema.dialogo.sld(idtema) Esta op��o n�o possu� um diret�rio em i3geo/ferramentas. O XML � gerado diretamente na tela pelo programa classesphp/mapa_controle.php"
		},
		"80": {
			titulo: "Inserir gr�fico interativamente",
			diretorio:"i3geo/ferramentas/inseregrafico",
			categoria:"5",
			pt:"Insere gr�ficos em um elemento de um tema de forma interativa.",
			complemento:"",
			apijs:"i3GEO.mapa.dialogo.cliqueGrafico()"
		},
		"81": {
			titulo: "Converter tema em KML",
			diretorio:"i3geo/ferramentas/convertekml",
			categoria:"5",
			pt:"Convertendo um tema em KML � poss�vel utilizar outros softwares para visualizar os dados. O i3Geo permite isso de duas maneiras, a primeira utiliza um WMS embutido dentro de um KML, ou seja, os dados s�o vistos como uma imagem raster georreferenciada, sendo que as coordenadas e atributos n�o s�o acess�veis diretamente.Dessa forma, grandes volumes de dados podem ser utilizados, pois n�o ocorre o download dos arquivos.<p>A segunda maneira converte os dados de um tema em arquivos KML compactados contendo as coordenadas e atributos dos elementos que comp�em o tema.",
			complemento:"KML � um padr�o internacional e n�o � espec�fico do i3Geo. Conforme as caracter�sticas de cada servidor onde o i3Geo estiver instalado, o KML poder� permanecer dispon�vel por per�odos de tempo vari�veis. Para usar o KML no Google Earth, utilize a op��o desse software chamada 'adicionar link de rede'",
			tela:"ferramentas/convertekml/exemplo.htm",
			apijs:"i3GEO.mapa.dialogo.convertekml()"
		},
		"82": {
			titulo: "Download",
			diretorio:"i3geo/ferramentas/download",
			categoria:"2",
			pt:"Permite o download de um tema escolhido. No caso de dados vetoriais derivados de outros temas ou camadas com elementos selecionados, os dados s�o sempre fornecidos no formato 'shapefile'. Nos outros casos, o arquivo fornecido depender� da configura��o de cada camada, mas, por padr�o, os dados s�o fornecidos em 'shapefile'",
			complemento:"",
			tela:"ferramentas/download/exemplo.htm",
			apijs:"i3GEO.tema.dialogo.download()"
		},
		"83": {
			titulo: "Inserir texto interativamente",
			diretorio:"i3geo/ferramentas/inseretxt",
			categoria:"5",
			pt:"Insere textos em local do mapa de forma interativa.",
			complemento:"",
			apijs:"i3GEO.mapa.dialogo.cliqueTexto()"
		},
		"84": {
			titulo: "Gr�fico interativo",
			diretorio:"i3geo/ferramentas/graficointerativo",
			categoria:"3",
			pt:"Gerador de representa��o gr�fica de dados tabulares. Abre uma janela flutuante onde o usu�rio pode escolher os dados e o tipo de gr�fico desejado. Os dados s�o baseados em um dos temas existentes no mapa.",
			complemento:"Existem v�rias op��es de tratamento dos dados que permitem, por exemplo, mostrar os percentuais ou os dados brutos. Pode-se ainda ativar a navega��o din�mica, o que permite atualizar o gr�fico conforme � feita a navega��o sobre o mapa.",
			apijs:"i3GEO.analise.dialogo.graficoInterativo()"
		},
		"85": {
			titulo: "Miniaturas",
			diretorio:"i3geo/ferramentas/carouseltemas",
			categoria:"6",
			pt:"Abre uma janela flutuante que mostra imagens miniatura de cada tema existente na �rvore de temas. O usu�rio pode clicar em uma das imagens para adicionar o tema ao mapa atual.",
			complemento:"As miniaturas devem existir previamente para aparecerem nessa ferramenta. Para gerar as miniaturas, o administrador do i3Geo pode usar o sistema de administra��o.",
			apijs:"i3GEO.arvoreDeTemas.dialogo.carouselTemas()"
		},
		"86": {
			titulo: "Editor SQL",
			diretorio:"i3geo/ferramentas/editorsql",
			categoria:"5",
			pt:"Permite modificar o SQL utilizado para compor os dados referentes ao tema. Apenas temas baseados em bancos de dados podem utilizar essa fun��o, sendo que o administrador do i3Geo pode bloque�-la utilizando do sistema de administra��o. As fun��es SQL de modifica��o de dados n�o s�o suportadas (UPDATE, INSERT, DELETE, etc.)",
			complemento:"O Mapserver utiliza uma express�o na linguagem SQL para definir os dados que ir�o compor um tema. A edi��o do SQL possibilita o uso de express�es customizadas, baseadas na sintaxe SQL que o banco de dados utilizado suportar. A janela de di�logo permite ainda listar as colunas dispon�veis bem como os dados de cada coluna, facilitando a defini��o do novo SQL.",
			apijs:"i3GEO.arvoreDeTemas.dialogo.editorsql()"
		},
		"87": {
			titulo: "Rede Metar",
			diretorio:"i3geo/ferramentas/metar",
			categoria:"8",
			pt:"A rede <a href='http://weather.noaa.gov/' target='_blank' >metar</a> reune dados de esta��es meteorol�gicas espalhadas por toto o mundo. Essa ferramenta mostra as esta��es existentes na extens�o geogr�fica do mapa",
			complemento:"Os dados da rede Metar s�o acessados indiretamente por meio dos Web Services do site Geonames.",
			apijs:"i3GEO.configura",
			tela:""
		},
		"88": {
			titulo: "Linha do tempo",
			diretorio:"i3geo/ferramentas/linhadotempo",
			categoria:"3",
			pt:"Constr�i um gr�fico do tipo 'linha do tempo' tendo como fonte dos dados a tabela de atributos de um tema. Veja: <a href='http://www.simile-widgets.org/timeline/' target=_blank >Simline</a>",
			complemento:"O gr�fico s� � mostrado para os temas que estiverem configurados para isso pelo administrador do i3Geo.",
			apijs:"i3GEO.configura",
			tela:""
		}
		
	}
};

g_traducao_ajuda_categorias = {
	"1":{titulo:"Propriedades do mapa",observacao:"Funcionalidades que permitem alterar caracter�sticas gerais do mapa, como tamanho e filtro de cores."},
	"2":{titulo:"Arquivos"},
	"3":{titulo:"An�lise geogr�fica"},
	"4":{titulo:"Inclus�o de camadas",observacao:"O i3Geo utiliza um conceito de camadas dispon�veis no mapa e camadas adicionais. Camadas dispon�veis s�o as que podem ser consultadas, visualizadas e modificadas, compondo uma lista separada das camadas adicionais. Normalmente as camadas dispon�veis s�o um conjunto menor em rela��o ao total de temas que podem ser utilizados. Novos temas podem ser adicionados ao mapa por meio das op��es existentes na lista de temas, normalmente posicionada na guia '+Temas'."},
	"5":{titulo:"Opera��es sobre um tema",observacao:"Uma das caracter�sticas do i3Geo � a possibilidade de modifica��o das camadas vistas no mapa. As op��es que permitem isso s�o mostradas normalmente na lista de camadas dispon�veis no mapa atual. Essa lista � mostrada como uma �rvore hier�rquica sendo que cada camada � um dos n�s. Expandindo-se esse n�, tem-se acesso �s opera��es."},
	"6":{titulo:"Opera��es sobre o mapa"},
	"7":{titulo:"Navega��o",observacao:"As fun��es de navega��o permitem alterar a escala do mapa e modificar a abrang�ncia espacial. Esse tipo de mudan�a, principalmente de escala, afeta o contexto do mapa, modificando seu comportamento. Algumas camadas podem ser sens�veis � escala, mostrando ou n�o determinados elementos. Quando uma camada possuir muitos elementos, � aconselh�vel seu desligamento at� que a regi�o desejada seja encontrada. Algumas interfaces possuem mecanismos distintos de navega��o, como Flamingo, Google e openLayers. A lista abaixo contempla apenas a interface padr�o."},
	"8":{titulo:"Pesquisa"}
};
//inserir os aplicativos adicionais
/*
<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=8&idajuda=' >&nbsp;&nbsp;&nbsp;</a>
*/
/*
N�o esquecer:

Janela de mensagens
Gerador de links
Datadownload
Ativa/desativa entorno
Ativa/desativa logo


*/