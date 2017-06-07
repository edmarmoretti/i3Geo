/**
 * Title: &Aacute;rvore de camadas
 *
 * Monta a &aacute;rvore com os temas existentes no mapa atual. A &aacute;rvore
 * cont&eacute;m as op&ccedil;&otilde;es de ligar e desligar temas,
 * altera&ccedil;&atilde;o na ordem de desenho, links para acesso a
 * funcionalidades, etc.
 *
 * Por padr&atilde;o, a &aacute;rvore &eacute; inserida no elemento HTML da interface do mapa cujo ID for igual a listaTemas
 *
 * i3GEO.arvoreDeCamadas permite controlar quais as op&ccedil;&otilde;es que
 * ser&atilde;o mostradas na &aacute;rvore e seu comportamento em diferentes
 * situa&ccdil;&otilde;s.
 *
 * Alguns itens s&atilde;o inclu&iacute;dos caso sejam localizados na interface elementos html com os seguintes ID
 *
 * listaLayersBase - lista os layers de fundo na interface OpenLayers
 *
 * buscaRapida - formul&aacute;rio de busca de dados em camadas
 *
 * listaPropriedades - conjunto de atalhos para ferramentas que controlam algumas caracter&iacute;sticas do mapa (na vers&atilde;o 6 do i3Geo esses atalhos constam em outros lugares, sendo desnecess&aacute;rio manter essa lista ativa na &aacute;rvore)
 *
 *
 * Namespace:
 *
 * i3GEO.arvoreDeCamadas
 *
 * Exemplo:
 *
 * Para alterar as op&ccedil;&otilde;es da &aacute;rvore, modifique as
 * propriedades colocando um c&oacute;digo como o seguinte no javascript
 * utilizado na interface de mapa que estiver sendo utilizada
 *
 * i3GEO.arvoreDeCamadas.INCLUILFUNDO = false;
 *
 * Veja:
 *
 * <http://localhost/i3geo/classesjs/classe_arvoredecamadas.js>
 */

/**
 * Licen&ccedil;a
 *
 * GPL2
 *
 * i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet
 *
 * Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com
 *
 * Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a
 * P&uacute;blica Geral GNU conforme publicada pela Free Software Foundation;
 *
 * Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til, por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a
 * garantia impl&iacute;cita de COMERCIABILIDADE OU ADEQUAC&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA. Consulte a Licen&ccedil;a
 * P&uacute;blica Geral do GNU para mais detalhes. Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
 * GNU junto com este programa; se n&atilde;o, escreva para a Free Software Foundation, Inc., no endere&ccedil;o 59 Temple Street, Suite
 * 330, Boston, MA 02111-1307 USA.
 */
