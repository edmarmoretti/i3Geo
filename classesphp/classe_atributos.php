<?php
/*
Title: Atributos

Processa a tabela de atributos de um tema.

Lista valores, consulta, etc.

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

File: classe_atributos.php

19/6/2007
*/
/*
Class: Atributos

*/
class Atributos
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
Function: __construct

Cria um objeto Atributos 

parameters:

$map_file - Endere�o do mapfile no servidor.

$tema - nome do tema
*/
	function __construct($map_file,$tema="")
	{
  		$this->mapa = ms_newMapObj($map_file);
  		$this->arquivo = $map_file;
 		$this->layer = $this->mapa->getlayerbyname($tema);
  		$this->nome = $tema;
	}
/*
function: salva

Salva o mapfile atual
 
*/	
 	function salva()
 	{
	  	$this->mapa->save($this->arquivo);
	}

/*
function: extensaoShape

Pega a extens�o geogr�fica de um objeto shape.

parameters:
Objeto shape

return:
xmin ymin xmax ymax separados por espa�o.
*/
	function extensaoShape($shape)
	{
		$ext = $shape->bounds->minx." ".$shape->bounds->miny." ".$shape->bounds->maxx." ".$shape->bounds->maxy;
		if ($shape->type == MS_SHP_POINT)
		{
			$minx = $shape->bounds->minx;
			$minx = $minx - 0.01;
			$maxx = $shape->bounds->maxx;
			$maxx = $maxx + 0.01;
			$ext = $minx." ".$shape->bounds->miny." ".$maxx." ".$shape->bounds->maxy;
		}
		return $ext;
	}
/*
function - extensaoRegistro

Pega a extens�o geogr�fica de um registro na tabela de atributos de um tema.

parameters:
$registro - �ndice do registro que ser� consultado.
*/
	function extensaoRegistro($registro)
	{
		$this->layer->set("template","none.htm");
		$this->layer->setfilter("");
		$ext = "";
		//procura o registro e pega a extens�o geogr�fica
		if (@$this->layer->open() == MS_SUCCESS)
		{
			$items = pegaItens($this->layer);
			//$qstring = "/.*/";
			//if($this->layer->connectiontype == MS_POSTGIS)
			//{$qstring = $items[0].' ~* \'^.\'  ';}
			if (@$this->layer->queryByrect($this->mapa->extent) == MS_SUCCESS)
			{
				$this->layer->open();
				$shape = $this->layer->getshape(-1, $registro);
				$fechou = $this->layer->close();
				$ext = $this->extensaoShape($shape);
			}
		}
		return($ext);
	}
/*
function: listaItens

Lista os itens de um tema.
*/
	function listaItens()
	{
		//verifica se o tema � um grupo e cria um array com a lista de temas
		$vermultilayer = new vermultilayer();
		$vermultilayer->verifica($this->arquivo,$this->nome);
		if ($vermultilayer->resultado == 1) // o tema e multi layer
		{$l = $vermultilayer->temasvisiveis;}
		else
		{$l[] = $this->nome;}
		//pega os itens de cada layer
		$lista = array();
		foreach ($l as $tema)
		{
			$layer = $this->mapa->getlayerbyname($tema);
			//pega o nome correto do tema
			$nometmp = pegaNome($layer);
			$nomestemas[] = $nometmp;
			if ($layer->data != "")
			{
					$items = pegaItens($layer);
					foreach ($items as $item)
					{
				 		$lista[] = array("item"=>$item,"nome"=>$nometmp,"tema"=>$tema);
					}
			}
		}
		return (array("valores"=>$lista,"temas"=>$l,"nomes"=>$nomestemas));
	}
