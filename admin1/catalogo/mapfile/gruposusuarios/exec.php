<?php
/****************************************************************/
include (dirname ( __FILE__ ) . "/../../../../ms_configura.php");
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

$codigo = $_POST ["codigo"];
$codigo = str_replace ( " ", "", \admin\php\funcoesAdmin\removeAcentos ( $codigo ) );
$codigo = str_replace ( ".", "", $codigo );
$codigo = strip_tags ( $codigo );
$codigo = htmlspecialchars ( $codigo, ENT_QUOTES );

$id_grupo = $_POST["id_grupo"];
$id_tema = $_POST["id_tema"];

\admin\php\funcoesAdmin\testaSafeNumerico([$id_grupo,$id_tema]);

$funcao = strtoupper ( $funcao );
switch ($funcao) {
	case "ADICIONAR" :
		$novo = \admin\catalogo\mapfile\gruposusuarios\adicionar( $locaplic, $codigo, $id_grupo, $id_tema, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($novo === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		}
		break;
	case "LISTA" :
		$dados = \admin\catalogo\mapfile\gruposusuarios\listar ($dbh,$locaplic,$codigo);
		include ("../../../usuarios/grupos/funcoes.php");
		$grupos = \admin\usuarios\grupos\listar($dbh);
		$dbhw = null;
		$dbh = null;
		\admin\php\funcoesAdmin\retornaJSON ( array("dados" => $dados, "grupos" => $grupos) );
		break;
	case "EXCLUIR" :
		$retorna = \admin\catalogo\mapfile\gruposusuarios\excluir ( $id_tema, $id_grupo, $dbhw );
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