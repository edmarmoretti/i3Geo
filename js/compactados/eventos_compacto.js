if(typeof(i3GEO)==='undefined'){var i3GEO={}}var objposicaocursor={ddx:"",ddy:"",dmsx:"",dmsy:"",telax:"",telay:"",imgx:"",imgy:"",refx:"",refy:""};i3GEO.eventos={CONTATOUCH:0,MOUSEOVERDATA:[],MOUSEOUTDATA:[],RESIZE:[],SELECAO:[],ATUALIZAARVORECAMADAS:[],ATIVATEMA:[],NAVEGAMAPA:[],MOUSEPARADO:[],MOUSEMOVE:[],MOUSEDOWN:[],MOUSEUP:["i3GEO.eventos.cliquePerm.executa()"],MOUSECLIQUE:["i3GEO.eventos.cliqueCapturaPt()"],MOUSECLIQUEPERM:["i3GEO.identify.dialogo.verificaTipDefault(xx,yy)"],TIMERPARADO:"",mouseOverData:function(){i3GEO.eventos.executaEventos(this.MOUSEOVERDATA)},mouseOutData:function(){i3GEO.eventos.executaEventos(this.MOUSEOUTDATA)},mouseParado:function(){try{clearTimeout(this.TIMERPARADO)}catch(e){this.TIMERPARADO=""}if(objposicaocursor.dentroDomapa===false){return}try{if(objposicaocursor.imgy===""){objposicaocursor.imgy=1;objposicaocursor.imgx=1}if(i3GEO.eventos.MOUSEPARADO.length>0&&objposicaocursor.imgy>0&&objposicaocursor.imgx>0){if(objposicaocursor.imgx>0){i3GEO.eventos.executaEventos(i3GEO.eventos.MOUSEPARADO)}}}catch(e){}},navegaMapa:function(){i3GEO.eventos.executaEventos(this.NAVEGAMAPA)},mousemoveMapa:function(){i3GEO.eventos.executaEventos(this.MOUSEMOVE)},mousedownMapa:function(){i3GEO.eventos.executaEventos(this.MOUSEDOWN)},mouseupMapa:function(exy){if(!exy){i3GEO.eventos.executaEventos(this.MOUSEUP)}else{if(i3GEO.Interface.ATUAL==="googlemaps"&&exy.target&&!exy.target.src){if(i3GEOtouchesPosMapa===""){i3GEOtouchesPosMapa=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDMAPA))}pos=i3GEOtouchesPosMapa;p=new google.maps.Point(exy.clientX-pos[0],exy.clientY-pos[1]);e=null;lonlat=i3GeoMapOverlay.getProjection().fromContainerPixelToLatLng(p);if(lonlat){objposicaocursor.ddx=lonlat.lng();objposicaocursor.ddy=lonlat.lat()}i3GEO.eventos.executaEventos(this.MOUSEUP)}else if(i3GEO.Interface.ATUAL==="openlayers"&&exy.target&&exy.target.tagName==="CANVAS"){i3GEO.eventos.executaEventos(this.MOUSEUP)}}},mousecliqueMapa:function(){i3GEO.eventos.executaEventos(this.MOUSECLIQUE)},resizeMapa:function(){i3GEO.eventos.executaEventos(this.RESIZE)},executaEventos:function(eventos){if(i3GEO.Interface.STATUS.pan===true){return}var f=0;try{if(eventos.length>0){f=eventos.length-1;if(f>=0){do{if(eventos[f]!==""){if(typeof(eventos[f])==="function"){eventos[f].call()}else{var f=eventos[f];f=f.replace("xx",objposicaocursor.ddx);f=f.replace("yy",objposicaocursor.ddy);eval(f)}}}while(f--)}}}catch(e){eventos[f]=""}},removeEventos:function(tipo,eventos){var i,n=eventos.length;for(i=0;i<n;i++){i3GEO.eventos[tipo].remove(eventos[i])}i3GEO.eventos[tipo].remove("");i3GEO.eventos[tipo]=i3GEO.eventos[tipo].getUnique()},adicionaEventos:function(tipo,eventos){if(eventos==""){i3GEO.eventos[tipo]=i3GEO.eventos[tipo].getUnique();return}var i,n=eventos.length;for(i=0;i<n;i++){i3GEO.eventos[tipo].push(eventos[i])}i3GEO.eventos[tipo]=i3GEO.eventos[tipo].getUnique()},posicaoMouseMapa:function(e){var teladd,teladms,container="",targ="",pos,mousex,mousey,xfig,yfig,xreffig,yreffig,xtela,ytela,c,ex;if(!e){e=window.event}try{if(e.target){targ=e.target}else if(e.srcElement){targ=e.srcElement}if(targ.parentNode){container=targ.parentNode.id}}catch(erro){return}if(container!=="mapaReferencia"){return}pos=i3GEO.util.pegaPosicaoObjeto(targ);mousex=0;mousey=0;if(e.pageX||e.pageY){mousex=e.pageX;mousey=e.pageY}else if(e.clientX||e.clientY){mousex=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;mousey=e.clientY+document.body.scrollTop+document.documentElement.scrollTop}xfig=mousex-pos[0];yfig=mousey-pos[1];xreffig=xfig;yreffig=yfig;xtela=mousex;ytela=mousey;c=i3GEO.parametros.celularef;ex=i3GEO.parametros.extentref;teladd=i3GEO.calculo.tela2dd(xfig,yfig,c,ex,targ.id);teladms=i3GEO.calculo.dd2dms(teladd[0],teladd[1]);objposicaocursor={ddx:teladd[0],ddy:teladd[1],dmsx:teladms[0],dmsy:teladms[1],telax:xtela,telay:ytela,imgx:xfig,imgy:yfig,refx:xreffig,refy:yreffig,dentroDomapa:true}},ativa:function(docMapa){if(!docMapa){return}var timer=0;var delay=300;var prevent=false;docMapa.onmouseover=function(){objposicaocursor.dentroDomapa=true;this.onmousemove=function(exy){i3GEO.eventos.cliquePerm.status=true;i3GEO.eventos.posicaoMouseMapa(exy);try{i3GEO.eventos.mousemoveMapa()}catch(e){}}};docMapa.onmouseout=function(){objposicaocursor.dentroDomapa=false};docMapa.onmousedown=function(exy){if(objposicaocursor.dentroDomapa===false){return}i3GEO.eventos.mousedownMapa()};docMapa.onclick=function(exy){if(objposicaocursor.dentroDomapa===false){return}i3GEO.eventos.mousecliqueMapa(exy)};docMapa.ondblclick=function(){if(objposicaocursor.dentroDomapa===false){return}clearTimeout(timer);prevent=true};docMapa.onmouseup=function(exy){if(objposicaocursor.dentroDomapa===false){return}if(i3GEO.Interface.ATUAL==="googlemaps"){if(modoAtual==="move"){modoAtual="";return}}i3GEO.eventos.cliquePerm.status=true;timer=setTimeout(function(){if(!prevent){i3GEO.eventos.mouseupMapa(exy)}prevent=false},delay)};docMapa.ontouchmove=function(exy){i3GEO.eventos.CONTATOUCH++;i3GEO.Interface.STATUS.pan=true;i3GEO.eventos.posicaoMouseMapa(exy)};docMapa.ontouchcancel=function(exy){i3GEO.eventos.CONTATOUCH=0}},botaoDireita:function(exy){try{var k=(navm)?event.button:exy.button;if(k!==2){return false}else{return true}}catch(e){return false}},cliqueCapturaPt:function(ixg,ixm,ixs,iyg,iym,iys){var x,y,doc=document;if(arguments.length===0){ixg="ixg";ixm="ixm";ixs="ixs";iyg="iyg";iym="iym";iys="iys";if($i("wdocai")){doc=(navm)?document.frames("wdocai").document:$i("wdocai").contentDocument}}try{if(doc){x=objposicaocursor.dmsx.split(" ");y=objposicaocursor.dmsy.split(" ");if(doc.getElementById(ixg)){doc.getElementById(ixg).value=x[0]}if(doc.getElementById(ixm)){doc.getElementById(ixm).value=x[1]}if(doc.getElementById(ixs)){doc.getElementById(ixs).value=$.number(x[2],2,$trad("dec"),$trad("mil"))}if(doc.getElementById(iyg)){doc.getElementById(iyg).value=y[0]}if(doc.getElementById(iym)){doc.getElementById(iym).value=y[1]}if(doc.getElementById(iys)){doc.getElementById(iys).value=$.number(y[2],2,$trad("dec"),$trad("mil"))}}}catch(m){}},cliquePerm:{ativo:true,status:true,executa:function(evt){if(i3GEO.eventos.cliquePerm.ativo===true&&i3GEO.eventos.cliquePerm.status===true){i3GEO.eventos.executaEventos(i3GEO.eventos.MOUSECLIQUEPERM)}},ativa:function(){if(i3GEO.eventos.cliquePerm.ativoinicial===true){i3GEO.eventos.cliquePerm.ativo=true}},desativa:function(){if(i3GEO.eventos.cliquePerm.ativoinicial===true){i3GEO.eventos.cliquePerm.ativo=false}},ativoinicial:true}};