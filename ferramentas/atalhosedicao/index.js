if (typeof (i3GEOF) === 'undefined') {
	var i3GEOF = {};
}
/*
 * Classe: i3GEOF.atalhosedicao
 */
//TODO incluir minscale e maxscale
//TODO incluir opcao para modificar o nome do layer
//TODO bloquear fechamento da janela
//TODO incluir opcao para incluir o link para a fonte
//TODO criar nova opcao que permita editar um texto livre para a fonte e guarda-la no proprio mapfile
i3GEOF.atalhosedicao =
{
	tema: "",
	/**
	 * Template no formato mustache. E preenchido na carga do javascript com o programa dependencias.php
	 */
	MUSTACHE : "",
	/**
	 * Susbtitutos para o template
	 */
	mustacheHash : function() {
		var dicionario = i3GEO.idioma.objetoIdioma(i3GEOF.atalhosedicao.dicionario);
		dicionario["locaplic"] = i3GEO.configura.locaplic;
		return dicionario;
	},
	/*
	 * Function: iniciaDicionario (Depreciado na versao 6.0)
	 *
	 */
	iniciaDicionario : function() {
		i3GEOF.atalhosedicao.iniciaJanelaFlutuante();
	},
	/*
	 * Function: inicia
	 *
	 * Inicia a ferramenta. &Eacute; chamado por criaJanelaFlutuante
	 *
	 * Parametro:
	 *
	 * iddiv {String} - id do div que receber&aacute; o conteudo HTML da ferramenta
	 */
	inicia : function(iddiv, idjanela) {
		var tema;
		i3GEO.janela.comboCabecalhoTemas(
			"i3GEOFatalhosedicaoComboCabeca",
			"i3GEOFatalhosedicaoComboCabecaSel",
			"atalhosedicao",
		"ligadosComTabela");
		if(i3GEOF.atalhosedicao.tema === ""){
			i3GEOF.atalhosedicao.tema = i3GEO.temaAtivo;
		}
		$i(iddiv).innerHTML = i3GEOF.atalhosedicao.html(idjanela);

		new YAHOO.widget.Button("i3GEOFatalhosedicaoLegenda", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.editaLegenda();
				}
			}
		});
		$i("i3GEOFatalhosedicaoLegenda-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoSalva", {
			onclick : {
				fn : function() {
					//obtem os parametros que devem ficar no objeto camada
					i3GEOF.atalhosedicao.metadata($i("i3GEOFatalhosedicaoCache"),true);
					i3GEO.tema.dialogo.salvaMapfile(i3GEOF.atalhosedicao.tema);
				}
			}
		});
		$i("i3GEOFatalhosedicaoSalva-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoTabela", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.tabela();
				}
			}
		});
		$i("i3GEOFatalhosedicaoTabela-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoTexto", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.toponimia();
				}
			}
		});
		$i("i3GEOFatalhosedicaoTexto-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoEtiqueta", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.etiquetas();
				}
			}
		});
		$i("i3GEOFatalhosedicaoEtiqueta-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoFiltro", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.filtro();
				}
			}
		});
		$i("i3GEOFatalhosedicaoFiltro-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoOpacidadeB", {
			onclick : {
				fn : function() {
					var valor = $i("i3GEOFatalhosedicaoOpacidade").value;
					i3GEO.tema.mudatransp(i3GEOF.atalhosedicao.tema,valor);
				}
			}
		});
		$i("i3GEOFatalhosedicaoOpacidadeB-button").style.width = "50px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoTme", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.tme(i3GEOF.atalhosedicao.tema);
				}
			}
		});
		$i("i3GEOFatalhosedicaoTme-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoStorymap", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.storymap(i3GEOF.atalhosedicao.tema);
				}
			}
		});
		$i("i3GEOFatalhosedicaoStorymap-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoAnimagif", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.animagif(i3GEOF.atalhosedicao.tema);
				}
			}
		});
		$i("i3GEOFatalhosedicaoAnimagif-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoParametrossql", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					//i3GEO.pluginI3geo.parametrossql.buscaParForm(i3GEOF.atalhosedicao.tema);
					YAHOO.namespace("admin");
					YAHOO.namespace("admin.container");
					core_montaEditor("","450px","500px","","Plugin",true,false,false);
					var sUrl = i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/exec.php?funcao=pegaPlugin&codigoMap="+i3GEO.temaAtivo+"&codigoLayer="+i3GEO.temaAtivo+"&g_sid="+i3GEO.configura.sid;
					var montaEditorPlugin = function(retorno){
						var plugin = "parametrossql";
						var ins = "<input type=button title='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' value='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' id=salvarPlugin />"
							+ "<input type=button title='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' value='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' id=removerPlugin />";
						//pega os campos do formulario
						ins += i3GEO.pluginI3geo.formAdmin(plugin,retorno);
						var ajuda = "<p class='paragrafo'>Mais informa&ccedil;&otilde;es:<br><a href='"+i3GEO.pluginI3geo.linkAjuda(plugin)+"' target=_blank >" + i3GEO.pluginI3geo.linkAjuda(plugin) + "</a></p>";
						$i("editor_bd").innerHTML = ins + ajuda;

						new YAHOO.widget.Button("salvarPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),plugin,i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});

						new YAHOO.widget.Button("removerPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),"",i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});
					};
					core_pegaDados("",sUrl,montaEditorPlugin);
				}
			}
		});
		$i("i3GEOFatalhosedicaoParametrossql-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoLayerkml", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					YAHOO.namespace("admin");
					YAHOO.namespace("admin.container");
					core_montaEditor("","450px","500px","","Plugin",true,false,false);
					var sUrl = i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/exec.php?funcao=pegaPlugin&codigoMap="+i3GEO.temaAtivo+"&codigoLayer="+i3GEO.temaAtivo+"&g_sid="+i3GEO.configura.sid;
					var montaEditorPlugin = function(retorno){
						var plugin = "layerkml";
						var ins = "<input type=button title='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' value='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' id=salvarPlugin />"
							+ "<input type=button title='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' value='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' id=removerPlugin />";
						//pega os campos do formulario
						ins += i3GEO.pluginI3geo.formAdmin(plugin,retorno);
						var ajuda = "<p class='paragrafo'>Mais informa&ccedil;&otilde;es:<br><a href='"+i3GEO.pluginI3geo.linkAjuda(plugin)+"' target=_blank >" + i3GEO.pluginI3geo.linkAjuda(plugin) + "</a></p>";
						$i("editor_bd").innerHTML = ins + ajuda;

						new YAHOO.widget.Button("salvarPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),plugin,i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});

						new YAHOO.widget.Button("removerPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),"",i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});
					};
					core_pegaDados("",sUrl,montaEditorPlugin);
				}
			}
		});
		$i("i3GEOFatalhosedicaoLayerkml-button").style.width = "200px";
		new YAHOO.widget.Button("i3GEOFatalhosedicaoMarkercluster", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					YAHOO.namespace("admin");
					YAHOO.namespace("admin.container");
					core_montaEditor("","450px","500px","","Plugin",true,false,false);
					var sUrl = i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/exec.php?funcao=pegaPlugin&codigoMap="+i3GEO.temaAtivo+"&codigoLayer="+i3GEO.temaAtivo+"&g_sid="+i3GEO.configura.sid;
					var montaEditorPlugin = function(retorno){
						var plugin = "markercluster";
						var ins = "<input type=button title='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' value='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' id=salvarPlugin />"
							+ "<input type=button title='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' value='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' id=removerPlugin />";
						//pega os campos do formulario
						ins += i3GEO.pluginI3geo.formAdmin(plugin,retorno);
						var ajuda = "<p class='paragrafo'>Mais informa&ccedil;&otilde;es:<br><a href='"+i3GEO.pluginI3geo.linkAjuda(plugin)+"' target=_blank >" + i3GEO.pluginI3geo.linkAjuda(plugin) + "</a></p>";
						$i("editor_bd").innerHTML = ins + ajuda;

						new YAHOO.widget.Button("salvarPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),plugin,i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});

						new YAHOO.widget.Button("removerPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),"",i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});
					};
					core_pegaDados("",sUrl,montaEditorPlugin);
				}
			}
		});
		$i("i3GEOFatalhosedicaoMarkercluster-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoHeatmap", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					YAHOO.namespace("admin");
					YAHOO.namespace("admin.container");
					core_montaEditor("","450px","500px","","Plugin",true,false,false);
					var sUrl = i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/exec.php?funcao=pegaPlugin&codigoMap="+i3GEO.temaAtivo+"&codigoLayer="+i3GEO.temaAtivo+"&g_sid="+i3GEO.configura.sid;
					var montaEditorPlugin = function(retorno){
						var plugin = "heatmap";
						var ins = "<input type=button title='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' value='"+ $trad("salva",i3GEOadmin.core.dicionario) +"' id=salvarPlugin />"
							+ "<input type=button title='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' value='"+ $trad("remove",i3GEOadmin.core.dicionario) +"' id=removerPlugin />";
						//pega os campos do formulario
						ins += i3GEO.pluginI3geo.formAdmin(plugin,retorno);
						var ajuda = "<p class='paragrafo'>Mais informa&ccedil;&otilde;es:<br><a href='"+i3GEO.pluginI3geo.linkAjuda(plugin)+"' target=_blank >" + i3GEO.pluginI3geo.linkAjuda(plugin) + "</a></p>";
						$i("editor_bd").innerHTML = ins + ajuda;

						new YAHOO.widget.Button("salvarPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),plugin,i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});

						new YAHOO.widget.Button("removerPlugin",{ onclick: { fn: function(){
							i3GEOF.atalhosedicao.salvarDadosEditorPlugin($i("editor_bd"),"",i3GEOF.atalhosedicao.tema,i3GEOF.atalhosedicao.tema);
						} }});
					};
					core_pegaDados("",sUrl,montaEditorPlugin);
				}
			}
		});
		$i("i3GEOFatalhosedicaoHeatmap-button").style.width = "200px";

		new YAHOO.widget.Button("i3GEOFatalhosedicaoTemaComGrafico", {
			onclick : {
				fn : function() {
					i3GEO.temaAtivo = i3GEOF.atalhosedicao.tema;
					i3GEO.tema.dialogo.graficotema(i3GEO.temaAtivo,{
						mesmoTema : true
					});
				}
			}
		});
		$i("i3GEOFatalhosedicaoTemaComGrafico-button").style.width = "200px";
		//
		//atualiza os campos que dependem de parametros de cada camada
		//
		tema = i3GEO.arvoreDeCamadas.pegaTema(i3GEOF.atalhosedicao.tema);
		if(tema.cache.toLowerCase() === "sim"){
			$i("i3GEOFatalhosedicaoCache").checked = true;
		}
		if(tema.classe.toLowerCase() === "nao"){
			$i("i3GEOFatalhosedicaoClasse").checked = false;
		}
		if(tema.identifica.toLowerCase() === "nao"){
			$i("i3GEOFatalhosedicaoIdentifica").checked = false;
		}
		$i("i3GEOFatalhosedicaoOpacidade").value = tema.transparency;
	},
	/*
	 * Function: html
	 *
	 * Gera o c&oacute;digo html para apresenta&ccedil;&atilde;o das op&ccedil;&otilde;es da ferramenta
	 *
	 * Retorno:
	 *
	 * String com o c&oacute;digo html
	 */
	html : function(idjanela) {
		var ins = Mustache.render(i3GEOF.atalhosedicao.MUSTACHE, i3GEOF.atalhosedicao.mustacheHash());
		return ins;
	},
	/*
	 * Function: criaJanelaFlutuante
	 *
	 * Cria a janela flutuante para controle da ferramenta.
	 */
	iniciaJanelaFlutuante : function() {
		var minimiza, cabecalho, janela, divid, titulo;

		if($i("i3GEOF.atalhosedicao")){
			return;
		}
		cabecalho = function() {
		};
		minimiza = function() {
			i3GEO.janela.minimiza("i3GEOFatalhosedicao");
		};
		// cria a janela flutuante
		titulo =
			"<div  id='i3GEOFatalhosedicaoComboCabeca' class='comboTemasCabecalho'></div>&nbsp;&nbsp;&nbsp;";
		janela =
			i3GEO.janela.cria(
				"250px",
				"300px",
				"",
				"",
				"",
				titulo,
				"i3GEOF.atalhosedicao",
				false,
				"hd",
				cabecalho,
				minimiza,
				"",
				true,
				i3GEO.configura.locaplic + "/imagens/oxygen/16x16/games-config-custom.png"
			);
		divid = janela[2].id;
		janela[0].moveTo(100,60);
		$i("i3GEOF.atalhosedicao_corpo").style.backgroundColor = "white";
		i3GEOF.atalhosedicao.inicia(divid, "i3GEOF.atalhosedicao");
	},
	/**
	 * Aplica ao objeto CAMADAS o parametro definido
	 * Esse parametro e usado na hora de salvar o mapa
	 * Para isso, a funcao salvarmapfile deve ser preparada para obter o parametro
	 * e enviar para a funcao php
	 * veja em i3GEOF.salvamapfile.salva
	 *
	 * conv indica se deve ser feita a conversao de checked para sim/nao
	 */
	metadata: function(obj,conv){
		var valor,tema;
		if(conv){
			if(obj.checked){
				valor = "sim";
			}
			else{
				valor = "nao";
			}
		}
		else{
			valor = obj.value;
		}
		tema = i3GEO.arvoreDeCamadas.pegaTema(i3GEOF.atalhosedicao.tema);
		tema[obj.name] = valor;
	},
	salvarDadosEditorPlugin: function(onde,plugin,codigoMap,codigoLayer){
		var campos = onde.getElementsByTagName("input"),
			n = campos.length,
			par = [],
			prog = i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/exec.php?funcao=gravaPlugin&g_sid="+i3GEO.configura.sid,
			i;
		if(plugin != ""){
			if(!i3GEO.pluginI3geo[plugin].parametrosFormAdmin){
				for(i=0; i<n; i++){
					par.push('"'+campos[i].name+'":"'+campos[i].value+'"');
				}
				if(plugin != ""){
					plugin = '{"plugin":"'+plugin+'","parametros":{' + par.join(",") + '}}';
				}
			}
			else{
				plugin = i3GEO.pluginI3geo[plugin].parametrosFormAdmin(onde);
			}
		}
		core_carregando("ativa");
		core_carregando($trad("gravaLayer",i3GEOadmin.core.dicionario)+codigoLayer);
		var sUrl = prog
			+ "&codigoMap=" + codigoMap
			+ "&codigoLayer=" + codigoLayer
			+ "&plugin=" + plugin;
		var callback = {
				success:function(o)	{
					try	{
						if(YAHOO.lang.JSON.parse(o.responseText) == "erro") {
							core_carregando("<span style=color:red >"+ $trad("naoSalva",i3GEOadmin.core.dicionario) +"</span>");
							setTimeout("core_carregando('desativa')",3000);
						}
						else {
							YAHOO.admin.container.panelEditor.destroy();
							YAHOO.admin.container.panelEditor = null;
							core_carregando("desativa");
						}
					}
					catch(e){core_handleFailure(e,o.responseText);}
				},
				failure:core_handleFailure,
				argument: { foo:"foo", bar:"bar" }
		};
		core_makeRequest(sUrl,callback,'POST');
	}

};
