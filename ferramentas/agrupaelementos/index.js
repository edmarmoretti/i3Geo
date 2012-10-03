
/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */
/*
Title: Agrupa elementos

Faz o agrupamento dos elementos selecionados de um tema gerando um novo shapefile que &eacute; adicionado ao mapa.
Essa n�o &eacute; uma opera&ccedil;�o do tipo "dissolve", sendo utilizadas as fun&ccedil;&otilde;es "union" e "convexhull". Os elementos podem ser descont&iacute;nuos.

Veja:

<i3GEO.analise.dialogo.agrupaElementos>

Arquivo:

i3geo/ferramentas/agrupaelementos/index.js.php

Licenca:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEOF) === 'undefined'){
	var i3GEOF = {};
}
/*
Classe: i3GEOF.agrupaElementos
*/
i3GEOF.agrupaElementos = {
	/*
	Variavel: aguarde

	Estilo do objeto DOM com a imagem de aguarde existente no cabe&ccedil;alho da janela.
	*/
	aguarde: "",
	/*
		Para efeitos de compatibilidade antes da vers&atilde;o 4.7 que n�o tinha dicion&aacute;rio
	*/
	criaJanelaFlutuante: function(){
		i3GEOF.agrupaElementos.iniciaDicionario();
	},
	/*
	Function: iniciaDicionario

	Carrega o dicion&aacute;rio e chama a fun&ccedil;&atilde;o que inicia a ferramenta

	O Javascript &eacute; carregado com o id i3GEOF.nomedaferramenta.dicionario_script
	*/
	iniciaDicionario: function(){
		if(typeof(i3GEOF.agrupaElementos.dicionario) === 'undefined'){
			i3GEO.util.scriptTag(
				i3GEO.configura.locaplic+"/ferramentas/agrupaelementos/dicionario.js",
				"i3GEOF.agrupaElementos.iniciaJanelaFlutuante()",
				"i3GEOF.agrupaElementos.dicionario_script"
			);
		}
		else{
			i3GEOF.agrupaElementos.iniciaJanelaFlutuante();
		}
	},
	/*
	Function: inicia

	Inicia a ferramenta. &Eacute; chamado por criaJanelaFlutuante

	Parametro:

	iddiv {String} - id do div que receber&aacute; o conteudo HTML da ferramenta
	*/
	inicia: function(iddiv){
		try{
			$i(iddiv).innerHTML += i3GEOF.agrupaElementos.html();
			i3GEOF.agrupaElementos.t0();
		}
		catch(erro){alert(erro);}
	},
	/*
	Function: html

	Gera o c&oacute;digo html para apresenta&ccedil;�o das op&ccedil;&otilde;es da ferramenta

	Retorno:

	String com o c&oacute;digo html
	*/
	html:function(){
		var ins = '';
		ins +=	'<div style="background-color:#F2F2F2;top:0px;left:0px;display:block;width:98%;" id="i3GEOagrupaelementosresultado" >';
		ins +=	'</div>';
		ins +=	'<div style="top:10px;left:0px;display:block;width:98%;color:red" id="i3GEOagrupaelementosfim" >';
		ins +=	'</div>';
		return ins;
	},
	/*
	Function: criaJanelaFlutuante

	Cria a janela flutuante para controle da ferramenta.
	*/
	iniciaJanelaFlutuante: function(){
		var minimiza,cabecalho,janela,divid,temp,titulo;
		//cria a janela flutuante
		titulo = $trad("u26")+" <a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=3&idajuda=25' >&nbsp;&nbsp;&nbsp;</a>";
		cabecalho = function(){};
		minimiza = function(){
			i3GEO.janela.minimiza("i3GEOF.agrupaElementos");
		};
		janela = i3GEO.janela.cria(
			"400px",
			"270px",
			"",
			"",
			"",
			titulo,
			"i3GEOF.agrupaElementos",
			false,
			"hd",
			cabecalho,
			minimiza
		);
		divid = janela[2].id;
		i3GEOF.agrupaElementos.aguarde = $i("i3GEOF.agrupaElementos_imagemCabecalho").style;
		i3GEOF.agrupaElementos.inicia(divid);
		temp = function(){
			if(i3GEO.eventos.ATUALIZAARVORECAMADAS.toString().search("i3GEOF.agrupaElementos.t0()") > 0)
			{i3GEO.eventos.ATUALIZAARVORECAMADAS.remove("i3GEOF.agrupaElementos.t0()");}
		};
		YAHOO.util.Event.addListener(janela[0].close, "click", temp);
		if(i3GEO.eventos.ATUALIZAARVORECAMADAS.toString().search("i3GEOF.agrupaElementos.t0()") < 0)
		{i3GEO.eventos.ATUALIZAARVORECAMADAS.push("i3GEOF.agrupaElementos.t0()");}
	},
	t0: function()
	{
		var ins = "<p class='paragrafo' >Essa ferramenta transforma v&aacute;rios elementos selecionados de um tema em um s&oacute; gerando um pol&iacute;gono para cada grupo.";
		ins += "<p class='paragrafo' >Para definir quais elementos devem ser unidos uns com os outros &eacute; preciso escolher um item da tabela de atributos do tema.";
		ins += "Os elementos que possu&iacute;rem o mesmo valor ser&atilde;o considerados no mesmo grupo. Caso n&atilde; tenha sido escolhido nenhum item, todas os elementos ser&atilde;o agrupados em um s&oacute;";
		ins += "<p class='paragrafo' >O resultado final ser&aacute; um novo tema com elementos diferentes dos originais e cuja tabela de atributos conter&aacute; apenas o item escolhido.";
		i3GEO.util.proximoAnterior("","i3GEOF.agrupaElementos.t1()",ins,"i3GEOFgradeDePontost0","i3GEOagrupaelementosresultado");
	},
	t1: function(){
		var ins = "<p class='paragrafo' >Tema que cont&eacute;m os elementos (pelo menos um elemento deve estar selecionado):<br>";
		ins += "<div id='i3GEOagrupaelementosSelTemas' style='text-align:left;font-size:11px'></div>";
		i3GEO.util.proximoAnterior("i3GEOF.agrupaElementos.t0()","i3GEOF.agrupaElementos.t2()",ins,"i3GEOF.agrupaElementos.t1","i3GEOagrupaelementosresultado");
		i3GEOF.agrupaElementos.comboTemasSel();
	},
	t2: function(){
		var ins = "<p class='paragrafo' >Escolha o item da tabela de atributos que ser&aacute; utilizado para agregar. (opcional)";
		ins += "<div id='i3GEOagrupaelementosSelItens' style='text-align:left;font-size:11px;'></div>";
		i3GEO.util.proximoAnterior("i3GEOF.agrupaElementos.t1()","i3GEOF.agrupaElementos.t3()",ins,"i3GEOF.agrupaElementos.t2","i3GEOagrupaelementosresultado");
		$i("i3GEOagrupaelementosSelItens").style.display = "block";
		i3GEOF.agrupaElementos.comboItensSel();
	},
	t3: function(){
		var ins = "<p class='paragrafo'>O tema com o agrupamento ser&aacute; adicionado ao mapa atual.";
		ins += "<br><br><input id=i3GEOagrupaelementosbotao1 type='buttom' value='Criar agrupamento' />";
		i3GEO.util.proximoAnterior("i3GEOF.agrupaElementos.t2()","",ins,"i3GEOF.agrupaElementos.t3","i3GEOagrupaelementosresultado");
		new YAHOO.widget.Button(
			"i3GEOagrupaelementosbotao1",
			{onclick:{fn: i3GEOF.agrupaElementos.criaAgrupamento}}
		);
	},
	/*
	Function: criaAgrupamento

	Executa a opera&ccedil;�o de agrupamento

	Veja:

	<AGRUPAELEMENTOS>
	*/
	criaAgrupamento: function(){
		try{
			if(i3GEOF.agrupaElementos.aguarde.visibility === "visible")
			{return;}
			var item = $i("i3GEOagrupaelementosselItem").value,
				tema = $i("i3GEOagrupaelementostemasComSel").value,
				p,
				fim,
				cp;
			if (tema !== "")
			{
				i3GEOF.agrupaElementos.aguarde.visibility = "visible";
				fim = function(retorno){
					i3GEOF.agrupaElementos.aguarde.visibility = "hidden";
					if (retorno.data === undefined )
					{$i("i3GEOagrupaelementosfim").innerHTML = "Erro. A opera&ccedil;�o demorou muito.";}
					else
					{i3GEO.atualiza();}
				};
				p = i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=agrupaElementos&tema="+tema+"&item="+item;
				cp = new cpaint();
				cp.set_response_type("JSON");
				cp.call(p,"agrupaElementos",fim);
			}
			else
			{alert("Tema invalido");}
		}
		catch(e){$i("i3GEOagrupaelementosfim").innerHTML = "<p class='paragrafo' >Erro. "+e;i3GEO.janela.fechaAguarde();i3GEOF.agrupaElementos.aguarde.visibility = "hidden";}
	},
	/*
	Function: comboTemasSel

	Cria um combo com a lista de temas com elementos selecionados

	Veja:

	<i3GEO.util.comboTemas>
	*/
	comboTemasSel: function(){
		i3GEO.util.comboTemas(
			"i3GEOagrupaelementostemasComSel",
			function(retorno){
		 		$i("i3GEOagrupaelementosSelTemas").innerHTML = retorno.dados;
		 		$i("i3GEOagrupaelementosSelTemas").style.display = "block";
		 		if ($i("i3GEOagrupaelementostemasComSel")){
		 			$i("i3GEOagrupaelementostemasComSel").onchange = function(){
		 				i3GEO.mapa.ativaTema($i("i3GEOagrupaelementostemasComSel").value);
		 			};
				}
				if(i3GEO.temaAtivo !== ""){
					$i("i3GEOagrupaelementostemasComSel").value = i3GEO.temaAtivo;
					$i("i3GEOagrupaelementostemasComSel").onchange.call();
				}
			},
			"i3GEOagrupaelementosSelTemas",
			"",
			false,
			"selecionados"
		);
	},
	/*
	Function: comboItensSel

	Cria um combo para selecionar os itens do tema escolhido

	Veja:

	<i3GEO.util.comboItens>
	*/
	comboItensSel: function(){
		var tema = $i("i3GEOagrupaelementostemasComSel").value;
		i3GEO.util.comboItens(
			"i3GEOagrupaelementosselItem",
			tema,
			function(retorno){
		 		if(retorno.tipo === "erro"){
		 			$i("i3GEOagrupaelementosSelItens").innerHTML = "<br><br><span style='color:red'>erro ao ler os itens do tema de origem</span><br><br>";
		 		}
		 		else{
		 			$i("i3GEOagrupaelementosSelItens").innerHTML = retorno.dados;
		 		}
			},
			"i3GEOagrupaelementosSelItens",
			""
		);
	}
};