/*
function: itensTexto

Pega todos os valores dos itens de uma tabela de um tema.

parameters:
$tipo - Tipo de busca brasil|null
*/
	function itensTexto($tipo)
	{
		if ($tipo == "brasil")
		{$this->mapa = extPadrao($this->mapa);}
		$this->layer->set("template","none.htm");
		$this->layer->setfilter("");
		//le o arquivo de query se existir e checa se existe sele��o para o tema
		$items = pegaItens($this->layer);
		$existesel = "nao";
		if (file_exists($this->arquivo."qy"))
		{$this->mapa->loadquery(($this->arquivo)."qy");}
		if ($this->layer->getNumresults() > 0){$existesel = "sim";}
		//$qstring = "/.*/";
		//if($this->layer->connectiontype == MS_POSTGIS)
		//{$qstring = $items[0].' ~* \'^.\'  ';}
		if ($existesel == "nao")
		{$this->layer->querybyrect($this->mapa->extent);}
		$this->layer->open();
		$registros[] = array();
		$res_count = $this->layer->getNumresults();
		for ($i = 0; $i < $res_count; $i++)
		{
			$valitem = array();
			foreach ($items as $item)
			{
				$result = $this->layer->getResult($i);
				$shp_index  = $result->shapeindex;
				$shape = $this->layer->getshape(-1, $shp_index);
				$v = trim($shape->values[$item]);
				if (function_exists("mb_convert_encoding"))
				{$v = mb_convert_encoding($v,"UTF-8","ISO-8859-1");}
				$valitem[] = $v;
			}
			$registros[] = implode(";",$valitem);
		}
		$fechou = $this->layer->close();
		if (function_exists("mb_convert_encoding"))
		{$res = mb_convert_encoding(implode("|",$registros),"UTF-8","ISO-8859-1");}
		else
		{$res = implode("|",$registros);}
		return(array("itens"=>implode(";",$items),"valores"=>$registros));
	}
/*
function: listaRegistros

Pega todos os valores dos itens de uma tabela de um tema.

O range de busca pode ser limitado.

parameters:
$itemtema - Tema que ser� processado.

$tipo - Tipo de abrang�ncia espacial (brasil ou mapa).

$unico - Lista valores �nicos (sim ou vazio).

$inicio - Inicia do registro.

$fim - Termina no registro.

$tipolista - Indica se ser�o mostrados todos os registros ou apenas os selecionados (tudo|selecionados)
*/
	function listaRegistros($itemtema,$tipo,$unico,$inicio,$fim,$tipolista)
	{
		$resultadoFinal = array();
		if (!isset($tipolista)){$tipolista = "tudo";}
		if (!isset($inicio)){$inicio = 0;}
		if (!isset($fim)){$fim = "";}
		//se tipo for igual a brasil, define a extens�o geogr�fica total
		if ($tipo == "brasil")
		{$this->mapa = extPadrao($this->mapa);}
		$this->layer->set("template","none.htm");
		$this->layer->setfilter("");
		if ($this->layer->data == "")
		{return "erro. O tema n�o tem tabela";}
		//pega os valores
		if (!isset($itemtema))
		{$items = pegaItens($this->layer);}
		else
		{$items[] = $itemtema;}
		$resultadoFinal[] = array("itens"=>$items);
		if (file_exists($this->arquivo."qy"))
		{$this->mapa->loadquery(($this->arquivo)."qy");}
		$indxlayer = $this->layer->index;
		$this->layer->open();
		$res_count = $this->layer->getNumresults();
		$registros = array();
		//lista apenas os selecionados
		if ($tipolista == "selecionados")
		{
			$chk = "CHECKED";
			if ($fim != "")
			{
				if (($res_count >= $fim) && ($fim < $res_count))
				{$res_count = $fim;}		
			}
			for ($i = $inicio; $i < $res_count; $i++)
			{
				$valitem = array();
				foreach ($items as $item)
				{
					$result = $this->layer->getResult($i);
					$shp_index  = $result->shapeindex;
					$shape = $this->layer->getshape(-1, $shp_index);
					$valori = trim($shape->values[$item]);
					if (function_exists("mb_convert_encoding"))
					{$valori = mb_convert_encoding($valori,"UTF-8","ISO-8859-1");}
					$valitem[] = array("item"=>$item,"valor"=>$valori);
				}
				$registros[] = array("indice"=>$shp_index,"valores"=>$valitem,"status"=>$chk);
			}
			$resultadoFinal[] = array("registros"=>$registros);	 	
		}
		if ($tipolista == "tudo")
		{
			$shp_atual = array();
			for ($i = 0; $i < $res_count;$i++)
			{
				$rc = $this->layer->getResult($i);
				$shp_atual[] = $rc->shapeindex;
			}
			$this->layer->close();
			$chk = "";
			//$qstring = "/.*/";
			//if($this->layer->connectiontype == MS_POSTGIS)
			//{$qstring = $items[0].' ~* \'^.\'  ';}
			if (@$this->layer->queryByrect($this->mapa->extent) == MS_SUCCESS)
			{
				$res_count = $this->layer->getNumresults();
				if ($fim != "")
				{
					if (($res_count >= $fim) && ($fim < $res_count))
					{$res_count = $fim;}		
				}
				$this->layer->open();
				for ($i = $inicio; $i < $res_count; $i++)
				{
					$valitem = array();
					foreach ($items as $item)
					{
						$result = $this->layer->getResult($i);
						$shp_index  = $result->shapeindex;
						$shape = $this->layer->getshape(-1, $shp_index);
						$valori = ($shape->values[$item]);
						if (function_exists("mb_convert_encoding"))
						{$valori = mb_convert_encoding($valori,"UTF-8","ISO-8859-1");}
						$valitem[] = array("item"=>$item,"valor"=>$valori);
					}
					if (in_array($shp_index,$shp_atual))
					{$chk = "CHECKED";}
					$registros[] = array("indice"=>$shp_index,"valores"=>$valitem,"status"=>$chk);
					$chk = "";
				}
				$this->layer->close();
			}
			$resultadoFinal[] = array("registros"=>$registros);
		}
		return($resultadoFinal);
	}
