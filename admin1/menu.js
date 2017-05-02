/*
 * Constroi o menu principal que e repetido em todas as paginas
 */
i3GEOadmin = {};
function iniciaMenuPrincipal(){
var l = [],
menuPrincipal = [
	{
		html: $trad("configGeral",i3GEOadmin.menup.dicionario),
		children:[
			{
			html: "<a href='" + i3GEO.configura.locaplic + "/ms_criamapa.php' target='_blank'>"+$trad("abre",i3GEOadmin.menup.dicionario)+"</a>"
			},{
			html: "<a href='" + i3GEO.configura.locaplic + "/testainstal.php' >"+$trad("testaInstal",i3GEOadmin.menup.dicionario)+"</a>"
			},{
			html: "<a href='" + i3GEO.configura.locaplic + "/classesjs/compactajs.php' target='_blank'>"+$trad("compacta",i3GEOadmin.menup.dicionario)+"</a>"
			},{
				html: $trad("outrasOpc",i3GEOadmin.menup.dicionario),
				children:[
					{
					html: "<a href='" + i3GEO.configura.locaplic + "/admin1/ferramentas/estatisticas/index.php' >"+$trad("estat",i3GEOadmin.menup.dicionario)+"</a>"
					},{
					html: "<a href='" + i3GEO.configura.locaplic + "/admin1/ferramentas/banco/index.php' >"+$trad("descricaoBd",i3GEOadmin.menup.dicionario)+"</a>"
					},{
					html: "<a href='" + i3GEO.configura.locaplic + "/admin1/ferramentas/criabanco/index.php' >"+$trad("criaBd",i3GEOadmin.menup.dicionario)+"</a>"
					},{
					html: "<a href='" + i3GEO.configura.locaplic + "/admin1/ferramentas/miniaturas/index.php' >"+$trad("geraMiniatura",i3GEOadmin.menup.dicionario)+"</a>"
					}
				]
			}
		]
	},{
	html: $trad("contAcesso",i3GEOadmin.menup.dicionario),
	children:[
		{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/usuarios/operacoes/index.php' >"+$trad("controleOperac",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/usuarios/cadastro/index.php' >"+$trad("cadastroUsuario",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/usuarios/grupos/index.php' >"+$trad("cadastroGrupos",i3GEOadmin.menup.dicionario)+"</a>"
		}
	]},{
	html: $trad("metadadosEstatisticos",i3GEOadmin.menup.dicionario),
	children:[
		{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/variaveis/index.php' >"+$trad("cadastroVariav",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/mapas/index.php' >"+$trad("cadastroMapas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/unidades/index.php' >"+$trad("cadastroMedidas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/periodos/index.php' >"+$trad("cadastroPeriodos",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/conexoes/index.php' >"+$trad("cadastroConexoes",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/regioes/index.php' >"+$trad("cadastroTabelas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/metaestat/fontes/index.php' >"+$trad("cadastroFonte",i3GEOadmin.menup.dicionario)+"</a>"
		}
	]},{
	html: $trad("enviarArquivo",i3GEOadmin.menup.dicionario),
	type: "html",
	children:[
		{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/upload/arquivo/index.php' >"+$trad("enviarShp",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/upload/shp2pg/index.php' >"+$trad("shp2pg",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/upload/csv2pg/index.php' >"+$trad("csv2pg",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/upload/simbolo/index.php' >"+$trad("uploadSimbolo",i3GEOadmin.menup.dicionario)+"</a>"
		}
	]},{
	html: $trad("editaMapfile",i3GEOadmin.menup.dicionario),
	type: "html",
	children:[
		{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/mapfile/index.php' >"+$trad("editorMapfile",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/menus/index.php' >"+$trad("arvoreTemas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/mapas/index.php' >"+$trad("linkMapas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/atlas/index.php' >"+$trad("atlas",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/menus/grupos/listadegrupos/index.php' >"+$trad("listaDeGrupos",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/catalogo/menus/grupos/subgrupos/listadesubgrupos/index.php' >"+$trad("listaDeSubGrupos",i3GEOadmin.menup.dicionario)+"</a>"
		}
	]},{
	html: $trad("cadastros",i3GEOadmin.menup.dicionario),
	children:[
		{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/cadastros/servicos/index.php' >"+$trad("webServ",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/cadastros/identifica/index.php' >"+$trad("sistIdentifica",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/cadastros/sistemas/index.php' >"+$trad("sistAdiciona",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/cadastros/tags/index.php' >"+$trad("editaTags",i3GEOadmin.menup.dicionario)+"</a>"
		},{
		html: "<a href='" + i3GEO.configura.locaplic + "/admin1/cadastros/perfis/index.php' >"+$trad("editaPerfil",i3GEOadmin.menup.dicionario)+"</a>"
		}
	]}
];
	//menu
	$(menuPrincipal).each(
		function(i,el){
			l.push('<li class="dropdown" ><a href="#" class="dropdown-toggle" data-toggle="dropdown" >' + el.html + '<span class="caret"></span></a>');
			if(el.children){
				l.push('<ul class="dropdown-menu">');
				$(el.children).each(
					function(i,el){

						if(el.children){
							l.push('<li class="dropdown dropdown-submenu" ><a href="#" class="dropdown-toggle" data-toggle="dropdown">' + el.html + '</a>');

							l.push('<ul class="dropdown-menu">');
							$(el.children).each(
								function(i,el){
									l.push('<li>' + el.html + '</li>');
								}
							);
							l.push('</ul>');
						}
						else{
							l.push('<li>' + el.html);
						}
						l.push('</li>');
					}
				);
				l.push('</ul>');
			}
			l.push('</li>');
		}
	);
	$("#menuPrincipalTpl").html(l.join(""));
}
g_traducao = null;