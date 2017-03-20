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

$id_menu = $_POST["id_menu"];
$id_tema = $_POST["id_tema"];
$id_raiz = $_POST["id_raiz"];
\admin\php\funcoesAdmin\testaSafeNumerico([$id_menu,$id_tema,$id_raiz]);

$funcao = strtoupper ( $funcao );
switch ($funcao) {
	case "ORDENA" :
		$ordem = explode(" ",$_POST["novaordem"]);
		$dados = \admin\catalogo\menus\grupos\raiz\ordenar($id_menu, $ordem, $dbhw);
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao ordenar" );
		}
		\admin\php\funcoesAdmin\retornaJSON ( $dados );
		break;
	case "LISTAUNICO" :
		$dados = \admin\catalogo\menus\grupos\raiz\listar ($dbh,$id_raiz);
		$dbhw = null;
		$dbh = null;
		if ($dados === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		} else {
			\admin\php\funcoesAdmin\retornaJSON ( array("dados"=>$dados) );
		}
		break;
	case "ADICIONAR" :
		if (empty ( $id_tema ) || empty ( $id_menu )) {
			header ( "HTTP/1.1 500 erro nos parametros" );
		} else {
			$novo = \admin\catalogo\menus\grupos\raiz\adicionar ( $id_menu, $id_tema, $_POST["ordem"], $_POST["perfil"], $dbhw );
			$dbhw = null;
			$dbh = null;
			if ($novo === false) {
				header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			}
		}
		break;
	case "ALTERAR" :
		if (empty ( $id_tema ) || empty ( $id_menu )) {
			header ( "HTTP/1.1 500 erro nos parametros" );
		} else {
			$novo = \admin\catalogo\menus\grupos\raiz\alterar ( $id_raiz, $id_tema, $_POST["ordem"], $_POST["perfil"], $dbhw );
			$dbhw = null;
			$dbh = null;
			if ($novo === false) {
				header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			}
		}
		break;
	case "EXCLUIR" :
		$retorna = \admin\catalogo\menus\grupos\raiz\excluir ( $id_raiz, $dbhw );
		$dbhw = null;
		$dbh = null;
		if ($retorna === false) {
			header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
			exit ();
		}
		\admin\php\funcoesAdmin\retornaJSON ( $id_raiz );
		exit ();
		break;
	default:
		header ( "HTTP/1.1 500 erro funcao nao existe" );
		break;
}
?>
