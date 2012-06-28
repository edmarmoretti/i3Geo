<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="../html/admin.css">
</head>
<body class="yui-skin-sam fundoPonto">
	<div class="bordaSuperior">&nbsp;</div>
	<div class="mascaraPrincipal" id="divGeral" style="text-align: left">
		Cria&ccedil;&atilde;o do banco de administra&ccedil;&atilde;o<br> <br>
		<?php
		/*
		 Title: criabanco.php

		Cria um novo banco de dados de administra&ccedil;&atilde;o.

		Se vc quiser recriar o banco de dados default, apague o arquivo
		i3geo/admin/admin.db ou fa&ccedil;a uma c�pia. Depois &eacute; s� executar esse programa.

		Se a configura&ccedil;&atilde;o do arquivo de conex&atilde;o foi alterada (veja ms_configura.php), o novo
		banco ir&aacute; ser criado conforme a nova string de conex&atilde;o.

		Licenca:

		GPL2

		i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

		Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil
		Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

		Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo
		e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a P&uacute;blica Geral
		GNU conforme publicada pela Free Software Foundation;

		Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til,
		por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl&iacute;cita
		de COMERCIABILIDADE OU ADEQUA&Ccedil;&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA.
		Consulte a Licen&ccedil;a P&uacute;blica Geral do GNU para mais detalhes.
		Voc&ecirc; deve ter recebido uma c�pia da Licen&ccedil;a P&uacute;blica Geral do
			GNU junto com este programa; se n&atilde;o, escreva para a
		Free Software Foundation, Inc., no endere&ccedil;o
		59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.

		Arquivo:

		i3geo/admin/php/criabanco.php
		*/
		$funcao = "";
		include_once("admin.php");
		error_reporting(E_ALL);
		if(verificaEditores($editores) == "nao")
		{
			echo "Vc nao e um administrador. Apenas usuarios cadastrados, ou registrados no i3geo/ms_configura.php, e com o papel de administradores podem criar um banco de dados.";exit;
		}

		$tabelas = array(
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_grupos (desc_grupo TEXT, id_grupo INTEGER PRIMARY KEY, nome_grupo TEXT, it TEXT, es TEXT, en TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_sistemasf (abrir_funcao TEXT, h_funcao NUMERIC, id_funcao INTEGER PRIMARY KEY, id_sistema NUMERIC, nome_funcao TEXT, perfil_funcao TEXT, w_funcao NUMERIC)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_subgrupos (desc_subgrupo TEXT, id_subgrupo INTEGER PRIMARY KEY, nome_subgrupo TEXT, it TEXT, es TEXT, en TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_temas (id_tema INTEGER PRIMARY KEY, nacessos INTEGER, kml_tema TEXT, kmz_tema TEXT, ogc_tema TEXT, download_tema TEXT, tags_tema TEXT, tipoa_tema TEXT, link_tema TEXT, desc_tema TEXT, nome_tema TEXT, codigo_tema TEXT, it TEXT, es TEXT, en TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_ws (nacessos INTEGER, nacessosok INTEGER, autor_ws TEXT, desc_ws TEXT, id_ws INTEGER PRIMARY KEY, link_ws TEXT, nome_ws TEXT, tipo_ws TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_tags (id_tag INTEGER PRIMARY KEY, nome TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_perfis (id_perfil INTEGER PRIMARY KEY, perfil TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_atlasp (ordem_prancha NUMERIC, desc_prancha TEXT, h_prancha NUMERIC, icone_prancha TEXT, id_atlas NUMERIC, id_prancha INTEGER PRIMARY KEY, link_prancha TEXT, mapext_prancha TEXT, titulo_prancha TEXT, w_prancha NUMERIC)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_atlast (ordem_tema NUMERIC, codigo_tema TEXT, id_prancha TEXT, id_tema INTEGER PRIMARY KEY, ligado_tema TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_menus (publicado_menu TEXT, perfil_menu TEXT, aberto TEXT, desc_menu TEXT, id_menu INTEGER PRIMARY KEY, nome_menu TEXT, it TEXT, es TEXT, en TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_mapas (publicado_mapa TEXT, ordem_mapa NUMERIC, perfil_mapa TEXT, ligados_mapa TEXT, temas_mapa TEXT, desc_mapa TEXT, ext_mapa TEXT, id_mapa INTEGER PRIMARY KEY, imagem_mapa TEXT, linkdireto_mapa TEXT, nome_mapa TEXT, outros_mapa TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_atlas (publicado_atlas TEXT, ordem_atlas NUMERIC, basemapfile_atlas TEXT, desc_atlas TEXT, h_atlas NUMERIC, icone_atlas TEXT, id_atlas INTEGER PRIMARY KEY, link_atlas TEXT, pranchadefault_atlas TEXT, template_atlas TEXT, tipoguias_atlas TEXT, titulo_atlas TEXT, w_atlas NUMERIC)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_sistemas (publicado_sistema TEXT, id_sistema INTEGER PRIMARY KEY, nome_sistema TEXT, perfil_sistema TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_identifica (publicado_i TEXT, abrir_i TEXT, id_i INTEGER PRIMARY KEY, nome_i TEXT, target_i TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_raiz (ordem NUMERIC, id_tema NUMERIC, id_menu NUMERIC, id_nivel NUMERIC, id_raiz INTEGER PRIMARY KEY, nivel NUMERIC, perfil TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_n1 (publicado TEXT, ordem NUMERIC, id_menu NUMERIC, id_grupo NUMERIC, id_n1 INTEGER PRIMARY KEY, n1_perfil TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_n2 (publicado TEXT, ordem NUMERIC, id_n1 NUMERIC, id_n2 INTEGER PRIMARY KEY, id_subgrupo NUMERIC, n2_perfil TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_n3 (publicado TEXT, ordem NUMERIC, id_n2 NUMERIC, id_n3 INTEGER PRIMARY KEY, id_tema NUMERIC, n3_perfil TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_comentarios (comentario TEXT, data TEXT, openidnome TEXT, openidimagem TEXT, openidservico TEXT, openidusuario TEXT, openidurl TEXT, id_tema NUMERIC)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_usuarios (ativo NUMERIC, data_cadastro TEXT, email TEXT, id_usuario INTEGER PRIMARY KEY, login TEXT, nome_usuario TEXT, senha TEXT)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_papelusuario (papel_id NUMERIC, usuario_id NUMERIC)",
				"CREATE TABLE ".$esquemaadmin."i3geoadmin_papeis (descricao TEXT, id_papel INTEGER PRIMARY KEY, nome TEXT)"
		);
		if($conexaoadmin == "")
		{
			if(file_exists("../../admin/admin.db"))
			{
				echo "Arquivo admin/admin.db ja existe. Vc deve apag&aacute;-lo para poder cri&aacute;-lo novamente";exit;
			}
			if(empty($_POST["senha"]) || empty($_POST["usuario"])){
				formularioLoginMaster("criabanco.php");
				exit;
			}
			else{
				$continua = verificaMaster($_POST["usuario"],$_POST["senha"],$i3geomaster);
				if($continua == false){
					echo "Usu&aacute;rio n&atilde;o registrado em i3geo/ms_configura.php na vari&aacute;vel i3geomaster";
					exit;
				}
			}
			if(function_exists("sqlite_open")){
				$banco = sqlite_open("../../admin/admin.db",0666);
				$banco = null;
				$dbhw = new PDO('sqlite:../../admin/admin.db');
			}
			else{
				echo "A fun&ccedil;&atilde;o de cria&ccedil;&atilde;o do banco sqlite n&atilde;o existe no PHP. Vc pode usar o arquivo i3geo/admin/adminvazio.db e renome&aacute;-lo para admin.db.";
				exit;
			}
		}
		else
		{
			include($conexaoadmin);
		}
		foreach($tabelas as $tabela)
		{
			if($dbhw->getAttribute(PDO::ATTR_DRIVER_NAME) == "pgsql")
			{
				$tabela = str_replace("INTEGER PRIMARY KEY","SERIAL PRIMARY KEY NOT NULL",$tabela);
			}
			//echo $tabela."<br>";
			$q = $dbhw->query($tabela);
		}
		$dbhw->query("INSERT INTO ".$esquemaadmin."i3geoadmin_papeis VALUES('Podem executar qualquer tarefa, inclusive cadastrar novos administradores',1,'admin')");
		$dbhw->query("INSERT INTO ".$esquemaadmin."i3geoadmin_papeis VALUES('Podem criar/editar qualquer tema (mapfile) mas n&atilde;o podem editar a &Aacute;rvore do cat&aacute;logo de temas',2,'editores')");
		$dbhw->query("INSERT INTO ".$esquemaadmin."i3geoadmin_papeis VALUES('Podem alterar a &aacute;rvore do cat&aacute;logo e dos atlas',3,'publicadores')");
		$dbhw->query("INSERT INTO ".$esquemaadmin."i3geoadmin_usuarios VALUES(1,'','',1,'admin','admin','admin')");
		$dbhw->query("INSERT INTO ".$esquemaadmin."i3geoadmin_papelusuario VALUES(1,1)");
		$banco = null;
		echo "Banco criado!!! administrador: admin / admin  - n&atilde;o esque&ccedil;a de alterar essa senha na op&ccedil;&atilde;o de edi&ccedil;&atilde;o do cadastro de usu&aacute;rios";
		function formularioLoginMaster($action){
			echo "<form method=post action=$action >";
			echo "<br>Essa conex&atilde;o pode n&atilde;o ser segura e os dados de usu&aacute;rio/senha podem ser descobertos<br><br>";
			echo "Nome do usu&aacute;rio master cadastrado em ms_configura.php:<br> <input type=text name=usuario /><br>";
			echo "Senha:<br> <input type=password name=senha /><br>";
			echo "<input type=submit />";
		}
		function verificaMaster($usuario,$senha,$i3geomaster){
			foreach($i3geomaster as $teste){
				if(!empty($usuario) && !empty($senha) && $teste["usuario"] == $usuario && $teste["senha"] == $senha){
					return true;
				}
			}
			return false;
		}
		?>
	</div>