/*
function: buscaRegistros

Procura valores em uma tabela que aderem a uma palavra de busca.

parameters:
$palavra - Palavra que ser� procurada.

$lista - Lista de busca no formato item;tema,item;tema.

$tipo - Tipo de busca exata|qualquer.

$onde - Tipo de abrang�ncia espacial (brasil ou mapa)
*/
	function buscaRegistros($palavra,$lista,$tipo,$onde)
	{
		if ($onde == "mapa")
		{$this->mapa = extPadrao($this->mapa);}
		$ptvs = explode(",",$lista);
		//monta a lista de temas que serao utilizados
		foreach ($ptvs as $p)
		{
			$pp = explode(";",$p);
			$temas[] = $pp[1];
		}
		$temas = array_unique($temas);
		//monta a lista de itens por tema
		foreach ($temas as $tema)
		{
			$temp = array();
			foreach ($ptvs as $p)
			{
				$pp = explode(";",$p);
				if ($pp[1] == $tema)
				{$temp[] = $pp[0];}
				$temasi[$tema] = $temp;
			}
		}
		$encontrado = "nao";
		$palavra = trim($palavra);
		foreach ($temas as $tema)
		{
			$registros = array();
			$items = $temasi[$tema];
			$l = $this->mapa->getlayerbyname($tema);
			if ($l->data == "")
			{return "Erro. O tema n�o tem tabela";}
			$filtro = $l->getfilter();
			if ($filtro != ""){$l->setfilter("");}
			$buscas = "�������������������";
			$trocas = "AAOOOaaaaoooouuieec";
			$l->open();
			$l->whichShapes($this->mapa->extent);
			$fr = array();
			while ($shape = $l->nextShape())
			{
				$novoreg = array();
				$r = array();
				foreach ($items as $item)
				{
					$v = trim($shape->values[$item]);
					if ($tipo == "exata")
					{
						if (strtr($v,$buscas,$trocas) == strtr($palavra,$buscas,$trocas))
						{
							if (function_exists("mb_convert_encoding"))
							{$v = mb_convert_encoding($v,"UTF-8","ISO-8859-1");}	
							$r[] = array("item" => $item,"valor" => $v);
							$encontrado = "sim";
  						}
					}
					else
					{
						if (stristr(strtr($v,$buscas,$trocas),strtr($palavra,$buscas,$trocas)))
						{
							if (function_exists("mb_convert_encoding"))
							{$v = mb_convert_encoding($v,"UTF-8","ISO-8859-1");}
							$r[] = array("item" => $item,"valor" => $v);
							$encontrado = "sim";
						}
					}
				}
				if ($encontrado == "sim")
				{
					$novoreg["box"] = $this->extensaoShape($shape,$l);			
					$novoreg["valores"] = $r;
					$encontrado = "nao";
					$fr[] = $novoreg;
				}
			}
			$resultado[] = array("tema"=>$tema,"resultado"=>$fr);
			$l->close();
		}
		return($resultado);
	}
