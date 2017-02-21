<?php
include_once (dirname ( __FILE__ ) . "/../../../../admin/php/login.php");
include_once (dirname ( __FILE__ ) . "/../../../../admin/php/conexao.php");
error_reporting ( 0 );
if (isset ( $_POST ["texto"] )) {
	$gravarTexto = $_POST ["texto"];
	$_POST ["texto"] = "";
}
$versao = versao ();
$versao = $versao ["principal"];

if (verificaOperacaoSessao ( "admin/html/editortexto" ) === false) {
	header ( "HTTP/1.1 403 Vc nao pode realizar essa operacao" );
	exit ();
}

error_reporting ( 0 );
function textoMapfile($codigo) {
	global $locaplic, $dbhw;
	$mapfile = $locaplic . "/temas/" . $codigo . ".map";
	if (! file_exists ( $mapfile )) {
		return "Arquivo $codigo n&atilde;o existe.";
	}
	// testa
	try {
		ms_newMapObj ( $mapfile );
	} catch ( Exception $e ) {
		$texto = file_get_contents ( $mapfile );
		if (mb_detect_encoding ( $texto, 'UTF-8, ISO-8859-1' ) == "ISO-8859-1") {
			return utf8_encode ( $texto );
		} else {
			return $texto;
		}
	}
	if (@ms_newMapObj ( $mapfile )) {
		// verifica os metadata que sao armazenados tambem no banco de dados de administracao
		// isso e necessario para manter a consistencia caso o usuario altere manualmente os valores
		// cria o objeto map
		$mapa = ms_newMapObj ( $mapfile );
		$layer = $mapa->getlayerbyname ( $codigo );
		if ($layer == "") {
			return "<br><span style='color:red;'>Aten&ccedil;&atilde;o: n&atilde;o existe nenhum LAYER com NAME igual a " . $codigo . "</span><br>";
		} else {
			// pega o metadata
			$meta = $layer->getmetadata ( "permitedownload" );
			$meta = strtoupper ( $meta );
			if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
				// grava no banco
				$dbhw->query ( "UPDATE " . $esquemaadmin . "i3geoadmin_temas SET download_tema='$meta' WHERE codigo_tema = '$codigo'" );
			}
			$meta = $layer->getmetadata ( "permiteogc" );
			$meta = strtoupper ( $meta );
			if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
				$dbhw->query ( "UPDATE " . $esquemaadmin . "i3geoadmin_temas SET ogc_tema='$meta' WHERE codigo_tema = '$codigo'" );
			}
			$meta = $layer->getmetadata ( "permitekml" );
			$meta = strtoupper ( $meta );
			if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
				$dbhw->query ( "UPDATE " . $esquemaadmin . "i3geoadmin_temas SET kml_tema='$meta' WHERE codigo_tema = '$codigo'" );
			}
			$meta = $layer->getmetadata ( "permitekmz" );
			$meta = strtoupper ( $meta );
			if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
				$dbhw->query ( "UPDATE " . $esquemaadmin . "i3geoadmin_temas SET kmz_tema='$meta' WHERE codigo_tema = '$codigo'" );
			}
		}
	}
	$texto = file_get_contents ( $mapfile );
	if (mb_detect_encoding ( $texto, 'UTF-8, ISO-8859-1' ) == "ISO-8859-1") {
		return utf8_encode ( $texto );
	} else {
		return $texto;
	}
}
function salvaMapfile() {
	global $locaplic, $dbhw, $codigo, $gravarTexto, $esquemaadmin;
	if (empty ( $gravarTexto )) {
		return;
	}
	$mapfile = $locaplic . "/temas/" . $codigo . ".map";
	$original = file_get_contents ( $mapfile );
	$fp = fopen ( $mapfile, "w" );
	if ($fp == false) {
		echo "<span style=color:red <b>N&atilde;o foi poss&iacute;vel salvar o arquivo. Verifique as permiss&otilde;es ou se h&aacute; algum erro no mapfile</b></span><br><br>";
		exit ();
	} else {
		// remove itens vazios
		$novoTexto = array ();
		$testar = array (
				"TEMPORIZADOR",
				"PALLETESTEP",
				"LTEMPOITEMIMAGEM",
				"METAESTAT_ID_MEDIDA_VARIAVEL",
				"GMOPACITY",
				"GMSTATUS",
				"ICONETEMA",
				"LTEMPOITEMTITULO",
				"DESCRIPTION_TEMPLATE",
				"LTEMPOITEMLINK",
				"TILES",
				"METAESTAT_CODIGO_TIPO_REGIAO",
				"ARQUIVOTEMAORIGINAL",
				"PALLETEFILE",
				"NOMEORIGINAL",
				"OLSTATUS",
				"PERMITEDOWNLOAD",
				"LTEMPOFORMATODATA",
				"FILTROORIGINAL",
				"PERMITECOMENTARIO",
				"LTEMPOITEMICONE",
				"DATAORIGINAL",
				"PLUGINI3GEO",
				"METAESTAT",
				"ITEMBUSCARAPIDA",
				"ARQUIVODOWNLOAD",
				"ARQUIVOKMZ",
				"PERMITEKML",
				"PERMITEOGC",
				"CONVCARACTER",
				"CORTEPIXELS",
				"EDITORSQL",
				"LTEMPOCONVENCODE",
				"LTEMPOITEMFIM",
				"OLOPACITY",
				"LEGENDAWMS",
				"LEGENDAIMG",
				"KEYIMAGE",
				"TILEINDEX",
				"TILEITEM",
				"SYMBOL",
				"LABELITEM",
				"FILTERITEM",
				"GROUP",
				"ENCODING",
				"TIP",
				"CLASSE",
				"ITENSDESC",
				"CLASSESNOME",
				"ITENSLINK",
				"ESCALA",
				"CLASSESSIMBOLO",
				"MENSAGEM",
				"EXTENSAO",
				"CLASSESITEM",
				"ESCONDIDO",
				"CLASSESCOR",
				"DOWNLOAD",
				"CLASSESTAMANHO",
				"ITENS",
				"TEMA",
				"APLICAEXTENSAO",
				"IDENTIFICA",
				"TRANSITIONEFFECT"
		);
		foreach ( preg_split ( '~[\r\n]+~', $gravarTexto ) as $line ) {
			$teste = strtoupper ( $line );
			$teste = trim ( $teste );
			$teste = str_replace ( array (
					" ",
					"'",
					'"'
			), "", $teste );
			$teste = preg_replace ( '/[\n\r\t ]*/', '', $teste );
			$passou = true;
			foreach ( $testar as $t ) {
				if ($teste == $t) {
					$passou = false;
				}
			}
			if ($passou == true) {
				if (mb_detect_encoding ( $line, 'UTF-8' ) == "UTF-8") {
					$line = mb_convert_encoding ( $line, "ISO-8859-1", "UTF-8" );
				}
				$novoTexto [] = $line;
			}
		}
		fwrite ( $fp, implode ( "\r\n", $novoTexto ) );
	}
	fclose ( $fp );
	// testa o mapfile
	ms_ResetErrorList ();
	if (! @ms_newMapObj ( $mapfile )) {
		echo "Erro no arquivo sera mantido o original<br>";
		$error = ms_GetErrorObj ();
		while ( $error && $error->code != MS_NOERR ) {
			printf ( "<br>Error in %s: %s<br>\n", $error->routine, $error->message );
			$error = $error->next ();
		}
		$fp = fopen ( $mapfile, "w" );
		fwrite ( $fp, $original );
		fclose ( $fp );
		exit ();
	}

	// verifica os metadata que sao armazenados tambem no banco de dados de administracao
	// isso e necessario para manter a consistencia caso o usuario altere manualmente os valores

	// cria o objeto map
	$mapa = ms_newMapObj ( $mapfile );

	$layer = $mapa->getlayerbyname ( $codigo );
	if ($layer == "") {
		return "<br><span style='color:red;'>Aten��o: n�o existe nenhum LAYER com NAME igual a " . $codigo . "</span><br>";
	} else {
		// pega o metadata
		$meta = $layer->getmetadata ( "permitedownload" );
		$meta = strtoupper ( $meta );
		$dataCol = array();
		if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
			$dataCol["download_tema"] = $meta;
		}
		$meta = $layer->getmetadata ( "permiteogc" );
		$meta = strtoupper ( $meta );
		if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
			$dataCol["ogc_tema"] = $meta;
		}
		$meta = $layer->getmetadata ( "permitekml" );
		$meta = strtoupper ( $meta );
		if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
			$dataCol["kml_tema"] = $meta;
		}
		$meta = $layer->getmetadata ( "permitekmz" );
		$meta = strtoupper ( $meta );
		if ($meta != "" && ($meta == "SIM" || $meta == "NAO")) {
			$dataCol["kmz_tema"] = $meta;
		}
		$resultado = i3GeoAdminUpdate ( $dbhw, "i3geoadmin_temas", $dataCol, "WHERE codigo_tema = '$codigo'" );
	}
}
?>