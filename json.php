<?php
//TODO incluir BBOX na obtencao dos dados
//TODO gerar dados para id_medida_variavel
/*
 Title: Gerador de dados JSON

Exporta dados de um mapfile em diferentes estruturas JSON

Licen&ccedil;a:

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com

Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
de COMERCIABILIDADE OU ADEQUA&Ccedil;&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
Voc&ecirc; deve ter recebido uma copia da Licen&ccedil;a P&uacute;blica Geral do
	GNU junto com este programa; se n&atilde;o, escreva para a
Free Software Foundation, Inc., no endere&ccedil;o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.

Arquivo: i3geo/ogc.php

Par&acirc;metros:

tema - nome do tema existente em i3geo/temas ou na pasta temporaria do mapserver

format -  storymap|gdocs

No caso de storymap, o fornecimento dos dados depende dos parametros definidos no METADATA storymap existente no tema

*/
$_GET = array_merge($_GET,$_POST);
include(dirname(__FILE__)."/ms_configura.php");
include(dirname(__FILE__)."/classesphp/pega_variaveis.php");
include(dirname(__FILE__)."/classesphp/funcoes_gerais.php");
//
//pega os enderecos para compor a url de chamada do gerador de web services
//
$protocolo = explode("/",$_SERVER['SERVER_PROTOCOL']);
$protocolo = $protocolo[0];
$protocolo1 = strtolower($protocolo) . '://'.$_SERVER['SERVER_NAME'];
$protocolo = strtolower($protocolo) . '://'.$_SERVER['SERVER_NAME'] .":". $_SERVER['SERVER_PORT'];
$urli3geo = str_replace("/ogc.php","",$protocolo.$_SERVER["PHP_SELF"]);

$nomeArq = $dir_tmp."/ogc_".md5(implode("",$_GET))."_json_".$output;
$nomeMapfileTmp = $nomeArq.".map";

$cache = carregaCacheArquivo();
if($cache == true){
	return;
}
//
//pega a versao do Mapserver
//
error_reporting(0);
$versao = versao();
$versao = $versao["principal"];
if(!isset($base) || $base == ""){
	if (strtoupper(substr(PHP_OS, 0, 3) == 'WIN')){
		$base = $locaplic."/aplicmap/geral1windowsv".$versao.".map";
	}
	else{
		if($base == "" && file_exists('/var/www/i3geo/aplicmap/geral1debianv'.$versao.'.map')){
			$base = "/var/www/i3geo/aplicmap/geral1debianv".$versao.".map";
		}
		if($base == "" && file_exists('/var/www/html/i3geo/aplicmap/geral1fedorav'.$versao.'.map')){
			$base = "/var/www/html/i3geo/aplicmap/geral1fedorav".$versao.".map";
		}
		if($base == "" && file_exists('/opt/www/html/i3geo/aplicmap/geral1fedorav'.$versao.'.map')){
			$base = "/opt/www/html/i3geo/aplicmap/geral1v".$versao.".map";
		}
		if($base == "")
		{
			$base = $locaplic."/aplicmap/geral1v".$versao.".map";
		}
	}
}

//
//nome do mapfile que ficara em cache
//
copy($base,$nomeMapfileTmp);
$oMap = ms_newMapobj($nomeMapfileTmp);
$nmap = ms_newMapobj($locaplic."/temas/".$tema.".map");
$l = $nmap->getlayerbyname($tema);
$l->set("template","none.htm");
if (!empty($postgis_mapa)){
	if ($l->connectiontype == MS_POSTGIS){
		$lcon = $l->connection;
		if (($lcon == " ") || ($lcon == "") || (in_array($lcon,array_keys($postgis_mapa)))){
			//
			//o metadata CONEXAOORIGINAL guarda o valor original para posterior substitui&ccedil;&atilde;o
			//
			if(($lcon == " ") || ($lcon == "")){
				$l->set("connection",$postgis_mapa);
				$l->setmetadata("CONEXAOORIGINAL",$lcon);
			}
			else{
				$l->set("connection",$postgis_mapa[$lcon]);
				$l->setmetadata("CONEXAOORIGINAL",$lcon);
			}
		}
	}
}

