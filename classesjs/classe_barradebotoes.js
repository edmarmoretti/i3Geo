/*
Title: Barra de bot&otilde;es

i3GEO.barraDeBotoes

Constr&oacute;i a barra de bot&otilde;es flutuante

Veja tamb&eacute;m classe_interface.js (i3GEO.Interface) que possu&iacute; par&acirc;metros que permitem ajustar a posi&ccedil;&atilde;o das barras no mapa

Exemplo:

	Para alterar as op&ccedil;&otilde;es modifique as propriedades colocando um c&oacute;digo como o seguinte no javascript utilizado na interface de mapa que estiver sendo utilizada

	i3GEO.barraDeBotoes.tipo = "olhodepeixe";
	
Arquivo:

i3geo/classesjs/classe_barradebotoes.js

Licen&ccedil;a:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUA�&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
GNU junto com este programa; se n&atilde;o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEO) === 'undefined'){
	var i3GEO = {};
}
i3GEO.barraDeBotoes = {
	/*
	Propriedade: ATIVA

	Indica se a barra de bot&otilde;es ser&aacute; ou n&atilde;o cosntru&iacute;da automaticamente no processo de inicializa&ccedil;&atilde;o do mapa.

	Tipo:
	{boolean}

	Default:
	{true}
	*/
	ATIVA: true,
	/*
	Propriedade: TIPO

	Tipo de barra.

	Por padr&atilde;o, utiliza a biblioteca YUI para construir a barra, opcionalmente pode-se utilizar o tipo "olho de peixe".

	Tipo:
	{string}

	Default:
	{yui}

	Valores:
	{"yui","olhodepeixe"}
	*/
	TIPO: "yui",
	/*
	Propriedade: OFFSET

	Ajuste do deslocamento vertical da barra (v&aacute;lido apenas para o tipo "olhodepeixe")

	Desloca a barra em uma determinada quantidade de pixels. Valores negativos fazem a barra subir.

	Tipo:
	{numeric}

	Default:
	{-205}
	*/
	OFFSET: -205,
	/*
	Propriedade: MAXBOTOES

	N&uacute;mero de bot&otilde;es iniciais (v&aacute;lido apenas para o tipo "olhodepeixe")

	Se for 0, todos os bot&otilde;es ser&atilde;o mostrados

	Tipo:
	{numeric}

	Default:
	{10}
	*/
	MAXBOTOES: 11,
	/*
	Propriedade: AJUDA

	Mostra um texto de ajuda colado ao &iacute;cone da ferramenta

	Tipo:
	{boolean}

	Default:
	{true}
	*/
	AJUDA: true,
	/*
	Propriedade: ORIENTACAO

	Orienta&ccedil;&atilde;o vertical ou horizontal da barra (n&atilde;o se aplica ao tipo "olhodepeixe"

	Tipo:
	{string}

	Valores:
	{"horizontal","vertical"}

	Default:
	{"vertical"}
	*/
	ORIENTACAO: "vertical",
	/*
	Propriedade: HORIZONTALW

	Largura da barra quando ORIENTACAO = "horizontal"

	Tipo:
	{numeric}

	Default:
	{350}
	*/
	HORIZONTALW: 350,
	/*
	Propriedade: TIPOAJUDA

	Tipo do bal&atilde;o de ajuda que &eacute; mostrado colado ao &iacute;cone da ferramenta

	Tipo:
	{string}

	Valores:
	{"horizontal","vertical","balao"}

	Default:
	{"horizontal"}
	*/
	TIPOAJUDA: "balao",
	/*
	Propriedade: SOICONES

	Esconde as bordas das barras e o fundo, mostrando apenas os &iacute;cones

	Default:
	{false}

	Tipo:
	{boolean}
	*/
	SOICONES: false,
	/*
	Propriedade: AUTOALTURA

	Ajusta automaticamente a altura das barras conforme a altura do mapa.

	Esta op&ccedil;&atilde;o n&atilde;o tem efeito se a barra contiver a barra de zoom (isso ocorre em fun&ccedil;&atilde;o de um bug do YIU, que causa erro na barra nessas condi&ccedil;&otilde;es)

	Tipo:
	{boolean}
	*/
	AUTOALTURA: false,
	/*
	Propriedade: TRANSICAOSUAVE

	Altera a transpar&ecirc;ncia das barras quando o mouse sobrep&otilde;e a barra e quando sai da barra

	Tipo:
	{boolean}

	Default:
	{true}
	*/
	TRANSICAOSUAVE: true,
	/*
	Propriedade: OPACIDADE

	Valor da opacidade min&iacute;ma utilizada quando TRANSICAOSUAVE for igual a true.

	Varia de 0 a 100

	Tipo:
	{numeric}

	Default:
	{65}
	*/
	OPACIDADE: 65,
	/*
	Propriedade: PERMITEFECHAR

	Mostra o bot&atilde;o para fechar as barras ou n&atilde;o.

	Tipo:
	{boolean}
	*/
	PERMITEFECHAR: true,
	/*
	Propriedade: PERMITEDESLOCAR

	Permite deslocar as barras ou n&atilde;o.

	Tipo:
	{boolean}
	*/
	PERMITEDESLOCAR: true,
	/*
	Propriedade: ATIVAMENUCONTEXTO

	Indica se o menu de contexto deve ser ativado

	Tipo:
	{Boolean}

	Default:
	{true}
	*/
	ATIVAMENUCONTEXTO: false,
	/*
	Propriedade: AUTO

	Cria as barras de bot&otilde;es automaticamente, utilizando os bot&otilde;es padr&atilde;o sem considerar a lista de bot&otilde;es definidas no HTML da interface.

	A lista de bot&otilde;es &eacute; definida em i3GEO.configura

	Tipo:
	{Boolean}

	Default:
	{false}
	*/
	AUTO: false,
	/*
	Propriedade: LISTABOTOES

	Objeto com a lista de bot&otilde;es e suas propriedades, como por exemplo, a fun&ccedil;&atilde;o a ser executada ao se clicar no bot&atilde;o.

	Essa lista n&atilde;o indica quais os bot&otilde;es que ser&atilde;o inseridos. Para definir os bot&otilde;es que ser&atilde;o inseridos, inclua no HTML da interface
	os bot&otilde;es desejados (veja em i3geo/exemplos). Se vc utilizar a op&ccedil;&atilde;o i3GEO.barraDeBotoes.AUTO = true , os bot&otilde;es ser&atilde;o inseridos
	automaticamente. Nesse caso, utilize a op&ccedil;&atilde;o i3GEO.barraDeBotoes.INCLUIRBOTOES para indicar os bot&otilde;es desejados.

	Por default utiliza os botoes definidos em i3GEO.configura.funcoesBotoes.botoes

	Tipo:
	{JSON}
	*/
	LISTABOTOES: i3GEO.configura.funcoesBotoes.botoes,
	/*
	Propriedade: INCLUIBOTAO

	Objeto que indica quais os bot&otilde;es que ser&atilde;o inseridos na barra de bot&otilde;es 2.

	Essa op&ccedil;&atilde;o s&oacute; funciona se i3GEO.barraDeBotoes.AUTO = true

	Vc pode tamb&eacute;m alterar a ordem dos botoes ou adicionar novos

	Na barra de bot&otilde;es do tipo "yui", as chaves ser&atilde;o adicionadas como o atributo "id" em cada bot&atilde;o. Nesse caso,
	&eacute; poss&iacute;vel definir o estilo CSS para cada bot&atilde;o (veja em i3geo/css/botoes2.css).

	A ativa&ccedil;&atilde;o de cada bot&atilde;o, ou seja, a fun&ccedil;&atilde;o que &eacute; executada ao ser feito o clique, &eacute; definida em i3GEO.configura.funcoesBotoes

	Default:

	INCLUIBOTAO: {

		abreJanelaLegenda: false,

		zoomli: false,

		zoomiauto: false,

		zoomoauto: false

		pan: false,

		zoomtot:false,

		identifica: true,

		identificaBalao: true,

		mede: true,

		area: true,

		imprimir: true,

		reinicia: true,

		exten: true,

		referencia: true,

		inserexy: true,

		textofid: true,

		selecao: true,

		barraedicao: false,

		google: true,

		buscafotos: true,

		wiki: true,

		metar: true,

		lentei: true,

		confluence: true,

		inseregrafico: true,

		v3d: true,

		localizar: true
	}

	Tipo:
	{obj}
	*/
	INCLUIBOTAO: {
		abreJanelaLegenda: true,
		localizar: true,
		zoomli: true,
		zoomiauto: false,
		zoomoauto: false,
		pan: true,
		zoomtot:true,
		identifica: true,
		identificaBalao: true,
		mede: true,
		area: true,
		imprimir: true,
		selecao: true,
		google: true,
		barraedicao: true,
		referencia: true,
		exten: true,
		inserexy: true,
		textofid: true,
		reinicia: true,
		buscafotos: true,
		wiki: true,
		metar: true,
		lentei: true,
		confluence: true,
		inseregrafico: true,
		v3d: true
	},
	/*
	Propriedade: ICONEBOTAO

	&Iacute;cones utilizados em cada um dos bot&otilde;es da barra.

	Esses &iacute;cones s&atilde;o utilizados apenas se i3GEO.barraDeBotoes.TIPO = "olhodepeixe". Para cada elemento existente em
	i3GEO.barraDeBotoes.INCLUIBOTAO deve existir um elemento nesse objeto. A chave de cada elemento &eacute; a mesma do objeto INCLUIBOTAO.
	O endere&ccedil;o da imagem ser&aacute; complementado pelo i3geo, adicionando no in&iacute;cio da string o valor da vari&aacute;vel i3GEO.configura.locaplic

	Default:

	ICONEBOTAO: {

		zoomli: "/imagens/gisicons/eudock/zoom-region.png",

		pan: "/imagens/gisicons/eudock/pan.png",

		zoomtot: "/imagens/gisicons/eudock/zoom-extent.png",

		identifica: "/imagens/gisicons/eudock/identify.png",

		identificaBalao: "/imagens/gisicons/eudock/tips.png",

		mede: "/imagens/gisicons/eudock/length-measure.png",

		area: "/imagens/gisicons/eudock/area-measure.png",

		imprimir: "/imagens/gisicons/eudock/print.png",

		reinicia: "/imagens/gisicons/eudock/redraw.png",

		exten: "/imagens/gisicons/eudock/map-extent-info.png",

		referencia: "/imagens/gisicons/eudock/map-reference.png",

		inserexy: "/imagens/gisicons/eudock/point-create.png",

		textofid: "/imagens/gisicons/eudock/text-add.png",

		selecao: "/imagens/gisicons/eudock/select.png",

		google: "/imagens/gisicons/eudock/google-map.png",

		buscafotos: "/imagens/gisicons/eudock/fotos.png",

		wiki: "/imagens/gisicons/eudock/wiki.png",

		metar: "/imagens/gisicons/eudock/metar.png",

		lentei: "/imagens/gisicons/eudock/lente.png",

		confluence: "/imagens/gisicons/eudock/confluence.png",

		inseregrafico: "/imagens/gisicons/eudock/grafico.png",

		v3d: "/imagens/gisicons/eudock/v3d.png",

		barraedicao: "/imagens/gisicons/eudock/editopen.png",

		localizar: "/imagens/gisicons/eudock/search.png",

		abreJanelaLegenda: "/imagens/gisicons/eudock/legenda.png"
	}

	Type:
	{obj}
	*/
	ICONEBOTAO: {
		zoomli: "/imagens/gisicons/eudock/zoom-region.png",
		zoomiauto: "/imagens/gisicons/eudock/zoom-in.png",
		zoomoauto: "/imagens/gisicons/eudock/zoom-out.png",
		pan: "/imagens/gisicons/eudock/pan.png",
		zoomtot: "/imagens/gisicons/eudock/zoom-extent.png",
		identifica: "/imagens/gisicons/eudock/identify.png",
		identificaBalao: "/imagens/gisicons/eudock/tips.png",
		mede: "/imagens/gisicons/eudock/length-measure.png",
		area: "/imagens/gisicons/eudock/area-measure.png",
		imprimir: "/imagens/gisicons/eudock/print.png",
		reinicia: "/imagens/gisicons/eudock/redraw.png",
		exten: "/imagens/gisicons/eudock/map-extent-info.png",
		referencia: "/imagens/gisicons/eudock/map-reference.png",
		inserexy: "/imagens/gisicons/eudock/point-create.png",
		textofid: "/imagens/gisicons/eudock/text-add.png",
		selecao: "/imagens/gisicons/eudock/select.png",
		google: "/imagens/gisicons/eudock/google-map.png",
		buscafotos: "/imagens/gisicons/eudock/fotos.png",
		wiki: "/imagens/gisicons/eudock/wiki.png",
		metar: "/imagens/gisicons/eudock/metar.png",
		lentei: "/imagens/gisicons/eudock/lente.png",
		confluence: "/imagens/gisicons/eudock/confluence.png",
		inseregrafico: "/imagens/gisicons/eudock/grafico.png",
		v3d: "/imagens/gisicons/eudock/v3d.png",
		barraedicao: "/imagens/gisicons/eudock/editopen.png",
		localizar: "/imagens/gisicons/eudock/search.png",
		abreJanelaLegenda: "/imagens/gisicons/eudock/show-legend.png"
	},
	/*
	Propriedade: TEMPLATEBOTAO

	Template HTML que ser&aacute; utilizado na constru&ccedil;&atilde;o autom&aacute;tica dos bot&otilde;es da barra 2.

	Utilize a string $$ para indicar onde ser&aacute; inclu&iacute;do o c&oacute;digo do bot&atilde;o.

	Default:

	"<div style='display:inline;background-color:rgb(250,250,250);'><p style='font-size:2px;'>&nbsp;</p><img src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>"

	Tipo:
	{string}
	*/
	TEMPLATEBOTAO: "",
	/*
	Propriedade: BOTAOPADRAO

	Bot&atilde;o que ser&aacute; ativado ao inicializar os bot&otilde;es com ativaBotoes.

	Correpsonde ao item iddiv de LISTABOTOES

	Tipo:
	{String}
	*/
	BOTAOPADRAO: "pan",
	/*
	Propriedade: COMPORTAMENTO

	Define o comportamento dos bot&otilde;es quando &eacute; pressionado

	Tipo:
	{String}

	Valores:

	"padrao" - comportamento padr&atilde;o, com bordas da esquerda e inferiores ativadas

	"destacado" - destaca apenas o bot&atilde;o atualmente pressionado

	"vermelho" - destaca com fundo vermelho

	"laranja" - destaca com fundo laranja

	"cinza" - destaca com fundo cinza

	*/
	COMPORTAMENTO: "padrao",
	/*
	Variavel: BARRAS

	Array com os objetos YAHOO.i3GEO.janela.botoes criados
	*/
	BARRAS: [],
	/*
	Variavel: BOTAOCLICADO

	&Uacute;ltimo icone que foi clicado

	Tipo:
	{String}
	*/
	BOTAOCLICADO: "",
	/*
	Function: ativaPadrao

	Ativa o bot&atilde;o definido como padr&atilde;o, executando a fun&ccedil;&atilde;o definida em onclick

	Utilizado para restaurar o status padr&atilde;o da barra, principalmente por ferramentas que alteram &iacute;cones e outras propriedades do mapa
	*/
	ativaPadrao: function(){
		if(i3GEO.barraDeBotoes.ATIVA === true){
			try{
				var botao = i3GEO.barraDeBotoes.defBotao(i3GEO.barraDeBotoes.BOTAOPADRAO);
				if(botao.funcaoonclick){
					botao.funcaoonclick.call();
				}
			}
			catch(e){}
		}
	},
	/*
	Function: ativaIcone

	Altera as bordas de um &iacute;cone aplicando um efeito de &iacute;cone real&ccedil;ado.

	Todos os demais &iacute;cones definidos em LISTABOTOES e que tiverem o tipo = "dinamico"
	ser&atilde;o processados para alterar as bordas dando o efeito de n&atilde;o ativo.

	Parametro:

	icone {String} - id do icone que ser&aacute; ativado. Esse id &eacute; o mesmo definido em LISTABOTOES
	*/
	ativaIcone: function(icone){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaIcone()");}
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		var estilo,temp,ist,cor,ko;
		this.BOTAOCLICADO = icone;
		ko = this.LISTABOTOES.length-1;
		if(this.COMPORTAMENTO === "padrao"){
			if(ko >= 0){
				do{
					temp = $i(this.LISTABOTOES[ko].iddiv);
					if (this.LISTABOTOES[ko].tipo==="dinamico" && temp){
						ist = temp.style;
						ist.borderWidth="1px";
						ist.borderColor='white';
						if(this.SOICONES === true){
							ist.borderLeftColor='rgb(50,50,50)';
							ist.borderBottomColor='rgb(50,50,50)';
						}
					}
				}
				while(ko--);
			}
			//ativa o icone
			if($i(icone)){
				estilo = $i(icone).style;
				if(this.SOICONES === false){
					estilo.borderColor='white';
					estilo.borderWidth="1px";
				}
			}
		}
		if(this.COMPORTAMENTO === "destacado"){
			if(ko >= 0){
				do{
					temp = $i(this.LISTABOTOES[ko].iddiv);
					if (temp){
						ist = temp.style;
						ist.borderWidth="1px";
						ist.borderColor='white';
					}
				}
				while(ko--);
			}
			//ativa o icone
			if($i(icone)){
				estilo = $i(icone).style;
				if(this.SOICONES === false){
					estilo.borderColor='black';
					estilo.borderWidth="1px";
				}
			}
		}
		if(i3GEO.util.in_array(this.COMPORTAMENTO,["laranja","vermelho","cinza"])){
			if(ko >= 0){
				do{
					temp = $i(this.LISTABOTOES[ko].iddiv);
					if (temp){
						ist = temp.style;
						if(this.SOICONES === false){
							ist.borderWidth="1px";
							ist.borderColor='white';
							ist.backgroundColor='white';
						}
						else
						{ist.backgroundColor='';}
					}
				}
				while(ko--);
			}
			switch(this.COMPORTAMENTO){
				case "laranja":
					cor = "orange";
					break;
				case "vermelho":
					cor = "red";
					break;
				case "cinza":
					cor = "gray";
					break;
				default:
					cor = "yellow";
			};
			//ativa o icone
			if($i(icone)){
				estilo = $i(icone).style;
				if(this.SOICONES === false){
					estilo.borderColor='black';
					estilo.borderWidth="1px";
				}
				//else
				//{estilo.border = "0px solid white";}
				estilo.backgroundColor = cor;
			}
		}
	},
	/*
	Function: ativaBotoes

	Ativa os botoes definidos em LISTABOTOES

	Os botoes s&atilde;o constru&iacute;dos e as fun&ccedil;&otilde;es definidas s&atilde;o embutidas no evento onclick

	Parametro:

	padrao (String} - botao que ser&aacute; mostrado como ativo (opcional).
	Se n&atilde;o for definido, ser&aacute; utilizado o bot&atilde;o especificado em BOTAOPADRAO.
	O nome do botao deve estar em LISTABOTOES na propriedade iddiv
	*/
	ativaBotoes:function(padrao){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaBotoes()");}
		var l,b,temp;
		if(arguments.length === 0)
		{padrao = this.BOTAOPADRAO;}
		this.BOTAOCLICADO = padrao;
		l = this.LISTABOTOES;
		b = l.length-1;
		if (b >= 0){
			do{
				temp = $i(l[b].iddiv);
				if (temp){
					if(l[b].conteudo)
					{temp.innerHTML = l[b].conteudo;}
					if(l[b].dica){
						eval('$i("'+l[b].iddiv+'").onmouseover = function(e){i3GEO.barraDeBotoes.mostraJanela(this,"'+l[b].dica+'",e);}');
						eval('$i("'+l[b].iddiv+'").onmouseout = function(e){i3GEO.barraDeBotoes.mostraJanela(this,"",e);};');
					}
					if(l[b].funcaoonclick){
						temp.onclick = l[b].funcaoonclick;
						if(l[b].iddiv == padrao)
						{l[b].funcaoonclick();}
					}
					if(l[b].constroiconteudo)
					{eval(l[b].constroiconteudo);}
				}
				YAHOO.util.Event.addListener($i(l[b].iddiv), "click", YAHOO.util.Event.preventDefault);
				YAHOO.util.Event.addListener($i(l[b].iddiv), "click", YAHOO.util.Event.stopPropagation);
				YAHOO.util.Event.addFocusListener($i(l[b].iddiv), YAHOO.util.Event.preventDefault);
			}
			while (b--);
		}
		if(padrao === "")
		{this.ativaIcone("");}
	},
	/*
	Function: execBotao

	Com base no c&oacute;digo de um bot&atilde;o (iddiv), obt&eacute;m a fun&ccedil;&atilde;o armazenada em i3GEO.barraDeBotoes.LISTABOTOES e executa.

	Parametros:

	id {string} - identificador do bot&atilde;o, conforme definido no elemento iddiv de i3GEO.barraDeBotoes.LISTABOTOES

	x {numeric} - (opcional) posi&ccedil;&atilde;o em pixels da tela onde foi feito o clique do mouse

	y {numeric} - (opcional) posi&ccedil;&atilde;o em pixels da tela onde foi feito o clique do mouse
	*/
	execBotao: function(id,x,y,posX,posY){
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		var temp,
			botao = i3GEO.barraDeBotoes.defBotao(id);
		i3GEO.barraDeBotoes.BOTAOCLICADO = id;
		if(botao === false)
		{return;}
		try{
			if(botao.tipo === "dinamico" && x){
				i3GEO.util.criaPin("i3geoMarcaIcone",i3GEO.configura.locaplic+"/imagens/gisicons/eudock/sobe1.png","10px","10px");
				temp = $i("i3geoMarcaIcone");
				if(temp){
					temp.style.display = "block";
					temp.style.top = posY + 43 + "px";
					temp.style.left = posX + 18 + "px";
				}
			}
			if(botao.funcaoonclick){
				botao.funcaoonclick.call();
			}
		}
		catch(e){
			if(typeof(console) !== 'undefined'){console.error("Erro no botao "+id+" "+e);}
		}
	},
	/*
	Function: defBotao

	Obt&eacute;m as defini&ccedil;&otilde;es de um bot&atilde;o conforme o seu c&oacute;digo (iddiv)

	Retorno:

	{objeto} - ver i3GEO.barraDeBotoes.LISTABOTOES
	*/
	defBotao: function(iddiv){
		var l = i3GEO.barraDeBotoes.LISTABOTOES,
			b = l.length-1;
		if (b >= 0){
			do{
				//temp = l[b].iddiv;
				if (l[b].iddiv === iddiv){
					return l[b];
				}
			}
			while (b--);
		}
		return false;
	},
	/*
	Function: inicializaBarraOP

	Inicializa a barra de bot&otilde;es quando for do tipo "olhodepeixe"

	O objeto euEnv armazena todas as caracter&iacute;sticas da barra

	*/
	inicializaBarraOP: function(){
		if(i3GEO.barraDeBotoes.ATIVA === false || !$i(i3GEO.Interface.IDCORPO)){
			return;
		}
		//isso veio do js do eudock
		if (document.onmousemove)
			euEnv.onmousemoveBK = document.onmousemove;
		document.onmousemove  = on_MouseMove;

		if (document.onmousedown)
			euEnv.onmousedownBK = document.onmousedown;
		document.onmousedown  = on_MouseDown;

		if (document.onmouseup)
			euEnv.onmouseupBK = document.onmouseup;
		document.onmouseup    = on_MouseUp;

		if (document.onclick)
			euEnv.onclickBK = document.onclick;
		document.onclick      = on_MouseClick;
		euDimensioni();
		offsEut();
		euThread();
		//
		i3GEO.barraDeBotoes.AJUDA = false;
		euEnv.imageBasePath=i3GEO.configura.locaplic+"/pacotes/eudock/";
		var botao,
			dica,
			titulo,
			i,
			dock = new euDock(),
			temp = "dockBg-r.png",
			chaves = i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO),
			n = chaves.length,
			preload;
		preload = new Image();
		preload.src = i3GEO.configura.locaplic+"/imagens/gisicons/eudock/sobe1.png";
		dock.setObjectAlign(i3GEO.Interface.IDCORPO,euDOWN,(parseInt(document.body.style.height,10))*-1 + i3GEO.barraDeBotoes.OFFSET,euUP);
		if(i3GEO.barraDeBotoes.MAXBOTOES >= chaves.length)
		{temp = "dockBg-r2.png";}
		dock.setBar({
			left:{euImage:{image:i3GEO.configura.locaplic+"/pacotes/eudock/barImages/dockBg-l.png"}},
			horizontal:{euImage:{image:i3GEO.configura.locaplic+"/pacotes/eudock/barImages/dockBg-c-o.png"}},
			right:{euImage:{image:i3GEO.configura.locaplic+"/pacotes/eudock/barImages/"+temp}}
		});
		dock.setIconsOffset(7);
		if(i3GEO.barraDeBotoes.MAXBOTOES > 0)
		{n = i3GEO.barraDeBotoes.MAXBOTOES;}
		for(i=0;i<n;i+=1){
			if(i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]] && i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]] === true){
				botao = i3GEO.barraDeBotoes.defBotao(chaves[i]);
				if(botao === false){
					dica = "";
					titulo = "";
				}
				else{
					if(botao.dica)
					{dica = botao.dica;}
					else
					{dica = "";}
					if(botao.titulo != undefined)
					{titulo = botao.titulo;}
					else
					{titulo = "";}
				}
				dock.addIcon(new Array({euImage:{image:i3GEO.configura.locaplic+i3GEO.barraDeBotoes.ICONEBOTAO[chaves[i]]}}),{
					mouseInsideClick : function(x,y,id,posX,posY){
						i3GEO.barraDeBotoes.execBotao(euEnv.euDockArray[id].idBotao,x,y,posX,posY );
					},
					idBotao:chaves[i],
					dica: dica,
					titulo: titulo
				});
			}
		}
		$i(euEnv.euDockArray.euDock_0.bar.elementsArray.left.id).onclick = function(){
			i3GEO.ajuda.ATIVAJANELA = true;
			i3GEO.ajuda.abreJanela();
		};
		$i(euEnv.euDockArray.euDock_0.bar.elementsArray.right.id).onclick = function(){
			var dica,
				titulo,
				chaves = i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO),
				n = chaves.length,
				nb = euEnv.euDockArray.euDock_0.iconsArray.length,
				i;
			if($i("i3geoMarcaIcone"))
			{$i("i3geoMarcaIcone").style.display = "none";}
			//a barra j&aacute; foi expandida
			if(nb !== i3GEO.barraDeBotoes.MAXBOTOES){
				i3GEO.barraDeBotoes.recria();
			}
			if(i3GEO.barraDeBotoes.MAXBOTOES > 0 && n > nb){
				for(i=nb;i<n;i+=1){
					if(i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]] && i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]] === true){
						botao = i3GEO.barraDeBotoes.defBotao(chaves[i]);
						if(botao === false){
							dica = "";
							titulo = "";
						}
						else{
							if(botao.dica)
							{dica = botao.dica;}
							else
							{dica = "";}
							if(botao.titulo != undefined)
							{titulo = botao.titulo;}
							else
							{titulo = "";}
						}
						dock.addIcon(new Array({euImage:{image:i3GEO.configura.locaplic+i3GEO.barraDeBotoes.ICONEBOTAO[chaves[i]]}}),{
							mouseInsideClick : function(x,y,id,posX){
								i3GEO.barraDeBotoes.execBotao(euEnv.euDockArray[id].idBotao,x,y,posX);
							},
							idBotao:chaves[i],
							dica: dica,
							titulo: titulo
						});
					}
				}
			}
		};
		//div que mostra o t&iacute;tulo do bot&atilde;o
		if(!$i("euDockMensagem")){
			temp = document.createElement("div");
			temp.style.top = "38px";
			temp.style.color = "gray";
			temp.style.textAlign = "center";
			temp.style.fontSize = "10px";
			temp.innerHTML = "";
			temp.id = "euDockMensagem";
			euEnv.euDockArray.euDock_0.div.appendChild(temp);
		}
	},
	/*
	Function: inicializaBarra

	Inicializa a barra de bot&otilde;es

	A barra de zoom &eacute; inserida automaticamente na barra de botoes 1 se esta existir

	Caso i3GEO.barraDeBotoes.TIPO === "olhodepeixe" os par&acirc;metros s&atilde;o ignorados.

	Exemplo:

	if ($i("barraDeBotoes1"))

	i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes1","i3geo_barra1",true,x1,y1);

	if ($i("barraDeBotoes2"))

	i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2","i3geo_barra2",false,x2,y2);

	Os objetos criados s&atilde;o armazenados no array BARRAS, dessa forma, para acessar uma barra utilize
	por exemplo:

	i3GEO.barraDeBotoes.BARRAS[1].show();

	Parametros:

	idconteudo {String} - id do elemento existente no HTML e que cont&eacute;m as defini&ccedil;&otilde;es dos bot&otilde;es

	idconteudonovo {String} - id do elemento que ser&aacute; criado para adicionar os boto&otilde;es

	barraZoom {boolean} - indica se a barra de zoom ser&aacute; inclu&iacute;da

	x {Numeric} - posi&ccedil;&atilde;o x (pixels) da barra em rela&ccedil;&atilde;o ao mapa

	y {Numeric} - posi&ccedil;&atilde;o y (pixels) da barra em rela&ccedil;&atilde;o ao mapa

	onde {String} - (opcional) id do elemento HTML onde os bot&otilde;es ser&atilde;o inseridos
	*/
	inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y,onde){
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.inicializaBarra()");}
		if (i3GEO.configura.map3d === "")
		{i3GEO.barraDeBotoes.INCLUIBOTAO.v3d = false;}
		if(i3GEO.barraDeBotoes.TIPO === "olhodepeixe"){
			i3GEO.barraDeBotoes.inicializaBarraOP();
		}
		else{
			if(this.TEMPLATEBOTAO === "" && i3GEO.Interface.TABLET === false)
			{this.TEMPLATEBOTAO = "<div style='display:inline;background-color:rgb(250,250,250);'><img style='border:0px solid white;' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>";}
			if(this.TEMPLATEBOTAO === "" && i3GEO.Interface.TABLET === true)
			{this.TEMPLATEBOTAO = "<div style='display:inline;background-color:rgb(250,250,250);'><img style='margin:4px;border:0px solid white;' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>";}
			var ticone,tipo,mostra,i,temp,e,wj,recuo,novoel,alturadisponivel,n,chaves,
				elementos = "",
				numerobotoes = 0,
				nelementos = 0,
				Dom = YAHOO.util.Dom,
				branco = i3GEO.configura.locaplic+'/imagens/branco.gif';
			if(navm)
			{i3GEO.barraDeBotoes.TRANSICAOSUAVE = false;}
			if(this.AUTO === true){
				if(idconteudo === "barraDeBotoes1"){
					novoel = document.createElement("div");
					novoel.id = "barraDeBotoes1";
					temp = '<table style="width:100%"><tr><td style="background-color:rgb(250,250,250);"><div ID="historicozoom" ></div></td></tr><tr><td style=height:5px ></td></tr></table>' +
						"<div style='display:inline;background-color:rgb(250,250,250);'>" +
						'<img title="zoom" alt="zoom" src="'+branco+'" id="zoomli"/>' +
						"</div>" +
						"<div style='display:inline;background-color:rgb(250,250,250);'>" +
						'<img title="desloca" alt="desloca" src="'+branco+'" id="pan"/>' +
						"</div>" +
						"<div style='display:inline;background-color:rgb(250,250,250);'>" +
						'<img title="geral" alt="geral" src="'+branco+'" id="zoomtot"/>' +
						"</div>";
					novoel.innerHTML = temp;
					document.body.appendChild(novoel);
				}
				if(idconteudo === "barraDeBotoes2"){
					temp = "";
					chaves = i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO);
					n = chaves.length;
					for(i=0;i<n;i+=1){
						if(i3GEO.barraDeBotoes.INCLUIBOTAO[chaves[i]] === true){
							temp += i3GEO.barraDeBotoes.TEMPLATEBOTAO.replace("$$",chaves[i]);
						}
					}
					//return;
					if(typeof(onde) === 'undefined'){
						novoel = document.createElement("div");
						novoel.id = "barraDeBotoes2";
						novoel.innerHTML = "<table style='width:100%'>"+
							"<tr><td style='background-color:rgb(250,250,250);'><img title='' alt='sobe' src='"+branco+"' id='sobeferramentas'/></td></tr>"+
							"</table>" +temp+
							"<table style='width:100%;'><tr><td style='background-color:rgb(250,250,250);'><img title='desce' alt='' src='"+branco+"' id='desceferramentas'/></td></tr></table>";
						document.body.appendChild(novoel);
					}
					else{
						$i(onde).innerHTML = temp;
						return;
					}
				}
			}
			else{
				if(idconteudo === "barraDeBotoes2" && onde !== undefined){
					$i(onde).innerHTML = $i(idconteudo);
				}
			}
			wj = "36px";
			recuo = "0px";
			novoel = document.createElement("div");
			novoel.id = idconteudonovo;
			novoel.style.display="block";
			if(this.SOICONES === false){
				novoel.style.border="1px solid gray";
				novoel.style.background="white";
			}
			else
			{novoel.style.border="0px solid white";}
			if(i3GEO.barraDeBotoes.TRANSICAOSUAVE)
			{Dom.setStyle(novoel,"opacity",this.OPACIDADE / 100);}
			temp = "";
			if (barraZoom === true)
			{temp += i3GEO.navega.barraDeZoom.cria();}
			temp += '<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:0px;"  ></div>';
			novoel.innerHTML = temp;
			novoel.onmouseover = function(){
				YAHOO.util.Dom.setStyle("i3geo_rosa","display","none");
				if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){
					YAHOO.util.Dom.setStyle(novoel,"opacity",1);
				}
				if(i3GEO.Interface.TABLET === true){
					//i3GEO.barraDeBotoes.BARRAS[0].cfg.setProperty("height", "");
					//$i(i3GEO.barraDeBotoes.BARRAS[0].id+"_").style.top = "0px";
				}
			};
			novoel.onmouseout = function(){
				if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){
					YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.barraDeBotoes.OPACIDADE / 100);
				}
				if(i3GEO.Interface.TABLET === true){
					//i3GEO.barraDeBotoes.BARRAS[0].cfg.setProperty("height", "10px");
					//$i(i3GEO.barraDeBotoes.BARRAS[0].id+"_").style.top = "-200px";
				}
			};
			document.body.appendChild(novoel);
			if(this.ATIVAMENUCONTEXTO)
			{i3GEO.util.mudaCursor(i3GEO.configura.cursores,"contexto",idconteudonovo,i3GEO.configura.locaplic);}
			//copia os botoes do HTML para a janela
			ticone = 28;
			alturadisponivel = i3GEO.parametros.h - i3GEO.Interface.BARRABOTOESTOP - ticone - 38 - 38;
			if(this.AUTOALTURA === true)
			{alturadisponivel += 28;}
			numerobotoes = parseInt(alturadisponivel / ticone,10);
			if($i(idconteudo))
			{
				$i(idconteudonovo+"_").innerHTML = $i(idconteudo).innerHTML;
				$i(idconteudo).innerHTML = "";
				elementos = $i(idconteudonovo+"_").getElementsByTagName("img");
				nelementos = elementos.length;
				if(i3GEO.barraDeBotoes.ORIENTACAO === "horizontal")
				{numerobotoes = 100;}
				//faz o c&aacute;lculo do n&uacute;mero de bot&otilde;es que devem ficar vis&iacute;veis em fun&ccedil;&atilde;o do tamanho da barra
				if(this.AUTOALTURA === true ||(numerobotoes < nelementos)){
					if(elementos[0].id === "sobeferramentas"){
						try{
							elementos = $i(idconteudonovo+"_").getElementsByTagName("div");
							nelementos = elementos.length;
							i = 0;
							do{
								elementos[i].style.display = "none";
								i = i + 1;
							}
							while(i < nelementos);
							i = 0;
							do{
								if(elementos[i] != undefined)
								{elementos[i].style.display = "inline";}
								i = i + 1;
							}
							while(i < numerobotoes-1);
						}catch(men){
							if(typeof(console) !== 'undefined'){console.error(men);}
						}
					}
				}
				if(elementos.length <= numerobotoes){
					Dom.setStyle(["sobeferramentas","desceferramentas"],"display","none");
				}
			}
			YAHOO.namespace("i3GEO.janela.botoes");
			if(i3GEO.barraDeBotoes.ORIENTACAO === "horizontal"){
				YAHOO.i3GEO.janela.botoes = new YAHOO.widget.Panel(idconteudonovo, {zIndex:20000,height:40,width:i3GEO.barraDeBotoes.HORIZONTALW, fixedcenter: false, constraintoviewport: false, underlay:"none", close:i3GEO.barraDeBotoes.PERMITEFECHAR, visible:true, draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR, modal:false,iframe:false } );
			}
			else{
				if(this.AUTOALTURA === false || barraZoom === true || (elementos.length > numerobotoes))
				{YAHOO.i3GEO.janela.botoes = new YAHOO.widget.Panel(idconteudonovo, {zIndex:20000,width:wj, fixedcenter: false, constraintoviewport: false, underlay:"none", close:i3GEO.barraDeBotoes.PERMITEFECHAR, visible:true, draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR, modal:false,iframe:false } );}
				else
				{YAHOO.i3GEO.janela.botoes = new YAHOO.widget.Panel(idconteudonovo, {zIndex:20000,height:i3GEO.parametros.h - 4,width:wj, fixedcenter: false, constraintoviewport: false, underlay:"none", close:i3GEO.barraDeBotoes.PERMITEFECHAR, visible:true, draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR, modal:false,iframe:false } );}
			}
			if(this.SOICONES === true){
				Dom.setStyle(["i3geo_barra2","i3geo_barra1"],"borderWidth","0 0 0 0");
			}
			YAHOO.i3GEO.janela.botoes.render();
			YAHOO.i3GEO.janela.botoes.moveTo(x,y);
			if($i("sobeferramentas")){
				$i("sobeferramentas").onclick = function(){
					elementos = $i(idconteudonovo+"_").getElementsByTagName("div");
					nelementos = elementos.length;
					if(elementos[0].style.display === "inline" && elementos[0].id === "")
					{return;}
					if(nelementos > 0){
						mostra = elementos[0];
						i = 0;
						do{
							if(elementos[i].style){
								if(elementos[i].style.display === "inline" && elementos[i].id === "")
								{break;}
								if(elementos[i].style.display === "none" && elementos[i].id === "")
								{mostra = elementos[i];}
							}
							i = i + 1;
						}
						while(i < nelementos);
						mostra.style.display="inline";
						//esconde o &uacute;ltimo botao
						i = nelementos + 1;
						mostra = elementos[i];
						do{
							if(elementos[i]){
								if(elementos[i].style){
									if(elementos[i].style.display === "inline")
									{mostra = elementos[i];break;}
								}
							}
							i = i - 1;
						}
						while(i >= 0);
						mostra.style.display="none";
					}
				};
			}
			if($i("desceferramentas")){
				$i("desceferramentas").onclick = function(){
					tipo = "inline";
					if($i(idconteudonovo+"_")){
						elementos = $i(idconteudonovo+"_").getElementsByTagName("div");
						if(elementos[elementos.length - 1].style.display === tipo)
						{return;}
						nelementos = elementos.length;
						if(nelementos > 0){
							//esconde o primeiro botao
							i = 0;
							do{
								e = elementos[i];
								if(e.style){
									if((e.style.display === "block") || (e.style.display === "inline") || (e.style.display === "")){
										if(e.id === "")
										{e.style.display="none";break;}
									}
								}
								i = i + 1;
							}
							while(i < nelementos);
							//mostra o &uacute;ltimo botao
							i = nelementos-1;
							var mostra = elementos[i];
							do{
								e = elementos[i];
								if(e.style){
									if(e.style.display === tipo)
									{break;}
									if(e.style.display === "none")
									{mostra = e;}
								}
								i = i - 1;
							}
							while(i >= 0);
							mostra.style.display=tipo;
						}
					}
				};
			}
			this.BARRAS.push(YAHOO.i3GEO.janela.botoes);
			YAHOO.i3GEO.janela.botoes.show();
			if(i3GEO.Interface.TABLET === true){
				YAHOO.i3GEO.janela.botoes.moveTo((i3GEO.parametros.w / 2) - (i3GEO.barraDeBotoes.HORIZONTALW / 2),"");
			}
			//
			//menu de contexto
			//
			if(this.ATIVAMENUCONTEXTO){
				this.ativaMenuContexto(idconteudonovo);
			}
			Dom.replaceClass(idconteudonovo+"_h","hd2");
		}
	},
	/*
	Function: ativaMenuContexto (depreciado na vers&atilde;o 4.5)

	Ativa o menu de contexto acionado com o bot&atilde;o direito do mouse

	Parametro:

	idbarra - {string} id da barra de bot&otilde;es onde o evento ser&aacute; ativado
	*/
	ativaMenuContexto: function(idbarra){
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaMenuContexto()");}
		var oFieldContextMenuItemData,oFieldContextMenu,onFieldMenuRender;
		function executar(a,b,c)
		{eval(c);}
		oFieldContextMenuItemData = [
			{ text: "&nbsp;<span class='container-close'></span>"},
			{ text: "Fechar barra", onclick: { fn: executar, obj: "i3GEO.barraDeBotoes.fecha('"+idbarra+"')" } },
			{ text: "Barra normal", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.AUTOALTURA=false;i3GEO.barraDeBotoes.PERMITEFECHAR=true;i3GEO.barraDeBotoes.PERMITEDESLOCAR=true;i3GEO.barraDeBotoes.recria('"+idbarra+"')" } },
			{ text: "Barra fixa", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.AUTOALTURA=true;i3GEO.barraDeBotoes.PERMITEFECHAR=false;i3GEO.barraDeBotoes.PERMITEDESLOCAR=false;i3GEO.barraDeBotoes.recria('"+idbarra+"')" } },
			{ text: "Remove transi&ccedil;&atilde;o", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=false;" } },
			{ text: "Ativa transi&ccedil;&atilde;o", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=true;" } }
		];
		oFieldContextMenu = new YAHOO.widget.ContextMenu(
			"contexto_"+idbarra,{
				trigger: idbarra,
				itemdata: oFieldContextMenuItemData,
				lazyload: true
			}
		);
		onFieldMenuRender = function(){
			var id = "contexto_"+idbarra;
			$i(id).style.zIndex = 50000;
		};
		oFieldContextMenu.subscribe("render", onFieldMenuRender);
	},
	/*
	Function: reativa

	Reativa as barras de ferramentas j&aacute; criadas

	Essa op&ccedil;&atilde;o apenas aplica o m&eacute;todo "show" aos objetos armazenados em i3GEO.barraDeBotoes.BARRAS

	Se a barra n&atilde;o existir previamente, nada ir&aacute; contecer

	Parametro:

	indice {Integer} - &iacute;ndice do array BARRAS que guarda os objetos YAHOO com
	as barras Se n&atilde;o for definido, todas as barras ser&atilde;o reativadas
	*/
	reativa: function(indice){
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.reativa()");}
		var abre = function(){
				var i,
					n = i3GEO.barraDeBotoes.BARRAS.length;
				for(i=0;i<n;i+=1){
					if(i3GEO.barraDeBotoes.BARRAS[i])
					{i3GEO.barraDeBotoes.BARRAS[i].show();}
				}
			};
		try{
			if(arguments.length === 1)
			{i3GEO.barraDeBotoes.BARRAS[indice].show();}
			else{
				abre.call();
			}
		}
		catch(e){abre.call();}
	},
	/*
	Function: recria

	Recria uma barra de ferramentas j&aacute; aberta aplicando os par&acirc;metros de configura&ccedil;&atilde;o definidos (vari&aacute;veis)

	Parametro:

	id {String} - id da barra
	*/
	recria: function(id){
		if(i3GEO.barraDeBotoes.ATIVA === false){
			return;
		}
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.recria()");}
		if(i3GEO.barraDeBotoes.TIPO === "olhodepeixe"){
			euEnv.euDockArray = [];
			euEnv.Kost.num = 0;
			if($i("euDock_0_bar")){
				document.body.removeChild($i("euDock_0_bar").parentNode);
			}
			i3GEO.barraDeBotoes.inicializaBarra();
			if($i("i3geoMarcaIcone"))
			{$i("i3geoMarcaIcone").style.display = "none";}
			return;
		}
		var i,n,temp,novoel,barraZoom,x,y,
			BARRAS = i3GEO.barraDeBotoes.BARRAS,
			iu = i3GEO.util;
		i3GEO.barraDeBotoes.BARRAS = [];
		n = BARRAS.length;
		for(i=0;i<n;i+=1){
			if(BARRAS[i] && BARRAS[i].id === id){
				//remove o menu de contexto
				iu.removeChild("contexto_"+id);
				if(!$i("barraTemporaria"+i)){
					novoel = document.createElement("div");
					novoel.id = "barraTemporaria"+i;
					document.body.appendChild(novoel);
				}
				novoel = $i("barraTemporaria"+i);
				novoel.innerHTML = $i(BARRAS[i].id+"_").innerHTML;

				//verifica se tem o slide de zoom
				barraZoom = false;
				temp = $i("vertMaisZoom");
				if(temp){
					temp = navm ? temp.parentNode : temp.parentNode.parentNode;
					if(temp.id === id)
					{barraZoom = true;}
				}
				x = parseInt($i(BARRAS[i].id+"_c").style.left,10);
				y = parseInt($i(BARRAS[i].id+"_c").style.top,10);
				if(i3GEO.barraDeBotoes.PERMITEFECHAR === true)
				{y = y-10;}
				BARRAS[i].destroy();
				i3GEO.barraDeBotoes.inicializaBarra(novoel.id,BARRAS[i].id,barraZoom,x,y);
			}
		}
		i3GEO.barraDeBotoes.ativaBotoes();
	},
	/*
	Function: fecha

	Fecha uma barra de ferramentas

	Parametro:

	id {String} - id que identifica a barra. Corresponde ao par�metro idconteudonovo da fun&ccedil;&atilde;o de inicializa&ccedil;&atilde;o das barras
	*/
	fecha: function(id){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.fecha()");}
		var i,
			n = this.BARRAS.length;
		for(i=0;i<n;i+=1){
			if(this.BARRAS[i] && this.BARRAS[i].id === id){
				$i(id+"_c").style.visibility = "hidden";
			}
		}
	},
	mostraJanela: function(objeto,mensagem,evt){
		if(mensagem === ""){
			try{clearTimeout(i3GEO.barraDeBotoes.timeMostraAjudaBotoes);}catch(e){}
			try{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes);}catch(e){}
			return;
		}
		var divmensagem = $i("divMensagemBarraDeBotoes"),balloonAjuda,
			pos = YAHOO.util.Dom.getXY(objeto);
		if(this.AJUDA === false || $i("janelaMenTexto")){
			i3GEO.ajuda.mostraJanela(mensagem);
			i3GEO.barraDeBotoes.escondeJanelaAjuda();
			return;
		}
		if(i3GEO.Interface.ATUAL === "googleearth"){
			objeto.title = mensagem;
			return;
		}
		if(!divmensagem && this.TIPOAJUDA !== "balao"){
			divmensagem = document.createElement("div");
			divmensagem.id = "divMensagemBarraDeBotoes";
			divmensagem.style.border = "0px solid rgb(120 120 120)";
			divmensagem.style.position = "absolute";
			divmensagem.style.zIndex = 20000;
			if($i("i3geo"))
			{$i("i3geo").appendChild(divmensagem);}
			else
			{document.body.appendChild(divmensagem);}
			if(this.TIPOAJUDA === "horizontal")
			{divmensagem.innerHTML = "<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+$im("left.png")+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>";}
			if(this.TIPOAJUDA === "vertical")
			{divmensagem.innerHTML = "<table style='z-index:20000' ><tr><td id='imgMensagemBarraDeBotoes' style='background:none;padding-top:2px;padding-right:3px;vertical-align:top'><img src='"+$im("top.png")+"' ></td><td style='text-align:left;border-left:1px solid rgb(210,210,210)'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'></div></td></tr></table>";}
		}
		if(mensagem !== ""){
			if(this.TIPOAJUDA !== "balao"){
				YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","none");
				if(this.TIPOAJUDA === "horizontal"){
					divmensagem.style.left = parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)+pos[0]+10+"px";
					divmensagem.style.top = pos[1]-2+(parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10) / 2)+"px";
				}
				if(this.TIPOAJUDA === "vertical"){
					divmensagem.style.left = (parseInt(YAHOO.util.Dom.getStyle(objeto,"width"),10)/2)+pos[0]-5+"px";
					divmensagem.style.top = pos[1]+5+parseInt(YAHOO.util.Dom.getStyle(objeto,"height"),10)+"px";
				}
				try{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes);}catch(e){}
				i3GEO.barraDeBotoes.timeMostraAjudaBotoes = setTimeout("i3GEO.barraDeBotoes.mostraJanelaAjuda('"+mensagem+"');",5000);
			}
			else{
				hideAllTooltips();
				balloonAjuda = new Balloon();
				BalloonConfig(balloonAjuda,'GBubble');
				balloonAjuda.delayTime = 0;
				balloonAjuda.stem = false;
				balloonAjuda.stemHeight = 0;
				balloonAjuda.vOffset = -24;
				balloonAjuda.images = i3GEO.configura.locaplic+'/pacotes/balloon-tooltips/htdocs/images/GBubblec';
				mensagem = "<table style='z-index:20000' ><tr><td style='text-align:left;'><span style='text-align:right;cursor:pointer;color:blue;' onclick='javascript:i3GEO.util.insereCookie(\"botoesAjuda\",\"nao\");i3GEO.barraDeBotoes.AJUDA = false;'>fecha</span><br><div style='vertical-align:middle;text-align:left;width:250px;border: 0px solid black;border-left:1px;' id='divMensagemBarraDeBotoesCorpo'>"+mensagem+"</div></td></tr></table>";
				try{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes);}catch(e){}
				i3GEO.barraDeBotoes.timeMostraAjudaBotoes = setTimeout(function(){
					balloonAjuda.cleanup();
					balloonIsVisible = false;
					//alert(mensagem);
					if(i3GEO.barraDeBotoes.TIPO === "olhodepeixe")
					{balloonAjuda.showTooltip(objeto,mensagem,null,null,null,pos[0],pos[1]-40);}
					else
					{balloonAjuda.showTooltip(objeto,mensagem,null,null,null,pos[0]+12,pos[1]);}
					try{clearTimeout(timeMostraAjudaBotoes);}catch(e){}
					i3GEO.barraDeBotoes.timeAjudaBotoes = setTimeout(function(){balloonAjuda.cleanup();},4000);
				},4000);
			}
		}
	},
	mostraJanelaAjuda:function(mensagem){
		$i("divMensagemBarraDeBotoesCorpo").innerHTML = mensagem;
		YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","block");
		try{clearTimeout(i3GEO.barraDeBotoes.timeMostraAjudaBotoes);}catch(e){}
		i3GEO.barraDeBotoes.timeAjudaBotoes = setTimeout(function(){i3GEO.barraDeBotoes.escondeJanelaAjuda();},3000);
	},
	escondeJanelaAjuda:function(){
		try{
			if(i3GEO.barraDeBotoes.timeAjudaBotoes)
			{clearTimeout(i3GEO.barraDeBotoes.timeAjudaBotoes);}
		}
		catch(e){}
		if($i("divMensagemBarraDeBotoes"))
		{YAHOO.util.Dom.setStyle("divMensagemBarraDeBotoes","display","none");}
	},
	editor:{
		inicia: function(){
			//if(navm)
			//{alert("O editor n&atilde;o funciona corretamente nesse navegador.");}
			i3GEO.eventos.cliquePerm.desativa();
			i3GEO.barraDeBotoes.editor.carregaJs("janelaEditorVetorial");
		},
		carregaJs: function(idjanela){
			if(!i3GEO.editorOL){
				i3GEO.util.scriptTag(
					i3GEO.configura.locaplic+"/mashups/openlayers.js",
					"i3GEO.barraDeBotoes.editor.ativaPainel('"+idjanela+"')",
					"openlayers.js",
					true
				);
			}
			else{
				if(!i3GEO.editorOL.layergrafico){
					i3GEO.editorOL.criaLayerGrafico();
					i3GEO.editorOL.mapa.addLayers([i3GEO.editorOL.layergrafico]);
				}
				if(!i3GEO.editorOL.backup){
					i3GEO.editorOL.backup = new OpenLayers.Layer.Vector("Backup",{displayInLayerSwitcher:false,visibility:false});
				}
				i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes);
			}
		},
		criaJanela: function(){
			if($i("i3GEOjanelaEditor"))
			{return "i3GEOjanelaEditor";}
			var janela,divid,titulo,cabecalho,minimiza;
			cabecalho = function(){};
			minimiza = function(){
				i3GEO.janela.minimiza("i3GEOjanelaEditor");
			};
			//cria a janela flutuante
			titulo = $trad("u29");
			janela = i3GEO.janela.cria(
				"300px",
				"200px",
				"",
				"",
				"",
				titulo,
				"i3GEOjanelaEditor",
				false,
				"hd",
				cabecalho,
				minimiza
			);
			divid = janela[2].id;
			$i("i3GEOjanelaEditor_corpo").style.backgroundColor = "white";
			$i("i3GEOjanelaEditor_corpo").style.textAlign = "left";
			return divid;
		},
		ativaPainel: function(idjanela){
			OpenLayers.ImgPath = i3GEO.configura.locaplic+"/pacotes/openlayers/img/";
			i3GEO.editorOL.fundo = "";//i3GEO.editorOL &eacute; criado pelo script carregado
			i3GEO.editorOL.mapa = i3geoOL;
			i3GEO.editorOL.maxext = "";
			i3GEO.editorOL.controles = [];
			i3GEO.editorOL.botoes = {
				'pan':false,
				'zoombox':false,
				'zoomtot':false,
				'legenda':false,
				'distancia':false,
				'area':false,
				'identifica':true,
				'linha':true,
				'ponto':true,
				'poligono':true,
				'texto':true,
				'corta':true,
				'edita':true,
				'listag':true,
				'selecao':true,
				'apaga':true,
				'procura':false,
				'propriedades':true,
				'salva':true,
				'ajuda':true,
				'fecha':true,
				'tools':true,
				'undo':true,
				'frente':true
			};

			var sketchSymbolizers = {
					"Point": {
						fillColor: "rgb(${fillColor})",
						fillOpacity: "${opacidade}",
						strokeWidth: "${strokeWidth}",
						strokeOpacity: "${opacidade}",
						strokeColor: "rgb(${strokeColor})",
						label: "${texto}",
						pointRadius: "${pointRadius}",
						graphicName: "${graphicName}",
						fontSize: "${fontSize}",
						fontColor: "rgb(${fontColor})",
						fontFamily: "Arial",
						fontWeight: "normal",
						labelAlign: "lb",
						labelXOffset: "3",
						labelYOffset: "3"
					},
					"Line": {
						strokeWidth: "${strokeWidth}",
						strokeOpacity: "${opacidade}",
						strokeColor: "rgb(${strokeColor})"
					},
					"Polygon": {
						strokeWidth: "${strokeWidth}",
						strokeOpacity: "${opacidade}",
						strokeColor: "rgb(${strokeColor})",
						fillColor: "rgb(${fillColor})",
						fillOpacity: "${opacidade}"
					}
				},
				style = new OpenLayers.Style(),
				styleMap1 = new OpenLayers.StyleMap({"default": style});

			style.addRules([
				new OpenLayers.Rule({symbolizer: sketchSymbolizers})
			]);
			i3GEO.editorOL.layergrafico = new OpenLayers.Layer.Vector("Edi&ccedil;&atilde;o",{styleMap:styleMap1,displayInLayerSwitcher:false,visibility:true});
			i3GEO.editorOL.mapa.addLayers([i3GEO.editorOL.layergrafico]);
			i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes);
		}
	}
};
//YAHOO.log("carregou classe barradebotoes", "Classes i3geo");