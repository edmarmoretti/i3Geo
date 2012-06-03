<?php
/*
Title: Compactador de javascript

Compacta os arquivos js e css utilizados pelo I3Geo.

Deve ser executado sempre que forem feitas altera��es nos arquivos javascript existentes em classesjs ou nos arquivos de estilo existentes em css.

Licenca:

GPL2

i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist�rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

Este programa � software livre; voc� pode redistribu�-lo
e/ou modific�-lo sob os termos da Licen�a P�blica Geral
GNU conforme publicada pela Free Software Foundation;

Este programa � distribu�do na expectativa de que seja �til,
por�m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl�cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
Consulte a Licen�a P�blica Geral do GNU para mais detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere�o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.

Arquivo:

i3geo/classesjs/compactajs.php

*/
//
//compacta os arquivos do richdraw
//
echo "<pre>";
packer("../pacotes/richdraw/richdraw.js","../pacotes/richdraw/richdraw_compacto.js","Normal");
packer("../pacotes/richdraw/svgrenderer.js","../pacotes/richdraw/svgrenderer_compacto.js","Normal");
packer("../pacotes/richdraw/vmlrenderer.js","../pacotes/richdraw/vmlrenderer_compacto.js","Normal");
$s = inicia("../pacotes/richdraw/prototype.js");
$abre = fopen("../pacotes/richdraw/prototype_compacto.js", "wt");
$escreve = fwrite ($abre,$s);
$fecha = fclose ($abre);
$jsfiles = array(
"../pacotes/richdraw/richdraw_compacto.js",
"../pacotes/richdraw/svgrenderer_compacto.js",
"../pacotes/richdraw/vmlrenderer_compacto.js"
);
$buffer = "";
salvatudojs($jsfiles,$buffer,"../pacotes/richdraw/richdraw_tudo_compacto.js","js");
//
//compacta os arquivos do i3geo
//gera um arquivo compactado para cada um
//
packer("../pacotes/mobileesp/mdetect.js","../pacotes/mobileesp/mdetect_compacto.js","None");
packer("depreciados.js","compactados/depreciados_compacto.js","None");
packer("classe_arvoredecamadas.js","compactados/classe_arvoredecamadas_compacto.js","Normal");
packer("classe_arvoredetemas.js","compactados/classe_arvoredetemas_compacto.js","Normal");
packer("classe_util.js","compactados/classe_util_compacto.js","Normal");
packer("classe_calculo.js","compactados/classe_calculo_compacto.js","Normal");
packer("classe_maparef.js","compactados/classe_maparef_compacto.js","Normal");
packer("classe_janela.js","compactados/classe_janela_compacto.js","Normal");
packer("dicionario.js","compactados/dicionario_compacto.js","Normal");
packer("classe_idioma.js","compactados/classe_idioma_compacto.js","Normal");
packer("classe_ajuda.js","compactados/classe_ajuda_compacto.js","Normal");
packer("classe_configura.js","compactados/classe_configura_compacto.js","Normal");
packer("classe_navega.js","compactados/classe_navega_compacto.js","Normal");
packer("classe_coordenadas.js","compactados/classe_coordenadas_compacto.js","Normal");
packer("classe_gadgets.js","compactados/classe_gadgets_compacto.js","Normal");
packer("classe_eventos.js","compactados/classe_eventos_compacto.js","Normal");
packer("classe_barradebotoes.js","compactados/classe_barradebotoes_compacto.js","Normal");
packer("classe_guias.js","compactados/classe_guias_compacto.js","Normal");
packer("classe_selecao.js","compactados/classe_selecao_compacto.js","Normal");
packer("classe_mapa.js","compactados/classe_mapa_compacto.js","Normal");
packer("classe_desenho.js","compactados/classe_desenho_compacto.js","Normal");
packer("classe_tema.js","compactados/classe_tema_compacto.js","Normal");
packer("classe_analise.js","compactados/classe_analise_compacto.js","Normal");
packer("classe_php.js","compactados/classe_php_compacto.js","Normal");
packer("classe_interface.js","compactados/classe_interface_compacto.js","Normal");
packer("classe_i3geo.js","compactados/classe_i3geo_compacto.js","Normal");
packer("dicionario_ajuda.js","compactados/dicionario_ajuda_compacto.js","Normal");
packer("classe_social.js","compactados/classe_social_compacto.js","Normal");
//packer("../ferramentas/funcoes.js","../ferramentas/funcoes_compacto.js","Normal");
packer("../pacotes/yui290/build/container/container.js","../pacotes/yui290/build/container/container_compacto.js","Normal");
packer("../pacotes/yui290/build/container/container_core.js","../pacotes/yui290/build/container/container_core_compacto.js","Normal");
packer("../pacotes/yui290/build/utilities/utilities.js","../pacotes/yui290/build/utilities/utilities_compacto.js","Normal");
packer("../pacotes/yui290/build/treeview/treeview.js","../pacotes/yui290/build/treeview/treeview_compacto.js","Normal");
packer("../pacotes/yui290/build/carousel/carousel-min.js","../pacotes/yui290/build/carousel/carousel_compacto.js","Normal");
packer("../pacotes/yui290/build/resize/resize-min.js","../pacotes/yui290/build/resize/resize_compacto.js","Normal");
packer("../pacotes/yui290/build/progressbar/progressbar-min.js","../pacotes/yui290/build/progressbar/progressbar_compacto.js","Normal");
packer("../pacotes/cpaint/cpaint2.inc.js","../pacotes/cpaint/cpaint2_compacto.inc.js","Normal");
packer("../pacotes/balloon-tooltips/htdocs/js/balloon.config.js","../pacotes/balloon-tooltips/htdocs/js/balloon_compacto.config.js","Normal");
packer("../pacotes/balloon-tooltips/htdocs/js/balloon.js","../pacotes/balloon-tooltips/htdocs/js/balloon_compacto.js","Normal");
//packer("../pacotes/eudock/js/euDock.2.0.js","../pacotes/eudock/js/euDock.2.0_compacto.js","Normal");
//packer("../pacotes/eudock/js/euDock.Image.js","../pacotes/eudock/js/euDock.Image_compacto.js","Normal");

