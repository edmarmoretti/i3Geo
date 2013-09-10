<?php
include_once(dirname(__FILE__)."/../inicia.php");
//
//faz a busca da fun&ccedil;&atilde;o que deve ser executada
//
$retorno = ""; //string que ser&aacute; retornada ao browser via JSON
switch (strtoupper($funcao))
{
/*
Valor: GRAFICOSELECAO

Pega os dados necess�rios para a gera��o dos gr�ficos da ferramenta sele��o

<iniciaDadosGrafico>
*/
	case "GRAFICOSELECAO":
		include(dirname(__FILE__)."/../../classesphp/graficos.php");
		if(!isset($exclui))
		{$exclui = "";}
		if(!isset($tipo))
		{$tipo = "nenhum";}
		if(!isset($ordenax))
		{$ordenax = "nao";}
		$itemvalores = explode(",",$itemvalores);
		if(count($itemvalores) == 1){
			$itemvalores = $itemvalores[0];
		}
		$retorno = iniciaDadosGrafico($map_file,$tema,$exclui,$itemclasses,$itemvalores,$tipo,false,$ext,true,$ordenax);
	break;
}
if (!connection_aborted()){
	if(isset($map_file) && isset($postgis_mapa) && $map_file != "")
	restauraCon($map_file,$postgis_mapa);
	cpjson($retorno);
}
else
{exit();}
?>