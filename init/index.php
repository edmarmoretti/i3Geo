﻿<?php
/**
 * Pagina inicial do i3Geo
 * Voce pode utilizar o parametro customDir para indicar a pasta onde
 * as interfaces de mapa estao. Nesse caso, os links utilizarao esse parametro
 * Exemplo: localhost/i3geo/init/index.php?customDir=minhaPasta
 *
 * minhaPasta deve estar dentor da pasta i3geo.
 *
 * Se dentro da pasta $customDir existir um arquivo chamado index.php sera feito o include
 * na pagina.
 */
/**
 * Cria as pastas temporarias que o i3Geo precisa, caso nao existam
 */
include(dirname(__FILE__)."/../ms_configura.php");
if(!empty($_GET["customDir"])){
	$customDir = strip_tags($_GET["customDir"]);
}
else if(empty($customDir)){
	$customDir = "interface";
}
if(!file_exists($dir_tmp)){
	@mkdir ($dir_tmp,0777);
}
if(file_exists($dir_tmp)){
	@mkdir($dir_tmp."/comum",0777);
	@mkdir($dir_tmp."/saiku-datasources",0777);
	chmod($dir_tmp."/saiku-datasources",0777);
	@mkdir($dir_tmp."/cache",0777);
	chmod($dir_tmp."/cache",0777);
	@mkdir($dir_tmp."/cache/googlemaps",0777);
	chmod($dir_tmp."/cache/googlemaps",0777);
}
if(file_exists($locaplic."/".$customDir."/index.php")){
	include($locaplic."/".$customDir."/index.php");
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta name="url" content="http://www.softwarepublico.gov.br" />
<meta name="description" content="i3Geo" />
<meta name="keywords" content="i3geo mapa geoprocessamento" />
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php
$cache_expire = 1;
header("Pragma: public");
header("Cache-Control: max-age=".$cache_expire);
header('Expires: ' . gmdate('D, d M Y H:i:s', time()+$cache_expire) . ' GMT');
?>
<script>
i3GEOF = [];
men = "";
<?php
include("dicionario.js");
include("../classesjs/compactados/dicionario_compacto.js");
include("../classesjs/compactados/classe_util_compacto.js");
include("../classesjs/compactados/classe_idioma_compacto.js");

include("index.js");
if($i3geomaster[0]["usuario"] == "admin" && $i3geomaster[0]["senha"] == "admin" ){
	echo "men = $"."trad(19,g_traducao_init);";
}
?>
</script>
<link rel='stylesheet' type='text/css' href='../css/i3geo6.css.php'></link>
<link rel="stylesheet" type="text/css" href="../admin/html/admin.css">
<style>
body {
	padding-top: 0px;
	COLOR: #2F4632;
	text-align: center;
	font-size: 0.6cm;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	background-color: rgb(250, 250, 250);
	margin: auto;
}

.r {
	border: 1px solid #F0F0F0;
	border-radius: 5px 5px 5px 5px;
	box-shadow: 1px 1px 1px 1px lightgray;
	float: left;
	height: 150px;
	margin: 0px 25px 20px auto;
	padding: 5px;
	width: 200px;
	background: white;
	vertical-align: middle;
	font-size: 0.4cm;
	position: relative;
	display: block;
	text-align: center;
	z-index: 2;
}

table {
	width: 100%;
}

td {
	font-size: 0.4cm;
	text-align: center;
	height: 150px;
}

h1 {
	font-size: 0.6cm;
	text-align: left;
	margin: 25px;
}

#bandeiras {
	width: 80px;
	text-align: left;
	position: absolute;
	left: 0.2cm;
	z-index: 10;
}

a {
	margin: 0px auto;
	text-decoration: none;
	font-size: 14px;
}

.borda {
	background-color: #990000;
	padding: 5px 0px 5px 0px;
	text-align: left;
	width: 100%;
}
</style>
</head>
<body class=" yui-skin-sam " style="background-color: rgb(250, 250, 250);" >
	<div class="borda">
		<div id="bandeiras"></div>
		<div>
			<a href="http://www.softwarepublico.gov.br" target="_blank" style="color: white;"><b>i3Geo 6.0</b> </a>
		</div>
	</div>

	<div id="conteudo" style="position: relative; top: -10px; margin: auto; max-width: 1000px; left: 10px;">
		<div style="margin-top: 5px;">
			<div id="mensagemLogin" style="font-size:14px;color:red;margin-top:20px;text-align: left;"></div>
			<br>
			<div id="botoes" style=""></div>
			<script>mostraBotoes();</script>
			<div class="r">
				<table>
					<tbody>
						<tr>
							<td>
								<script type="text/javascript" src="http://www.openhub.net/p/150688/widgets/project_users.js?style=gray"></script>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div style="float: left">
			<a href="#" class="r" style="width: 230px; height: 380px;">
				<table>
					<tr>
						<td>
							<a class="twitter-timeline" href="https://twitter.com/i3geo" data-widget-id="288061915689787392" width="220" height="350">Tweets @i3Geo</a>
							<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
						</td>
					</tr>
				</table>
			</a> <a href="#" class="r" style="width: 230px; height: 380px;">
				<table>
					<tr>
						<td>
							<a class="twitter-timeline" href="https://twitter.com/search?q=@i3geo" data-widget-id="288053202174222336" width="220" height="350">Tweets #i3Geo</a>
							<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
						</td>
					</tr>
				</table>
			</a> <a href="#" class="r" style="width: 345px; height: 220px;">
				<table>
					<tr>
						<td>
							<script type="text/javascript" src="http://www.openhub.net/p/150688/widgets/project_basic_stats.js"></script>
						</td>
					</tr>
				</table>
			</a>
		</div>
	</div>
	</body>
</html>