//
//gera um �nico js para a inicializa��o do I3Geo
//
$jsfiles = array(
"../pacotes/mobileesp/mdetect_compacto.js",
"../pacotes/proj4js/lib/proj4js-compressed.js",
"../pacotes/cpaint/cpaint2_compacto.inc.js",
"../pacotes/yui290/build/yahoo/yahoo-min.js",
"../pacotes/yui290/build/yahoo-dom-event/yahoo-dom-event.js",
"../pacotes/yui290/build/dom/dom-min.js",
"../pacotes/yui290/build/utilities/utilities_compacto.js",
"../pacotes/yui290/build/container/container_core_compacto.js",
"../pacotes/yui290/build/menu/menu-min.js",
"../pacotes/yui290/build/logger/logger-min.js",
"../pacotes/yui290/build/dragdrop/dragdrop-min.js",
"../pacotes/yui290/build/slider/slider-min.js",
"../pacotes/yui270/build/animation/animation-min.js",
"../pacotes/yui290/build/container/container_compacto.js",
"../pacotes/yui290/build/element/element-min.js",
"../pacotes/yui290/build/tabview/tabview-min.js",
"../pacotes/yui290/build/treeview/treeview_compacto.js",
"../pacotes/yui290/build/button/button-min.js",
"../pacotes/yui290/build/carousel/carousel_compacto.js",
"../pacotes/yui290/build/json/json-min.js",
"../pacotes/yui290/build/resize/resize_compacto.js",
"../pacotes/yui290/build/progressbar/progressbar_compacto.js",
"../pacotes/balloon-tooltips/htdocs/js/balloon_compacto.config.js",
"../pacotes/balloon-tooltips/htdocs/js/balloon_compacto.js",
"compactados/classe_i3geo_compacto.js",
"compactados/classe_util_compacto.js",
"compactados/dicionario_compacto.js",
"compactados/classe_idioma_compacto.js",
"compactados/classe_php_compacto.js",
"compactados/classe_configura_compacto.js",
"compactados/depreciados_compacto.js",
"compactados/classe_calculo_compacto.js",
"compactados/classe_desenho_compacto.js",
"compactados/classe_interface_compacto.js",
"compactados/classe_mapa_compacto.js",
"compactados/classe_tema_compacto.js",
"compactados/classe_analise_compacto.js",
"compactados/classe_maparef_compacto.js",
"compactados/classe_ajuda_compacto.js",
"compactados/classe_janela_compacto.js",
"compactados/classe_guias_compacto.js",
"compactados/classe_arvoredecamadas_compacto.js",
"compactados/classe_navega_compacto.js",
"compactados/classe_eventos_compacto.js",
"compactados/classe_arvoredetemas_compacto.js",
"compactados/classe_barradebotoes_compacto.js",
"../pacotes/richdraw/richdraw_tudo_compacto.js",
"compactados/classe_coordenadas_compacto.js",
"compactados/classe_gadgets_compacto.js",
"compactados/classe_social_compacto.js",
"../pacotes/eudock/js/euDock.2.0.js",
"../pacotes/eudock/js/euDock.Image.js"
);

