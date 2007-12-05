<?php
/*
Title: Shape

Manipula��o de shapefile.

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

File: i3geo/classesphp/classe_shp.php

19/6/2007
*/
/*
Class: SHP
*/
class SHP
{
	/*
	Variable: $mapa
	
	Objeto mapa
	*/
	protected $mapa;
	/*
	Variable: $arquivo
	
	Arquivo map file
	*/
	protected $arquivo;
	/*
	Variable: $layer
	
	Objeto layer
	*/
	protected $layer;
	/*
	Variable: $nome
	
	Nome do layer
	*/
	protected $nome;
/*
function: __construct

Cria um objeto map e seta a variavel tema 

parameters:

$map_file - Endere�o do mapfile no servidor.

$tema - nome do tema
*/
	function __construct($map_file,$tema="")
	{
  		$this->mapa = ms_newMapObj($map_file);
  		$this->arquivo = $map_file;
  		if ($tema != "")
  		{
  			$this->layer = $this->mapa->getlayerbyname($tema);
  			$this->nome = $tema;
  		}
	}
/*
function: salva

Salva o mapfile atual 
*/	
 	function salva()
 	{
	  	if (connection_aborted()){exit();}
	  	$this->mapa->save($this->arquivo);
	}
/*
function: criaSHPvazio

Cria um shape file do tipo pontual vazio no diret�rio local

return:
Nome do tema criado.
*/
	function criaSHPvazio()
	{
		require_once "../pacotes/phpxbase/api_conversion.php";
		$diretorio = dirname($this->arquivo);
		$tipol = MS_SHP_POINT;
		$novonomelayer = nomeRandomico();
		$nomeshp = $diretorio."/".$novonomelayer;
		$l = criaLayer($this->mapa,MS_LAYER_POINT,MS_DEFAULT,"Ins","SIM");
		$novoshpf = ms_newShapefileObj($nomeshp, $tipol);
		$novoshpf->free();
		$def[] = array("ID","C","50");
		$db = xbase_create($nomeshp.".dbf", $def);
		xbase_close($db);
		$novoshpf = ms_newShapefileObj($nomeshp.".shp", -2);
		$novoshpf->free();
		$l->setmetadata("tema",$novonomelayer." pontos");
		$l->setmetadata("TEMALOCAL","SIM");
		$l->setmetadata("DOWNLOAD","sim");
		$l->set("data",$nomeshp);
		$l->set("name",$novonomelayer);
		$classe = $l->getclass(0);
		$estilo = $classe->getstyle(0);
		$estilo->set("symbolname","ponto");
		$estilo->set("size",6);
		$cor = $estilo->color;
		$cor->setrgb(255,210,0);
		$cor = $estilo->outlinecolor;
		$cor->setrgb(255,0,0);
		return($novonomelayer);
	}
/*
function: insereSHP

Insere um ponto em um shape file no diret�rio local

parameters:
$xy - X e y do novo ponto, separados por espa�os. Pode ser mais de um ponto.
*/
	function insereSHP($xy)
	{
		require_once "../pacotes/phpxbase/api_conversion.php";
		$xy = explode(" ",$xy);
		$data = $this->layer->data;
		$data = explode(".shp",$data);
		$data = $data[0];
		$items = pegaItens($this->layer);
		$dbname = $data.".dbf";
		$db=xbase_open($dbname,2);
		for($i=0;$i<(count($xy) / 2);$i++)
		{
			$reg = array();
			foreach ($items as $ni)
			{$reg[] = "-";}
			xbase_add_record($db,$reg);
		}
		xbase_close($db);
		if (@$shapefileObj = ms_newShapefileObj($data,-2))
		{
			for($i=0;$i<(count($xy));$i=$i+2)
			{
				$poPoint = ms_newpointobj();
				$poPoint->setXY($xy[$i],$xy[$i+1]);
				$shapefileObj->addpoint($poPoint);
			}
			$shapefileObj->free();
			return("ok");
		}
		else
		{return("erro");}
	}
/*
function: insereSHPgrafico

Insere um ponto em um shape file no diret�rio local como um grafico

parameters:
$tipo - Tipo de gr�fico

$x - Coordenada x.

$y - Coordenada Y.

$itens - Lista de itens

$imgurl - Endere�o da imagem atual

$width - Largura do gr�fico

$inclinacao - Inclina��o do gr�fico

$shadow_height - Tamanho da sombra do gr�fico

Include:
<classe_atributos.php>, <graficopizza.php>
*/
	function insereSHPgrafico($tipo,$x,$y,$itens,$imgurl,$width,$inclinacao,$shadow_height)
	{
		//nome do novo tema
		$temaedit = nomeRandomico();
		//pega os valores
		include_once("classe_atributos.php");
		$m = new Atributos($this->arquivo,$this->tema);
		$shape = $m->identificaQBP($this->nome,$x,$y,$this->arquivo,0,"","shape");
		if ((is_array($shape)) && ($shape[0] == " "))
		{
			return("erro.Nenhum valor encontrado");
		}
		else
		{
			$itens = explode("*",$itens);
			foreach ($itens as $i)
			{
				$ii = explode(",",$i);
				$v = $shape->values[$ii[0]];
				if (!is_numeric($v))
				{return("erro. Dados nao numericos.");}
				$valor[] = $v;
				$cor[] = $ii[1].",".$ii[2].",".$ii[3];
			}
			$data = implode("*",$valor);
			$cores = implode("*",$cor);
			if ($tipo == "pizza")
			{
				//gera a figura
				include_once("graficopizza.php");
				$res = graficopizza($data,$width,$inclinacao,$shadow_height,$cores,$imgurl,$this->arquivo,$temaedit);
				$img = explode(",",$res);
			}
			//insere simbolo
			$nomes = nomeRandomico();
			$nId = ms_newsymbolobj($this->mapa, "foto");
			$oSymbol = $this->mapa->getsymbolobjectbyid($nId);
			$oSymbol->set("inmapfile", MS_TRUE);
			$oSymbol->set("type",MS_SYMBOL_PIXMAP);
			$oSymbol->setimagepath($img[0]);
			$oSymbol->set("name",$nomes);
			$pinlayer = criaLayer($this->mapa,MS_LAYER_POINT,MS_DEFAULT,"Gr�fico (".$temaedit.")","SIM");
			$c = $pinlayer->getclass(0);
			$e = $c->getstyle(0);
			$pinlayer->set("name",$temaedit);
			$c->set("name","");
			if(!isset($tamanho)){$tamanho = 50;}
			$e->set("size",$tamanho);
			$e->set("symbolname",$nomes);
			$pinlayer->set("transparency",MS_GD_ALPHA);
			$shp = ms_newshapeobj(MS_SHAPE_POINT);
			$lin = ms_newlineobj();
			$lin->addxy($x,$y);
			$shp->add($lin);
			$pinlayer->addfeature($shp);
			$this->salva();
			return("ok");
		}
	}
/*
function: listaPontosShape

Lista as coordenadas dos pontos de um shapefile

return:
string - xy
*/
	function listaPontosShape()
	{
		$this->layer->open();
		$this->layer->whichShapes($this->mapa->extent);
		$xy = array();
		while ($shape = $this->layer->nextShape())
		{
			$lin = $shape->line(0);
			$pt = $lin->point(0);
			$xy[] = array("x"=>$pt->x,"y"=>$pt->y);
		}
		$this->layer->close();
		return $xy;
	}
/*
function: shpPT2shp

Cria um tema linear ou poligonal com base em pontos de um tema pontual.

parameters:
$locaplic - Localiza��o do I3geo

$para - linha|poligono
*/
	function shpPT2shp($locaplic,$para)
	{
		//para manipular dbf
		require_once "../pacotes/phpxbase/api_conversion.php";
		$this->layer->set("template","none.htm");
		$diretorio = dirname($this->arquivo);
		$tipol = MS_SHP_ARC;
		$tipos = MS_SHAPE_LINE;
		if ($para == "poligono")
		{
	 		$tipol = MS_SHP_POLYGON;
	 		$tipos = MS_SHAPE_POLYGON;
		}
		$novonomelayer = nomeRandomico();
		$nomeshp = $diretorio."/".$novonomelayer;
		$items = pegaItens($this->layer);
		// cria o dbf
		$def = array();
		foreach ($items as $ni)
		{
			$temp = strtoupper($ni);
			$def[] = array($temp,"C","254");
		}
		$db = xbase_create($nomeshp.".dbf", $def);
		$dbname = $nomeshp.".dbf";
		$reg = array();
		$novoshpf = ms_newShapefileObj($nomeshp.".shp", $tipol);
		$this->layer->open();
		$this->layer->whichShapes($this->mapa->extent);
		$linha = ms_newLineObj();
		while ($shape = $this->layer->nextShape())
		{
			$lin = $shape->line(0);
			$pt = $lin->point(0);
			$linha->add($pt);
		}
		if ($para == "poligono")
		{
			$linha->add($linha->point(0));
		}
		$shape = ms_newShapeObj($tipos);
		$shape->add($linha);
		foreach ($items as $ni)
		{$reg[] = "-";}
		$novoshpf->addShape($shape);
		xbase_add_record($db,$reg);
		$novoshpf->free();
		$this->layer->close();
		xbase_close($db);
		//cria o novo layer
		$layer = criaLayer($this->mapa,MS_LAYER_LINE,MS_DEFAULT,"",$metaClasse="SIM");
		$layer->set("data",$nomeshp);
		$layer->setmetadata("tema",$novonomelayer." (linear)");
		$layer->setmetadata("download","sim");
		$layer->setmetadata("temalocal","sim");
		$classe = $layer->getclass(0);
		$estilo = $classe->getstyle(0);
		$estilo->set("symbolname","linha");
		if ($para == "poligono")
		{
			$layer->set("type",MS_LAYER_POLYGON);
			$layer->set("transparency","50");
			$layer->setmetadata("tema",$novonomelayer." (poligonal)");
		}
		return("ok");
	}
}
?>