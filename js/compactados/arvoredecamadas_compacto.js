if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.arvoreDeCamadas={ARVORE:null,IDHTML:"listaTemas",CAMADASINICIAIS:"",CAMADAS:"",FINALIZA:"",finaliza:"",NOTEMA:{expanded:true,hasIcon:false,enableHighlight:false},NOTEMAICONES:{expanded:false,hasIcon:true,enableHighlight:false},INCLUILFUNDO:true,ATIVATEMA:"",TEMPLATELEGENDA:"legenda5.htm",BARRAPROGRESSO:true,MOSTRALISTAKML:false,FILTRO:"",VERIFICAABRANGENCIATEMAS:false,EXPANDESOLEGENDA:false,PERMITEEXPANDIRTEMAS:true,ARRASTARORDEM:true,REFRESH:true,ARRASTARLIXEIRA:false,ALTERAOPACIDADE:false,FERRAMENTAS:true,IMPRIMIR:false,ANIMAMAPA:false,LIGARDESLIGARTODOS:true,FILTRAR:true,ABRELEGENDA:true,EXPANDIDA:false,LEGENDAEXPANDIDA:false,MOSTRATITULO:false,OPCOESICONES:false,MENUCOTEXTOTEMA:true,OPCOESTEMAS:true,OPCOESLEGENDA:true,OPCOESARVORE:true,AGUARDALEGENDA:false,ICONETEMA:true,FUNCOES:{farolescala:true,excluir:true,sobe:true,desce:true,fonte:true,zoomtema:true,compartilhar:true,opacidade:true,mudanome:true,procurar:true,toponimia:true,etiquetas:true,filtrar:true,tabela:true,grafico:true,editorlegenda:true,destacar:true,cortina:true,sql:true,comentar:true,temporizador:true,wms:true,tme:true,copia:true,storymap:true,animagif:true,selecao:true},SID:null,LOCAPLIC:null,CONFIGICONES:{"ajuda":{tipo:"arvore",icone:"",classe:"ajudaMapa",funcao:"i3GEO.arvoreDeCamadas.ajudaEmLista()",title:$trad("s1"),dica:"",id:"ajudaMapa",status:true},"refresh":{tipo:"arvore",icone:"",classe:"i3geo_refresh2",funcao:"i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true)",title:"Refresh",dica:$trad("refresh"),curto:"Refresh",id:"i3geo_refresh",status:true},"legenda":{tipo:"arvore",icone:"",classe:"soltaleg2",funcao:"i3GEO.mapa.legendaHTML.libera()",title:$trad("t2b"),dica:$trad("legenda"),id:"soltaleg2",status:false},"olhoaberto":{tipo:"arvore",icone:"",classe:"olhoAberto",funcao:"i3GEO.arvoreDeCamadas.aplicaTemas(\"ligartodos\")",title:$trad("t3a"),dica:$trad("t3a"),id:"olhoAberto",status:true},"olhofechado":{tipo:"arvore",icone:"",classe:"olhoFechado",funcao:"i3GEO.arvoreDeCamadas.aplicaTemas(\"desligartodos\")",title:$trad("t3b"),dica:$trad("t3b"),id:"olhoFechado",status:true},"lixeira":{tipo:"arvore",icone:"",classe:"i3geo_lixeira",funcao:"i3GEO.arvoreDeCamadas.dialogo.excluir()",title:$trad("t2"),dica:$trad("lixeira"),curto:$trad("t12"),id:"i3geo_lixeira",status:true},"filtro":{tipo:"arvore",icone:"",classe:"i3geo_filtro",funcao:"i3GEO.arvoreDeCamadas.dialogo.filtro()",title:$trad("t2a"),dica:$trad("filtraCam"),id:"i3geo_filtro",status:true},"opacidade":{tipo:"arvore",icone:"",classe:"opacidadeMapa",funcao:"i3GEO.mapa.dialogo.opacidade()",title:$trad("t20"),dica:"",id:"opacidadeMapa",status:false},"animacao":{tipo:"arvore",icone:"",classe:"animaMapa",funcao:"i3GEO.mapa.dialogo.animacao()",title:$trad("p21"),dica:"",id:"animaMapa",status:false},"imprimir":{tipo:"arvore",icone:"",classe:"imprimirMapa",funcao:"i3GEO.mapa.dialogo.imprimir()",title:$trad("d12"),dica:"",id:"imprimirMapa",status:false},"ferramentas":{tipo:"arvore",icone:"",classe:"ferramentasMapa",funcao:"i3GEO.mapa.dialogo.ferramentas()",title:$trad("u15a"),dica:$trad("ferramMapa"),id:"ferramentasMapa",status:true},"limpasel":{tipo:"arvore",icone:"",classe:"ferramentasMapa",funcao:"i3GEO.mapa.limpasel()",title:$trad("t4"),dica:$trad("t4"),id:"limpaSelMapa",status:true},"ligaDesligaTema":{tipo:"tema",icone:"",classe:"arvCamFerramentas",funcao:"i3GEO.arvoreDeCamadas.ligaDesligaClick",title:$trad("ligaDesliga"),dica:"",id:"",status:true,flag:true},"ferramentasTema":{tipo:"tema",icone:"imagens/oxygen/16x16/configure-shortcuts.png",classe:"arvCamFerramentas",funcao:"i3GEO.tema.dialogo.atalhoscamada",title:$trad("u15a"),dica:$trad("ferramCamadas"),id:"",status:true,flag:true},"removerTema":{tipo:"tema",icone:"imagens/oxygen/16x16/draw-x.png",classe:"arvCamRemoveLayer",funcao:"i3GEO.tema.exclui",title:$trad("t12"),dica:$trad("t12a"),id:"",status:true,flag:true},"zoomtema":{tipo:"tema",icone:"imagens/gisicons/zoom-layer.png",classe:"arvCamZoomLayer",funcao:"i3GEO.tema.zoom",title:$trad("t17"),dica:$trad("t18"),id:"",status:true,flag:true},"sobe":{tipo:"tema",icone:"imagens/oxygen/16x16/draw-triangle3.png",classe:"arvCamSobeLayer",funcao:"i3GEO.tema.sobe",title:$trad("t13"),dica:$trad("t14"),id:"",status:true,flag:true},"desce":{tipo:"tema",icone:"imagens/oxygen/16x16/draw-triangle4.png",classe:"arvCamDesceLayer",funcao:"i3GEO.tema.desce",title:$trad("t15"),dica:$trad("t16"),id:"",status:true,flag:true},"contextoescala":{tipo:"tema",icone:"imagens/oxygen/16x16/task-attempt.png",classe:"arvCamDependeEscala",funcao:"",title:$trad("t36"),dica:$trad("t36"),id:"",status:true,flag:true},"selecionado":{tipo:"tema",icone:"imagens/gisicons/select-cancel.png",classe:"arvCamSelecionado",funcao:"i3GEO.tema.limpasel",title:$trad("t4"),dica:$trad("t5"),id:"",status:true,flag:true},"zoomsel":{tipo:"tema",icone:"imagens/gisicons/zoom-selection.png",classe:"arvCamZoomSelecionado",funcao:"i3GEO.tema.zoomsel",title:$trad("t4a"),dica:$trad("t5"),id:"",status:true,flag:true},"link":{tipo:"tema",icone:"imagens/oxygen/16x16/help-about.png",classe:"arvCamFonte",funcao:"i3GEO.tema.fonte",title:$trad("a9"),dica:$trad("a9"),id:"",status:true,flag:true},"download":{tipo:"tema",icone:"imagens/oxygen/16x16/download.png",classe:"arvCamDownload",funcao:"i3GEO.tema.dialogo.download",title:"Download",dica:$trad("t6"),id:"",status:true,flag:true},"ogc":{tipo:"tema",icone:"imagens/oxygen/16x16/application-x-smb-workgroup.png",classe:"arvCamOgc",funcao:"i3GEO.tema.dialogo.ogcwindow",title:"OGC",dica:"OGC",id:"",status:true,flag:true},"tabelaAtrib":{tipo:"tema",icone:"imagens/oxygen/16x16/configure-shortcuts.png",classe:"arvCamFerramentas",funcao:"i3GEO.tema.dialogo.tabela",title:$trad("tabela"),dica:$trad("t30"),id:"",status:true,flag:true},"editorLegenda":{tipo:"tema",icone:"imagens/oxygen/16x16/configure-shortcuts.png",classe:"arvCamFerramentas",funcao:"i3GEO.tema.dialogo.editaLegenda",title:$trad("t33"),dica:"",id:"",status:true,flag:true}},ligaDesligaClick:function(tema){$i(tema+"ckbox").click()},cria:function(onde,temas,g_sid,g_locaplic,funcaoTema){if(!YAHOO.lang.isUndefined(funcaoTema)){i3GEO.arvoreDeCamadas.ATIVATEMA=funcaoTema}var novoel,temp;if(i3GEO.arvoreDeCamadas.BARRAPROGRESSO===true&&i3GEO.Interface.ATUAL==="openlayers"){if(!$i("i3GEOprogressoDiv")){novoel=document.createElement("div");novoel.id="i3GEOprogressoDiv";novoel.style.position="absolute";novoel.style.top="0px";novoel.style.zIndex="50000";novoel.style.left=((i3GEO.parametros.w/2)-75)+"px";novoel.style.display="none";$i(i3GEO.Interface.IDMAPA).appendChild(novoel);i3GEO.arvoreDeCamadas.progressBar=new YAHOO.widget.ProgressBar({height:5,width:150,minValue:1,maxValue:0,value:0}).render("i3GEOprogressoDiv")}}i3GEO.arvoreDeCamadas.SID=typeof(g_sid)!=='undefined'?g_sid:i3GEO.configura.sid;i3GEO.arvoreDeCamadas.LOCAPLIC=typeof(g_locaplic)!=='undefined'?g_locaplic:i3GEO.configura.locaplic;if(onde!==""){i3GEO.arvoreDeCamadas.IDHTML=onde}if(i3GEO.arvoreDeCamadas.IDHTML===""){return}temp=$i(i3GEO.arvoreDeCamadas.IDHTML);if(!temp){return}if(temp.className===""){temp.className="i3GEOarvCam"}if(YAHOO.lang.isUndefined(temas)||temas===""){temas=i3GEO.arvoreDeCamadas.CAMADAS}i3GEO.arvoreDeCamadas.atualiza(temas);if(i3GEO.arvoreDeCamadas.finaliza!==""){alert("i3GEO.arvoreDeCamadas.finaliza depreciado. Utilize i3GEO.arvoreDeCamadas.FINALIZA");i3GEO.arvoreDeCamadas.FINALIZA=i3GEO.arvoreDeCamadas.finaliza;eval(i3GEO.arvoreDeCamadas.finaliza)}if(i3GEO.arvoreDeCamadas.FINALIZA!==""){if(YAHOO.lang.isFunction(i3GEO.arvoreDeCamadas.FINALIZA)){i3GEO.arvoreDeCamadas.FINALIZA.call()}else{if(i3GEO.arvoreDeCamadas.FINALIZA!=""){eval(i3GEO.arvoreDeCamadas.FINALIZA)}}}},inicia:function(id){i3GEO.arvoreDeCamadas.cria(id);i3GEO.arvoreDeCamadas.atualiza();if(i3GEO.arvoreDeCamadas.FINALIZA!==""){if(YAHOO.lang.isFunction(i3GEO.arvoreDeCamadas.FINALIZA)){i3GEO.arvoreDeCamadas.FINALIZA.call()}else{if(i3GEO.arvoreDeCamadas.FINALIZA!=""){eval(i3GEO.arvoreDeCamadas.FINALIZA)}}}},atualiza:function(temas,forca){if(arguments.length===0){temas=i3GEO.arvoreDeCamadas.CAMADAS;i3GEO.arvoreDeCamadas.CAMADAS="";forca=false}var temp,newVal,root,tempNode,titulo="",d,c,ltema,temaNode,temaNodeFilho="",i,j,n,nk,k,noGrupo,incluidos=[],grupoNode="",grupoLayers=i3GEO.configura.grupoLayers,textoTema="";temp=$i(i3GEO.arvoreDeCamadas.IDHTML);if(temp){if(forca===true){temp.innerHTML=""}if(temp.innerHTML!==""){if(i3GEO.arvoreDeCamadas.comparaTemas(temas,i3GEO.arvoreDeCamadas.CAMADAS)){i3GEO.arvoreDeCamadas.CAMADAS=temas;return}}}else{return}i3GEO.util.defineValor(i3GEO.arvoreDeCamadas.IDHTML,"innerHTML","");i3GEO.arvoreDeCamadas.CAMADAS=temas;if(i3GEO.arvoreDeCamadas.CAMADASINICIAIS===""){i3GEO.arvoreDeCamadas.CAMADASINICIAIS=temas}(function(){function changeIconMode(){var currentIconMode="";newVal=parseInt(this.value,10);if(newVal!==currentIconMode){currentIconMode=newVal}buildTree()}function buildTree(){i3GEO.arvoreDeCamadas.ARVORE=new YAHOO.widget.TreeView(i3GEO.arvoreDeCamadas.IDHTML)}buildTree()})();root=i3GEO.arvoreDeCamadas.ARVORE.getRoot();if(i3GEO.arvoreDeCamadas.MOSTRATITULO===true){titulo=$trad("t1")}tempNode=new YAHOO.widget.HTMLNode({expanded:true,html:titulo,hasIcon:i3GEO.arvoreDeCamadas.MOSTRATITULO,enableHighlight:true},root);if(i3GEO.arvoreDeCamadas.OPCOESARVORE===true){if($i("arvoreCamOpcoes")){var onMenuItemClick=function(p_sType,p_aArgs,p_oItem){eval(p_oItem.value)};new YAHOO.widget.Button({type:"menu",label:$trad("opcoes"),name:"arvoreCamOpcoes",menu:i3GEO.arvoreDeCamadas.montaOpcoesArvore("hash",onMenuItemClick),container:"arvoreCamOpcoes"});i3GEO.arvoreDeCamadas.OPCOESARVORE=false}else{new YAHOO.widget.HTMLNode({expanded:false,html:i3GEO.arvoreDeCamadas.montaOpcoesArvore("html"),hasIcon:false,enableHighlight:false},tempNode)}}if(grupoLayers===""){c=temas.length;for(i=0,j=c;i<j;i+=1){ltema=temas[i];try{if((ltema.escondido).toLowerCase()!=="sim"){textoTema=i3GEO.arvoreDeCamadas.montaTextoTema(ltema);if(textoTema!==""){temp=i3GEO.arvoreDeCamadas.NOTEMA;temp.html=textoTema;temp.idlegenda=ltema.name;temp.tipo="tema";temp.enableHighlight=false;temaNode=new YAHOO.widget.HTMLNode(temp,tempNode);if(i3GEO.arvoreDeCamadas.OPCOESICONES===true){textoTema=i3GEO.arvoreDeCamadas.montaIconesTema(ltema)[0];temp=i3GEO.arvoreDeCamadas.NOTEMAICONES;temp.id=ltema.name;temp.html=textoTema;temp.isLeaf=!i3GEO.arvoreDeCamadas.PERMITEEXPANDIRTEMAS;temaNodeFilho=new YAHOO.widget.HTMLNode(temp,temaNode)}if(ltema.classe!=="NAO"&&this.PERMITEEXPANDIRTEMAS){if(temaNodeFilho.setDynamicLoad){temaNodeFilho.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1);if(i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA===true){temaNodeFilho.expand()}}}}YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault)}}catch(e){}}}else{nk=temas.length;c=grupoLayers.length;for(i=0;i<c;i+=1){noGrupo="";noGrupo+="<div class='i3GEOarvCamGrupo'>"+grupoLayers[i].nome+"</div>";d=i3GEO.arvoreDeCamadas.EXPANDIDA;if(grupoLayers[i].expandido&&grupoLayers[i].expandido===true){d=true}n=grupoLayers[i].layers.length;for(j=0;j<n;j+=1){for(k=0;k<nk;k+=1){ltema=temas[k];if(ltema.name===grupoLayers[i].layers[j]&&ltema.escondido==="nao"){if(noGrupo!==""){grupoNode=new YAHOO.widget.HTMLNode({enableHighlight:true,hasIcon:true,html:noGrupo,expanded:d},tempNode);noGrupo=""}textoTema=i3GEO.arvoreDeCamadas.montaTextoTema(ltema);if(textoTema!==""){d={expanded:false,hasIcon:false,html:textoTema,idlegenda:ltema.name,tipo:"tema",enableHighlight:true};temaNode=new YAHOO.widget.HTMLNode(d,grupoNode);textoTema=i3GEO.arvoreDeCamadas.montaIconesTema(ltema)[0];temaNodeFilho=new YAHOO.widget.HTMLNode({id:ltema.name,expanded:false,html:textoTema,enableHighlight:false,isLeaf:!this.PERMITEEXPANDIRTEMAS},temaNode);if(ltema.classe!=="NAO"&&this.PERMITEEXPANDIRTEMAS){temaNodeFilho.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1);if(i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA===true){temaNodeFilho.expand()}}YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault);incluidos.push(ltema.name)}}}}}grupoNode=new YAHOO.widget.HTMLNode({expanded:false,hasIcon:true,enableHighlight:true,html:"<div class='i3GEOarvCamGrupo'>"+$trad("u27")+"</div>"},tempNode);c=incluidos.length;for(k=0;k<nk;k+=1){ltema=temas[k];n=false;for(j=0;j<c;j+=1){if(incluidos[j]===ltema.name||ltema.escondido.toLowerCase()==="sim"){n=true}}if(n===false){textoTema=i3GEO.arvoreDeCamadas.montaTextoTema(ltema);if(textoTema!==""){d={expanded:true,hasIcon:false,html:textoTema,idlegenda:ltema.name,tipo:"tema",enableHighlight:false};temaNode=new YAHOO.widget.HTMLNode(d,grupoNode);textoTema=i3GEO.arvoreDeCamadas.montaIconesTema(ltema)[0];temaNodeFilho=new YAHOO.widget.HTMLNode({id:ltema.name,expanded:false,html:textoTema,enableHighlight:false,isLeaf:!this.PERMITEEXPANDIRTEMAS},temaNode);if(ltema.classe!=="NAO"&&this.PERMITEEXPANDIRTEMAS){temaNodeFilho.setDynamicLoad(i3GEO.arvoreDeCamadas.mostraLegenda,1);if(i3GEO.arvoreDeCamadas.LEGENDAEXPANDIDA===true){temaNodeFilho.expand()}}YAHOO.util.Event.addListener($i("arrastar_"+ltema),"click",YAHOO.util.Event.preventDefault);YAHOO.util.Event.addFocusListener($i("arrastar_"+ltema),YAHOO.util.Event.preventDefault);incluidos.push(ltema.name)}}}}if(i3GEO.Interface.ATUAL==="openlayers"&&i3GEO.arvoreDeCamadas.INCLUILFUNDO===true){i3GEO.arvoreDeCamadas.montaNoFundo(root)}document.getElementById(i3GEO.arvoreDeCamadas.IDHTML).style.textAlign="left";i3GEO.arvoreDeCamadas.ARVORE.draw();if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true||i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){i3GEO.arvoreDeCamadas.ativaDragDrop()}i3GEO.mapa.ativaTema(i3GEO.temaAtivo);i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas();if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS===true){i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()"])}i3GEO.eventos.executaEventos(i3GEO.eventos.ATUALIZAARVORECAMADAS)},montaNoFundo:function(root){var c=i3GEO.Interface.openlayers.LAYERSADICIONAIS,n=c.length,temaNode,i,l,temp;temaNode=new YAHOO.widget.HTMLNode({html:"",isLeaf:false,hasIcon:false},root);temaNode=new YAHOO.widget.HTMLNode({html:$trad("p16"),isLeaf:false,hasIcon:true},root);for(i=0;i<n;i++){l=c[i].getProperties();temp="<div><label class='temaSwitch' for='CK"+l.name+"'>";temp+="<input type='checkbox' name=\"layer\" value='"+l.name+"' "+"id='CK"+l.name+"' onclick=\"i3GEO.Interface.openlayers.ativaFundo('"+l.name+"')\" ";if(l.visible===true){temp+=" checked "}temp+=" />";temp+="<div class='temaSlider round' ></div>";temp+="</label>&nbsp;"+l.title+"</div>";new YAHOO.widget.HTMLNode({html:temp,tipo:"fundo",isLeaf:true,hasIcon:false,enableHighlight:false},temaNode)}},montaOpcoesArvore:function(tipo,funcao){var temp,n,i=null,c,ins="",imb=i3GEO.configura.locaplic+"/imagens/branco.gif",estilo=function(i){return" onmouseout='javascript:this.className = \""+i+" iconeMini iconeGuiaMovelMouseOut\";' onmouseover='javascript:this.className = \""+i+" iconeMini iconeGuiaMovelMouseOver\";' class='"+i+" iconeMini iconeGuiaMovelMouseOut' src='"+imb+"' style='cursor:pointer;text-align:left' "};if(!tipo){tipo="html"}n=this.CONFIGICONES;if(tipo==="html"){for(i in n){c=n[i];if(c.status===true&&c.tipo==="arvore"){ins+="<img "+estilo(c.classe)+" onclick='i3GEO.util.animaClique(this);"+c.funcao+"' title='"+c.title+"' id='"+c.id+"'/>"}}}else{ins=[];for(i in n){c=n[i];if(c.curto){temp=c.curto}else{temp=c.title}if(c.status===true&&c.tipo==="arvore"){ins.push({text:temp,value:c.funcao,onclick:{fn:funcao}})}}}return ins},ligaDesligaTemas:function(lista,status){var c,n,i,aplica=false;lista=lista.split(",");n=lista.length;for(i=0;i<n;i+=1){c=i3GEO.arvoreDeCamadas.capturaCheckBox(lista[i]);if(c){if(c.checked!==status){aplica=true}c.checked=status;if(aplica===true){c.onclick()}}}},ativaDragDrop:function(){var Dom=YAHOO.util.Dom,Event=YAHOO.util.Event;YAHOO.example.DDList="";YAHOO.example.DDApp={init:function(){var i,ltema;if($i("i3geo_lixeira")&&i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){new YAHOO.util.DDTarget("i3geo_lixeira")}i=i3GEO.arvoreDeCamadas.CAMADAS.length-1;if(i3GEO.arvoreDeCamadas.CAMADAS.length-1>=0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if($i("arrastar_"+ltema.name)){new YAHOO.example.DDList("arrastar_"+ltema.name)}}while(i--)}}};YAHOO.example.DDList=function(id,sGroup,config){YAHOO.example.DDList.superclass.constructor.call(this,id,sGroup,config);this.logger=this.logger||YAHOO;YAHOO.util.Dom.setStyle(this.getDragEl(),"opacity",0.67);this.goingUp=false;this.lastY=0};YAHOO.extend(YAHOO.example.DDList,YAHOO.util.DDProxy,{startDrag:function(x,y){var dragEl,clickEl,Dom=YAHOO.util.Dom;dragEl=this.getDragEl();clickEl=this.getEl();Dom.setStyle(clickEl,"visibility","hidden");if(clickEl.getElementsByTagName("span")){dragEl.innerHTML=clickEl.getElementsByTagName("span")[0].innerHTML}else{dragEl.innerHTML=clickEl.innerHTML}Dom.setStyle(dragEl,"color",Dom.getStyle(clickEl,"color"));Dom.setStyle(dragEl,"backgroundColor",Dom.getStyle(clickEl,"backgroundColor"));Dom.setStyle(dragEl,"fontSize",Dom.getStyle(clickEl,"fontSize"));Dom.setStyle(dragEl,"border","2px solid gray");Dom.setStyle(dragEl,"padding","5px");Dom.setStyle(dragEl,"z-index","5000")},endDrag:function(e){var srcEl,proxy,a,thisid,proxyid;srcEl=this.getEl();proxy=this.getDragEl();Dom.setStyle(proxy,"visibility","");a=new YAHOO.util.Motion(proxy,{points:{to:Dom.getXY(srcEl)}},0.2,YAHOO.util.Easing.easeOut);proxyid=proxy.id;thisid=this.id;a.onComplete.subscribe(function(){var Dom=YAHOO.util.Dom;Dom.setStyle(proxyid,"visibility","hidden");Dom.setStyle(thisid,"visibility","");$i(proxyid).innerHTML=""});a.animate();YAHOO.util.Dom.setStyle('i3geo_lixeira','border','0px solid blue')},onDragDrop:function(e,id){var pt,region,tema,destEl,els,lista,temp,DDM=YAHOO.util.DragDropMgr,Dom=YAHOO.util.Dom;if(DDM.interactionInfo.drop.length===1){pt=DDM.interactionInfo.point;region=DDM.interactionInfo.sourceRegion;if(!region.intersect(pt)){DDM.refreshCache();if(DDM.getDDById(id).id==="i3geo_lixeira"){if(i3GEO.arvoreDeCamadas.ARRASTARLIXEIRA===true){(new YAHOO.util.Anim("i3geo_lixeira",{opacity:{from:0,to:1}},3,YAHOO.util.Easing.easeOutStrong)).animate();tema=(this.getEl()).id.split("arrastar_")[1];i3GEO.tema.exclui(tema)}}else{if(i3GEO.arvoreDeCamadas.ARRASTARORDEM===true){destEl=Dom.get(id);destEl.appendChild(this.getEl());els=i3GEO.arvoreDeCamadas.listaLigadosDesligados();lista=els[2].join(",");temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true)};i3GEO.php.reordenatemas(temp,lista)}else{i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true)}}}}},onDrag:function(e){var y;y=Event.getPageY(e);if(y<this.lastY){this.goingUp=true}else if(y>this.lastY){this.goingUp=false}this.lastY=y},onDragOver:function(e,id){var destEl;destEl=YAHOO.util.Dom.get(id);var dragEl=this.getDragEl();Dom.setStyle(dragEl,"border","2px solid blue");if($i("i3geo_lixeira")&&id==="i3geo_lixeira"){$i("i3geo_lixeira").style.border="2px solid blue"}else{destEl.style.textDecoration="underline"}},onDragOut:function(e,id){$i(id).style.textDecoration="none";var dragEl=this.getDragEl();Dom.setStyle(dragEl,"border","2px solid gray")}});Event.onDOMReady(YAHOO.example.DDApp.init,YAHOO.example.DDApp,true)},montaOpcoes:function(node){},mostraOpcoes:function(node){},adicionaOpcaoTema:function(dica,titulo,onclick,node){var tnome="<a href='#' onmouseover=\"javascript:i3GEO.ajuda.mostraJanela('"+dica+"','');\" onclick="+onclick+">"+titulo+" </a>";new YAHOO.widget.HTMLNode({html:tnome,enableHighlight:false,isLeaf:true,expanded:false},node)},mostraLegenda:function(node){var retorna,idtema=node.data.id;retorna=function(retorno){var original={data:""},i,re,tabela="",linhas,linha,colunas,incluir,elementos,nelementos,inputs,desativar,nindices;if(retorno.data&&retorno.data.legenda){original=retorno;retorno=retorno.data.legenda;if(retorno[0]){if((navn)&&(!retorno[0].imagem)){tabela=retorno}else{i=retorno[0].imagem;re=new RegExp("tiff","g");i=i.replace(re,'png');tabela="<img src='"+i+"' />"}retorno=""}else{linhas=retorno.split("#");if(linhas.length>1){linhas=retorno.split("|");tabela="<table>";linha=linhas.length-1;if(linha>=0){do{colunas=linhas[linha].split("#");re=new RegExp("'","g");tabela+="<tr style='border-top:1px solid rgb(240,240,240);'><td><img src='"+colunas[4]+"' </td><td style='text-align:left'>"+colunas[2]+"</td></tr>"}while(linha--)}tabela+="</table><br>"}else if(retorno){tabela=retorno}}}else if(retorno&&retorno.data){tabela="<img src='"+retorno.data[0].imagem+"' />"}incluir="<div style='text-align:left' id='"+idtema+"verdiv"+"'>"+tabela+"</div>";new YAHOO.widget.HTMLNode({html:incluir,enableHighlight:false,expanded:false},node);node.loadComplete();elementos=document.getElementById(idtema+"verdiv").getElementsByTagName("input");nelementos=elementos.length;inputs=[];i=0;if(nelementos>0){do{if(elementos[i].type==="checkbox"){inputs.push(elementos[i])}i++}while(i<nelementos)}if(original&&original.data&&original.data.desativar&&original.data.desativar[idtema]){desativar=original.data.desativar[idtema];nindices=desativar.length;i=0;if(nindices>0){do{inputs[desativar[i]].checked=false;i++}while(i<nindices)}}};if(i3GEO.arvoreDeCamadas.TEMPLATELEGENDA!==""){i3GEO.php.criaLegendaHTML(retorna,idtema,i3GEO.arvoreDeCamadas.TEMPLATELEGENDA)}else{i3GEO.php.criaLegendaHTML(retorna,idtema)}},atualizaLegenda:function(idtema){var node;if(document.getElementById(idtema+"verdiv")){node=i3GEO.arvoreDeCamadas.ARVORE.getNodeByProperty("id",idtema);if(node){i3GEO.arvoreDeCamadas.ARVORE.removeChildren(node);this.mostraLegenda(node);if($i("janelaLegenda"+idtema+"_corpo")){i3GEO.tema.mostralegendajanela(idtema,"","abrejanela")}}}},escolheCorClasse:function(leg){var obj,novoel;leg=leg.parentNode.getElementsByTagName("input")[0];if(!$i("tempinputcorclasse")){novoel=document.createElement("input");novoel.id="tempinputcorclasse";novoel.style.display="none";novoel.alt="objeto criado para guardar dados da funcao escolohercorclasse";novoel.onchange="";document.body.appendChild(novoel)}obj=$i("tempinputcorclasse");obj.value="";obj.tema=leg.name;obj.idclasse=leg.value;obj.onchange=function(){var obj=$i("tempinputcorclasse");i3GEO.tema.alteracorclasse(obj.tema,obj.idclasse,obj.value)};i3GEO.util.abreCor("","tempinputcorclasse")},inverteStatusClasse:function(leg){var temp=function(retorno){i3GEO.Interface.atualizaTema(retorno,leg.name);var ck="";if(leg.id&&leg.id==="legendack_"+leg.name+"_"+leg.value){ck=$i("liblegendack_"+leg.name+"_"+leg.value)}else if(leg.id&&leg.id==="liblegendack_"+leg.name+"_"+leg.value){ck=$i("legendack_"+leg.name+"_"+leg.value)}if(ck&&ck!=""){ck.checked=leg.checked}};i3GEO.php.inverteStatusClasse(temp,leg.name,leg.value)},montaTextoTema:function(tema){var ck,html,f;if(tema.status*1===2){ck=' CHECKED '}else{ck=""}f=this.FILTRO;if(f!==""){if(f==="desligados"&&ck!==""){return""}if(f==="ligados"&&ck===""){return""}if(f==="selecionados"&&tema.sel.toLowerCase()!=="sim"){return""}if(f==="download"&&tema.download.toLowerCase()!=="sim"){return""}if(f==="wms"&&tema.connectiontype*1!==7){return""}if(f==="raster"&&tema.type*1!==3){return""}if(f==="toponimia"&&tema.type*1!==4){return""}}html="<div class='temaArrastar' id='arrastar_"+tema.name+"'><label class='temaSwitch' for='"+tema.name+"ckbox'  ";tema=i3GEO.pluginI3geo.aplicaPropriedades(tema);if(tema.sel&&tema.sel.toLowerCase()==="sim"){tema.tema="<span class='i3GEOtemaComSel'>"+tema.tema+"</span>"}if(tema.iconetema!==""&&i3GEO.arvoreDeCamadas.ICONETEMA===true){tema.tema="<img class='i3GEOiconeTema' src='"+tema.iconetema+"' />"+tema.tema}html+=" id='ArvoreTituloTema"+tema.name+"' >";html+="<input type='checkbox' name=\"layer\" value='"+tema.name+"' "+"id='"+tema.name+"ckbox'"+ck+"onclick=\""+i3GEO.arvoreDeCamadas.ATIVATEMA+"\""+" />";html+="<div class='temaSlider round' ></div>";html+="</label>&nbsp;";if(i3GEO.arvoreDeCamadas.MENUCOTEXTOTEMA===true){html+="<span onmouseout='this.style.textDecoration=\"none\"' onmouseover='this.style.textDecoration=\"underline\"' style='cursor:pointer;' onclick='i3GEO.arvoreDeCamadas.menuContextoTema(this,\""+tema.name+"\");return false;'>"+tema.tema+"</span></div>"}else{html+=tema.tema+"</div>"}if(i3GEO.tema.TEMPORIZADORESID[tema.name]==undefined&&tema.temporizador!=""){i3GEO.tema.temporizador(tema.name,tema.temporizador)}return(html)},menuContextoTema:function(obj,tema){if(typeof i3GEO.arvoreDeCamadas.oMenuContextoTema!="undefined"){i3GEO.arvoreDeCamadas.oMenuContextoTema.destroy()}i3GEO.arvoreDeCamadas.oMenuContextoTema=new YAHOO.widget.Menu("i3GEOmenuContextoTema",{fixedcenter:false,xy:YAHOO.util.Dom.getXY(obj),position:"dynamic",zIndex:50000});i3GEO.arvoreDeCamadas.oMenuContextoTema.addItems(i3GEO.arvoreDeCamadas.montaIconesTema(i3GEO.arvoreDeCamadas.pegaTema(tema))[1]);i3GEO.arvoreDeCamadas.oMenuContextoTema.render(document.body);i3GEO.arvoreDeCamadas.oMenuContextoTema.show()},montaIconesTema:function(tema){var hash=[],fer="",fers,iconePlugin,n,i=null,c,html,estilo,farol,mfarol,imb=i3GEO.configura.locaplic+"/imagens/branco.gif";estilo="i3GEOarvCamTemaIco";html="<div class='"+estilo+"' >";tema=i3GEO.pluginI3geo.aplicaPropriedades(tema);if(tema.escala!=0){farol="maisamarelo.png";mfarol="";if(tema.escala*1<i3GEO.parametros.mapscale*1){farol="maisverde.png";mfarol=$trad("t9")}if(tema.escala*1>i3GEO.parametros.mapscale*1){farol="maisvermelho.png";mfarol=$trad("t10")}if(tema.escala===0){farol="maisamarelo.png";mfarol=$trad("t11")}html+="&nbsp;<img class='arvCamFarol' id='farol"+tema.name+"' src='"+i3GEO.configura.locaplic+"/imagens/"+farol+"' title='"+mfarol+"' />";hash.push({text:"<img class='arvCamFarol' id='farol"+tema.name+"' src='"+i3GEO.configura.locaplic+"/imagens/"+farol+"'/><label>"+mfarol+"</label>"})}this.CONFIGICONES.zoomtema.flag=false;if(tema.zoomtema.toLowerCase()==="sim"){this.CONFIGICONES.zoomtema.flag=true}this.CONFIGICONES.contextoescala.flag=false;if(tema.contextoescala.toLowerCase()==="sim"){this.CONFIGICONES.contextoescala.flag=true}this.CONFIGICONES.selecionado.flag=false;this.CONFIGICONES.zoomsel.flag=false;if(tema.sel.toLowerCase()==="sim"){this.CONFIGICONES.selecionado.flag=true;this.CONFIGICONES.zoomsel.flag=true}this.CONFIGICONES.link.flag=false;if(tema.link_tema!=""&&tema.features.toLowerCase()!=="sim"&&tema.name!="mundo"){this.CONFIGICONES.link.flag=true}this.CONFIGICONES.download.flag=false;if(tema.download.toLowerCase()==="sim"||tema.download===""&&tema.features.toLowerCase()!=="sim"){this.CONFIGICONES.download.flag=true}this.CONFIGICONES.ogc.flag=false;if(tema.permiteogc.toLowerCase()==="sim"){this.CONFIGICONES.ogc.flag=true}n=this.CONFIGICONES;for(i in n){c=n[i];if(c.status===true&&c.tipo==="tema"&&c.flag===true){html+="<img "+"class='"+c.classe+"' onclick='i3GEO.util.animaClique(this);"+c.funcao+"(\""+tema.name+"\",true,\""+tema.link_tema+"\")"+"' title='"+c.title+"' id='"+c.id+"' src='"+imb+"'/>";hash.push({text:c.title,url:"javascript:"+c.funcao+"('"+tema.name+"',true,'"+tema.link_tema+"')"})}}if(tema.plugini3geo){iconePlugin=i3GEO.pluginI3geo.clickArvoreDeCamadas(tema);if(iconePlugin){hash.push({text:iconePlugin})}}if(tema.ferramentas){fers=tema.ferramentas;for(fer in fers){if(i3GEO.configura.ferramentasLayers[fer]){html+=i3GEO.configura.ferramentasLayers[fer].icone(tema.name)}}}html+="</div>";return([html,hash])},atualizaFarol:function(mapscale){var farol,l,ltema,escala,iu=i3GEO.util,im=i3GEO.configura.locaplic+"/imagens/",camadas=i3GEO.arvoreDeCamadas.CAMADAS;farol="maisamarelo.png";l=camadas.length-1;if(l>=0){do{ltema=camadas[l];escala=ltema.escala;if(escala*1<mapscale*1){farol="maisverde.png"}if(escala*1>mapscale*1){farol="maisvermelho.png"}if(escala*1===0){farol="maisamarelo.png"}iu.defineValor("farol"+ltema.name,"src",im+farol)}while(l--)}},aplicaTemas:function(tipo){if(arguments.length===0){tipo="normal"}var t="",temp;if(tipo==="normal"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem")}if(tipo==="ligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca");return}if(tipo==="desligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca");return}temp=function(){i3GEO.atualiza();i3GEO.janela.fechaAguarde("redesenha")};if(tipo==="normal"){i3GEO.php.ligatemas(temp,t[1].toString(),t[0].toString());return}if(tipo==="ligartodos"){i3GEO.php.ligatemas(temp,"",t[2].toString());return}if(tipo==="desligartodos"){i3GEO.php.ligatemas(temp,t[2].toString(),"")}},listaLigadosDesligados:function(tipo){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return[[],[],[]]}if(arguments.length===0){tipo="manter"}var no,cs,csn,j,c,nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema"),ligados=[],desligados=[],todos=[],n=nos.length,i=0,ATUAL=i3GEO.Interface.ATUAL;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j+=1){c=cs[j];if(c.name==="layer"){c.checked===true?ligados.push(c.value):desligados.push(c.value);todos.push(c.value);if(tipo==="marca"){c.checked=true;i3GEO.Interface[ATUAL].ligaDesliga(c)}if(tipo==="desmarca"){c.checked=false;i3GEO.Interface[ATUAL].ligaDesliga(c)}}}i++}catch(e){i+=1}}while(i<n);return([ligados,desligados,todos])},capturaCheckBox:function(tema){if(!$i(i3GEO.arvoreDeCamadas.IDHTML)){return}var nos,n,i,no,cs,csn,j,c;nos=i3GEO.arvoreDeCamadas.ARVORE.getNodesByProperty("tipo","tema");n=nos.length;i=0;do{try{no=nos[i].getEl();cs=no.getElementsByTagName("input");csn=cs.length;for(j=0;j<csn;j+=1){c=cs[j];if(c.name==="layer"&&c.value===tema){return c}}i+=1}catch(e){i+=1}}while(i<n);return(null)},comparaTemas:function(novo,atual){try{var novon=novo.length,i;if(novon!==atual.length){return(false)}for(i=0;i<novon;i+=1){if(novo[i].name!==atual[i].name){return(false)}if(novo[i].tema!==atual[i].tema){return(false)}if(novo[i].sel!==atual[i].sel){return(false)}if(novo[i].status!==atual[i].status){return(false)}}return(true)}catch(e){return true}},pegaTema:function(valor,camadas,parametro){var i;if(!camadas||camadas==""){camadas=i3GEO.arvoreDeCamadas.CAMADAS}else{camadas=i3GEO.arvoreDeCamadas.converteChaveValor2normal(camadas)}if(!parametro){parametro="name"}i=camadas.length;while(i>0){i-=1;if(camadas[i][parametro]===valor){return camadas[i]}}return""},filtraCamadas:function(propriedade,valor,operador,camadas){if(!camadas){camadas=i3GEO.arvoreDeCamadas.CAMADAS}var resultado,i=0,temp,nelementos=camadas.length,ltema;resultado=[];if(nelementos>0){do{ltema=camadas[i];if(ltema.escondido.toLowerCase()!=="sim"){temp=ltema[propriedade];if(operador==="igual"){if(temp+"".toLowerCase()==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="diferente"){if(temp+"".toLowerCase()!==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="menor"){if(temp+"".toLowerCase()<valor+"".toLowerCase()){resultado.push(ltema)}}}i+=1}while(i<nelementos)}return resultado},alteraPropCamadas:function(propriedade,valor,camada){var i=0,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.name===camada){ltema[propriedade]=valor}i+=1}while(i<nelementos)}},verificaAbrangenciaTemas:function(){if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS===false){return}try{var i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];temp=ltema.exttema;if(temp!==""){if(i3GEO.util.intersectaBox(temp,i3GEO.parametros.mapexten)===false){$i("ArvoreTituloTema"+ltema.name).style.color="gray"}else{$i("ArvoreTituloTema"+ltema.name).style.color="black"}}i+=1}while(i<nelementos)}}catch(e){}},verificaAplicaExtensao:function(){var i=0,temp="",nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;try{if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.aplicaextensao.toLowerCase()==="sim"){temp=ltema.name}i+=1}while(i<nelementos)}}catch(e){return""}return temp},converteChaveValor2normal:function(obj){if(obj.chaves){var i,tema,j,t,chaves=obj.chaves,temas=obj.valores,ntemas=temas.length,nchaves=chaves.length,novo=[];for(i=0;i<ntemas;i++){tema=temas[i];t={};for(j=0;j<nchaves;j++){t[chaves[j]]=tema[j]}novo.push(t)}return novo}else{return obj}},registaCamadas:function(obj){obj=i3GEO.arvoreDeCamadas.converteChaveValor2normal(obj);i3GEO.arvoreDeCamadas.CAMADAS=obj},ajudaEmLista:function(){var n,i=null,ins="",b,imb=i3GEO.configura.locaplic+"/imagens/branco.gif",g;n=i3GEO.arvoreDeCamadas.CONFIGICONES;ins+="<table class=lista8 >";for(i in n){b=n[i];if(b.dica!=""){if(b.icone!=""){g="<img src='"+i3GEO.configura.locaplic+"/"+b.icone+"' />"}else{g="<img src='"+imb+"' class='"+b.classe+"'/>"}ins+="<tr><td>"+g+"</td><td>"+b.dica+"</td></tr>"}}ins+="</table>";i3GEO.janela.mensagemSimples("<div style='overflow:auto;height:100%'>"+ins+"</div>","")},dialogo:{filtro:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.filtro()","filtroarvore","filtroarvore","dependencias.php","i3GEOF.filtroarvore.iniciaJanelaFlutuante()")},excluir:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.excluir()","excluirarvore","excluirarvore")}}};