if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.arvoreDeCamadas={BARRAPROGRESSO:true,MOSTRALISTAKML:false,FILTRO:"",VERIFICAABRANGENCIATEMAS:true,finaliza:"",EXPANDESOLEGENDA:false,PERMITEEXPANDIRTEMAS:true,ARRASTARORDEM:true,ARRASTARLIXEIRA:true,ALTERAOPACIDADE:true,ANIMAMAPA:true,LIGARDESLIGARTODOS:true,FILTRAR:true,ABRELEGENDA:true,EXPANDIDA:false,LEGENDAEXPANDIDA:false,OPCOESICONES:true,OPCOESTEMAS:true,OPCOESLEGENDA:true,AGUARDALEGENDA:false,ICONETEMA:true,FUNCOES:{farolescala:true,excluir:true,sobe:true,desce:true,fonte:true,zoomtema:true,compartilhar:true,opacidade:true,mudanome:true,procurar:true,toponimia:true,etiquetas:true,filtrar:true,tabela:true,grafico:true,editorlegenda:true,destacar:true,cortina:true,sql:true,comentar:true,temporizador:true,wms:true,tme:true},CAMADAS:"",CAMADASINICIAIS:"",ARVORE:null,IDHTML:"listaTemas",SID:null,LOCAPLIC:null,ATIVATEMA:"",cria:function(onde,temas,g_sid,g_locaplic,funcaoTema){if(!YAHOO.lang.isUndefined(funcaoTema)){i3GEO.arvoreDeCamadas.ATIVATEMA=funcaoTema}var novoel;if(i3GEO.arvoreDeCamadas.BARRAPROGRESSO===true&&i3GEO.Interface.ATUAL==="openlayers"){if(!$i("i3GEOprogressoDiv")){novoel=document.createElement("div");novoel.id="i3GEOprogressoDiv";novoel.style.position="absolute";novoel.style.top="0px";novoel.style.zIndex="50000";novoel.style.left=(i3GEO.parametros.w/2)-75+"px";$i(i3GEO.Interface.IDMAPA).appendChild(novoel);i3GEO.arvoreDeCamadas.progressBar=new YAHOO.widget.ProgressBar({height:5,width:150,minValue:1,maxValue:0,value:0}).render("i3GEOprogressoDiv")}}i3GEO.arvoreDeCamadas.SID=typeof(g_sid)!=='undefined'?g_sid:i3GEO.configura.sid;i3GEO.arvoreDeCamadas.LOCAPLIC=typeof(g_locaplic)!=='undefined'?g_locaplic:i3GEO.configura.locaplic;if(onde!==""){i3GEO.arvoreDeCamadas.IDHTML=onde}if(i3GEO.arvoreDeCamadas.IDHTML===""){return}if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return}if(YAHOO.lang.isUndefined(temas)||temas===""){temas=i3GEO.arvoreDeCamadas.CAMADAS}i3GEO.arvoreDeCamadas.atualiza(temas);if(i3GEO.arvoreDeCamadas.finaliza!==""){eval(i3GEO.arvoreDeCamadas.finaliza)}},atualiza:function(temas,forca){if(arguments.length===0){temas=i3GEO.arvoreDeCamadas.CAMADAS;i3GEO.arvoreDeCamadas.CAMADAS="";forca=false}var estilo,temp,currentIconMode,newVal,root,tempNode,titulo,d,c,ltema,temaNode,grupoNode,i,j,n,nk,k,noGrupo,incluidos=[],grupoLayers=i3GEO.configura.grupoLayers,textoTema="";temp=$i(i3GEO.arvoreDeCamadas.IDHTML);if(temp){if(forca===true){temp.innerHTML=""}if(temp.innerHTML!==""){if(i3GEO.arvoreDeCamadas.comparaTemas(temas,i3GEO.arvoreDeCamadas.CAMADAS)){i3GEO.arvoreDeCamadas.CAMADAS=temas;return}}}else{return}i3GEO.util.defineValor(i3GEO.arvoreDeCamadas.IDHTML,"innerHTML","");i3GEO.arvoreDeCamadas.CAMADAS=temas;if(i3GEO.arvoreDeCamadas.CAMADASINICIAIS===""){i3GEO.arvoreDeCamadas.CAMADASINICIAIS=temas}(function(){function changeIconMode(){newVal=parseInt(this.value,10);if(newVal!==currentIconMode){currentIconMode=newVal}buildTree()}function buildTree(){i3GEO.arvoreDeCamadas.ARVORE=new YAHOO.widget.TreeView(i3GEO.arvoreDeCamadas.IDHTML)}buildTree()})();root=i3GEO.arvoreDeCamadas.ARVORE.getRoot();titulo="<table><tr><td><b>"+$trad("a7")+"</b></td><td>";if(this.ARRASTARLIXEIRA===true){titulo+="<img onclick='i3GEO.arvoreDeCamadas.dialogo.excluir();' id='i3geo_lixeira' title='"+$trad("t2")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(this.FILTRAR===true){titulo+="<img onclick='i3GEO.arvoreDeCamadas.dialogo.filtro();' id='i3geo_filtro' title='"+$trad("t2a")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(this.ABRELEGENDA===true){titulo+="<img onclick='i3GEO.mapa.legendaHTML.libera();' id='soltaleg2' title='"+$trad("t2b")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(this.ALTERAOPACIDADE===true){titulo+="<img onclick='i3GEO.mapa.dialogo.opacidade();' id='opacidadeMapa' title='"+$trad("t20")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(this.ANIMAMAPA===true&&(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps")){titulo+="<img onclick='i3GEO.mapa.dialogo.animacao();' id='animaMapa' title='"+$trad("p21")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}if(this.LIGARDESLIGARTODOS===true){titulo+="&nbsp;<img onclick='i3GEO.arvoreDeCamadas.aplicaTemas(\"ligartodos\");' id='olhoAberto' title='"+$trad("t3a")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />";titulo+="&nbsp;<img onclick='i3GEO.arvoreDeCamadas.aplicaTemas(\"desligartodos\");' id='olhoFechado' title='"+$trad("t3b")+"'  src='"+i3GEO.util.$im("branco.gif")+"' />"}titulo+="</td></tr></table>";tempNode=new YAHOO.widget.HTMLNode({expanded:true,html:titulo,hasIcon:true,enableHighlight:false},root);estilo=navm?"text-align:left;font-size:11px;vertical-align:middle;display:table-cell;":"text-align:left;font-size:11px;vertical-align:vertical-align:top;padding-top:4px;";if(grupoLayers===""){c=temas.length;for(i=0,j=c;i<j;i+=1){ltema=temas[i];try{if((ltema.escondido).toLowerCase()!=="sim"){textoTema=i3GEO.arvoreDeCamadas.montaTextoTema(ltema);if(textoTema!==""){temaNode=new YAHOO.widget.HTMLNode({expanded:this.EXPANDIDA,html:textoTema,id:ltema.name,tipo:"tema",enableHighlight:false},tempNode);if(this.PERMITEEXPANDIRTEMAS===true){if(this.EXPANDESOLEGENDA===false){temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,1)}else{if(ltema.classe!=="NAO"){temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1)}}}}YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault)}}catch(e){}}}else{nk=temas.length;c=grupoLayers.length;for(i=0;i<c;i+=1){noGrupo="";if(grupoLayers[i].icone&&grupoLayers[i].icone===true){noGrupo+="<p style="+estilo+" ><input class=inputsb style=cursor:pointer onclick='i3GEO.arvoreDeCamadas.ligaDesligaTemas(\""+i3GEO.configura.grupoLayers[i].layers+"\",this.checked)' type=checkbox title='Ligar/desligar temas do grupo' />&nbsp;"}noGrupo+="<span style="+estilo+";vertical-align:top ><b>"+grupoLayers[i].nome+"</b></span></p>";d=this.EXPANDIDA;if(grupoLayers[i].expandido&&grupoLayers[i].expandido===true){d=true}n=grupoLayers[i].layers.length;for(j=0;j<n;j+=1){for(k=0;k<nk;k+=1){ltema=temas[k];if(ltema.name===grupoLayers[i].layers[j]&&ltema.escondido==="nao"){if(noGrupo!==""){grupoNode=new YAHOO.widget.HTMLNode({enableHighlight:false,html:noGrupo,expanded:d},tempNode);noGrupo=""}textoTema=i3GEO.arvoreDeCamadas.montaTextoTema(ltema);if(textoTema!==""){d={enableHighlight:false,expanded:i3GEO.arvoreDeCamadas.EXPANDIDA,html:textoTema,id:ltema.name,tipo:"tema"};if(grupoLayers[i].dinamico&&grupoLayers[i].dinamico===true){temaNode=new YAHOO.widget.HTMLNode(d,grupoNode)}else{temaNode=new YAHOO.widget.HTMLNode(d,tempNode)}temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,1);YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault);incluidos.push(ltema.name)}}}}}grupoNode=new YAHOO.widget.HTMLNode({expanded:false,enableHighlight:false,html:"<b>Outros</b>"},tempNode);c=incluidos.length;for(k=0;k<nk;k+=1){ltema=temas[k];n=false;for(j=0;j<c;j+=1){if(incluidos[j]===ltema.name||ltema.escondido.toLowerCase()==="sim"){n=true}}if(n===false){temaNode=new YAHOO.widget.HTMLNode({enableHighlight:false,expanded:false,html:i3GEO.arvoreDeCamadas.montaTextoTema(ltema),id:ltema.name,tipo:"tema"},grupoNode,i3GEO.arvoreDeCamadas.EXPANDIDA,true);temaNode.setDynamicLoad(i3GEO.arvoreDeCamadas.montaOpcoes,1);YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault)}}}document.getElementById(i3GEO.arvoreDeCamadas.IDHTML).style.textAlign="left";i3GEO.arvoreDeCamadas.ARVORE.draw();if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true||i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){i3GEO.arvoreDeCamadas.ativaDragDrop()}i3GEO.mapa.ativaTema(i3GEO.temaAtivo);i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas();if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS===true&&i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()")}i3GEO.eventos.executaEventos(i3GEO.eventos.ATUALIZAARVORECAMADAS)},ligaDesligaTemas:function(lista,status){var c,n,i,aplica=false;lista=lista.split(",");n=lista.length;for(i=0;i<n;i+=1){c=i3GEO.arvoreDeCamadas.capturaCheckBox(lista[i]);if(c.checked!==status){aplica=true}c.checked=status;if(aplica===true&&i3GEO.Interface.ATUAL!=="padrao"){c.onclick.call()}}if(aplica===true&&i3GEO.Interface.ATUAL==="padrao"){i3GEO.arvoreDeCamadas.aplicaTemas()}},ativaDragDrop:function(){var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event,DDM=YAHOO.util.DragDropMgr;YAHOO.example.DDList="";YAHOO.example.DDApp={init:function(){var ddtarget,i,ltema,ddlist;if($i("i3geo_lixeira")&&i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){ddtarget=new YAHOO.util.DDTarget("i3geo_lixeira")}i=i3GEO.arvoreDeCamadas.CAMADAS.length-1;if(i3GEO.arvoreDeCamadas.CAMADAS.length-1>=0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if($i("arrastar_"+ltema.name)){ddlist=new YAHOO.example.DDList("arrastar_"+ltema.name)}}while(i--)}}};YAHOO.example.DDList=function(id,sGroup,config){YAHOO.example.DDList.superclass.constructor.call(this,id,sGroup,config);this.logger=this.logger||YAHOO;YAHOO.util.Dom.setStyle(this.getDragEl(),"opacity",0.67);this.goingUp=false;this.lastY=0};YAHOO.extend(YAHOO.example.DDList,YAHOO.util.DDProxy,{startDrag:function(x,y){var dragEl,clickEl,Dom=YAHOO.util.Dom;this.logger.log(this.id+" startDrag");dragEl=this.getDragEl();clickEl=this.getEl();Dom.setStyle(clickEl,"visibility","hidden");dragEl.innerHTML=clickEl.innerHTML;Dom.setStyle(dragEl,"color",Dom.getStyle(clickEl,"color"));Dom.setStyle(dragEl,"backgroundColor",Dom.getStyle(clickEl,"backgroundColor"));Dom.setStyle(dragEl,"border","4px solid gray");Dom.setStyle(dragEl,"z-index","5000")},endDrag:function(e){var srcEl,proxy,a,thisid,proxyid;srcEl=this.getEl();proxy=this.getDragEl();Dom.setStyle(proxy,"visibility","");a=new YAHOO.util.Motion(proxy,{points:{to:Dom.getXY(srcEl)}},0.2,YAHOO.util.Easing.easeOut);proxyid=proxy.id;thisid=this.id;a.onComplete.subscribe(function(){var Dom=YAHOO.util.Dom;Dom.setStyle(proxyid,"visibility","hidden");Dom.setStyle(thisid,"visibility","")});a.animate();YAHOO.util.Dom.setStyle('i3geo_lixeira','border','0px solid blue')},onDragDrop:function(e,id){var pt,region,tema,destEl,els,lista,noid,temp,DDM=YAHOO.util.DragDropMgr,Dom=YAHOO.util.Dom;if(DDM.interactionInfo.drop.length===1){pt=DDM.interactionInfo.point;region=DDM.interactionInfo.sourceRegion;if(!region.intersect(pt)){DDM.refreshCache();if(DDM.getDDById(id).id==="i3geo_lixeira"){if(i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){(new YAHOO.util.Anim("i3geo_lixeira",{opacity:{from:0,to:1}},3,YAHOO.util.Easing.easeOutStrong)).animate();tema=(this.getEl()).id.split("arrastar_")[1];i3GEO.tema.exclui(tema)}}else{if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));destEl=Dom.get(id);noid=id.split("arrastar_")[1];destEl.appendChild(this.getEl());els=i3GEO.arvoreDeCamadas.listaLigadosDesligados();lista=els[2].join(",");temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}};i3GEO.php.reordenatemas(temp,lista)}}}}},onDrag:function(e){var y;y=Event.getPageY(e);if(y<this.lastY){this.goingUp=true}else if(y>this.lastY){this.goingUp=false}this.lastY=y;if(i3GEO.guias.TIPO==="movel"){YAHOO.util.Dom.setStyle("i3GEOguiaMovelMolde","opacity",0.9)}},onDragOver:function(e,id){var srcEl,destEl;srcEl=this.getEl();destEl=YAHOO.util.Dom.get(id);if($i("i3geo_lixeira")&&id==="i3geo_lixeira"){$i("i3geo_lixeira").style.border="1px solid red"}else{destEl.style.textDecoration="underline"}},onDragOut:function(e,id){$i(id).style.textDecoration="none"}});Event.onDOMReady(YAHOO.example.DDApp.init,YAHOO.example.DDApp,true)},montaOpcoes:function(node){var d,conteudo,opcoesNode,idtema,ltema,farol,mfarol,tnome="",iconesNode,imb=i3GEO.util.$im("branco.gif"),funcoes=i3GEO.arvoreDeCamadas.FUNCOES;idtema=node.data.id;ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(i3GEO.arvoreDeCamadas.OPCOESICONES===true){if(funcoes.farolescala===true){farol="maisamarelo.png";mfarol="";if(ltema.escala*1<i3GEO.parametros.mapscale*1){farol="maisverde.png";mfarol=$trad("t9")}if(ltema.escala*1>i3GEO.parametros.mapscale*1){farol="maisvermelho.png";mfarol=$trad("t10")}if(ltema.escala===0){farol="maisamarelo.png";mfarol=$trad("t11")}tnome+="&nbsp;<img id='farol"+ltema.name+"' src='"+i3GEO.util.$im(farol)+"' title='"+mfarol+"' />"}if(funcoes.excluir===true){tnome+="&nbsp;<img  id='idx"+ltema.name+"' class='x' src='"+imb+"' title='"+$trad("t12")+"' onclick='i3GEO.tema.exclui(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t12a")+"','exclui')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(funcoes.sobe===true){tnome+="&nbsp;<img class='sobe' src='"+imb+"' title='"+$trad("t13")+"' onclick='i3GEO.tema.sobe(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t14")+"','sobe')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(funcoes.desce===true){tnome+="&nbsp;<img class='desce' src='"+imb+"' title='"+$trad("t15")+"' onclick='i3GEO.tema.desce(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t16")+"','desce')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(funcoes.fonte===true){tnome+="&nbsp;<img class='fonte' src='"+imb+"' title='"+$trad("a9")+"' onclick='i3GEO.tema.fonte(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("a9")+"','fonte')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if((ltema.zoomtema.toLowerCase()==="sim")&&(i3GEO.Interface.ATUAL!=="flamingo")&&(funcoes.zoomtema===true)){tnome+="&nbsp;<img class='extent' src='"+imb+"' title='"+$trad("t17")+"' onclick='i3GEO.tema.zoom(\""+ltema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t18")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}iconesNode=new YAHOO.widget.HTMLNode({html:tnome,enableHighlight:false,isLeaf:true,expanded:false},node);if(funcoes.compartilhar===true&&ltema.permitecomentario.toLowerCase()!=="nao"){temp=i3GEO.configura.locaplic+"/ms_criamapa.php?layers="+ltema.name+"&amp;temasa="+ltema.name;tnome=i3GEO.social.compartilhar("",temp,temp,"semtotal");iconesNode=new YAHOO.widget.HTMLNode({html:tnome,enableHighlight:false,isLeaf:true,expanded:false},node)}}if(i3GEO.arvoreDeCamadas.OPCOESTEMAS===true){opcoesNode=new YAHOO.widget.HTMLNode({html:$trad("t18a"),idopcoes:ltema.name,identifica:ltema.identifica,enableHighlight:false,expanded:false},node);opcoesNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraOpcoes,1)}if(i3GEO.arvoreDeCamadas.OPCOESLEGENDA===true&&ltema.classe!=="NAO"){opcoesNode=new YAHOO.widget.HTMLNode({html:$trad("p3"),idlegenda:ltema.name,enableHighlight:false,expanded:i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA},node);opcoesNode.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1)}node.loadComplete()},mostraOpcoes:function(node){var tnome,d,n,temp,idtema=node.data.idopcoes,ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema),funcoes=i3GEO.arvoreDeCamadas.FUNCOES;if(funcoes.opacidade===true){if(navm){tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t19")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t20")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=42' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","tr"+ltema.name,"","3",ltema.transparency)+"&nbsp;<a  class='tic' onclick='i3GEO.tema.mudatransp(\""+ltema.name+"\")' href='#' /a>"}else{tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t19")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t20")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=42' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","tr"+ltema.name,"","3",ltema.transparency)+"<img  class='tic' style='position:relative;top:3px;' onclick='i3GEO.tema.mudatransp(\""+ltema.name+"\")' src='"+i3GEO.util.$im("branco.gif")+"' />"}n=new YAHOO.widget.HTMLNode({expanded:false,enableHighlight:false,isLeaf:true,html:tnome},node)}if(funcoes.temporizador===true&&i3GEO.Interface.ATUAL!="padrao"&&i3GEO.Interface.ATUAL!="flamingo"){if(navm){tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t47")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t48")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=101' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","temporizador"+ltema.name,"","3",ltema.temporizador)+"&nbsp;<a  class='tic' onclick='i3GEO.tema.temporizador(\""+ltema.name+"\")' href='#' /a>"}else{tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t47")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+$trad("t48")+"</span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=101' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","temporizador"+ltema.name,"","3",ltema.temporizador)+"<img  class='tic' style='position:relative;top:3px;' onclick='i3GEO.tema.temporizador(\""+ltema.name+"\")' src='"+i3GEO.util.$im("branco.gif")+"' />"}n=new YAHOO.widget.HTMLNode({expanded:false,enableHighlight:false,isLeaf:true,html:tnome},node)}if(funcoes.mudanome===true){if(navm){tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t21a")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"+$trad("t21")+" </span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=43' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","nn"+ltema.name,"","8","")+"&nbsp;<a  class='tic' onclick='i3GEO.tema.mudanome(\""+ltema.name+"\")' href='#' />"}else{tnome="<span onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t21a")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"+$trad("t21")+" </span> <a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=5&idajuda=43' >&nbsp;&nbsp;&nbsp;</a>"+$inputText("","","nn"+ltema.name,"","10","")+"<img  class='tic' style='position:relative;top:3px;' onclick='i3GEO.tema.mudanome(\""+ltema.name+"\")' src='"+i3GEO.util.$im("branco.gif")+"' />"}n=new YAHOO.widget.HTMLNode({expanded:false,enableHighlight:false,isLeaf:true,html:tnome},node)}if((ltema.type<3)&&(ltema.connectiontype!==7)){if(i3GEO.Interface.ATUAL!=="flamingo"&&funcoes.procurar===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t22"),$trad("t23"),'i3GEO.tema.dialogo.procuraratrib(\"'+ltema.name+'\")',node)}if(funcoes.toponimia===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t24"),$trad("t25"),'i3GEO.tema.dialogo.toponimia(\"'+ltema.name+'\")',node)}if(funcoes.etiquetas===true&&(ltema.identifica.toLowerCase()==="sim"||ltema.identifica==="")){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t26"),$trad("t27"),'i3GEO.tema.dialogo.etiquetas(\"'+ltema.name+'\")',node)}if(funcoes.filtrar===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t28"),$trad("t29"),'i3GEO.tema.dialogo.filtro(\"'+ltema.name+'\")',node)}if(funcoes.tabela===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t30"),$trad("t31"),'i3GEO.tema.dialogo.tabela(\"'+ltema.name+'\")',node)}if(i3GEO.parametros.versaoms>4&&funcoes.grafico===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t37"),$trad("t37"),'i3GEO.tema.dialogo.graficotema(\"'+ltema.name+'\")',node)}}if((ltema.type<4||ltema.type===8)&&funcoes.editorlegenda===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t32"),$trad("t33"),'i3GEO.tema.dialogo.editaLegenda(\"'+ltema.name+'\")',node)}if(funcoes.destacar===true&&i3GEO.Interface.ATUAL!=="googlemaps"&&i3GEO.Interface.ATUAL!=="googleearth"&&i3GEO.Interface.ATUAL!=="flamingo"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t34"),$trad("t35"),'i3GEO.navega.destacaTema.inicia(\"'+ltema.name+'\")',node)}if(funcoes.cortina===true&&i3GEO.Interface.ATUAL!=="padrao"&&i3GEO.Interface.ATUAL!=="googleearth"&&i3GEO.Interface.ATUAL!=="flamingo"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t42"),$trad("t42"),'i3GEO.tema.dialogo.cortina(\"'+ltema.name+'\")',node)}if(funcoes.sql===true&&ltema.editorsql.toLowerCase()==="sim"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t40"),$trad("t41"),'i3GEO.tema.dialogo.editorsql(\"'+ltema.name+'\")',node)}if(funcoes.comentar===true&&ltema.permitecomentario.toLowerCase()!=="nao"&&i3GEO.arvoreDeTemas.OPCOESADICIONAIS.comentarios===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t45"),$trad("t45"),'i3GEO.tema.dialogo.comentario(\"'+ltema.name+'\")',node)}if(funcoes.wms===true&&ltema.permiteogc.toLowerCase()!=="nao"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema("Getcapabilities",'WMS-OGC','i3GEO.tema.dialogo.mostraWms(\"'+ltema.name+'\")',node)}if(i3GEO.parametros.editor.toLowerCase()==="sim"){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t44"),"<span style=color:red title='Apenas usu�rios editores podem ver essa op��o' >"+$trad("t44")+"</span>",'i3GEO.tema.dialogo.salvaMapfile(\"'+ltema.name+'\")',node)}if(funcoes.tme===true){i3GEO.arvoreDeCamadas.adicionaOpcaoTema($trad("t49"),$trad("t49"),'i3GEO.tema.dialogo.tme(\"'+ltema.name+'\")',node)}node.loadComplete()},adicionaOpcaoTema:function(dica,titulo,onclick,node){var tnome="<a href='#' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+dica+"','');\" onclick="+onclick+">"+titulo+" </a>",temp=new YAHOO.widget.HTMLNode({html:tnome,enableHighlight:false,isLeaf:true,expanded:false},node)},mostraLegenda:function(node){var retorna,idtema=node.data.idlegenda,ltema=i3GEO.arvoreDeCamadas.pegaTema(idtema);retorna=function(retorno){var original,i,re,tabela,linhas,linha,colunas,id,exp,incluir,d,nodeLeg,elementos,nelementos,inputs,desativar,nindices;if(retorno.data.legenda){original=retorno;retorno=retorno.data.legenda;if(retorno[0]){if((navn)&&(!retorno[0].imagem)){tabela=retorno}else{i=retorno[0].imagem;re=new RegExp("tiff","g");i=i.replace(re,'png');tabela="<img src='"+i+"' />"}retorno=""}else{linhas=retorno.split("#");if(linhas.length>1){linhas=retorno.split("|");tabela="<table>";linha=linhas.length-1;if(linha>=0){do{colunas=linhas[linha].split("#");id=colunas[0]+"-"+colunas[1];re=new RegExp("'","g");exp=colunas[3].replace(re,'"');tabela+="<tr style='border-top:1px solid rgb(240,240,240);'><td><img src='"+colunas[4]+"' </td><td style='text-align:left'>"+colunas[2]+"</td></tr>"}while(linha--)}tabela+="</table><br>"}else{tabela=retorno}}}else{tabela="<img src='"+retorno.data[0].imagem+"' />"}incluir="<div style='text-align:left' id='"+idtema+"verdiv"+"'>"+tabela+"</div>";nodeLeg=new YAHOO.widget.HTMLNode({html:incluir,enableHighlight:false,expanded:false},node);node.loadComplete();elementos=document.getElementById(idtema+"verdiv").getElementsByTagName("input");nelementos=elementos.length;inputs=[];i=0;if(nelementos>0){do{if(elementos[i].type==="checkbox"){inputs.push(elementos[i])}i++}while(i<nelementos)}if(original.data.desativar){desativar=original.data.desativar;nindices=desativar.length;i=0;if(nindices>0){do{inputs[desativar[i]].checked=false;i++}while(i<nindices)}}};if(i3GEO.configura.templateLegenda!==""){i3GEO.php.criaLegendaHTML(retorna,idtema,i3GEO.configura.templateLegenda)}else{i3GEO.php.criaLegendaHTML(retorna,idtema)}},atualizaLegenda:function(idtema){var node;if(document.getElementById(idtema+"verdiv")){node=i3GEO.arvoreDeCamadas.ARVORE.getNodeByProperty("idlegenda",idtema);if(node){i3GEO.arvoreDeCamadas.ARVORE.removeChildren(node);this.mostraLegenda(node);if($i("janelaLegenda"+idtema+"_corpo")){i3GEO.tema.mostralegendajanela(idtema,"","abrejanela")}}}},escolheCorClasse:function(leg){var obj,novoel;leg=leg.parentNode.getElementsByTagName("input")[0];if(!$i("tempinputcorclasse")){novoel=document.createElement("input");novoel.id="tempinputcorclasse";novoel.style.display="none";novoel.alt="objeto criado para guardar dados da funcao escolohercorclasse";novoel.onchange="";document.body.appendChild(novoel)}obj=$i("tempinputcorclasse");obj.value="";obj.tema=leg.name;obj.idclasse=leg.value;obj.onchange=function(){var obj=$i("tempinputcorclasse");i3GEO.tema.alteracorclasse(obj.tema,obj.idclasse,obj.value)};i3GEO.util.abreCor("","tempinputcorclasse")},inverteStatusClasse:function(leg){var temp=function(retorno){i3GEO.atualiza();i3GEO.Interface.atualizaTema(retorno,leg.name)};i3GEO.php.inverteStatusClasse(temp,leg.name,leg.value)},montaTextoTema:function(tema){var ck,html,display="none",estilo,iu=i3GEO.util;if(tema.status*1===2){ck=' CHECKED '}else{ck=""}if(this.FILTRO!==""){if(this.FILTRO==="desligados"&&ck!==""){return""}if(this.FILTRO==="ligados"&&ck===""){return""}if(this.FILTRO==="selecionados"&&tema.sel.toLowerCase()!=="sim"){return""}if(this.FILTRO==="download"&&tema.download.toLowerCase()!=="sim"){return""}if(this.FILTRO==="wms"&&tema.connectiontype*1!==7){return""}if(this.FILTRO==="raster"&&tema.type*1!==3){return""}if(this.FILTRO==="toponimia"&&tema.type*1!==4){return""}}estilo=navm?"text-align:left;font-size:11px;vertical-align:middle;display:table-cell;":"text-align:left;font-size:11px;vertical-align:vertical-align:top;padding-top:4px;";html="<p onclick='i3GEO.mapa.ativaTema(\""+tema.name+"\")' id='arrastar_"+tema.name+"' style='"+estilo+"' ><input class=inputsb style='cursor:pointer;' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t3")+"','ligadesliga')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" type='checkbox' name=\"layer\" value='"+tema.name+"' "+ck;if(i3GEO.arvoreDeCamadas.ATIVATEMA!==""){html+="onclick=\""+i3GEO.arvoreDeCamadas.ATIVATEMA+"\""}else{html+="onclick='i3GEO.util.criaBotaoAplicar(\"i3GEO.arvoreDeCamadas.aplicaTemas\",\""+$trad("p14")+"\",\"i3geoBotaoAplicarCamadas\",this)'"}html+=" />";estilo=navm?"cursor:pointer;vertical-align:35%;padding-top:0px;":"cursor:pointer;vertical-align:top;";if(tema.iconetema!==""&&i3GEO.arvoreDeCamadas.ICONETEMA===true){html+="&nbsp;<img style='"+estilo+"' src='"+tema.iconetema+"' />"}if(tema.contextoescala.toLowerCase()==="sim"){html+="&nbsp;<img style='"+estilo+"' src="+iu.$im("contextoescala.png")+" title='"+$trad("t36")+"' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t36")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(tema.sel.toLowerCase()==="sim"){html+="&nbsp;<img style='"+estilo+"' src="+iu.$im("estasel.png")+" title='"+$trad("t4")+"' onclick='i3GEO.tema.limpasel(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t5")+"','limpasel')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />";html+="&nbsp;<img style='"+estilo+"' src="+iu.$im("zoomsel.gif")+" title='"+$trad("t4a")+"' onclick='i3GEO.tema.zoomsel(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t5")+"','zoomsel')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}if(tema.download.toLowerCase()==="sim"){html+="&nbsp;<img style='"+estilo+"' src="+iu.$im("down1.gif")+" title='download' onclick='i3GEO.tema.dialogo.download(\""+tema.name+"\")' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t6")+"','download')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" />"}estilo=navm?"cursor:move;vertical-align:35%;padding-top:0px;color:black;":"cursor:move;vertical-align:top;color:black;";if(i3GEO.arvoreDeCamadas.AGUARDALEGENDA){html+="&nbsp;<span id='ArvoreTituloTema"+tema.name+"' style='"+estilo+"' onclick=\"i3GEO.tema.mostralegendajanela('"+tema.name+"','"+tema.tema+"','abrejanela');\" onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t7a")+"','');i3GEO.tema.mostralegendajanela('"+tema.name+"','"+tema.tema+"','ativatimer');\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('');i3GEO.tema.mostralegendajanela('"+tema.name+"','','desativatimer');\" >"+tema.tema+"</span>"}else{html+="&nbsp;<span id='ArvoreTituloTema"+tema.name+"' style='"+estilo+"' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+$trad("t7")+"','')\" onmouseout=\"javascript:i3GEO.ajuda.mostraJanela('')\" >"+tema.tema+"</span>"}html+="</p>";if(i3GEO.tema.TEMPORIZADORESID[tema.name]==undefined&&tema.temporizador!=""){i3GEO.tema.temporizador(tema.name,tema.temporizador)}return(html)},atualizaFarol:function(mapscale){var farol,l,ltema,escala,iu=i3GEO.util,im=i3GEO.configura.locaplic+"/imagens/",camadas=i3GEO.arvoreDeCamadas.CAMADAS;farol="maisamarelo.png";l=camadas.length-1;if(l>=0){do{ltema=camadas[l];escala=ltema.escala;if(escala*1<mapscale*1){farol="maisverde.png"}if(escala*1>mapscale*1){farol="maisvermelho.png"}if(escala*1===0){farol="maisamarelo.png"}iu.defineValor("farol"+ltema.name,"src",im+farol)}while(l--)}},aplicaTemas:function(tipo){if(arguments.length===0){tipo="normal"}var t,temp,ligar,desligar;if(tipo==="normal"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem")}if(tipo==="ligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca");if(i3GEO.util.in_array(i3GEO.Interface.ATUAL,["googleearth","openlayers","googlemaps"])){return}}if(tipo==="desligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca");if(i3GEO.util.in_array(i3GEO.Interface.ATUAL,["googleearth","openlayers","googlemaps"])){return}}temp=function(){i3GEO.atualiza();i3GEO.janela.fechaAguarde("redesenha")};try{clearTimeout(tempoBotaoAplicar)}catch(erro){}tempoBotaoAplicar="";i3GEO.janela.abreAguarde("redesenha",$trad("o1"));if(tipo==="normal"){i3GEO.php.ligatemas(temp,t[1].toString(),t[0].toString());return}if(tipo==="ligartodos"){i3GEO.php.ligatemas(temp,"",t[2].toString());return}if(tipo==="desligartodos"){i3GEO.php.ligatemas(temp,t[2].toString(),"")}},listaLigadosDesligados:function(tipo){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return[[],[],[]]}if(arguments.length===0){tipo="manter"}var no,cs,csn,j,c,temp,nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema"),ligados=[],desligados=[],todos=[],n=nos.length,i=0,ATUAL=i3GEO.Interface.ATUAL;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j+=1){c=cs[j];if(c.name==="layer"){temp=c.checked===true?ligados.push(c.value):desligados.push(c.value);todos.push(c.value);if(tipo==="marca"){c.checked=true;if(i3GEO.util.in_array(ATUAL,["googleearth","openlayers","googlemaps"])){i3GEO.Interface[ATUAL].ligaDesliga(c)}}if(tipo==="desmarca"){c.checked=false;if(i3GEO.util.in_array(ATUAL,["googleearth","openlayers","googlemaps"])){i3GEO.Interface[ATUAL].ligaDesliga(c)}}}}i++}catch(e){i+=1}}while(i<n);return([ligados,desligados,todos])},capturaCheckBox:function(tema){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return}var nos,ligados,desligados,todos,n,i,no,cs,csn,j,c;nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema");n=nos.length;i=0;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j+=1){c=cs[j];if(c.name==="layer"&&c.value===tema){return c}}i+=1}catch(e){i+=1}}while(i<n);return(null)},comparaTemas:function(novo,atual){try{var novon=novo.length,i;if(novon!==atual.length){return(false)}for(i=0;i<novon;i+=1){if(novo[i].name!==atual[i].name){return(false)}if(novo[i].tema!==atual[i].tema){return(false)}if(novo[i].sel!==atual[i].sel){return(false)}if(novo[i].status!==atual[i].status){return(false)}}return(true)}catch(e){return true}},pegaTema:function(idtema,camadas){var i;if(!camadas){camadas=i3GEO.arvoreDeCamadas.CAMADAS}i=camadas.length;while(i>0){i-=1;if(camadas[i].name===idtema){return camadas[i]}}return""},filtraCamadas:function(propriedade,valor,operador,camadas){var resultado=[],i=0,temp,nelementos=camadas.length,ltema;if(nelementos>0){do{ltema=camadas[i];if(ltema.escondido.toLowerCase()!=="sim"){temp=ltema[propriedade];if(operador==="igual"){if(temp==valor){resultado.push(ltema)}}if(operador==="diferente"){if(temp!=valor){resultado.push(ltema)}}if(operador==="menor"){if(temp<valor){resultado.push(ltema)}}}i+=1}while(i<nelementos)}return resultado},alteraPropCamadas:function(propriedade,valor,camada){var resultado=[],i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.name===camada){ltema[propriedade]=valor}i+=1}while(i<nelementos)}},verificaAbrangenciaTemas:function(){if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS===false){return}try{var resultado=[],i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema,intersec,node;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];temp=ltema.exttema;if(temp!==""){if(i3GEO.util.intersectaBox(temp,i3GEO.parametros.mapexten)===false){$i("ArvoreTituloTema"+ltema.name).style.color="gray"}else{$i("ArvoreTituloTema"+ltema.name).style.color="black"}}i+=1}while(i<nelementos)}}catch(e){}},verificaAplicaExtensao:function(){var i=0,temp="",nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;try{if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.aplicaextensao.toLowerCase()==="sim"){temp=ltema.name}i+=1}while(i<nelementos)}}catch(e){return""}return temp},dialogo:{filtro:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.filtro()","filtroarvore","filtroarvore")},excluir:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.excluir()","excluirarvore","excluirarvore")}}};