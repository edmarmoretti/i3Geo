<?php
	$parurl = array_merge($_POST, $_GET);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Category" content="i3Geo Mapa interativo MMA geoprocessamento sig mobile">
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>i3GEO - OpenLayers</title>
<script src="../classesjs/i3geo6.js"></script>
<script src="../pacotes/openlayers/OpenLayers2131.js.php"></script>
<!-- estilo necess&aacute;rio para a ferramenta de edi&ccedil;&atilde;o -->
<style>
.olControlEditingToolbar1 div {
	background-image:url(../mashups/openlayers.png);
	background-repeat:no-repeat;
	float:right;
	right: 0px;
	height:29px;
	margin:2px;
	width:29px;
	cursor:pointer;
}
</style>
</head>
<body id="i3geo" style="background-color:white">
<!-- inclui o nome do usuario logado -->
<div id="i3GEONomeLogin" style="position:absolute;left:10px;top:12px;font-size:11px;z-index:50000"></div>
<table id='mst' summary="" style='display:none;' width=100% cellspacing='0'>
	<tr style="border:0px">
		<td id="barraSuperior" style="background-image:url('../imagens/cabeca.png');height:10px"></td>
	</tr>
	<tr>
		<td id="contemMenu" style="text-align:right;border-width:0pt 0pt 1px;border-color:rgb(240,240,240)">
			<!--menu suspenso-->
			<div id="menus" ></div>
		</td>
	</tr>
	<tr>
		<td style="vertical-align:top;border-width:0px;">
			<table width="100%" style="vertical-align:top;border-width:0px">
				<tr>
					<td  class=verdeclaro id=contemImg >
						<div id=corpoMapa style="position:relative;background-image:url('../imagens/i3geo1bw.jpg');"></div>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>
			<table width=100% >
				<tr>
					<td class=tdbranca >
						<!--
						Nesse div s&atilde;o inclu&iacute;dos os &iacute;cones que permitem ao usu&aacute;rio modificar o visual de cores dos &iacute;cones
						<div id=visual ></div>
						-->
						<!-- bot&atilde;o de compartilhamento em redes sociais -->
						<!--<div id=i3GEOcompartilhar style="width: 170px; margin: auto; text-align: left; padding-top: 1px"></div> -->

						<!-- aqui ser&aacute; inclu&iacute;do o contador de tempo quando o temporizador de redesenho do mapa estiver ativo -->
						<div id=tempoRedesenho style=z-index:100;position:absolute;top:0px;color:green;background-color:black;width:50px;display:none ></div>
					</td>
					<td class=tdbranca >
						<!-- aqui ser&aacute; inclu&iacute;da a escala num&eacute;rica -->
						<div id=escala style="text-align:right;" ></div>
					</td>
					<td class=tdbranca  >
						<!-- aqui ser&aacute; inclu&iacute;do o gadget que mostra a coordenada geogr&aacute;fica da posi&ccedil;&atilde;o do mouse -->
						<div id=localizarxy style="text-align:left;font-size:10px;display:inline-table"></div>
					</td>
					<!-- aqui ser&atilde;o inclu&iacute;das as bandeiras que permitem a troca de idioma -->
					<td class=tdbranca  >
						<div id=seletorIdiomas ></div>
					</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr style="border:0px">
		<td id="barraInferior" style="background-image:url('../imagens/rodape.png');height:10px"></td>
	</tr>
