if(typeof(i3GEO)==='undefined'){i3GEO=[]}YAHOO.namespace("janelaDoca.xp");YAHOO.janelaDoca.xp.manager=new YAHOO.widget.OverlayManager();i3GEO.janela={ESTILOBD:"display:block;padding:5px 0px 5px 2px;",ESTILOAGUARDE:"normal",AGUARDEMODAL:false,ANTESCRIA:["i3GEO.janela.prepara()"],ANTESFECHA:[],TRANSICAOSUAVE:true,OPACIDADE:65,TIPS:[],ULTIMOZINDEX:0,prepara:function(){i3GEO.util.escondePin();i3GEO.util.escondeBox()},cria:function(wlargura,waltura,wsrc,nx,ny,texto,id,modal,classe,funcaoCabecalho,funcaoMinimiza){var i,wlargura_,ins,novoel,wdocaiframe,pos,temp,fix,underlay,ifr;if(i3GEO.janela.ANTESCRIA){for(i=0;i<i3GEO.janela.ANTESCRIA.length;i++){eval(i3GEO.janela.ANTESCRIA[i])}}if(arguments.length<7||id===""){id="wdoca";modal=false;classe="hd";funcaoCabecalho=null;funcaoMinimiza=null}if(arguments.length===7){modal=false;classe="hd";funcaoCabecalho=null;funcaoMinimiza=null}if(arguments.length===8){classe="hd";funcaoCabecalho=null;funcaoMinimiza=null}if(arguments.length===9){funcaoCabecalho=null;funcaoMinimiza=null}if(arguments.length===10){funcaoMinimiza=null}if(i3GEO.Interface.ATUAL=="googleearth"){classe="hd";i3GEO.janela.TRANSICAOSUAVE=false}wlargura_=parseInt(wlargura,10)+2+"px";if($i(id)){YAHOO.janelaDoca.xp.panel.destroy()}i3GEO.util.removeChild(id+"_c");i3GEO.util.removeChild(id);ins='<div id="'+id+'_cabecalho" class="'+classe+'" style="background-color:white;">';if(i3GEO.configura!==undefined){ins+="<img id='"+id+"_imagemCabecalho' style='position:absolute;left:3px;top:2px;visibility:hidden;' src=\'"+i3GEO.configura.locaplic+"/imagens/aguarde.gif\' />"}ins+=texto;if(funcaoMinimiza){ins+="<div id='"+id+"_minimizaCabecalho' class='container-minimiza'></div>"}ins+='</div><div id="'+id+'_corpo" class="bd" style="'+i3GEO.janela.ESTILOBD+'">';if(wsrc!==""){ins+='<iframe name="'+id+'i" id="'+id+'i" valign="top" style="border:0px white solid"></iframe>'}ins+='</div>';novoel=document.createElement("div");novoel.id=id;novoel.style.display="block";novoel.style.border="1px solid rgb(120 120 120)";novoel.innerHTML=ins;if(i3GEO.janela.TRANSICAOSUAVE){novoel.onmouseover=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",1)};novoel.onmouseout=function(){YAHOO.util.Dom.setStyle(novoel,"opacity",i3GEO.janela.OPACIDADE/100)}}else{YAHOO.util.Dom.setStyle(novoel,"opacity",1)}document.body.appendChild(novoel);wdocaiframe=$i(id+"i");if(wdocaiframe){temp=wdocaiframe.style;temp.width=parseInt(wlargura,10)-12;temp.height=waltura;temp.display="block";wdocaiframe.src=wsrc}else{if(waltura!=="auto"){$i(id+'_corpo').style.height=parseInt(waltura,10)}$i(id+'_corpo').style.width=parseInt(wlargura,10);if(navm){$i(id+'_corpo').style.width=parseInt(wlargura,10)-2}}fix=false;if(nx===""||nx==="center"){fix=true}if(modal===true){underlay="none"}else{underlay="shadow"}if(i3GEO.Interface.ATUAL==="googleearth"||i3GEO.Interface.ATUAL==="flamingo"){ifr=true}else{ifr=false}if(waltura==="auto"){YAHOO.janelaDoca.xp.panel=new YAHOO.widget.Panel(id,{iframe:ifr,modal:modal,width:wlargura_,underlay:"none",fixedcenter:fix,constraintoviewport:false,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}else{YAHOO.janelaDoca.xp.panel=new YAHOO.widget.ResizePanel(id,{iframe:ifr,underlay:underlay,modal:modal,width:wlargura_,fixedcenter:fix,constraintoviewport:false,visible:true,monitorresize:false,dragOnly:true,keylisteners:null})}if(nx!==""&&nx!=="center"){YAHOO.janelaDoca.xp.panel.moveTo(nx,ny+50)}YAHOO.janelaDoca.xp.manager.register(YAHOO.janelaDoca.xp.panel);YAHOO.janelaDoca.xp.panel.render();if(navm&&id!=="i3geo_janelaMensagens"&&i3GEO.Interface.ATUAL=="googleearth"){YAHOO.janelaDoca.xp.panel.moveTo(0,0)}if(ifr==true){YAHOO.janelaDoca.xp.panel.iframe.style.zIndex=0}if(modal===true){if($i(id+"_mask")){$i(id+"_mask").style.zIndex=9000+i3GEO.janela.ULTIMOZINDEX+1}}if($i(id+"_c")){$i(id+"_c").style.zIndex=23000+i3GEO.janela.ULTIMOZINDEX+1}if(funcaoCabecalho){$i(id+'_cabecalho').onclick=funcaoCabecalho}if(funcaoMinimiza){$i(id+"_minimizaCabecalho").onclick=funcaoMinimiza}YAHOO.util.Event.addListener(YAHOO.janelaDoca.xp.panel.close,"click",i3GEO.janela.fecha,YAHOO.janelaDoca.xp.panel,{id:id},true);i3GEO.janela.ULTIMOZINDEX++;return([YAHOO.janelaDoca.xp.panel,$i(id+"_cabecalho"),$i(id+"_corpo")])},minimiza:function(id){var temp=$i(id+"_corpo"),n,i;if(temp){if(temp.style.display==="block"){temp.style.display="none"}else{temp.style.display="block"}}temp=$i(id+"_resizehandle");if(temp){if(temp.style.display==="none"){temp.style.display="block"}else{temp.style.display="none"}}temp=$i(id+"_c");if(temp){temp=temp.getElementsByTagName("div");n=temp.length;for(i=0;i<n;i++){if(temp[i].className==="underlay"){if(temp[i].style.display==="none"){temp[i].style.display="block"}else{temp[i].style.display="none"}}}}},fecha:function(event){var i,old,id;i3GEO.util.escondePin();i3GEO.util.escondeBox();if($i("divGeometriasTemp")){i3GEO.desenho.richdraw.fecha()}if(i3GEO.janela.ANTESFECHA){for(i=0;i<i3GEO.janela.ANTESFECHA.length;i++){eval(i3GEO.janela.ANTESFECHA[i])}}if(this.id){id=this.id}else{id=event.id}if($i(id+"_c")){document.body.removeChild($i(id+"_c"))}if($i(id)){document.body.removeChild($i(id))}if($i(id+"_mask")){document.body.removeChild($i(id+"_mask"))}i3GEO.util.removeScriptTag(id+"_script")},alteraTamanho:function(w,h,id){var i;if(arguments.length===3){i=$i(id)}else{i=$i("wdoca")}if(i){i.style.width=w;i.style.height=h}},abreAguarde:function(id,texto){var pos,index,contador;document.body.style.cursor="wait";if($i(id+"_mask")){document.body.removeChild($i(id+"_mask"))}if($i(id+"_c")){document.body.removeChild($i(id+"_c"))}YAHOO.namespace("aguarde."+id);pos=[0,0];if($i(i3GEO.Interface.IDCORPO)){pos=YAHOO.util.Dom.getXY($i(i3GEO.Interface.IDCORPO))}else if($i("contemImg")){pos=YAHOO.util.Dom.getXY($i("contemImg"))}texto+="<br><span style='color:navy;cursor:pointer;font-size:9px;' onclick='javascript:if(i3GEO.janela.AGUARDEMODAL == true){i3GEO.janela.AGUARDEMODAL = false;}else{i3GEO.janela.AGUARDEMODAL = true;}'>bloquear/desbloquear</span>";contador="";for(index=0;index<i3GEO.contadorAtualiza;index++){contador=contador+"."}eval('YAHOO.aguarde.'+id+' = new YAHOO.widget.Panel("'+id+'",{width:"240px",fixedcenter:false,underlay:"none",close:true,draggable:false,modal:'+i3GEO.janela.AGUARDEMODAL.toString()+',monitorresize:false})');if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="reduzida"){eval('YAHOO.aguarde.'+id+'.setBody(texto)');eval('YAHOO.aguarde.'+id+'.body.style.padding="5px"')}if(i3GEO.janela.ESTILOAGUARDE==="normal"||i3GEO.janela.ESTILOAGUARDE==="minima"){eval('YAHOO.aguarde.'+id+'.setHeader("<span><img id=aguardeGifAberto src=\'"+i3GEO.configura.locaplic+"/imagens/aguarde.gif\' /></span>&nbsp;<span style=font-size:8px >'+contador+'</span>")')}eval('YAHOO.aguarde.'+id+'.render(document.body)');if(i3GEO.parametros.w>0){eval('YAHOO.aguarde.'+id+'.moveTo('+(pos[0]+(i3GEO.parametros.w/2)-120)+','+pos[1]+')')}else{eval('YAHOO.aguarde.'+id+'.moveTo('+pos[0]+','+pos[1]+')')}eval('YAHOO.aguarde.'+id+'.show()');if($i(id+"_mask")){$i(id+"_mask").style.zIndex=25000}if($i(id+"_c")){$i(id+"_c").style.zIndex=26000;$i(id+"_c").style.backgroundColor=""}},tip:function(cabecalho){var Nid,i,novoel,res;if(arguments.length===0){cabecalho="fixar"}Nid=YAHOO.util.Dom.generateId();i=$i("i3geo_rosa");if(i){i.style.display="none"}if($i(i3GEO.Interface.IDCORPO)){$i("img").title=""}novoel=document.createElement("div");novoel.id=Nid;novoel.style.position="absolute";novoel.style.zIndex=5000;novoel.style.textAlign="left";novoel.style.background="white";if(navm){novoel.style.filter="alpha(opacity=90)"}else{novoel.style.opacity=".9"}document.body.appendChild(novoel);i3GEO.janela.TIPS.push($i(Nid));res="<div id='"+Nid+"cabecatip' style='text-align:left;background-color:rgb(240,240,240)'>";res+="<span style='color:navy;cursor:pointer;text-align:left' onclick='javascript:$i(\""+Nid+"cabecatip\").innerHTML =\"\";' >"+cabecalho+"</span></div>";novoel.innerHTML="<table style='text-align:left'><tr><td style='text-align:left'>"+res+"</td></tr></table>";ist=novoel.style;ist.top=objposicaocursor.telay-9;ist.left=objposicaocursor.telax-5;ist.display="block";if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.janela.excluiTips('todos')")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.janela.excluiTips('todos')")}if(i3GEO.eventos.MOUSEMOVE.toString().search("i3GEO.janela.excluiTips('naofixos')")<0){i3GEO.eventos.MOUSEMOVE.push("i3GEO.janela.excluiTips('naofixos')")}return(Nid)},excluiTips:function(tipo){var ot,i;if(arguments.length===0){tipo="todos"}if(i3GEO.janela.TIPS.length>0){ot=i3GEO.janela.TIPS.length-1;if(ot>=0){do{if(tipo==='todos'){if(i3GEO.janela.TIPS[ot]){i=$i(i3GEO.janela.TIPS[ot].id);document.body.removeChild(i)}}if(tipo==='naofixos'){if($i(i3GEO.janela.TIPS[ot])){if($i(i3GEO.janela.TIPS[ot].id+"cabecatip").innerHTML!==""){document.body.removeChild($i(i3GEO.janela.TIPS[ot].id))}}}}while(ot--);if(tipo==="todos"){i3GEO.janela.TIPS=[]}}}},slider:function(funcao,inicial){var tickSize,keyIncrement,scaleFactor,bottomConstraint,topConstraint,janela,novoel,Event,Dom,lang,slider,bg,thumb,valuearea,textfield;janela=i3GEO.janela.cria(230,200,"","","","Opacidade","opacidadeG");novoel=document.createElement("div");novoel.id="slider-bg";novoel.tabindex="-1";novoel.innerHTML='<div style="cursor:default;position:absolute;top:4px" id="slider-thumb"><img src="'+i3GEO.configura.locaplic+'/imagens/thumb-n.gif"></div>';janela[2].appendChild(novoel);Event=YAHOO.util.Event;Dom=YAHOO.util.Dom;lang=YAHOO.lang;bg="slider-bg";thumb="slider-thumb";valuearea="slider-value";textfield="slider-converted-value";novoel.style.position="relative";novoel.style.background='url('+i3GEO.configura.locaplic+'/imagens/bg-fader.gif) 5px 0 no-repeat';novoel.style.height="28px";novoel.style.width="228px";topConstraint=0;bottomConstraint=200;scaleFactor=1;keyIncrement=20;tickSize=20;Event.onDOMReady(function(){slider=YAHOO.widget.Slider.getHorizSlider(bg,thumb,topConstraint,bottomConstraint,20);slider.setValue(parseInt(inicial,10));slider.getRealValue=function(){return Math.round(this.getValue()*scaleFactor)};slider.subscribe("slideEnd",function(offsetFromStart){var actualValue=slider.getRealValue();eval(funcao+"("+actualValue+")")})});Event.on("putval","click",function(e){slider.setValue(100,false)})},fechaAguarde:function(id){document.body.style.cursor="default";if(arguments.length>0){try{if($i(id+"_c")){eval('YAHOO.aguarde.'+id+'.destroy()')}if($i(id+"_c")){$i("i3geo").removeChild($i(id+"_c"))}if($i(id+"_mask")){$i("i3geo").removeChild($i(id+"_mask"))}}catch(e){}}else{try{if($i("ajaxdestaca_c")){i3GEO.janela.fechaAguarde("ajaxdestaca")}if($i("ajaxabrelente_c")){i3GEO.janela.fechaAguarde("ajaxabrelente")}if($i("ajaxiniciaParametros_c")){i3GEO.janela.fechaAguarde("ajaxiniciaParametros")}if($i("i3GEO.atualiza_c")){i3GEO.janela.fechaAguarde("i3GEO.atualiza")}if($i("ajaxCorpoMapaEntorno_c")){i3GEO.janela.fechaAguarde("ajaxCorpoMapaEntorno")}if($i("ajaxCorpoMapa_c")){i3GEO.janela.fechaAguarde("ajaxCorpoMapa")}if($i("ajaxLegenda_c")){i3GEO.janela.fechaAguarde("ajaxLegenda")}if($i("ajaxReferencia_c")){i3GEO.janela.fechaAguarde("ajaxReferencia")}if($i("ajaxEscalaGrafica_c")){i3GEO.janela.fechaAguarde("ajaxEscalaGrafica")}if($i("montaMapa_c")){i3GEO.janela.fechaAguarde("montaMapa")}if($i("aguardedoc_c")){i3GEO.janela.fechaAguarde("aguardedoc")}if($i("ajaxCorpoMapa1_c")){i3GEO.janela.fechaAguarde("ajaxCorpoMapa1")}}catch(e){}}}};try{YAHOO.widget.ResizePanel=function(el,userConfig){if(arguments.length>0){YAHOO.widget.ResizePanel.superclass.constructor.call(this,el,userConfig)}};YAHOO.widget.ResizePanel.CSS_PANEL_RESIZE="yui-resizepanel";YAHOO.widget.ResizePanel.CSS_RESIZE_HANDLE="resizehandle";YAHOO.extend(YAHOO.widget.ResizePanel,YAHOO.widget.Panel,{init:function(el,userConfig){YAHOO.widget.ResizePanel.superclass.init.call(this,el);this.beforeInitEvent.fire(YAHOO.widget.ResizePanel);var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event,oInnerElement=this.innerElement,oResizeHandle=document.createElement("DIV"),sResizeHandleId=this.id+"_resizehandle";oResizeHandle.id=sResizeHandleId;oResizeHandle.className=YAHOO.widget.ResizePanel.CSS_RESIZE_HANDLE;Dom.addClass(oInnerElement,YAHOO.widget.ResizePanel.CSS_PANEL_RESIZE);this.resizeHandle=oResizeHandle;function initResizeFunctionality(){var me=this,oHeader=this.header,oBody=this.body,oFooter=this.footer,nStartWidth,nStartHeight,aStartPos,nBodyBorderTopWidth,nBodyBorderBottomWidth,nBodyTopPadding,nBodyBottomPadding,nBodyOffset;oInnerElement.appendChild(oResizeHandle);this.ddResize=new YAHOO.util.DragDrop(sResizeHandleId,this.id);this.ddResize.setHandleElId(sResizeHandleId);this.ddResize.onMouseDown=function(e){nStartWidth=oInnerElement.offsetWidth;nStartHeight=oInnerElement.offsetHeight;if(YAHOO.env.ua.ie&&document.compatMode==="BackCompat"){nBodyOffset=0}else{nBodyBorderTopWidth=parseInt(Dom.getStyle(oBody,"borderTopWidth"),10);nBodyBorderBottomWidth=parseInt(Dom.getStyle(oBody,"borderBottomWidth"),10);nBodyTopPadding=parseInt(Dom.getStyle(oBody,"paddingTop"),10);nBodyBottomPadding=parseInt(Dom.getStyle(oBody,"paddingBottom"),10);nBodyOffset=nBodyBorderTopWidth+nBodyBorderBottomWidth+nBodyTopPadding+nBodyBottomPadding}me.cfg.setProperty("width",nStartWidth+"px");aStartPos=[Event.getPageX(e),Event.getPageY(e)]};this.ddResize.onDrag=function(e){var aNewPos=[Event.getPageX(e),Event.getPageY(e)],nOffsetX=aNewPos[0]-aStartPos[0],nOffsetY=aNewPos[1]-aStartPos[1],nNewWidth=Math.max(nStartWidth+nOffsetX,10),nNewHeight=Math.max(nStartHeight+nOffsetY,10),nBodyHeight=(nNewHeight-(oFooter.offsetHeight+oHeader.offsetHeight+nBodyOffset));me.cfg.setProperty("width",nNewWidth+"px");if(navm){nNewWidth=nNewWidth-2}oBody.style.width=nNewWidth-2+"px";if(nBodyHeight<0){nBodyHeight=0}oBody.style.height=nBodyHeight+"px";if($i("wdocai")){$i("wdocai").style.height=nBodyHeight;$i("wdocai").style.width=oBody.style.width}};this.ddResize.onMouseUp=this.ddResize.onDrag.call()}function onBeforeShow(){initResizeFunctionality.call(this);this.unsubscribe("beforeShow",onBeforeShow)}function onBeforeRender(){if(!this.footer){this.setFooter("")}if(this.cfg.getProperty("visible")){initResizeFunctionality.call(this)}else{this.subscribe("beforeShow",onBeforeShow)}this.unsubscribe("beforeRender",onBeforeRender)}this.subscribe("beforeRender",onBeforeRender);if(userConfig){this.cfg.applyConfig(userConfig,true)}this.initEvent.fire(YAHOO.widget.ResizePanel)},toString:function(){return"ResizePanel "+this.id}})}catch(e){}