$buffer .= "\$i = function(id){return document.getElementById(id);};\n";
salvatudojs($jsfiles,$buffer,"i3geo_tudo_compacto46.js","js");
//
//gera um �nico css
//

$cssfiles = array(
"../css/geral.css",
"../css/botoes2.css",
"../css/documentation.css",
"../pacotes/yui290/build/logger/assets/skins/sam/logger.css",
"../pacotes/yui290/build/fonts/fonts-min.css",
"../pacotes/yui290/build/reset-fonts-grids/reset-fonts-grids.css",
"../pacotes/yui290/build/grids/grids-min.css",
"../pacotes/yui290/build/menu/assets/skins/sam/menu.css",
"../pacotes/yui290/build/autocomplete/assets/skins/sam/autocomplete.css",
"../pacotes/yui290/build/container/assets/skins/sam/container.css",
"../pacotes/yui290/build/tabview/assets/skins/sam/tabview.css",
"../pacotes/yui290/build/treeview/assets/skins/sam/treeview.css",
"../pacotes/yui290/build/carousel/assets/skins/sam/carousel.css",
"../pacotes/yui290/build/slider/assets/skins/sam/slider.css",
"../pacotes/yui290/build/resize/assets/skins/sam/resize.css",
"../pacotes/yui290/build/progressbar/assets/skins/sam/progressbar.css",
"../css/corrigeyui_geral.css",
"../mashups/theme/default/style.css",
"../mashups/openlayers.css"
); 

$buffer = "";
salvatudojs($cssfiles,$buffer,"../css/i3geo46.css","css");
//css das ferramentas
$cssfiles = array(
"../css/button.css",
"../css/ferramentas.css",
"../pacotes/yui290/build/container/assets/skins/sam/container.css",
"../pacotes/yui290/build/menu/assets/skins/sam/menu-skin.css",
"../css/tabview.css",
);
$buffer = "";
foreach ($cssfiles as $f)
{
	$abre = fopen($f, "r");
	while (!feof($abre))
	{$buffer .= fgets($abre);}
	fclose($abre);
	$buffer .= "\n";
}
$abre = fopen("../css/i3geo_ferramentas46.css", "wt");
$escreve = fwrite ($abre,$buffer);
$fecha = fclose ($abre);
chmod("../css/i3geo_ferramentas46.css",0777);
//
//compacta os c�digos para o Mashup do OpenLayers
//
$jsfiles = array(
"../pacotes/yui290/build/yahoo-dom-event/yahoo-dom-event.js",
"../pacotes/yui290/build/dragdrop/dragdrop-min.js",
"../pacotes/yui290/build/container/container-min.js",
"../classesjs/compactados/classe_calculo_compacto.js",
"../classesjs/compactados/classe_util_compacto.js",
"../pacotes/openlayers/OpenLayers211.js",
"../mashups/openlayers.js.php"
);
$buffer = "";
salvatudojs($jsfiles,$buffer,"../mashups/openlayers_compacto.js","js");
$jsfiles = array(
"../pacotes/yui290/build/fonts/fonts-min.css",
"../pacotes/yui290/build/container/assets/skins/sam/container.css",
"../mashups/theme/default/style.css",
"../mashups/openlayers.css",
);
$buffer = "";
salvatudojs($jsfiles,$buffer,"../mashups/openlayers_compacto.css","css");