</table>
	<div id="i3GEOlogoMarca">
		<table>
			<tr>
				<td>
					<div id=versaoi3geo></div>
					<h1 class="i3GEOlogoMarca">i3Geo
						- Software livre para cria&ccedil;&atilde;o de mapas interativos e geoprocessamento</h1>
					<h1 class="i3GEOlogoMarca">Baseado
						no Mapserver, &eacute; licenciado sob GPL e integra o Portal do Software P&uacute;blico
						Brasileiro</h1>
				</td>
			</tr>
		</table>
		<img src='../imagens/logo_inicio.png'>
	</div>

	<div id="i3GEOguiaMovel"
		style="visibility: hidden; position: absolute; display: block; border: 0px solid white; text-align: left; z-index: 2000; background-color: none">
		<div
			style="cursor: pointer; position: absolute; top: 10px; width: auto; z-index: 5000; ">
			<div id="iconeGuia_temas"></div>
			<div id="iconeGuia_adiciona" style="margin-top: 3px;"></div>
			<div id="iconeGuia_legenda" style="margin-top: 3px;"></div>
			<div id="iconeGuia_dobraPagina" style="margin-top: 3px;"></div>
			<div id="iconeGuia_buscaRapida" style="margin-top: 3px;"></div>
			<div id="iconeGuia_identificaBalao" style="margin-top: 3px;"></div>
			<div id="iconeGuia_identifica" style="margin-top: 3px;"></div>
			<!--
			<div id="iconeGuia_zoomtot" style="margin-top: 3px;"></div>
			<div id="iconeGuia_zoomanterior" style="margin-top: 3px;"></div>
			<div id="iconeGuia_zoomli" style="margin-top: 3px;"></div>
			<div id="iconeGuia_zoomproximo" style="margin-top: 3px;"></div>
			-->
		</div>
		<!-- veja i3GEO.guias.CONFIGURA -->
		<div id="i3GEOguiaMovelMolde"
			style="top: 0px; box-shadow: 0 2px 10px 0 #888888; position: absolute; display: none; border: 0px solid white; text-align: left; z-index: 10000; background-color: gray">
			<div id="i3GEOguiaMovelConteudo"
				style='top: 10px; overflow: auto; display: none; position: absolute; border-color: gray; border-width: 0px 0 0px 0px; left: 0px; height: 0px; background-color: white'>
				<div id='guia1obj' style='display: none;'>
					<div class="i3GEOfechaGuia" onclick="i3GEO.guias.guiaMovel.abreFecha('fecha');">X</div>
					<!-- opcoes como um botao -->
					<div id="arvoreCamOpcoes" style="text-align:left;"></div>
					<!--	Esta div acrescenta a lista de de camadas dispon&iacute;veis no mapa atual -->
					<div id=listaTemas style='top: 15px;'></div>
				</div>
				<div id='guia2obj' style='display: none;'>
					<div class="i3GEOfechaGuia" onclick="i3GEO.guias.guiaMovel.abreFecha('fecha');">X</div>
					<!-- opcoes como um botao -->
					<div id="arvoreCatOpcoes" style="text-align:left;margin-bottom: 20px;"></div>
					<div id="arvoreAdicionaTema">Aguarde...</div>
				</div>
				<div id='guia4obj' style='display: none; text-align: left'>
					<div class="i3GEOfechaGuia" onclick="i3GEO.guias.guiaMovel.abreFecha('fecha');">X</div>
					<div id="arvoreLegenda" style='display: block; text-align: left'>Aguarde...</div><br><br>
				</div>
				<div id='guia7obj' style='display: none; text-align: left'>
					<div class="i3GEOfechaGuia" onclick="i3GEO.guias.guiaMovel.abreFecha('fecha');">X</div>
					<div id="buscaRapidaGuia" style='display: block; text-align: left'></div>
				</div>
			</div>
		</div>
	</div>


<script>
/*
Interface Openlayers parametrizada

Abre a interface openlayers com passagem de par&acirc;metros

File: i3geo/interface/ol_parametros.htm
*/

//
//parametros URL
//
var parametrosURL = {
	editorvetorial: <?php
		if(!empty($parurl["editorvetorial"]))
		{echo $parurl["editorvetorial"];}
		else
		{echo "false";}
	?>
};
//ativa ou desativa o balao de info ao clicar no mapa
i3GEO.eventos.cliquePerm.ativo = true;
//
i3GEO.configura.locaplic = i3GEO.util.protocolo()+"://"+window.location.host+"/i3geo";
i3GEO.configura.autotamanho = false;
i3GEO.Interface.ATUAL = "openlayers";
i3GEO.Interface.IDCORPO = "contemImg";
i3GEO.Interface.openlayers.GADGETS = {
		PanZoomBar:true,
		PanZoom:false,
		LayerSwitcher:true,
		ScaleLine:true,
		OverviewMap:false
	};
i3GEO.Interface.openlayers.TILES = true;
i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.finaliza = 'if($i("omenudataInterface1")){i3GEOoMenuBar.getMenuItem("omenudataInterface1").cfg.setProperty("text", " ");}';
i3GEO.cria();
i3GEO.configura.mapaRefDisplay = "none";
i3GEO.barraDeBotoes.TIPO = "olhodepeixe";
//ajusta o deslocamento da barra de botoes
i3GEO.barraDeBotoes.OFFSET = 11;
//ajusta a posicao da barra de botoes no IE
if(navm){
	i3GEO.barraDeBotoes.OFFSET = 5;
}
if(chro){
	i3GEO.barraDeBotoes.OFFSET = 15;
}