/*
function: estatDescritivas

Calcula estat�sticas b�sicas de uma tabela de um tema.

parameters:
$item - Item que ser� calculado.

$exclui - Valor que n�o ser� cosiderado.

Include:
<classe_estatistica.php>
*/
	function estatDescritivas($item,$exclui)
	{
		$this->layer->set("template","none.htm");
		$items = pegaItens($this->layer);
		$valores = array();
		$filtro = $this->layer->getfilter();
		if ($filtro != ""){$this->layer->setfilter("");}
		//le o arquivo de query se existir e checa se existe sele&ccedil;&atilde;o para o tema
		$existesel = "nao";
		if (file_exists(($this->arquivo)."qy"))
		{$this->mapa->loadquery(($this->arquivo)."qy");}
		if ($this->layer->getNumresults() > 0){$existesel = "sim";}
		//$qstring = "/.*/";
		//if($this->layer->connectiontype == MS_POSTGIS)
		//{$qstring = $items[0].' ~* \'^.\'  ';}
		if ($existesel == "nao")
		{$this->layer->queryByrect($this->mapa->extent);}
		$abriu = $this->layer->open();
		$res_count = $this->layer->getNumresults();
		//pega os valores
		for ($i = 0; $i < $res_count; $i++)
		{
			$result = $this->layer->getResult($i);
			$shp_index  = $result->shapeindex;
			$shape = $this->layer->getshape(-1, $shp_index);
			$v = $shape->values[$item];
			$valores[] = $v;
		}
		$fechou = $this->layer->close();
		$valoresn = array();
		//verifica se a lista de valores contem numeros e exclusao
		foreach ($valores as $valor)
		{
			if (is_numeric($valor))
			{
				if ($exclui != "")
				{
					if ($valor != $exclui)
					{$valoresn[] = $valor;}
				}
				else
				{$valoresn[] = $valor;}
			}
		}
		if (count($valoresn) == 0)
		{return("erro. Nenhum valor valido");}
		//faz os calculos
		require_once("classe_estatistica.php");
		$estat = new estatistica();
		$resultado = $estat->calcula($valoresn);
		$resultado = $estat->resultado;
		$indice = $estat->indice;
		if ($resultado['min'] == "")
		{return("erro. Nenhum valor valido");}
		$chaves = array_keys($indice);
		return(array("indices"=>$chaves,"variaveis"=>$indice,"valores"=>$resultado));
	}
