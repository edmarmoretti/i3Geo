if(typeof(i3GEO)==='undefined'){var i3GEO={}}YAHOO.namespace("i3GEO.janela");YAHOO.i3GEO.janela.manager=new YAHOO.widget.OverlayManager();YAHOO.namespace("janelaDoca.xp");YAHOO.janelaDoca.xp.manager=new YAHOO.widget.OverlayManager();YAHOO.i3GEO.janela.managerAguarde=new YAHOO.widget.OverlayManager();i3GEO.janela={ULTIMOZINDEX:5,prepara:function(){var iu=i3GEO.util;iu.escondeBox()},cria:function(wlargura,waltura,wsrc,nx,ny,texto,id,modal,classe,funcaoCabecalho,funcaoMinimiza,funcaoAposRedim,dimensionavel,icone,funcaoDuplica,opacidade,classeAdicional){if(arguments.length<13){dimensionavel=true}if(arguments.length<17){classeAdicional="i3geo6"}if(!icone){icone=""}var i,wlargurA,ins,novoel,wdocaiframe,temp,fix,underlay,ifr,janela;if($i(id)){janela=YAHOO.i3GEO.janela.manager.find(id);janela.show();janela.bringToTop();return}i3GEO.janela.prepara();if(!classe||classe==""){classe="hd"}if(!id||id===""){id="wdoca"}if(!modal||modal===""){modal=false}ifr=false;fix="contained";if(nx===""||nx==="center"){fix=true}if(modal===true){underlay="none"}else{underlay="shadow"}temp=navm?0:2;wlargurA=parseInt(wlargura,10)+temp+"px";ins='<div id="'+id+'_cabecalho" class="'+classe+' '+classeAdicional+'" >';if(i3GEO.configura!==undefined){ins+="<img id='"+id+"_imagemCabecalho' class='i3GeoAguardeJanela' style='visibility:hidden;' src=\'"+i3GEO.configura.locaplic+"/imagens/aguarde2.gif\' />"}if(icone!=""){ins+="<img class='i3GeoIconeJanela' src='"+icone+"' >"}ins+="<span style='font-size:10px;'>"+texto+"</span>";if(funcaoDuplica&&funcaoDuplica!=""){ins+="<div id='"+id+"_duplicaJanela' class='container-duplica'></div>"}if(funcaoMinimiza&&funcaoMinimiza!=""){ins+="<div id='"+id+"_minimizaCabecalho' class='container-minimiza'></div>"}ins+='</div><div id="'+id+'_corpo" class="bd '+classeAdicional+'" style="display:block;padding:0px">';if(wsrc!==""){ins+='<iframe name="'+id+'i" id="'+id+'i" valign="top" style="border:0px white solid;width:100%"></iframe>'}ins+='</div>';ins+='<div class="ft '+classeAdicional+'"></div>';novoel=document.createElement("div");novoel.id=id;novoel.style.display="block";novoel.innerHTML=ins;document.body.appendChild(novoel);wdocaiframe=$i(id+"i");if(wdocaiframe){temp=wdocaiframe.style;temp.height=waltura;temp.display="block";wdocaiframe.src=wsrc}else{if(waltura!=="auto"){$i(id+'_corpo').style.height=parseInt(waltura,10)+"px"}$i(id+'_corpo').style.width='100%';$i(id+'_corpo').style.overflow="auto"}if(waltura==="auto"||dimensionavel==false){janela=new YAHOO.widget.Panel(id,{iframe:ifr,modal:modal,width:wlargurA,underlay:underlay,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}else{janela=new YAHOO.widget.Panel(id,{hideMode:'offsets',iframe:ifr,underlay:underlay,modal:modal,width:wlargurA,fixedcenter:fix,constraintoviewport:true,visible:true,monitorresize:false,dragOnly:true,keylisteners:null});if(YAHOO.util.Resize&&dimensionavel==true){var resize=new YAHOO.util.Resize(id,{handles:['br'],autoRatio:false,minWidth:10,minHeight:10,status:false,proxy:true,ghost:false,animate:false,useShim:true});resize.on('resize',function(args){this.cfg.setProperty("height",args.height+"px");if(wdocaiframe){wdocaiframe.style.height=args.height-50+"px"}},janela,true);if(funcaoAposRedim&&funcaoAposRedim!=""){resize.on('endResize',function(args){funcaoAposRedim.call();i3GEO.janela.minimiza()},janela,true)}resize.getProxyEl().style.height="0px"}}if(nx!==""&&nx!=="center"){janela.moveTo(nx,ny+50)}YAHOO.i3GEO.janela.manager.register(janela);janela.cfg.setProperty("effect",[{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.5}]);janela.cfg.setProperty("zIndex",[4]);janela.render();janela.bringToTop();if(ifr===true){janela.iframe.style.zIndex=4}YAHOO.util.Event.addListener($i(id+'_corpo'),"click",YAHOO.util.Event.stopPropagation);if(funcaoDuplica&&funcaoDuplica!=""){$i(id+'_duplicaJanela').onclick=funcaoDuplica}if(funcaoCabecalho&&funcaoCabecalho!=""){$i(id+'_cabecalho').onclick=funcaoCabecalho}if(funcaoMinimiza&&funcaoMinimiza!=""){$i(id+"_minimizaCabecalho").onclick=funcaoMinimiza}YAHOO.util.Event.addListener(janela.close,"click",i3GEO.janela.fecha,janela,{id:id},true);temp=$i(id+"_c");if(temp&&temp.style){temp.style.maxWidth="90%";temp.style.zIndex=50000}temp=$i(id);if(temp&&temp.style){temp.style.maxWidth="100%"}temp=$i(id+"_corpo");return([janela,$i(id+"_cabecalho"),temp])},iconiza:function(id,w,rodape){var j,r,t=i3GEO.janela.minimiza(id,w+"px",rodape);r=YAHOO.util.Resize.getResizeById(id);j=$i(id+"I");if(!j){return}if(t==="min"){j.style.display="none";if(r){r.lock()}if(rodape){$i(rodape).style.display="none"}}else{j.style.display="block";if(r){r.unlock()}if(rodape){$i(rodape).style.display="block"}}},minimiza:function(id,min){var temp=$i(id+"_corpo"),n,i,m=YAHOO.i3GEO.janela.manager.find(id),c=$i(id),t="min",r=YAHOO.util.Resize.getResizeById(id),rodape=$i(id+"_rodape"),tipo="";if(temp){if(temp.style.display==="block"){temp.style.display="none";if(m){m.hideIframe()}m.winicial=c.style.width;if(min){c.style.width=min}tipo="none";if(r){r.lock()}}else{temp.style.display="block";if(m){m.showIframe()}c.style.width=m.winicial;t="max";tipo="block";if(r){r.unlock()}}}temp=$i(id+"_c");if(temp){$(temp).find(".comboTemasCabecalhoBs,.ft,.yui-resize-handle,.underlay,.bd").css("display",tipo)}temp=$i(id+"_corpo");if(temp){temp.style.display=tipo}temp=$i(id);if(temp){if(tipo==="block"){temp.style.height="100%"}else{temp.style.height="10%"}}return t},fecha:function(event,args){var i,id;i3GEO.util.escondeBox();if(i3GEO.janela.id){id=i3GEO.janela.id}else{id=event.id}if(id==undefined){id=args.id}i3GEO.janela.destroi(id)},destroi:function(id){if(typeof(YAHOO)!="undefined"){var janela=YAHOO.i3GEO.janela.manager.find(id);i3GEO.util.removeScriptTag(id+"_script");i3GEO.util.removeScriptTag(id+".dicionario_script");if(janela){YAHOO.i3GEO.janela.manager.remove(janela);janela=$i(id+"_c");janela.parentNode.removeChild(janela);YAHOO.util.Resize.getResizeById(id).destroy()}}},alteraTamanho:function(w,h,id){var i;if(arguments.length===3){i=$i(id)}else{i=$i("wdoca")}if(i){i.style.width=w+"px";i.style.height=h+"px"}},CONTADORAGUARDE:[],abreAguarde:function(id,texto){var p=$i("i3GEObarraAguarde");if(p){p.style.width="100%"}i3GEO.janela.CONTADORAGUARDE.push(" ")},fechaAguarde:function(id){var p=$i("i3GEObarraAguarde");if(p){if(i3GEO.janela.CONTADORAGUARDE.length==1){p.style.width="0px"}i3GEO.janela.CONTADORAGUARDE.pop()}},tempoMsg:function(texto,tempo){if(!i3GEO.janela.tempoModal){i3GEO.janela.tempoModal=$('<div class="modal fade" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="z-index:500000;overflow-y:visible;">'+'<div class="modal-dialog">'+'<div class="modal-content">'+'<div class="modal-body" >'+'<div id="i3GEOMensagemTempoModal" >'+texto+'</div>'+'<div class="progress progress-striped active" style="margin-bottom:0;margin-top:10px;"><div class="progress-bar" style="width: 100%"></div></div>'+'</div>'+'</div></div></div>')}else{$i("i3GEOMensagemTempoModal").innerHTML=texto}i3GEO.janela.tempoModal.modal("show");if(!tempo){tempo=3000}setTimeout(function(){i3GEO.janela.tempoModal.modal("hide")},tempo)},closeModal:false,closeMsg:function(texto){if(!i3GEO.janela.closeModal){i3GEO.janela.closeModal=$('<div class="modal fade" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="z-index:500000;overflow-y:visible;">'+'	<div class="modal-dialog">'+'		<div class="modal-content">'+'			<div class="modal-header">'+'				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+'			</div>'+'			<div id="i3GEOMensagemCloseModal" class="modal-body text-left" >'+texto+'			</div>'+'		</div>'+'	</div>'+'</div>')}else{$("#i3GEOMensagemCloseModal").html(texto);i3GEO.janela.closeModal.modal("show");return}i3GEO.janela.closeModal.modal("show")},ativaAlerta:function(){window.alert=function(texto){var textoI,janela=YAHOO.i3GEO.janela.managerAguarde.find("alerta");if(!janela){janela=new YAHOO.widget.SimpleDialog("alerta",{width:"300px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:true,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,buttons:[{text:$trad("x74"),handler:function(){this.destroy()},isDefault:true}],icon:YAHOO.widget.SimpleDialog.ICON_WARN,text:""});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.render(document.body)}textoI=janela.cfg.getProperty("text");if(textoI!=""){textoI+="<br>"}texto=textoI+texto;janela.cfg.setProperty("text",texto);janela.show()}},confirma:function(pergunta,w,resposta1,resposta2,funcao1,funcao2){var b,f1,f2,f3,janela=YAHOO.i3GEO.janela.managerAguarde.find("confirma");if(!w||w==""){w=300}if(!funcao1||funcao1==""){f1=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return true}}else{f1=function(){funcao1.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}if(!funcao2||funcao2==""){f2=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy();return false}}else{f2=function(){funcao2.call();YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()}}f3=function(){YAHOO.i3GEO.janela.managerAguarde.find("confirma").destroy()};if(!resposta1||resposta1==""){resposta1=$trad("x58")}if(janela){janela.destroy()}b=[{text:$trad("x75"),handler:f3},{text:resposta1,handler:f1}];if(resposta2&&resposta2!=""){b.push({text:resposta2,handler:f2})}janela=new YAHOO.widget.SimpleDialog("confirma",{width:w+"px",fixedcenter:true,visible:false,draggable:false,zIndex:100000,textAlign:"left",close:false,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,buttons:b,icon:YAHOO.widget.SimpleDialog.ICON_HELP,text:"<p class=paragrafo >"+pergunta});YAHOO.i3GEO.janela.managerAguarde.register(janela);janela.setHeader(" ");janela.render(document.body);janela.show()},prompt:function(pergunta,funcaoOk,valorDefault){if($i("i3GEOjanelaprompt")){return}if(!valorDefault){valorDefault=""}var i="<br><div class='i3geoForm i3geoFormIconeEdita' ><input id='i3GEOjanelaprompt' type=text value='"+valorDefault+"' />";i3GEO.janela.confirma(pergunta+i,"","","",funcaoOk)},mensagemSimples:function(texto,cabecalho,largura,altura){var janela;if(!largura){largura=300}if(!altura){altura=300}if(!cabecalho){cabecalho=""}janela=new YAHOO.widget.SimpleDialog(i3GEO.util.generateId(),{width:parseInt(largura,10)+"px",height:parseInt(altura,10)+"px",fixedcenter:true,visible:true,draggable:true,zIndex:100000,textAlign:"left",close:true,modal:false,effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25},constraintoviewport:true,text:""});YAHOO.i3GEO.janela.manager.register(janela);janela.setHeader(cabecalho);janela.render(document.body);janela.setHeader("<div class='i3GeoTituloJanela'>"+cabecalho+"</div>");janela.cfg.setProperty("text",texto);janela.bringToTop();janela.show();return janela},slider:function(funcao,inicial){var scaleFactor,bottomConstraint,topConstraint,janela,novoel,Event,slider="",bg,thumb;janela=i3GEO.janela.cria(230,200,"","","","<div class='i3GeoTituloJanela'>"+$trad("t20")+"</div>","opacidadeG");novoel=document.createElement("div");novoel.id="slider-bg";novoel.tabindex="-1";novoel.innerHTML='<div style="cursor:default;position:absolute;top:4px" id="slider-thumb"><img src="'+i3GEO.configura.locaplic+'/imagens/thumb-n.gif"></div>';janela[2].appendChild(novoel);Event=YAHOO.util.Event;bg="slider-bg";thumb="slider-thumb";novoel.style.position="relative";novoel.style.background='url('+i3GEO.configura.locaplic+'/imagens/bg-fader.gif) 5px 0 no-repeat';novoel.style.height="28px";novoel.style.width="228px";topConstraint=0;bottomConstraint=200;scaleFactor=1;Event.onDOMReady(function(){slider=YAHOO.widget.Slider.getHorizSlider(bg,thumb,topConstraint,bottomConstraint,20);slider.setValue(parseInt(inicial,10));slider.getRealValue=function(){return Math.round(this.getValue()*scaleFactor)};slider.subscribe("slideEnd",function(offsetFromStart){var actualValue=slider.getRealValue();eval(funcao+"("+actualValue+")")})});Event.on("putval","click",function(e){slider.setValue(100,false)})},comboCabecalhoTemas:function(idDiv,idCombo,ferramenta,tipo,onButtonClick,temaSel){var temp=$i(idDiv);if(!temaSel){temaSel=""}if(temaSel==""&&i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema&&i3GEOF[ferramenta].tema!=""){temaSel=i3GEOF[ferramenta].tema}if(temp){i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var tema,container=$i(idDiv),botao;container.innerHTML=retorno.dados;botao=new YAHOO.widget.Button(idCombo,{type:"menu",menu:idCombo+"select"});if(temaSel!=""){tema=i3GEO.arvoreDeCamadas.pegaTema(temaSel);if(tema&&tema!=undefined){botao.set("label","<span class='cabecalhoTemas' >"+tema.tema+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}}else{botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}if(!onButtonClick){onButtonClick=function(p_sType,p_aArgs){var oMenuItem=p_aArgs[1];if(oMenuItem){i3GEO.mapa.ativaTema(oMenuItem.value);if(oMenuItem.value===""){i3GEO.temaAtivo="";botao.set("label","<span class='cabecalhoTemas' >"+$trad("x92")+"</span>&nbsp;&nbsp;")}else{botao.set("label","<span class='cabecalhoTemas' >"+oMenuItem.cfg.getProperty("text")+"</span>&nbsp;&nbsp;")}if(i3GEOF[ferramenta]){i3GEOF[ferramenta].tema=oMenuItem.value;if($i("i3GEOF."+ferramenta+"_corpo")){$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}}};if(i3GEO.eventos.ATUALIZAARVORECAMADAS.length>20){i3GEO.eventos.ATUALIZAARVORECAMADAS=[]}i3GEO.eventos.adicionaEventos("ATUALIZAARVORECAMADAS",["i3GEO.janela.comboCabecalhoTemas('"+idDiv+"','"+idCombo+"','"+ferramenta+"','"+tipo+"')"])}botao.getMenu().subscribe("click",onButtonClick,botao)},temp.id,"",false,tipo,"",true,true,"")}},comboCabecalhoTemasBs:function(idDiv,idCombo,ferramenta,tipo,onButtonClick,temaSel){var temp=$i(idDiv);if(!temaSel){temaSel=""}if(temaSel==""&&i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema&&i3GEOF[ferramenta].tema!=""){temaSel=i3GEOF[ferramenta].tema}else{temaSel=i3GEO.temaAtivo;if(i3GEOF[ferramenta]&&i3GEOF[ferramenta].tema){i3GEOF[ferramenta].tema=temaSel}}if(temp){i3GEO.util.comboTemas(temp.id+"Sel",function(retorno){var tema,container=$i(idDiv),botao;container.innerHTML=retorno.dados;botao=$i(temp.id+"Sel");if(temaSel!=""){tema=i3GEO.arvoreDeCamadas.pegaTema(temaSel);if(tema&&tema!=undefined){botao.value=tema.name}else{botao.value=""}}else{botao.value=""}if(!onButtonClick){onButtonClick=function(botao){i3GEO.mapa.ativaTema(botao.value);if(botao.value==""){i3GEO.temaAtivo=""}if(i3GEOF[ferramenta]){i3GEOF[ferramenta].tema=botao.value;if($i("i3GEOF."+ferramenta+"_corpo")){$i("i3GEOF."+ferramenta+"_corpo").innerHTML="";eval("i3GEOF."+ferramenta+".inicia('i3GEOF."+ferramenta+"_corpo');")}}}}botao.onchange=onButtonClick},temp.id,"",false,tipo,"font-size: 12px;width: 95%;color:white;",false,true,"form-control")}}};