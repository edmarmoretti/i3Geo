/**
 * Title: Janelas
 *
 * Cria e gerencia janelas flutuantes
 *
 * As janelas s&atilde;o criadas por meio da biblioteca YUI
 *
 * Namespace:
 *
 * i3GEO.janela
 *
 * Veja:
 *
 * <http://localhost/i3geo/classesjs/classe_janela.js>
 */

/**
 * Licen&ccedil;a
 *
 * GPL2
 *
 * i3Geo Interface Integrada de Ferramentas de Geoprocessamento para Internet
 *
 * Direitos Autorais Reservados (c) 2006 Minist&eacute;rio do Meio Ambiente Brasil Desenvolvedor: Edmar Moretti edmar.moretti@gmail.com
 *
 * Este programa &eacute; software livre; voc&ecirc; pode redistribu&iacute;-lo e/ou modific&aacute;-lo sob os termos da Licen&ccedil;a
 * P&uacute;blica Geral GNU conforme publicada pela Free Software Foundation;
 *
 * Este programa &eacute; distribu&iacute;do na expectativa de que seja &uacute;til, por&eacute;m, SEM NENHUMA GARANTIA; nem mesmo a
 * garantia impl&iacute;cita de COMERCIABILIDADE OU ADEQUAC&Atilde;O A UMA FINALIDADE ESPEC&Iacute;FICA. Consulte a Licen&ccedil;a
 * P&uacute;blica Geral do GNU para mais detalhes. Voc&ecirc; deve ter recebido uma c&oacute;pia da Licen&ccedil;a P&uacute;blica Geral do
 * GNU junto com este programa; se n&atilde;o, escreva para a Free Software Foundation, Inc., no endere&ccedil;o 59 Temple Street, Suite
 * 330, Boston, MA 02111-1307 USA.
 */
if (typeof (i3GEO) === 'undefined') {
	var i3GEO = {};
}
/**
 * YAHOO.namespace
 *
 * Namespace da biblioteca YUI utilizado para armazenar janelas flutuantes
 */