/*
function: identifica

Identifica elementos no mapa.

parameters:
$opcao - Opcao tip|tema|ligados|todos.

$xy - coordenada x e y separadas por virgulao.

$resolucao - Resolucao de busca.
*/
	function identifica($opcao,$xy,$resolucao)
	{
		$temas = $this->mapa->getalllayernames();
		foreach ($temas as $tem)
		{
			$vermultilayer = new vermultilayer();
			$vermultilayer->verifica($this->arquivo,$tem);
			if ($vermultilayer->resultado == 1) // o tema e multi layer
			{
				foreach (($vermultilayer->temasvisiveis) as $tv)
				{$listatemas[] = $tv;}
			}
			else
			{
		 		$l = $this->mapa->getlayerbyname($tem);
				if ($l->getmetadata("escondido") == ""){$listatemas[] = $tem;}
			}
		}
		$listatemas = array_unique($listatemas);
		$xyarray = explode(",",$xy);
		$resultados = array();
		//pesquisa um tema
		if ($opcao == "tema")
		{
			$listatemas = array();
			$vermultilayer = new vermultilayer();
			$vermultilayer->verifica($this->arquivo,$this->nome);
			if ($vermultilayer->resultado == 1) // o tema e multi layer
			{$listatemp = $vermultilayer->temasvisiveis;}
			else
			{$listatemp[] = $this->nome;}
			foreach ($listatemp as $t)
			{
				$layerteste = $this->mapa->getlayerbyname($t);
				$mclasse = $layerteste->getmetadata("CLASSE");
				$mtema = $layerteste->getmetadata("TEMA");
				$gr = $layerteste->group;
				if ((!(($mclasse == "NAO") && ($mtema == "NAO"))) || ($gr != ""))
				{
					if (($layerteste->data != "") && ($layerteste->connectiontype != MS_WMS))
					{$listatemas[] = $t;}
				}
			}
			$layerteste = $this->layer;
			if ($layerteste->connectiontype == MS_WMS)
			{
				$listatemas = array();
				$listatemas[] = $this->nome;
			}
			foreach ($listatemas as $tema)
			{
				$resultados[$tema] = $this->identificaQBP($tema,$xyarray[0],$xyarray[1],$this->arquivo,$resolucao);
			}
		}
		//pesquisa todos os temas acrescentados no mapa
		if ($opcao == "todos")
		{
			foreach ($listatemas as $tema)
			{
				$resultados[$tema] = $this->identificaQBP($tema,$xyarray[0],$xyarray[1],$this->arquivo,$resolucao);
			}
		}
		//pesquisa apenas os temas visiveis
		if ($opcao == "ligados")
		{
			foreach ($listatemas as $tema)
			{$resultados[$tema] = $this->identificaQBP($tema,$xyarray[0],$xyarray[1],$this->arquivo,$resolucao);}
		}
		//pesquisa apenas os temas com tip
		if ($opcao == "tip")
		{
			$ltemp = array();
			foreach ($listatemas as $tema)
			{
				$tl = $this->mapa->getlayerbyname($tema);
				$itemtip = $tl->getmetadata("TIP");
				if ($itemtip != "")
				{
					if ($tl->status == MS_DEFAULT)
					{
						$resultados[$tema] = $this->identificaQBP($tema,$xyarray[0],$xyarray[1],$this->arquivo,$resolucao,$itemtip);
						$ltemp[] = $tema;
					}
				}
			}
			$listatemas = $ltemp;
		}
		if (count($resultados) > 0)
		{
			if (function_exists("mb_convert_encoding"))
			{$res = mb_convert_encoding($this->retornaI($listatemas,$resultados,$this->mapa),"UTF-8","ISO-8859-1");}
			else
			{$res = $this->retornaI($listatemas,$resultados,$this->mapa);}
			return($res);
		}
		else
		{return("");}
	}