i3GEO.configura.oMenuData["submenus"]["janelas"] = [];
i3GEO.ajuda.ATIVAJANELA = false;
i3GEO.idioma.IDSELETOR = "seletorIdiomas";

i3GEO.arvoreDeTemas.TIPOBOTAO = "radio";

i3GEO.arvoreDeTemas.OPCOESADICIONAIS.comentarios = true;
i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS = true;
i3GEO.arvoreDeCamadas.MOSTRALISTAKML = false;
i3GEO.mapa.AUTORESIZE = true;
i3GEO.guias.TIPO = "movel";
//i3GEO.guias.guiaMovel.ABERTA = true;
i3GEO.guias.guiaMovel.config.topGuiaMovel = 0;
OpenLayers.ImgPath = "../pacotes/openlayers/img/";
//
//adiciona camadas que podem ser ativadas como fundo do mapa
//
		(function() {
			var eng = new OpenLayers.Layer.ArcGIS93Rest(
				"ESRI National Geographic",
				"http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/export",
				{
					format : "jpeg"
				}, {
					isBaseLayer : true,
					visibility : true,
					attribution: 'Tiles &copy; <a href="http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer">ArcGIS</a>'
				});
			var oce = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI Ocean Basemap",
					"http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false,
						attribution: 'Tiles &copy; <a href="http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer">ArcGIS</a>'
					});
			var ims = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI Imagery World 2D",
					"http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false,
						attribution : 'Tiles &copy; <a href="http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_Imagery_World_2D/MapServer">ArcGIS</a>'
					});
			var wsm = new OpenLayers.Layer.ArcGIS93Rest(
					"ESRI World Street Map",
					"http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/export",
					{
						format : "jpeg"
					}, {
						isBaseLayer : true,
						visibility : false,
						attribution : 'Tiles &copy; <a href="http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer">ArcGIS</a>'
					});
			var bra = new OpenLayers.Layer.WMS(
					"Base carto MMA",
					"http://mapas.mma.gov.br/cgi-bin/mapserv?map=/opt/www/html/webservices/baseraster.map",
					{
						layers : "baseraster",
						srs : "EPSG:4618",
						format : "image/png",
						isBaseLayer : false
					}, {
						isBaseLayer : true,
						visibility : false
					});

			var tms = new OpenLayers.Layer.TMS("OSGEO",
					"http://tilecache.osgeo.org/wms-c/Basic.py/", {
						layername : "basic",
						type : "png",
						// set if different than the bottom left of map.maxExtent
						tileOrigin : new OpenLayers.LonLat(-180, -90),
						isBaseLayer : true,
						visibility : false,
						attribution : '&copy; <a href="http://www.tilecache.org/">2006-2010, TileCache Contributors</a>'
					});

			i3GEO.Interface.openlayers.LAYERSADICIONAIS = [ eng, oce, ims, wsm, tms,
					bra ];
		})();

i3GEO.finaliza = function(){
	if($i("i3GEOlogoMarca"))
	{$i("i3GEOlogoMarca").style.display = "none";}
	i3GEO.mapa.insereDobraPagina("googlemaps","../imagens/dobragooglemaps.png");
	if(parametrosURL.editorvetorial === true){
		i3GEO.barraDeBotoes.editor.inicia();
	}
};
i3GEO.gadgets.PARAMETROS.mostraMenuSuspenso.permiteLogin = true;
i3GEO.arvoreDeTemas.OPCOESADICIONAIS.navegacaoDir = true;
i3GEO.configura.sid = "";
//
//define a funcao que sera executada ao clicar no mapa
//default (balao do tipo etiqueta)
i3GEO.eventos.MOUSECLIQUEPERM = [i3GEO.configura.funcaoTip];
//alternativo (janela de identificacao
//i3GEO.eventos.MOUSECLIQUEPERM = [i3GEO.configura.funcaoIdentifica];
//

i3GEO.inicia();
//
//substitui a janela de alerta normal do navegador por uma janela estilizada. Pode ser comentado sem problemas. No Safari apresentou problemas.
//
i3GEO.janela.ativaAlerta();

</script>
</body>
</html>
