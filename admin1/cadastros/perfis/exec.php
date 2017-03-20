<?php
/****************************************************************/
include (dirname ( __FILE__ ) . "/../../../ms_configura.php");
//
//checa login
//valida _GET e _POST, juntando em _GET
//pega algumas variaveis de uso mais comum
//session_start
//
include ($locaplic."/admin1/php/checaLogin.php");
//funcoes de administracao
include ($locaplic."/admin1/php/funcoesAdmin.php");
//
//carrega outras funcoes e extensoes do PHP
//
include ($locaplic."/classesphp/carrega_ext.php");
//
//carrega as funcoes locais
//depende de funcoesAdmin.php
//
include ("funcoes.php");
//
//conexao com o banco de administracao
//cria as variaveis $dbh e $dbhw alem de conexaoadmin
//
include ($locaplic."/admin1/php/conexao.php");
/***************************************************************/
if (\admin\php\funcoesAdmin\verificaOperacaoSessao ( "admin/html/arvore" ) === false) {
	header ( "HTTP/1.1 403 Vc nao pode realizar essa operacao" );
	exit ();
}
if(!isset($idioma) || $idioma == ""){
	$idioma = "pt";
}
//remove espaco em branco do nome do perfil
$perfil = str_replace(" ","",$perfil);

$id_perfil = $_POST["id_perfil"];
\admin\php\funcoesAdmin\testaSafeNumerico([$id_perfil]);

$funcao = strtoupper ( $funcao );
switch ($funcao) {
	case "ADICIONAR" :
		$novo = \admin\cadastros\perfis\adicionar( $perfil, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	case "ALTERAR" :
		$novo = \admin\cadastros\perfis\alterar ( $id_perfil, $perfil, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	case "LISTAUNICO" :
		$dados = \admin\cadastros\perfis\listar($dbh, $id_perfil);
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		} else {
			\admin\php\funcoesAdmin\retornaJSON ( $dados );
		}
		break;
	case "LISTA" :
		$dados = \admin\cadastros\perfis\listar($dbh);
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		} else {
			\admin\php\funcoesAdmin\retornaJSON ( $dados );
		}
		break;
	case "EXCLUIR" :
		$retorna = \admin\cadastros\perfis\excluir ( $id_perfil, $dbhw );
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
