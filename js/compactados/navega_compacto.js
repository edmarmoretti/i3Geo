if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.navega={EXTENSOES:{lista:[],redo:[],posicao:0,emAcao:false},offset:function(pixelx,pixely){if(i3GEO.Interface.ATUAL=="openlayers"){var view=i3geoOL.getView(),mover=[pixelx,pixely],s=i3geoOL.getSize(),dx=s[0]/2+mover[0],dy=s[1]/2+mover[1];view.centerOn(view.getCenter(),s,[dx,dy])}},ativaPan:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){i3GeoMap.setOptions({draggable:true})}if(i3GEO.Interface.ATUAL==="openlayers"){marcadorZoom="";i3GEO.Interface.OLpanel.activateControl(i3GEO.Interface.openlayers.OLpan)}},registraExt:function(ext){if(i3GEO.navega.EXTENSOES.emAcao==false){var l=i3GEO.navega.EXTENSOES.lista,n=l.length;if(n>10){l.shift()}n=l.length;if(n>0&&l[n-1]===ext){return}l.push(ext)}else{i3GEO.navega.EXTENSOES.emAcao=false}},extensaoAnterior:function(){i3GEO.navega.EXTENSOES.emAcao=true;var l=i3GEO.navega.EXTENSOES.lista,r=i3GEO.navega.EXTENSOES.redo,a=i3GEO.mapa.getExtent().string,e;if(l.length>0){if(l.length>1){e=l.pop();i3GEO.navega.zoomExt("","","",e);if(r.length>10){r.shift()}if(r.length>0&&r[r.length-1]===e){return}else{r.push(a)}}}else{l.push(a)}},extensaoProximo:function(){var l=i3GEO.navega.EXTENSOES.lista,r=i3GEO.navega.EXTENSOES.redo,a=i3GEO.mapa.getExtent().string,e;i3GEO.navega.EXTENSOES.emAcao=true;if(r.length>0){i3GEO.navega.zoomExt("","","",r[r.length-1]);e=r.pop();if(l.length>10){l.pop()}if(l.length>0&&l[l.length-1]===e){return}l.push(a)}},pan2ponto:function(x,y){i3GEO.Interface.pan2ponto(x,y);i3GEO.Interface.recalcPar()},centroDoMapa:function(){var xy;switch(i3GEO.Interface.ATUAL){case"openlayers":xy=i3geoOL.getCenter();if(xy){return[xy.lon,xy.lat]}else{return false}break;case"googlemaps":xy=i3GeoMap.getCenter();if(xy){return[xy.lng(),xy.lat()]}else{return false}break;default:return false}},marcaCentroDoMapa:function(xy){var t=$i("i3GeoCentroDoMapa");if(t&&t.style.display==="block"){return}if(xy!=false){xy=i3GEO.calculo.dd2tela(xy[0]*1,xy[1]*1,$i(i3GEO.Interface.IDMAPA),i3GEO.mapa.getExtent().string,i3GEO.parametros.pixelsize);i3GEO.util.criaPin("i3GeoCentroDoMapa",i3GEO.configura.locaplic+'/imagens/alvo.png','30px','30px');i3GEO.util.posicionaImagemNoMapa("i3GeoCentroDoMapa",xy[0],xy[1])}},removeCookieExtensao:function(){var nomecookie="i3geoOLUltimaExtensao";if(i3GEO.Interface.googleLike===true){nomecookie="i3geoUltima_ExtensaoOSM"}i3GEO.util.insereCookie(nomecookie,"")},zoomin:function(locaplic,sid){if(i3GEO.Interface.ATUAL==="openlayers"){i3geoOL.zoomIn();return}},zoomout:function(locaplic,sid){if(i3GEO.Interface.ATUAL==="openlayers"){i3geoOL.zoomOut();return}},zoomponto:function({layerTitle="",x=0,y=0,size=8,symbol="ponto",color="255,0,0",offsetx=0,offsety=0}={}){i3GEO.Interface.pan2ponto(x,y);if(layerTitle==""){layerTitle="X: "+x+", Y: "+y}i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{x:x,y:y,symbol:symbol,size:size,color:color,offsetx:offsetx,offsety:offsety,layerTitle:layerTitle},prog:"/restmapserver/map/"+i3GEO.configura.sid+"/createLayerPointFeature",fn:function(data){i3GEO.mapa.refresh()}})},xy2xy:function(locaplic,sid,xi,yi,xf,yf,ext,tipoimagem){var disty,distx,ex,novoxi,novoxf,novoyf,nex;if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}disty=(yi*-1)+yf;distx=(xi*-1)+xf;ex=ext.split(" ");novoxi=(ex[0]*1)-distx;novoxf=(ex[2]*1)-distx;novoyi=(ex[1]*1)-disty;novoyf=(ex[3]*1)-disty;if((distx===0)&&(disty===0)){return false}else{nex=novoxi+" "+novoyi+" "+novoxf+" "+novoyf;i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,tipoimagem,nex);return true}},zoomExt:function(locaplic,sid,tipoimagem,ext){var f;if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}if(tipoimagem===""){tipoimagem="nenhum"}i3GEO.Interface.zoom2ext(ext)},aplicaEscala:function(escala){i3geoOL.zoomToScale(escala,true)},atualizaEscalaNumerica:function(escala){var e=$i("i3GEOescalanum");if(!e){return}if(arguments.length===1){e.value=$.number(escala,0,$trad("dec"),$trad("mil"))}else{e.value=$.number(i3geoOL.getScale(),0,$trad("dec"),$trad("mil"))}},panFixo:function(){alert("panFixo foi depreciado na versao 6.0")},mostraRosaDosVentos:function(){alert("mostraRosaDosVentos foi depreciado na versao 6.0")},zoomBox:{inicia:function(){alert("zoomBox depreciado na versao 6.0")}},lente:{_lenteCompose:"",eventMouseout:function(){if(i3GEO.navega.lente._lenteCompose!=""){i3GEO.navega.lente.stop(i3geoOL.getTargetElement())}},eventMouseMove:function(event){if(i3GEO.navega.lente._lenteCompose!=""){i3geoOL.renderSync()}},stop:function(container){ol.Observable.unByKey(i3GEO.navega.lente._lenteCompose);i3GEO.navega.lente._lenteCompose="";container.removeEventListener('mousemove',i3GEO.navega.lente.eventMouseMove);container.removeEventListener('mouseout',i3GEO.navega.lente.eventMouseout);i3geoOL.renderSync()},start:function(){if(i3GEO.Interface.ATUAL!="openlayers"){return}var container=i3geoOL.getTargetElement();var radius=75;container.addEventListener('mousemove',i3GEO.navega.lente.eventMouseMove);container.addEventListener('mouseout',i3GEO.navega.lente.eventMouseout);var a=i3geoOL.on('postcompose',function(event){var context=event.context;var pixelRatio=event.frameState.pixelRatio;var half=radius*pixelRatio;var centerX=objposicaocursor.imgx*pixelRatio;var centerY=objposicaocursor.imgy*pixelRatio;var originX=centerX-half;var originY=centerY-half;var size=2*half+1;var sourceData=context.getImageData(originX,originY,size,size).data;var dest=context.createImageData(size,size);var destData=dest.data;for(var j=0;j<size;++j){for(var i=0;i<size;++i){var dI=i-half;var dJ=j-half;var dist=Math.sqrt(dI*dI+dJ*dJ);var sourceI=i;var sourceJ=j;if(dist<half){sourceI=Math.round(half+dI/2);sourceJ=Math.round(half+dJ/2)}var destOffset=(j*size+i)*4;var sourceOffset=(sourceJ*size+sourceI)*4;destData[destOffset]=sourceData[sourceOffset];destData[destOffset+1]=sourceData[sourceOffset+1];destData[destOffset+2]=sourceData[sourceOffset+2];destData[destOffset+3]=sourceData[sourceOffset+3]}}context.beginPath();context.arc(centerX,centerY,half,0,2*Math.PI);context.lineWidth=3*pixelRatio;context.strokeStyle='rgba(255,255,255,0.5)';context.putImageData(dest,originX,originY);context.stroke();context.restore()});i3GEO.navega.lente._lenteCompose=[a]}},destacaTema:{inicia:function(){i3GEO.janela.tempoMsg("removido na versao 8")}},basemapSpy:{_spyCompose:"",eventMouseout:function(){if(i3GEO.navega.basemapSpy._spyCompose!=""){i3GEO.navega.basemapSpy.stop(i3geoOL.getLayerBase(),i3geoOL.getTargetElement())}},eventMouseMove:function(event){if(i3GEO.navega.basemapSpy._spyCompose!=""){i3geoOL.renderSync()}},stop:function(imagery,container){ol.Observable.unByKey(i3GEO.navega.basemapSpy._spyCompose);i3GEO.navega.basemapSpy._spyCompose="";imagery.setZIndex(imagery.get("zIndexOriginal"));container.removeEventListener('mousemove',i3GEO.navega.basemapSpy.eventMouseMove);container.removeEventListener('mouseout',i3GEO.navega.basemapSpy.eventMouseout);i3geoOL.renderSync()},start:function(){if(i3GEO.Interface.ATUAL!="openlayers"){return}var imagery=i3geoOL.getLayerBase();if(!imagery){imagery=i3geoOL.getAllLayers()[0]}var container=i3geoOL.getTargetElement();if(i3GEO.navega.basemapSpy._spyCompose!=""){i3GEO.navega.basemapSpy.stop(imagery,container);return}var radius=75;imagery.set("zIndexOriginal",imagery.getZIndex());imagery.setZIndex(1000);container.addEventListener('mousemove',i3GEO.navega.basemapSpy.eventMouseMove);container.addEventListener('mouseout',i3GEO.navega.basemapSpy.eventMouseout);var a=imagery.on('precompose',function(event){var ctx=event.context;var pixelRatio=event.frameState.pixelRatio;ctx.save();ctx.beginPath();ctx.arc(objposicaocursor.imgx*pixelRatio,objposicaocursor.imgy*pixelRatio,radius*pixelRatio,0,2*Math.PI);ctx.lineWidth=5*pixelRatio;ctx.strokeStyle='rgba(0,0,0,0.5)';ctx.stroke();ctx.clip()});var b=imagery.on('postcompose',function(event){var ctx=event.context;ctx.restore()});i3GEO.navega.basemapSpy._spyCompose=[a,b]}},dialogo:{wiki:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.wiki()","wiki","wiki","dependencias.php","i3GEOF.wiki.start()")},metar:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.metar()","metar","metar","dependencias.php","i3GEOF.metar.iniciaJanelaFlutuante()")},buscaFotos:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.buscaFotos()","buscafotos","buscaFotos","dependencias.php","i3GEOF.buscaFotos.iniciaJanelaFlutuante()")},googlemaps:function(coordenadas){i3GEO.navega.dialogo.googlemaps.coordenadas=coordenadas;i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.googlemaps()","googlemaps","googlemaps","dependencias.php","i3GEOF.googlemaps.start()")},confluence:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.confluence()","confluence","confluence","dependencias.php","i3GEOF.confluence.start()")}},atualizaGoogle:function(idgoogle){try{parent.frames[idgoogle+"i"].panTogoogle()}catch(e){i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.navega.atualizaGoogle('"+idgoogle+"')"]);i3GEO.desenho.removePins("googlemaps");i3GEO.desenho.removePins("boxOndeGoogle")}},dragZoom:function(){i3GEO.navega.dragZoom.draw=new ol.interaction.Draw({type:"Circle",freehand:false,geometryFunction:ol.interaction.Draw.createRegularPolygon(4)});i3GEO.navega.dragZoom.draw.setActive(false);i3GEO.navega.dragZoom.draw.on("drawend",function(evt){var pol=evt.feature.getGeometry();i3geoOL.getView().fit(pol);i3GEO.navega.dragZoom.draw.setActive(false)});document.body.addEventListener('keydown',function(event){if(event.keyCode==16){i3GEO.navega.dragZoom.draw.setActive(true)}});document.body.addEventListener('keyup',function(event){if(event.keyCode==16){i3GEO.navega.dragZoom.draw.setActive(false)}});return i3GEO.navega.dragZoom.draw}};