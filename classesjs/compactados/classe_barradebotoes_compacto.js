if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}i3GEO.barraDeBotoes={BARRAS:new Array(),AUTOALTURA:false,TRANSICAOSUAVE:true,OPACIDADE:65,PERMITEFECHAR:true,PERMITEDESLOCAR:true,ATIVAMENUCONTEXTO:false,LISTABOTOES:i3GEO.configura.funcoesBotoes.botoes,BOTAOPADRAO:"pan",BOTAOCLICADO:"",ativaIcone:function(icone){i3GEO.barraDeBotoes.BOTAOCLICADO=icone;var ko=i3GEO.barraDeBotoes.LISTABOTOES.length-1;if(ko>=0){do{var temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(i3GEO.barraDeBotoes.LISTABOTOES[ko].tipo=="dinamico"&&temp){var ist=temp.style;ist.borderWidth="1px";ist.borderColor='white';ist.borderLeftColor='rgb(50,50,50)';ist.borderBottomColor='rgb(50,50,50)'}}while(ko--)}if($i(icone)){with($i(icone).style){borderColor='white';borderWidth="1px"}}},ativaBotoes:function(padrao){if(arguments.length==0){var padrao=i3GEO.barraDeBotoes.BOTAOPADRAO}i3GEO.barraDeBotoes.BOTAOCLICADO=padrao;var l=i3GEO.barraDeBotoes.LISTABOTOES;var b=l.length-1;if(b>=0){do{if($i(l[b].iddiv)){if(l[b].conteudo){eval('$i(l[b].iddiv).innerHTML = "'+l[b].conteudo+'"')}if(l[b].dica){eval('$i("'+l[b].iddiv+'").onmouseover = function(){i3GEO.ajuda.mostraJanela("'+l[b].dica+'","");}');eval('$i("'+l[b].iddiv+'").onmouseout = function(){i3GEO.ajuda.mostraJanela("");};')}if(l[b].funcaoonclick){$i(l[b].iddiv).onclick=l[b].funcaoonclick;if(l[b].iddiv==padrao){l[b].funcaoonclick()}}if(l[b].constroiconteudo){eval(l[b].constroiconteudo)}}}while(b--)}},ativaBarraDeZoom:function(){$i("vertMaisZoom").onmouseover=function(){i3GEO.ajuda.mostraJanela('Amplia o mapa mantendo o centro atual.')};$i("vertMaisZoom").onclick=function(){$i("vertHandleDivZoom").onmousedown.call();g_fatordezoom=0;$i("vertHandleDivZoom").onmousemove.call();g_fatordezoom=-1;$i("vertHandleDivZoom").onmousemove.call();i3GEO.barraDeBotoes.BOTAOCLICADO='zoomin';i3GEO.navega.zoomin();g_fatordezoom=0};$i("vertMenosZoom").onmouseover=function(){i3GEO.ajuda.mostraJanela('Reduz o mapa mantendo o centro atual.')};$i("vertMenosZoom").onclick=function(){$i("vertHandleDivZoom").onmousedown.call();g_fatordezoom=0;$i("vertHandleDivZoom").onmousemove.call();g_fatordezoom=1;$i("vertHandleDivZoom").onmousemove.call();i3GEO.barraDeBotoes.BOTAOCLICADO='zoomout';i3GEO.navega.zoomout();g_fatordezoom=0}},inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y){var wj="36px";var recuo="0px";var novoel=document.createElement("div");novoel.id=idconteudonovo;novoel.style.display="block";novoel.style.border="1px solid gray";novoel.style.background="white";if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){if(navm){novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')'}else{novoel.style.opacity=i3GEO.barraDeBotoes.OPACIDADE/100}}else{if(navm){novoel.style.filter='alpha(opacity=90)'}else{novoel.style.opacity=.85}}var temp="";if(barraZoom==true){if(navn){temp+='<div style="text-align:center;position:relative;left:9px" >'}var estilo="top:4px;";if(navm){var estilo="top:4px;left:-2px;"}temp+='<div id="vertMaisZoom" style="'+estilo+'"></div><div id="vertBGDiv" name="vertBGDiv" tabindex="0" x2:role="role:slider" state:valuenow="0" state:valuemin="0" state:valuemax="200" title="Zoom" >';temp+='<div id="vertHandleDivZoom" ><img alt="" class="slider" src="'+i3GEO.util.$im("branco.gif")+'" /></div></div>';if(navm)temp+='<div id=vertMenosZoom style="left:-1px;" ></div>';else temp+='<div id=vertMenosZoom ></div>';if(navn){temp+='</div>'}}temp+='<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:-6px;"  ></div></div>';novoel.innerHTML=temp;novoel.onmouseover=function(){if($i("i3geo_rosa")){$i("i3geo_rosa").style.display="none"}if(i3GEO.barraDeBotoes.OPACIDADE){if(navm){novoel.style.filter='alpha(opacity=90)'}else{novoel.style.opacity=.85}}};novoel.onmouseout=function(){if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){if(navm){novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')'}else{novoel.style.opacity=i3GEO.barraDeBotoes.OPACIDADE/100}}}document.body.appendChild(novoel);if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO)i3GEO.util.mudaCursor(i3GEO.configura.cursores,"contexto",idconteudonovo,i3GEO.configura.locaplic);if($i(idconteudo)){$i(idconteudonovo+"_").innerHTML=$i(idconteudo).innerHTML;$i(idconteudo).innerHTML="";if(i3GEO.barraDeBotoes.AUTOALTURA){var elementos=$i(idconteudonovo+"_").getElementsByTagName("img");if(elementos[0].id=="sobeferramentas"){try{var elementos=$i(idconteudonovo+"_").getElementsByTagName("div");var alturadisponivel=i3GEO.parametros.h-4;var numerobotoes=parseInt(alturadisponivel/30);var nelementos=elementos.length;var i=0;do{elementos[i].style.display="none";var i=i+1}while(i<nelementos)var i=0;do{elementos[i].style.display="inline";var i=i+1}while(i<numerobotoes)}catch(e){}if(i<=numerobotoes){if($i("sobeferramentas")){$i("sobeferramentas").style.display="none"}if($i("desceferramentas")){$i("desceferramentas").style.display="none"}}}}}YAHOO.namespace("janelaBotoes.xp");if(i3GEO.barraDeBotoes.AUTOALTURA==false)YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false});else YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{height:i3GEO.parametros.h-4,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false});if((barraZoom==true)&&$i("img")){i3GEO.barraDeBotoes.ativaBarraDeZoom();verticalSlider=YAHOO.widget.Slider.getVertSlider("vertBGDiv","vertHandleDivZoom",0,70);verticalSlider.onChange=function(offsetFromStart){g_fatordezoom=(offsetFromStart-35)/5};verticalSlider.setValue(35,true);if($i("vertBGDiv")){$i("vertBGDiv").onmouseup=function(){i3GEO.navega.aplicaEscala(i3GEO.configura.locaplic,i3GEO.configura.sid,i3geo_ns)g_fatordezoom=0;verticalSlider.setValue(35,true)}}if($i("vertHandleDivZoom")){$i("vertHandleDivZoom").onmousedown=function(){i3GEO.barraDeBotoes.BOTAOCLICADO='slidezoom';if(!$i("imgtemp")){iclone=document.createElement('IMG');iclone.style.position="absolute";iclone.id="imgtemp";iclone.style.border="1px solid blue";$i("img").parentNode.appendChild(iclone)}var iclone=$i("imgtemp");var corpo=$i("img");if(!corpo){return}iclone.src=corpo.src;iclone.style.width=i3GEO.parametros.w;iclone.style.heigth=i3GEO.parametros.h;iclone.style.top=corpo.style.top;iclone.style.left=corpo.style.left;$i("img").style.display="none";iclone.style.display="block"}}if($i("vertHandleDivZoom")){$i("vertHandleDivZoom").onmousemove=function(){var iclone=$i("imgtemp");var corpo=$i("img");if(!corpo){return}var nw=i3GEO.parametros.w;var nh=i3GEO.parametros.h;var nt=0;var nl=0;i3geo_ns=parseInt(i3GEO.parametros.mapscale);if((g_fatordezoom>0)&&(g_fatordezoom<7)){g_fatordezoom=g_fatordezoom+1;var velhoh=parseInt(iclone.style.height);var velhow=parseInt(iclone.style.width);var nh=i3GEO.parametros.h/g_fatordezoom;var nw=i3GEO.parametros.w/g_fatordezoom;var t=parseInt(iclone.style.top);var l=parseInt(iclone.style.left);var nt=t+((velhoh-nh)*.5);var nl=l+((velhow-nw)*.5);var fatorEscala=nh/i3GEO.parametros.h;i3geo_ns=parseInt(i3GEO.parametros.mapscale/fatorEscala)}if((g_fatordezoom<0)&&(g_fatordezoom>-7)){g_fatordezoom=g_fatordezoom-1;var velhoh=parseInt(iclone.style.height);var velhow=parseInt(iclone.style.width);var nh=i3GEO.parametros.h*g_fatordezoom*-1;var nw=i3GEO.parametros.w*g_fatordezoom*-1;var t=parseInt(iclone.style.top);var l=parseInt(iclone.style.left);var nt=t-((nh-velhoh)*.5);var nl=l-((nw-velhow)*.5);var fatorEscala=nh/i3GEO.parametros.h;i3geo_ns=parseInt(i3GEO.parametros.mapscale/fatorEscala)}if(iclone){iclone.style.width=nw;iclone.style.height=nh;if(iclone.style.pixelTop){iclone.style.pixelTop=nt}else{iclone.style.top=nt+"px"}if(iclone.style.pixelLeft){iclone.style.pixelLeft=nl}else{iclone.style.left=nl+"px"}}if($i("i3geo_escalanum")){$i("i3geo_escalanum").value=i3geo_ns}}}}YAHOO.janelaBotoes.xp.panel.render();if(i3GEO.barraDeBotoes.AUTOALTURA==true){var y=y-i3GEO.interface.BARRABOTOESTOP+2;var x=x-3}YAHOO.janelaBotoes.xp.panel.moveTo(x,y);if($i("sobeferramentas")){$i("sobeferramentas").onclick=function(){var elementos=$i(idconteudonovo+"_").getElementsByTagName("div");var nelementos=elementos.length;if(elementos[0].style.display=="inline"&&elementos[0].id==""){return}if(elementos[1].style.display=="inline"&&elementos[1].id==""){return}if(nelementos>0){var mostra=elementos[0];var i=0;do{if(elementos[i].style){if(elementos[i].style.display=="inline"&&elementos[i].id==""){break}if(elementos[i].style.display=="none"&&elementos[i].id==""){var mostra=elementos[i]}}var i=i+1}while(i<nelementos)mostra.style.display="inline";var i=nelementos-1;var mostra=elementos[i];do{if(elementos[i].style){if(elementos[i].style.display=="inline"){var mostra=elementos[i];break}}var i=i-1}while(i>=0)mostra.style.display="none"}}}if($i("desceferramentas")){$i("desceferramentas").onclick=function(){var tipo="inline";if($i(idconteudonovo+"_")){var elementos=$i(idconteudonovo+"_").getElementsByTagName("div");if(elementos[elementos.length-1].style.display==tipo){return}var nelementos=elementos.length;if(nelementos>0){var i=0;do{var e=elementos[i];if(e.style){if((e.style.display=="block")||(e.style.display=="inline")||(e.style.display=="")){if(e.id==""){e.style.display="none";break}}}var i=i+1}while(i<nelementos)var i=nelementos-1;var mostra=elementos[i];do{var e=elementos[i];if(e.style){if(e.style.display==tipo){break}if(e.style.display=="none"){var mostra=e}}var i=i-1}while(i>=0)mostra.style.display=tipo}}}}i3GEO.barraDeBotoes.BARRAS.push(YAHOO.janelaBotoes.xp.panel);YAHOO.janelaBotoes.xp.panel.show();if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO){i3GEO.barraDeBotoes.ativaMenuContexto(idconteudonovo)}},ativaMenuContexto:function(idbarra){function executar(a,b,c){eval(c)};var oFieldContextMenuItemData=[{text:"<b>Fechar</b>"},{text:"Fechar barra",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.fecha('"+idbarra+"')"}},{text:"Barra normal",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=false;i3GEO.barraDeBotoes.PERMITEFECHAR=true;i3GEO.barraDeBotoes.PERMITEDESLOCAR=true;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Barra fixa",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=true;i3GEO.barraDeBotoes.PERMITEFECHAR=false;i3GEO.barraDeBotoes.PERMITEDESLOCAR=false;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Remove transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=false;"}},{text:"Ativa transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=true;"}}];var oFieldContextMenu=new YAHOO.widget.ContextMenu("contexto_"+idbarra,{trigger:idbarra,itemdata:oFieldContextMenuItemData,lazyload:true});var onFieldMenuRender=function(){eval("var id = 'contexto_"+idbarra+"'");$i(id).style.zIndex=50000};oFieldContextMenu.subscribe("render",onFieldMenuRender)},reativa:function(indice){if(arguments.length==1)i3GEO.barraDeBotoes.BARRAS[indice].show();else{var n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){i3GEO.barraDeBotoes.BARRAS[i].show()}}},recria:function(id){var n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){if(i3GEO.barraDeBotoes.BARRAS[i].id==id){var temp=$i("contexto_"+id);if(temp){temp.parentNode.removeChild(temp)}var novoel=document.createElement("div");novoel.id="barraTemporaria"+i;novoel.innerHTML=$i(i3GEO.barraDeBotoes.BARRAS[i].id+"_").innerHTML;document.body.appendChild(novoel);var barraZoom=false;var temp=$i("vertMaisZoom");if(temp){if(navm)var temp=temp.parentNode;else var temp=temp.parentNode.parentNode;if(temp.id==id){var barraZoom=true}}var x=parseInt($i(i3GEO.barraDeBotoes.BARRAS[i].id+"_c").style.left);var y=parseInt($i(i3GEO.interface.IDCORPO).style.top)+10;i3GEO.barraDeBotoes.BARRAS[i].destroy();i3GEO.barraDeBotoes.inicializaBarra(novoel.id,i3GEO.barraDeBotoes.BARRAS[i].id+"x",barraZoom,x,y)}}i3GEO.barraDeBotoes.ativaBotoes()},fecha:function(id){var n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){if(i3GEO.barraDeBotoes.BARRAS[i].id==id){$i(id+"_c").style.visibility="hidden"}}}};