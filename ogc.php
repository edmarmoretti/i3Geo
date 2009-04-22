<?php
/*
Title: ogc.php

Gera web services nos padr�es OGC baseado no menutemas.xml

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

File: i3geo/ogc.php

19/6/2007

Include:
<ms_configura.php> <classesphp/pega_variaveis.php>

Parameters:

lista - se for igual a "temas", mostra uma lista dos temas dispon�veis

ajuda - se for definida na URL, mostra uma ajuda ao usu�rio

tema - nome do tema do servi�o. Se for definido, o web service conter� apenas o tema.

intervalo - valor inicial e final com o n�mero de temas que ser�o mostrados no servi�o

legenda - mostra a legenda no corpo do mapa sim|nao

perfil - perfil utilizado para escolher os menus

About: Exemplos

ogc.php?lista=temas

ogc.php?tema=bioma

ogc.php?intervalo=0,50
*/
error_reporting(0);
if (!function_exists('ms_GetVersion'))
{
	if (strtoupper(substr(PHP_OS, 0, 3) == 'WIN'))
	{
		if(!@dl('php_mapscript_48.dll'))
		dl('php_mapscript.dll');
	}
	else
	{dl('php_mapscript.so');}
}
require_once("classesphp/carrega_ext.php");
include("ms_configura.php");
include("classesphp/pega_variaveis.php");
include("classesphp/classe_menutemas.php");
//
//pega os endere�os para compor a url de chamada do gerador de web services
//ogc.php
//
$protocolo = explode("/",$_SERVER['SERVER_PROTOCOL']);
$protocolo = $protocolo[0];
$protocolo1 = strtolower($protocolo) . '://'.$_SERVER['SERVER_NAME'];
$protocolo = strtolower($protocolo) . '://'.$_SERVER['SERVER_NAME'] .":". $_SERVER['SERVER_PORT'];
$urli3geo = str_replace("/ogc.php","",$protocolo.$_SERVER["PHP_SELF"]);
//
//pega a lista de menus que ser� processada
//se a vari�vel definida em ms_configura for = "", a busca � feita
//pelo m�todo Menutemas
//
if(!isset($perfil)){$perfil = "";}
if($menutemas != "" || is_array($menutemas))
{
	foreach($menutemas as $m)
	{
		$menus[] = $m["arquivo"];
	}

}
else
{
	$m = new Menutemas("",$perfil,$locsistemas,$locaplic,"",$urli3geo);
	foreach($m->pegaListaDeMenus() as $menu)
	{
		$menus[] = $menu["url"];
	}
}
if(!isset($menus))
$menus = array("menutemas/menutemas.xml");
//pega a lista de grupos
if ($lista == "temas")
{
	echo '<html><head><title>WMS</title><meta name="description" content="OGC"><meta name="keywords" content="WMS OGC mapa sig gis webmapping geo geoprocessamento interativo meio ambiente MMA cartografia geografia"> <meta name="robots" content="index,follow">';
	echo "<body><b>Lista de temas por grupos e subgrupos e endere�os de acesso aos dados por meio de Web Services WMS (os c�digos dos temas est�o em vermelho)</b><br><br>";
	$imprimir = "";
	foreach ($menus as $menu)
	{
		$xml = simplexml_load_file($menu);
		foreach($xml->GRUPO as $grupo)
		{
			$imprimegrupo = "<i>".mb_convert_encoding($grupo->GTIPO,"HTML-ENTITIES","auto")."</i>";
			foreach($grupo->SGRUPO as $sgrupo)
			{
				$imprimesubgrupo = mb_convert_encoding($sgrupo->SDTIPO,"HTML-ENTITIES","auto");
				foreach($sgrupo->TEMA as $tema)
				{
					if (mb_convert_encoding($tema->OGC,"HTML-ENTITIES","auto") == "")
					{				
						$imprimir .= $imprimegrupo."->".$imprimesubgrupo."<br>";
						$imprimir .= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
						$id = mb_convert_encoding($tema->TID,"HTML-ENTITIES","auto");
						$imprimir .= "<span style=color:red >".$id."</span>";
						$imprimir .= "&nbsp;-&nbsp;".mb_convert_encoding($tema->TNOME,"HTML-ENTITIES","auto")."&nbsp";
						$imprimir .= "&nbsp;<a href='".$urli3geo."/ogc.php?tema=".$id."&service=wms&request=getcapabilities' >Getcapabilities</a>";
						$imprimir .= "&nbsp;<a href='".$urli3geo."/ogc.php?tema=".$id."&SRS=EPSG:4291&WIDTH=500&HEIGHT=500&BBOX=-76.5125927,-39.3925675209,-29.5851853,9.49014852081&FORMAT=image/png&service=wms&version=1.1.0&request=getmap&layers=".$id."' >GetMap </a>";
						if (mb_convert_encoding($tema->TLINK,"HTML-ENTITIES","auto") != "")
						{$imprimir .= "&nbsp;&nbsp;<a href='".mb_convert_encoding($tema->TLINK,"HTML-ENTITIES","auto")."' >fonte</a>";}
						$imprimir .= "<br>";
					}
				}
			}
		}
	}
	echo $imprimir."</body></html>";
	return;
}
if (isset($ajuda))
{
	echo "<pre><b>Construtor de web services do I3Geo.</b><br><br>";
	echo "Esse utilit�rio usa o arquivo menutemas.xml para gerar web services no padr�o OGC.";
	echo "Para escolher um tema, utilize:<br>";
	echo "ogc.php?lista=temas - para listar os temas dispon�veis<br>";
	echo "Para usar esse web service, al�m dos par�metros normais, vc dever� incluir o par�metro &tema=,<br>";
	echo "ou seja,http://[host]/i3geo/ogc.php?tema=[c�digo do tema obtido do menutemas.xml]<br><br>";
	echo "Se n�o for desejado que um tema apare�a na lista, � necess�rio incluir a tag <OGC>nao</OGC> no registro do tema no arquivo menutemas.xml.<br>";
	echo "Utilize o parametro &intervalo=0,20 para definir o n�mero de temas.";
	return;
}
//
//cria o web service
//
include("classesphp/funcoes_gerais.php");
$req = ms_newowsrequestobj();
$tipo = "";
foreach ($_GET as $k=>$v)
{
	$req->setParameter($k, $v);
	if(strtolower($v) == "getcapabilities")
	{$tipo = "metadados";}
	if(strtolower($k) == "layers")
	{$tema = $v;}
	if(strtolower($k) == "layer")
	{$tema = $v;}
	//if(strtolower($k) == "srs")
	//{$SRS = $v;}
}
if(isset($tema) && $tipo != "metadados")
{$tipo = "";}
$req->setParameter("VeRsIoN","1.1.0");
$oMap = ms_newMapobj("aplicmap/ogcws.map");
//
//altera os caminhos das imagens
//
if((isset($legenda)) && ($legenda == "sim"))
{
	$leg = $oMap->legend;
	$leg->set("status",MS_EMBED);
}
$proto = "http" . ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == "on") ? "s" : "") . "://";
$server = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : $_SERVER['SERVER_NAME'];
$or = $proto.$server.$_SERVER['PHP_SELF'];
if((isset($tema)) && ($tema != "") && ($tipo=="metadados"))
{$or = $or."?tema=".$tema."&";}

