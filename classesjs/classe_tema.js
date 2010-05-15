/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */
/*
Title: Temas

File: i3geo/classesjs/classe_tema.js

About: Licen�a

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
if(typeof(i3GEO) === 'undefined'){
	i3GEO = [];
}
/*
Classe: i3GEO.tema

Fun��es de di�logo e processamento de propriedades de um tema existente no mapa

Em i3GEO.tema.dialogo est�o as fun��es de abertura dos di�logos para altera��o das propriedades do tema,
*/
i3GEO.tema = {
	/*
	Function: exclui

	Exclui um tema do mapa

	Parametros:

	tema - c�digo do tema
	*/
	exclui: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.exclui()");}
		g_operacao = "excluitema";
		//remove o tema do DOM e seus filhos
		var p = document.getElementById("idx"+tema).parentNode.parentNode.parentNode;
		do
		{p.removeChild(p.childNodes[0]);}
		while
		(p.childNodes.length > 0);
		p.parentNode.removeChild(p);
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		i3GEO.php.excluitema(i3GEO.atualiza,tema);
		i3GEO.mapa.ativaTema("");
		if(i3GEO.Interface.ATUAL === "openlayers"){
			var layer = i3geoOL.getLayersByName(tema)[0];
			i3geoOL.removeLayer(layer);
		}
	},
	/*
	Function: fonte

	Abre os metadados registrados para o tema

	Parametros:

	tema - c�digo do tema
	*/
	fonte: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.fonte()");}
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		var temp = function(retorno){
			i3GEO.janela.fechaAguarde();
			if(retorno.data !== "erro")
			{window.open(retorno.data);}
			else
			{alert("N�o existe fonte registrada para esse tema");}
		};
		i3GEO.php.fontetema(temp,tema);
	},
	/*
	Function: sobe

	Sobe um tema na ordem de desenho

	Parametros:

	tema - c�digo do tema
	*/
	sobe: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.sobe()");}
		var temp = function(retorno){
			//
			//atualiza apenas remonta a �rvore
			//no caso de interfaces como openlayers
			//� necess�rio mover o DIV tbm
			//
			i3GEO.atualiza(retorno);
			if(i3GEO.Interface.ATUAL === "openlayers")
			{i3GEO.Interface.openlayers.ordenaLayers();}
		};
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		i3GEO.php.sobetema(temp,tema);
	},
	/*
	Function: desce

	Desce um tema na ordem de desenho

	Parametros:

	tema - c�digo do tema
	*/
	desce: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.desce()");}
		var temp = function(retorno){
			//
			//atualiza apenas remonta a �rvore
			//no caso de interfaces como openlayers
			//� necess�rio mover o DIV tbm
			//
			i3GEO.atualiza(retorno);
			if(i3GEO.Interface.ATUAL === "openlayers")
			{i3GEO.Interface.openlayers.ordenaLayers();}
		};
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		i3GEO.php.descetema(temp,tema);
	},
	/*
	Function: zoom

	Zoom para o tema

	Parametros:

	tema - c�digo do tema
	*/
	zoom: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.zoom()");}
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		i3GEO.php.zoomtema(i3GEO.atualiza,tema);
	},
	/*
	Function: zoomsel

	Zoom para os elementos selecionados de um tema

	Parametros:

	tema - c�digo do tema
	*/
	zoomsel: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.zoomsel()");}
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		i3GEO.php.zoomsel(i3GEO.atualiza,tema);
	},
	/*
	Function: limpasel

	Limpa a selecao do tema

	Parametros:

	tema - ID (name) do tema clicado
	*/
	limpasel: function(tema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.limpasel()");}
		g_operacao = "limpasel";
		i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
		i3GEO.contadorAtualiza++;
		var temp = function(retorno){
			i3GEO.atualiza(retorno);
			i3GEO.Interface.atualizaTema(retorno,tema);
		};
		i3GEO.php.limpasel(temp,tema);
	},
	/*
	Function: mudatransp

	Muda a transparencia de um tema

	Parametros:

	idtema - c�digo do tema
	*/
	mudatransp: function(idtema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.mudatransp()");}
		g_operacao = "transparencia";
		var valor,
			temp = function(retorno){
				i3GEO.atualiza(retorno);
				i3GEO.Interface.atualizaTema(retorno,idtema);
			};
		//o campo input com o valor possui o prefixo 'tr' seguido pelo c�digo do tema
		if ($i("tr"+idtema))
		{valor = $i("tr"+idtema).value;}
		else
		{alert("Ocorreu um erro");}
		if (valor !== ""){
			i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
			i3GEO.contadorAtualiza++;
			i3GEO.php.mudatransp(temp,idtema,valor);
		}
		else
		{alert("Valor n�o definido.");}
	},
	/*
	Function: mudanome
	
	Muda o nome de um tema

	Parametros:

	idtema - c�digo do tema
	*/
	mudanome: function(idtema){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.mudanome()");}
		g_operacao = "mudanome";
		var valor;
		if($i("nn"+idtema))
		{valor = $i("nn"+idtema).value;}
		else
		{alert("Ocorreu um erro");}
		if (valor !== ""){
			i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
			i3GEO.contadorAtualiza++;
			i3GEO.php.mudanome(i3GEO.atualiza,idtema,valor);
		}
		else
		{alert("Nome n�o definido");}
	},
	/*
	Function: mostralegendajanela
	
	Mostra a legenda de um tema em uma janela flutuante espec�fica
	
	Na configura��o padr�o, essa fun��o � disparada quando o usu�rio estaciona o ouse sobre o nome de um tema na �rvore de camadas
	
	O uso normal seria nas op��es onmouseover e onmouseout
	
	Exemplo:
	
	onmouseover = i3GEO.tema.mostralegendajanela(idtema,nome,"ativatimer")
	
	onmouseout = i3GEO.tema.mostralegendajanela(idtema,nome,"desaativatimer")
	
	onclick = i3GEO.tema.mostralegendajanela(idtema,nome,"abrejanela")
	
	Parametros:
	
	idtema {String} - c�digo do tema
	
	nome {String} - nome completo do tema que ser� mostrado no cabe�alho da janela
	
	tipoOperacao {String} {ativatimer|desativatimer|abrejanela} - tipo de opera��o que ser� executada
	*/
	mostralegendajanela: function(idtema,nome,tipoOperacao){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.mostralegendajanela()");}
		//alert(idtema+" "+status)
		var retorna,janela;
		if(tipoOperacao === "ativatimer"){
			mostralegendajanelaTimer = setTimeout("i3GEO.tema.mostralegendajanela('"+idtema+"','"+nome+"','abrejanela')",4000);
		}
		if(tipoOperacao === "abrejanela"){
			try{clearTimeout(mostralegendajanelaTimer);}
			catch(e){
				if(typeof(console) !== 'undefined'){console.error(e);}
			}
			retorna = function(retorno){
				$i("janelaLegenda"+idtema+"_corpo").innerHTML = retorno.data.legenda;
			};
			if(!$i("janelaLegenda"+idtema)){
				janela = i3GEO.janela.cria("250px","","","","",nome,"janelaLegenda"+idtema,false);
				janela[2].style.textAlign="left";
				janela[2].style.background="white";
				janela[2].innerHTML = $trad("o1");	
			}
			i3GEO.php.criaLegendaHTML(retorna,idtema,"legenda3.htm");
		}
		if(tipoOperacao === "desativatimer"){
			clearTimeout(mostralegendajanelaTimer);
		}
	},
	/*
	Classe: i3GEO.tema.dialogo
	
	Abre as telas de di�logo das op��es de manipula��o de um tema
	
	Return:
	
	i3GEO.janela.cria
	*/
	dialogo:{
		/*
		Function: cortina

		Abre a janela de di�logo da ferramenta cortina, que atua sobre um tema.
		
		Parametros:

		tema - c�digo do tema escolhido
		
		*/
		cortina: function(tema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.cortina()");}
			if(typeof(i3GEOF.cortina) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/cortina/index.js.php";
				i3GEO.util.scriptTag(js,"i3GEOF.cortina.criaJanelaFlutuante('"+tema+"')","i3GEOF.cortina_script");
			}
		},
		/*
		Function: abreKml

		Abre a janela para mostrar o link de acesso a um tema via kml.
		
		O tema em quest�o � um dos que constam na �rvore de temas

		Parametros:

		tema - c�digo do tema escolhido
		
		tipo - tipo de kml - kml|kmz , o tipo kmz permite acessar os dados via kml (por meio de um WMS) e via kml vetorial.
		*/
		abreKml: function(tema,tipo){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.abreKml()");}
			if(arguments.lenght === 1)
			{tipo = "kml";}
			if(typeof(i3GEOF.converteKml) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/convertekml/index.js.php";
				i3GEO.util.scriptTag(js,"i3GEOF.converteKml.criaJanelaFlutuante('"+tema+"','"+tipo+"')","i3GEOF.converteKml_script");
			}
		},
		/*
		Function: graficotema

		Adiciona gr�ficos automaticamente nos elementos de um tema

		Parametros:

		idtema - c�digo do tema
		*/
		graficotema: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.graficotema()");}
			if(typeof(i3GEOF.graficoTema) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/graficotema/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.graficoTema.criaJanelaFlutuante()","i3GEOF.graficoTema_script");
			}
		},
		/*
		Function: toponimia

		Op��es de topon�mia de um tema.

		Parametros:

		idtema - c�digo do tema
		*/
		toponimia: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.toponimia()");}
			if(typeof(i3GEOF.toponimia) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/toponimia/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.toponimia.criaJanelaFlutuante()","i3GEOF.toponimia_script");
			}		
		},
		/*
		Function: filtro

		Op��es de filtragem de um tema.

		Parametros:

		idtema - c�digo do tema
		*/
		filtro: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.filtro()");}
			if(typeof(i3GEOF.filtro) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/filtro/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.filtro.criaJanelaFlutuante()","i3GEOF.filtro_script");
			}		
		},
		/*
		Function: procuraratrib

		Abre a janela com a op��o de procurar elementos baseados nos atributos da tabela do tema

		Parametros:

		idtema - id que identifica o tema conforme definido no map file
		*/
		procuraratrib: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.procuraratrib()");}
			if(typeof(i3GEOF.busca) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/busca/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.busca.criaJanelaFlutuante()","i3GEOF.busca_script");
			}
		},
		/*
		Function: tabela

		Abre a tabela com os atributos de um tema.

		Parametros:

		idtema - id que identifica o tema conforme definido no map file
		*/
		tabela: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.tabela()");}
			if(typeof(i3GEOF.tabela) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/tabela/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.tabela.criaJanelaFlutuante()","i3GEOF.tabela_script");
			}
		},
		/*
		Function: etiquetas

		Abre a janela de configura��o das etiquetas

		Parametros:

		idtema - id que identifica o tema conforme definido no map file
		*/
		etiquetas: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.etiqueta()");}
			if(typeof(i3GEOF.etiqueta) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/etiqueta/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.etiqueta.criaJanelaFlutuante()","i3GEOF.etiqueta_script");
			}
		},
		/*
		Function: editaLegenda

		Abre a janela do editor de legenda de um tema

		Parametros:

		idtema - id que identifica o tema conforme definido no map file
		*/
		editaLegenda: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.editaLegenda()");}
			if(typeof(i3GEOF.legenda) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/legenda/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.legenda.criaJanelaFlutuante()","i3GEOF.legenda_script");
			}
		},
		/*
		Function: download

		Abre a janela que faz o download de um tema

		Parametros:

		idtema - id que identifica o tema no map file.
		*/
		download: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.download()");}
			if(typeof(i3GEOF.download) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/download/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.download.criaJanelaFlutuante('"+idtema+"')","i3GEOF.download_script");
			}
		},
		/*
		Function: sld
		
		Converte a legenda do tema para o formato SLD (utilizado em requisi��es de Web Services OGC)
		
		O SLD � mostrado em uma janela sobre o mapa
		
		Parametros:

		idtema - id ue identifica o tema no map file.
		*/
		sld: function(idtema)
		{i3GEO.janela.cria("500px","350px",i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=tema2sld&tema="+idtema+"&g_sid="+i3GEO.configura.sid,"","","SLD <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=41' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: editorsql

		Abre a janela que permite editar o sql de acesso aos dados utilizado no layer

		Parametros:

		idtema - id que identifica o tema no map file.
		*/
		editorsql: function(idtema){
			if(typeof(console) !== 'undefined'){console.info("i3GEO.tema.dialogo.editorsql()");}
			if(typeof(i3GEOF.editorsql) === 'undefined'){
				var js = i3GEO.configura.locaplic+"/ferramentas/editorsql/index.js.php";
				i3GEO.mapa.ativaTema(idtema);
				i3GEO.util.scriptTag(js,"i3GEOF.editorsql.criaJanelaFlutuante('"+idtema+"')","i3GEOF.editorsql_script");
			}		
		}
	}
};
//YAHOO.log("carregou classe tema", "Classes i3geo");