autoClasses($l,$oMap);
ms_newLayerObj($oMap, $l);

$oMap->save($nomeMapfileTmp);

validaAcessoTemas($nomeMapfileTmp,true);

$oMap = ms_newMapobj($nomeMapfileTmp);
$layer = $oMap->getlayerbyname($tema);
if($layer == ""){
	echo "Layer nao encontrado";
	exit;
}
$data = pegaDadosJ();
if($format == "storymap"){
	//parametros via URL
	$storymap = $layer->getmetadata("storymap");
	if($storymap == ""){
		echo "Parametros nao definidos no METADATA storymap";
		exit;
	}
	$storymap = json_decode(converteenc($storymap),true);
	$cabecalho = ($storymap["cabecalho"]);
	$texto = ($storymap["texto"]);
	$coltexto = $storymap["coltexto"];
	$colcabecalho = $storymap["colcabecalho"];
	$collocal = $storymap["collocal"];
	$colicone = $storymap["colicone"];
	$collon = $storymap["collon"];
	$collat = $storymap["collat"];
	$colmedia = $storymap["colmedia"];
	
	$par = array(
			"cabecalho"=>$cabecalho,
			"texto"=>$texto,
			"coltexto"=>$coltexto,
			"colcabecalho"=>$colcabecalho,
			"collocal"=>$collocal,
			"colicone"=>$colicone,
			"collon"=>$collon,
			"collat"=>$collat,
			"colmedia"=>$colmedia
	);
	storymap($par);
	exit;
}
if($format == "gdocs"){
	gdocs();
}
function gdocs(){
	global $data, $nomeArq, $jsonp;
	$items = $data["items"];
	$n = count($items);
	$dados = $data["features"];
	$tipos = $data["tipos"];
	$records = array();
	$id = 0;
	foreach($dados as $dd){
		$d = $dd["valores"];
		$r = array();
		$r["id"] = $id;
		$id++;
		for($i = 0; $i < $n; $i++){
			$r[$items[$i]] = $d[$i];
		}
		//var_dump($dd["shape"].getcentroid());exit;
		$c = $dd["shape"]->getcentroid();

		$r["geo"] = array("lat"=>$c->y,"lon"=>$c->x);
		$records[] = $r;
	}
	$fields = array();
	for($i = 0; $i < $n; $i++){
		$fields[] = array(
			"id"=>$items[$i],
			"type"=>$tipos[$i]
		);
	}
	
	$fields[] = array(
			"id"=>"geo",
			"type"=>"geo"
	);
	$j = array(
			"records"=>$records,
			"fields"=>$fields
	);
	$contents = json_encode($j);
	//envia
	if(empty($jsonp)){
		file_put_contents($nomeArq.".json",$contents);
		header("Content-type: application/json");
		echo $contents;
	}
	else{
		file_put_contents($nomeArq.".json",$jsonp."(".$contents.");");
		echo $jsonp."(".$contents.");";
	}
}

