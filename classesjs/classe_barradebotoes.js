/*jslint white:false,undef: false, rhino: true, onevar: true, evil: false */

/*
Title: Barra de bot�es

Arquivo:

i3geo/classesjs/classe_barradebotoes.js

Licenca:

GPL2

I3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist�rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

Este programa � software livre; voc� pode redistribu�-lo
e/ou modific�-lo sob os termos da Licen�a P�blica Geral
GNU conforme publicada pela Free Software Foundation;
tanto a vers�o 2 da Licen�a.
Este programa � distribu�do na expectativa de que seja �til,
por�m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl�cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
Consulte a Licen�a P�blica Geral do GNU para mais detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere�o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEO) == 'undefined'){
	i3GEO = [];
}
/*
Classe: i3GEO.barradebotoes

Constr�i a barra de bot�es flutuante

Veja tamb�m classe_interface.js (i3GEO.Interface) que possu� par�metros que permitem ajustar a posi��o das barras no mapa
*/
i3GEO.barraDeBotoes = {
	/*
	Propriedade: SOICONES
	
	Esconde as bordas das barras e o fundo, mostrando apenas os �cones
	
	Default:
	{false}
	
	Tipo:
	{boolean}
	*/
	SOICONES: false,
	/*
	Propriedade: AUTOALTURA
	
	Ajusta automaticamente a altura das barras conforme a altura do mapa.
	
	Esta op��o n�o tem efeito se a barra contiver a barra de zoom (isso ocorre em fun��o de um bug do YIU, que causa erro na barra nessas condi��es)
	
	Tipo:
	{boolean}
	*/
	AUTOALTURA: false,
	/*
	Propriedade: TRANSICAOSUAVE
	
	Altera a transpar�ncia das barras quando o mouse sobrep�e a barra e quando sai da barra
	
	Tipo:
	{boolean}
	
	Default:
	{true}
	*/
	TRANSICAOSUAVE: true,
	/*
	Propriedade: OPACIDADE
	
	Valor da opacidade min�ma utilizada quando TRANSICAOSUAVE for igual a true.
	
	Varia de 0 a 100
	
	Tipo:
	{numeric}
	
	Default:
	{65}
	*/
	OPACIDADE: 65,
	/*
	Propriedade: PERMITEFECHAR
	
	Mostra o bot�o para fechar as barras ou n�o.
	
	Tipo:
	{boolean}
	*/
	PERMITEFECHAR: true,
	/*
	Propriedade: PERMITEDESLOCAR
	
	Permite deslocar as barras ou n�o.
	
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
	
	Cria as barras de bot�es automaticamente, utilizando os pot�es padr�o
	
	Tipo:
	{Boolean}
	
	Default:
	{false}
	*/
	AUTO: false,	
	/*
	Propriedade: LISTABOTOES
	
	Objeto com a lista de bot�es.
	
	Por default utiliza os botoes definidos em i3GEO.configura.funcoesBotoes.botoes
	
	Tipo:
	{JSON}
	*/
	LISTABOTOES: i3GEO.configura.funcoesBotoes.botoes,
	/*
	Propriedade: BOTAOPADRAO
	
	Bot�o que ser� ativado ao inicializar os bot�es com ativaBotoes.
	
	Correpsonde ao item iddiv de LISTABOTOES
	
	Tipo:
	{String}
	*/
	BOTAOPADRAO: "pan",
	/*
	Propriedade: COMPORTAMENTO
	
	Define o comportamento dos bot�es quando � pressionado
	
	Tipo:
	{String}
	
	Valores:
	
	"padrao" - comportamento padr�o, com bordas da esquerda e inferiores ativadas
	
	"destacado" - destaca apenas o bot�o atualmente pressionado
	
	"vermelho" - destaca com fundo vermelho
	
	"laranja" - destaca com fundo laranja
	
	"cinza" - destaca com fundo cinza
	
	*/
	COMPORTAMENTO: "padrao",	
	/*
	Variavel: BARRAS
	
	Array com os objetos YAHOO.janelaBotoes.xp.panel criados
	*/
	BARRAS: [],

	/*
	Variavel: BOTAOCLICADO
	
	�ltimo icone que foi clicado
	
	Tipo:
	{String}
	*/
	BOTAOCLICADO: "",
	/*
	Function: ativaIcone
	
	Altera as bordas de um �cone aplicando um efeito de �cone real�ado.
	
	Todos os demais �cones definidos em LISTABOTOES e que tiverem o tipo = "dinamico"
	ser�o processados para alterar as bordas dando o efeito de n�o ativo.
	
	Parametro:
	
	icone {String} - id do icone que ser� ativado. Esse id � o mesmo definido em LISTABOTOES
	*/
	ativaIcone: function(icone){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaIcone()");}
		if(i3GEO.Interface.ATUAL==="openlayers"){
			try{
				OLzoom.deactivate();
			}
			catch(e){if(typeof(console) !== 'undefined'){console.error(e);}}
		}
		var estilo,temp,ist,cor,ko;
		i3GEO.barraDeBotoes.BOTAOCLICADO = icone;
		ko = i3GEO.barraDeBotoes.LISTABOTOES.length-1;
		if(i3GEO.barraDeBotoes.COMPORTAMENTO == "padrao"){
			if(ko >= 0){
				do{
					temp = $i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);
					if (i3GEO.barraDeBotoes.LISTABOTOES[ko].tipo=="dinamico" && temp){
						ist = temp.style;
						ist.borderWidth="1px";
						ist.borderColor='white';
						ist.borderLeftColor='rgb(50,50,50)';
						ist.borderBottomColor='rgb(50,50,50)';
					}
				}
				while(ko--);
			}
			//ativa o icone
			if($i(icone)){
				estilo = $i(icone).style;
				if(i3GEO.barraDeBotoes.SOICONES === false){
					estilo.borderColor='white';
					estilo.borderWidth="1px";
				}
			}
		}
		if(i3GEO.barraDeBotoes.COMPORTAMENTO == "destacado"){
			if(ko >= 0){
				do{
					temp = $i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);
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
				if(i3GEO.barraDeBotoes.SOICONES === false){
					estilo.borderColor='black';
					estilo.borderWidth="1px";
				}
			}
		}
		if(i3GEO.barraDeBotoes.COMPORTAMENTO == "laranja" || i3GEO.barraDeBotoes.COMPORTAMENTO == "vermelho" || i3GEO.barraDeBotoes.COMPORTAMENTO == "cinza"){
			if(ko >= 0){
				do{
					temp = $i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);
					if (temp){
						ist = temp.style;
						if(i3GEO.barraDeBotoes.SOICONES === false){
							ist.borderWidth="1px";
							ist.borderColor='white';
							ist.backgroundColor='white';
						}
						else{ist.backgroundColor='';}
					}
				}
				while(ko--);
			}
			if(i3GEO.barraDeBotoes.COMPORTAMENTO == "laranja"){cor = "orange";}
			if(i3GEO.barraDeBotoes.COMPORTAMENTO == "vermelho"){cor = "red";}
			if(i3GEO.barraDeBotoes.COMPORTAMENTO == "cinza"){cor = "gray";}
			//ativa o icone
			if($i(icone)){
				estilo = $i(icone).style;
				if(i3GEO.barraDeBotoes.SOICONES === false){
					estilo.borderColor='black';
					estilo.borderWidth="1px";
				}
				estilo.backgroundColor=cor;
			}
		}
	},
	/*
	Function: ativaBotoes
	
	Ativa os botoes definidos em LISTABOTOES
	
	Os botoes s�o constru�dos e as fun��es definidas s�o embutidas no evento onclick
	
	Parametro:
	
	padrao (String} - botao que ser� mostrado como ativo (opcional).
	Se n�o for definido, ser� utilizado o bot�o especificado em BOTAOPADRAO.
	O nome do botao deve estar em LISTABOTOES na propriedade iddiv
	*/
	ativaBotoes:function(padrao){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaBotoes()");}
		var l,b;
		if(arguments.length === 0)
		{padrao = i3GEO.barraDeBotoes.BOTAOPADRAO;}
		i3GEO.barraDeBotoes.BOTAOCLICADO = padrao;
		l = i3GEO.barraDeBotoes.LISTABOTOES;
		b = l.length-1;
		if (b >= 0){
			do{
				if ($i(l[b].iddiv)){
					if(l[b].conteudo)
					{eval('$i(l[b].iddiv).innerHTML = "'+l[b].conteudo+'"');}
					if(l[b].dica){
						eval('$i("'+l[b].iddiv+'").onmouseover = function(){i3GEO.ajuda.mostraJanela("'+l[b].dica+'","");}');
						eval('$i("'+l[b].iddiv+'").onmouseout = function(){i3GEO.ajuda.mostraJanela("");};');
					}
					if(l[b].funcaoonclick){
						$i(l[b].iddiv).onclick = l[b].funcaoonclick;
						if(l[b].iddiv == padrao)
						{l[b].funcaoonclick();}
					}
					if(l[b].constroiconteudo)
					{eval(l[b].constroiconteudo);}
				}
			}
			while (b--);
		}
	},
	/*
	Function: inicializaBarra
	
	Inicializa a barra de bot�es
	
	Exemplo:
	
	if ($i("barraDeBotoes1"))
	
	i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes1","i3geo_barra1",true,x1,y1);
	
	if ($i("barraDeBotoes2"))
	
	i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2","i3geo_barra2",false,x2,y2);
	
	Os objetos criados s�o armazenados no array BARRAS, dessa forma, para acessar uma barra utilize
	por exemplo:
	
	i3GEO.barraDeBotoes.BARRAS[1].show();
	
	Parametros:
	
	idconteudo {String} - id do elemento existente no HTML e que cont�m as defini��es dos bot�es
	
	idconteudonovo {String} - id do elemento que ser� criado para adicionar os boto�es
	
	barraZoom {boolean} - indica se a barra de zoom ser� inclu�da
	
	x {Numeric} - posi��o x (pixels) da barra em rela��o ao mapa
	
	y {Numeric} - posi��o y (pixels) da barra em rela��o ao mapa
	*/
	inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.inicializaBarra()");}
		var tipo,mostra,numerobotoes = 0,i,temp,elementos,nelementos = 0,e,wj,recuo,novoel,alturadisponivel;
		if(i3GEO.barraDeBotoes.AUTO === true){
			if(idconteudo === "barraDeBotoes1"){
				novoel = document.createElement("div");
				novoel.id = "barraDeBotoes1";
				temp = '<table style="width:100%"><caption style="text-align:center">&nbsp;</caption><tr><td style="background-color:rgb(250,250,250);"><div ID="historicozoom" ></div></td></tr><tr><td style=height:5px ></td></tr></table>' +
					"<div style='display:inline;background-color:rgb(250,250,250);'>" +
					"<p style='font-size:4px;'>&nbsp;</p>" +
					'<img title="zoom" alt="zoom" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="zoomli"/>' +
					"</div>" +
					"<div style='display:inline;background-color:rgb(250,250,250);'>" +
					"<p style='font-size:4px;'>&nbsp;</p>" +
					'<img title="desloca" alt="desloca" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="pan"/>' +
					"</div>" +
					"<div style='display:inline;background-color:rgb(250,250,250);'>" +
					"<p style='font-size:4px;'>&nbsp;</p>" +
					'<img title="geral" alt="geral" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="zoomtot"/>' +
					"</div>";
				novoel.innerHTML = temp;
				document.body.appendChild(novoel);
			}
			if(idconteudo === "barraDeBotoes2"){
				novoel = document.createElement("div");
				novoel.id = "barraDeBotoes2";
				temp = "<table style='width:100%'><caption style='text-align:center'>&nbsp;</caption>"+
				"	<tr><td style='background-color:rgb(250,250,250);'><img title='' alt='sobe' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='sobeferramentas'/></td></tr>"+
				"	</table>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:2px;'>&nbsp;</p>"+
				"		<img title='identifica' alt='identifica' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='identifica'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='info' alt='info' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='identificaBalao'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='mede' alt='mede' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='mede'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='area' alt='area' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='area'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='imprimir' alt='imprimir' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='imprimir'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='reinicia' alt='reinicia' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='reinicia'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='extensao' alt='extensao' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='exten'/>"+
				"	</div>        "+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='referencia' alt='referencia' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='referencia'/>"+
				"	</div>        "+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='insere xy' alt='insere xy' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='inserexy'/>"+
				"	</div> "+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='texto' alt='texto' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='textofid'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='selecao' alt='selecao' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='selecao'/>"+
				"	</div>"+
				"	<div style='display:inline;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='google' alt='google' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='google'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='fotos' alt='fotos' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='buscafotos'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='busca na wikipedia' alt='busca na wikipedia' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='wiki'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='metar'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img title='lente' alt='lente' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='lentei'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='confluencias' alt='confluencias' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='confluence'/>"+
				"	</div>"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='Insere gr�ficos' alt='Insere gr�ficos' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='inseregrafico'/>"+
				"	</div>	"+
				"	<div style='display:none;background-color:rgb(250,250,250);'>"+
				"		<p style='font-size:4px;'>&nbsp;</p>"+
				"		<img  title='3d' alt='3d' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='v3d'/>"+
				"	</div>"+
				"  <table style='width:100%;'><tr><td style='background-color:rgb(250,250,250);'><p style='font-size:2px;'>&nbsp;</p><img title='desce' alt='' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='desceferramentas'/></td></tr></table>";
				novoel.innerHTML = temp;
				document.body.appendChild(novoel);
			}
		}
		wj = "36px";
		recuo = "0px";
		novoel = document.createElement("div");
		novoel.id = idconteudonovo;
		novoel.style.display="block";
		if(i3GEO.barraDeBotoes.SOICONES === false){
			novoel.style.border="1px solid gray";
			novoel.style.background="white";
		}
		if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){
			if (navm){novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')';}
			else{novoel.style.opacity= i3GEO.barraDeBotoes.OPACIDADE / 100;}
		}
		else{
			if (navm){novoel.style.filter='alpha(opacity=90)';}
			else{novoel.style.opacity= 0.85;}
		}
		temp = "";
		if (barraZoom === true)
		{temp += i3GEO.navega.barraDeZoom.cria();}
		temp += '<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:-6px;"  ></div>';
		novoel.innerHTML = temp;
		novoel.onmouseover = function(){
			//objposicaocursor.imgx = 0;
			if($i("i3geo_rosa"))
			{$i("i3geo_rosa").style.display="none";}
			if(i3GEO.barraDeBotoes.OPACIDADE){
				if (navm)
				{novoel.style.filter='alpha(opacity=90)';}
				else
				{novoel.style.opacity = 0.85;}
			}
		};
		novoel.onmouseout = function(){
			if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){
				if (navm)
				{novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')';}
				else
				{novoel.style.opacity= i3GEO.barraDeBotoes.OPACIDADE / 100;}
			}		
		};
		document.body.appendChild(novoel);
		if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO)
		{i3GEO.util.mudaCursor(i3GEO.configura.cursores,"contexto",idconteudonovo,i3GEO.configura.locaplic);}
		//copia os botoes do HTML para a janela
		if($i(idconteudo))
		{
			$i(idconteudonovo+"_").innerHTML = $i(idconteudo).innerHTML;
			$i(idconteudo).innerHTML = "";
			alturadisponivel = i3GEO.parametros.h - 4;
			numerobotoes = parseInt(alturadisponivel / 35,10);
			elementos = $i(idconteudonovo+"_").getElementsByTagName("img");
			nelementos = elementos.length;
			//faz o c�lculo do n�mero de bot�es que devem ficar vis�veis em fun��o do tamanho da barra
			if(i3GEO.barraDeBotoes.AUTOALTURA === true ||(numerobotoes < nelementos)){
				if(elementos[0].id == "sobeferramentas"){
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
							elementos[i].style.display = "inline";
							i = i + 1;
						}
						while(i < numerobotoes-1);
					}catch(e){
						if(typeof(console) !== 'undefined'){console.error(e);}
					}
					if(elementos.length <= numerobotoes){
						if($i("sobeferramentas")){$i("sobeferramentas").style.display="none";}
						if($i("desceferramentas")){$i("desceferramentas").style.display="none";}
					}
				}		
			}
		}
		YAHOO.namespace("janelaBotoes.xp");
		if(i3GEO.barraDeBotoes.AUTOALTURA === false || barraZoom === true || (elementos.length > numerobotoes))
		{YAHOO.janelaBotoes.xp.panel = new YAHOO.widget.Panel(idconteudonovo, {width:wj, fixedcenter: false, constraintoviewport: false, underlay:"none", close:i3GEO.barraDeBotoes.PERMITEFECHAR, visible:true, draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR, modal:false,iframe:false } );}
		else
		{YAHOO.janelaBotoes.xp.panel = new YAHOO.widget.Panel(idconteudonovo, {height:i3GEO.parametros.h - 4,width:wj, fixedcenter: false, constraintoviewport: false, underlay:"none", close:i3GEO.barraDeBotoes.PERMITEFECHAR, visible:true, draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR, modal:false,iframe:false } );}
		
		if(i3GEO.barraDeBotoes.SOICONES === true){
			temp = $i("i3geo_barra2");
			if(temp)
			{temp.style.borderWidth="0 0 0 0";}
			temp = $i("i3geo_barra1");
			if(temp)
			{temp.style.borderWidth="0 0 0 0";}
		}
		if((barraZoom === true) && i3GEO.Interface.ATUAL == "padrao")
		{i3GEO.navega.barraDeZoom.ativa();}
		YAHOO.janelaBotoes.xp.panel.render();
		if(i3GEO.barraDeBotoes.AUTOALTURA === true){
			y = y - i3GEO.Interface.BARRABOTOESTOP + 2;
			x = x - 3;
		}
		YAHOO.janelaBotoes.xp.panel.moveTo(x,y);
		if($i("sobeferramentas")){
			$i("sobeferramentas").onclick = function(){
				elementos = $i(idconteudonovo+"_").getElementsByTagName("div");
				nelementos = elementos.length;
				if(elementos[0].style.display == "inline" && elementos[0].id === "")
				{return;}
				//if(elementos[1].style.display == "inline" && elementos[1].id === "")
				//{return;}
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
					//esconde o �ltimo botao
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
					if(elementos[elementos.length - 1].style.display == tipo)
					{return;}
					nelementos = elementos.length;
					if(nelementos > 0){
						//esconde o primeiro botao
						i = 0;
						do{
							e = elementos[i];
							if(e.style){
								if((e.style.display == "block") || (e.style.display == "inline") || (e.style.display === "")){
									if(e.id === "")
									{e.style.display="none";break;}
								}
							}
							i = i + 1;
						}
						while(i < nelementos);
						//mostra o �ltimo botao
						i = nelementos-1;
						var mostra = elementos[i];
						do{
							e = elementos[i];
							if(e.style){
								if(e.style.display == tipo)
								{break;}
								if(e.style.display == "none")
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
		i3GEO.barraDeBotoes.BARRAS.push(YAHOO.janelaBotoes.xp.panel);
		YAHOO.janelaBotoes.xp.panel.show();
		//
		//menu de contexto
		//
		if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO){
			i3GEO.barraDeBotoes.ativaMenuContexto(idconteudonovo);
		}	
		if($i(idconteudonovo+"_h"))
		{$i(idconteudonovo+"_h").className = "hd2";}
	},
	/*
	Function: ativaMenuContexto
	
	Ativa o menu de contexto acionado com o bot�o direito do mouse
	
	Parametro:
	
	idbarra - {string} id da barra de bot�es onde o evento ser� ativado
	*/
	ativaMenuContexto: function(idbarra){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.ativaMenuContexto()");}
		var oFieldContextMenuItemData,oFieldContextMenu,onFieldMenuRender,id;
		function executar(a,b,c)
		{eval(c);}
		oFieldContextMenuItemData = [
			{ text: "&nbsp;<span class='container-close'></span>"},
			{ text: "Fechar barra", onclick: { fn: executar, obj: "i3GEO.barraDeBotoes.fecha('"+idbarra+"')" } },
			{ text: "Barra normal", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.AUTOALTURA=false;i3GEO.barraDeBotoes.PERMITEFECHAR=true;i3GEO.barraDeBotoes.PERMITEDESLOCAR=true;i3GEO.barraDeBotoes.recria('"+idbarra+"')" } },
			{ text: "Barra fixa", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.AUTOALTURA=true;i3GEO.barraDeBotoes.PERMITEFECHAR=false;i3GEO.barraDeBotoes.PERMITEDESLOCAR=false;i3GEO.barraDeBotoes.recria('"+idbarra+"')" } },
			{ text: "Remove transi��o", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=false;" } },
			{ text: "Ativa transi��o", onclick: { fn: executar, obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=true;" } }
		];
		oFieldContextMenu = new YAHOO.widget.ContextMenu(
			"contexto_"+idbarra,{
				trigger: idbarra,
				itemdata: oFieldContextMenuItemData,
				lazyload: true
			}
		);
		onFieldMenuRender = function(){
			eval("var id = 'contexto_"+idbarra+"'");
			$i(id).style.zIndex = 50000;
		};
		oFieldContextMenu.subscribe("render", onFieldMenuRender);
	},
	/*
	Function: reativa
	
	Reativa as barras de ferramentas j� criadas
	
	Essa op��o apenas aplica o m�todo "show" aos objetos armazenados em i3GEO.barraDeBotoes.BARRAS
	
	Se a barra n�o existir previamente, nada ir� contecer
	
	Parametro:
	
	indice {Integer} - �ndice do array BARRAS que guarda os objetos YAHOO com 
	as barras Se n�o for definido, todas as barras ser�o reativadas
	*/
	reativa: function(indice){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.reativa()");}
		var n,i;
		if(arguments.length == 1)
		{i3GEO.barraDeBotoes.BARRAS[indice].show();}
		else{
			n = i3GEO.barraDeBotoes.BARRAS.length;
			for(i=0;i<n;i++)
			{i3GEO.barraDeBotoes.BARRAS[i].show();}
		}
	},
	/*
	Function: recria
	
	Recria uma barra de ferramentas j� aberta aplicando os par�metros de configura��o definidos (vari�veis)
	
	Parametro:
	
	id {String} - id da barra
	*/
	recria: function(id){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.recria()");}
		var n,temp,novoel,barraZoom,x,y;
		n = i3GEO.barraDeBotoes.BARRAS.length;
		for(i=0;i<n;i++){
			if(i3GEO.barraDeBotoes.BARRAS[i].id == id){
				//remove o menu de contexto
				temp = $i("contexto_"+id);
				if(temp){
					temp.parentNode.removeChild(temp);
				}
				novoel = document.createElement("div");
				novoel.id = "barraTemporaria"+i;
				novoel.innerHTML = $i(i3GEO.barraDeBotoes.BARRAS[i].id+"_").innerHTML;
				document.body.appendChild(novoel);
				//verifica se tem o slide de zoom
				barraZoom = false;
				temp = $i("vertMaisZoom");
				if(temp){
					if(navm)
					{temp = temp.parentNode;}
					else
					{temp = temp.parentNode.parentNode;}
					if(temp.id == id)
					{barraZoom = true;}
				}
				x = parseInt($i(i3GEO.barraDeBotoes.BARRAS[i].id+"_c").style.left,10);
				y = parseInt($i(i3GEO.Interface.IDCORPO).style.top,10)+10;//parseInt($i(i3GEO.barraDeBotoes.BARRAS[i].id+"_c").style.top);
				i3GEO.barraDeBotoes.BARRAS[i].destroy();
				i3GEO.barraDeBotoes.inicializaBarra(novoel.id,i3GEO.barraDeBotoes.BARRAS[i].id+"x",barraZoom,x,y);
			}
		}
		i3GEO.barraDeBotoes.ativaBotoes();
	},
	/*
	Function: fecha
	
	Fecha uma barra de ferramentas
	
	Parametro:
	
	id {String} - id que identifica a barra. Corresponde ao par�metro idconteudonovo da fun��o de inicializa��o das barras
	*/
	fecha: function(id){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.barraDeBotoes.fecha()");}
		var n = i3GEO.barraDeBotoes.BARRAS.length;
		for(i=0;i<n;i++){
			if(i3GEO.barraDeBotoes.BARRAS[i].id == id){
				$i(id+"_c").style.visibility = "hidden";
			}
		}	
	}
};
//YAHOO.log("carregou classe barradebotoes", "Classes i3geo");