<?php
namespace admin\usuarios\cadastro;
function listar($dbh, $id_usuario = ""){
	global $esquemaadmin;
	if($id_usuario != ""){
		$dados = pegaDados ( "SELECT id_usuario,ativo,data_cadastro,email,login,nome_usuario from " . $esquemaadmin . "i3geousr_usuarios WHERE id_usuario = $id_usuario order by nome_usuario", $dbh, false );
		$dados = $dados[0];
	} else {
		$dados = pegaDados ( "SELECT id_usuario,nome_usuario from " . $esquemaadmin . "i3geousr_usuarios order by lower(nome_usuario)", $dbh, false );
	}
	if ($dados === false) {
		return false;
	} else {
		return $dados;
	}
}
function listaPapeis($dbh){
	global $esquemaadmin;
	$dados = pegaDados ( "SELECT * from " . $esquemaadmin . "i3geousr_papeis order by nome", $dbh );
	if ($dados === false) {
		header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		exit ();
	} else {
		return $dados;
	}
}
function listaPapeisUsuario($id_usuario,$dbh){
	global $esquemaadmin;
	$dados = pegaDados ( "SELECT P.id_papel, P.nome, P.descricao, UP.id_usuario FROM " . $esquemaadmin . "i3geousr_papelusuario AS UP JOIN " . $esquemaadmin . "i3geousr_papeis AS P ON UP.id_papel = P.id_papel WHERE UP.id_usuario = $id_usuario ", dbh, false );
	if ($dados === false) {
		header ( "HTTP/1.1 500 erro ao consultar banco de dados" );
		exit ();
	} else {
		return $dados;
	}
}
function enviarSenha( $senha, $email ){
	$to      = $email;
	$subject = 'senha i3geo criada em '. date('l jS \of F Y h:i:s A');
	$message = $senha;
	return mail($to, $subject, $message);
}
// $papeis deve ser um array
function adicionar($ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw) {
	global $esquemaadmin;
	try {
		$dataCol = array(
			"nome_usuario" => '',
			"login" => '',
			"email" => '',
			"ativo" => 0,
			"data_cadastro" => '',
			"senha" => ''
		);
		$id_usuario = i3GeoAdminInsertUnico ( $dbhw, "i3geousr_usuarios", $dataCol, "nome_usuario", "id_usuario" );
		$data_cadastro = date('l jS \of F Y h:i:s A');
		$retorna = \admin\usuarios\cadastro\alterar ( $id_usuario, $ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw );
		return $retorna;
	} catch ( PDOException $e ) {
		return false;
	}
}
// $papeis deve ser um array
function alterar($id_usuario, $ativo, $data_cadastro, $email, $login, $nome_usuario, $senha, $papeis, $dbhw) {
	global $convUTF, $esquemaadmin;
	if ($convUTF != true) {
		$nome_usuario = utf8_decode ( $nome_usuario );
	}
	$dataCol = array (
			"nome_usuario" => $nome_usuario,
			"login" => $login,
			"email" => $email,
			"ativo" => $ativo
	);
	// se a senha foi enviada, ela sera trocada
	if ($senha != "") {
		//$dataCol ["senha"] = md5 ( $senha );
		$dataCol["senha"] = password_hash($_GET["senha"], PASSWORD_DEFAULT);
	}
	$resultado = i3GeoAdminUpdate ( $dbhw, "i3geousr_usuarios", $dataCol, "WHERE id_usuario = $id_usuario" );
	if ($resultado === false) {
		return false;
	}
	// apaga todos os papeis
	$resultado = \admin\usuarios\cadastro\excluirPapeis ( $id_usuario, $dbhw );
	if ($resultado === false) {
		return false;
	}
	if (! empty ( $papeis )) {
		// atualiza papeis vinculados
		foreach ( $papeis as $p ) {
			$resultado = \admin\usuarios\cadastro\adicionaPapel ( $id_usuario, $p, $dbhw );
			if ($resultado === false) {
				return false;
			}
		}
	}
	return $id_usuario;
}
function adicionaPapel($id_usuario, $id_papel, $dbhw) {
	global $esquemaadmin;
	$dataCol = array (
			"id_usuario" => $id_usuario,
			"id_papel" => $id_papel
	);
	$resultado = i3GeoAdminInsert ( $dbhw, "i3geousr_papelusuario", $dataCol );
	return $resultado;
}
function excluir($id_usuario, $dbhw) {
	global $esquemaadmin;
	$resultado = i3GeoAdminExclui ( $esquemaadmin . "i3geousr_usuarios", "id_usuario", $id_usuario, $dbhw, false );
	$resultado = \admin\usuarios\cadastro\excluirPapeis ( $id_usuario, $dbhw );
	return $resultado;
}
function excluirPapeis($id_usuario, $dbhw) {
	global $esquemaadmin;
	$resultado = i3GeoAdminExclui ( $esquemaadmin . "i3geousr_papelusuario", "id_usuario", $id_usuario, $dbhw, false );
	return $resultado;
}
?>