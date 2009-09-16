/*
Title: Mapa

Arquivo:

i3geo/classesjs/classe_mapa.js

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
if(typeof(i3GEO) == 'undefined'){
	i3GEO = [];
}
/*
Classe: i3GEO.mapa

Cria e processa o mapa principal

Em i3GEO.mapa.dialogo est�o as fun��es de abertura dos di�logos para altera��o das propriedades do mapa,
como cor de fundo, tipo de imagem, legenda etc.
*/
i3GEO.mapa = {
	/*
	Variavel: GEOXML
	Armazena o nome dos objetos geoXml adicionados ao mapa pela API do google maps
	
	Tipo:
	{Array}
	*/
	GEOXML: [],
	/*
	Function: ajustaPosicao
	
	Ajusta o posicionamento do corpo do mapa
	
	Esse ajuste � necess�rio na inicializa��o, uma vez que o mapa utiliza style.position='absolute'
	
	Parameters:
	
	elemento {String} - id do elemento HTML que dever� ser ajustado e que cont�m o mapa
	*/
	ajustaPosicao: function(elemento){
		if(arguments.length == 0){return;}
		try{
			imagemxi = 0;
			imagemyi = 0;
			imagemxref = 0;
			imagemyref = 0;
			var dc = $i(elemento);
			while ((dc.offsetParent) && (dc.offsetParent.id != "i3geo")){
				dc = dc.offsetParent;
				imagemxi = imagemxi + dc.offsetLeft;
				imagemyi = imagemyi + dc.offsetTop;
			}	
			var c = $i(i3GEO.Interface.IDCORPO);
			if (c){
				c.style.position="absolute";
				$left(i3GEO.Interface.IDCORPO,imagemxi);
				$top(i3GEO.Interface.IDCORPO,imagemyi);
			}
		}
		catch(e){alert("Ocorreu um erro. i3GEO.mapa.ajustaPosicao"+e);}
	},
	/*
	Function: ativaLogo

	Ativa ou desativa a logo marca.
	*/
	ativaLogo: function(){
		i3GEO.contadorAtualiza++;
		i3GEO.php.ativalogo(i3GEO.atualiza);
	},
	/*
	Function: verifica
	
	Verifica se ocorreu algum problema na atualiza��o do corpo do mapa e inicia o processo de tentativa de recupera��o
	
	Parametro:
	
	retorno {string} - objeto recebido da fun��o PHP de atualiza��o do mapa
	*/
	verifica:function(retorno){
		try{
			i3GEO.janela.abreAguarde("ajaxCorpoMapa",$trad("o3"));
			if(retorno.data){var retorno = retorno.data;}
			if (retorno.variaveis){var retorno = retorno.variaveis;}
			if ((retorno == "erro") || (retorno == undefined)){
				i3GEO.mapa.ajustaPosicao();
				i3GEO.janela.fechaAguarde();
				i3GEO.mapa.recupera.inicia();
			}
			i3GEO.mapa.recupera.TENTATIVA = 0;
		}
		catch(e){
			if(i3GEO.Interface.ATUAL == "openlayers"){
				i3GEO.janela.fechaAguarde();
				return;
			}
			if(i3GEO.mapa.recupera.TENTATIVA == 0){
				alert("Erro no mapa. Sera feita uma tentativa de recuperacao.");
				i3GEO.mapa.recupera.inicia();
			}
			else{
				alert("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");
				if (i3GEO.mapa.recupera.TENTATIVA == 1){
					i3GEO.mapa.recupera.TENTATIVA = 2;
					i3GEO.contadorAtualiza++;
					i3GEO.php.reiniciaMapa(i3GEO.atualiza);
				}		
			}
		}
	},
	/*
	Function: insereToponimo
	
	Insere um texto no mapa na posi��o clicada

	O ponto � obtido do objeto objposicaocursor e os demais par�metros da janela interna aberta no iframe "wdocai"
	*/
	insereToponimo: function(){
		if (g_tipoacao == "textofid"){
			//
			//pega os par�metros da janela flutuante aberta
			//
			var doc = (navm) ? document.frames("wdocai").document : $i("wdocai").contentDocument;
			texto = doc.getElementById("texto").value;
			var f = doc.getElementById("fonte").value;
			var t = doc.getElementById("tamanho").value;
			var a = doc.getElementById("angulo").value;
			var cf = doc.getElementById("fundoc").value;
			if (cf == ""){cf = "off";}
			var cs = doc.getElementById("sombra").value;
			if (cs == ""){cs = "off";}
			var xs = doc.getElementById("sombrax").value;
			var ys = doc.getElementById("sombray").value;
			var c = doc.getElementById("frente").value;
			var m = doc.getElementById("mascara").value;
			if (m == ""){m = "off";}
			var fcs = doc.getElementById("frentes").value;
			if (fcs == ""){fcs = "off";}
			var fxs = doc.getElementById("frentex").value;
			var fys = doc.getElementById("frentey").value;
			var forca = doc.getElementById("force").value;
			var md = doc.getElementById("mindistance").value;
			var mf = doc.getElementById("minfeaturesize").value;
			var ox = doc.getElementById("offsetx").value;
			var oy = doc.getElementById("offsety").value;
			var pl = doc.getElementById("partials").value;
			var pos = doc.getElementById("position").value;
			//o texto ser� digitado
			var digi = function(retorno){
				//se texto for igual a vazio � pq o valor foi pego de um atributo
				if(texto == ""){
					i3GEO.janela.fechaAguarde("i3GEO.atualiza");
					texto = retorno.data;
				}
				if (texto != " "){
					i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
					i3GEO.contadorAtualiza++;
					i3GEO.php.insereAnnotation(i3GEO.atualiza,g_nomepin+"topo",objposicaocursor.ddx+" "+objposicaocursor.ddy,texto,pos,pl,ox,oy,mf,md,forca,fcs,fxs,fys,m,c,ys,xs,cs,cf,a,t,f);
				}
			};
			if (doc.getElementById("tipoInsere").value == "digitando")
			{digi.call();}
			else{
				//o texto ser� capturado de um atributo do elemento
				texto = "";
				if ((doc.getElementById("temasLigados")) && (doc.getElementById("itemsel"))){
					var tema = doc.getElementById("temasLigados").value;
					var item = doc.getElementById("itemsel").value;
					i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
					i3GEO.php.identificaunico(digi,objposicaocursor.ddx+","+objposicaocursor.ddy,tema,item);
				}			
			}
		}
		else{i3GEO.eventos.MOUSECLIQUE.remove("i3GEO.mapa.insereToponimo()");}
	},
	/*
	Function: inserePonto
	
	Insere um ponto no mapa na posi��o clicada

	O ponto � obtidos do objeto objposicaocursor e os demais par�metros da janela interna aberta no iframe "wdocai"
	*/
	inserePonto: function(){
		if (g_tipoacao == "inserexy"){
			var doc = (navm) ? document.frames("wdocai").document : $i("wdocai").contentDocument;
			if(doc.getElementById("resultado")){
				var ins = doc.getElementById("resultado").innerHTML;
				ins = ins + "<div style='font-size:12px' >" + objposicaocursor.ddx +" " + objposicaocursor.ddy + "</div><br>";
				doc.getElementById("resultado").innerHTML = ins;
			}
			var item = "";
			var valoritem = "";
			if((doc.getElementById("valorItem")) && (doc.getElementById("itemtema"))){
				var item = doc.getElementById("itemtema").value;
				var valoritem = doc.getElementById("valorItem").value;
			}
			if (g_nomepin == ""){alert("Nenhum tema definido para editar");}
			else{
				i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
				i3GEO.contadorAtualiza++;
				i3GEO.php.insereSHP(i3GEO.atualiza,g_nomepin,item,valoritem,objposicaocursor.ddx+" "+objposicaocursor.ddy);
			}
		}
	},
	/*
	Function: insereGrafico
	
	Insere um grafico no mapa na posi��o clicada

	O ponto � obtidos do objeto objposicaocursor e os demais par�metros da janela interna aberta no iframe "wdocai"
	*/
	insereGrafico: function(){
		if (g_tipoacao == "inseregrafico"){
			var doc = (navm) ? document.frames("wdocai").document : $i("wdocai").contentDocument;
			var tema = doc.getElementById("temasLigados").value;
			var width = doc.getElementById("w").value;
			var inclinacao = doc.getElementById("inclinacao").value;
			var shadow_height = doc.getElementById("sombra").value;
			if (tema == ""){alert("Nenhum tema definido para pegar os dados");}
			else{
				//pega os itens e as cores definidas
				var listadeitens = [];
				var g = doc.getElementById("listai");
				var iguias = g.getElementsByTagName("input");
				var i = iguias.length-1;
				if (i >= 0){
					do{
						if (iguias[i].checked == true){
							var it = iguias[i].id;
							var c = doc.getElementById("cor"+it).value;
							listadeitens.push(it+","+c);
						}
					}
					while(i--)
				}
				var itens = listadeitens.join("*");
				if (itens == "")
				{alert("Nenhum item foi escolhido");}
				else{
					i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));
					i3GEO.contadorAtualiza++;
					i3GEO.php.insereSHPgrafico(i3GEO.atualiza,tema,objposicaocursor.ddx,objposicaocursor.ddy,itens,shadow_height,width,inclinacao);
				}
			}
		}
	},
	/*
	Classe: i3GEO.mapa.recupera
	
	Tenta recuperar o mapa caso ocorra algum problema
	
	O i3Geo mant�m sempre uma c�pia do arquivo mapfile em uso. Essa fun��o tenta
	usar essa c�pia para restaurar o funcionamento do mapa
	*/
	recupera:{
		/*
		Variavel: TENTATIVA
		
		Armazena a quantidade de tentativas de recupera��o que foram feitas
		
		Tipo:
		{Integer}
		*/
		TENTATIVA: 0,
		/*
		Function: inicia
		
		Inicia a tentativa de recupera��o
		*/
		inicia: function(){
			i3GEO.mapa.ajustaPosicao();
			i3GEO.janela.fechaAguarde();
			if(i3GEO.mapa.recupera.TENTATIVA == 0){
				i3GEO.mapa.recupera.TENTATIVA++;
				i3GEO.mapa.recupera.restaura();
			}
		},
		/*
		Function: restaura
		
		Restaura o mapa para a c�pia de seguran�a existente no servidor
		*/
		restaura: function(){
			i3GEO.php.recuperamapa(i3GEO.atualiza);
		}
	},
	/*
	Classe: i3GEO.mapa.legendaHTML
	
	Controla a obten��o da legenda do mapa formatada em HTML.
	
	�til para mostrar a legenda na tela
	*/
	legendaHTML:{
		/*
		Propriedade: incluiBotaoLibera
		
		Define se na legenda ser� incluido o bot�o para liberar a legenda e inclu�-la em uma janela flutuante
		
		Tipo:
		{boolean}
		
		Default:
		{true}
		*/
		incluiBotaoLibera: true,
		/*
		Variavel:  ID
		
		Armazena o id definido na cria��o da legenda
		*/
		ID: "",
		/*
		Function: cria
		
		Cria a legenda HTML
		
		A legenda � incluida no id definido. Se id for igual a "", ser� apenas definido o evento de atualiza��o
		permitindo que seja criada a janela flutuante apenas, por exemplo:
		
		i3GEO.mapa.legendaHTML.cria("");
		i3GEO.mapa.legendaHTML.libera();		
		
		Parametros:
		
		id {String} - id do elemento que receber� a legenda
		*/
		cria: function(id){
			if(arguments.length == 0){var id = "";}
			i3GEO.mapa.legendaHTML.ID = id;
			if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.mapa.legendaHTML.atualiza()") < 0)
			{i3GEO.eventos.NAVEGAMAPA.push("i3GEO.mapa.legendaHTML.atualiza()");}					
			i3GEO.mapa.legendaHTML.atualiza();			
		},
		/*
		Function: atualiza
		
		Atualiza a legenda do mapa que s�o utilizados para mostrar a legenda
		*/
		atualiza: function(){
			var temp = function(retorno){
				if(i3GEO.mapa.legendaHTML.ID != "" && $i(i3GEO.mapa.legendaHTML.ID))
				{
					if ((retorno.data != "erro") && (retorno.data != undefined)){
						var s = i3GEO.configura.locaplic+"/imagens/solta.gif";
						var ins = "";
						if(i3GEO.mapa.legendaHTML.incluiBotaoLibera == true)
						{ins += "<img onclick='i3GEO.mapa.legendaHTML.libera()' id=soltaLeg src="+s+" title='clique para liberar'/><br>";}
						ins += "<div id='corpoLegi' >"+ retorno.data.legenda + "</div>";
						$i(i3GEO.mapa.legendaHTML.ID).innerHTML = ins;
					}
				}
				if ($i("wlegenda")){
					$i("wlegenda").innerHTML = retorno.data.legenda;
					var elementos = $i("wlegenda").getElementsByTagName("input");
					for(i=0;i<elementos.length;i++)
					{elementos[i].style.display="none";}
				}
			};
			i3GEO.mapa.legendaHTML.obtem(temp);
		},
		/*
		Function: obtem
		
		Faz a chamada em AJAX que gera a legenda
		
		O resultado � processado pela fun��o passada como par�metro
		
		Parametro:
		
		funcao {function} - fun��o que receber� o resultado da chamada AJAX. O objeto CPAINT � enviado como par�metro.
		*/
		obtem: function(funcao){
			i3GEO.php.criaLegendaHTML(funcao,"",i3GEO.configura.templateLegenda);
		},
		/*
		Function: ativaDesativaTema
		
		Liga ou desliga um �nico tema. Utilizado pela legenda HTML, permitindo que um tema seja processado diretamente na legenda.
		
		Parametro:
		
		inputbox {object) - objeto do tipo input checkbox com a propriedade value indicando o c�digo do tema que ser� processado
		*/
		ativaDesativaTema: function(inputbox){
			var temp = function(){
				i3GEO.contadorAtualiza++;
				i3GEO.php.corpo(i3GEO.atualiza,i3GEO.configura.tipoimagem);
				i3GEO.arvoreDeCamadas.atualiza("");
				i3GEO.janela.fechaAguarde("redesenha");
			};
			i3GEO.janela.abreAguarde("redesenha",$trad("o1"));
			if(!inputbox.checked)
			i3GEO.php.ligatemas(temp,inputbox.value,"");
			else
			i3GEO.php.ligatemas(temp,"",inputbox.value);		
		},
		/*
		Function: libera
		
		Libera a legenda criando uma janela flutuante sobre o mapa
		*/
		libera: function(){
			var temp = function(retorno){
				if (!$i("moveLegi")){
					var novoel = document.createElement("div");
					novoel.id = "moveLegi";
					novoel.style.display="block";
					var temp = '<div class="hd">Legenda</div>';
					temp += '<div id="wlegenda" style="text-align:left;background-color:white" ></div>';
					novoel.innerHTML = temp;
					document.body.appendChild(novoel);
					YAHOO.namespace("moveLegi.xp");
					YAHOO.moveLegi.xp.panel = new YAHOO.widget.Panel("moveLegi", {width:"300px", fixedcenter: true, constraintoviewport: false, underlay:"none", close:true, visible:true, draggable:true, modal:false,iframe:false } );
					YAHOO.moveLegi.xp.panel.render();
				}
				$i("wlegenda").innerHTML = retorno.data.legenda;
				var temp = $i("wlegenda").getElementsByTagName("input");
				var n = temp.length;
				for(i=0;i<n;i++){
					temp[i].style.display = "none";
				}
				YAHOO.moveLegi.xp.panel.show();				
			};
			i3GEO.mapa.legendaHTML.obtem(temp);
		}
	},
	/*
	Classe: i3GEO.mapa.legendaIMAGEM
	
	Controla a obten��o da legenda do mapa na forma de uma imagem
	
	� utilizado principalmente para armazenar as imagens para a fun��o de 
	obten��o do hist�rico do mapa
	*/
	legendaIMAGEM:{
		/*
		Function: obtem
		
		Faz a chamada em AJAX que gera a legenda
		
		O resultado � processado pela fun��o passada como par�metro
		
		Parametro:
		
		funcao {function} - fun��o que receber� o resultado da chamada AJAX. O objeto CPAINT � enviado como par�metro.
		*/
		obtem: function(funcao){
			i3GEO.php.criaLegendaImagem(funcao);
		}
	},
	/*
	Classe: i3GEO.mapa.dialogo
	
	Abre as telas de di�logo das op��es de manipula��o do mapa atual
	*/
	dialogo:{
		/*
		Function: autoredesenha

		Abre a janela para defini��o do intervalo de tempo para redesenho autom�tico do mapa.
		*/
		autoredesenha: function()
		{i3GEO.janela.cria("300px","110px",i3GEO.configura.locaplic+"/ferramentas/opcoes_autoredesenha/index.htm","","","Temporizador <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=9' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: salvaMapa

		Abre a janela para salvar localmente o mapfile utilizado no mapa atual
		*/
		salvaMapa: function(){
			if(i3GEO.parametros == "")
			{alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return;}
			i3GEO.janela.cria("300px","180px",i3GEO.configura.locaplic+"/ferramentas/salvamapa/index.htm","","","Salva mapa <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=2&idajuda=10' >&nbsp;&nbsp;&nbsp;</a>");
		},
		/*
		Function: carregaMapa

		Abre a janela para a carga de um mapfile salvo localmente na m�quina dousu�rio.
		*/
		carregaMapa: function()
		{i3GEO.janela.cria("300px","150px",i3GEO.configura.locaplic+"/ferramentas/carregamapa/index.htm?urlatual="+window.location,"","","Carrega mapa <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=2&idajuda=11' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: convertews

		Abre a janela para converter o mapa atual em web service WMS
		*/
		convertews: function(){
			if(i3GEO.parametros.mapfile == "")
			{alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return;}
			i3GEO.janela.cria("440px","280px",i3GEO.configura.locaplic+"/ferramentas/convertews/index.htm","","","WMS <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=2&idajuda=12' >&nbsp;&nbsp;&nbsp;</a>");
		},
		/*
		Function: convertekml

		Abre a janela para converter o mapa atual em KML
		*/
		convertekml: function(){
			if(i3GEO.parametros.mapfile == "")
			{alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return;}
			i3GEO.janela.cria("440px","280px",i3GEO.configura.locaplic+"/ferramentas/convertemapakml/index.htm","","","Kml <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=2&idajuda=13' >&nbsp;&nbsp;&nbsp;</a>");
		},
		/*
		Function: queryMap

		Abre a janela que altera as propriedades da exibi��o dos elementos selecionados.
		*/
		queryMap: function()
		{i3GEO.janela.cria("210px","80px",i3GEO.configura.locaplic+"/ferramentas/opcoes_querymap/index.htm","","","Cor da sele��o <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=5' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: template

		Abre a janela que muda o template do mapa atual.
		*/
		template: function()
		{i3GEO.janela.cria("300px","400px",i3GEO.configura.locaplic+"/ferramentas/template/index.htm","","","Template <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=8' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: tamanho

		Abre a janela que muda o tamanho do mapa
		*/
		tamanho: function()
		{i3GEO.janela.cria("150px","170px",i3GEO.configura.locaplic+"/ferramentas/opcoes_tamanho/index.htm","","","Tamanho <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=4' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: tipoimagem

		Abre a janela que define um filtro gr�fico (s�pia por exemplo) sobre a imagem gerada alterando suas caracter�sticas
		*/
		tipoimagem: function()
		{i3GEO.janela.cria("300px","260px",i3GEO.configura.locaplic+"/ferramentas/tipoimagem/index.htm","","","Tipo de imagem <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=1' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: corFundo

		Abre a janela que altera a cor do fundo do mapa atual.
		*/
		corFundo: function()
		{i3GEO.janela.cria("210px","80px",i3GEO.configura.locaplic+"/ferramentas/opcoes_fundo/index.htm","","","Cor do fundo <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=6' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: opcoesEscala

		Abre a janela para defini��o das op��es da barra de escala.
		*/
		opcoesEscala: function()
		{i3GEO.janela.cria("250px","300px",i3GEO.configura.locaplic+"/ferramentas/opcoes_escala/index.htm","center","center","Escala <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=3' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: opcoesLegenda

		Abre a janela de configura��o da legenda do mapa
		*/
		opcoesLegenda: function()
		{i3GEO.janela.cria("320px","350px",i3GEO.configura.locaplic+"/ferramentas/opcoes_legenda/index.htm","","","Legenda <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=2' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: gradeCoord

		Abre a janela que gera grade de coordenadas
		*/
		gradeCoord: function()
		{i3GEO.janela.cria("350px","330px",i3GEO.configura.locaplic+"/ferramentas/gradecoord/index.htm","","","Grade de coordenadas <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=7' >&nbsp;&nbsp;&nbsp;</a>");},
		/*
		Function: cliqueTexto
		
		Abre o di�logo para inclus�o de textos diretamente no mapa
		
		Registra os eventos que controlam o clique sobre o mapa
		*/
		cliqueTexto: function(){
			if (g_tipoacao != "textofid"){
				var temp = Math.random() + "b";
				temp = temp.split(".");
				g_nomepin = "pin"+temp[1];
				g_tipoacao = "textofid";
				var janela = i3GEO.janela.cria("360px","250px",i3GEO.configura.locaplic+"/ferramentas/inseretxt/index.htm","","","Texto");
				if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEO.mapa.insereToponimo()") < 0)
				{i3GEO.eventos.MOUSECLIQUE.push("i3GEO.mapa.insereToponimo()");}
				var temp = function(){
					i3GEO.eventos.MOUSECLIQUE.remove("i3GEO.mapa.insereToponimo()");
					i3GEO.barraDeBotoes.ativaBotoes();
				};
				YAHOO.util.Event.addListener(janela[0].close, "click", temp);
			}
		},
		/*
		Function: cliquePonto
		
		Abre o di�logo para inclus�o de pontos diretamente no mapa
		
		Registra os eventos que controlam o clique sobre o mapa
		*/
		cliquePonto: function(){
			if (g_tipoacao != "inserexy"){
				g_tipoacao = "inserexy";
				var temp = Math.random() + "a";
				temp = temp.split(".");
				g_nomepin = "pin"+temp[1];
				var janela = i3GEO.janela.cria("500px","300px",i3GEO.configura.locaplic+'/ferramentas/inserexy2/index.htm',"","","Insere");
				if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEO.mapa.inserePonto()") < 0)
				{i3GEO.eventos.MOUSECLIQUE.push("i3GEO.mapa.inserePonto()");}
				var temp = function(){
					i3GEO.eventos.MOUSECLIQUE.remove("i3GEO.mapa.inserePonto()");
					i3GEO.barraDeBotoes.ativaBotoes();
				};
				YAHOO.util.Event.addListener(janela[0].close, "click", temp);
			}
		},
		/*
		Function: cliqueGrafico
		
		Abre o di�logo para inclus�o de gr�ficos diretamente no mapa
		
		Registra os eventos que controlam o clique sobre o mapa
		*/
		cliqueGrafico: function(){
			if (g_tipoacao != "inseregrafico"){
				g_tipoacao = "inseregrafico";
				var temp = Math.random() + "a";
				temp = temp.split(".");
				g_nomepin = "pin"+temp[1];
				var janela = i3GEO.janela.cria("400px","300px",i3GEO.configura.locaplic+'/ferramentas/inseregrafico/index.htm',"","","Insere");
				if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEO.mapa.insereGrafico()") < 0)
				{i3GEO.eventos.MOUSECLIQUE.push("i3GEO.mapa.insereGrafico()");}
				var temp = function(){
					i3GEO.eventos.MOUSECLIQUE.remove("i3GEO.mapa.insereGrafico()");
					i3GEO.barraDeBotoes.ativaBotoes();
				};
				YAHOO.util.Event.addListener(janela[0].close, "click", temp);
			}
		},
		/*
		Function: cliqueIdentificaDefault
		
		Abre o di�logo para obten��o de informa��es quando o usu�rio clica no mapa.
		
		Essa � a fun��o padr�o definida em i3GEO.configura		
		*/
		cliqueIdentificaDefault: function(){
			if (g_tipoacao == "identifica"){
				i3GEO.eventos.MOUSEPARADO.remove("verificaTip()");
				if(typeof(i3GEOF.identifica) == 'undefined'){
					//fun��o para o clique sobre o cabecalho da janela
					var cabecalho = function(){
						i3GEO.barraDeBotoes.ativaIcone("identifica");
						g_tipoacao='identifica';
						g_operacao='identifica';
					};
					var janela = i3GEO.janela.cria("450px","250px","","","","Identifica <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=8&idajuda=70' >&nbsp;&nbsp;&nbsp;</a>","i3GEOF.identifica",false,"hd",cabecalho);
					var js = i3GEO.configura.locaplic+"/ferramentas/identifica/index.js";
					var divid = janela[2].id;
					var ini = "i3GEOF.identifica.inicia('"+i3GEO.configura.locaplic+"','"+i3GEO.configura.sid+"','"+i3GEO.temaAtivo+"',"+objposicaocursor.ddx+","+objposicaocursor.ddy+",'"+divid+"',true,true)";
					i3GEO.util.scriptTag(js,ini,"i3GEOF.identifica_script");
					
					if(i3GEO.Interface.ATUAL != "googlemaps"){
						var temp = function(){
							i3GEO.eventos.MOUSECLIQUE.remove("cliqueIdentifica()");
							i3GEO.barraDeBotoes.ativaBotoes();
						};
						YAHOO.util.Event.addListener(janela[0].close, "click", temp);
					}
				}
				else{
					i3GEOF.identifica.x = objposicaocursor.ddx;
					i3GEOF.identifica.y = objposicaocursor.ddy;
					i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo);
					return;
				}
			}
		},
		/*
		Function: verificaTipDefault
		
		Mostra etiquetas no mapa com informa��es sobre os temas com etiquetas ativas
		
		Essa � a fun��o padr�o definida em i3GEO.configura		
		*/
		verificaTipDefault: function(){
			var ntemas = i3GEO.arvoreDeCamadas.CAMADAS.length;
			var etiquetas = false;
			for(var j=0;j<ntemas;j++)
			{if(i3GEO.arvoreDeCamadas.CAMADAS[j].etiquetas != ""){var etiquetas = true;}}
			if(etiquetas == false){return;}
			
			if(i3GEO.Interface.ATUAL=="padrao"){$i("img").style.cursor = "wait";}
			
			var retorna = function(retorno){
				var i = $i("i3geo_rosa");
				if(i){i.style.display="none";}			
				var mostra = false;
				try{
					var retorno = retorno.data;
					if (retorno != "")
					{
						var res = "";
						var temas = retorno;
						var ntemas = temas.length;
						for(var j=0;j<ntemas;j++){
							var titulo = temas[j].nome;
							if (i3GEO.configura.tipotip == "completo" || i3GEO.configura.tipotip == "balao")
							{var titulo = "<span style='text-decoration:underline;text-align:left;font-size:9pt'><b>"+titulo+"</b></span><br>";}
							else
							{var titulo = "";}
							var tips = (temas[j].resultado.tips).split(",");
							var ntips = tips.length;
							var ins = "";
							for(var r=0;r<ntips;r++){
								var ds = temas[j].resultado.dados;
								if(ds != " "){
									var nds = ds.length;	
									for(var s=0;s<nds;s++){
										eval("var alias = ds[s]."+tips[r]+".alias");
										eval("var valor = ds[s]."+tips[r]+".valor");
										eval("var link = ds[s]."+tips[r]+".link");
										eval("var img = ds[s]."+tips[r]+".img");
										if (i3GEO.configura.tipotip == "completo" || i3GEO.configura.tipotip == "balao"){
											if(valor != "" && link == "") 
											ins += "<span class='tiptexto' style='text-align:left;font-size:8pt'>" + alias + " :" + valor + "</span><br>";
											if(valor != "" && link != "") 
											ins += "<span class='tiptexto' style='text-align:left;font-size:8pt'>" + alias + " : <a style='color:blue;cursor:pointer' target=_blanck href='"+link+"' >" + valor + "</a></span><br>";

											if(img != "")
											ins += img+"<br>";
											
											var mostra = true;
										}
										else{
											ins += "<span class='tiptexto' style='text-align:left;font-size:8pt'>" + valor + "</span><br>";
											var mostra = true;
										}
									}
								}
							}
							if(ins != "")
							var res = res + titulo + ins;
						}
						if(!mostra){
							if($i("tip"))
							$i("tip").style.display="none";
							return;
						}
						else{		
							if(i3GEO.configura.tipotip != "balao"){
								var n = i3GEO.janela.tip();
								$i(n).style.textAlign="left";
								$i(n).innerHTML += res;
							}
							else{
								i3GEO.util.criaPin('marcaIdentifica',i3GEO.configura.locaplic+"/imagens/grabber.gif","12px","12px");
								i3GEO.util.posicionaImagemNoMapa("marcaIdentifica");
								balloon = new Balloon;
								balloon.delayTime = 0;
								var res = "<div style=text-align:left >"+res+"</div>";
								balloon.showTooltip($i("marcaIdentifica"),res);
								$i('marcaIdentifica').onclick = $i("closeButton").onclick;
							}
						}
					}
					if(i3GEO.Interface.ATUAL=="padrao"){
						var temp = "zoom";
						if(i3GEO.Interface.ATIVAMENUCONTEXTO)
						var temp = "identifica_contexto";
						i3GEO.util.mudaCursor(i3GEO.configura.cursores,temp,"img",i3GEO.configura.locaplic);
					}
				}
				catch(e){
					if(i3GEO.Interface.ATUAL=="padrao"){
						var temp = "identifica";
						if(i3GEO.Interface.ATIVAMENUCONTEXTO)
						var temp = "identifica_contexto";
						i3GEO.util.mudaCursor(i3GEO.configura.cursores,temp,"img",i3GEO.configura.locaplic);
					}
				}
			};
			i3GEO.php.identifica2(retorna,objposicaocursor.ddx,objposicaocursor.ddy,"5");
		}
	}
};
//YAHOO.log("carregou classe mapa", "Classes i3geo");