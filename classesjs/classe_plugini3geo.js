/**
 * Title: PluginI3Geo
 * 
 * i3GEO.pluginI3geo
 * 
 * Implementa os plugins do i3Geo que adicionam camadas especiais ao mapa, normalmente dados vetoriais processados no navegador Web.
 * 
 * Arquivo:
 * 
 * i3geo/classesjs/classe_plugini3geo.js
 * 
 * Licen&ccedil;a:
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
i3GEO.pluginI3geo =
	{
		OBJETOS : {},
		/**
		 * Lista de plugins
		 * 
		 * Utilizado no editor de mapfiles do sistema de administracao
		 */
		PLUGINS : [
			{
				"classe" : "heatmap",
				"nome" : "Mapa de calor",
				"editor" : true
			},
			{
				"classe" : "markercluster",
				"nome" : "Agrupamento de pontos (cluster)",
				"editor" : true
			}
		],
		/**
		 * Inicia a execucao de um plugin
		 * 
		 * Camada e um objeto gerado pelo i3Geo quando uma camada e adicionada ao mapa O objeto i3GEO.arvoreDeCamadas.CAMADAS guarda todas
		 * as camadas adicionadas ao mapa Ao adicionar uma camada pelo catalogo, o i3Geo verifica se a camada possui plugin e direciona para
		 * ca Os plugins sao definidos como metadados em cada mapfile de cada tema
		 * 
		 * Veja em i3geo/classesphp/classe_mapa.php funcao parametrostemas
		 */
		inicia : function(camada) {
			if (i3GEO.janela) {
				i3GEO.janela.AGUARDEMODAL = true;
				i3GEO.janela.abreAguarde("aguardePlugin", "Plugin...");
				i3GEO.janela.AGUARDEMODAL = false;
			}
			// chama a funcao conforme o tipo de plugin e a interface atual
			// para cada plugin deve haver um objeto com as funcoes especificas
			// para
			// cada interface
			i3GEO.pluginI3geo[camada.plugini3geo.plugin][i3GEO.Interface.ATUAL].inicia(camada);
		},
		/**
		 * Retorna o HTML com o formulario para editar os parametros do plugin
		 */
		formAdmin : function(plugin, configString) {
			return i3GEO.pluginI3geo[plugin].formAdmin(configString);
		},
		linkAjuda : function(plugin) {
			return i3GEO.pluginI3geo[plugin].linkAjuda();
		},
		ligaCamada : function(nomecamada) {
			if (i3GEO.pluginI3geo.OBJETOS[nomecamada] && i3GEO.pluginI3geo.OBJETOS[nomecamada].ligaCamada) {
				i3GEO.pluginI3geo.OBJETOS[nomecamada].ligaCamada();
				return true;
			}
			return false;
		},
		desligaCamada : function(nomecamada) {
			if (i3GEO.pluginI3geo.OBJETOS[nomecamada] && i3GEO.pluginI3geo.OBJETOS[nomecamada].desLigaCamada) {
				i3GEO.pluginI3geo.OBJETOS[nomecamada].desLigaCamada();
				return true;
			}
			return false;
		},
		removeCamada : function(nomecamada) {
			if (i3GEO.pluginI3geo.OBJETOS[nomecamada] && i3GEO.pluginI3geo.OBJETOS[nomecamada].removeCamada) {
				i3GEO.pluginI3geo.OBJETOS[nomecamada].removeCamada();
				delete (i3GEO.pluginI3geo.OBJETOS[nomecamada]);
				return true;
			}
			return false;
		},
		atualizaCamada : function(nomecamada) {
			if (i3GEO.pluginI3geo.OBJETOS[nomecamada] && i3GEO.pluginI3geo.OBJETOS[nomecamada].atualizaCamada) {
				i3GEO.pluginI3geo.OBJETOS[nomecamada].atualizaCamada();
				return true;
			}
			return false;
		},
		existeObjeto : function(nomecamada) {
			if (i3GEO.pluginI3geo.OBJETOS[nomecamada] && i3GEO.pluginI3geo.OBJETOS[nomecamada].atualizaCamada) {
				return true;
			}
			return false;
		},
		/**
		 * Aplica as propriedades em um objeto do tipo tema
		 * 
		 * tema e fornecido por i3GEO.arvoreDeCamadas o ajuste das propriedades e necessario para que as propriedades aparecam de forma
		 * correta na arvore de camadas
		 */
		aplicaPropriedades : function(camada) {
			if (camada.plugini3geo && camada.plugini3geo != "") {
				camada = i3GEO.pluginI3geo[camada.plugini3geo.plugin][i3GEO.Interface.ATUAL].aplicaPropriedades(camada);
			}
			return camada;
		},
		/**
		 * Function: heatmap
		 * 
		 * Mapa de calor
		 * 
		 * Gera um layer do tipo mapa de calor e adiciona ao mapa
		 * 
		 * As depend&ecirc;ncias em javascript sao carregadas via script tag por meio de ferramentas/heatmap
		 * 
		 * Esse programa tamb&eacute;m obt&eacute;m os dados necess&aacute;rios ao plugin
		 * 
		 * O layer existente no mapfile deve conter um metadata chamado PLUGINI3GEO
		 * 
		 * Esse matadado deve conter uma string que ser&aacute; transformada em um objeto javascript para uso no plugin
		 * 
		 * Exemplo:
		 * 
		 * "PLUGINI3GEO" '{"plugin":"heatmap","parametros":{"tipoGradiente": "default","coluna":"teste","max":"10","radius":"15"}}'
		 * 
		 * Coluna &eacute; a que cont&eacute;m os dados num&eacute;ricos que definem a quantidade de uma medida em cada ponto e &eacute;
		 * usada para gerar a representa&ccedil;&atilde;o. Se for vazia, considera-se o valor como 1
		 * 
		 * As cores das classes existentes no LAYER ser&atilde;o utilizadas para calcular as cores do mapa de calor. Se tipoGradiente for
		 * igual a "default" ser&aacute; utilizado o gradiente padrão.
		 * 
		 */
		heatmap : {
			linkAjuda : function() {
				return i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=3&idajuda=121";
			},
			formAdmin : function(config) {
				// {"plugin":"heatmap","parametros":{"coluna":"","radius":15,"max":10}}
				var parametros, ins = "", configDefault =
					'{"plugin":"heatmap","parametros":{"tipoGradiente": "default","coluna":"1","radius":15,"max":10}}';
				if (config === "") {
					config = configDefault;
				}
				config = YAHOO.lang.JSON.parse(config);
				if (config.plugin != "heatmap") {
					config = YAHOO.lang.JSON.parse(configDefault);
				}
				parametros = config.parametros;
				ins +=
					""
						+ "<p>Coluna que cont&eacute;m os dados ou valor num&eacute;rico para cada ponto:"
						+ "<br><input name='coluna' type='text' value='"
						+ parametros.coluna
						+ "' size='30'></p>"
						+ "<p>Raio de cada ponto em pixels:"
						+ "<br><input name='radius' type='text' value='"
						+ parametros.radius
						+ "' size='30'></p>"
						+ "<p>Valor m&aacute;ximo em cada ponto:"
						+ "<br><input name='max' type='text' value='"
						+ parametros.max
						+ "' size='30'></p>"
						+ "<p>Tipo de gradiente (deixe vazio para utilizar as classes definidas no Layer ou escreva 'default' para usar o normal):"
						+ "<br><input name='tipoGradiente' type='text' value='"
						+ parametros.tipoGradiente
						+ "' size='30'></p>"
						+ "<p>Para definir os cortes no gradiente de cores utilize valores entre 0 e 1."
						+ " As cores s&atilde;o definidas nas classes do LAYER, sendo que o nome define o valor superior do gradiente e COLOR define a cor."
						+ " Veja o exemplo utilizado no tema _lmapadecalor.map</p>";
				return ins;
			},
			googlemaps : {
				aplicaPropriedades : function(camada) {
					camada.sel = "nao";
					camada.download = "nao";
					camada.AGUARDALEGENDA = false;
					camada.temporizador = "";
					camada.copia = false;
					camada.procurar = false;
					camada.toponimia = false;
					camada.etiquetas = false;
					camada.tabela = false;
					camada.grafico = false;
					camada.destacar = false;
					camada.wms = false;
					camada.classe = "NAO";
					return camada;
				},
				inicia : function(camada) {
					var nomeScript = "heatmap_script", p = i3GEO.configura.locaplic + "/ferramentas/heatmap/googlemaps_js.php", carregaJs =
						"nao", criaLayer;
					criaLayer = function() {
						var heatmap, pontos;

						heatmap = new HeatmapOverlay(i3GeoMap, camada.name, {
							"radius" : camada.plugini3geo.parametros.radius,
							"visible" : true,
							"opacity" : camada.transparency,
							"gradient" : heatmap_config.gradient,
							"legend" : {
								"title" : camada.tema,
								"position" : "bl",
								"offset" : [
									5,
									50
								]
							}
						});
						// i3GeoMap.overlayMapTypes.insertAt(0, heatmap);
						pontos = {
							max : camada.plugini3geo.parametros.max,
							data : heatmap_dados
						};
						i3GEO.janela.fechaAguarde("aguardePlugin");
						heatmap.setDataSet(pontos);
						heatmap.ligaCamada = function() {
							this.liga();
						};
						heatmap.desLigaCamada = function() {
							this.desliga();
						};
						heatmap.removeCamada = function() {
							this.destroy();
						};
						heatmap.atualizaCamada = function() {
							this.draw();
						};
						i3GEO.pluginI3geo.OBJETOS[camada.name] = heatmap;
						heatmap_dados = null;
					};
					// se o script nao existir carrega o codigo e os dados
					// caso contrario, carrega apenas os dados no script
					if (!$i(nomeScript)) {
						carregaJs = "sim";
					} else {
						nomeScript = "";
					}
					p +=
						"?carregajs=" + carregaJs + "&layer=" + camada.name + "&coluna=" + camada.plugini3geo.parametros.coluna
							+ "&tipoGradiente=" + camada.plugini3geo.parametros.tipoGradiente + "&g_sid=" + i3GEO.configura.sid
							+ "&nomevariavel=heatmap_dados&nomevariavelConfig=heatmap_config";
					i3GEO.util.scriptTag(p, criaLayer, nomeScript);
				}
			},
			//
			// O script que adiciona a camada
			// define os eventos visibilitychanged, moveend e removed
			// A camada e adicionada como um objeto layer, permitindo que as funcoes
			// do i3Geo operem normalmente, sem muitas modificacoes
			//
			openlayers : {
				aplicaPropriedades : function(camada) {
					camada.sel = "nao";
					camada.download = "nao";
					camada.AGUARDALEGENDA = false;
					camada.temporizador = "";
					camada.copia = false;
					camada.procurar = false;
					camada.toponimia = false;
					camada.etiquetas = false;
					camada.tabela = false;
					camada.grafico = false;
					camada.destacar = false;
					camada.wms = false;
					camada.classe = "NAO";
					return camada;
				},
				inicia : function(camada, objMapa) {
					var nomeScript = "heatmap_script", p = i3GEO.configura.locaplic + "/ferramentas/heatmap/openlayers_js.php", carregaJs =
						"nao", criaLayer;
					criaLayer = function() {
						var heatmap, transformedTestData = {
							max : camada.plugini3geo.parametros.max,
							data : []
						}, data = heatmap_dados, datalen = heatmap_dados.length, nudata = [];

						// para uso com o mashup
						if (!objMapa) {
							objMapa = i3geoOL;
						}
						// in order to use the OpenLayers Heatmap Layer we have
						// to
						// transform our data into
						// { max: <max>, data: [{lonlat: <OpenLayers.LonLat>,
						// count:
						// <count>},...]}
						while (datalen--) {
							nudata.push({
								lonlat : new OpenLayers.LonLat(data[datalen].lng, heatmap_dados[datalen].lat),
								count : heatmap_dados[datalen].count
							});
						}
						transformedTestData.data = nudata;
						// create our heatmap layer
						heatmap = new OpenLayers.Layer.Heatmap(camada.name, objMapa, objMapa.baseLayer, {
							"visible" : true,
							"opacity" : camada.transparency,
							"radius" : camada.plugini3geo.parametros.radius,
							"gradient" : heatmap_config.gradient,
							"legend" : {
								"title" : camada.tema,
								"position" : "bl",
								"offset" : [
									5,
									50
								]
							}
						}, {
							isBaseLayer : false,
							projection : new OpenLayers.Projection("EPSG:4326"),
							displayInLayerSwitcher : true
						});
						heatmap.ligaCamada = function() {
							this.toggle();
							this.updateLayer();
						};
						heatmap.desLigaCamada = function() {
							this.toggle();
							this.updateLayer();
						};
						heatmap.removeCamada = function() {
							this.destroy();
						};
						heatmap.atualizaCamada = function() {
							this.updateLayer();
						};

						i3GEO.pluginI3geo.OBJETOS[camada.name] = heatmap;
						objMapa.addLayer(heatmap);
						heatmap.setDataSet(transformedTestData);
						heatmap_dados = null;
						if (i3GEO.janela) {
							i3GEO.janela.fechaAguarde("aguardePlugin");
						}
					};
					// se o script nao existir carrega o codigo e os dados
					// caso contrario, carrega apenas os dados no script
					if (!$i(nomeScript)) {
						carregaJs = "sim";
					} else {
						nomeScript = "";
					}
					if (!i3GEO.configura || !i3GEO.configura.sid) {
						i3GEO.configura.sid = "";
					}
					p +=
						"?carregajs=" + carregaJs + "&layer=" + camada.name + "&coluna=" + camada.plugini3geo.parametros.coluna
							+ "&tipoGradiente=" + camada.plugini3geo.parametros.tipoGradiente + "&g_sid=" + i3GEO.configura.sid
							+ "&nomevariavel=heatmap_dados&nomevariavelConfig=heatmap_config";
					i3GEO.util.scriptTag(p, criaLayer, nomeScript);
				}
			},
			googleearth : {
				inicia : function() {
					alert("Plugin nao disponivel");
				}
			}
		},
		/**
		 * Function: markercluster
		 * 
		 * Markercluster
		 * 
		 * Gera um layer que agrupa pontos conforme a dist&acirc;ncia entre eles e insere um contador adiciona ao mapa
		 * 
		 * As depend&ecirc;ncias em javascript sao carregadas via script tag por meio de ferramentas/markercluster
		 * 
		 * Esse programa tamb&eacute;m obt&eacute;m os dados necess&aacute;rios ao plugin
		 * 
		 * O layer existente no mapfile deve conter um metadata chamado PLUGINI3GEO
		 * 
		 * Esse matadado deve conter uma string que ser&aacute; transformada em um objeto javascript para uso no plugin
		 * 
		 * Exemplo:
		 * 
		 * "PLUGINI3GEO" '{"plugin":"markercluster","parametros":{"coluna":"teste","gridSize":"50"}}'
		 * 
		 * Coluna &eacute; a que cont&eacute;m os dados num&eacute;ricos que definem a quantidade de uma medida em cada ponto e &eacute;
		 * usada para gerar a representa&ccedil;&atilde;o. Se for vazia, considera-se o valor como 1
		 * 
		 */
		markercluster : {
			linkAjuda : function() {
				return i3GEO.configura.locaplic + "/ajuda_usuario.php?idcategoria=3&idajuda=121";
			},
			formAdmin : function(config) {
				var parametros, ins = "", configDefault =
					'{"plugin":"markercluster","parametros":{"tipoEstilos": "default","gridSize":50}}';
				if (config === "") {
					config = configDefault;
				}
				config = YAHOO.lang.JSON.parse(config);
				if (config.plugin != "markercluster") {
					config = YAHOO.lang.JSON.parse(configDefault);
				}
				parametros = config.parametros;
				ins +=
					""
						+ "<p>Dist&acirc;ncia m&aacute;xima entre ponto em pixels:"
						+ "<br><input name='gridSize' type='text' value='"
						+ parametros.gridSize
						+ "' size='30'></p>"
						+ "<p>Tipo de estilos (deixe vazio para utilizar as classes definidas no Layer ou escreva 'default' para usar o normal):"
						+ "<br><input name='tipoEstilos' type='text' value='" + parametros.tipoEstilos + "' size='30'></p>"
						+ "<p>Os s&iacute;mbolos utilizados podem ser customizados alterando-se as classes do Mapfile</p>"
						+ "<p>Veja o exemplo utilizado no tema _lmapadecluster.map</p>";

				return ins;
			},
			googlemaps : {
				aplicaPropriedades : function(camada) {
					camada.sel = "nao";
					camada.download = "nao";
					camada.AGUARDALEGENDA = false;
					camada.temporizador = "";
					camada.copia = false;
					camada.procurar = false;
					camada.toponimia = false;
					camada.etiquetas = false;
					camada.tabela = false;
					camada.grafico = false;
					camada.destacar = false;
					camada.wms = false;
					camada.classe = "NAO";
					return camada;
				},
				inicia : function(camada) {
					var nomeScript = "markercluster_script", p = i3GEO.configura.locaplic + "/ferramentas/markercluster/googlemaps_js.php", carregaJs =
						"nao", criaLayer;
					criaLayer = function() {
						var markercluster, marcas, latLng, marker, n, i;
						n = markercluster_dados.length;
						marcas = [];
						for (i = 0; i < n; i++) {
							latLng = new google.maps.LatLng(markercluster_dados[i].lat, markercluster_dados[i].lng);
							marker = new google.maps.Marker({
								'position' : latLng,
								icon : {
									url : markercluster_config.ponto.url,
									scaledSize : new google.maps.Size(markercluster_config.ponto.width, markercluster_config.ponto.height)
								}
							});
							marcas.push(marker);
						}
						markercluster = new MarkerClusterer(i3GeoMap, marcas, {
							"gridSize" : parseInt(camada.plugini3geo.parametros.gridSize, 10),
							"visible" : true,
							"opacity" : camada.transparency,
							"name" : camada.name,
							"styles" : markercluster_config.estilos
						});
						i3GEO.janela.fechaAguarde("aguardePlugin");
						i3GEO.eventos.cliquePerm.ativo = false;

						markercluster.ligaCamada = function() {
							i3GEO.pluginI3geo.OBJETOS[camada.name].ready_ = true;
							i3GEO.pluginI3geo.OBJETOS[camada.name].redraw();
							i3GEO.eventos.cliquePerm.ativo = false;
						};
						markercluster.desLigaCamada = function() {
							i3GEO.pluginI3geo.OBJETOS[camada.name].resetViewport(true);
							i3GEO.pluginI3geo.OBJETOS[camada.name].ready_ = false;
							i3GEO.eventos.cliquePerm.ativo = true;
						};
						markercluster.removeCamada = function() {
							i3GEO.pluginI3geo.OBJETOS[camada.name].clearMarkers();
							i3GEO.eventos.cliquePerm.ativo = true;
						};
						markercluster.atualizaCamada = function() {
							i3GEO.pluginI3geo.OBJETOS[camada.name].ready_ = true;
							i3GEO.pluginI3geo.OBJETOS[camada.name].redraw();
							i3GEO.eventos.cliquePerm.ativo = false;
						};
						i3GEO.pluginI3geo.OBJETOS[camada.name] = markercluster;
						markercluster_dados = null;
					};
					// se o script nao existir carrega o codigo e os dados
					// caso contrario, carrega apenas os dados no script
					if (!$i(nomeScript)) {
						carregaJs = "sim";
					} else {
						nomeScript = "";
					}
					p +=
						"?carregajs=" + carregaJs + "&layer=" + camada.name + "&g_sid=" + i3GEO.configura.sid + "&tipoEstilos="
							+ camada.plugini3geo.parametros.tipoEstilos
							+ "&nomevariavel=markercluster_dados&nomevariavelConfig=markercluster_config";
					i3GEO.util.scriptTag(p, criaLayer, nomeScript);
				}
			},
			openlayers : {
				aplicaPropriedades : function(camada) {
					camada.sel = "nao";
					camada.download = "nao";
					camada.AGUARDALEGENDA = false;
					camada.temporizador = "";
					camada.copia = false;
					camada.procurar = false;
					camada.toponimia = false;
					camada.etiquetas = false;
					camada.tabela = false;
					camada.grafico = false;
					camada.destacar = false;
					camada.wms = false;
					camada.classe = "NAO";
					return camada;
				},
				inicia : function(camada, objMapa) {
					var nomeScript = "markercluster_script", p = i3GEO.configura.locaplic + "/ferramentas/markercluster/openlayers_js.php", carregaJs =
						"nao", criaLayer;
					criaLayer =
						function() {
							var logMax, logMin, classes, min, max, markercluster, marcas, lonlat, n, i, style, nestilos, intervalo, regra, regras =
								[];

							nestilos = markercluster_config.estilos.length;
							n = markercluster_dados.length;


							classes = Array();
							logMax = Math.log(n) / Math.LN10; // max decimal logarithm (or base 10)
							logMin = Math.log(1) / Math.LN10;
							intervalo = (logMax - logMin) / nestilos;
							// we compute log bounds
							for (i = 0; i < nestilos; i++) {
								if (i == 0) {
									classes[i] = logMin;
								} else {
									classes[i] = classes[i - 1] + intervalo;
								}
							}
							// we compute antilog
							classes = classes.map(function(x) {
								return Math.pow(10, x);
							});
							// and we finally add max value
							classes.push(n);

							// ponto sozinho
							regra = new OpenLayers.Rule({
								filter : new OpenLayers.Filter.Comparison({
									type : OpenLayers.Filter.Comparison.LESS_THAN,
									property : "count",
									value : 2
								}),
								symbolizer : {
									externalGraphic : markercluster_config.ponto.url,
									graphicWidth : markercluster_config.ponto.width,
									graphicHeight : markercluster_config.ponto.height
								}
							});
							regras.push(regra);
							min = 2;
							for (i = 0; i < nestilos; i++) {
								max = classes[i + 1];
								regra = new OpenLayers.Rule({
									filter : new OpenLayers.Filter.Comparison({
										type : OpenLayers.Filter.Comparison.BETWEEN,
										property : "count",
										lowerBoundary : min,
										upperBoundary : max
									}),
									symbolizer : {
										externalGraphic : markercluster_config.estilos[i].url,
										graphicWidth : markercluster_config.estilos[i].width,
										graphicHeight : markercluster_config.estilos[i].height,
										label : "${count}",
										labelOutlineWidth : 1,
										fontColor : "#000000",
										fontOpacity : 1,
										fontSize : "12px"
									}
								});
								regras.push(regra);
								min = max;
							}

							// Create a Style that uses the three previous rules
							style = new OpenLayers.Style(null, {
								rules : regras
							});

							markercluster = new OpenLayers.Layer.Vector(camada.name, {
								renderers : [
									'Canvas',
									'SVG'
								],
								strategies : [
									new OpenLayers.Strategy.AnimatedCluster({
										distance : parseInt(camada.plugini3geo.parametros.gridSize, 10)
									})
								],
								styleMap : new OpenLayers.StyleMap(style)
							});
							// para uso com o mashup
							if (!objMapa) {
								objMapa = i3geoOL;
							}
							objMapa.addLayer(markercluster);

							marcas = [];
							for (i = 0; i < n; i++) {
								lonlat = new OpenLayers.LonLat(markercluster_dados[i].lng, markercluster_dados[i].lat);
								if (i3GEO.Interface.openlayers.googleLike === true) {
									lonlat.transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
								}
								marcas.push(new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(lonlat.lon, lonlat.lat)));
							}
							markercluster.addFeatures(marcas);

							i3GEO.janela.fechaAguarde("aguardePlugin");
							i3GEO.eventos.cliquePerm.ativo = false;

							markercluster.ligaCamada = function() {
								i3GEO.eventos.cliquePerm.ativo = false;
							};
							markercluster.desLigaCamada = function() {
								i3GEO.eventos.cliquePerm.ativo = true;
							};
							markercluster.removeCamada = function() {
								i3GEO.eventos.cliquePerm.ativo = true;
							};
							markercluster.atualizaCamada = function() {
								i3GEO.eventos.cliquePerm.ativo = false;
							};
							i3GEO.pluginI3geo.OBJETOS[camada.name] = markercluster;
							markercluster_dados = null;
						};
					// se o script nao existir carrega o codigo e os dados
					// caso contrario, carrega apenas os dados no script
					if (!$i(nomeScript)) {
						carregaJs = "sim";
					} else {
						nomeScript = "";
					}
					p +=
						"?carregajs=" + carregaJs + "&layer=" + camada.name + "&g_sid=" + i3GEO.configura.sid + "&tipoEstilos="
							+ camada.plugini3geo.parametros.tipoEstilos
							+ "&nomevariavel=markercluster_dados&nomevariavelConfig=markercluster_config";
					i3GEO.util.scriptTag(p, criaLayer, nomeScript);
				}
			}
		}
	};