/*
function: retornaI

Processa o resultado da identifica��o de um elemento compondo um array de strings formatadas.

parameters:
$listatemas - Lista de temas

$resultados - Resultados de cada tema.

$map - Objeto Map.
*/
function retornaI($listatemas,$resultados,$map)
{
	$final = "";
	foreach ($listatemas as $tema)
	{
		$layer = $map->getlayerbyname($tema);
		//pega o nome correto do tema
		$nometmp = $tema;
		if ($layer->getMetaData("TEMA") != "NAO")
		{$nometmp = $layer->getMetaData("TEMA");}
		else if ($layer->getMetaData("ALTTEMA") != "")
		{$nometmp = $layer->getMetaData("ALTTEMA");}
		$final = $final."!".$nometmp;
		$final = trim($final,"!");
		$rs = $resultados[$tema];
		$final = $final."@";
		foreach ($rs as $r)
		{
			$final = $final . "*";
			if ($r != " ")
			{
				foreach ($r as $f)
				{$final = $final . $f;}
			}
		}
	}
	return $final;
}
/*
function: identificaQBP

Identifica um elemento utilizando querybypoint.

parameters:

$tema - Tema que ser� identificado

$x - Coordenada X.

$y - Coordenada Y.

$map_file - Arquivo map file.

$resolucao - Resolu��o de busca.

$item - Item �nico que ser� identificado.

$tiporetorno - Tipo de retorno dos dados. Se for vazio, o retorno � formatado como string, se for shape, retorna o objeto shape 
*/
function identificaQBP($tema,$x,$y,$map_file,$resolucao,$item,$tiporetorno="")
{
	$mapa = ms_newMapObj($map_file);
	$layer = $mapa->getLayerByName($tema);
	$layer->set("template","none.htm");
	$pt = ms_newPointObj();
	$pt->setXY($x, $y);
	//
	//opera��o especial para o caso de wms
	//
	if($layer->connectiontype == MS_WMS)
	{
		$layer->set("toleranceunits",MS_PIXELS);
		$layer->set("tolerance",$resolucao);
		$ptimg = xy2imagem($map_file,array($x,$y));
		$mapa = desligatemas($mapa);
		$mapa = desligamargem($mapa);
		$imgo = $mapa->draw();
		//$res = $layer->getWMSFeatureInfoURL($ptimg->x, $ptimg->y, 1,"MIME");
		$resultado = array();
		$res = $layer->connection;
		$res .= "&request=getfeatureinfo&service=wms";
		$res .= "&version=1.1.0";//.($layer->getmetadata("wms_version"));
		$res .= "&QUERY_LAYERS=".($layer->getmetadata("wms_name"));
		$res .= "&LAYERS=".($layer->getmetadata("wms_name"));
		$bb = $mapa->extent;
		$res .= "&BBOX=".($bb->minx).",".($bb->miny).",".($bb->maxx).",".($bb->maxy);
		$res .= "&X=".round($ptimg->x);
		$res .= "&Y=".round($ptimg->y);
		$res .= "&WIDTH=".$mapa->width;
		$res .= "&HEIGHT=".$mapa->height;
		$formatoinfo = "text/plain";
		$formatosinfo = $layer->getmetadata("formatosinfo");
		if ($formatosinfo != "")
		{
			$formatosinfo = explode(",",$formatosinfo);
			if ($formatosinfo[0] != ""){$formatoinfo = $formatosinfo[0];}
			foreach ($formatosinfo as $f)
			{
		 		if(strtoupper($f) == "TEXT/PLAIN")
		 		{$formatoinfo = "text/plain";}
			}
					
		}
		$srs = $layer->getmetadata("wms_srs");
		$srss = explode(" ",$srs);
		$srs = "EPSG:4326";
		foreach ($srss as $s)
		{
		 	if(strtoupper($s) == "EPSG:4291")
		 	{$srs = "EPSG:4291";}
		}
		$res .= "&SRS=".$srs;
		$resposta = file($res."&FORMAT=".$formatoinfo);
		$resposta = str_ireplace('<?xml version="1.0" encoding="UTF-8"?>',"",$resposta);
		$resposta = str_ireplace('<?xml version="1.0" encoding="ISO-8859-1"?>',"",$resposta);
		$resposta = str_ireplace("<?xml version='1.0' encoding='ISO-8859-1'?>","",$resposta);
		$resposta = str_ireplace('<?xml',"",$resposta);
		$resposta = str_ireplace("<","zzzzzzzzzz",$resposta);
		$resposta = str_ireplace(">","zzzzzzzzzz",$resposta);
		if (stristr(implode(" ",$resposta),"msWMSLoadGetMapParams"))
		{
			$resposta = file($res);
			$resposta = str_ireplace('<?xml version="1.0" encoding="UTF-8"?>',"",$resposta);
			$resposta = str_ireplace('<?xml version="1.0" encoding="ISO-8859-1"?>',"",$resposta);
			$resposta = str_ireplace("<?xml version='1.0' encoding='ISO-8859-1'?>","",$resposta);
			$resposta = str_ireplace('<?xml',"",$resposta);
			$resposta = str_ireplace("<","zzzzzzzzzz",$resposta);
			$resposta = str_ireplace(">","zzzzzzzzzz",$resposta);
		}
		$resultado[] = $resposta;
		return $resultado;		
	}
	if(($layer->connectiontype != MS_WMS) && ($layer->type == MS_LAYER_RASTER))
	{
		$layer->set("toleranceunits",MS_PIXELS);
		$layer->set("tolerance",$resolucao);
		$ident = @$layer->queryByPoint($pt, 0, 0); //0.01);
	}
	if (($layer->type == MS_LAYER_POINT) || ($layer->type == MS_LAYER_LINE))
	{
		$layer->set("toleranceunits",MS_PIXELS);
		$layer->set("tolerance",$resolucao);
		$ident = @$layer->queryByPoint($pt, 1, 0); //0.01);
	}
	if ($layer->type == MS_LAYER_POLYGON)
	{
		$layer->set("toleranceunits",MS_PIXEL);
		$layer->set("tolerance",1);
		$ident = @$layer->queryByPoint($pt, 1, 0);
	}
	if ($ident == MS_SUCCESS)
	{
		$its = $layer->getmetadata("ITENS"); // itens
		if ($item != "") //utilizado pela funcao tip
		{$its = $item;}
		if ($its != "")
		{
			$descis = $layer->getmetadata("ITENSDESC"); // descri&ccedil;&atilde;o dos itens
			$descisarray = explode(",",$descis); // array com a descri&ccedil;&atilde;o dos itens
			$itsarray = explode(",",$its); // array com os nomes dos itens
			$lks = $layer->getmetadata("ITENSLINK"); // link dos itens
			$itemimg = $layer->getmetadata("ITEMIMG"); //indica um item que ser� utilizado para colocar um �cone
			$locimg = $layer->getmetadata("IMGLOC"); //indica o local onde est�o os �cones
			$lksarray = explode(",",$lks);
			if ($item != "") //utilizado pela funcao tip
			{
				$descis = $item;
				$descisarray = array();
				$descisarray[] = $item;
				$lksarray = array();
			}
		}
		else
		{
			if ($item != "") //utilizado pela funcao tip
			{
				$descisarray[] = $item;
				$lksarray = array();
			}
			else
			{
				$descisarray = pegaItens($layer);
				$itsarray = pegaItens($layer);
				$lksarray = array();
			}
		}
		$res_count = $layer->getNumresults();
		$layer->open();
		for ($i = 0; $i < $res_count; $i++)
		{
			$valori = array();
			$result = $layer->getResult($i);
			$shp_index  = $result->shapeindex;
			$shape = $layer->getshape(-1, $shp_index);
			if ($tiporetorno == "shape")
			{
				$layer->close();
				return $shape;
			}
			$conta = 0;
			foreach ($itsarray as $it)
			{
				$val = $shape->values[$it];
				if ($val == ""){$val = "-";}
				if ($lksarray[$conta] == "") //descricao,valor,link
				{$valori[] = $descisarray[$conta].":#".($val)."#"." ";}
				else
				{
					$nli = $descisarray[$conta].":#".$val."#".$lksarray[$conta];
					$itemstab = pegaItens($layer);
					foreach ($itemstab as $itab)
					{
						$busca = '['.$itab.']';
						$nli = str_replace($busca,$shape->values[$itab],$nli);
					}
					$valori[] = $nli;
				}
				if ($itemimg != "") //incluir icone
				{
					$valori[] = "<img src=..//".$locimg."//".$shape->values[$itemimg].".png //># # ";
				}
				$conta = $conta + 1;
			}
			$valori = implode("@##",$valori);
			$valori = explode("@",$valori);
			$resultado[] = $valori;
		}
		$layer->close();
	}
	else
	{$resultado[] = " ";}
	return $resultado;
}
}
?>