if (typeof (i3GEO) === 'undefined') {
	var i3GEO = {};
}
i3GEO.arvoreDeCamadas =
{
		//isso ainda e utilizado nas ferramentas
		FUNCOES : {
			farolescala : true,
			excluir : true,
			sobe : true,
			desce : true,
			fonte : true,
			zoomtema : true,
			compartilhar : true,
			opacidade : true,
			mudanome : true,
			procurar : true,
			toponimia : true,
			etiquetas : true,
			filtrar : true,
			tabela : true,
			grafico : true,
			editorlegenda : true,
			destacar : true,
			cortina : true,
			sql : true,
			comentar : true,
			temporizador : true,
			wms : true,
			tme : true,
			copia : true,
			storymap: true,
			animagif: true
		},
		/**
		 * Variavel: CAMADAS
		 *
		 * Objeto com a lista de camadas existentes no mapa. &Eacute; definido na inicializa&ccedil;&atilde;o ou no redesenho do mapa.
		 *
		 * Este objeto &eacute; constru&iacute;do nas opera&ccedil;&otilde;es em PHP de inicializa&ccedil;&atilde;o ou redesenho do mapa e
		 * lista todos os layers existentes no mapfile tempor&aacute;rio em uso.
		 *
		 * classesphp/classe_mapas.php
		 *
		 * parametrosTemas
		 *
		 * Tipo:
		 *
		 * {objeto}
		 */
		CAMADAS : "",
		/**
		 * Propriedade: VERIFICAABRANGENCIATEMAS
		 *
		 * Verifica ou n&atilde;o se um tema da &aacute;rvore est&aacute; dentro da abrang&ecirc;ncia do mapa atual, marcando esses temas na
		 * &aacute;rvore
		 *
		 * A verifica&ccedil;&atilde;o s&oacute; &eacute; feita se o tema possuir a extens&atilde;o geogr&aacute;fica registrada (veja o
		 * sistema de administra&ccedil;&atilde;o)
		 *
		 * Tipo:
		 *
		 * {boolean}
		 *
		 * Default:
		 *
		 * false
		 */
		VERIFICAABRANGENCIATEMAS : false,

		CONFIG : {
			"idOnde":"",
			"aposIniciar": "", //funcao
			"idTemplateCamada": "",
			"idListaFundo": "",
			"idTemplateCamadaFundo": ""
		},
		inicia : function(config) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.inicia()");

			if(config){
				$.each( config, function( i,v ) {
					i3GEO.arvoreDeCamadas.CONFIG[i] = v;
				});
			}
			config = i3GEO.arvoreDeCamadas.CONFIG;
			var novoel, temp;
			if (!$i(config.idOnde)) {
				return;
			}
			i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS);

			if (config.aposIniciar !== "") {
				if (jQuery.isFunction(config.aposIniciar)) {
					config.aposIniciar.call();
				}
			}
		},
		/**
		 * Function: atualiza
		 *
		 * Atualiza a &aacute;rvore de camadas.
		 *
		 * Antes de executar a atualiza&ccedil;&atilde;o, essa fun&ccedil;&atilde;o verifica se &eacute; necess&aacute;rio faz&ecirc;-lo. O
		 * objeto CAMADAS &eacute; comparado com o parametro "temas" para verificar se existem diferen&ccedil;as que justifiquem a
		 * atualiza&ccedil;&atilde;o.
		 *
		 * Parametros:
		 *
		 * {objeto} - Objeto com a lista de camadas e propriedades (veja CAMADAS). Se n&atilde;o existir, a &aacute;rvore &eacute;
		 * redesenhada
		 *
		 * {boolean} - for&ccedil;a a atualiza&ccedil;&atilde;o da &aacute;rvore, sem verificar automaticamente se a
		 * atualiza&ccedil;&atilde;o deve ou n&atilde;o ser feita
		 */
		atualiza : function(temas, forca) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.atualiza()");

			if (arguments.length === 0) {
				temas = i3GEO.arvoreDeCamadas.CAMADAS;
				i3GEO.arvoreDeCamadas.CAMADAS = "";
				forca = false;
			}
			var clone = [],
				camada = {},
				config = i3GEO.arvoreDeCamadas.CONFIG,
				temp;
			//
			// essa verificacao &eacute; necessaria quando a arvore &eacute; criada
			// fora dos padr&otilde;es normais
			//
			temp = $i(config.idOnde);
			if (temp) {
				if (forca === true) {
					temp.innerHTML = "";
				}
				if (temp.innerHTML !== "") {
					if (i3GEO.arvoreDeCamadas.comparaTemas(temas, i3GEO.arvoreDeCamadas.CAMADAS)) {
						i3GEO.arvoreDeCamadas.CAMADAS = temas;
						return;
					}
				}
			} else {
				return;
			}

			i3GEO.arvoreDeCamadas.CAMADAS = temas;
			$.each( i3GEO.arvoreDeCamadas.CAMADAS, function( i,tema ) {
				i3GEO.pluginI3geo.aplicaPropriedades(tema);
				camada = {};
				camada.name = tema.name;
				camada.tema = tema.tema;
				//ligado ou desligado
				if(tema.status != 0){
					camada.checked = "checked";
				} else {
					camada.checked = "";
				}
				if(tema.sel && tema.sel.toLowerCase() === "sim"){
					camada.classeCss = "camadaSelecionada";
				} else {
					camada.classeCss = "";
				}
				i3GEO.arvoreDeCamadas.montaIconesTema(tema,camada);
				i3GEO.arvoreDeCamadas.montaOpcoesTema(tema,camada);
				//
				// inclui icone do tema
				//
				if (tema.iconetema !== "") {
					camada.iconetema = "<img class='i3GEOiconeTema' src='" + tema.iconetema + "' />";
				}
				if (tema.escondido.toLowerCase() !== "sim") {
					clone.push(camada);
				}
			});

			var t = Mustache.render(
				"{{#data}}" + $("#" + config.idTemplateCamada).html() + "{{/data}}",
				{"data":clone}
			);

			$("#" + config.idOnde).html(t);

			$("#" + config.idOnde).sortable({
				scroll: false,
				axis: "y",
				revert: true,
				update: function( event, ui ) {
					var els = i3GEO.arvoreDeCamadas.listaLigadosDesligados();
					var lista = els[2].join(",");
					var temp = function(retorno) {
						i3GEO.atualiza(retorno);
						if (i3GEO.Interface.ATUAL === "openlayers") {
							i3GEO.Interface.openlayers.ordenaLayers();
						}
						i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true);
					};
					i3GEO.php.reordenatemas(temp, lista);
				}
			});

			if(i3GEO.Interface.ATUAL == "openlayers"){
				//camadas de fundo
				if($("#" + config.idListaFundo).html() == ""){
					clone = [];
					$.each(i3GEO.Interface.openlayers.LAYERSADICIONAIS, function( i , layer ){
						camada = {};
						temp = layer.getProperties();
						camada.name = "camadaDeFundo";
						camada.value = temp.name;
						camada.title = temp.title;
						if(temp.visible === true){
							camada.checked = "checked";
						} else {
							camada.checked = "";
						}
						clone.push(camada);
					});
					var t = Mustache.to_html(
							"{{#data}}" + $("#" + config.idTemplateCamadaFundo).html() + "{{/data}}",
							{"data":clone}
						);
					$("#" + config.idListaFundo).html(t);
				}
			}
			/*

		//
			// monta a &aacute;rvore.
			// se i3GEO.configura.grupoLayers estiver definido
			// o processo &eacute; diferenciado
			//
			if (i3GEO.configura.grupoLayers === "") {

				}
			} else {
				var grupoLayers = i3GEO.configura.grupoLayers;
				nk = temas.length;
				c = grupoLayers.length;
				// grupos
				for (i = 0; i < c; i += 1) {
					noGrupo = "";
					noGrupo += "<div class='i3GEOarvCamGrupo'>" + grupoLayers[i].nome + "</div>";
					d = i3GEO.arvoreDeCamadas.EXPANDIDA;
					if(grupoLayers[i].expandido && grupoLayers[i].expandido === true){
						d = true;
					}
					n = grupoLayers[i].layers.length;

					// layers de um grupo
					for (j = 0; j < n; j += 1) {
						// busca na lista de temas
						for (k = 0; k < nk; k += 1) {
							ltema = temas[k];
							if (ltema.name === grupoLayers[i].layers[j] && ltema.escondido === "nao") {
								if (noGrupo !== "") {
									grupoNode = new YAHOO.widget.HTMLNode({
										enableHighlight : true,
										hasIcon : true,
										html : noGrupo,
										expanded : d
									}, tempNode);
									noGrupo = "";
								}
								textoTema = i3GEO.arvoreDeCamadas.montaTextoTema(ltema);
								if (textoTema !== "") {
									d = {
											expanded : false,
											hasIcon : false,
											html : textoTema,
											idlegenda : ltema.name,
											tipo : "tema",
											enableHighlight : true
									};
									temaNode = new YAHOO.widget.HTMLNode(d, grupoNode);

									// if (i3GEO.arvoreDeCamadas.OPCOESICONES === true) {
									textoTema = i3GEO.arvoreDeCamadas.montaIconesTema(ltema)[0];
									temaNodeFilho = new YAHOO.widget.HTMLNode({
										id : ltema.name,
										expanded : false,
										html : textoTema,
										enableHighlight : false,
										isLeaf : !this.PERMITEEXPANDIRTEMAS
									}, temaNode);
									// }
									if (ltema.classe !== "NAO" && this.PERMITEEXPANDIRTEMAS) {
										temaNodeFilho.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda, 1);
										if (i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA === true) {
											temaNodeFilho.expand();
										}
									}
									incluidos.push(ltema.name);
								}
							}
						}
					}
				}
				// inclui os temas n&atilde;o agrupados
				grupoNode = new YAHOO.widget.HTMLNode({
					expanded : false,
					hasIcon : true,
					enableHighlight : true,
					html : "<div class='i3GEOarvCamGrupo'>"+$trad("u27")+"</div>"
				}, tempNode);
				c = incluidos.length;
				for (k = 0; k < nk; k += 1) {
					ltema = temas[k];
					n = false;
					for (j = 0; j < c; j += 1) {
						if (incluidos[j] === ltema.name || ltema.escondido.toLowerCase() === "sim") {
							n = true;
						}
					}
					if (n === false) {
						textoTema = i3GEO.arvoreDeCamadas.montaTextoTema(ltema);
						if (textoTema !== "") {
							d = {
									expanded : true,
									hasIcon : false,
									html : textoTema,
									idlegenda : ltema.name,
									tipo : "tema",
									enableHighlight : false
							};
							temaNode = new YAHOO.widget.HTMLNode(d, grupoNode);
							textoTema = i3GEO.arvoreDeCamadas.montaIconesTema(ltema)[0];
							temaNodeFilho = new YAHOO.widget.HTMLNode({
								id : ltema.name,
								expanded : false,
								html : textoTema,
								enableHighlight : false,
								isLeaf : !this.PERMITEEXPANDIRTEMAS
							}, temaNode);
							// }
							if (ltema.classe !== "NAO" && this.PERMITEEXPANDIRTEMAS) {
								temaNodeFilho.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda, 1);
								if (i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA === true) {
									temaNodeFilho.expand();
								}
							}
							incluidos.push(ltema.name);
						}

					}
				}
			}
			*/
		},
		/**
		 * Function: ligaDesligaTemas
		 *
		 * Marca ou desmarca os checkbox da &aacute;rvore de uma lista de temas
		 *
		 * Parametros:
		 *
		 * {string} - lista, separada por v&iacute;rgulas, dos c&oacute;digos dos temas
		 *
		 * {boolean} - marca ou desmarca
		 */
		ligaDesligaTemas : function(lista, status) {
			if (typeof (console) !== 'undefined')
				console.info("oops i3GEO.arvoreDeCamadas.ligaDesligaTemas()");
		},
		/**
		 * Monta os n&oacute;s filhos do n&oacute; "legenda"
		 *
		 * Parametro:
		 *
		 * {YAHOO.widget.HTMLNode}
		 */
		mostraLegenda : function(node) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.mostraLegenda()");

			var retorna, idtema = node.data.id;
			retorna =
				function(retorno) {
				var original = {
						data : ""
				}, i, re, tabela = "", linhas, linha, colunas, incluir, elementos, nelementos, inputs, desativar, nindices;
				if (retorno.data && retorno.data.legenda) {
					original = retorno;
					retorno = retorno.data.legenda;
					if (retorno[0]) {
						if ((navn) && (!retorno[0].imagem)) {
							tabela = retorno;
						} else {
							i = retorno[0].imagem;
							re = new RegExp("tiff", "g");
							i = i.replace(re, 'png');
							tabela = "<img src='" + i + "' />";
						}
						retorno = "";
					} else {
						linhas = retorno.split("#");
						if (linhas.length > 1) {
							linhas = retorno.split("|");
							tabela = "<table>";
							linha = linhas.length - 1;
							if (linha >= 0) {
								do {
									colunas = linhas[linha].split("#");
									re = new RegExp("'", "g");
									tabela +=
										"<tr style='border-top:1px solid rgb(240,240,240);'><td><img src='" + colunas[4]
									+ "' </td><td style='text-align:left'>" + colunas[2] + "</td></tr>";
								} while (linha--);
							}
							tabela += "</table><br>";
						} else if (retorno) {
							tabela = retorno;
						}
					}
				} else if(retorno && retorno.data){
					tabela = "<img src='" + retorno.data[0].imagem + "' />";
				} // o tema &eacute; um wms
				incluir = "<div style='text-align:left' id='" + idtema + "verdiv" + "'>" + tabela + "</div>";
				new YAHOO.widget.HTMLNode({
					html : incluir,
					enableHighlight : false,
					expanded : false
				}, node);
				node.loadComplete();
				//
				// desliga os checkbox que foram desativados
				// pega os objetos input
				//
				elementos = document.getElementById(idtema + "verdiv").getElementsByTagName("input");
				nelementos = elementos.length;
				inputs = [];
				i = 0;
				if (nelementos > 0) {
					do {
						if (elementos[i].type === "checkbox") {
							inputs.push(elementos[i]);
						}
						i++;
					} while (i < nelementos);
				}
				if (original && original.data && original.data.desativar && original.data.desativar[idtema]) {
					desativar = original.data.desativar[idtema];
					nindices = desativar.length;
					i = 0;
					if (nindices > 0) {
						do {
							inputs[desativar[i]].checked = false;
							i++;
						} while (i < nindices);
					}
				}
			};
			if (i3GEO.arvoreDeCamadas.TEMPLATELEGENDA !== "") {
				i3GEO.php.criaLegendaHTML(retorna, idtema, i3GEO.arvoreDeCamadas.TEMPLATELEGENDA);
			} else {
				i3GEO.php.criaLegendaHTML(retorna, idtema);
			}
		},
		/**
		 * Function: atualizaLegenda
		 *
		 * Atualiza a legenda de um tema.
		 *
		 * A legenda precisa ser atualizada em algumas circunst&acirc;ncias, como quando &eacute; feitoumzoom no mapa.
		 *
		 * Parametro:
		 *
		 * {String} - ID (name) do tema
		 */
		atualizaLegenda : function(idtema) {
			if (typeof (console) !== 'undefined')
				console.info("oops i3GEO.arvoreDeCamadas.atualizaLegenda()");

		},
		/**
		 * Abre uma janela para escolher uma nova cor para o s&iacute;mbolo da classe.
		 *
		 * A chamada dessa fun&ccedil;&atilde;o &eacute; definida em aplicmap/legenda2.htm
		 *
		 * Parametro:
		 *
		 * {Object input} - objeto do tipo INPUT com o id da classe e o id do tema
		 */
		escolheCorClasse : function(leg) {
			// cria um elemento que receber&aacute; a escolha da cor e que
			// ir&aacute; disparar a fun&ccedil;&atilde;o de mudan&ccedil;a de cor
			// da classe
			var obj, novoel;
			leg = leg.parentNode.getElementsByTagName("input")[0];
			if (!$i("tempinputcorclasse")) {
				novoel = document.createElement("input");
				novoel.id = "tempinputcorclasse";
				novoel.style.display = "none";
				novoel.alt = "objeto criado para guardar dados da funcao escolohercorclasse";
				novoel.onchange = "";
				document.body.appendChild(novoel);
			}
			obj = $i("tempinputcorclasse");
			obj.value = "";
			obj.tema = leg.name;
			obj.idclasse = leg.value;
			obj.onchange = function() {
				var obj = $i("tempinputcorclasse");
				i3GEO.tema.alteracorclasse(obj.tema, obj.idclasse, obj.value);
			};
			i3GEO.util.abreCor("", "tempinputcorclasse");
		},
		/**
		 * Monta o texto com o t&iacute;tulo do tema. Esse texto &eacute; o que ser&aacute; mostrado nos n&oacute;s principais da
		 * &aacute;rvore e cont&eacute;m o checkbox para ligar e desligar o tema.
		 *
		 * Parametro:
		 *
		 * {Object} - objeto JSON com as propriedades do tema
		 *
		 * Return:
		 *
		 * {string} - texto formatado
		 */
		montaTextoTema : function(tema) {
			// adiciona o temporizador
			// que redesenha o tema de tempos em tempos
			if (i3GEO.tema.TEMPORIZADORESID[tema.name] == undefined && tema.temporizador != "") {
				i3GEO.tema.temporizador(tema.name, tema.temporizador);
			}
			return (html);
		},
		montaOpcoesTema : function(temaObj,camada) {
			//A inclusao das opcoes e feita com base no template usado na interface
			//a classe hidden permite esconder o icone
			//
			camada.ferramentasTexto = $trad("u15a");
			camada.ferramentasTitle = $trad("ferramCamadas");
			camada.removerTexto = $trad("t12");
			camada.removerTitle = $trad("t12a");
			camada.sobeTexto = $trad("t13");
			camada.sobeTitle = $trad("t14");
			camada.desceTexto = $trad("t15");
			camada.desceTitle = $trad("t16");
			camada.tabelaTexto = $trad("tabela");
			camada.tabelaTitle = $trad("t30");
			camada.editorlegendaTexto = $trad("t33");

			if (temaObj.zoomtema.toLowerCase() === "sim"){
				camada.zoomtemaTexto = $trad("t17");
				camada.zoomtemaTitle = $trad("t18");
			} else {
				camada.zoomtema = "hidden";
			}
			if (temaObj.sel.toLowerCase() === "sim"){
				camada.selTexto = $trad("t5");
				camada.selTitle = $trad("t4");
			} else {
				camada.sel = "hidden";
			}
			if (temaObj.sel.toLowerCase() === "sim"){
				camada.zoomSelTexto = $trad("t5");
				camada.zoomselTitle = $trad("t4a");
			} else {
				camada.zoomsel = "hidden";
			}
			if (temaObj.link_tema != "" && temaObj.features.toLowerCase() !== "sim" && temaObj.name != "mundo"){
				camada.linkTexto = $trad("a9");
				camada.linkTitle = $trad("a9");
			} else {
				camada.link = "hidden";
			}
			if (temaObj.download.toLowerCase() === "sim" || temaObj.download === "" && temaObj.features.toLowerCase() !== "sim") {
				camada.downloadTexto = "Download";
				camada.downloadTitle = $trad("t6");
			} else {
				camada.download = "hidden";
			}
			if (temaObj.permiteogc.toLowerCase() === "sim") {
				camada.permiteogcTexto = "OGC";
			} else {
				camada.permiteogc = "hidden";
			}
			return camada;
		},
		montaIconesTema : function(temaObj,camada) {
			//A inclusao dos icones e feita com base no template usado na interface
			//a classe hidden permite esconder o icone
			//
			//farol de escala
			if (temaObj.escala != 0) {
				if (temaObj.escala * 1 < i3GEO.parametros.mapscale * 1) {
					camada.farol = "green";
					camada.farolTitle = $trad("t9");
				}
				if (temaObj.escala * 1 > i3GEO.parametros.mapscale * 1) {
					camada.farol = "red";
					camada.farolTitle = $trad("t10");
				}
				if (temaObj.escala === 0) {
					camada.farol = "yellow";
					camada.farolTitle = $trad("t11");
				}
			} else {
				camada.farol = "hidden";
			}
			if (temaObj.contextoescala.toLowerCase() === "sim") {
				camada.contextoescala = "";
				camada.contextoescalaTitle = $trad("t36");
			} else {
				camada.contextoescala = "hidden";
			}
			//aqui e gerado um icone para o plugin configurado na camada
			//esse icone ja e montado como um html
			if (temaObj.plugini3geo){
				var iconePlugin = i3GEO.pluginI3geo.clickArvoreDeCamadas(temaObj);
				if(iconePlugin != false){
					camada.iconePlugin = iconePlugin;
				}
			}
			//inclui o icone de ferramentas que possuem parametros
			if(temaObj.ferramentas){
				var html = "", fer="", fers = temaObj.ferramentas;
				for(fer in fers){
					if(i3GEO.configura.ferramentasLayers[fer]){
						html += i3GEO.configura.ferramentasLayers[fer].icone(temaObj.name);
					}
				}
				camada.iconeFerramentas = html;
			}
			//para testes
			/*
			camada.farol = "red";
			camada.farolTitle = $trad("t10");
			camada.contextoescala = "";
			camada.contextoescalaTitle = $trad("t36");
			*/
			return camada;
		},
		/**
		 * Atualiza o farol de cada tema.
		 *
		 * O farol identifica a compatibilidade da escala do mapa com a escala de cada tema
		 *
		 * Parametro:
		 *
		 * {Numeric} - escala de compara&ccedil;&atilde;o com a escala de cada tema
		 */
		atualizaFarol : function(mapscale) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.atualizaFarol()");

			// YAHOO.log("Atualizando o farol da &aacute;rvore de camadas",
			// "i3geo");
			var farol, l, ltema, escala, iu = i3GEO.util, im = i3GEO.configura.locaplic + "/imagens/", camadas =
				i3GEO.arvoreDeCamadas.CAMADAS;
			farol = "maisamarelo.png";
			l = camadas.length - 1;
			if (l >= 0) {
				do {
					ltema = camadas[l];
					escala = ltema.escala;
					if (escala * 1 < mapscale * 1) {
						farol = "maisverde.png";
					}
					if (escala * 1 > mapscale * 1) {
						farol = "maisvermelho.png";
					}
					if (escala * 1 === 0) {
						farol = "maisamarelo.png";
					}
					iu.defineValor("farol" + ltema.name, "src", im + farol);
				} while (l--);
			}
		},
		/**
		 * Function: aplicaTemas
		 *
		 * Refaz o mapa ligando e desligando os temas conforme consta na &aacute;rvore de camadas ou ligando/desligando todos
		 *
		 * Parametro:
		 *
		 * {normal|ligartodos|desligartodos} - tipo de opera&ccedil;&atilde;o A op&ccedil;&atilde;o 'normal' ir&aacute; desligar/ligar o que
		 * estiver marcado
		 */
		aplicaTemas : function(tipo) {
			if (arguments.length === 0) {
				tipo = "normal";
			}
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.aplicaTemas()");

			var t = "", temp;
			if (tipo === "normal") {
				t = i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem");
			}
			if (tipo === "ligartodos") {
				t = i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca");
				return;
			}
			if (tipo === "desligartodos") {
				t = i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca");
				return;
			}
			//
			// zera o contador de tempo
			//
			temp = function() {
				i3GEO.atualiza();
				i3GEO.janela.fechaAguarde("redesenha");
			};
			if (tipo === "normal") {
				i3GEO.php.ligatemas(temp, t[1].toString(), t[0].toString());
				return;
			}
			if (tipo === "ligartodos") {
				i3GEO.php.ligatemas(temp, "", t[2].toString());
				return;
			}
			if (tipo === "desligartodos") {
				i3GEO.php.ligatemas(temp, t[2].toString(), "");
			}
		},
		/**
		 * Function: listaLigadosDesligados
		 *
		 * Lista os temas que est&atilde;o ligados e os que est&atilde;o desligados tendo como fonte de busca os checkbox existentes na
		 * &aacute;rvore.
		 *
		 * Esse m&eacute;todo &eacute; mais demorado pois varre a &aacute;rvore toda. Por&eacute;m, obt&eacute;m o status verdadeiro do
		 * tema.
		 *
		 * Parametro:
		 *
		 * {String} - mantem|marca|desmarca marca, desmarca ou mant&eacute;m o checkbox ap&oacute;s identificar seu status atual
		 *
		 * Return:
		 *
		 * {Array} - array de arrays com os c&oacute;digos dos temas [0]=ligados [1]=desligados [2]=todos na ordem encontrada
		 */
		listaLigadosDesligados : function(tipo) {
			if (!$i(i3GEO.arvoreDeCamadas.CONFIG.idOnde)) {
				return [[],[],[]];
			}
			if (arguments.length === 0) {
				tipo = "manter";
			}
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.listaLigadosDesligados()");

			var nos = $("#" + i3GEO.arvoreDeCamadas.CONFIG.idOnde).find("input"),
			ligados = [], desligados = [], todos = [];

			$.each( nos, function( i,no ) {
				todos.push(no.value);
				if(no.checked == true){
					ligados.push(no.value);
				} else {
					desligados.push(no.value);
				}
			});
			return ([
			         ligados,
			         desligados,
			         todos
			         ]);
		},
		/**
		 * Function: capturaCheckBox
		 *
		 * Retorna o objeto input (check box) que corresponde a uma determinada camada na &aacute;rvore.
		 *
		 * Parametro:
		 *
		 * {String} - c&oacute;digo do tema ao qual o elemento se refere
		 *
		 * Return:
		 *
		 * {Objeto DOM} - objeto do tipo checkbox
		 */
		capturaCheckBox : function(tema) {
			if (typeof (console) !== 'undefined')
				console.info("oops i3GEO.arvoreDeCamadas.capturaCheckBox()");
		},
		/**
		 * Compara se dois objetos com as camadas s&atilde;o iguais
		 *
		 * Parametros:
		 *
		 * {objeto} - objeto novo
		 *
		 * {objeto} - objeto atual
		 *
		 * Return:
		 *
		 * {boolean}
		 */
		comparaTemas : function(novo, atual) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.comparaTemas()");

			try {
				var novon = novo.length, i;
				if (novon !== atual.length) {
					return (false);
				}

				for (i = 0; i < novon; i += 1) {
					if (novo[i].name !== atual[i].name) {
						return (false);
					}
					if (novo[i].tema !== atual[i].tema) {
						return (false);
					}
					if (novo[i].sel !== atual[i].sel) {
						return (false);
					}
					if (novo[i].status !== atual[i].status) {
						return (false);
					}
				}
				return (true);
			} catch (e) {
				return true;
			}
		},
		/**
		 * Function: pegaTema
		 *
		 * Procura um tema no objeto CAMADAS.
		 *
		 * Parametro:
		 *
		 * {String} valor do parametro
		 *
		 * {Objeto} - objeto com a lista de temas (escape com "" para usar o default)
		 *
		 * {string} - parametro que sera procurado
		 *
		 * Return:
		 *
		 * {objeto}
		 */
		pegaTema : function(valor, camadas, parametro) {
			var i;
			if (!camadas || camadas == "") {
				camadas = i3GEO.arvoreDeCamadas.CAMADAS;
			} else {
				// converte o objeto camadas para a forma valida caso contenha a
				// forma chave/valor, implementada na versao 6.0 do i3Geo
				camadas = i3GEO.arvoreDeCamadas.converteChaveValor2normal(camadas);
			}
			if (!parametro) {
				parametro = "name";
			}
			i = camadas.length;
			while (i > 0) {
				i -= 1;
				if (camadas[i][parametro] === valor) {
					return camadas[i];
				}
			}
			return "";
		},
		/**
		 * Busca temas na vari&aacute;vel i3GEO.arvoreDeCamadas.CAMADAS aplicando um filtro
		 *
		 * Parameters:
		 *
		 * {string} - propriedade de CAMADAS que ser&aacute; filtrado
		 *
		 * {string} - valor do filtro
		 *
		 * {string} - operador entre propriedade e valor igual|diferente|menor
		 *
		 * {objeto} - array do tipo i3GEO.arvoreDeCamadas.CAMADAS
		 *
		 * Return: {Array} - lista de camadas
		 */
		filtraCamadas : function(propriedade, valor, operador, camadas) {
			if(!camadas){
				camadas = i3GEO.arvoreDeCamadas.CAMADAS;
			}
			var resultado, i = 0, temp, nelementos = camadas.length, ltema;
			resultado = [];
			if (nelementos > 0) {
				do {
					ltema = camadas[i];
					if (ltema.escondido.toLowerCase() !== "sim") {
						temp = ltema[propriedade];
						if (operador === "igual") {
							if (temp+"".toLowerCase() == valor+"".toLowerCase()) // n&atilde;o usar === aqui
							{
								resultado.push(ltema);
							}
						}
						if (operador === "diferente") {
							if (temp+"".toLowerCase() !== valor+"".toLowerCase()) {
								resultado.push(ltema);
							}
						}
						if (operador === "menor") {
							if (temp+"".toLowerCase() < valor+"".toLowerCase()) {
								resultado.push(ltema);
							}
						}
					}
					i += 1;
				} while (i < nelementos);
			}
			return resultado;
		},
		/**
		 * Function: alteraPropCamadas
		 *
		 * Altera o valor de uma propriedade de um tema do objeto i3GEO.arvoreDeCamadas.CAMADAS
		 *
		 * Parameters:
		 *
		 * {string} - propriedade que ser&aacute; modificada
		 *
		 * {string} - novo valor
		 *
		 * {string} - c&oacute;digo da camada
		 */
		alteraPropCamadas : function(propriedade, valor, camada) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.alteraPropCamadas()");

			var i = 0, nelementos = i3GEO.arvoreDeCamadas.CAMADAS.length, ltema;
			if (nelementos > 0) {
				do {
					ltema = i3GEO.arvoreDeCamadas.CAMADAS[i];
					if (ltema.name === camada) {
						ltema[propriedade] = valor;
					}
					i += 1;
				} while (i < nelementos);
			}
		},
		/**
		 * Verifica se um tema est&aacute; ou n&atilde;o na abrang&ecirc;ncia espacial do mapa atual modificando a cor com que o nome
		 * &eacute; mostrado na &aacute;rvore
		 */
		verificaAbrangenciaTemas : function() {
			if (i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS === false) {
				return;
			}
			try {
				var i = 0, temp, nelementos = i3GEO.arvoreDeCamadas.CAMADAS.length, ltema;
				if (nelementos > 0) {
					do {
						ltema = i3GEO.arvoreDeCamadas.CAMADAS[i];
						temp = ltema.exttema;

						if (temp !== "") {
							if (i3GEO.util.intersectaBox(temp, i3GEO.parametros.mapexten) === false) {
								$i("ArvoreTituloTema" + ltema.name).style.color = "gray";
							} else {
								$i("ArvoreTituloTema" + ltema.name).style.color = "black";
							}
						}
						i += 1;
					} while (i < nelementos);
				}
			} catch (e) {
			}
		},
		/**
		 * Verifica se algum tema est&aacute; marcado com o metadado Aplicaextensao. Retorna a primeira ocorr&ecirc;ncia se houver
		 *
		 * Return:
		 *
		 * {string} - c&oacute;digo do tema ou ""
		 */
		verificaAplicaExtensao : function() {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.arvoreDeCamadas.verificaAplicaExtensao()");

			var i = 0, temp = "", nelementos = i3GEO.arvoreDeCamadas.CAMADAS.length, ltema;
			try {
				if (nelementos > 0) {
					do {
						ltema = i3GEO.arvoreDeCamadas.CAMADAS[i];
						if (ltema.aplicaextensao.toLowerCase() === "sim") {
							temp = ltema.name;
						}
						i += 1;
					} while (i < nelementos);
				}
			} catch (e) {
				return "";
			}
			return temp;
		},
		/**
		 * Converte um objeto com a lsita de camadas do formato chave/valor para o formato normal O formato chave/valor foi introduzido na
		 * versao 6.0 do i3Geo e e fornecido como padrao pelo servidor O objeto i3GEO.arvoreDeCamadas.CAMADAS utiliza o formato normal do
		 * tipo {chave: valor},{chave: valor} Ja o objeto fornecido pelo servidor evita redundancias utilizando o formato
		 * {chaves:{},valores:{}}
		 */
		converteChaveValor2normal : function(obj) {
			if (obj.chaves) {
				var i, tema, j, t, chaves = obj.chaves, temas = obj.valores, ntemas = temas.length, nchaves = chaves.length, novo = [];
				for (i = 0; i < ntemas; i++) {
					tema = temas[i];
					t = {};
					for (j = 0; j < nchaves; j++) {
						t[chaves[j]] = tema[j];
					}
					novo.push(t);
				}
				return novo;
			} else {
				return obj;
			}
		},
		/**
		 * Guarda um objeto contendo as definicoes das camadas conforme o padrao utilizado pela arvore de camadas
		 */
		registaCamadas : function(obj) {
			obj = i3GEO.arvoreDeCamadas.converteChaveValor2normal(obj);
			i3GEO.arvoreDeCamadas.CAMADAS = obj;
		},
		/**
		 * Section: i3GEO.arvoreDeCamadas.dialogo
		 *
		 * Abre as telas de di&aacute;logo das op&ccedil;&otilde;es de manipula&ccedil;&atilde;o da &aacute;rvore
		 */
		dialogo : {
			/**
			 * Function: filtro
			 *
			 * Abre a janela de di&aacute;logo para o usu&aacute;rio escolher ou alterar o filtro aplicado a &aacute;rvore
			 */
			filtro : function() {
				i3GEO.util.dialogoFerramenta(
						"i3GEO.arvoreDeCamadas.dialogo.filtro()",
						"filtroarvore",
						"filtroarvore",
						"dependencias.php",
				"i3GEOF.filtroarvore.iniciaJanelaFlutuante()");
			},
			/**
			 * Function: excluir
			 *
			 * Abre a janela de di&aacute;logo para o usu&aacute;rio escolher os temas que ser&atilde;o exclu&iacute;dos da &aacute;rvore
			 */
			excluir : function() {
				i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.excluir()", "excluirarvore", "excluirarvore");
			}
		}
};