if(typeof YAHOO != 'undefined'){
	YAHOO.namespace("i3GEO.janela");
	/**
	 * Variavel: YAHOO.widget.OverlayManager
	 *
	 * Gerenciador das janelas flutuantes da biblioteca YUI
	 *
	 * Type:
	 *
	 * {YAHOO.widget.OverlayManager}
	 */
	YAHOO.i3GEO.janela.manager = new YAHOO.widget.OverlayManager();
	//para efeitos de compatibilidade com a vers&atilde;o 4.6
	YAHOO.namespace("janelaDoca.xp");
	YAHOO.janelaDoca.xp.manager = new YAHOO.widget.OverlayManager();
	/**
	 * Variavel: YAHOO.i3GEO.janela.managerAguarde
	 *
	 * Gerenciador das janelas flutuantes de aguarde
	 *
	 * Type:
	 *
	 * {YAHOO.widget.OverlayManager}
	 */
	YAHOO.i3GEO.janela.managerAguarde = new YAHOO.widget.OverlayManager();
}
//TODO criar janela que permita inserir um link e salva-la junto com o mapa
i3GEO.janela =
{
		//Config do plugin que controla a barra de rolagem
		scrollBar: {
			theme: "minimal-dark",
			axis: "yx",
			scrollbarPosition: "inside",
			advanced:{ autoExpandHorizontalScroll: true },
			scrollButtons:{ enable: false },
			contentTouchScroll : false,
			documentTouchScroll : false
		},
		/**
		 * Cada vez que uma janela flutuante &eacute; criada, esse valor &eacute; acrescido de 1
		 */
		ULTIMOZINDEX : 5,
		//aplica a estilizacao da barra de rolagem
		//https://github.com/malihu/malihu-custom-scrollbar-plugin
		//@TODO remover em breve
		applyScrollBar: function(iddiv,seletor,config) {
			var a = i3GEO.janela.scrollBar;
			if(config){
				a = i3GEO.util.cloneObj(i3GEO.janela.scrollBar);
				$.each( config, function( key, value ) {
					a[key] = value;
				});
			}
			/*
	    var i = $($i(iddiv));
	    if(seletor && selector != ""){
		i.find(seletor).mCustomScrollbar(a);
	    } else {
		i.mCustomScrollbar(a);
	    }
			 */
		},
		/**
		 * Executa fun&ccedil;&otilde;es default antes de abrir a janela
		 */
		prepara : function() {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.janela.prepara()");

			//
			// esconde o box de zoom e outros objetos tempor&aacute;rios se
			// estiverem vis&iacute;veis
			//
			var iu = i3GEO.util;
			// iu.escondePin();
			iu.escondeBox();
		},
		/**
		 * Minimiza uma janela na forma de um icone com opcoes de fechar e abrir novamente
		 *
		 * Parametro:
		 *
		 * {string} - id da janela
		 *
		 * {number} - largura em pixels da janela iconizada
		 *
		 * {string} - (opcional) id do rodape da janela
		 */
		iconiza : function(id,w,rodape){
			var j,r,t = i3GEO.janela.minimiza(id, w+"px",rodape);
			r = YAHOO.util.Resize.getResizeById(id);
			j = $i(id + "I");
			if(!j){
				return;
			}
			if (t === "min") {
				j.style.display = "none";
				if(r){
					r.lock();
				}
				if(rodape){
					$i(rodape).style.display = "none";
				}
			} else {
				j.style.display = "block";
				if(r){
					r.unlock();
				}
				if(rodape){
					$i(rodape).style.display = "block";
				}
			}
		},
		/**
		 * Minimiza ou maximiza a janela
		 *
		 * Parametro:
		 *
		 * {string} - prefixo utilizado na composi&ccedil;&atilde;o do id da janela
		 *
		 * {string} - (opcional) largura minima da janela
		 *
		 * Return:
		 *
		 * {min|max} indicativo se minimizou ou maximizou
		 */
		minimiza : function(id, min) {
			var temp = $i(id + "_corpo"), n, i, m = YAHOO.i3GEO.janela.manager.find(id), c = $i(id), t = "min", r = YAHOO.util.Resize.getResizeById(id),
			tipo = "";

			if (temp) {
				if (temp.style.display === "block") {
					temp.style.display = "none";
					if (m) {
						m.hideIframe();
					}
					m.winicial = c.style.width;
					if (min) {
						c.style.width = parseInt(min,10)+"px";
					}
					tipo = "none";
					if(r){
						r.lock();
					}
				} else {
					temp.style.display = "block";
					if (m) {
						m.showIframe();
					}
					c.style.width = m.winicial;
					t = "max";
					tipo = "block";
					if(r){
						r.unlock();
					}
				}
			}
			temp = $i(id + "_c");
			if (temp) {
				$(temp).find(".comboTemasCabecalhoBs,.ft,.yui-resize-handle,.underlay,.bd").css("display",tipo);
			}
			temp = $i(id + "_corpo");
			if (temp) {
				temp.style.display = tipo;
			}
			temp = $i(id);
			if (temp) {
				if (tipo === "block") {
					temp.style.height = "100%";
				} else {
					temp.style.height = "10%";
				}
			}
			return t;
		},
		/**
		 * Elimina alguns objetos que s&atilde;o comumente adicionados por algumas
		 * opera&ccedil;&otilde;es do i3geo como box, pin
		 *
		 * Parametros:
		 *
		 * event {objeto} - objeto YUI do evento que gerou o fechamento da janela
		 *
		 * args {objeto} - parametros do evento que fechou a janela
		 */
		fecha : function(event, args) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.janela.fecha()");

			var i, id;
			// esconde elementos gr&aacute;ficos q a ferramenta pode ter aberto
			// i3GEO.util.escondePin();
			i3GEO.util.escondeBox();
			if (i3GEO.janela.id) {
				id = i3GEO.janela.id;
			} else {
				id = event.id;
			}
			if (id == undefined) {
				id = args.id;
			}
			i3GEO.janela.destroi(id);
		},
		/**
		 * Destroi uma janela sem aplicar as funcoes adicionais
		 *
		 * Parametros:
		 *
		 * id {string} - id da janela
		 */
		destroi : function(id) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.janela.destroi() " + id);

			if(typeof(YAHOO) != "undefined"){
				var janela = YAHOO.i3GEO.janela.manager.find(id);
				i3GEO.util.removeScriptTag(id + "_script");
				i3GEO.util.removeScriptTag(id + ".dicionario_script");
				if (janela) {
					YAHOO.i3GEO.janela.manager.remove(janela);
					// janela.destroy();
					// destroy remove os listeners!!!!
					janela = $i(id + "_c");
					if(janela){
						janela.parentNode.removeChild(janela);
						try{
							YAHOO.util.Resize.getResizeById(id).destroy();
						} catch(e){}
					}
				}
			}
		},
		/**
		 * Function: alteraTamanho
		 *
		 * Altera o tamanho de uma janela aberta
		 *
		 * Parametros:
		 *
		 * {Integer} - nova largura
		 *
		 * {Integer} - nova altura
		 *
		 * {String} - (opcional) id que identifica a janela aberta
		 */
		alteraTamanho : function(w, h, id) {
			if (typeof (console) !== 'undefined')
				console.info("i3GEO.janela.alteraTamanho()");

			var i;
			if (arguments.length === 3) {
				i = $i(id);
			} else {
				i = $i("wdoca");
			}
			if (i) {
				i.style.width = w + "px";
				i.style.height = h + "px";
			}
		},
		CONTADORAGUARDE : [],
		/**
		 * Function: abreAguarde
		 *
		 * Abre uma janela com a mensagem de aguarde
		 *
		 * Parametros:
		 *
		 * {String} - id da nova janela
		 *
		 * {String} - texto da janela
		 */
		abreAguarde : function() {
			var p = $i("i3GEObarraAguarde");
			i3GEO.janela.CONTADORAGUARDE.push(" ");
			if(p){
				p.style.width = (i3GEO.janela.CONTADORAGUARDE.length * 15) + "%";
			}
		},
		/**
		 * Function: fechaAguarde
		 *
		 * Fecha uma janela do tipo aguarde
		 *
		 * Paremeters:
		 *
		 * {String} - id da janela que ser&aacute; fechada. Se n&atilde;o for definido, tenta fechar as janelas principais.
		 */
		fechaAguarde : function() {
			var p = $i("i3GEObarraAguarde");
			i3GEO.janela.CONTADORAGUARDE.pop();
			if (p){
				p.style.width = (i3GEO.janela.CONTADORAGUARDE.length * 15) + "%";
			}
		},
		//http://fezvrasta.github.io/snackbarjs/
		//styles: snackbar|red
		//$("#snackbarid").snackbar("hide");
		snackBar: function({content = "", style = "snackbar", timeout = 4000, htmlAllowed = true, onClose = function(){}}){
			$("#snackbar-container").find("div").filter(function(){
				if($(this).hasClass('snackbar-opened') == false){
					$(this).remove();
				}
			});
			var options =  {
					content: content, // text of the snackbar
					style: style, // add a custom class to your snackbar
					timeout: timeout, // time in milliseconds after the snackbar autohides, 0 is disabled
					htmlAllowed: htmlAllowed, // allows HTML as content value
					onClose: onClose // callback called when the snackbar gets closed.
			};
			var snack = $.snackbar(options);
			return snack;
		},
		/**
		 * Function: tempoMsg
		 *
		 * Abre uma janela com uma mensagem temporaria
		 *
		 * Parametros:
		 *
		 * {String} - texto da janela
		 *
		 * {segundos}
		 */
		tempoMsg : function(texto, tempo) {
			if(!tempo){
				tempo = 4000;
			}
			i3GEO.janela.snackBar({content: texto, timeout: tempo});
		},
		closeModal: false,
		//utilizado para mensagens genericas com botao de close
		closeMsg : function(texto) {
			if(!texto){
				texto = "";
			}
			if(!i3GEO.janela.closeModal){
				i3GEO.janela.closeModal = $(
						Mustache.render(i3GEO.template.janela.closemsg, {"texto": texto})
				);
				i3GEO.janela.closeModal.on('hidden.bs.modal', function (e) {
					$("#i3GEOMensagemCloseModal").html("");
				});
				$(i3GEO.janela.closeModal).appendTo("body");
				i3GEO.janela.closeModal.modal("show");
			} else if (texto != "") {
				$("#i3GEOMensagemCloseModal").html(texto);
				i3GEO.janela.closeModal.modal("show");
			}
			if(texto == ""){
				i3GEO.janela.closeModal.modal("hide");
			}
		},
		_formModal: false,
		//utilizado para mensagens de ferramentas com botao de close e outros parametros
		//utilize objJanela como uma variavel vazia que recebera o objeto criado e idForm para definir os IDs
		//dos elementos HTML internos da janela. Dessa forma a janela funcionara de forma independente
		formModal : function({objJanela = false, idForm = "", expandable = true, resizable = {disabled: true, ghost: true, handles: "se"}, texto = false, footer = false, header = false, onclose = false, backdrop = false, draggable = "enable", css = false} = {}) {
			var obj = false;
			if(objJanela == false){
				obj = i3GEO.janela._formModal;
			}
			if(css == false){
				css = {'cursor': 'pointer', 'width': '', 'height': '','position': 'fixed','top': 0, 'left': 0, 'right': 0, 'margin': 'auto'};
			}
			if(draggable == "enable"){
				css.cursor = "move";
				css.right = "auto";
			}
			if(!obj){
				obj = $(
						Mustache.render(i3GEO.template.janela.formModal, {"texto": "","header": "", "id": idForm})
				);
				obj.on('hidden.bs.modal', function (e) {
					$("#i3GEOToolFormModal" + idForm).html("");
					$("#i3GEOToolFormModalHeader" + idForm).html("");
					$("#i3GEOToolFormModalFooter" + idForm).html("").css({display: "none"});
				});
				obj.resizable(resizable);
				if(resizable.disabled == true){
					obj.resizable( "destroy" );
				}
				obj.draggable({
					handle: ".handleDraggable"
				});
				obj.css(css);
				obj.draggable(draggable);
				$(obj).appendTo("#" + i3GEO.Interface.IDCORPO);

				obj.find(".expandModal").on("click",function(){
					if($(this).data("expanded") == true){
						$(this).data("expanded",false);
						obj.css($(this).data("original"));
					} else {
						$(this).data("expanded",true);
						$(this).data("original",{
							top: obj.css("top"),
							left: obj.css("left"),
							width: obj.css("width"),
							height: obj.css("height")
						});
						obj.css({"top":"0px","left":"0px","width":"100%","height":"100%"});
					}
				});
			}
			if(expandable == true){
				obj.find(".expandModal").css("visibility","visible");
			} else {
				obj.find(".expandModal").css("visibility","hidden");
			}
			if(texto == false){
				obj.modal("hide");
			} else {
				$("#i3GEOToolFormModal" + idForm).html(texto);
				if(header){
					$("#i3GEOToolFormModalHeader" + idForm).html(header);
				} else {
					$("#i3GEOToolFormModalHeader" + idForm).html("");
				}
				if(footer){
					$("#i3GEOToolFormModalFooter" + idForm).html(footer).css({display: "block"});
				} else {
					$("#i3GEOToolFormModalFooter" + idForm).html("").css({display: "none"});
				}
				obj.find(".modal-content").css("height","");

				obj.css(css);

				obj.modal({
					backdrop: backdrop
				});
				obj.draggable(draggable);
				obj.resizable(resizable);
				if(resizable.disabled == true){
					obj.resizable( "destroy" );
				} else {
					obj.find(".modal-content").css("height","100%");
				}
				obj.css("padding-left",0);
			}
			//fecha as guias em dispositivos com tela pequena
			if(i3GEO.parametros.w < 420){
				i3GEO.guias.abreFecha("fecha");
			}
			if(onclose != false){
				if (typeof (console) !== 'undefined')
					console.info("onclose janela._formModal");

				obj.on("hidden.bs.modal",function(){
					onclose();
					obj.unbind("hidden.bs.modal");
				});
			} else {
				obj.unbind("hidden.bs.modal");
			}
			obj.block = function(){
				$("#i3GEOToolFormModalWrap").css("display","block");
			};
			obj.unblock = function(){
				$("#i3GEOToolFormModalWrap" + idForm).css("display","none");
			};
			$("#i3GEOToolFormModalWrap").css("display","none");
			if(objJanela == false){
				i3GEO.janela._formModal = obj;
			}
			return obj;
		},
		/**
		 * Function: ativaAlerta
		 *
		 * Substitui a janel&ccedil;a de alerta padr&atilde;o do sistema operacional por uma outra customizada
		 */
		ativaAlerta : function() {
			window.alert = function(texto) {
				var textoI, janela = YAHOO.i3GEO.janela.managerAguarde.find("alerta");
				if (!janela) {
					janela = new YAHOO.widget.SimpleDialog("alerta", {
						width : "300px",
						fixedcenter : true,
						visible : false,
						draggable : false,
						zIndex : 100000,
						textAlign : "left",
						close : false,
						modal : false,
						effect : {
							effect : YAHOO.widget.ContainerEffect.FADE,
							duration : 0.25
						},
						constraintoviewport : true,
						text : ""
					});
					// YAHOO.i3GEO.janela.dialogInfo.cfg.setProperty("icon",YAHOO.widget.SimpleDialog.ICON_WARN);
					YAHOO.i3GEO.janela.managerAguarde.register(janela);
					janela.setHeader(" ");

					janela.render(document.body);
					janela.setFooter("<div class='form-group condensed' id='alertFooter'></div>");
					var ins = Mustache.render(i3GEO.template.botoes.padrao, {text: $trad("x74")});
					var fecha = function(){YAHOO.i3GEO.janela.managerAguarde.find("alerta").destroy();};
					$('#alertFooter').append($(ins).click(fecha));
				}
				textoI = janela.cfg.getProperty("text");
				if (textoI != "") {
					textoI += "<br>";
				}
				texto = textoI + texto;
				janela.cfg.setProperty("text", "<h4 class='alertTitulo'>" + texto + "</h4>");
				janela.show();
			};
		},
		/**
		 * Function: confirma
		 *
		 * Janela de confirmacao
		 *
		 * Parametros:
		 *
		 * {string} - texto da pegunta
		 *
		 * {numeric} - largura da janela
		 *
		 * {string} - (opcional) texto do botao 1
		 *
		 * {string} - (opcional) texto do botao 2
		 *
		 * {function} - (opcional) funcao do botao 1
		 *
		 * {function} - (opcional) funcao do botao 2
		 */
		confirma : function(pergunta, w, resposta1, resposta2, funcao1, funcao2) {
			i3GEO.janela.closeMsg(" ");
			var msg = $("#i3GEOMensagemCloseModal");

			var f1, f2, f3;

			if (!funcao1 || funcao1 == "") {
				f1 = function() {
					i3GEO.janela.closeMsg();
					return true;
				};
			} else {
				f1 = function() {
					funcao1.call();
					i3GEO.janela.closeMsg();
				};
			}
			if (!funcao2 || funcao2 == "") {
				f2 = function() {
					i3GEO.janela.closeMsg();
					return false;
				};
			} else {
				f2 = function() {
					funcao2.call();
					i3GEO.janela.closeMsg();
				};
			}
			f3 = function() {
				i3GEO.janela.closeMsg();
			};
			if (!resposta1 || resposta1 == "") {
				resposta1 = $trad("confirma");
			}
			b = [
				{
					text : resposta1,
					handler : f1
				}
				];
			if (resposta2 && resposta2 != "") {
				b.push({
					text : resposta2,
					handler : f2
				});
			}
			msg.html("<h4 class='alertTitulo'>" + pergunta + "</h4><div class='form-group condensed' id='confirmaFooter'></div>");
			var ins = "";
			$.each(b, function( index, value ) {
				ins = Mustache.render(i3GEO.template.botoes.padrao, {style:'margin-right:10px;',text: value.text});
				$('#confirmaFooter').append($(ins).click(value.handler));
			});
		},
		/**
		 * Function: prompt
		 *
		 * Janela de prompt para entrada de dados
		 *
		 * O campo para digitacao contem o ID 'i3GEOjanelaprompt'
		 *
		 * Parametros:
		 *
		 * {string} - texto da pegunta
		 *
		 * {function} - (opcional) funcao do botao ok
		 *
		 * {string} - (opcional) valor default
		 */
		prompt : function(pergunta, funcaoOk, valorDefault) {
			var botao = Mustache.render(
					i3GEO.template.botoes.padrao,
					{
						style:'margin-right:10px;',
						text: $trad("confirma"),
						id: "i3GEOJanelapromptOk"
					}
			);
			var text = ""
				+ "<div class='form-group label-fixed condensed' >"
				+ "    <label class='control-label' for=''>"
				+      pergunta
				+ "    </label>"
				+ "    <input class='form-control input-lg' type='text' id='i3GEOjanelaprompt' value='"+ valorDefault +"' />"
				+ "</div>"
				+ botao;
			i3GEO.janela.closeMsg(text);
			$("#i3GEOJanelapromptOk").on("click",function(){
				i3GEO.janela.closeMsg();
				funcaoOk.call();
			});
		},
		alerta : function({html = "", pergunta = "", funcaoOk = false, parametros = false} = {} ) {
			var botao = Mustache.render(
					i3GEO.template.botoes.padrao,
					{
						style:'margin-right:10px;',
						text: $trad("confirma"),
						id: "i3GEOJanelapromptOk"
					}
			);
			var text = ""
				+ "<div class='form-group label-fixed condensed' >"
				+ "    <label class='control-label' for=''>"
				+      pergunta
				+ "    </label>"
				+      html
				+ "</div>"
				+ botao;
			i3GEO.janela.closeMsg(text);
			$("#i3GEOJanelapromptOk").on("click",parametros,function(){
				i3GEO.janela.closeMsg();
				if(funcaoOk){
					funcaoOk(parametros);
				}
			});
		},
		mensagemSimples : function(texto) {
			this.closeMsg(texto);
		},
		/**
		 * Adiciona no cabe&ccedil;alho da janela um combo com a lista de temas para janelas abertas por ferramentas
		 *
		 * Essa fun&ccedil;&atilde;o &eacute; utilizada pelas ferramentas que operam sobre um determinado tema. O combo permite que o
		 * usu&aacute;rio selecione um tema e ative a ferramenta para funcionar com esse tema
		 *
		 * Parametros:
		 *
		 * idDiv {string} - id do elemento HTML que receber&aacute; o combo
		 *
		 * idCombo {string} - id do combo que ser&aacute; criado
		 *
		 * ferramenta {string} - nome da ferramenta (namespace da classe, por exemplo "tabela" para a classe i3GEOF.tabela
		 *
		 * tipo {string} - tipo de combo
		 *
		 * onButtonClick {function} - funcao que sera executada no evento onchange do combo a ser criado
		 */
		comboCabecalhoTemas : function(idDiv, idCombo, ferramenta, tipo, onButtonClick, temaSel) {
			var temp = $i(idDiv);
			// tenta pegar o tema que ja foi escolhido antes
			if (!temaSel) {
				temaSel = "";
			}
			if (temaSel == "" && i3GEOF[ferramenta] && i3GEOF[ferramenta].tema && i3GEOF[ferramenta].tema != "") {
				// o tema escolhido pode estar definido na variavel da ferramenta
				temaSel = i3GEOF[ferramenta].tema;
			}
			if (temp) {
				i3GEO.util.comboTemas(temp.id + "Sel", function(retorno) {
					var tema, container = $i(idDiv), botao;
					container.innerHTML = retorno.dados;
					botao = new YAHOO.widget.Button(idCombo, {
						type : "menu",
						menu : idCombo + "select"
					});
					if (temaSel != "") {
						tema = i3GEO.arvoreDeCamadas.pegaTema(temaSel);
						if (tema && tema != undefined) {
							botao.set("label", "<span class='cabecalhoTemas' >" + tema.tema + "</span>&nbsp;&nbsp;");
						} else {
							botao.set("label", "<span class='cabecalhoTemas' >" + $trad("x92") + "</span>&nbsp;&nbsp;");
						}
					} else {
						botao.set("label", "<span class='cabecalhoTemas' >" + $trad("x92") + "</span>&nbsp;&nbsp;");
					}
					if (!onButtonClick) {
						onButtonClick =
							function(p_sType, p_aArgs) {
							var oMenuItem = p_aArgs[1];
							if (oMenuItem) {
								i3GEO.mapa.ativaTema(oMenuItem.value);
								if (oMenuItem.value === "") {
									i3GEO.temaAtivo = "";
									botao.set("label", "<span class='cabecalhoTemas' >" + $trad("x92") + "</span>&nbsp;&nbsp;");
								} else {
									botao.set("label", "<span class='cabecalhoTemas' >" + oMenuItem.cfg.getProperty("text")
											+ "</span>&nbsp;&nbsp;");
								}
								if (i3GEOF[ferramenta]) {
									i3GEOF[ferramenta].tema = oMenuItem.value;
									if ($i("i3GEOF." + ferramenta + "_corpo")) {
										$i("i3GEOF." + ferramenta + "_corpo").innerHTML = "";
										eval("i3GEOF." + ferramenta + ".inicia('i3GEOF." + ferramenta + "_corpo');");
									}
								}
							}
						};
						//
						// a busca nao funciona com parametros dentro de parenteses
						// por isso e necessario zerar o array
						//
						if (i3GEO.eventos.ATUALIZAARVORECAMADAS.length > 20) {
							i3GEO.eventos.ATUALIZAARVORECAMADAS = [];
						}
						i3GEO.eventos.adicionaEventos("ATUALIZAARVORECAMADAS", [
							"i3GEO.janela.comboCabecalhoTemas('" + idDiv + "','" + idCombo + "','" + ferramenta + "','" + tipo + "')"
							]);
					}
					botao.getMenu().subscribe("click", onButtonClick, botao);
				}, temp.id, "", false, tipo, "", true, true, "");
			}
		},
		comboCabecalhoTemasBs : function(idDiv, idCombo, ferramenta, tipo, onButtonClick, temaSel) {
			var temp = $i(idDiv);
			// tenta pegar o tema que ja foi escolhido antes
			if (!temaSel) {
				temaSel = "";
			}
			if (temaSel == "" && i3GEOF[ferramenta] && i3GEOF[ferramenta].tema && i3GEOF[ferramenta].tema != "") {
				// o tema escolhido pode estar definido na variavel da ferramenta
				temaSel = i3GEOF[ferramenta].tema;
			} else {
				temaSel = i3GEO.temaAtivo;
				if (i3GEOF[ferramenta] && i3GEOF[ferramenta].tema) {
					i3GEOF[ferramenta].tema = temaSel;
				}
			}
			if (temp) {
				i3GEO.util.comboTemas(temp.id + "Sel", function(retorno) {
					var tema, container = $i(idDiv), botao;
					container.innerHTML += retorno.dados;
					botao = $i(temp.id + "Sel");

					if (temaSel != "") {
						tema = i3GEO.arvoreDeCamadas.pegaTema(temaSel);
						if (tema && tema != undefined) {
							botao.value = tema.name;
						} else {
							botao.value= "";
						}
					} else {
						botao.value= "";
					}
					if (!onButtonClick) {
						onButtonClick = function(botao){
							i3GEO.mapa.ativaTema(botao.value);
							if(botao.value == ""){
								i3GEO.temaAtivo = "";
							}
							if (i3GEOF[ferramenta]) {
								i3GEOF[ferramenta].tema = botao.value;
								if ($i("i3GEOF." + ferramenta + "_corpo")) {
									$i("i3GEOF." + ferramenta + "_corpo").innerHTML = "";
									eval("i3GEOF." + ferramenta + ".inicia('i3GEOF." + ferramenta + "_corpo');");
								}
							}
						};
					}
					botao.onchange = onButtonClick;
				}, temp.id, "", false, tipo, "font-size: 12px;width: 95%;color:white;", false, true, "form-control comboTema");
			}
		}
};
