if(typeof(i3GEO)==='undefined'){var i3GEO={}}var i3GEOtouchesPosMapa="";var i3geoOL;i3GEO.Interface={LAYERPROGRESSBAR:true,RESTRICTATT:true,LAYEROPACITY:"",INFOOVERLAY:"",ATUAL:"openlayers",IDCORPO:"openlayers",IDMAPA:"",STATUS:{atualizando:[],trocando:false,pan:false},LAYERSUTFGRID:{},aposAdicNovaCamada:function(camada){i3GEO.tema.ativaFerramentas(camada)},redesenha:function(){i3GEO.Interface.criaLayers();i3GEO.Interface.ordenaLayers();i3GEO.Interface.recalcPar();i3GEO.janela.fechaAguarde()},grade:function(){if(i3GEO.Interface.GRADE==""){i3GEO.Interface.GRADE=new ol.Graticule({strokeStyle:new ol.style.Stroke({color:'rgba(105,105,105,0.9)',width:2,lineDash:[0.5,4]}),showLabels:true,targetSize:200});i3GEO.Interface.GRADE.setMap(i3geoOL);return}if(i3GEO.Interface.GRADE.getMap()==null){i3GEO.Interface.GRADE.setMap(i3geoOL)}else{i3GEO.Interface.GRADE.setMap(null)}},aplicaOpacidade:function(opacidade,layer){if(opacidade>1){opacidade=opacidade/100}if(layer){var temp=i3geoOL.getLayersByName(layer);if(temp.length>0){i3geoOL.getLayersByName(layer)[0].setOpacity(opacidade*1);return}layer=""}else{layer=""}var nlayers=i3GEO.arvoreDeCamadas.CAMADAS.length,l,i,camada;if(!layer){layer=""}for(i=nlayers-1;i>=0;i--){camada=i3GEO.arvoreDeCamadas.CAMADAS[i];l=i3geoOL.getLayersByName(camada.name)[0];if(l&&l.get("isBaseLayer")===false){if(layer==""||layer==camada.name){l.setOpacity(opacidade)}}}},atualizaMapa:function(){var camadas=i3GEO.arvoreDeCamadas.CAMADAS,n=camadas.length,i;for(i=0;i<n;i++){i3GEO.Interface.atualizaTema("",camadas[i].name)}},atualizaTema:function(retorno,tema){var layer=i3geoOL.getLayersByName(tema),objtemas,funcaoLoad,servico,source;if(layer.length==0){return""}else{layer=layer[0]}if(layer&&layer!=undefined){source=layer.getSource();servico=source.getProperties().tipoServico;if(servico==="WMTS"){funcaoLoad=source.getTileUrlFunction();if(funcaoLoad){layer.getSource().setTileUrlFunction(function(){var url=funcaoLoad.apply(this,arguments);url=url.replace("&cache=sim","&cache=nao");return url.split('&r=')[0]+'&r='+Math.random()+source.getProperties().parametrosUrl.par})}}if(servico==="ImageWMS"){funcaoLoad=source.getImageLoadFunction();if(funcaoLoad){layer.getSource().setImageLoadFunction(function(image,src){src=src.replace("&cache=sim","&cache=nao");src=src.split('&r=')[0]+'&r='+Math.random();image.getImage().src=src+source.getProperties().parametrosUrl.par})}}source.refresh()}if(retorno===""||retorno==true){return}if(retorno.data){retorno=retorno.data.temas}objtemas=i3GEO.arvoreDeCamadas.converteChaveValor2normal(retorno);i3GEO.Interface.recalcPar();try{i3GEO.arvoreDeCamadas.atualiza(objtemas)}catch(e){i3GEO.arvoreDeCamadas.atualiza()}i3GEO.janela.fechaAguarde()},ligaDesliga:function(obj){var layers=i3geoOL.getLayersByName(obj.value),desligar="",ligar="",b;if(layers.length>0){layers[0].setVisibility(obj.checked);if(obj.checked===true){i3GEO.pluginI3geo.ligaCamada(obj.value)}else{i3GEO.pluginI3geo.desligaCamada(obj.value)}}if(obj.checked){ligar=obj.value;i3GEO.arvoreDeCamadas.alteraPropCamadas("status","2",obj.value);if(i3GEO.Interface.LAYERSUTFGRID[obj.value+"_utfgrid"]){i3GEO.arvoreDeCamadas.alteraPropCamadas("status","2",obj.value+"_utfgrid");i3GEO.Interface.LAYERSUTFGRID[obj.value+"_utfgrid"].setVisibility(true)}}else{desligar=obj.value;i3GEO.arvoreDeCamadas.alteraPropCamadas("status","0",obj.value);if(i3GEO.Interface.LAYERSUTFGRID[obj.value+"_utfgrid"]){i3GEO.arvoreDeCamadas.alteraPropCamadas("status","0",obj.value+"_utfgrid");i3GEO.Interface.LAYERSUTFGRID[obj.value+"_utfgrid"].setVisibility(false)}}i3GEO.arvoreDeCamadas.ligatemas(i3GEO.legenda.atualiza,desligar,ligar);if(obj.checked&&obj.value!=""){i3GEO.mapa.ativaTema(obj.value)}},cria:function(w,h){var f,ins,i=$i(i3GEO.Interface.IDCORPO);if(i){if(!i.style.height){i.style.width="100vw";i.style.height="100vh"}f=$i("openlayers");if(!f){ins='<div id=openlayers style="display: block;position:relative;top: 0px; left: 0px;width:100%;height:100%;text-align:left;"></div>';i.innerHTML=ins;f=$i("openlayers")}}i3GEO.Interface.IDMAPA="openlayers";i3GEO.Interface.parametrosMap.target="openlayers";if(i3GEO.Interface.googleLike===false){i3GEO.Interface.parametrosView.projection="EPSG:4326"}else{i3GEO.Interface.parametrosView.projection="EPSG:3857"}i3GEO.Interface.parametrosMap.view=new ol.View(i3GEO.Interface.parametrosView);i3geoOL=new ol.Map(i3GEO.Interface.parametrosMap);ol.layer.Layer.prototype.setVisibility=function(v){this.setVisible(v)};ol.layer.Layer.prototype.getVisibility=function(v){this.getVisible(v)};i3geoOL.panTo=function(x,y,anim){if(anim){this.getView().animate({center:[x,y],duration:anim.duration,easing:anim.easing})}else{this.getView().setCenter([x,y])}};i3geoOL.getLayersByName=function(nome){var res=[],layers=this.getLayers(),n=layers.getLength(),i;for(i=0;i<n;i++){if(layers.item(i).get("name")&&layers.item(i).get("name")===nome){res.push(layers.item(i))}}return res};i3geoOL.addLayers=function(lista){var n=lista.length,i,lan,l;for(i=0;i<n;i++){if(lista[i].get!=undefined){lan=lista[i].get("name");if(lan){l=this.getLayersByName(lan);if(l.length===0){this.addLayer(lista[i])}}}}};i3geoOL.getLayersBase=function(){return i3geoOL.getLayersBy("isBaseLayer",true)};i3geoOL.getLayerBase=function(layername){var baseLayers,n,i;baseLayers=i3geoOL.getLayersBase();n=baseLayers.length;for(i=0;i<n;i++){if(layername&&baseLayers[i].getProperties().name==layername){return baseLayers[i]}if(!layername&&baseLayers[i].getVisible()==true){return baseLayers[i]}}return false};i3geoOL.getLayersBy=function(chave,valor){var res=[],layers=this.getLayers(),n=layers.getLength(),i;for(i=0;i<n;i++){if(layers.item(i).get(chave)&&layers.item(i).get(chave)===valor){res.push(layers.item(i))}}return res};i3geoOL.getAllLayers=function(){var res=[],layers=this.getLayers(),n=layers.getLength(),i;for(i=0;i<n;i++){res.push(layers.item(i))}return res};i3geoOL.getLayersGr=function(){var layers=i3geoOL.getLayersBy("layerGr",true);if(i3GEO.desenho.layergrafico){layers.unshift(i3GEO.desenho.layergrafico)}return layers};i3geoOL.getLayersGrBy=function(chave,valor){var res=[],layers=this.getLayersGr(),n=layers.length,i;for(i=0;i<n;i++){if(layers[i].get(chave)&&layers[i].get(chave)===valor){res.push(layers[i])}}return res};i3geoOL.getControlsBy=function(chave,valor){var res=[],controles=this.getControls(),n=controles.getLength(),i;for(i=0;i<n;i++){if(controles.item(i).get(chave)&&controles.item(i).get(chave)===valor){res.push(controles.item(i))}}return res};i3geoOL.getControlByType=function(type){var a=false;i3geoOL.getControls().forEach(function(c){if(c instanceof ol.control[type]==true){a=c}});return a},i3geoOL.getCenter=function(){var c=this.getView().getCenter();return{"lon":c[0],"lat":c[1]}};i3geoOL.getZoom=function(){var c=this.getView().getZoom();return c};i3geoOL.getExtent=function(){var e=this.getView().calculateExtent(this.getSize());return{toBBOX:function(){return e.join(",")},getGeometry:function(){return ol.geom.Polygon.fromExtent(e)}}};i3geoOL.getScale=function(){var resolution,units,dpi,mpu,scale;resolution=this.getView().getResolution();units=this.getView().getProjection().getUnits();dpi=25.4/0.28;mpu=ol.proj.METERS_PER_UNIT[units];scale=resolution*mpu*39.37*dpi;return scale};i3geoOL.zoomToScale=function(escala){var resolution,units,dpi,mpu;units=this.getView().getProjection().getUnits();dpi=25.4/0.28;mpu=ol.proj.METERS_PER_UNIT[units];resolution=escala/(mpu*39.37*dpi);this.getView().setResolution(resolution)};i3geoOL.zoomToExtent=function(mapext){this.getView().fit(mapext,this.getSize())}},inicia:function(w,h){var temp=window.location.href.split("?")[0];if($i("i3GEOcompartilhar")){i3GEO.social.compartilhar("i3GEOcompartilhar",temp,temp,"semtotal")}if($i("mst")){$i("mst").style.display="block"}i3GEO.util.defineValor("i3geo_escalanum","value",i3geoOL.getScale());if(i3GEO.Interface.googleLike===true&&i3geoOL.getView().getProjection().getCode()!="EPSG:3857"){alert("Alerta! Projecao diferente da esperada. Veja i3geo/guia_de_migracao.txt")}var montaMapa=function(){i3geoOL.updateSize();var temp=i3geoOL.getControlByType("ScaleLine");if(temp&&temp.element){temp.element.onclick=function(e){if(temp.getUnits()=="metric"){temp.setUnits("nautical")}else{temp.setUnits("metric")}temp.changed()}}i3GEO.Interface.registraEventos();i3GEO.Interface.zoom2ext(i3GEO.parametros.mapexten);$i("openlayers").getElementsByClassName("ol-overlaycontainer-stopevent")[0].style.position="unset";i3GEO.Interface.criaLayers()};if(i3GEO.arvoreDeCamadas.ATIVATEMA===""){i3GEO.arvoreDeCamadas.ATIVATEMA="i3GEO.Interface.ligaDesliga(this);i3GEO.eventos.executaEventos(i3GEO.eventos.ATUALIZAARVORECAMADAS);"}montaMapa();i3GEO.coordenadas.ativaEventos();if(i3GEO.parametros.kmlurl!==""){i3GEO.Interface.adicionaKml(true,i3GEO.parametros.kmlurl)}if(jQuery.isFunction(i3GEO.finalizaAPI)){i3GEO.finalizaAPI.call()}i3GEO.desenho.criaLayerGrafico();if($i(i3GEO.login.divnomelogin)&&i3GEO.util.pegaCookie("i3geousuarionome")){$i(i3GEO.login.divnomelogin).innerHTML=i3GEO.util.pegaCookie("i3geousuarionome")}},alteraParametroLayers:function(parametro,valor){var layer,layers=i3GEO.arvoreDeCamadas.CAMADAS,nlayers=layers.length,i,param,source,k,url="",n,j;for(i=0;i<nlayers;i+=1){layer=i3geoOL.getLayersByName(layers[i].name)[0];if(layer&&layer!=undefined&&layer.get("isBaseLayer")===false){url="";source=layer.getSource();param=source.getProperties().parametrosUrl;param[parametro]=valor;chaves=i3GEO.util.listaTodasChaves(param);n=chaves.length;for(j=0;j<n;j++){k=chaves[j];if(param[k]!=""&&k!="par"){url+="&"+k+"="+param[k]}}param.par=url;source.set("parametrosUrl",param)}}},zoom2ext:function(mapexten){if(!mapexten){mapexten=i3GEO.mapa.getExtent().string}var m,v;if(!mapexten){mapexten=i3GEO.parametros.extentTotal}mapexten=i3GEO.util.extGeo2OSM(mapexten);m=mapexten.split(" ");m=[m[0]*1,m[1]*1,m[2]*1,m[3]*1];v=i3geoOL.getView();v.fit(m,i3geoOL.getSize());i3GEO.eventos.cliquePerm.status=true},zoomli:function(){if(DetectaMobile("DetectMobileLong")){i3GEO.janela.tempoMsg($trad("x70"))}else{i3GEO.janela.tempoMsg($trad("zoomliShift"))}},getZoom:function(){return i3geoOL.getZoom()},parametrosMap:{target:"openlayers",layers:[],controls:[],interactions:[],loadTilesWhileAnimating:true,loadTilesWhileInteracting:true},parametrosView:{},TILES:true,LAYERSADICIONAIS:[],googleLike:false,GRADE:"",FULLSCREEN:"",fullscreen:function(){if(i3GEO.Interface.FULLSCREEN==""){i3GEO.Interface.FULLSCREEN=new ol.control.FullScreen();i3GEO.Interface.FULLSCREEN.setMap(i3geoOL);return}if(i3GEO.Interface.FULLSCREEN.getMap()==null){i3GEO.Interface.FULLSCREEN.setMap(i3geoOL)}else{i3GEO.Interface.FULLSCREEN.setMap(null)}},fundoDefault:function(){},sobeLayersGraficos:function(){},inverteModoTile:function(){if(i3GEO.Interface.TILES===true){i3GEO.Interface.TILES=false}else{i3GEO.Interface.TILES=true}i3GEO.Interface.removeTodosOsLayers();i3GEO.Interface.criaLayers()},removeTodosOsLayers:function(){var nlayers=i3GEO.arvoreDeCamadas.CAMADAS.length,layer,i,camada;for(i=nlayers-1;i>=0;i--){camada=i3GEO.arvoreDeCamadas.CAMADAS[i];layer=i3geoOL.getLayersByName(camada.name)[0];if(layer){i3geoOL.removeLayer(layer,false);i3GEO.pluginI3geo.removeCamada(camada.name)}}},loadStartLayer:function(name){var p=$i("i3GEOprogressoCamadas");var n100=i3geoOL.getLayers().getLength()-i3GEO.Interface.LAYERSADICIONAIS.length;if(p){i3GEO.Interface.STATUS.atualizando.push(" ");var x=i3GEO.Interface.STATUS.atualizando.length;p.style.width=((x*100)/n100)+"%"}},loadStopLayer:function(name){var p=$i("i3GEOprogressoCamadas");if(p){i3GEO.Interface.STATUS.atualizando.pop();if(i3GEO.Interface.STATUS.atualizando.length==0){p.style.width="0%"}}},ordenaLayers:function(){var ordem=i3GEO.arvoreDeCamadas.CAMADAS,nordem=ordem.length,layer,layers,i;layers=i3geoOL.getLayers();for(i=nordem-1;i>=0;i--){layer=i3geoOL.getLayersByName(ordem[i].name);layer=layer[0];if(layer){layers.remove(layer);layers.push(layer)}}},ativaFundo:function(nome,obj){var baseLayers,n,i,t,ck=true;baseLayers=i3geoOL.getLayersBase();n=baseLayers.length;if(obj){ck=obj.checked}if(obj&&obj.type!="checkbox"){for(i=0;i<n;i++){baseLayers[i].setVisible(false)}}for(i=0;i<n;i++){if(baseLayers[i].get("name")===nome){baseLayers[i].setVisible(ck)}}if(i3GEO.maparef.APIOBJ!=""){i3GEO.maparef.inicia()}},registraEventos:function(){i3GEOtouchesPosMapa="";var modoAtual="";var contadorPan=0;i3GEO.eventos.ativa(i3geoOL.getTargetElement());i3geoOL.on("pointerdrag",function(e){i3GEO.Interface.STATUS.pan=true;modoAtual="move"});i3geoOL.on("click",function(e){var lonlat=false,d,pos="";lonlat=e.coordinate;if(i3GEO.Interface.googleLike===true){lonlat=ol.proj.transform(lonlat,'EPSG:3857','EPSG:4326')}d=i3GEO.calculo.dd2dms(lonlat[0],lonlat[1]);objposicaocursor.ddx=lonlat[0];objposicaocursor.ddy=lonlat[1];objposicaocursor.dmsx=d[0];objposicaocursor.dmsy=d[1];objposicaocursor.imgx=e.pixel[0];objposicaocursor.imgy=e.pixel[1];objposicaocursor.telax=objposicaocursor.imgx+pos[0];objposicaocursor.telay=objposicaocursor.imgy+pos[1]});i3geoOL.on("dbclick",function(e){e.stopPropagation();e.preventDefault()});i3geoOL.on("moveend",function(e){if(e.changedTouches){return}var xy;contadorPan++;var timer=setTimeout(function(){contadorPan--;if(contadorPan==0){modoAtual="";i3GEO.navega.registraExt(i3GEO.mapa.getExtent().string);i3GEO.Interface.recalcPar();i3GEO.Interface.STATUS.pan=false;i3GEO.eventos.navegaMapa();i3GEO.util.escondePin();i3GEO.eventos.cliquePerm.status=false;i3GEO.Interface.STATUS.pan=false}},350)});i3geoOL.on("pointermove",function(e){if(modoAtual==="move"||e.dragging){return}var lonlat=false,d,pos="";lonlat=e.coordinate;if(i3GEO.Interface.googleLike===true){lonlat=ol.proj.transform(lonlat,'EPSG:3857','EPSG:4326')}d=i3GEO.calculo.dd2dms(lonlat[0],lonlat[1]);objposicaocursor.ddx=lonlat[0];objposicaocursor.ddy=lonlat[1];objposicaocursor.dmsx=d[0];objposicaocursor.dmsy=d[1];objposicaocursor.imgx=e.pixel[0];objposicaocursor.imgy=e.pixel[1];objposicaocursor.telax=objposicaocursor.imgx+pos[0];objposicaocursor.telay=objposicaocursor.imgy+pos[1];var viewResolution=(i3geoOL.getView().getResolution());if(i3GEO.Interface.INFOOVERLAY!=""){i3GEO.Interface.INFOOVERLAY.getElement().innerHTML="";i3GEO.Interface.INFOOVERLAY.getElement().style.visibility="hidden"}for(var k in i3GEO.Interface.LAYERSUTFGRID){if(!i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[k.replace("_utfgrid","")]){i3GEO.Interface.LAYERSUTFGRID[k]=null}else{if(i3GEO.Interface.LAYERSUTFGRID[k]&&i3GEO.Interface.LAYERSUTFGRID[k].getVisible()){i3GEO.Interface.LAYERSUTFGRID[k].getSource().forDataAtCoordinateAndResolution(e.coordinate,viewResolution,function(data){var ei=i3GEO.Interface.INFOOVERLAY.getElement();if(data){ei.style.visibility="visible";ei.innerHTML+="<span style='display:block;'>"+data.text+"<span>";i3GEO.Interface.INFOOVERLAY.setPosition(e.coordinate);i3GEO.eventos.mouseOverData()}else if(ei.innerHTML==""){ei.style.visibility="hidden";i3GEO.Interface.INFOOVERLAY.setPosition(undefined);i3GEO.eventos.mouseOutData()}})}}}var pixel=i3geoOL.getPixelFromCoordinate(e.coordinate);i3geoOL.forEachFeatureAtPixel(pixel,function(feature,layer){var c=feature.get("tooltiptext");if(c){var ei=i3GEO.Interface.INFOOVERLAY.getElement();ei.style.visibility="visible";ei.innerHTML+="<span style='display:block;'>"+c+"<span>";i3GEO.Interface.INFOOVERLAY.setPosition(e.coordinate);i3GEO.eventos.mouseOverData()}})});i3geoOL.on("touchend",function(e){e.preventDefault();calcCoord(e);if(i3GEO.eventos.cliquePerm.status===true&&i3GEO.eventos.CONTATOUCH<10){i3GEO.eventos.mouseupMapa(e)}i3GEO.eventos.cliquePerm.status=true;i3GEO.eventos.CONTATOUCH=0;i3GEO.Interface.STATUS.pan=false})},ativaBotoes:function(){},recalcPar:function(){i3GEOtouchesPosMapa="";var escalaAtual=i3geoOL.getScale();i3GEO.parametros.mapexten=i3GEO.mapa.getExtent().string;if(i3GEO.parametros.mapscale!==escalaAtual){i3GEO.arvoreDeCamadas.atualizaFarol(escalaAtual)}i3GEO.parametros.pixelsize=i3geoOL.getView().getResolution();i3GEO.navega.atualizaEscalaNumerica(parseInt(escalaAtual,10));i3GEO.parametros.mapscale=escalaAtual},pan2ponto:function(x,y,anim){if(i3GEO.Interface.googleLike===true){var metrica;if(x<180&&x>-180){metrica=ol.proj.transform([x,y],'EPSG:4326','EPSG:3857');x=metrica[0];y=metrica[1]}}i3geoOL.panTo(x,y,anim)},criaLayers:function(){var matrixIds,resolutions,size,z,projectionExtent,source,configura=i3GEO.configura,url,nlayers=i3GEO.arvoreDeCamadas.CAMADAS.length,layer,camada,urllayer,opcoes,i,temp;temp=$i("i3GEOprogressoDiv");if(temp){i3GEO.Interface.STATUS.atualizando=[];temp.style.display="none"}if(i3GEO.Interface.googleLike===true){url=configura.locaplic+"/classesphp/mapa_googlemaps.php?";projectionExtent=ol.proj.get('EPSG:3857').getExtent()}else{url=configura.locaplic+"/classesphp/mapa_openlayers.php?";projectionExtent=ol.proj.get('EPSG:4326').getExtent()}url+="g_sid="+i3GEO.configura.sid;url+="&TIPOIMAGEM="+configura.tipoimagem;size=ol.extent.getWidth(projectionExtent)/256;resolutions=new Array(40);matrixIds=new Array(40);for(z=0;z<40;++z){resolutions[z]=size/Math.pow(2,z);matrixIds[z]=z}$i("openlayers").style.backgroundColor="rgb("+i3GEO.parametros.cordefundo+")";i3geoOL.addLayers(i3GEO.Interface.LAYERSADICIONAIS);opcoes={gutter:0,isBaseLayer:false,opacity:1,visible:false,singleTile:!(i3GEO.Interface.TILES),tilePixelRatio:1,preload:0,projection:'EPSG:4326'};if(i3GEO.Interface.googleLike===true){opcoes.projection='EPSG:3857'}for(i=nlayers-1;i>=0;i--){layer="";camada=i3GEO.arvoreDeCamadas.CAMADAS[i];opcoes.singleTile=!(i3GEO.Interface.TILES);if(camada.transparency!=""){opcoes.opacity=camada.transparency/100}if(i3geoOL.getLayersByName(camada.name).length===0&&camada.name.toLowerCase()!="copyright"){if(camada.plugini3geo&&camada.plugini3geo!=""&&camada.plugini3geo.parametros!=undefined){i3GEO.pluginI3geo.inicia(camada);continue}else{try{temp=camada.transitioneffect==="nao"?opcoes.preload=0:opcoes.preload=Infinity;if(camada.connectiontype===7&&camada.wmsurl!==""&&camada.wmstile==1){urllayer=camada.wmsurl;if(camada.wmstile==10){source=new ol.source.WMTS({crossOrigin:"anonymous",url:urllayer,matrixSet:opcoes.projection,format:'image/png',projection:opcoes.projection,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(projectionExtent),resolutions:resolutions,matrixIds:matrixIds}),wrapX:true});source.set("tipoServico","WMTS");opcoes.singleTile=false}else{source=new ol.source.TileWMS({crossOrigin:"anonymous",url:urllayer,params:{'VERSION':'1.1.1','LAYERS':camada.wmsname},projection:opcoes.projection});source.set("tipoServico","ImageWMS");opcoes.singleTile=false}opcoes.title=camada.tema;opcoes.name=camada.name;opcoes.isBaseLayer=false;opcoes.visible=true}else{if(i3GEO.Interface.TILES==false){opcoes.singleTile=true}else{if(camada.tiles==="nao"||camada.escondido.toLowerCase()==="sim"||camada.connectiontype===10||(camada.type===0&&camada.cache==="nao")||camada.type===8){opcoes.singleTile=true}else{temp=camada.type===3?opcoes.singleTile=false:opcoes.singleTile=!(i3GEO.Interface.TILES)}if(camada.tiles==="nao"){opcoes.singleTile=true}if(camada.tiles==="sim"||camada.cache==="sim"||(camada.cortepixels&&camada.cortepixels>0)){opcoes.singleTile=false}}if(camada.cache){urllayer=url+"&cache="+camada.cache+"&cacheprefixo="+camada.cacheprefixo}else{urllayer=url+"&cache=nao"}urllayer+="&layer="+camada.name;if(camada.utfgrid=="sim"&&i3GEO.parametros.w>500){if(i3GEO.Interface.googleLike===false){source=new ol.source.TileUTFGrid({projection:opcoes.projection,wrapX:true,tileJSON:{"tilejson":"2.1.0","scheme":"xyz","grids":[urllayer+"&FORMAT=utfgrid&tms=&TileCol={x}&TileRow={y}&TileMatrix={z}"]}})}else{source=new ol.source.TileUTFGrid({projection:opcoes.projection,wrapX:true,tileJSON:{"tilejson":"2.1.0","scheme":"xyz","grids":[urllayer+"&FORMAT=utfgrid&tms=&X={x}&Y={y}&Z={z}"]}})}source.set("tipoServico","WMTS");var cloneopcoes={...opcoes};cloneopcoes.singleTile=false;cloneopcoes.title="";cloneopcoes.name=camada.name+"_utfgrid";cloneopcoes.source=source;cloneopcoes.isBaseLayer=false;cloneopcoes.visible=true;source.set("name",camada.name+"_utfgrid");var layerutfgrid=new ol.layer.Tile(cloneopcoes);camada.status==0?layerutfgrid.setVisible(false):layerutfgrid.setVisible(true);i3GEO.Interface.LAYERSUTFGRID[camada.name+"_utfgrid"]=layerutfgrid;if(i3GEO.Interface.INFOOVERLAY==""){$("#"+i3GEO.Interface.IDMAPA).after(i3GEO.template.utfGridInfo);i3GEO.Interface.INFOOVERLAY=new ol.Overlay({element:$i("i3GEOoverlayInfo"),offset:[3,-3],stopEvent:true,positioning:'bottom-left'});i3GEO.Interface.INFOOVERLAY.setProperties({origem:"infoOverlay"});i3geoOL.addOverlay(i3GEO.Interface.INFOOVERLAY)}i3geoOL.addLayer(layerutfgrid)}if(opcoes.singleTile===true){source=new ol.source.ImageWMS({url:urllayer,crossOrigin:"anonymous",params:{'LAYERS':camada.name,'VERSION':'1.1.0'},projection:opcoes.projection,ratio:1});source.set("tipoServico","ImageWMS")}else{if(i3GEO.Interface.googleLike===false){source=new ol.source.WMTS({url:urllayer+"&WIDTH=256&HEIGHT=256",crossOrigin:"anonymous",matrixSet:opcoes.projection,format:'image/png',projection:opcoes.projection,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(projectionExtent),resolutions:resolutions,matrixIds:matrixIds,tileSize:[256,256]}),wrapX:true});source.set("tipoServico","WMTS")}else{source=new ol.source.XYZ({crossOrigin:"anonymous",url:urllayer+"&X={x}&Y={y}&Z={z}",matrixSet:opcoes.projection,format:'image/png',projection:opcoes.projection,wrapX:true});source.set("tipoServico","WMTS")}}opcoes.title=camada.tema;opcoes.name=camada.name}if(camada.link_tema!=""&&i3GEO.Interface.RESTRICTATT==false){source.setAttributions([new ol.Attribution({html:'<li><a  href="'+camada.link_tema+'">'+camada.tema+'</a></li>'})])}source.set("name",camada.name);source.set("parametrosUrl",{par:""});opcoes.source=source;opcoes.isBaseLayer=false;opcoes.visible=true;if(i3GEO.Interface.LAYERPROGRESSBAR==true&&$i("i3GEOprogressoCamadas")){source.on('tileloadstart',function(event){i3GEO.Interface.loadStartLayer(source.get("name"))});source.on('tileloadend',function(event){i3GEO.Interface.loadStopLayer(source.get("name"))});source.on('tileloaderror',function(event){i3GEO.Interface.loadStopLayer(source.get("name"))})}if(opcoes.singleTile===true){layer=new ol.layer.Image(opcoes)}else{layer=new ol.layer.Tile(opcoes)}}catch(e){}}if(layer&&layer!=""){if(camada.escondido.toLowerCase()==="sim"){layer.preload=0}if(camada.type>1&&i3GEO.Interface.LAYEROPACITY!=""){layer.setOpacity(i3GEO.Interface.LAYEROPACITY)}i3geoOL.addLayer(layer);i3GEO.Interface.aposAdicNovaCamada(camada)}}else{layer=i3geoOL.getLayersByName(camada.name)[0]}if(layer&&layer!=""){temp=camada.status==0?layer.setVisible(false):layer.setVisible(true);i3GEO.timer.layers.add(camada)}}if(i3GEO.parametros.copyright!=""&&!$i("i3GEOcopyright")){temp=document.createElement("div");temp.id="i3GEOcopyright";temp.innerHTML="<p class=paragrafo >"+i3GEO.parametros.copyright+"</p>";if($i(i3GEO.Interface.IDMAPA)){$i(i3GEO.Interface.IDMAPA).appendChild(temp)}}else if(i3GEO.parametros.copyright!=""&&$i("i3GEOcopyright")){$i("i3GEOcopyright").innerHTML=i3GEO.parametros.copyright}}};