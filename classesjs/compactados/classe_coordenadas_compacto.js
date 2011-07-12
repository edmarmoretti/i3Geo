if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.coordenadas={formato:"bloco",padrao:"geoProj",defOrigem:"+proj=longlat +ellps=GRS67 +no_defs",config:{"geoProj":{idhtml:"localizarxy",tipo:"geo",titulo:"Geo",ativo:true,defepsg:""},"dd":{idhtml:"localizarxy",tipo:"metrica",titulo:"D�c. de grau",ativo:true,defepsg:""},"policonicaSad69":{idhtml:"localizarxy",tipo:"metrica",titulo:"Polic SAD-69",ativo:true,defepsg:"+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=aust_SA +units=m +no_defs"},"utmSad69Proj":{idhtml:"localizarxy",tipo:"utm",titulo:"UTM Sad-69",ativo:true,defepsg:"",zona:{"19N":"+proj=utm +zone=19 +ellps=aust_SA +units=m +no_defs","20N":"+proj=utm +zone=20 +ellps=aust_SA +units=m +no_defs","21N":"+proj=utm +zone=21 +ellps=aust_SA +units=m +no_defs","22N":"+proj=utm +zone=22 +ellps=aust_SA +units=m +no_defs","17S":"+proj=utm +zone=17 +south +ellps=aust_SA +units=m +no_defs","18S":"+proj=utm +zone=18 +south +ellps=aust_SA +units=m +no_defs","19S":"+proj=utm +zone=19 +south +ellps=aust_SA +units=m +no_defs","20S":"+proj=utm +zone=20 +south +ellps=aust_SA +units=m +no_defs","21S":"+proj=utm +zone=21 +south +ellps=aust_SA +units=m +no_defs","22S":"+proj=utm +zone=22 +south +ellps=aust_SA +units=m +no_defs","23S":"+proj=utm +zone=23 +south +ellps=aust_SA +units=m +no_defs","24S":"+proj=utm +zone=24 +south +ellps=aust_SA +units=m +no_defs","25S":"+proj=utm +zone=25 +south +ellps=aust_SA +units=m +no_defs"}},"utmSirgas2000Proj":{idhtml:"localizarxy",tipo:"utm",titulo:"UTM Sirgas",ativo:true,defepsg:"",zona:{"11N":"+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","12N":"+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","13N":"+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","14N":"+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","15N":"+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","16N":"+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","17N":"+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","18N":"+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","19N":"+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","20N":"+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","21N":"+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","22N":"+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","17S":"+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","18S":"+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","19S":"+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","20S":"+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","21S":"+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","22S":"+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","23S":"+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","24S":"+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs","25S":"+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"}}},PARAMETROS:{"mostraCoordenadasUTM":{idhtml:"localizarxy"},"mostraCoordenadasGEO":{idhtml:"localizarxy"}},MODOTEXTO:"",mostraCoordenadasUTM:function(id){try{if(arguments.length===0||id===""||typeof(id)==='undefined'){id=this.PARAMETROS.mostraCoordenadasUTM.idhtml}else{this.PARAMETROS.mostraCoordenadasUTM.idhtml=id}if(!$i(id)||this.PARAMETROS.mostraCoordenadasUTM.idhtml===""){if(i3GEO.eventos.MOUSEPARADO.toString().search("atualizaCoordenadasUTM()")>=0){i3GEO.eventos.MOUSEPARADO.remove("atualizaCoordenadasUTM()")}return}atualizaCoordenadasUTM=function(){if(this.PARAMETROS.mostraCoordenadasUTM.idhtml===""){if(i3GEO.eventos.MOUSEPARADO.toString().search("atualizaCoordenadasUTM()")>=0){i3GEO.eventos.MOUSEPARADO.remove("atualizaCoordenadasUTM()")}return}if(i3GEO.Interface.STATUS.atualizando.length>0){return}if(objposicaocursor.imgx<10||objposicaocursor.imgy<10){return}if($i("wdoca")){return}var tempUtm,s,n,i,t;if(i3GEO.util.verificaScriptTag("i3GEOF")===true){return}tempUtm=function(retorno){var funcao,temp,texto;funcao="$i(i3GEO.coordenadas.PARAMETROS.mostraCoordenadasUTM.idhtml).style.display='none';"+"if(i3GEO.coordenadas.PARAMETROS.mostraCoordenadasGEO.idhtml == i3GEO.coordenadas.PARAMETROS.mostraCoordenadasUTM.idhtml)"+"{$i(i3GEO.coordenadas.PARAMETROS.mostraCoordenadasGEO.idhtml).style.display='block';i3GEO.coordenadas.mostraCoordenadasGEO();}";idSetTimeoutMostraUTM=setTimeout(funcao,3400);temp=$i(i3GEO.coordenadas.PARAMETROS.mostraCoordenadasUTM.idhtml);if(retorno.data){temp.style.display="block";texto="<div onclick='javascript:clearTimeout(idSetTimeoutMostraUTM);i3GEO.coordenadas.PARAMETROS.mostraCoordenadasUTM.idhtml = \"\";i3GEO.coordenadas.mostraCoordenadasGEO();' style='width:300px;font-size:10px;' >UTM: x="+retorno.data.x+" y="+retorno.data.y+" zn="+retorno.data.zona+" "+retorno.data.datum+" &nbsp;<img  class='x' src='"+i3GEO.util.$im("branco.gif")+"' /></div>";temp.innerHTML=texto}};i3GEO.php.geo2utm(tempUtm,objposicaocursor.ddx,objposicaocursor.ddy)};if(i3GEO.eventos.MOUSEPARADO.toString().search("atualizaCoordenadasUTM()")<0){i3GEO.eventos.MOUSEPARADO.push("atualizaCoordenadasUTM()")}}catch(e){alert("mostraCoordenadasUtm: "+e.description)}},mostraCoordenadasGEO:function(id){try{var ins;if(arguments.length===0||id===""||typeof(id)==='undefined'){id=this.PARAMETROS.mostraCoordenadasGEO.idhtml}else{this.PARAMETROS.mostraCoordenadasGEO.idhtml=id}if($i(id)){if(!$i("coordgeotabela")){$i(id).innerHTML=i3GEO.coordenadas.criaMascaraDMS("coordgeotabela");atualizaLocalizarGeo=function(){var temp=$i("coordgeotabela");if(temp&&temp.style.display==="block"){i3GEO.coordenadas.atualizaGeo(objposicaocursor.dmsx,objposicaocursor.dmsy,"coordgeotabela")}};if(i3GEO.Interface.TABLET===true){if(i3GEO.eventos.MOUSECLIQUE.toString().search("atualizaLocalizarGeo()")<0){i3GEO.eventos.MOUSECLIQUE.push("atualizaLocalizarGeo()")}}else{if(i3GEO.eventos.MOUSEMOVE.toString().search("atualizaLocalizarGeo()")<0){i3GEO.eventos.MOUSEMOVE.push("atualizaLocalizarGeo()")}}}}}catch(e){alert("mostraCoordenadasGeo: "+e.description)}},geo2zonaUtm:function(long){long=(long*1)+180;long=long/6;return parseInt(long,10)+1},criaMascaraDMS:function(prefixo,titulo,caixa){var ins='<table id='+prefixo+' style=display:block;text-align:center;width:410px ><tr style="border-bottom:2px solid white" >'+'<td style=width:10px;text-align:right > X:</td>'+'<td>'+$inputText('','',prefixo+'xg','grau','2','-00')+'</td>'+'<td>'+$inputText('','',prefixo+'xm','minuto','2','00')+'</td>'+'<td>'+$inputText('','',prefixo+'xs','segundo','4','00.00')+'</td>'+'<td>Y:'+$inputText('','',prefixo+'yg','grau','2','-00')+'</td>'+'<td>'+$inputText('','',prefixo+'ym','minuto','2','00')+'</td>'+'<td>'+$inputText('','',prefixo+'ys','segundo','4','00.00')+'</td>',temp='var '+prefixo+'xxx = i3GEO.calculo.dms2dd($i(\''+prefixo+'xg\').value,$i(\''+prefixo+'xm\').value,$i(\''+prefixo+'xs\').value);'+'var '+prefixo+'yyy = i3GEO.calculo.dms2dd($i(\''+prefixo+'yg\').value,$i(\''+prefixo+'ym\').value,$i(\''+prefixo+'ys\').value);'+'i3GEO.navega.zoomponto(i3GEO.configura.locaplic,i3GEO.configura.sid,'+prefixo+'xxx,'+prefixo+'yyy);';ins+='<td><img class=tic title=zoom onclick="'+temp+'" src="'+i3GEO.util.$im("branco.gif")+'" /></td>'+"<td>"+caixa+"</td>"+"</tr></table>";return ins},atualizaGeo:function(dmsx,dmsy,prefixo){var x=dmsx.split(" "),y=dmsy.split(" ");$i(prefixo+"xg").value=x[0];$i(prefixo+"xm").value=x[1];$i(prefixo+"xs").value=x[2];$i(prefixo+"yg").value=y[0];$i(prefixo+"ym").value=y[1];$i(prefixo+"ys").value=y[2];i3GEO.coordenadas.MODOTEXTO+="DMS - Latitude: "+y[0]+" "+y[1]+" "+y[2]+" Longitude: "+x[0]+" "+x[1]+" "+x[2]+"<br>"},criaMascaraMetrica:function(prefixo,titulo,caixa){var ins="<table id="+prefixo+" style=display:block;text-align:center;;width:410px ><tr style='border-bottom:2px solid white' >"+"<td style=width:120px;text-align:right >"+titulo+" X:&nbsp;</td>"+"<td>"+$inputText("","",prefixo+"X","X","12","00")+"&nbsp;</td>"+"<td>Y:"+$inputText("","",prefixo+"Y","Y","12","00")+"&nbsp;</td>"+"<td>Zn:"+$inputText("","",prefixo+"ZN","Zona","2","--")+"&nbsp;</td>"+"<td>"+caixa+"<td>"+"</tr></table>";return ins},atualizaProj4:function(onde,configProj,x,y){var destino,zona,temp,p,iu=i3GEO.util;try{if(!$i(onde+configProj+"ZN")){return}}catch(e){return}temp=i3GEO.coordenadas.config[configProj];try{if($i(onde+configProj).style.display==="none"){return}}catch(men){}if(temp.tipo==="metrica"){destino=temp.defepsg}if(typeof(x)==='undefined'){x=objposicaocursor.ddx}if(typeof(y)==='undefined'){y=objposicaocursor.ddy}if(temp.tipo==="utm"){zona=i3GEO.coordenadas.geo2zonaUtm(x);$i(onde+configProj+"ZN").value=zona;if(objposicaocursor.ddy*1>0){destino=temp.zona[zona+"N"]}else{destino=temp.zona[zona+"S"]}if(typeof(destino)==='undefined'){iu.defineValor(onde+configProj+"X","value","?");iu.defineValor(onde+configProj+"Y","value","?");return}}if(temp.defepsg===""&&temp.tipo==="metrica"){p={x:x,y:y}}else{p=i3GEO.coordenadas.calculaProj4(i3GEO.coordenadas.defOrigem,destino,x,y)}iu.defineValor(onde+configProj+"X","value",p.x);iu.defineValor(onde+configProj+"Y","value",p.y);i3GEO.coordenadas.MODOTEXTO+=temp.titulo+" - X: "+p.x+" Y: "+p.y+"<br>"},calculaProj4:function(origem,destino,x,y){Proj4js.defs={'ORIGEM':origem,'DESTINO':destino};var source=new Proj4js.Proj("ORIGEM"),dest=new Proj4js.Proj("DESTINO"),p=new Proj4js.Point(x,y);Proj4js.transform(source,dest,p);return p},ativaBloco:function(prefixo){var tipos=i3GEO.util.listaChaves(i3GEO.coordenadas.config),n=tipos.length,temp,i=0;for(i=0;i<n;i++){temp=i3GEO.coordenadas.config[tipos[i]];if(temp.ativo===true){if(tipos[i]===this.padrao){$i(prefixo+tipos[i]).style.display="block"}else{$i(prefixo+tipos[i]).style.display="none"}}}},mudaTipo:function(obj,onde){if(obj.value==="janela"){this.formato="janela";this.mostraCoordenadas();return}this.padrao=obj.value;obj.selectedIndex=0;i3GEO.coordenadas.ativaBloco(onde)},mostraCoordenadas:function(ativaMovimento,onde,x,y){try{var tipos=i3GEO.util.listaChaves(i3GEO.coordenadas.config),n=tipos.length,temp,ins="",i=0,caixa,janela;i3GEO.coordenadas.MODOTEXTO="";if(arguments.length===0){ativaMovimento=true;onde=""}if(onde===""){onde=i3GEO.coordenadas.config[tipos[0]].idhtml}caixa="<select onchange='javascript:i3GEO.coordenadas.mudaTipo(this,\""+onde+"\");' style='margin-left:3px;font-size:10px;height:16px;width:40px;' ><option>---</option><option value='janela' >janela</option>";for(i=0;i<n;i+=1){temp=i3GEO.coordenadas.config[tipos[i]];if(temp.ativo===true){caixa+="<option value='"+tipos[i]+"'>"+temp.titulo+"</option>"}}caixa+="</select>";if(i3GEO.coordenadas.formato!=="bloco"){caixa=""}for(i=0;i<n;i+=1){temp=i3GEO.coordenadas.config[tipos[i]];if(temp.ativo===true){if(temp.tipo==="geo"){ins+=i3GEO.coordenadas.criaMascaraDMS(onde+tipos[i],temp.titulo,caixa);if(i3GEO.coordenadas.formato==="separado"){try{$i(temp.idhtml).innerHTML=ins}catch(e){}ins=""}}else{ins+=i3GEO.coordenadas.criaMascaraMetrica(onde+tipos[i],temp.titulo,caixa)}}}if(this.formato==="janela"){janela=i3GEO.janela.cria("450px","120px","","","","Coordenadas aproximadas","i3GEOJanelaCoordenadas",false,"hd","","");YAHOO.util.Event.addListener(janela[0].close,"click",function(){i3GEO.coordenadas.formato="bloco",i3GEO.coordenadas.mostraCoordenadas()});temp=$i("i3GEOJanelaCoordenadas_corpo");temp.style.backgroundColor="white";temp.style.textAlign="left";temp=$i("i3GEOJanelaCoordenadas");temp.onmouseover="";temp.onmouseout="";if($i(onde)){$i(onde).innerHTML=""}onde="i3GEOJanelaCoordenadas_corpo";ins+="<br><a href='#' style='cursor:pointer;color:blue' onclick='new YAHOO.util.KeyListener(document.body,{alt:true,keys:67},{fn: function(type, args, obj){alert(i3GEO.coordenadas.MODOTEXTO);}}).enable();' >"+"Clique aqui para ativar Alt+C para poder capturar as coordenadas</a>"}if(onde!==""&&$i(onde)){$i(onde).innerHTML=ins}atualizaLocalizarGeo=function(id,x,y){if(typeof(x)==='undefined'){x=objposicaocursor.dmsx}if(typeof(y)==='undefined'){y=objposicaocursor.dmsy}temp=$i(id);if(temp&&temp.style.display==="block"){i3GEO.coordenadas.atualizaGeo(x,y,id)}};for(i=0;i<n;i+=1){temp=i3GEO.coordenadas.config[tipos[i]];if(temp.ativo===true){if(temp.tipo==="geo"){if(ativaMovimento===true){if(i3GEO.Interface.TABLET===true){if(i3GEO.eventos.MOUSECLIQUE.toString().search("atualizaLocalizarGeo('"+onde+tipos[i]+"')")<0){i3GEO.eventos.MOUSECLIQUE.push("atualizaLocalizarGeo('"+onde+tipos[i]+"')")}}else{if(i3GEO.eventos.MOUSEMOVE.toString().search("atualizaLocalizarGeo('"+onde+tipos[i]+"')")<0){i3GEO.eventos.MOUSEMOVE.push("atualizaLocalizarGeo('"+onde+tipos[i]+"')")}}}if(typeof(x)!=='undefined'){atualizaLocalizarGeo(onde+tipos[i],i3GEO.calculo.dd2dms(x)[0],i3GEO.calculo.dd2dms(y)[0])}}else{if(ativaMovimento===true){if(i3GEO.Interface.TABLET===true){if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEO.coordenadas.atualizaProj4('"+onde+"','"+tipos[i]+"')")<0){i3GEO.eventos.MOUSECLIQUE.push("i3GEO.coordenadas.atualizaProj4('"+onde+"','"+tipos[i]+"')")}}else{if(i3GEO.eventos.MOUSEMOVE.toString().search("i3GEO.coordenadas.atualizaProj4('"+onde+"','"+tipos[i]+"')")<0){i3GEO.eventos.MOUSEMOVE.push("i3GEO.coordenadas.atualizaProj4('"+onde+"','"+tipos[i]+"')")}}}if(typeof(x)!=='undefined'){i3GEO.coordenadas.atualizaProj4(onde,tipos[i],x,y)}}}}if(ativaMovimento===true){if(i3GEO.Interface.TABLET===true){if(i3GEO.eventos.MOUSECLIQUE.toString().search("i3GEO.coordenadas.limpaModoTexto()")<0){i3GEO.eventos.MOUSECLIQUE.push("i3GEO.coordenadas.limpaModoTexto()")}}else{if(i3GEO.eventos.MOUSEMOVE.toString().search("i3GEO.coordenadas.limpaModoTexto()")<0){i3GEO.eventos.MOUSEMOVE.push("i3GEO.coordenadas.limpaModoTexto()")}}}if(i3GEO.coordenadas.formato==="bloco"){i3GEO.coordenadas.ativaBloco(onde)}}catch(men){}},limpaModoTexto:function(){i3GEO.coordenadas.MODOTEXTO=""}};