if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.desenho={layergrafico:null,estilos:{"normal":{fillcolor:'#ffffff',linecolor:'#000000',linewidth:'2',circcolor:'#ffffff',textcolor:'#787A78'},"palido":{fillcolor:'#B5A8A8',linecolor:'#BAA4AE',linewidth:'1',circcolor:'#E0D7DC',textcolor:'#787A78'},"vermelho":{fillcolor:'#E8ACAC',linecolor:'#F50707',linewidth:'1',circcolor:'#F09EA6',textcolor:'#787A78'},"verde":{fillcolor:'#3CCC2F',linecolor:'#0C6642',linewidth:'1',circcolor:'#C7D9D2',textcolor:'#787A78'}},estilosOld:{"normal":{fillcolor:'red',linecolor:'black',linewidth:'1',circcolor:'white',textcolor:'gray'},"palido":{fillcolor:'gray',linecolor:'gray',linewidth:'1',circcolor:'gray',textcolor:'gray'},"vermelho":{fillcolor:'gray',linecolor:'red',linewidth:'1',circcolor:'pink',textcolor:'brown'},"verde":{fillcolor:'gray',linecolor:'green',linewidth:'1',circcolor:'DarkGreen',textcolor:'GreenYellow'}},estiloPadrao:"normal",caixaEstilos:function(){var lista=i3GEO.util.listaChaves(i3GEO.desenho.estilos),n=lista.length,i,caixa,sel;caixa="<select onchange='i3GEO.desenho.definePadrao(this.value)'>";for(i=0;i<n;i+=1){sel="";if(lista[i]===i3GEO.desenho.estiloPadrao){sel="select"}caixa+="<option value='"+lista[i]+"'"+sel+">"+lista[i]+"</option>"}caixa+="</select>";return caixa},addPin:function(x,y,w,h,imagem,namespace,centro){if(i3GEO.Interface.ATUAL!="googleearth"){return i3GEO.desenho[i3GEO.Interface.ATUAL].addPin(x,y,w,h,imagem,namespace,centro)}},removePins:function(namespace){if(i3GEO.Interface.ATUAL!="googleearth"){i3GEO.desenho[i3GEO.Interface.ATUAL].removePins(namespace)}},movePin:function(pin,x,y){if(i3GEO.Interface.ATUAL!="googleearth"){i3GEO.desenho[i3GEO.Interface.ATUAL].movePin(pin,x,y)}},openlayers:{inicia:function(){if(!i3GEO.desenho.layergrafico){i3GEO.desenho.openlayers.criaLayerGrafico()}},addPin:function(x,y,w,h,imagem,namespace,centro,funcaoclick){if(!imagem||imagem===""){imagem=i3GEO.configura.locaplic+"/imagens/google/confluence.png"}if(!namespace){namespace="pin"}if(!w||w===""){w=27}if(!h||h===""){h=27}if(!funcaoclick){funcaoclick=function(){i3GEO.desenho.openlayers.removePins(namespace)}}if(!centro){centro=false}i3GEO.desenho.openlayers.inicia();var point,f,ox,oy;if(centro===true){ox=parseInt(w/2,10)*-1;oy=parseInt(h/2,10)*-1}else{ox=parseInt(w/2,10)*-1;oy=h*-1}point=new OpenLayers.Geometry.Point(x,y);point=i3GEO.util.extGeo2OSM(point);f=new OpenLayers.Feature.Vector(point,{origem:namespace,click:funcaoclick},{graphicWidth:w,graphicHeight:h,graphicXOffset:ox,graphicYOffset:oy,externalGraphic:imagem});i3GEO.desenho.layergrafico.addFeatures([f]);return f},removePins:function(namespace){if(!namespace){namespace="pin"}if(i3GEO.desenho.layergrafico){var f=i3GEO.desenho.layergrafico.getFeaturesByAttribute("origem",namespace);if(f&&f.length>0){i3GEO.desenho.layergrafico.destroyFeatures(f)}}},movePin:function(pin,x,y){var point=new OpenLayers.LonLat(x,y);point=i3GEO.util.extGeo2OSM(point);pin.move(point)},criaLayerGrafico:function(){if(!i3GEO.desenho.layergrafico){var sketchSymbolizers={"Point":{fillColor:"rgb(${fillColor})",fillOpacity:"${opacidade}",strokeWidth:"${strokeWidth}",strokeOpacity:"${opacidade}",strokeColor:"rgb(${strokeColor})",label:"${texto}",pointRadius:"${pointRadius}",graphicName:"${graphicName}",fontSize:"${fontSize}",fontColor:"rgb(${fontColor})",fontFamily:"Arial",fontWeight:"normal",labelAlign:"lb",labelXOffset:"3",labelYOffset:"3",externalGraphic:"${externalGraphic}"},"Line":{strokeWidth:"${strokeWidth}",strokeOpacity:"${opacidade}",strokeColor:"rgb(${strokeColor})"},"Polygon":{strokeWidth:"${strokeWidth}",strokeOpacity:"${opacidade}",strokeColor:"rgb(${strokeColor})",fillColor:"rgb(${fillColor})",fillOpacity:"${opacidade}",zIndex:5000}},style=new OpenLayers.Style(),styleMap1=new OpenLayers.StyleMap({"default":style,"vertex":{strokeOpacity:1,strokeWidth:1,fillColor:"white",fillOpacity:0.45,pointRadius:4}},{extendDefault:false});style.addRules([new OpenLayers.Rule({symbolizer:sketchSymbolizers})]);i3GEO.desenho.layergrafico=new OpenLayers.Layer.Vector("Graf",{styleMap:styleMap1,displayInLayerSwitcher:true,visibility:true,vertexRenderIntent:"vertex",eventListeners:{featureclick:function(e){if(e.feature.data.click){e.feature.data.click.call()}return false}}});if(i3GEO.editorOL&&i3GEO.editorOL.mapa){i3GEO.editorOL.mapa.addLayers([i3GEO.desenho.layergrafico])}else{i3geoOL.addLayers([i3GEO.desenho.layergrafico])}}}},googlemaps:{shapes:[],inicia:function(){},addPin:function(x,y,w,h,imagem,namespace,centro,funcaoclick){if(!imagem||imagem===""){imagem=i3GEO.configura.locaplic+"/imagens/google/confluence.png"}if(!namespace){namespace="pin"}if(!w||w===""){w=27}if(!h||h===""){h=27}if(!funcaoclick){funcaoclick=function(){i3GEO.desenho.googlemaps.removePins(namespace)}}if(!centro){centro=false}i3GEO.desenho.googlemaps.inicia();var point,f,icon;if(centro===false){icon={url:imagem,size:new google.maps.Size(w,h)}}else{icon={url:imagem,size:new google.maps.Size(w,h),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(w/2,h/2)}}point=new google.maps.LatLng(y,x);f=new google.maps.Marker({position:point,map:i3GeoMap,origem:namespace,icon:icon});i3GEO.desenho.googlemaps.shapes.push(f);return f},removePins:function(namespace){if(!namespace){namespace="pin"}var f=i3GEO.desenho.googlemaps.getFeaturesByAttribute("origem",namespace);if(f&&f.length>0){i3GEO.desenho.googlemaps.destroyFeatures(f)}},movePin:function(pin,x,y){var point=new google.maps.LatLng(y,x);pin.setPosition(point)},getFeaturesByAttribute:function(atributo,valor){var i,s=[],n=i3GEO.desenho.googlemaps.shapes.length;for(i=0;i<n;i++){if(i3GEO.desenho.googlemaps.shapes[i]&&i3GEO.desenho.googlemaps.shapes[i]!=""){if(i3GEO.desenho.googlemaps.shapes[i][atributo]==valor){s.push(i3GEO.desenho.googlemaps.shapes[i])}}}return s},destroyFeatures:function(f){if(f){var i,n=f.length;for(i=0;i<n;i++){f[i].setMap(null);f[i]=""}}}},googleearth:{insereMarca:function(description,ddx,ddy,name,snippet){var placemark=i3GeoMap.createPlacemark(''),point=i3GeoMap.createPoint('');placemark.setName(name);point.setLatitude(ddy);point.setLongitude(ddx);placemark.setGeometry(point);if(description!==""){placemark.setDescription(description)}placemark.setSnippet(snippet);i3GeoMap.getFeatures().appendChild(placemark)},insereCirculo:function(centerLng,centerLat,radius,name,snippet){function makeCircle(centerLat,centerLng,radius){var ring=i3GeoMap.createLinearRing(''),steps=25,i,pi2=Math.PI*2,lat,lng;for(i=0;i<steps;i++){lat=centerLat+radius*Math.cos(i/steps*pi2);lng=centerLng+radius*Math.sin(i/steps*pi2);ring.getCoordinates().pushLatLngAlt(lat,lng,0)}return ring}var polygonPlacemark=i3GeoMap.createPlacemark(''),poly=i3GeoMap.createPolygon(''),polyStyle;poly.setAltitudeMode(i3GeoMap.ALTITUDE_RELATIVE_TO_GROUND);polygonPlacemark.setGeometry(poly);polygonPlacemark.getGeometry().setOuterBoundary(makeCircle(centerLat,centerLng,radius));polygonPlacemark.setName(name);polygonPlacemark.setSnippet(snippet);polygonPlacemark.setStyleSelector(i3GeoMap.createStyle(''));polyStyle=polygonPlacemark.getStyleSelector().getPolyStyle();polyStyle.setFill(0);i3GeoMap.getFeatures().appendChild(polygonPlacemark)},insereLinha:function(xi,yi,xf,yf,name,snippet){var lineStringPlacemark=i3GeoMap.createPlacemark(''),lineString,lineStyle;lineStringPlacemark.setName(name);lineString=i3GeoMap.createLineString('');lineString.setAltitudeMode(i3GeoMap.ALTITUDE_RELATIVE_TO_GROUND);lineStringPlacemark.setGeometry(lineString);lineString.getCoordinates().pushLatLngAlt(yi,xi,0);lineString.getCoordinates().pushLatLngAlt(yf,xf,0);lineStringPlacemark.setStyleSelector(i3GeoMap.createStyle(''));lineStringPlacemark.setSnippet(snippet);lineStyle=lineStringPlacemark.getStyleSelector().getLineStyle();lineStyle.setWidth(3);i3GeoMap.getFeatures().appendChild(lineStringPlacemark)},removePlacemark:function(nome){var features=i3GeoMap.getFeatures(),n=features.getChildNodes().getLength(),i,nfeatures=[];for(i=0;i<n;i++){try{if(features.getChildNodes().item(i).getName()===nome||features.getChildNodes().item(i).getDescription()===nome||features.getChildNodes().item(i).getSnippet()===nome){nfeatures.push(features.getChildNodes().item(i))}}catch(e){}}n=nfeatures.length;for(i=0;i<n;i++){features.removeChild(nfeatures[i])}}}};