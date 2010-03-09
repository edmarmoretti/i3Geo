/*jslint plusplus:false,white:false,undef: false, rhino: true, onevar: true, evil: true */

/*
Title: Mapa de refer�ncia

Arquivo:

i3geo/classesjs/classe_maparef.js

Licenca:

GPL2

I3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet

Direitos Autorais Reservados (c) 2006 Minist�rio do Meio Ambiente Brasil
Desenvolvedor: Edmar Moretti edmar.moretti@mma.gov.br

Este programa � software livre; voc� pode redistribu�-lo
e/ou modific�-lo sob os termos da Licen�a P�blica Geral
GNU conforme publicada pela Free Software Foundation;
tanto a vers�o 2 da Licen�a.
Este programa � distribu�do na expectativa de que seja �til,
por�m, SEM NENHUMA GARANTIA; nem mesmo a garantia impl�cita
de COMERCIABILIDADE OU ADEQUA��O A UMA FINALIDADE ESPEC�FICA.
Consulte a Licen�a P�blica Geral do GNU para mais detalhes.
Voc� deve ter recebido uma c�pia da Licen�a P�blica Geral do
GNU junto com este programa; se n�o, escreva para a
Free Software Foundation, Inc., no endere�o
59 Temple Street, Suite 330, Boston, MA 02111-1307 USA.
*/
if(typeof(i3GEO) === 'undefined'){
	i3GEO = [];
}
/*
Classe: i3GEO.maparef

Cria e processa o mapa de refer�ncia

Exemplo:

i3Geo.maparef.inicia()
*/
i3GEO.maparef = {
	/*
	Propriedade: fatorZoomDinamico
	
	Define o fator de zoom inicial do mapa de refer�ncia quando o modo din�mico for ativado
	
	Tipo:
	{numeric}
	
	Default:
	{-3}
	*/
	fatorZoomDinamico: -3,
	/*
	Propriedade: SELETORTIPO
	
	Inclui ou n�o o seletor de tipo de mapa de refer�ncia
	
	Tipo:
	{Boolean}
	
	Default:
	{true}
	*/
	SELETORTIPO:true,
	/*
	Propriedade: PERMITEFECHAR
	
	Mostra o bot�o para fechar a janela ou n�o.
	
	Tipo:
	{boolean}
	
	Default:
	{true}
	*/
	PERMITEFECHAR: true,
	/*
	Propriedade: PERMITEDESLOCAR
	
	Permite deslocar janela ou n�o.
	
	Tipo:
	{boolean}
	*/
	PERMITEDESLOCAR: true,
	/*
	Propriedade: TRANSICAOSUAVE
	
	Altera a transpar�ncia quando o mouse sobrep�e ao mapa de refer�ncia e quando sai
	
	Essa op��o como true n�o funciona bem no IE
	
	Tipo:
	{boolean}
	
	Default:
	{true}
	*/
	TRANSICAOSUAVE: false,
	/*
	Propriedade: OPACIDADE
	
	Valor da transpar�ncia m�nima utilizada quando TRANSICAOSUAVE for igual a true.
	
	Varia de 0 a 100
	
	Tipo:
	{numeric}
	
	Default:
	{35}
	*/
	OPACIDADE: 35,
	/*
	Propriedade: TOP
	
	Posi��o da janela em rela��o ao topo do mapa
	
	Tipo:
	{Numeric}
	
	Default:
	{4}
	*/
	TOP: 4,
	/*
	Propriedade: RIGHT
	
	Posi��o da janela em rela��o ao lado direito do mapa
	
	{Numeric}
	
	Defau:
	{0}
	*/
	RIGHT:0,
	/*
	Function: inicia
	
	Inicializa o mapa de refer�ncia
	*/
	inicia: function(){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.maparef.inicia()");}
		//YAHOO.log("initJanelaRef", "i3geo");
		var r,pos,novoel,ins,temp,moveX,moveY,escondeRef;
		if (!$i("i3geo_winRef")){
			novoel = document.createElement("div");
			novoel.id = "i3geo_winRef";
			novoel.style.display="none";
			novoel.style.borderColor="gray";
			ins = "";
			if(i3GEO.maparef.PERMITEDESLOCAR){
				ins += '<div class="hd" style="text-align:left;z-index:20;">';
				ins += '<span id=maparefmaismenosZoom > ';
				temp = "javascript:if(i3GEO.maparef.fatorZoomDinamico == -1){i3GEO.maparef.fatorZoomDinamico = 1};i3GEO.maparef.fatorZoomDinamico = i3GEO.maparef.fatorZoomDinamico + 1 ;$i(\"refDinamico\").checked = true;i3GEO.maparef.atualiza();";
				ins += "<img class=mais onclick='"+temp+"' src="+i3GEO.util.$im("branco.gif")+" />";
				temp = "javascript:if(i3GEO.maparef.fatorZoomDinamico == 1){i3GEO.maparef.fatorZoomDinamico = -1};i3GEO.maparef.fatorZoomDinamico = i3GEO.maparef.fatorZoomDinamico - 1 ;$i(\"refDinamico\").checked = true;i3GEO.maparef.atualiza();";
				ins += "<img class=menos onclick='"+temp+"' src="+i3GEO.util.$im("branco.gif")+" /></span>&nbsp;";		
				if(i3GEO.maparef.SELETORTIPO){
					ins += "<select id='refDinamico' onchange='javascript:i3GEO.maparef.atualiza()'>";
					ins += "<option value='fixo' select >fixo</option>";
					ins += "<option value='mapa' >mapa</option>";
					ins += "<option value='dinamico' >din�mico</option>";
					ins += "</select>";
				}
				ins += "</div>";
			}
			ins += '<div class="bd" style="text-align:left;padding:3px;border-bottom-width:1px;" id="mapaReferencia" onmouseover="this.onmousemove=function(exy){i3GEO.eventos.posicaoMouseMapa(exy)}"  >';
			ins += '<img style="cursor:pointer;" id=imagemReferencia src="" onclick="javascript:i3GEO.maparef.click()">';
			ins += '</div>';
			novoel.innerHTML = ins;
			document.body.appendChild(novoel);
			if(i3GEO.maparef.TRANSICAOSUAVE){
				novoel = $i("imagemReferencia");
				if (navm)
				{novoel.style.filter='alpha(opacity='+i3GEO.maparef.OPACIDADE+')';}
				else
				{novoel.style.opacity= i3GEO.maparef.OPACIDADE / 100;}
				novoel.onmouseover = function(){
					if (navm)
					{novoel.style.filter='alpha(opacity=100)';}
					else
					{novoel.style.opacity= 1;}				
				};
				novoel.onmouseout = function(){
					if (navm)
					{novoel.style.filter='alpha(opacity='+i3GEO.maparef.OPACIDADE+')';}
					else
					{novoel.style.opacity= i3GEO.maparef.OPACIDADE / 100;}				
				};
			}
		}
		if($i("i3geo_winRef").style.display !== "block"){
			$i("i3geo_winRef").style.display = "block";
			YAHOO.namespace("janelaRef.xp");
			temp = "none";
			if(i3GEO.maparef.PERMITEDESLOCAR)
			{temp = "shadow";}
			YAHOO.janelaRef.xp.panel = new YAHOO.widget.Panel("i3geo_winRef", { height:"200px", width:"156px", fixedcenter: false, constraintoviewport: true, underlay:temp, close:i3GEO.maparef.PERMITEFECHAR, visible:true, draggable:i3GEO.maparef.PERMITEDESLOCAR, modal:false,iframe:false } );
			YAHOO.janelaRef.xp.panel.render();
			r = $i("i3geo_winRef_c");
			if(r){
				r.style.clip = "rect(0px, 160px, 179px, 0px)";
				r.style.position = "absolute";
			}
			pos = i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));

			moveX = pos[0] + i3GEO.parametros.w + 153 - i3GEO.maparef.RIGHT - 300;
			moveY = pos[1] + i3GEO.maparef.TOP;
			YAHOO.janelaRef.xp.panel.moveTo(moveX,moveY);
			escondeRef = function(){
				YAHOO.util.Event.removeListener(YAHOO.janelaRef.xp.panel.close, "click");
				YAHOO.janelaRef.xp.panel.destroy();	
				i3GEO.util.insereCookie("i3GEO.configura.mapaRefDisplay","none");
			};
			YAHOO.util.Event.addListener(YAHOO.janelaRef.xp.panel.close, "click", escondeRef);	
			i3GEO.util.insereCookie("i3GEO.configura.mapaRefDisplay","block");
			if(typeof(atualizaLocalizarxy) === "function"){
				if(i3GEO.gadgets.PARAMETROS.mostraCoordenadasGEO.idhtml)
				{YAHOO.util.Event.addListener($i("imagemReferencia"),"mousemove", atualizaLocalizarxy);}
			}
		}
		//YAHOO.log("Fim initJanelaRef", "i3geo");
		if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.maparef.atualiza()") < 0)
		{i3GEO.eventos.NAVEGAMAPA.push("i3GEO.maparef.atualiza()");}
		this.atualiza();
		$i("i3geo_winRef_h").className = "hd2";
	},
	/*
	Function: atualiza
	
	Atualiza o mapa de refer�ncia.

	Se o modo cgi estiver ativado, o mapa de refer�ncia � desenhado utilizando-se como src da imagem o programa cgi do Mapserver.
	
	No modo din�mico, a imagem � gerada de forma diferenciada. Nesse caso, o modo cgi � desabilitado.
	
	O atualizaReferencia � sempre chamado ap�s o mapa ser redesenhado.
	
	Se houve altera��o na extens�o, � preciso refazer o mapa de refer�ncia se n�o, a imagem atual � armazenada no quado de anima��o
	*/
	atualiza: function(){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.maparef.atualiza()");}
		var dinamico,tiporef,temp,re;
		dinamico = false;
		if ($i("refDinamico"))
		{tiporef = $i("refDinamico").value;}
		else
		{tiporef = "fixo";}
		if ($i("mapaReferencia")){
			temp = $i("maparefmaismenosZoom");
			if(tiporef === "dinamico"){
				i3GEO.php.referenciadinamica(i3GEO.maparef.processaImagem,i3GEO.maparef.fatorZoomDinamico,tiporef);
				if(temp){temp.style.display="inline";}
			}
			if(tiporef === "fixo"){
				if(($i("imagemReferencia").src === "") || (i3GEO.parametros.cgi !== "sim")){
					i3GEO.php.referencia(i3GEO.maparef.processaImagem);
					if(temp){temp.style.display="none";}
				}
				else{
					re = new RegExp("&mode=map", "g");
					$i("imagemReferencia").src = $i(i3GEO.Interface.IDMAPA).src.replace(re,'&mode=reference');
					i3GEO.gadgets.quadros.grava("referencia",$i("imagemReferencia").src);
				}
			}
			if(tiporef === "mapa"){
				i3GEO.php.referenciadinamica(i3GEO.maparef.processaImagem,i3GEO.maparef.fatorZoomDinamico,tiporef);
				if(temp){temp.style.display="inline";}
			}
		}
		else{
			if($i("imagemReferencia"))
			{i3GEO.gadgets.quadros.grava("referencia",$i("imagemReferencia").src);}
			i3GEO.eventos.NAVEGAMAPA.remove("i3GEO.maparef.atualiza()");
		}
	},
	/*
	Function: processaImagem
		
	Substitu� a imagem do mapa de refer�ncia pela �ltima gerada.

	Esta fun��o processa os dados de uma chamada AJAX para atualizar o mapa de refer�ncia
	
	Parametro:

	retorno - string no formato "var refimagem='nome da imagem'".
	*/
	processaImagem: function(retorno){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.maparef.processaImagem()");}
		var w,tiporef,m,novoel,boxrefdd,box;
		i3GEO.janela.fechaAguarde("ajaxreferencia1");
		if ((retorno.data !== "erro") && (retorno.data !== undefined)){
			eval(retorno.data);
			i3GEO.parametros.celularef = g_celularef;
			i3GEO.parametros.extentref = extentref;
			if ($i("imagemReferencia")){
				m = new Image();
				m.src = refimagem;
				$i("imagemReferencia").src=m.src;
			}
			i3GEO.gadgets.quadros.grava("referencia",refimagem);
			tiporef = "fixo";
			if ($i("refDinamico"))
			{tiporef = $i("refDinamico").value;}
			box = $i("boxref");
			if(tiporef !== "fixo"){
				if (box)
				{box.style.display = "none";}
				return;
			}
			//
			//box movel sobre o mapa
			//
			if (!box){
				novoel = document.createElement("div");
				novoel.id = "boxref";
				novoel.style.zIndex=10;
				novoel.style.position = 'absolute';
				novoel.style.cursor = "move";
				novoel.style.backgroundColor = "RGB(120,220,220)";
				if (navm){novoel.style.filter='alpha(opacity=40)';}
				else{novoel.style.opacity= 0.4;}
				$i("mapaReferencia").appendChild(novoel);
				boxrefdd = new YAHOO.util.DD("boxref");
				novoel.onmouseup = function(){
					var rect,telaminx,telaminxy,telamaxx,telaminy,m,x,ext;
					rect = $i("boxref");
					telaminx = parseInt(rect.style.left,10);
					telamaxy = parseInt(rect.style.top,10);
					telamaxx = telaminx + parseInt(rect.style.width,10);
					telaminy = telamaxy + parseInt(rect.style.height,10);
					m = i3GEO.calculo.tela2dd(telaminx,telaminy,i3GEO.parametros.celularef,i3GEO.parametros.extentref);
					x = i3GEO.calculo.tela2dd(telamaxx,telamaxy,i3GEO.parametros.celularef,i3GEO.parametros.extentref);
					ext = m[0]+" "+m[1]+" "+x[0]+" "+x[1];
					i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,"",ext);
				};
				box = $i("boxref");
			}
			i3GEO.calculo.ext2rect("boxref",extentref,i3GEO.parametros.mapexten,g_celularef,$i("mapaReferencia"));
			w = parseInt(box.style.width,10);
			if(w > 120 || w < 10)
			{box.style.display = "none";}
			else{
				box.style.display = "block";
				box.style.top = parseInt(box.style.top,10)+4;
				box.style.left = parseInt(box.style.left,10)+4;
			}
		}
	},
	/*
	Function: click
	
	Ocorre quando o usu�rio clica sobre o mapa de refer�ncia, alterando a extens�o geogr�fica do mapa principal
	*/
	click: function(){
		if(typeof(console) !== 'undefined'){console.info("i3GEO.maparef.click()");}
		try{
			i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
			i3GEO.contadorAtualiza++;
			i3GEO.php.pan(i3GEO.atualiza,i3GEO.parametros.mapscale,"ref",objposicaocursor.refx,objposicaocursor.refy);
		}
		catch(e){
			i3GEO.janela.fechaAguarde("i3GEO.atualiza");
			if(typeof(console) !== 'undefined'){console.error(e);}
		}	
	}
};
//YAHOO.log("carregou classe maparef", "Classes i3geo");