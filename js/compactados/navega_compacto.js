if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.navega={EXTENSOES:{lista:[],redo:[],posicao:0,emAcao:false},ativaPan:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){i3GeoMap.setOptions({draggable:true})}if(i3GEO.Interface.ATUAL==="openlayers"){marcadorZoom="";i3GEO.Interface.openlayers.OLpanel.activateControl(i3GEO.Interface.openlayers.OLpan)}},registraExt:function(ext){if(i3GEO.navega.EXTENSOES.emAcao==false){var l=i3GEO.navega.EXTENSOES.lista,n=l.length;if(n>10){l.shift()}n=l.length;if(n>0&&l[n-1]===ext){return}l.push(ext)}else{i3GEO.navega.EXTENSOES.emAcao=false}},extensaoAnterior:function(){i3GEO.navega.EXTENSOES.emAcao=true;var l=i3GEO.navega.EXTENSOES.lista,r=i3GEO.navega.EXTENSOES.redo,e;if(l.length>0){if(l.length>1){e=l.pop();i3GEO.navega.zoomExt("","","",e);if(r.length>10){r.shift()}if(r.length>0&&r[r.length-1]===e){return}r.push(e)}}else{l.push(i3GEO.parametros.mapexten)}},extensaoProximo:function(){var l=i3GEO.navega.EXTENSOES.lista,r=i3GEO.navega.EXTENSOES.redo,e;i3GEO.navega.EXTENSOES.emAcao=true;if(r.length>1){i3GEO.navega.zoomExt("","","",r[r.length-1]);e=r.pop();if(l.length>10){l.pop()}if(l.length>0&&l[l.length-1]===e){return}l.push(e)}},pan2ponto:function(x,y){i3GEO.Interface[i3GEO.Interface.ATUAL].pan2ponto(x,y);i3GEO.Interface[i3GEO.Interface.ATUAL].recalcPar()},centroDoMapa:function(){var xy;switch(i3GEO.Interface.ATUAL){case"openlayers":xy=i3geoOL.getCenter();if(xy){return[xy.lon,xy.lat]}else{return false}break;case"googlemaps":xy=i3GeoMap.getCenter();if(xy){return[xy.lng(),xy.lat()]}else{return false}break;default:return false}},marcaCentroDoMapa:function(xy){var t=$i("i3GeoCentroDoMapa");if(t&&t.style.display==="block"){return}if(xy!=false){xy=i3GEO.calculo.dd2tela(xy[0]*1,xy[1]*1,$i(i3GEO.Interface.IDMAPA),i3GEO.parametros.mapexten,i3GEO.parametros.pixelsize);i3GEO.util.criaPin("i3GeoCentroDoMapa",i3GEO.configura.locaplic+'/imagens/alvo.png','30px','30px');i3GEO.util.posicionaImagemNoMapa("i3GeoCentroDoMapa",xy[0],xy[1])}},removeCookieExtensao:function(){var nomecookie="i3geoOLUltimaExtensao";if(i3GEO.Interface.openlayers.googleLike===true){nomecookie="i3geoUltima_ExtensaoOSM"}i3GEO.util.insereCookie(nomecookie,"")},zoomin:function(locaplic,sid){if(i3GEO.Interface.ATUAL==="openlayers"){i3geoOL.zoomIn();return}},zoomout:function(locaplic,sid){if(i3GEO.Interface.ATUAL==="openlayers"){i3geoOL.zoomOut();return}},zoomponto:function(locaplic,sid,x,y,tamanho,simbolo,cor){if(!simbolo){simbolo="ponto"}if(!tamanho){tamanho=15}if(!cor){cor="255 0 0"}if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}i3GEO.php.zoomponto(i3GEO.atualiza,x,y,tamanho,simbolo,cor)},zoompontoIMG:function(locaplic,sid,x,y){if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}i3GEO.php.pan(i3GEO.atualiza,'','',x,y)},xy2xy:function(locaplic,sid,xi,yi,xf,yf,ext,tipoimagem){var disty,distx,ex,novoxi,novoxf,novoyf,nex;if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}disty=(yi*-1)+yf;distx=(xi*-1)+xf;ex=ext.split(" ");novoxi=(ex[0]*1)-distx;novoxf=(ex[2]*1)-distx;novoyi=(ex[1]*1)-disty;novoyf=(ex[3]*1)-disty;if((distx===0)&&(disty===0)){return false}else{nex=novoxi+" "+novoyi+" "+novoxf+" "+novoyf;i3GEO.navega.zoomExt(i3GEO.configura.locaplic,i3GEO.configura.sid,tipoimagem,nex);return true}},localizaIP:function(locaplic,sid,funcao){if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}i3GEO.php.localizaIP(funcao)},zoomIP:function(locaplic,sid){try{if(arguments.length>0){i3GEO.configura.locaplic=locaplic;i3GEO.configura.sid=sid}var mostraIP=function(retorno){if(retorno.data.latitude!==null){i3GEO.navega.zoomponto(locaplic,sid,retorno.data.longitude,retorno.data.latitude)}else{i3GEO.janela.tempoMsg("Nao foi possivel identificar a localizacao.")}};i3GEO.navega.localizaIP(locaplic,sid,mostraIP)}catch(e){}},zoomExt:function(locaplic,sid,tipoimagem,ext){var f;if(locaplic!==""){i3GEO.configura.locaplic=locaplic}if(sid!==""){i3GEO.configura.sid=sid}if(tipoimagem===""){tipoimagem="nenhum"}ext=i3GEO.util.extGeo2OSM(ext);i3GEO.php.mudaext(function(retorno){i3GEO.atualiza(retorno)},tipoimagem,ext)},aplicaEscala:function(escala){if(i3GEO.Interface.ATUAL==="googlemaps"){i3GeoMap.setZoom(i3GEO.Interface.googlemaps.escala2nzoom(escala))}if(i3GEO.Interface.ATUAL==="openlayers"){i3geoOL.zoomToScale(escala,true);i3GEO.parametros.mapscale=parseInt(i3geoOL.getScale(),10)}},atualizaEscalaNumerica:function(escala){var e=$i("i3GEOescalanum");if(!e){return}if(arguments.length===1){e.value=escala}else{if(i3GEO.parametros.mapscale!==""){e.value=parseInt(i3GEO.parametros.mapscale,10)}else{e.value=0}}},panFixo:function(){alert("panFixo foi depreciado na versao 6.0")},mostraRosaDosVentos:function(){alert("mostraRosaDosVentos foi depreciado na versao 6.0")},autoRedesenho:{INTERVALO:0,ID:"tempoRedesenho",ativa:function(id){if(arguments.length===0){id="tempoRedesenho"}i3GEO.navega.autoRedesenho.ID=id;if(($i(id))&&i3GEO.navega.autoRedesenho.INTERVALO>0){$i(id).style.display="block"}if(i3GEO.navega.autoRedesenho.INTERVALO>0){i3GEO.navega.tempoRedesenho=setTimeout('i3GEO.navega.autoRedesenho.redesenha()',i3GEO.navega.autoRedesenho.INTERVALO)}if(($i(id))&&(i3GEO.navega.autoRedesenho.INTERVALO>0)){$i(id).innerHTML=i3GEO.navega.autoRedesenho.INTERVALO/1000;i3GEO.navega.contaTempoRedesenho=setTimeout('i3GEO.navega.autoRedesenho.contagem()',1000)}},desativa:function(){i3GEO.navega.autoRedesenho.INTERVALO=0;clearTimeout(i3GEO.navega.tempoRedesenho);clearTimeout(i3GEO.navega.contaTempoRedesenho);i3GEO.navega.tempoRedesenho="";i3GEO.navega.contaTempoRedesenho="";if($i(i3GEO.navega.autoRedesenho.ID)){$i(i3GEO.navega.autoRedesenho.ID).style.display="none"}},redesenha:function(){clearTimeout(i3GEO.navega.tempoRedesenho);clearTimeout(i3GEO.navega.contaTempoRedesenho);switch(i3GEO.Interface.ATUAL){case"openlayers":i3GEO.Interface.openlayers.atualizaMapa();break;case"googlemaps":i3GEO.Interface.googlemaps.redesenha();break;default:i3GEO.atualiza("")}i3GEO.navega.autoRedesenho.ativa(i3GEO.navega.autoRedesenho.ID)},contagem:function(){if($i(i3GEO.navega.autoRedesenho.ID)){$i(i3GEO.navega.autoRedesenho.ID).innerHTML=parseInt($i(i3GEO.navega.autoRedesenho.ID).innerHTML,10)-1}i3GEO.navega.contaTempoRedesenho=setTimeout('i3GEO.navega.autoRedesenho.contagem()',1000)}},zoomBox:{inicia:function(){alert("zoomBox depreciado na versao 6.0")}},lente:{POSICAOX:0,POSICAOY:0,ESTAATIVA:"nao",inicia:function(){if(i3GEO.navega.lente.ESTAATIVA!="nao"){i3GEO.navega.lente.desativa();return}var novoel,novoimg,temp;if(!$i("lente")){novoel=document.createElement("div");novoel.id='lente';novoel.style.clip='rect(0px,0px,0px,0px)';novoimg=document.createElement("img");novoimg.src="";novoimg.id='lenteimg';novoel.appendChild(novoimg);document.body.appendChild(novoel);novoel=document.createElement("div");novoel.id='boxlente';document.body.appendChild(novoel)}temp=$i('boxlente').style;temp.borderWidth='1';temp.borderColor="red";temp.display="block";$i("lente").style.display="block";i3GEO.navega.lente.ESTAATIVA="sim";i3GEO.navega.lente.atualiza();i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.navega.lente.atualiza()"]);i3GEO.eventos.adicionaEventos("MOUSEMOVE",["i3GEO.navega.lente.movimenta()"])},atualiza:function(){var temp=function(retorno){try{var pos,volta,nimg,olente,oboxlente,olenteimg;retorno=retorno.data;if(retorno==="erro"){i3GEO.janela.tempoMsg("A lente nao pode ser criada");return}volta=retorno.split(",");nimg=volta[2];olente=$i('lente');oboxlente=$i('boxlente');olenteimg=$i('lenteimg');olenteimg.src=nimg;olenteimg.style.width=volta[0]*1.5+"px";olenteimg.style.height=volta[1]*1.5+"px";olente.style.zIndex=1000;olenteimg.style.zIndex=1000;oboxlente.style.zIndex=1000;pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA));olente.style.left=pos[0]+i3GEO.navega.lente.POSICAOX+"px";olente.style.top=pos[1]+i3GEO.navega.lente.POSICAOY+"px";oboxlente.style.left=pos[0]+i3GEO.navega.lente.POSICAOX+"px";oboxlente.style.top=pos[1]+i3GEO.navega.lente.POSICAOY+"px";oboxlente.style.display='block';oboxlente.style.visibility='visible';olente.style.display='block';olente.style.visibility='visible';i3GEO.janela.fechaAguarde("ajaxabrelente")}catch(e){i3GEO.janela.fechaAguarde()}};if(i3GEO.navega.lente.ESTAATIVA==="sim"){i3GEO.php.aplicaResolucao(temp,1.5)}else{i3GEO.navega.lente.desativa()}},desativa:function(){$i("lente").style.display="none";$i("boxlente").style.display="none";$i('boxlente').style.borderWidth=0;i3GEO.navega.lente.ESTAATIVA="nao";i3GEO.eventos.removeEventos("MOUSEMOVE",["i3GEO.navega.lente.movimenta()"]);i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.navega.lente.atualiza()"])},movimenta:function(){try{if(i3GEO.navega.lente.ESTAATIVA==="sim"){var pos=[0,0],esq,topo,clipt,i;if($i("lente").style.visibility==="visible"){pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA))}esq=(objposicaocursor.telax-pos[0])*2.25;topo=(objposicaocursor.telay-pos[1])*2.25;clipt="rect("+(topo-120)+"px "+(esq+120)+"px "+(topo+120)+"px "+(esq-120)+"px)";i=$i("lente").style;i.clip=clipt;i.top=pos[1]-(topo-120)+"px";i.left=pos[0]-(esq-120)+"px"}}catch(e){}}},destacaTema:{TAMANHO:75,ESTAATIVO:"nao",TEMA:"",inicia:function(tema){var novoel,novoeli,janela,pos;if(!$i("img_d")){pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA));novoel=document.createElement("div");novoel.id="div_d";novoel.style.zIndex=5000;document.body.appendChild(novoel);$i("div_d").innerHTML="<input style='position:relative;top:0px;left:0px'' type=image src='' id='img_d' />";$i("div_d").style.left=parseInt(pos[0],10)+"px";$i("div_d").style.top=parseInt(pos[1],10)+"px";$i("img_d").style.left=0+"px";$i("img_d").style.top=0+"px";$i("img_d").style.width=i3GEO.parametros.w+"px";$i("img_d").style.height=i3GEO.parametros.h+"px";$i("div_d").style.clip='rect(0px 75px 75px 0px)';novoeli=document.createElement("div");novoeli.id="div_di";novoel.appendChild(novoeli);$i("div_di").innerHTML="<p style='position:absolute;top:0px;left:0px'>+-</p>"}i3GEO.navega.destacaTema.TEMA=tema;i3GEO.navega.destacaTema.ESTAATIVO="sim";i3GEO.navega.destacaTema.atualiza();janela=i3GEO.janela.cria(160,50,"","center","center","<div class='i3GeoTituloJanela'>"+$trad("x50")+"</div>","ativadesativaDestaque");$i(janela[2].id).innerHTML=$trad("x91");$(janela[0].close).click(i3GEO.navega.destacaTema.desativa);i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.navega.destacaTema.atualiza()"]);i3GEO.eventos.adicionaEventos("MOUSEMOVE",["i3GEO.navega.destacaTema.movimenta()"])},atualiza:function(){if(i3GEO.navega.destacaTema.ESTAATIVO==="nao"){return}var temp=function(retorno){var m,novoel;retorno=retorno.data;m=new Image();m.src=retorno;$i("div_d").innerHTML="";$i("div_d").style.display="block";novoel=document.createElement("input");novoel.id="img_d";novoel.style.position="relative";novoel.style.top="0px";novoel.style.left="0px";novoel.type="image";novoel.src=m.src;novoel.style.display="block";$i("div_d").appendChild(novoel);i3GEO.janela.fechaAguarde("ajaxdestaca")};i3GEO.php.geradestaque(temp,i3GEO.navega.destacaTema.TEMA,i3GEO.parametros.mapexten)},desativa:function(){i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.navega.destacaTema.atualiza()"]);i3GEO.eventos.removeEventos("MOUSEMOVE",["i3GEO.navega.destacaTema.movimenta()"]);i3GEO.navega.destacaTema.ESTAATIVO="nao";document.body.removeChild($i("div_d"))},movimenta:function(){if(i3GEO.navega.destacaTema.ESTAATIVO==="sim"){$i("div_d").style.clip='rect('+(objposicaocursor.imgy-i3GEO.navega.destacaTema.TAMANHO)+"px "+(objposicaocursor.imgx-10)+"px "+(objposicaocursor.imgy-10)+"px "+(objposicaocursor.imgx-i3GEO.navega.destacaTema.TAMANHO)+'px)'}}},barraDeZoom:{cria:function(){alert("barraDeZoom depreciado na versao 6.0")}},dialogo:{wiki:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.wiki()","wiki","wiki","dependencias.php","i3GEOF.wiki.iniciaJanelaFlutuante()")},metar:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.metar()","metar","metar","dependencias.php","i3GEOF.metar.iniciaJanelaFlutuante()")},buscaFotos:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.buscaFotos()","buscafotos","buscaFotos")},google:function(coordenadas){i3GEO.navega.dialogo.google.coordenadas=coordenadas;var temp,janela,idgoogle="googlemaps"+Math.random();janela=i3GEO.janela.cria((i3GEO.parametros.w/2.5)+25+"px",(i3GEO.parametros.h/2.5)+18+"px",i3GEO.configura.locaplic+"/ferramentas/googlemaps1/index.php","","","<div class='i3GeoTituloJanela'>Google maps<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=7&idajuda=68' ><b> </b></a></div>",idgoogle);temp=function(){i3GEO.desenho.removePins("boxOndeGoogle");i3GEO.desenho.removePins("googlemaps")};$(janela[0].close).click(temp)},confluence:function(){i3GEO.util.dialogoFerramenta("i3GEO.navega.dialogo.confluence()","confluence","confluence","dependencias.php","i3GEOF.confluence.iniciaJanelaFlutuante()")}},atualizaGoogle:function(idgoogle){try{parent.frames[idgoogle+"i"].panTogoogle()}catch(e){i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.navega.atualizaGoogle('"+idgoogle+"')"]);i3GEO.desenho.removePins("googlemaps");i3GEO.desenho.removePins("boxOndeGoogle")}}};