$oMap->setmetadata("ows_onlineresource",$or);
$oMap->setmetadata("ows_title",$tituloInstituicao." - i3geo");
if (!isset($intervalo))
{$intervalo = "0,50";}
if ($tipo == "" || $tipo == "metadados")
{
	$tema = explode(" ",$tema);
	foreach ($tema as $tx)
	{
		$nmap = ms_newMapobj("temas/".$tx.".map");
		$ts = $nmap->getalllayernames();
		foreach ($ts as $t)
		{
			$l = $nmap->getlayerbyname($t);
			$l->setmetadata("ows_title",pegaNome($l));
			$l->setmetadata("ows_srs","EPSG:4291 EPSG:4326");
			//essa linha � necess�ria pq as vezes no mapfile n�o tem nenhum layer com o nome igual ao nome do mapfile
			if(count($ts)==1)
			{
				$l->set("name",$tx);
			}
			$l->setmetadata("gml_include_items","all");
			$l->set("dump",MS_TRUE);
			$l->setmetadata("WMS_INCLUDE_ITEMS","all");
			$l->setmetadata("WFS_INCLUDE_ITEMS","all");
			if($l->type == MS_LAYER_RASTER)
			{
				$c = $l->getclass(0);
				if ($c->name == "")
				{$c->name = " ";}
			}
			if (isset($postgis_mapa))
			{
				if ($postgis_mapa != "")
				{
				if ($layer->connectiontype == MS_POSTGIS)
				{
					$lcon = $l->connection;
					if (($lcon == " ") || ($lcon == "") || (in_array($lcon,array_keys($postgis_mapa))))
					{
						//
						//o metadata CONEXAOORIGINAL guarda o valor original para posterior substitui��o
						//				
						if(($lcon == " ") || ($lcon == ""))
						{
							$l->set("connection",$postgis_mapa);
							$l->setmetadata("CONEXAOORIGINAL",$lcon);
						}
						else
						{
							$l->set("connection",$postgis_mapa[$lcon]);
							$l->setmetadata("CONEXAOORIGINAL",$lcon);
						}					
					}
				}

				}
			}
			autoClasses(&$l,$oMap);
			ms_newLayerObj($oMap, $l);
		}
	}
}
else
{
	$conta = 0;
	$int = explode(",",$intervalo);
	$codigosTema = array();
	//var_dump($menus);exit;
	foreach ($menus as $menu)
	{	
		$xml = simplexml_load_file($menu);
		foreach($xml->GRUPO as $grupo)
		{
			foreach($grupo->SGRUPO as $sgrupo)
			{
				foreach($sgrupo->TEMA as $tm)
				{
					if (mb_convert_encoding($tm->OGC,"HTML-ENTITIES","auto") == "")
					{
						$codigosTema[] = mb_convert_encoding($tm->TID,"HTML-ENTITIES","auto");
					}
				}
			}		
		}
	}
	foreach($codigosTema as $codigoTema)
	{
		if (@ms_newMapobj("temas/".$codigoTema.".map"))
		{
			$nmap = ms_newMapobj("temas/".$codigoTema.".map");
			$ts = $nmap->getalllayernames();
			if (count($ts) == 1)
			{ 
				foreach ($ts as $t)
				{
					if ($oMap->getlayerbyname($t) == "")
					{
						$conta++;
						if (($conta >= $int[0]) && ($conta <= $int[1]))
						{
							$l = $nmap->getlayerbyname($t);
							$l->setmetadata("ows_title",pegaNome($l));
							$l->setmetadata("ows_srs","EPSG:4291 EPSG:4326");
							$l->set("status",MS_OFF);
							$l->setmetadata("gml_include_items","all");
							$l->set("dump",MS_TRUE);
							$l->setmetadata("WMS_INCLUDE_ITEMS","all");
							$l->setmetadata("WFS_INCLUDE_ITEMS","all");
							$l->setmetadata("ows_metadataurl_href",mb_convert_encoding($tm->TLINK,"HTML-ENTITIES","auto"));
							$l->setmetadata("ows_metadataurl_type","TC211");
							$l->setmetadata("ows_metadataurl_format","text/html");
							ms_newLayerObj($oMap, $l);
						}
					}
				}
			}
		}
	}
}
ms_ioinstallstdouttobuffer();
$oMap->owsdispatch($req);
$contenttype = ms_iostripstdoutbuffercontenttype();
header("Content-type: $contenttype");
ms_iogetStdoutBufferBytes();
ms_ioresethandlers();
?>