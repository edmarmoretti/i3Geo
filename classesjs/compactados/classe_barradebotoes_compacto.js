if(typeof(i3GEO)=='undefined'){i3GEO=[]}i3GEO.barraDeBotoes={SOICONES:false,AUTOALTURA:false,TRANSICAOSUAVE:true,OPACIDADE:65,PERMITEFECHAR:true,PERMITEDESLOCAR:true,ATIVAMENUCONTEXTO:false,AUTO:false,LISTABOTOES:i3GEO.configura.funcoesBotoes.botoes,INCLUIBOTAO:{identifica:true,identificaBalao:true,mede:true,area:true,imprimir:true,reinicia:true,exten:true,referencia:true,inserexy:true,textofid:true,selecao:true,google:true,buscafotos:true,wiki:true,metar:true,lentei:true,confluence:true,inseregrafico:true,v3d:true},TEMPLATEBOTAO:"",BOTAOPADRAO:"pan",COMPORTAMENTO:"padrao",BARRAS:[],BOTAOCLICADO:"",ativaIcone:function(icone){{console.info("i3GEO.barraDeBotoes.ativaIcone()")}if(i3GEO.Interface.ATUAL==="openlayers"){try{OLzoom.deactivate()}catch(e){{console.error(e)}}}var estilo,temp,ist,cor,ko;i3GEO.barraDeBotoes.BOTAOCLICADO=icone;ko=i3GEO.barraDeBotoes.LISTABOTOES.length-1;if(i3GEO.barraDeBotoes.COMPORTAMENTO=="padrao"){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(i3GEO.barraDeBotoes.LISTABOTOES[ko].tipo=="dinamico"&&temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white';ist.borderLeftColor='rgb(50,50,50)';ist.borderBottomColor='rgb(50,50,50)'}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='white';estilo.borderWidth="1px"}}}if(i3GEO.barraDeBotoes.COMPORTAMENTO=="destacado"){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;ist.borderWidth="1px";ist.borderColor='white'}}while(ko--)}if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}}}if(i3GEO.barraDeBotoes.COMPORTAMENTO=="laranja"||i3GEO.barraDeBotoes.COMPORTAMENTO=="vermelho"||i3GEO.barraDeBotoes.COMPORTAMENTO=="cinza"){if(ko>=0){do{temp=$i(i3GEO.barraDeBotoes.LISTABOTOES[ko].iddiv);if(temp){ist=temp.style;if(i3GEO.barraDeBotoes.SOICONES===false){ist.borderWidth="1px";ist.borderColor='white';ist.backgroundColor='white'}else{ist.backgroundColor=''}}}while(ko--)}if(i3GEO.barraDeBotoes.COMPORTAMENTO=="laranja"){cor="orange"}if(i3GEO.barraDeBotoes.COMPORTAMENTO=="vermelho"){cor="red"}if(i3GEO.barraDeBotoes.COMPORTAMENTO=="cinza"){cor="gray"}if($i(icone)){estilo=$i(icone).style;if(i3GEO.barraDeBotoes.SOICONES===false){estilo.borderColor='black';estilo.borderWidth="1px"}estilo.backgroundColor=cor}}},ativaBotoes:function(padrao){var l,b;if(arguments.length===0){padrao=i3GEO.barraDeBotoes.BOTAOPADRAO}i3GEO.barraDeBotoes.BOTAOCLICADO=padrao;l=i3GEO.barraDeBotoes.LISTABOTOES;b=l.length-1;if(b>=0){do{if($i(l[b].iddiv)){if(l[b].conteudo){eval('$i(l[b].iddiv).innerHTML = "'+l[b].conteudo+'"')}if(l[b].dica){eval('$i("'+l[b].iddiv+'").onmouseover = function(){i3GEO.ajuda.mostraJanela("'+l[b].dica+'","");}');eval('$i("'+l[b].iddiv+'").onmouseout = function(){i3GEO.ajuda.mostraJanela("");};')}if(l[b].funcaoonclick){$i(l[b].iddiv).onclick=l[b].funcaoonclick;if(l[b].iddiv==padrao){l[b].funcaoonclick()}}if(l[b].constroiconteudo){eval(l[b].constroiconteudo)}}}while(b--)}if(padrao==""){i3GEO.barraDeBotoes.ativaIcone("")}},inicializaBarra:function(idconteudo,idconteudonovo,barraZoom,x,y){if(i3GEO.barraDeBotoes.TEMPLATEBOTAO===""){i3GEO.barraDeBotoes.TEMPLATEBOTAO="<div style='display:inline;background-color:rgb(250,250,250);'><p style='font-size:2px;'>&nbsp;</p><img src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='$$'/></div>"}var tipo,mostra,numerobotoes=0,i,temp,elementos,nelementos=0,e,wj,recuo,novoel,alturadisponivel,n,chaves,re;if(i3GEO.barraDeBotoes.AUTO===true){if(idconteudo==="barraDeBotoes1"){novoel=document.createElement("div");novoel.id="barraDeBotoes1";temp='<table style="width:100%"><caption style="text-align:center">&nbsp;</caption><tr><td style="background-color:rgb(250,250,250);"><div ID="historicozoom" ></div></td></tr><tr><td style=height:5px ></td></tr></table>'+"<div style='display:inline;background-color:rgb(250,250,250);'>"+"<p style='font-size:4px;'>&nbsp;</p>"+'<img title="zoom" alt="zoom" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="zoomli"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+"<p style='font-size:4px;'>&nbsp;</p>"+'<img title="desloca" alt="desloca" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="pan"/>'+"</div>"+"<div style='display:inline;background-color:rgb(250,250,250);'>"+"<p style='font-size:4px;'>&nbsp;</p>"+'<img title="geral" alt="geral" src="'+i3GEO.configura.locaplic+'/imagens/branco.gif" id="zoomtot"/>'+"</div>";novoel.innerHTML=temp;document.body.appendChild(novoel)}if(idconteudo==="barraDeBotoes2"){novoel=document.createElement("div");novoel.id="barraDeBotoes2";temp="<table style='width:100%'><caption style='text-align:center'>&nbsp;</caption>"+"	<tr><td style='background-color:rgb(250,250,250);'><img title='' alt='sobe' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='sobeferramentas'/></td></tr>"+"	</table>";chaves=i3GEO.util.listaChaves(i3GEO.barraDeBotoes.INCLUIBOTAO);n=chaves.length;for(i=0;i<n;i++){if(eval("i3GEO.barraDeBotoes.INCLUIBOTAO."+chaves[i])==true){temp+=i3GEO.barraDeBotoes.TEMPLATEBOTAO.replace("$$",chaves[i])}}temp+="  <table style='width:100%;'><tr><td style='background-color:rgb(250,250,250);'><p style='font-size:2px;'>&nbsp;</p><img title='desce' alt='' src='"+i3GEO.configura.locaplic+"/imagens/branco.gif' id='desceferramentas'/></td></tr></table>";novoel.innerHTML=temp;document.body.appendChild(novoel)}}wj="36px";recuo="0px";novoel=document.createElement("div");novoel.id=idconteudonovo;novoel.style.display="block";if(i3GEO.barraDeBotoes.SOICONES===false){novoel.style.border="1px solid gray";novoel.style.background="white"}if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){if(navm){novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')'}else{novoel.style.opacity=i3GEO.barraDeBotoes.OPACIDADE/100}}else{if(navm){novoel.style.filter='alpha(opacity=90)'}else{novoel.style.opacity=0.85}}temp="";if(barraZoom===true){temp+=i3GEO.navega.barraDeZoom.cria()}temp+='<div id="'+idconteudonovo+'_" style="left:'+recuo+';top:-6px;"  ></div>';novoel.innerHTML=temp;novoel.onmouseover=function(){if($i("i3geo_rosa")){$i("i3geo_rosa").style.display="none"}if(i3GEO.barraDeBotoes.OPACIDADE){if(navm){novoel.style.filter='alpha(opacity=90)'}else{novoel.style.opacity=0.85}}};novoel.onmouseout=function(){if(i3GEO.barraDeBotoes.TRANSICAOSUAVE){if(navm){novoel.style.filter='alpha(opacity='+i3GEO.barraDeBotoes.OPACIDADE+')'}else{novoel.style.opacity=i3GEO.barraDeBotoes.OPACIDADE/100}}};document.body.appendChild(novoel);if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO){i3GEO.util.mudaCursor(i3GEO.configura.cursores,"contexto",idconteudonovo,i3GEO.configura.locaplic)}if($i(idconteudo)){$i(idconteudonovo+"_").innerHTML=$i(idconteudo).innerHTML;$i(idconteudo).innerHTML="";alturadisponivel=i3GEO.parametros.h-4;numerobotoes=parseInt(alturadisponivel/35,10);elementos=$i(idconteudonovo+"_").getElementsByTagName("img");nelementos=elementos.length;if(i3GEO.barraDeBotoes.AUTOALTURA===true||(numerobotoes<nelementos)){if(elementos[0].id=="sobeferramentas"){try{elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;i=0;do{elementos[i].style.display="none";i=i+1}while(i<nelementos);i=0;do{elementos[i].style.display="inline";i=i+1}while(i<numerobotoes-1)}catch(e){}if(elementos.length<=numerobotoes){if($i("sobeferramentas")){$i("sobeferramentas").style.display="none"}if($i("desceferramentas")){$i("desceferramentas").style.display="none"}}}}}YAHOO.namespace("janelaBotoes.xp");if(i3GEO.barraDeBotoes.AUTOALTURA===false||barraZoom===true||(elementos.length>numerobotoes)){YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}else{YAHOO.janelaBotoes.xp.panel=new YAHOO.widget.Panel(idconteudonovo,{height:i3GEO.parametros.h-4,width:wj,fixedcenter:false,constraintoviewport:false,underlay:"none",close:i3GEO.barraDeBotoes.PERMITEFECHAR,visible:true,draggable:i3GEO.barraDeBotoes.PERMITEDESLOCAR,modal:false,iframe:false})}if(i3GEO.barraDeBotoes.SOICONES===true){temp=$i("i3geo_barra2");if(temp){temp.style.borderWidth="0 0 0 0"}temp=$i("i3geo_barra1");if(temp){temp.style.borderWidth="0 0 0 0"}}if((barraZoom===true)&&i3GEO.Interface.ATUAL=="padrao"){i3GEO.navega.barraDeZoom.ativa()}YAHOO.janelaBotoes.xp.panel.render();if(i3GEO.barraDeBotoes.AUTOALTURA===true){y=y-i3GEO.Interface.BARRABOTOESTOP+2;x=x-3}YAHOO.janelaBotoes.xp.panel.moveTo(x,y);if($i("sobeferramentas")){$i("sobeferramentas").onclick=function(){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");nelementos=elementos.length;if(elementos[0].style.display=="inline"&&elementos[0].id===""){return}if(nelementos>0){mostra=elementos[0];i=0;do{if(elementos[i].style){if(elementos[i].style.display==="inline"&&elementos[i].id===""){break}if(elementos[i].style.display==="none"&&elementos[i].id===""){mostra=elementos[i]}}i=i+1}while(i<nelementos);mostra.style.display="inline";i=nelementos+1;mostra=elementos[i];do{if(elementos[i]){if(elementos[i].style){if(elementos[i].style.display==="inline"){mostra=elementos[i];break}}}i=i-1}while(i>=0);mostra.style.display="none"}}}if($i("desceferramentas")){$i("desceferramentas").onclick=function(){tipo="inline";if($i(idconteudonovo+"_")){elementos=$i(idconteudonovo+"_").getElementsByTagName("div");if(elementos[elementos.length-1].style.display==tipo){return}nelementos=elementos.length;if(nelementos>0){i=0;do{e=elementos[i];if(e.style){if((e.style.display=="block")||(e.style.display=="inline")||(e.style.display==="")){if(e.id===""){e.style.display="none";break}}}i=i+1}while(i<nelementos);i=nelementos-1;var mostra=elementos[i];do{e=elementos[i];if(e.style){if(e.style.display==tipo){break}if(e.style.display=="none"){mostra=e}}i=i-1}while(i>=0);mostra.style.display=tipo}}}}i3GEO.barraDeBotoes.BARRAS.push(YAHOO.janelaBotoes.xp.panel);YAHOO.janelaBotoes.xp.panel.show();if(i3GEO.barraDeBotoes.ATIVAMENUCONTEXTO){i3GEO.barraDeBotoes.ativaMenuContexto(idconteudonovo)}if($i(idconteudonovo+"_h")){$i(idconteudonovo+"_h").className="hd2"}},ativaMenuContexto:function(idbarra){var oFieldContextMenuItemData,oFieldContextMenu,onFieldMenuRender,id;function executar(a,b,c){eval(c)}oFieldContextMenuItemData=[{text:"&nbsp;<span class='container-close'></span>"},{text:"Fechar barra",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.fecha('"+idbarra+"')"}},{text:"Barra normal",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=false;i3GEO.barraDeBotoes.PERMITEFECHAR=true;i3GEO.barraDeBotoes.PERMITEDESLOCAR=true;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Barra fixa",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.AUTOALTURA=true;i3GEO.barraDeBotoes.PERMITEFECHAR=false;i3GEO.barraDeBotoes.PERMITEDESLOCAR=false;i3GEO.barraDeBotoes.recria('"+idbarra+"')"}},{text:"Remove transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=false;"}},{text:"Ativa transi��o",onclick:{fn:executar,obj:"i3GEO.barraDeBotoes.TRANSICAOSUAVE=true;"}}];oFieldContextMenu=new YAHOO.widget.ContextMenu("contexto_"+idbarra,{trigger:idbarra,itemdata:oFieldContextMenuItemData,lazyload:true});onFieldMenuRender=function(){eval("var id = 'contexto_"+idbarra+"'");$i(id).style.zIndex=50000};oFieldContextMenu.subscribe("render",onFieldMenuRender)},reativa:function(indice){var n,i;if(arguments.length==1){i3GEO.barraDeBotoes.BARRAS[indice].show()}else{n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){i3GEO.barraDeBotoes.BARRAS[i].show()}}},recria:function(id){var n,temp,novoel,barraZoom,x,y;n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){if(i3GEO.barraDeBotoes.BARRAS[i].id==id){temp=$i("contexto_"+id);if(temp){temp.parentNode.removeChild(temp)}novoel=document.createElement("div");novoel.id="barraTemporaria"+i;novoel.innerHTML=$i(i3GEO.barraDeBotoes.BARRAS[i].id+"_").innerHTML;document.body.appendChild(novoel);barraZoom=false;temp=$i("vertMaisZoom");if(temp){if(navm){temp=temp.parentNode}else{temp=temp.parentNode.parentNode}if(temp.id==id){barraZoom=true}}x=parseInt($i(i3GEO.barraDeBotoes.BARRAS[i].id+"_c").style.left,10);y=parseInt($i(i3GEO.Interface.IDCORPO).style.top,10)+10;i3GEO.barraDeBotoes.BARRAS[i].destroy();i3GEO.barraDeBotoes.inicializaBarra(novoel.id,i3GEO.barraDeBotoes.BARRAS[i].id+"x",barraZoom,x,y)}}i3GEO.barraDeBotoes.ativaBotoes()},fecha:function(id){var n=i3GEO.barraDeBotoes.BARRAS.length;for(i=0;i<n;i++){if(i3GEO.barraDeBotoes.BARRAS[i].id==id){$i(id+"_c").style.visibility="hidden"}}}};