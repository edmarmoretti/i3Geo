if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.tema={ativaFerramentas:function(camada){if(camada.ferramentas&&camada.ferramentas!=""){var f=camada.ferramentas;if(f.tme&&f.tme.auto&&f.tme.auto.toLowerCase()==="sim"){i3GEO.tema.dialogo.tme(camada.name)}if(f.storymap&&f.storymap.auto&&f.storymap.auto.toLowerCase()==="sim"){i3GEO.tema.dialogo.storymap(camada.name)}if(f.animagif&&f.animagif.auto&&f.animagif.auto.toLowerCase()==="sim"){i3GEO.tema.dialogo.animagif(camada.name)}}},exclui:function(temas,confirma,after){if(confirma&&confirma===true){i3GEO.janela.confirma($trad("removerDoMapa"),300,$trad("x14"),"",function(){i3GEO.tema.exclui(temas,false,after)});return}if(Array.isArray(temas)){var excluir=temas}else{var excluir=[temas]}var grupos=[];for(const t of excluir){var camada=i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[t];for(const c of i3GEO.arvoreDeCamadas.CAMADAS){if(c.group!=""&&camada.group!=""){if(c.name==camada.group||camada.group==c.group||camada.name==c.group){grupos.push(c.name)}}}try{i3GEO.pluginI3geo.removeCamada(t)}catch(r){}}excluir=[...excluir,...grupos];i3GEO.request.get({snackbar:true,snackbarmsg:false,btn:false,par:{layernames:excluir.getUnique().join(",")},prog:"/restmapserver/map/"+i3GEO.configura.sid+"/layersDelete",fn:function(data){i3GEO.mapa.ativaTema();i3GEO.temaAtivo="";for(const t of excluir){var layer=i3geoOL.getLayersByName(t);if(layer.length>0){i3geoOL.removeLayer(layer[0])}}i3GEO.mapa.refresh();if(after){after.call(after,data)}}})},fonte:function(tema,popup,link){i3GEO.mapa.ativaTema(tema);if(!link){link=i3GEO.configura.locaplic+"/ferramentas/abrefontemapfile.php?tema="+tema}if(!popup){window.open(link)}else{i3GEO.janela.cria((i3GEO.parametros.w/2)+25+"px",(i3GEO.parametros.h/2)+18+"px",link,"","","<div class='i3GeoTituloJanela'>Metadata</div>","metadata"+tema)}},moveUp:function(layerName){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/moveUp",fn:function(data){i3GEO.mapa.refresh(i3GEO.Interface.ordenaLayers)}})},moveDown:function(layerName){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/moveDown",fn:function(data){i3GEO.mapa.refresh(i3GEO.Interface.ordenaLayers)}})},zoom:function(tema){},zoomsel:function(layerName){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/zoomSel",fn:function(data){i3GEO.Interface.zoom2ext(data)}})},itens:function(after,tema){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{tema:tema,ext:i3GEO.mapa.getExtent().string,funcao:"itens"},prog:"/serverapi/layer/",fn:function(data){if(after){after.call(after,data)}}})},valoresItem:function(after,tema,item){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{tema:tema,item:item,ext:i3GEO.mapa.getExtent().geo,funcao:"valoresItem"},prog:"/serverapi/layer/",fn:function(data){if(after){after.call(after,data)}}})},queryByRect:function(after,layerName,wkt,extent){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{extent:extent?extent:i3GEO.mapa.getExtent().geo,wkt:wkt?wkt:false},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/queryByRect",fn:function(data){if(after){after.call(after,data)}return data}})},limpasel:function(layerName){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/clearSel",fn:function(data){if(data==true){i3GEO.mapa.refresh(i3GEO.Interface.atualizaTema("",layerName))}}})},invertestatuslegenda:function(layerName){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/toggleLegend",fn:function(data){if(data==true){i3GEO.mapa.refresh(i3GEO.Interface.atualizaTema("",layerName))}}})},alteracorclasse:function(after,tema,idclasse,rgb,objImg){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{tema:tema,idclasse:idclasse,cor:rgb,funcao:"alteracor"},prog:"/serverapi/class/",fn:function(data){if(after){after.call(after,data)}else{if(objImg){objImg.src=data}else{i3GEO.legenda.CAMADAS="";i3GEO.mapa.refresh()}i3GEO.Interface.atualizaTema("",idtema)}}})},mudanome:function(idlayer,title){if(title!==""){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{title:title,idlayer:idlayer,funcao:"alterLayerName"},prog:"/serverapi/layer/",fn:function(data){i3GEO.mapa.refresh()}})}else{i3GEO.janela.tempoMsg($trad("x18"))}},copia:function(layerName){i3GEO.request.get({snackbar:true,snackbarmsg:false,btn:false,par:{},prog:"/restmapserver/layer/"+i3GEO.configura.sid+"/"+layerName+"/copy",fn:function(data){if(data==true){i3GEO.mapa.refresh()}}})},cortina:{_cortinaCompose:"",_slide:"",start:function(obj,tema){var layer=i3geoOL.getLayersByName(tema)[0];if(i3GEO.tema.cortina._cortinaCompose==""){var a=layer.on('precompose',function(event){var ctx=event.context;var width=ctx.canvas.width*(obj.value/100);ctx.save();ctx.beginPath();ctx.rect(width,0,ctx.canvas.width-width,ctx.canvas.height);ctx.clip()});var b=layer.on('postcompose',function(event){var ctx=event.context;ctx.restore()});i3GEO.tema.cortina._cortinaCompose=[a,b];obj.addEventListener('input',function(){i3geoOL.render()},false)}},stop:function(){ol.Observable.unByKey(i3GEO.tema.cortina._cortinaCompose);i3GEO.tema.cortina._cortinaCompose="";i3geoOL.renderSync()}},dialogo:{animagif:function(tema){if(!tema){tema=""}var temp=function(){i3GEOF.animagif.start(tema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.animagif()","animagif","animagif","dependencias.php",temp)},storymap:function(tema){if(!tema){tema=""}var temp=function(){i3GEOF.storymap.start(tema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.storymap()","storymap","storymap","dependencias.php",temp)},tme:function(tema){if(!tema){tema=""}var temp=function(){i3GEOF.tme.start(tema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.tme()","tme","tme","dependencias.php",temp)},mostraWms:function(tema){i3GEO.janela.mensagemSimples(i3GEO.configura.locaplic+"/ogc.php?tema="+tema,"WMS url")},comentario:function(tema){i3GEO.janela.cria("530px","330px",i3GEO.configura.locaplic+"/ferramentas/comentarios/index.php?tema="+tema+"&g_sid="+i3GEO.configura.sid+"&locaplic="+i3GEO.configura.locaplic,"","","<img src='"+i3GEO.configura.locaplic+"/imagens/player_volta.png' style=cursor:pointer onclick='javascript:history.go(-1)'><span style=position:relative;top:-2px; > "+$trad("x19")+" "+tema+"</span><a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=7&idajuda=68' ><b> </b></a>","comentario"+Math.random())},mmscale:function(tema){var temp=function(){i3GEOF.mmscale.start(tema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.mmscale()","mmscale","mmscale","dependencias.php",temp)},abreKml:function(tema,tipo){if(arguments.lenght===1){tipo="kml"}if(typeof(i3GEOF.converteKml)==='undefined'){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/convertekml/index.js","i3GEOF.converteKml.criaJanelaFlutuante('"+tema+"','"+tipo+"')","i3GEOF.converteKml_script")}else{i3GEOF.converteKml.criaJanelaFlutuante(tema,tipo)}},salvaMapfile:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.salvaMapfile()","salvamapfile","salvamapfile")},graficotema:function(idtema){if(idtema&&idtema!=""){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}}var temp=function(){i3GEOF.graficoTema.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.graficotema()","graficotema","graficotema","dependencias.php",temp)},toponimia:function(idtema){var temp=function(){i3GEOF.toponimia.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.toponimia()","toponimia","toponimia","dependencias.php",temp)},filtro:function(idtema){if(idtema&&idtema!=""){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}}i3GEO.mapa.ativaTema(idtema);var temp=function(){i3GEOF.filtro.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.filtro()","filtro","filtro","dependencias.php",temp)},msQueryBuilder:function(idtema,id){var temp=function(){i3GEOF.msquerybuilder.start(idtema,id)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.msQueryBuilder()","msquerybuilder","msquerybuilder","dependencias.php",temp)},busca:function(idtema){var temp=function(){i3GEOF.busca.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.busca()","busca","busca","dependencias.php",temp)},tabela:function(idtema){if(idtema&&idtema!=""){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}}var temp=function(){i3GEOF.tabela.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.tabela()","tabela","tabela","dependencias.php",temp)},etiquetas:function(idtema){var temp=function(){i3GEOF.etiqueta.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.etiqueta()","etiqueta","etiqueta","dependencias.php",temp)},funcaojstip:function(idtema){var temp=function(){i3GEOF.funcaojstip.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.funcaojstip()","funcaojstip","funcaojstip","dependencias.php",temp)},editaLegenda:function(idtema){if(idtema&&idtema!=""){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}}var temp=function(){i3GEOF.legenda.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.editaLegenda()","legenda","legenda","dependencias.php",temp)},editaClasseLegenda:function(idtema,idclasse){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}i3GEO.mapa.ativaTema(idtema);var temp=function(){i3GEOF.legenda.aposIniciar=function(){i3GEOF.legenda.classe=0;i3GEOF.legenda.estilo=0;i3GEOF.legenda.editaSimbolo('i3GEOlegendaid_'+idtema+"-"+idclasse);i3GEOF.legenda.aposIniciar=function(){}};i3GEOF.legenda.iniciaJanelaFlutuante(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.editaLegenda()","legenda","legenda","dependencias.php",temp)},download:function(idtema){var temp=function(){i3GEOF.download.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.download()","download","download","dependencias.php",temp)},ogcwindow:function(idtema){i3GEO.mapa.ativaTema(idtema);window.open(i3GEO.configura.locaplic+"/ogc.htm?temaOgc="+idtema)},aplicarsld:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.aplicarsld()","aplicarsld","aplicarsld","dependencias.php","i3GEOF.aplicarsld.iniciaJanelaFlutuante()")},mudanome:function(idtema){i3GEO.mapa.ativaTema(idtema);var temp=function(){var valor=$i("i3GEOjanelaprompt").value;i3GEO.tema.mudanome(idtema,valor)};i3GEO.janela.prompt($trad("novonome"),temp)},selecao:function(idtema){if(idtema&&idtema!=""){var t=i3GEO.arvoreDeCamadas.pegaTema(idtema);if(t.status<2){i3GEO.janela.snackBar({content:$trad("deveLigada"),style:"red"});return}}var temp=function(){i3GEOF.selecao.start(idtema)};i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.selecao()","selecao","selecao","dependencias.php",temp)},}};