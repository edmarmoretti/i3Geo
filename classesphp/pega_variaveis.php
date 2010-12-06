<?php
/*
Title: pega_variaveis.php

Processa os arrays $_GET e $_POST, transformando-os em vari�veis conforme as chaves.

Deve ser inclu�do sempre no in�cio dos programas em PHP utilizados pelo i3Geo, evitando que o par�metro "REGISTER_GLOBALS" 
do PHP precise ser definido como "On".

No caso do uso de POST do lado cliente com a biblioteca CPAINT, � feito o processamento
dos argumentos definidos na chamada call. Para fazer a chamada utilizando-se POST, deve-se seguir o exemplo abaixo:

	var cp = new cpaint();
	
	cp.set_response_type("JSON");
	
	cp.set_transfer_mode("POST");
	
	var p = g_locaplic+"/classesphp/mapa_controle.php?g_sid="+g_sid;
	
	cp.call(p,"criaSHPvazio",ativanovotema,"funcao=criashpvazio,tema=teste");
	
	
O par�metro "funcao=criashpvazio,tema=teste" ser� transformado em vari�veis, ou seja,

$funcao = "v";

$tema = "teste";

Licenca:

GPL2

I3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

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

i3geo/classesphp/pega_variaveis.php
*/
if (isset($_GET))
{
	foreach(array_keys($_GET) as $k)
	{
		if ($_GET[$k] != "''")
		eval("\$".$k."='".(strip_tags($_GET[$k]))."';");
	}
}
//var_dump($_GET);exit;
if (isset($_POST))
{
	//var_dump($_POST);exit;
	foreach(array_keys($_POST) as $k)
	{
		if (($_POST[$k] != "''"))
		eval("\$".$k."='".(strip_tags($_POST[$k]))."';");
		if (($_POST[$k] != "''") && ($k == "cpaint_argument"))
		{
			foreach($_POST["cpaint_argument"] as $argumento_)
			{
				
				if (strtoupper(substr(PHP_OS, 0, 3) == 'WIN'))
				{$argumento_ = str_replace("\\\"","",$argumento_);}
				else
				{$argumento_ = str_replace("\"","",$argumento_);}
				$argumento_ = explode('"',$argumento_);
				$argumento_ = implode("&",$argumento_);
				$parametros_ = explode("&",$argumento_);
				foreach($parametros_ as $parametro_)
				{	
					$p_ = explode("=",$parametro_);
					$parametro = $p_[0];
					$p_ = array_slice($p_, 1, count($p_));;
					$valor = implode("=",$p_);
					if($parametro != "")
					eval("\$".$parametro."='".(strip_tags($valor))."';");				
				}
			}				
		}
	}
}
?>