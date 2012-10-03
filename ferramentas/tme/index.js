
/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */

/*
Title: TME

Cria um arquivo KML com a representa&ccedil;�o em mapa tem&aacute;tico baseado no pacote TME

<i3GEO.tema.dialogo.tme>

Arquivo:

i3geo/ferramentas/tme/index.js.php

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
Classe: i3GEOF.tme
*/
i3GEOF.tme = {
	/*
	Variavel: tema

	Tema que ser&aacute; utilizado

	Type:
	{string}
	*/
	tema: i3GEO.temaAtivo,
	/*
	Variavel: aguarde

	Estilo do objeto DOM com a imagem de aguarde existente no cabe&ccedil;alho da janela.
	*/
	aguarde: "",
	/*
		Para efeitos de compatibilidade antes da vers&atilde;o 4.7 que n�o tinha dicion&aacute;rio
	*/
	criaJanelaFlutuante: function(){
		i3GEOF.tme.iniciaDicionario();
	},
	/*
	Function: iniciaDicionario

	Carrega o dicion&aacute;rio e chama a fun&ccedil;&atilde;o que inicia a ferramenta

	O Javascript &eacute; carregado com o id i3GEOF.nomedaferramenta.dicionario_script
	*/
	iniciaDicionario: function(){
		if(typeof(i3GEOF.tme.dicionario) === 'undefined'){
			i3GEO.util.scriptTag(
				i3GEO.configura.locaplic+"/ferramentas/tme/dicionario.js",
				"i3GEOF.tme.iniciaJanelaFlutuante()",
				"i3GEOF.tme.dicionario_script"
			);
		}
		else{
			i3GEOF.tme.iniciaJanelaFlutuante();
		}
	},
	/*
	Function: inicia

	Inicia a ferramenta. &Eacute; chamado por criaJanelaFlutuante

	Parametro:

	iddiv {String} - id do div que receber&aacute; o conteudo HTML da ferramenta
	*/
	inicia: function(iddiv){
		i3GEO.janela.comboCabecalhoTemas("i3GEOFtmeComboCabeca","i3GEOFtmeComboCabecaSel","tme","ligadosComTabela");
		if(i3GEO.temaAtivo === ""){
			$i(iddiv).innerHTML = '<img src="../imagens/opcoes.gif" ><p style="position: relative; top: -35px; width: 180px; font-size: 15px; text-align: left; left: 35px;">Escolha um tema da lista</p>';
			return;
		}
		try{
			$i(iddiv).innerHTML += i3GEOF.tme.html();
			new YAHOO.widget.Button(
				"i3GEOtmebotao1",
				{onclick:{fn: i3GEOF.tme.ativa}}
			);
			i3GEO.util.comboItens(
				"i3GEOTMEregioes",
				i3GEOF.tme.tema,
				function(retorno){
					if($i("i3GEOTMEregioeslista"))
			 		{$i("i3GEOTMEregioeslista").innerHTML = retorno.dados;}
				},
				"i3GEOTMEregioeslista"
			);
			i3GEO.util.mensagemAjuda("i3GEOtmemen1",$i("i3GEOtmemen1").innerHTML);
			i3GEOF.tme.ativaFoco();
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
		var ins = '' +
		'<div style="text-align:left;" id=i3GEOTMEresultado ></div>' +
		'<p class="paragrafo" >' +
		'T&iacute;tulo que ser&aacute; mostrado no mapa';
		ins += $inputText("","","i3GEOTMEtitulo","",48,"") +
		'<br><br>Descri&ccedil;�o do mapa';
		ins += $inputText("","","i3GEOTMEdesc","",48,"") +
		'<br><br>Coluna que cont&eacute;m os nomes das regi&otilde;es (exemplo: nomes dos Estados ou nomes dos munic&iacute;pios):' +
		'<div id="i3GEOTMEregioeslista" style="text-align:left;" ></div>' +
		'<p class="paragrafo" >' +
		'<br>Escolha uma ou mais colunas que cont&eacute;m os dados estat&iacute;sticos que ser�o representados:' +
		'<div id=i3GEOtmelistai class=digitar style="text-align:left;left:0px;top:0px;330px;height:80px;overflow:auto;display:block;"></div>' +
		'<br>' +
		'<input id=i3GEOtmebotao1 size=35  type=button value="Aplicar" />' +
		'<div id=i3GEOtmemen1 style=top:15px;left:0px; ><p class=paragrafo >Ser&aacute; criado um arquivo KML que pode ser aberto com o Google Earth. A coluna com os nomes das regi&otilde;es define o nome que ser&aacute; mostrado para cada elemento mapeado. Quando os nomes das colunas com os valores corresponderem a um determinado ano, ser&aacute; mostrado um bot�o do tipo slide no Google Earth, mas isso s&oacute; ocorre se o nome da coluna for o mesmo nome do ano, exemplo, para o ano de 1980 o nome da coluna dever&aacute; ser 1980</div>';
		return ins;
	},
	/*
	Function: iniciaJanelaFlutuante

	Cria a janela flutuante para controle da ferramenta.
	*/
	iniciaJanelaFlutuante: function(){
		var minimiza,cabecalho,janela,divid,temp,titulo;
		if($i("i3GEOF.tme")){
			i3GEOF.tme.inicia("i3GEOF.tme_corpo");
			return;
		}
		cabecalho = function(){
			i3GEOF.tme.ativaFoco();
		};
		minimiza = function(){
			i3GEO.janela.minimiza("i3GEOF.tme");
		};
		//cria a janela flutuante
		titulo = "<div style='z-index:1;position:absolute' id='i3GEOFtmeComboCabeca' >------</div><span style=margin-left:60px>tme</span><a class=ajuda_usuario target=_blank href='" + i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=5&idajuda=108' >&nbsp;&nbsp;&nbsp;</a>";
		janela = i3GEO.janela.cria(
			"380px",
			"320px",
			"",
			"",
			"",
			titulo,
			"i3GEOF.tme",
			false,
			"hd",
			cabecalho,
			minimiza
		);
		divid = janela[2].id;
		i3GEOF.tme.aguarde = $i("i3GEOF.tme_imagemCabecalho").style;
		$i("i3GEOF.tme_corpo").style.backgroundColor = "white";
		i3GEOF.tme.inicia(divid);
		temp = function(){
			if(i3GEO.eventos.ATUALIZAARVORECAMADAS.toString().search('i3GEO.janela.comboCabecalhoTemas("i3GEOFtmeComboCabeca","i3GEOFtmeComboCabecaSel","tme","ligadosComTabela")') > 0)
			{i3GEO.eventos.ATUALIZAARVORECAMADAS.remove('i3GEO.janela.comboCabecalhoTemas("i3GEOFtmeComboCabeca","i3GEOFtmeComboCabecaSel","tme","ligadosComTabela")');}
		};
		YAHOO.util.Event.addListener(janela[0].close, "click", temp);
	},
	/*
	Function: ativaFoco

	Refaz a interface da ferramenta quando a janela flutuante tem seu foco ativado
	*/
	ativaFoco: function(){
		i3GEO.php.listaItensTema(i3GEOF.tme.montaListaItens,i3GEOF.tme.tema);
		var i = $i("i3GEOF.tme_c").style;
		i3GEO.janela.ULTIMOZINDEX++;
		i.zIndex = 21000 + i3GEO.janela.ULTIMOZINDEX;
	},
	/*
	Function: montaListaItens

	Monta a lista de itens que poder�o ser escolhidos para compor o mapa.

	A lista &eacute; inserida no elemento html com id "i3GEOtmelistai"

	TODO marcar os itens existentes
	*/
	montaListaItens: function(retorno){
		var ins,i,n,item;
		try{
			ins = [];
			ins.push("<table class=lista >");
			n = retorno.data.valores.length;
			for (i=0;i<n; i++){
				item = retorno.data.valores[i].item;
				ins.push("<tr><td><input size=2 style='cursor:pointer' type=checkbox id=i3GEOtme"+item+" /></td>");
				ins.push("<td>&nbsp;"+item+"</td>");
			}
			$i("i3GEOtmelistai").innerHTML = ins.join("");
			ins.push("</table>");
		}
		catch(e)
		{$i("i3GEOtmelistai").innerHTML = "<p style=color:red >Ocorreu um erro<br>"+e;}
	},
	/*
	Function: pegaItensMarcados

	Recupera os itens que foram marcados e monta uma lista para enviar como par�metro para a fun&ccedil;�o de gera&ccedil;�o dos gr&aacute;ficos
	*/
	pegaItensMarcados: function(){
		var listadeitens = [],
			inputs = $i("i3GEOtmelistai").getElementsByTagName("input"),
			i,
			it,
			n;
		n = inputs.length;
		for (i=0;i<n; i++){
			if (inputs[i].checked === true){
				it = inputs[i].id;
				listadeitens.push(it.replace("i3GEOtme",""));
			}
		}
		return(listadeitens);
	},
	/*
	Function: ativa

	Cria o arquivo KML com os itens marcados

	Veja:

	<ATIVAtme>
	*/
	ativa: function(){
		try{
			if(i3GEOF.tme.aguarde.visibility === "visible")
			{return;}
			var lista = i3GEOF.tme.pegaItensMarcados(),
				cp = new cpaint(),
				temp,
				p,
				colunanomeregiao = $i("i3GEOTMEregioes").value;
			if(lista.length === 0)
			{alert("selecione um item");return;}
			if(colunanomeregiao === 0)
			{alert("selecione um item com as regi&otilde;es");return;}
			i3GEOF.tme.aguarde.visibility = "visible";
			temp = function(retorno){
				i3GEOF.tme.aguarde.visibility = "hidden";
				var ins = "<p class=paragrafo >Clique no arquivo para fazer o download:<br><a href='"+retorno.data.url+"' target=new >"+retorno.data.url+"</a><br>";
				ins += "<br>Ou clique para abrir no i3Geo:<br><a href='"+i3GEO.configura.locaplic+"/ms_criamapa.php?interface=googleearth.phtml&kmlurl="+retorno.data.url+"' target='new' >interface Google Earth</a><br>";
				$i("i3GEOTMEresultado").innerHTML = ins;

			};
			p = i3GEO.configura.locaplic+"/pacotes/tme/TME_i3geo.php?sid="+i3GEO.configura.sid+"&nomelayer="+i3GEO.temaAtivo+"&colunasvalor="+lista.toString(",")+"&colunanomeregiao="+colunanomeregiao+"&titulo="+$i("i3GEOTMEtitulo").value+"&descricao="+$i("i3GEOTMEdesc").value;
			cp.set_response_type("JSON");
			cp.call(p,"tme",temp);
		}catch(e){alert("Erro: "+e);i3GEOF.tme.aguarde.visibility = "hidden";}
	}
};
