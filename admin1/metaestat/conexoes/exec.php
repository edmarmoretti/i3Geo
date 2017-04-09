<?php
/****************************************************************/
////include (dirname ( __FILE__ ) . "/../../../ms_configura.php");
//
//checa login
//valida _GET e _POST, juntando em _GET
//pega algumas variaveis de uso mais comum
//session_start
//
include ("../../php/checaLogin.php");
\admin\php\login\checaLogin();
//funcoes de administracao
include ($_SESSION["locaplic"]."/admin1/php/funcoesAdmin.php");
//
//carrega outras funcoes e extensoes do PHP
//
include ($_SESSION["locaplic"]."/classesphp/carrega_ext.php");
//
//carrega as funcoes locais
//depende de funcoesAdmin.php
//
include ("funcoes.php");
//
//conexao com o banco de administracao
//cria as variaveis $dbh e $dbhw alem de conexaoadmin
//
include ($_SESSION["locaplic"]."/admin1/php/conexao.php");
/***************************************************************/
if (\admin\php\funcoesAdmin\verificaOperacaoSessao ( "admin/metaestat/geral" ) === false) {
	header ( "HTTP/1.1 403 Vc nao pode realizar essa operacao" );
	exit ();
}
$codigo_estat_conexao = $_POST["codigo_estat_conexao"];

\admin\php\funcoesAdmin\testaSafeNumerico([$codigo_estat_conexao]);

$funcao = strtoupper ( $funcao );
switch ($funcao) {
	case "ADICIONAR" :
		$novo = \admin\metaestat\conexoes\adicionar ( $_POST["bancodedados"], $_POST["host"], $_POST["porta"], $_POST["usuario"], $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	case "ALTERAR" :
		$novo = \admin\metaestat\conexoes\alterar ( $codigo_estat_conexao,$_POST["bancodedados"],$_POST["host"],$_POST["porta"],$_POST["usuario"], $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	case "LISTAUNICO" :
		$dados = \admin\metaestat\conexoes\listar ( $dbh, $codigo_estat_conexao );
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		} else {
			\admin\php\funcoesAdmin\retornaJSON ( $dados );
		}
		break;
	case "LISTA" :
		$dados = \admin\metaestat\conexoes\listar ( $dbh );
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		} else {
			\admin\php\funcoesAdmin\retornaJSON ( $dados );
		}
		break;
	case "EXCLUIR" :
		$retorna = \admin\metaestat\conexoes\excluir ( $codigo_estat_conexao, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($retorna === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	default:
		header ( "HTTP/1.1 500 erro funcao nao existe" );
		break;
}
?>