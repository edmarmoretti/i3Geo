if(typeof(i3GEO)==='undefined'){var i3GEO={}}if(typeof YAHOO!='undefined'){YAHOO.namespace("i3GEO.janela");YAHOO.i3GEO.janela.manager=new YAHOO.widget.OverlayManager();YAHOO.namespace("janelaDoca.xp");YAHOO.janelaDoca.xp.manager=new YAHOO.widget.OverlayManager();YAHOO.i3GEO.janela.managerAguarde=new YAHOO.widget.OverlayManager()}i3GEO.janela={scrollBar:{theme:"minimal-dark",axis:"yx",scrollbarPosition:"inside",advanced:{autoExpandHorizontalScroll:true},scrollButtons:{enable:false},contentTouchScroll:false,documentTouchScroll:false},ULTIMOZINDEX:5,applyScrollBar:function(iddiv,seletor,config){var a=i3GEO.janela.scrollBar;if(config){a=i3GEO.util.cloneObj(i3GEO.janela.scrollBar);$.each(config,function(key,value){a[key]=value})}},prepara:function(){var iu=i3GEO.util;iu.escondeBox()},cria:function(wlargura,waltura,wsrc,nx,ny,texto,id,modal,classe,funcaoCabecalho,funcaoMinimiza,funcaoAposRedim,dimensionavel,icone,funcaoDuplica,opacidade,classeAdicional,idajuda){if(waltura&&waltura==""){waltura="auto"}if(arguments.length<13){dimensionavel=true}if(arguments.length<17){classeAdicional="i3geo6"}if(!icone){icone=""}var i,wlargurA,ins,novoel,wdocaiframe,temp,fix,underlay,ifr,janela;if($i(id)){janela=YAHOO.i3GEO.janela.manager.find(id);janela.show();janela.bringToTop();return}i3GEO.janela.prepara();if(!classe||classe==""){classe="hd"}if(!id||id===""){id="wdoca"}if(!modal||modal===""){modal=false}ifr=false;fix="contained";if(nx===""||nx==="center"){fix=true}if(modal===true){underlay="none"}else{underlay="shadow"}temp=navm?0:2;wlargurA=parseInt(wlargura,10)+temp+"px";ins='<div id="'+id+'_cabecalho" class="'+classe+' '+classeAdicional+'" >';if(i3GEO.configura!==undefined){ins+=Mustache.render(i3GEO.template.janela.aguarde,{id:id})}if(icone!=""){}if(idajuda){ins+=texto}else{ins+="<span style='font-size:10px;'>"+texto+"</span>"}if(funcaoDuplica&&funcaoDuplica!=""){ins+="<div id='"+id+"_duplicaJanela' class='container-duplica'><span class='material-icons'>add_circle_outline</span></div>"}if(funcaoMinimiza&&funcaoMinimiza!=""){ins+="<div id='"+id+"_minimizaCabecalho' class='container-minimiza'><span class='material-icons'>aspect_ratio</span></div>"}ins+='</div><div id="'+id+'_corpo" class="bd '+classeAdicional+'" style="display:block;padding:0px">';if(wsrc!==""){ins+='<div class="container-fluid"><iframe name="'+id+'i" id="'+id+'i" valign="top" style="border:0px white solid;width:100%"></iframe></div>'}ins+='</div>';if(idajuda){ins+='<div class="ft '+classeAdicional+'"><i onclick="i3GEO.ajuda.ferramenta(\''+idajuda+'\')" class="material-icons iconeAjudaFerramentas" >help</i></div>'}else{ins+='<div class="ft '+classeAdicional+'"></div>'}novoel=document.createElement("div");novoel.id=id;novoel.style.display="block";novoel.innerHTML=ins;document.body.appendChild(novoel);wdocaiframe=$i(id+"i");if(wdocaiframe){temp=wdocaiframe.style;temp.height=waltura;temp.display="block";wdocaiframe.src=wsrc}else{if(waltura!=="auto"){$i(id+'_corpo').style.height=parseInt(waltura,10)+"px"}$i(id+'_corpo').style.width='100%';$i(id+'_corpo').style.overflow="auto"}if(waltura==="auto"||dimensionavel==false){janela=new YAHOO.widget.Panel(id,{iframe:ifr,modal:modal,width:wlargurA,underlay:underlay,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null,strings:{close:"<span class='material-icons'>cancel</span>"}})}else{janela=new YAHOO.widget.Panel(id,{hideMode:'offsets',iframe:ifr,underlay:underlay,modal:modal,width:wlargurA,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null,strings:{close:"<span class='material-icons'>cancel</span>"}})}if(YAHOO.util.Resize&&dimensionavel==true){var resize=new YAHOO.util.Resize(id,{handles:['br'],autoRatio:false,minWidth:10,minHeight:10,status:false,proxy:true,ghost:false,animate:false,useShim:true});resize.on('resize',function(args){this.cfg.setProperty("height",args.height+"px");if(wdocaiframe){wdocaiframe.style.height=args.height-50+"px"}},janela,true);if(funcaoAposRedim&&funcaoAposRedim!=""){resize.on('endResize',function(args){i3GEO.janela.minimiza();funcaoAposRedim.call()},janela,true)}resize.getProxyEl().style.height="0px"}if(nx!==""&&nx!=="center"){janela.moveTo(nx,ny+50)}YAHOO.i3GEO.janela.manager.register(janela);janela.cfg.setProperty("effect",[{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.5}]);janela.cfg.setProperty("zIndex",[4]);janela.render();if(ifr===true){janela.iframe.style.zIndex=4}YAHOO.util.Event.addListener($i(id+'_corpo'),"click",YAHOO.util.Event.stopPropagation);if(funcaoDuplica&&funcaoDuplica!=""){$i(id+'_duplicaJanela').onclick=funcaoDuplica}if(funcaoCabecalho&&funcaoCabecalho!=""){$i(id+'_cabecalho').onclick=funcaoCabecalho}if(funcaoMinimiza&&funcaoMinimiza!=""){$i(id+"_minimizaCabecalho").onclick=funcaoMinimiza}YAHOO.util.Event.addListener(janela.close,"click",i3GEO.janela.fecha,janela,{id:id},true);temp=$i(id+"_c");if(temp&&temp.style){temp.style.maxWidth="90%"}temp=$i(id);if(temp&&temp.style){temp.style.maxWidth="100%"}temp=$i(id+"_corpo");janela.bringToTop();if(waltura!=="auto"&&wsrc==""){}return([janela,$i(id+"_cabecalho"),temp])},iconiza:function(id,w,rodape){var j,r,t=i3GEO.janela.minimiza(id,w+"px",rodape);r=YAHOO.util.Resize.getResizeById(id);j=$i(id+"I");if(!j){return}if(t==="min"){j.style.display="none";if(r){r.lock()}if(rodape){$i(rodape).style.display="none"}}else{j.style.display="block";if(r){r.unlock()}if(rodape){$i(rodape).style.display="block"}}},minimiza:function(id,min){var temp=$i(id+"_corpo"),n,i,m=YAHOO.i3GEO.janela.manager.find(id),c=$i(id),t="min",r=YAHOO.util.Resize.getResizeById(id),tipo="";if(temp){if(temp.style.display==="block"){temp.style.display="none";if(m){m.hideIframe()}m.winicial=c.style.width;if(min){c.style.width=parseInt(min,10)+"px"}tipo="none";if(r){r.lock()}}else{temp.style.display="block";if(m){m.showIframe()}c.style.width=m.winicial;t="max";tipo="block";if(r){r.unlock()}}}temp=$i(id+"_c");if(temp){$(temp).find(".comboTemasCabecalhoBs,.ft,.yui-resize-handle,.underlay,.bd").css("display",tipo)}temp=$i(id+"_corpo");if(temp){temp.style.display=tipo}temp=$i(id);if(temp){if(tipo==="block"){temp.style.height="100%"}else{temp.style.height="10%"}}return t},fecha:function(event,args){var i,id;i3GEO.util.escondeBox();if(i3GEO.janela.id){id=i3GEO.janela.id}else{id=event.id}if(id==undefined){id=args.id}i3GEO.janela.destroi(id)},destroi:function(id){if(typeof(YAHOO)!="undefined"){var janela=YAHOO.i3GEO.janela.manager.find(id);i3GEO.util.removeScriptTag(id+"_script");i3GEO.util.removeScriptTag(id+".dicionario_script");if(janela){YAHOO.i3GEO.janela.manager.remove(janela);janela=$i(id+"_c");if(janela){janela.parentNode.removeChild(janela);try{YAHOO.util.Resize.getResizeById(id).destroy()}catch(e){}}}}},alteraTamanho:function(w,h,id){var i;if(arguments.length===3){i=$i(id)}else{i=$i("wdoca")}if(i){i.style.width=w+"px";i.style.height=h+"px"}},CONTADORAGUARDE:[],abreAguarde:function(){var p=$i("i3GEObarraAguarde");i3GEO.janela.CONTADORAGUARDE.push(" ");if(p){p.style.width=(i3GEO.janela.CONTADORAGUARDE.length*15)+"%"}},fechaAguarde:function(){var p=$i("i3GEObarraAguarde");i3GEO.janela.CONTADORAGUARDE.pop();if(p){p.style.width=(i3GEO.janela.CONTADORAGUARDE.length*15)+"%"}},snackBar:function({content="",style="snackbar",timeout=4000,htmlAllowed=true,onClose=function(){}}){$("#snackbar-container").find("div").filter(function(){if($(this).hasClass('snackbar-opened')==false){$(this).remove()}});var options={content:content,style:style,timeout:timeout,htmlAllowed:htmlAllowed,onClose:onClose};var snack=$.snackbar(options);return snack},tempoMsg:function(texto,tempo){if(!tempo){tempo=4000}i3GEO.janela.snackBar({content:texto,timeout:tempo})},closeModal:false,closeMsg:function(texto){if(!texto){texto=""}if(!i3GEO.janela.closeModal){i3GEO.janela.closeModal=$(Mustache.render(i3GEO.template.janela.closemsg,{"texto":texto}));i3GEO.janela.closeModal.on('hidden.bs.modal',function(e){$("#i3GEOMensagemCloseModal").html("")});$(i3GEO.janela.closeModal).appendTo("body");i3GEO.janela.closeModal.modal("show")}else if(texto!=""){$("#i3GEOMensagemCloseModal").html(texto);i3GEO.janela.closeModal.modal("show")}if(texto==""){i3GEO.janela.closeModal.modal("hide")}},_formModal:false,formModal:function({expandable=true,resizable={disabled:true,ghost:true,handles:"se"},texto=false,footer=false,header=false,onclose=false,backdrop=false,draggable="enable",css=false}={}){if(css==false){css={'cursor':'pointer','width':'','height':'','position':'fixed','top':0,'left':0,'right':0,'margin':'auto'}}if(draggable=="enable"){css.cursor="move"}if(!i3GEO.janela._formModal){i3GEO.janela._formModal=$(Mustache.render(i3GEO.template.janela.formModal,{"texto":"","header":""}));i3GEO.janela._formModal.on('hidden.bs.modal',function(e){$("#i3GEOToolFormModal").html("");$("#i3GEOToolFormModalHeader").html("");$("#i3GEOToolFormModalFooter").html("").css({display:"none"})});i3GEO.janela._formModal.resizable(resizable);if(resizable.disabled==true){i3GEO.janela._formModal.resizable("destroy")}i3GEO.janela._formModal.draggable({handle:".handleDraggable"});i3GEO.janela._formModal.css(css);i3GEO.janela._formModal.draggable(draggable);$(i3GEO.janela._formModal).appendTo("#"+i3GEO.Interface.IDCORPO);i3GEO.janela._formModal.find(".expandModal").on("click",function(){if($(this).data("expanded")==true){$(this).data("expanded",false);i3GEO.janela._formModal.css($(this).data("original"))}else{$(this).data("expanded",true);$(this).data("original",{top:i3GEO.janela._formModal.css("top"),left:i3GEO.janela._formModal.css("left"),width:i3GEO.janela._formModal.css("width"),height:i3GEO.janela._formModal.css("height")});i3GEO.janela._formModal.css({"top":"0px","left":"0px","width":"100%","height":"100%"})}})}if(expandable==true){i3GEO.janela._formModal.find(".expandModal").css("visibility","visible")}else{i3GEO.janela._formModal.find(".expandModal").css("visibility","hidden")}if(texto==false){i3GEO.janela._formModal.modal("hide")}else{$("#i3GEOToolFormModal").html(texto);if(header){$("#i3GEOToolFormModalHeader").html(header)}else{$("#i3GEOToolFormModalHeader").html("")}if(footer){$("#i3GEOToolFormModalFooter").html(footer).css({display:"block"})}else{$("#i3GEOToolFormModalFooter").html("").css({display:"none"})}i3GEO.janela._formModal.find(".modal-content").css("height","");i3GEO.janela._formModal.css(css);i3GEO.janela._formModal.modal({backdrop:backdrop});i3GEO.janela._formModal.draggable(draggable);i3GEO.janela._formModal.resizable(resizable);if(resizable.disabled==true){i3GEO.janela._formModal.resizable("destroy")}else{i3GEO.janela._formModal.find(".modal-content").css("height","100%")}i3GEO.janela._formModal.css("padding-left",0)}if(i3GEO.parametros.w<420){i3GEO.guias.abreFecha("fecha")}if(onclose!=false){i3GEO.janela._formModal.on("hidden.bs.modal",function(){onclose();i3GEO.janela._formModal.unbind("hidden.bs.modal")})}else{i3GEO.janela._formModal.unbind("hidden.bs.modal")}i3GEO.janela._formModal.block=function(){$("#i3GEOToolFormModalWrap").css("display","block")};i3GEO.janela._formModal.unblock=function(){$("#i3GEOToolFormModalWrap").css("display","none")};$("#i3GEOToolFormModalWrap").css("display","none")},ativaAlerta:function(){window.alert=function(texto){var textoI,janela=YAHOO.i3GEO.janela.managerAguarde.find("alerta");if(!janela){janela=new YAHOO.widget.SimpleDialog("alerta",{width:"300px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:false,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,text:""});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.render(document.body);janela.setFooter("<div class='form-group condensed' id='alertFooter'></div>");var ins=Mustache.render(i3GEO.template.botoes.padrao,{text:$trad("x74")});var fecha=function(){YAHOO.i3GEO.janela.managerAguarde.find("alerta").destroy()};$('#alertFooter').append($(ins).click(fecha))}textoI=janela.cfg.getProperty("text");if(textoI!=""){textoI+="<br>"}texto=textoI+texto;janela.cfg.setProperty("text","<h4 class='alertTitulo'>"+texto+"</h4>");janela.show()}},confirma:function(pergunta,w,resposta1,resposta2,funcao1,funcao2){var b,f1,f2,f3,janela=YAHOO.i3GEO.janela.managerAguarde.find("confirma");if(!w||w==""){w=300}if(!funcao1||funcao1==""){f1=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return true}}else{f1=function(){funcao1.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}if(!funcao2||funcao2==""){f2=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return false}}else{f2=function(){funcao2.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}f3=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()};if(!resposta1||resposta1==""){resposta1=$trad("confirma")}if(janela){janela.destroy()}b=[{text:$trad("x75"),handler:f3},{text:resposta1,handler:f1}];if(resposta2&&resposta2!=""){b.push({text:resposta2,handler:f2})}janela=new YAHOO.widget.SimpleDialog("confirma",{width:w+"px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:false,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,text:"<h4 class='alertTitulo'>"+pergunta+"</h4>"});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.setFooter("<div class='form-group condensed' id='confirmaFooter'></div>");janela.render(document.body);var ins="";$.each(b,function(index,value){ins=Mustache.render(i3GEO.template.botoes.padrao,{style:'margin-right:10px;',text:value.text});$('#confirmaFooter').append($(ins).click(value.handler))});janela.show()},prompt:function(pergunta,funcaoOk,valorDefault){var botao=Mustache.render(i3GEO.template.botoes.padrao,{style:'margin-right:10px;',text:$trad("confirma"),id:"i3GEOJanelapromptOk"});var text=""+"<div class='form-group label-fixed condensed' >"+"    <label class='control-label' for=''>"+pergunta+"    </label>"+"    <input class='form-control input-lg' type='text' id='i3GEOjanelaprompt' value='"+valorDefault+"' />"+"</div>"+botao;i3GEO.janela.closeMsg(text);$("#i3GEOJanelapromptOk").on("click",function(){i3GEO.janela.closeMsg();funcaoOk.call()})},alerta:function({html="",pergunta=pergunta,funcaoOk=funcaoOk,parametros=parametros}){var botao=Mustache.render(i3GEO.template.botoes.padrao,{style:'margin-right:10px;',text:$trad("confirma"),id:"i3GEOJanelapromptOk"});var text=""+"<div class='form-group label-fixed condensed' >"+"    <label class='control-label' for=''>"+pergunta+"    </label>"+html+"</div>"+botao;i3GEO.janela.closeMsg(text);$("#i3GEOJanelapromptOk").on("click",parametros,function(){i3GEO.janela.closeMsg();funcaoOk(parametros)})},mensagemSimples:function(texto){this.closeMsg(texto)},comboCabecalhoTemas:function(idDiv,idCombo,ferramenta,tipo,onButtonClick,temaSel){var temp=$i(idDiv);if(!temaSel){temaSel=""}if(temaSel==""&&i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema&&i3GEOF[ferramenta].tema!=""){temaSel=i3GEOF[ferramenta].tema}if(temp){i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var tema,container=$i(idDiv),botao;container.innerHTML=retorno.dados;botao=new YAHOO.widget.Button(idCombo,{type:"menu",menu:idCombo+"select"});if(temaSel!=""){tema=i3GEO.arvoreDeCamadas.pegaTema(temaSel);if(tema&&tema!=undefined){botao.set("label","<span class='cabecalhoTemas' >"+tema.tema+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}if(!onButtonClick){onButtonClick=function(p_sType,p_aArgs){var oMenuItem=p_aArgs[1];if(oMenuItem){i3GEO.mapa.ativaTema(oMenuItem.value);if(oMenuItem.value===""){i3GEO.temaAtivo="";botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+oMenuItem.cfg.getProperty("text")+"</span>&nbsp;&nbsp;")}if(i3GEOF[ferramenta]){i3GEOF[ferramenta].tema=oMenuItem.value;if($i("i3GEOF."+ferramenta+"_corpo")){$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}}};if(i3GEO.eventos.ATUALIZAARVORECAMADAS.length>20){i3GEO.eventos.ATUALIZAARVORECAMADAS=[]}i3GEO.eventos.adicionaEventos("ATUALIZAARVORECAMADAS",["i3GEO.janela.comboCabecalhoTemas('"+idDiv+"','"+idCombo+"','"+ferramenta+"','"+tipo+"')"])}botao.getMenu().subscribe("click",onButtonClick,botao)},temp.id,"",false,tipo,"",true,true,"")}},comboCabecalhoTemasBs:function(idDiv,idCombo,ferramenta,tipo,onButtonClick,temaSel){var temp=$i(idDiv);if(!temaSel){temaSel=""}if(temaSel==""&&i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema&&i3GEOF[ferramenta].tema!=""){temaSel=i3GEOF[ferramenta].tema}else{temaSel=i3GEO.temaAtivo;if(i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema){i3GEOF[ferramenta].tema=temaSel}}if(temp){i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var tema,container=$i(idDiv),botao;container.innerHTML+=retorno.dados;botao=$i(temp.id+"Sel");if(temaSel!=""){tema=i3GEO.arvoreDeCamadas.pegaTema(temaSel);if(tema&&tema!=undefined){botao.value=tema.name}else{botao.value=""}}else{botao.value=""}if(!onButtonClick){onButtonClick=function(botao){i3GEO.mapa.ativaTema(botao.value);if(botao.value==""){i3GEO.temaAtivo=""}if(i3GEOF[ferramenta]){i3GEOF[ferramenta].tema=botao.value;if($i("i3GEOF."+ferramenta+"_corpo")){$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}}}botao.onchange=onButtonClick},temp.id,"",false,tipo,"font-size: 12px;width: 95%;color:white;",false,true,"form-control comboTema")}}};