function inicia($arquivo)
{
	$abre = fopen($arquivo, "r");
	while (!feof($abre))
	{
		$buffer = fgets($abre);
		$maparray[] = $buffer."kkkk";
	}
	fclose($abre);
	$c = compress(implode("",$maparray));
	$c = str_replace("kkkk","\n",$c);
	$c = str_replace("kkk","",$c);
	$c = str_replace(";\n",";",$c);
	$c = str_replace("{\n","{",$c);
	$c = str_replace("\n}","}",$c);
	$c = str_replace(")\n",")",$c);
	$c = str_replace(" \n","",$c);
	$c = str_replace("\n}","}\n",$c);
	return $c;
}
function compress($code)
{ // Remove multiline comment
$mlcomment = '/\/\*(?!-)[\x00-\xff]*?\*\//';
$code = preg_replace($mlcomment,"",$code);

// Remove single line comment
$slcomment = '/[^:]\/\/.*/';
$code = preg_replace($slcomment,"",$code);

// Remove extra spaces
$extra_space = '/\s+/';
$code = preg_replace($extra_space," ",$code);

// Remove spaces that can be removed
$removable_space = '/\s?([\{\};\=\(\)\\\/\+\*-])\s?/';
$code = preg_replace('/\s?([\{\};\=\(\)\/\+\*-])\s?/',"\\1",$code);
return $code;
}
function packer($src,$out,$tipo="None")
{
	if(file_exists($out))
	{unlink($out);}
	require_once '../pacotes/packer/class.JavaScriptPacker.php';
	$script = file_get_contents($src);
	$script = str_replace("if(typeof(console)","//if(typeof(console)",$script);
	$t1 = microtime(true);
	$packer = new JavaScriptPacker($script, 0, true, false);
	$packed = $packer->pack();
	$t2 = microtime(true);
	$time = sprintf('%.4f', ($t2 - $t1) );
	echo 'script ', $src, ' packed in ' , $out, ', in ', $time, ' s.', "\n";
	file_put_contents($out, $packed);
	chmod($out,0777);
}
function salvatudojs($jsfiles,$buffer,$final,$tipo)
{
	//junta todos os js em um unico
	if(file_exists($final))
	{unlink($final);}	
	if(file_exists($final.".php"))
	{unlink($final.".php");}	

	foreach ($jsfiles as $f)
	{
		echo $f;
/*
		$abre = fopen($f, "r");
		while (!feof($abre))
		{
			$linha = fgets($abre,FILE_IGNORE_NEW_LINES);
			if($linha != "\r\n")
			$buffer .= $linha;
		}
		fclose($abre);
*/
		$linhas = file($f);
		foreach($linhas as $linha){
			$linha = trim(preg_replace('#[\r\n]#', '', $linha)); 
			if($linha != "")
			{$buffer .= $linha."\n";}
		}
	}

	$abre = fopen($final, "wt");
	$escreve = fwrite ($abre,$buffer);
	$fecha = fclose ($abre);
	

	chmod($final,0777);
	//gzip
	$abre = fopen($final, "r");
	if ($tipo == "js")
	$buffer = "<?php error_reporting(0);if(extension_loaded('zlib')){ob_start('ob_gzhandler');} header(\"Content-type: text/javascript\"); ?>";
	else
	$buffer = "<?php error_reporting(0);if(extension_loaded('zlib')){ob_start('ob_gzhandler');} header(\"Content-type: text/css\"); ?>";
	while (!feof($abre))
	{$buffer .= fgets($abre);}
	fclose($abre);
	$buffer .= "\n";
	$buffer .= "<?php if(extension_loaded('zlib')){ob_end_flush();}?>";
	$abre = fopen($final.".php", "wt");
	$escreve = fwrite ($abre,$buffer);
	$fecha = fclose ($abre);
	chmod($final.".php",0777);
}
?>