function storymap($par){
	global $data, $nomeArq, $jsonp;

	$items = $data["items"];
	$colunaTexto = array_search($par["coltexto"],$items);
	$colcabecalho = array_search($par["colcabecalho"],$items);
	$nomeLocal = array_search($par["collocal"],$items);
	$colunaIcone = "";
	$colunaLon = array_search($par["collon"],$items);
	$colunaLat = array_search($par["collat"],$items);
	if(empty($par["colmedia"])){
		$colmedia = "";
	}else{
		$colmedia = array_search($par["colmedia"],$items);
	}
	$dados = $data["features"];
	$slides = array();
	if(!empty($par["cabecalho"]) || !empty($par["texto"])){
		$slides[] = array(
				"type"=>"overview",
				"text"=>array(
						"text"=>$par["texto"],
						"headline"=>$par["cabecalho"]
				)
		);
	}
	foreach($dados as $dd){
		$d = $dd["valores"];
		$icone = "http://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png";
		if(!empty($d[$par["colicone"]])){
			$icone = $d[$par["colicone"]];
		}
		if($par["coltexto"] == ""){
			$texto = "";
		}
		else{
			$texto = $d[$colunaTexto];
		}
		if($par["colcabecalho"] == ""){
			$cabec = "";
		}
		else{
			$cabec = $d[$colcabecalho];
		}
		if($par["collocal"] == ""){
			$local = "";
		}
		else{
			$local = $d[$nomeLocal];
		}
		if($par["collon"] == "" || $par["collat"] == ""){
			$c = $dd["shape"]->getcentroid();
			$lon = $c->x;
			$lat = $c->y;
		}
		else{
			$lon = $d[$colunaLon];
			$lat = $d[$colunaLat];
		}
		$slide = array(
				"text"=>array(
						"text"=>$texto,
						"headline"=>$cabec
				),
				"location"=>array(
						"name" => $local,
						"lon" => $lon*1,
						//"zoom" => 10,
						"lat" => $lat*1,
						"line" => false,
						"icon" => $icone
				)
		);
		if(!empty($d[$colmedia])){
			$slide["media"] = array(
						"url"=>$d[$colmedia]
				);
		}
		//var_dump($slide);exit;
		$slides[] = $slide;
	}
	$storymap = array("slides"=>$slides);
	$j = array(
			"storymap"=>$storymap
	);
	//echo "<pre>";var_dump($j);exit;
	$contents = json_encode($j);
	//var_dump($contents);exit;
	file_put_contents($nomeArq.".json",$contents);
	//envia
	ob_clean();
	if(empty($jsonp)){
		header("Content-type: application/json");
		echo $contents;
	}
	else{
		echo $jsonp."(".$contents.");";
	}
}
function nomeRand($n=10)
{
	$nomes = "";
	$a = 'azertyuiopqsdfghjklmwxcvbnABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$max = 51;
	for($i=0; $i < $n; ++$i)
	{
		$nomes .= $a{mt_rand(0, $max)};
	}
	return $nomes;
}
function carregaCacheArquivo(){
	global $nomeArq;
	if(file_exists($nomeArq.".json")){
		header("Content-type: application/json");
		readfile($nomeArq.".json");
		return true;
	}
	return false;
}

function pegaDadosJ(){
	global $oMap, $tema, $versao;
	set_time_limit(0);
	$layer = $oMap->getlayerbyname($tema);
	$layer->set("status",MS_DEFAULT);
	$layer->set("template","none.htm");
	$items = pegaItens($layer,$oMap);
	$layer->querybyrect($oMap->extent);
	$layer->open();
	$res_count = $layer->getNumresults();
	$linhas = array();
	for ($i = 0; $i < $res_count; $i++){
		//echo $i." - <br>";
		if($versao == 6){
			$shape = $layer->getShape($layer->getResult($i));
		}
		else{
			$shape = $layer->getFeature($layer->getResult($i)->shapeindex);
		}
		$valores = array();
		foreach ($items as $item){
			$v = trim($shape->values[$item]);
			if(is_string($v)){
				$v = converteenc($v);
			}
			$valores[] = $v;
		}
		$linhas[] = array(
				"valores"=>$valores,
				"shape"=>$shape
		);
	}
	//verifica os tipos dos itens
	$n = 10;
	$ni = count($items);
	$tipos = array();
	if(count($linhas) <= 10){
		$n = count($linhas);
	}
	for ($j = 0; $j < $ni; $j++){
		$tipos[$j] = "string";
	}
	for ($i = 0; $i < $n; $i++){
		$valores = $linhas[$i]["valores"];
		for ($j = 0; $j < $ni; $j++){
			if($tipos[$j] == "string" && $valores[$j] != "" && is_numeric($valores[$j])){
				$tipos[$j] = "number";
			}
		}
	}
	$resultado = array(
			"items"=>$items,
			"tipos"=>$tipos,
			"features"=>$linhas
	);
	return $resultado;
}

function converteenc($texto){
	if (!mb_detect_encoding($texto,"UTF-8",true)){
		$texto = mb_convert_encoding($texto,"UTF-8","ISO-8859-1");
	}
	return $texto;
}
?>