if(typeof(i3GEO)=='undefined'){i3GEO=[]}i3GEO.Interface={BARRABOTOESTOP:12,BARRABOTOESLEFT:3,ATUAL:"padrao",IDCORPO:"corpoMapa",ATIVAMENUCONTEXTO:false,IDMAPA:"",redesenha:function(){eval("i3GEO.Interface."+i3GEO.Interface.ATUAL+".redesenha()")},cria:function(w,h){eval("i3GEO.Interface."+i3GEO.Interface.ATUAL+".cria("+w+","+h+")")},inicia:function(w,h){eval("i3GEO.Interface."+i3GEO.Interface.ATUAL+".inicia()")},ativaBotoes:function(){eval("i3GEO.Interface."+i3GEO.Interface.ATUAL+".ativaBotoes()")},padrao:{TRANSICAO:false,redesenha:function(){$i("img").onload=function(){var imagem=$i("img");imagem.onload="";i3GEO.gadgets.quadros.grava("imagem",i3GEO.parametros.mapimagem);i3GEO.gadgets.quadros.grava("extensao",i3GEO.parametros.mapexten);var temp=function(retorno){eval(retorno.data);i3GEO.gadgets.quadros.grava("legenda",legimagem)};i3GEO.mapa.legendaIMAGEM.obtem(temp);if(i3GEO.Interface.padrao.TRANSICAO==true){if($i("imgtemp")){i3GEO.util.desaparece("imgtemp",50,5,true)}i3GEO.util.aparece("img",50,5)}else{if($i("imgtemp")){i3GEO.util.desaparece("imgtemp",15,5,true)}i3GEO.util.aparece("img",5,5)}i3GEO.janela.fechaAguarde("ajaxCorpoMapa")};if(!$i("imgtemp")){var ndiv=document.createElement("div");ndiv.id="imgtemp";ndiv.style.position="absolute";ndiv.style.border="1px solid blue";document.getElementById("corpoMapa").appendChild(ndiv)}if(g_tipoacao=="pan"&&i3GEO.barraDeBotoes.BOTAOCLICADO=="pan"){$i("imgtemp").style.left=parseInt($i("img").style.left);$i("imgtemp").style.top=parseInt($i("img").style.top);$i("imgtemp").style.width=i3GEO.parametros.w;$i("imgtemp").style.height=i3GEO.parametros.h}$i("imgtemp").style.backgroundImage='url("'+$i("img").src+'")';$i("imgtemp").style.display="block";var i=$i("img");i.style.display="none";i.style.left=0;i.style.top=0;i.src=i3GEO.parametros.mapimagem},cria:function(){var ins="<table>";ins+="<tr><td class=verdeclaro ></td><td class=verdeclaro ><input style='display:none;position:relative' type=image src='' id='imgN' /></td><td class=verdeclaro ></td></tr>";ins+="<tr><td class=verdeclaro ><input style='display:none;position:relative' type=image src='' id='imgL' /></td><td class=verdeclaro ><input style='position:relative;top:0px;left:0px'' type=image src='' id='img' /></td><td class=verdeclaro ><input style='display:none;position:relative' type=image src='' id='imgO' /></td></tr>";ins+="<tr><td class=verdeclaro ></td><td class=verdeclaro ><input style='display:none;position:relative' type=image src='' id='imgS' /></td><td class=verdeclaro ></td></tr>";ins+="</table>";$i(i3GEO.Interface.IDCORPO).innerHTML=ins;i3GEO.Interface.IDMAPA="img"},ativaMenuContexto:function(){var temp=$i("contexto_"+i3GEO.Interface.IDMAPA);if(temp){temp.parentNode.removeChild(temp)}function executar(a,b,c){eval(c)};var oFieldContextMenuItemData=[{text:"&nbsp;<span class='container-close'></span>"},{text:"<img class='rosamais' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-4px;'> Aproxima</span>",onclick:{fn:executar,obj:"i3GEO.navega.zoomin(i3GEO.configura.locaplic,i3GEO.configura.sid);"}},{text:"<img class='rosamenos' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-4px;'> Afasta</span>",onclick:{fn:executar,obj:"i3GEO.navega.zoomout(i3GEO.configura.locaplic,i3GEO.configura.sid);"}},{text:"<img class='rosanorte' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-7px;'> Norte</span>",onclick:{fn:executar,obj:"i3GEO.navega.panFixo('','','norte','','','');"}},{text:"<img class='rosasul' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-7px;'> Sul</span>",onclick:{fn:executar,obj:"i3GEO.navega.panFixo('','','sul','','','');"}},{text:"<img class='rosaleste' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-7px;'> Leste</span>",onclick:{fn:executar,obj:"i3GEO.navega.panFixo('','','leste','','','');"}},{text:"<img class='rosaoeste' style='height:18px;' src='"+$im("branco.gif")+"'><span style='position:relative;top:-7px;'> Oeste</span>",onclick:{fn:executar,obj:"i3GEO.navega.panFixo('','','oeste','','','');"}},{text:"Captura",onclick:{fn:executar,obj:"i3GEO.gadgets.quadros.listaImagens();"}}];var oFieldContextMenu=new YAHOO.widget.ContextMenu("contexto_"+i3GEO.Interface.IDMAPA,{trigger:i3GEO.Interface.IDMAPA,itemdata:oFieldContextMenuItemData,lazyload:true});var onFieldMenuRender=function(){eval("var id = 'contexto_"+i3GEO.Interface.IDMAPA+"'");$i(id).style.zIndex=50000};oFieldContextMenu.subscribe("render",onFieldMenuRender)},inicia:function(){if($i("contemImg")){var elemento="contemImg"}else{var elemento="img"}i3GEO.mapa.ajustaPosicao(elemento);var i=$i("img");i.style.width=i3GEO.parametros.w+"px";i.style.height=i3GEO.parametros.h+"px";var estilo=$i(i3GEO.Interface.IDCORPO).style;estilo.width=i3GEO.parametros.w+"px";estilo.height=i3GEO.parametros.h+"px";estilo.clip='rect('+0+" "+(i3GEO.parametros.w)+" "+(i3GEO.parametros.h)+" "+0+')';objmapaparado="nao";i3GEO.gadgets.mostraMenuSuspenso();i3GEO.eventos.ativa(i);i3GEO.gadgets.mostraCoordenadasGEO();i3GEO.gadgets.mostraCoordenadasUTM();i3GEO.gadgets.mostraEscalaNumerica();i3GEO.gadgets.mostraEscalaGrafica();i3GEO.gadgets.visual.inicia();i3GEO.ajuda.ativaLetreiro(i3GEO.parametros.mensagens);i3GEO.Interface.padrao.ativaBotoes();i3GEO.idioma.mostraSeletor();if(i3GEO.configura.mapaRefDisplay!="none"){if(i3GEO.util.pegaCookie("i3GEO.configura.mapaRefDisplay")){i3GEO.configura.mapaRefDisplay=i3GEO.util.pegaCookie("i3GEO.configura.mapaRefDisplay")}if(i3GEO.configura.mapaRefDisplay=="block"){i3GEO.maparef.inicia()}}},ativaBotoes:function(){var imagemxy=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));if($i("barraDeBotoes1")){var x1=imagemxy[0]+i3GEO.Interface.BARRABOTOESLEFT;var y1=imagemxy[1]+i3GEO.Interface.BARRABOTOESTOP}if($i("barraDeBotoes2")){var x2=imagemxy[0]+i3GEO.Interface.BARRABOTOESLEFT;var y2=imagemxy[1]+i3GEO.Interface.BARRABOTOESTOP}if($i("barraDeBotoes1")&&$i("barraDeBotoes2")){var x1=imagemxy[0]+i3GEO.Interface.BARRABOTOESLEFT+40}if($i("barraDeBotoes1"))i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes1","i3geo_barra1",true,x1,y1);if($i("barraDeBotoes2"))i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2","i3geo_barra2",false,x2,y2);i3GEO.barraDeBotoes.ativaBotoes();if(document.getElementById("botao3d")){if(i3GEO.configura.map3d==""){document.getElementById("botao3d").style.display="none"}}if(i3GEO.Interface.ATIVAMENUCONTEXTO)i3GEO.Interface.padrao.ativaMenuContexto();if(i3GEO.configura.visual!="default")i3GEO.gadgets.visual.troca(i3GEO.configura.visual)}},flamingo:{redesenha:function(){var w=parseInt($i("flamingo").style.width);if(w==i3GEO.parametros.w){$i("flamingo").style.height=parseInt($i("flamingo").style.height)+1}else{$i("flamingo").style.height=parseInt($i("flamingo").style.height)-1}i3GEO.janela.fechaAguarde()},cria:function(w,h){var i=$i(i3GEO.Interface.IDCORPO);if(i){var f=$i("flamingo");if(!f){var ins='<div id=flamingo style="width:0px;height:0px;text-align:left;background-image:url(/"'+i3GEO.configura.locaplic+'/imagens/i3geo1bw.jpg/")"></div>';i.innerHTML=ins}var f=$i("flamingo");f.style.width=w;f.style.height=h;i3GEO.Interface.IDMAPA="flamingo"}},inicia:function(){var monta=function(retorno){$i("flamingo").style.height=i3GEO.parametros.h+45;childPopups=[];childPopupNr=0;var so=new SWFObject(i3GEO.configura.locaplic+"/pacotes/flamingo/flamingo/flamingo.swf?config="+retorno.data,"flamingoi","100%","100%","8","#eaeaea");so.addParam("wmode","transparent");so.write("flamingo")};i3GEO.php.flamingo(monta);i3GEO.eventos.ativa($i("flamingo"));i3GEO.maparef.atualiza();if(i3GEO.configura.mapaRefDisplay!="none"){if(i3GEO.util.pegaCookie("i3GEO.configura.mapaRefDisplay")){i3GEO.configura.mapaRefDisplay=i3GEO.util.pegaCookie("i3GEO.configura.mapaRefDisplay")}if(i3GEO.configura.mapaRefDisplay=="block"){i3GEO.maparef.inicia()}}},ativaBotoes:function(){}},openlayers:{redesenha:function(){if($i("openlayers_OpenLayers_Container")){var no=$i("openlayers_OpenLayers_Container");var divs1=no.getElementsByTagName("div");var n1=divs1.length;for(a=0;a<n1;a++){var divs2=divs1[a].getElementsByTagName("div");var n2=divs2.length;for(b=0;b<n2;b++){var imgs=divs2[b].getElementsByTagName("img");var nimg=imgs.length;for(c=0;c<nimg;c++){imgs[c].src+="&x"}}}i3GEO.Interface.openlayers.recalcPar()}i3GEO.janela.fechaAguarde()},cria:function(w,h){var i=$i(i3GEO.Interface.IDCORPO);if(i){var f=$i("openlayers");if(!f){var ins='<div id=openlayers style="width:0px;height:0px;text-align:left;background-image:url('+i3GEO.configura.locaplic+'/imagens/i3geo1bw.jpg)"></div>';i.innerHTML=ins}var f=$i("openlayers");f.style.width=w;f.style.height=h}i3GEO.Interface.IDMAPA="openlayers"},inicia:function(){var montaMapa=function(){var url=window.location.protocol+"//"+window.location.host+i3GEO.parametros.cgi+"?";url+="map="+i3GEO.parametros.mapfile+"&mode=map&SRS=epsg:4326&";i3geoOL=new OpenLayers.Map('openlayers',{controls:[]});i3geoOLlayer=new OpenLayers.Layer.MapServer("Temas I3Geo",url,{layers:'estadosl'},{'buffer':1},{isBaseLayer:true,opacity:1});i3geoOLlayer.setVisibility(true);i3geoOL.addLayer(i3geoOLlayer);i3geoOL.events.register("moveend",i3geoOL,function(e){i3GEO.Interface.openlayers.recalcPar();g_operacao="";g_tipoacao=""});i3geoOL.events.register("mousemove",i3geoOL,function(e){if(navm){var p=new OpenLayers.Pixel(e.x,e.y)}else{var p=e.xy}var lonlat=i3geoOL.getLonLatFromPixel(p);var d=i3GEO.calculo.dd2dms(lonlat.lon,lonlat.lat);try{objposicaocursor.ddx=lonlat.lon;objposicaocursor.ddy=lonlat.lat;objposicaocursor.telax=p.x;objposicaocursor.telay=p.y;objposicaocursor.dmsx=d[0];objposicaocursor.dmsy=d[1];var dc=$i("i3geo");if($i("openlayers_OpenLayers_Container")){var dc=$i("openlayers_OpenLayers_Container")}while(dc.offsetParent){dc=dc.offsetParent;objposicaocursor.telax=objposicaocursor.telax+dc.offsetLeft;objposicaocursor.telay=objposicaocursor.telay+dc.offsetTop}}catch(e){}});var pz=new OpenLayers.Control.PanZoomBar({numZoomLevels:5});i3geoOL.addControl(pz);pz.div.style.zIndex=5000;i3geoOL.addControl(new OpenLayers.Control.LayerSwitcher());i3GEO.Interface.openlayers.zoom2ext(i3GEO.parametros.mapexten);i3geoOL.addControl(new OpenLayers.Control.ScaleLine());i3geoOL.addControl(new OpenLayers.Control.OverviewMap());i3geoOL.addControl(new OpenLayers.Control.KeyboardDefaults());i3GEO.eventos.ativa($i("openlayers"));var pos=i3GEO.util.pegaPosicaoObjeto($i("openlayers"));if($i("aguarde")){$top("aguarde",pos[1]);$left("aguarde",pos[0])}OLpan=new OpenLayers.Control.Navigation();OLzoom=new OpenLayers.Control.ZoomBox();OLpanel=new OpenLayers.Control.Panel();OLpanel.addControls([OLpan,OLzoom]);i3geoOL.addControl(OLpanel);i3GEO.Interface.openlayers.ativaBotoes()};i3GEO.php.openlayers(montaMapa);i3GEO.gadgets.mostraMenuSuspenso();i3GEO.ajuda.ativaLetreiro(i3GEO.parametros.mensagens);i3GEO.idioma.mostraSeletor();i3GEO.gadgets.mostraCoordenadasGEO();i3GEO.gadgets.mostraCoordenadasUTM();i3GEO.gadgets.mostraEscalaNumerica()},ativaBotoes:function(){var imagemxy=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));if($i("barraDeBotoes2")){var x2=imagemxy[0]+i3GEO.Interface.BARRABOTOESLEFT;var y2=imagemxy[1]+i3GEO.Interface.BARRABOTOESTOP}if($i("barraDeBotoes2"))i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2","i3geo_barra2",false,x2,y2);i3GEO.barraDeBotoes.ativaBotoes()},recalcPar:function(){g_operacao="";g_tipoacao="";var bounds=i3geoOL.getExtent().toBBOX().split(",");i3GEO.parametros.mapexten=bounds[0]+" "+bounds[1]+" "+bounds[2]+" "+bounds[3];i3GEO.parametros.mapscale=i3geoOL.getScale();atualizaEscalaNumerica(parseInt(i3GEO.parametros.mapscale))},zoom2ext:function(ext){var m=ext.split(" ");var b=new OpenLayers.Bounds(m[0],m[1],m[2],m[3]);i3geoOL.zoomToExtent(b)}},googlemaps:{OPACIDADE:0.8,TIPOMAPA:"G_PHYSICAL_MAP",ZOOMSCALE:[591657550,295828775,147914387,73957193,36978596,18489298,9244649,4622324,2311162,1155581,577790,288895,144447,72223,36111,18055,9027,4513,2256,1128],redesenha:function(){try{if(i3GeoMap!=""){posfixo=posfixo+"&";i3GeoMap.removeOverlay(i3GEOTileO);var i3GEOTile=new GTileLayer(null,0,18,{tileUrlTemplate:i3GEO.Interface.googlemaps.criaTile()+posfixo,isPng:true,opacity:i3GEO.Interface.googlemaps.OPACIDADE});i3GEOTileO=new GTileLayerOverlay(i3GEOTile);i3GeoMap.addOverlay(i3GEOTileO)}}catch(e){}},cria:function(w,h){posfixo="&";var i=$i(i3GEO.Interface.IDCORPO);if(i){var f=$i("googlemapsdiv");if(!f){var ins='<div id=googlemapsdiv style="width:0px;height:0px;text-align:left;background-image:url('+i3GEO.configura.locaplic+'/imagens/i3geo1bw.jpg)"></div>';i.innerHTML=ins}var f=$i("googlemapsdiv");f.style.width=w;f.style.height=h}i3GeoMap="";i3GEO.Interface.IDMAPA="googlemapsdiv"},inicia:function(){var pol=i3GEO.parametros.mapexten;var ret=pol.split(" ");var pt1=(((ret[0]*-1)-(ret[2]*-1))/2)+ret[0]*1;var pt2=(((ret[1]-ret[3])/2)*-1)+ret[1]*1;i3GeoMap=new GMap2($i(i3GEO.Interface.IDMAPA));i3GeoMap.addMapType(G_PHYSICAL_MAP);i3GeoMap.setMapType(eval(i3GEO.Interface.googlemaps.TIPOMAPA));i3GeoMap.addControl(new GLargeMapControl());i3GeoMap.addControl(new GMapTypeControl());var bottomLeft=new GControlPosition(G_ANCHOR_BOTTOM_LEFT,new GSize(0,40));i3GeoMap.addControl(new GScaleControl(),bottomLeft);var bottomRight=new GControlPosition(G_ANCHOR_BOTTOM_RIGHT);i3GeoMap.addControl(new GOverviewMapControl(),bottomRight);var sw=new GLatLng(ret[1],ret[0]);var ne=new GLatLng(ret[3],ret[2]);var z=i3GeoMap.getBoundsZoomLevel(new GLatLngBounds(sw,ne));i3GeoMap.setCenter(new GLatLng(pt2,pt1),z);var i3GEOTile=new GTileLayer(null,0,18,{tileUrlTemplate:i3GEO.Interface.googlemaps.criaTile(),isPng:true,opacity:i3GEO.Interface.googlemaps.OPACIDADE});i3GEOTileO=new GTileLayerOverlay(i3GEOTile);i3GeoMap.addOverlay(i3GEOTileO);var myMapType=new GMapType([i3GEOTile],new GMercatorProjection(18),'i3Geo');i3GeoMap.addMapType(myMapType);GEvent.addListener(i3GeoMap,"dragstart",function(){g_operacao="";g_tipoacao=""});GEvent.addListener(i3GeoMap,"dragend",function(){i3GEO.Interface.googlemaps.recalcPar()});GEvent.addListener(i3GeoMap,"zoomend",function(){i3GEO.Interface.googlemaps.recalcPar();g_operacao="";g_tipoacao=""});i3GEO.Interface.googlemaps.ativaBotoes();i3GEO.eventos.ativa($i(i3GEO.Interface.IDMAPA));i3GEO.gadgets.mostraCoordenadasGEO();i3GEO.gadgets.mostraMenuSuspenso();i3GEO.gadgets.mostraInserirKml();var pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA));GEvent.addListener(i3GeoMap,"mousemove",function(ponto){var teladms=i3GEO.calculo.dd2dms(ponto.lng(),ponto.lat());var tela=i3GeoMap.fromLatLngToContainerPixel(ponto);objposicaocursor={ddx:ponto.lng(),ddy:ponto.lat(),dmsx:teladms[0],dmsy:teladms[1],imgx:tela.x,imgy:tela.y,telax:tela.x+pos[0],telay:tela.y+pos[1]}});g_operacao="";g_tipoacao="";if(i3GEO.parametros.kmlurl!=""){i3GEO.mapa.insereKml(true,i3GEO.parametros.kmlurl)}i3GEO.parametros.mapscale=i3GEO.Interface.googlemaps.calcescala();i3GEO.Interface.googlemaps.adicionaListaKml()},bbox:function(){var bd=i3GeoMap.getBounds();var so=bd.getSouthWest();var ne=bd.getNorthEast();var bbox=so.lng()+" "+so.lat()+" "+ne.lng()+" "+ne.lat();return(bbox)},criaWMS:function(){var cgi=i3GEO.configura.locaplic+"/classesphp/parse_cgi.php?g_sid="+i3GEO.configura.sid;var parametros="&map_size="+parseInt($i(i3GEO.Interface.IDMAPA).style.width);parametros+=","+parseInt($i(i3GEO.Interface.IDMAPA).style.height);parametros+="&mapext="+i3GEO.Interface.googlemaps.bbox();parametros+="&map_imagecolor=-1 -1 -1&map_transparent=on";return(cgi+parametros)},criaTile:function(){var cgi=i3GEO.util.protocolo()+"://"+window.location.host+i3GEO.parametros.cgi+"?";var parametros="map="+i3GEO.parametros.mapfile;parametros+='&mode=tile';parametros+='&tilemode=gmap';parametros+='&tile={X}+{Y}+{Z}';return(cgi+parametros)},ativaBotoes:function(){var imagemxy=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));if($i("barraDeBotoes2")){var x2=imagemxy[0]+i3GEO.Interface.BARRABOTOESLEFT+70;var y2=imagemxy[1]+i3GEO.Interface.BARRABOTOESTOP}if($i("barraDeBotoes2"))i3GEO.barraDeBotoes.inicializaBarra("barraDeBotoes2","i3geo_barra2",false,x2,y2);i3GEO.barraDeBotoes.ativaBotoes()},mudaOpacidade:function(valor){i3GEO.Interface.googlemaps.OPACIDADE=valor/200;i3GEO.Interface.googlemaps.redesenha()},recalcPar:function(){g_operacao="";g_tipoacao="";var bounds=i3GeoMap.getBounds();var sw=bounds.getSouthWest();var ne=bounds.getNorthEast();i3GEO.parametros.mapexten=sw.lng()+" "+sw.lat()+" "+ne.lng()+" "+ne.lat();i3GEO.parametros.mapscale=i3GEO.Interface.googlemaps.calcescala()},calcescala:function(){var zoom=i3GeoMap.getZoom();return(i3GEO.Interface.googlemaps.ZOOMSCALE[zoom])},escala2nzoom:function(escala){var n=i3GEO.Interface.googlemaps.ZOOMSCALE.length;for(var i=0;i<n;i++){if(i3GEO.Interface.googlemaps.ZOOMSCALE[i]<escala){return(i)}}},zoom2extent:function(mapexten){var pol=mapexten;var ret=pol.split(" ");var pt1=(((ret[0]*-1)-(ret[2]*-1))/2)+ret[0]*1;var pt2=(((ret[1]-ret[3])/2)*-1)+ret[1]*1;var sw=new GLatLng(ret[1],ret[0]);var ne=new GLatLng(ret[3],ret[2]);var z=i3GeoMap.getBoundsZoomLevel(new GLatLngBounds(sw,ne));i3GeoMap.setCenter(new GLatLng(pt2,pt1),z)},adicionaKml:function(pan,url,titulo,ativo){if(!$i("arvoreCamadasKml")){i3GEO.Interface.googlemaps.criaArvoreKML()}var ngeoxml="geoXml_"+i3GEO.mapa.GEOXML.length;if(arguments.length==1){var i=$i("i3geo_urlkml");if(i){var url=i.value}else{var url=""}var titulo=ngeoxml;var ativo=true}if(arguments.length==2){var titulo=ngeoxml;var ativo=true}if(arguments.length==2){var ativo=true}if(url==""){return}i3GEO.mapa.GEOXML.push(ngeoxml);var zoom=function(){if(pan){eval("var ll = "+ngeoxml+".getDefaultCenter()");eval(ngeoxml+".gotoDefaultViewport(i3GeoMap)")}};eval(ngeoxml+" = new GGeoXml(url,zoom)");if(ativo==true){eval("i3GeoMap.addOverlay("+ngeoxml+")")}i3GEO.Interface.googlemaps.adicionaNoArvoreGoogle(url,titulo,ativo,ngeoxml)},adicionaListaKml:function(){var monta=function(retorno){var raiz=retorno.data.canais;var nraiz=raiz.length;for(i=0;i<nraiz;i++){i3GEO.Interface.googlemaps.adicionaKml(false,raiz[i].link,raiz[i].title,false)}};i3GEO.php.listaRSSwsARRAY(monta,"KML")},adicionaNoArvoreGoogle:function(url,nomeOverlay,ativo,id){if(!$i("arvoreCamadasKml")){i3GEO.Interface.googlemaps.criaArvoreKML()}if(arguments.length==2){var ativo=true;var id=nomeOverlay}if(arguments.length==2){var id=nomeOverlay}var root=i3GEO.Interface.googlemaps.ARVORE.getRoot();var node=i3GEO.Interface.googlemaps.ARVORE.getNodeByProperty("idkml","raiz");html="<input onclick='i3GEO.Interface.googlemaps.ativaDesativaCamadaKml(this)' class=inputsb style='cursor:pointer;' type='checkbox' value='"+id+"'";if(ativo==true){html+=" checked "}html+="/>";html+="&nbsp;<span style='cursor:move'>"+nomeOverlay+"</span>";var d={html:html};var nodekml=new YAHOO.widget.HTMLNode(d,node,true,true);nodekml.enableHighlight=false;nodekml.isleaf=true;i3GEO.Interface.googlemaps.ARVORE.draw();i3GEO.Interface.googlemaps.ARVORE.collapseAll();node.expand()},criaArvoreKML:function(){var arvore=$i("arvoreCamadasKml");if(!arvore){var d=document.createElement("div");d.id="arvoreCamadasKml";d.style.top="40px";var a=$i(i3GEO.arvoreDeCamadas.IDHTML);if(a){a.parentNode.appendChild(d)}else{alert("Arvore de camadas nao encontrada. Nao e possivel adicionar a arvore de KML");return}}i3GEO.Interface.googlemaps.ARVORE=new YAHOO.widget.TreeView("arvoreCamadasKml");var root=i3GEO.Interface.googlemaps.ARVORE.getRoot();var titulo="<table><tr><td><b>Google Maps</b></td></tr></table>";var d={html:titulo,idkml:"raiz"};var node=new YAHOO.widget.HTMLNode(d,root,true,true);node.enableHighlight=false},ativaDesativaCamadaKml:function(obj){if(!obj.checked){eval("i3GeoMap.removeOverlay("+obj.value+")")}else eval("i3GeoMap.addOverlay("+obj.value+")")}},googleearth:{redesenha:function(){try{linki3geo.setHref(linki3geo.getHref()+"&")}catch(e){}},cria:function(w,h){var i=$i(i3GEO.Interface.IDCORPO);if(i){var i3GeoMap3d=document.createElement("div");i3GeoMap3d.style.width=w;i3GeoMap3d.style.height=h+45;i.style.height=h+45;i3GeoMap3d.id="i3GeoMap3d";i.appendChild(i3GeoMap3d)}i3GEO.Interface.IDMAPA="i3GeoMap3d";google.load("earth","1");var i3GeoMap=null},inicia:function(){google.earth.createInstance("i3GeoMap3d",i3GEO.Interface.googleearth.iniciaGE,i3GEO.Interface.googleearth.falha)},iniciaGE:function(object){i3GeoMap=object;i3GeoMap.getWindow().setVisibility(true);kmlUrl=i3GEO.configura.locaplic+"/pacotes/kmlmapserver/kmlservice.php?map="+i3GEO.parametros.mapfile+"&typename=estadosl&request=kml&mode=map&";linki3geo=i3GeoMap.createLink('');linki3geo.setHref(kmlUrl);nl=i3GeoMap.createNetworkLink('');nl.setLink(linki3geo);nl.setFlyToView(true);i3GeoMap.getFeatures().appendChild(nl);var options=i3GeoMap.getOptions();options.setMouseNavigationEnabled(true);options.setStatusBarVisibility(true);options.setOverviewMapVisibility(true);options.setScaleLegendVisibility(true);i3GeoMap.getNavigationControl().setVisibility(i3GeoMap.VISIBILITY_SHOW)},falha:function(){alert("Falhou. Vc precisa do plugin instalado")},ativaBotoes:function(){}}};i3GEO.interface=i3GEO.Interface;