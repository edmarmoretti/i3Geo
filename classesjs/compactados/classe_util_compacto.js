if(typeof(i3GEO)=='undefined'){i3GEO=new Array()}navm=false;navn=false;var app=navigator.appName.substring(0,1);if(app=='N')navn=true;else navm=true;g_operacao="";g_tipoacao="zoomli";g_postpx="px";g_tipotop="top";g_tipoleft="left";if(navm){g_postpx="";g_tipotop="pixelTop";g_tipoleft="pixelLeft"}$i=function(id){return document.getElementById(id)};Array.prototype.remove=function(s){try{var i=this.indexOf(s);if(i!=-1)this.splice(i,1)}catch(e){}};i3GEO.util={PINS:new Array(),BOXES:new Array(),escapeURL:function(sUrl){var sUrl=escape(sUrl);var re=new RegExp("%3F","g");var sUrl=sUrl.replace(re,'?');var re=new RegExp("%3D","g");var sUrl=sUrl.replace(re,'=');var re=new RegExp("%26","g");var sUrl=sUrl.replace(re,'&');return sUrl},insereCookie:function(nome,valor){document.cookie=nome+"="+valor+";path=/"},pegaCookie:function(nome){var cookies=document.cookie;var i=cookies.indexOf(nome);if(i==-1){return null}var fim=cookies.indexOf(";",i);if(fim==-1){var fim=cookies.length}return(unescape(cookies.substring(i,fim))).split("=")[1]},listaChaves:function(obj){var keys=[];for(var key in obj){keys.push(key)}return keys},criaBotaoAplicar:function(nomeFuncao,titulo,classe,obj){try{clearTimeout(tempoBotaoAplicar)}catch(e){};tempoBotaoAplicar=eval("setTimeout('"+nomeFuncao+"\(\)',(i3GEO.configura.tempoAplicar))");autoRedesenho("reinicia");if(arguments.length==1){var titulo="Aplicar"}if(arguments.length==1||arguments.length==2){var classe="i3geoBotaoAplicar"}if(!document.getElementById("i3geo_aplicar")){var novoel=document.createElement("input");novoel.id='i3geo_aplicar';novoel.type='button';novoel.value=titulo;novoel.style.cursor="pointer";novoel.style.fontSize="10px";novoel.style.zIndex=15000;novoel.style.position="absolute";novoel.style.display="none";novoel.onmouseover=function(){this.style.display="block"};novoel.onmouseout=function(){this.style.display="none"};novoel.className=classe;document.body.appendChild(novoel)}else{var novoel=document.getElementById("i3geo_aplicar")}novoel.onclick=function(){clearTimeout(i3GEO.parametros.tempo);i3GEO.parametros.tempo="";this.style.display='none';eval(nomeFuncao+"\(\)")};if(arguments.length==4){novoel.style.display="block";var xy=YAHOO.util.Dom.getXY(obj);YAHOO.util.Dom.setXY(novoel,xy)}return(novoel)},arvore:function(titulo,onde,obj){if(!$i(onde)){return}var currentIconMode;try{arvore=new YAHOO.widget.TreeView(onde);root=arvore.getRoot();var tempNode=new YAHOO.widget.TextNode('',root,false);tempNode.isLeaf=false}catch(e){}var titulo="<table><tr><td><b>"+titulo+"</b></td><td></td></tr></table>";var d={html:titulo};var tempNode=new YAHOO.widget.HTMLNode(d,root,true,true);var c=obj.propriedades.length;for(var i=0,j=c;i<j;i++){var linha=obj.propriedades[i];var conteudo="<a href='#' onclick='"+linha.url+"'>"+$trad(linha.text)+"</a>";var d={html:conteudo};var temaNode=new YAHOO.widget.HTMLNode(d,tempNode,false,true)}arvore.collapseAll();arvore.draw()},removeAcentos:function(palavra){var re=/�|�|�|�/gi;palavra=palavra.replace(re,"a");var re=/�/gi;palavra=palavra.replace(re,"e");var re=/�/gi;palavra=palavra.replace(re,"i");var re=/�|�/gi;palavra=palavra.replace(re,"o");var re=/�/gi;palavra=palavra.replace(re,"c");var re=/�/gi;palavra=palavra.replace(re,"u");return(palavra)},protocolo:function(){var u=window.location.href;var u=u.split(":");return(u[0])},pegaPosicaoObjeto:function(obj){if(obj){if(!obj.style){return[0,0]}if(obj.style.position=="absolute"){return[(parseInt(obj.style.left)),(parseInt(obj.style.top))]}else{var curleft=curtop=0;if(obj){if(obj.offsetParent){do{curleft+=obj.offsetLeft-obj.scrollLeft;curtop+=obj.offsetTop-obj.scrollTop}while(obj=obj.offsetParent)}}return[curleft+document.body.scrollLeft,curtop+document.body.scrollTop]}}else{return[0,0]}},pegaElementoPai:function(e){var targ;if(!e){var e=window.event}if(e.target){targ=e.target}else if(e.srcElement){targ=e.srcElement}if(targ.nodeType==3){targ=targ.parentNode}var tname;tparent=targ.parentNode;return(tparent)},mudaCursor:function(cursores,tipo,idobjeto,locaplic){var o=document.getElementById(idobjeto);var c=eval("cursores."+tipo+".ie");if(c=="default"||c=="pointer"||c=="crosshair"||c=="help"||c=="move"||c=="text")o.style.cursor=c;else{if(o){if(navm){o.style.cursor="URL(\""+locaplic+eval("cursores."+tipo+".ie")+"\"),auto"}else{o.style.cursor="URL(\""+locaplic+eval("cursores."+tipo+".ff")+"\"),auto"}}}},criaBox:function(id){if(arguments.length==0){var id="boxg"}if(!$i(id)){var novoel=document.createElement("div");novoel.id=id;novoel.style.zIndex=1;novoel.innerHTML='<font face="Arial" size=0></font>';document.body.appendChild(novoel);novoel.onmouseover=function(){novoel.style.display='none'};novoel.onmouseout=function(){novoel.style.display='block'};i3GEO.util.BOXES.push(id)}else $i(id).style.display="block"},escondeBox:function(){var l=i3GEO.util.BOXES.length;for(i=0;i<l;i++){if($i(i3GEO.util.BOXES[i])){$i(i3GEO.util.BOXES[i]).style.display="none"}}},criaPin:function(id,imagem,w,h){if(arguments.length<1||id==""){var id="boxpin"}if(arguments.length<2||imagem==""){var imagem=i3GEO.configura.locaplic+'/imagens/marker.png'}if(arguments.length<3||w==""){var w="21px"}if(arguments.length<4||h==""){var h="25px"}if(!$i(id)){var novoel=document.createElement("img");novoel.id=id;novoel.style.zIndex=10000;novoel.style.position="absolute";novoel.style.width=w;novoel.style.height=h;novoel.src=imagem;if(id=="boxpin"){novoel.onmouseover=function(){$i("boxpin").style.display="none"}}document.body.appendChild(novoel);i3GEO.util.PINS.push(id)}},posicionaImagemNoMapa:function(id){var i=$i(id);var mx=parseInt(i.style.width)/2;var my=parseInt(i.style.height)/2;i.style.position="absolute";i.style.top=objposicaocursor.telay-my;i.style.left=objposicaocursor.telax-mx},escondePin:function(){var l=i3GEO.util.PINS.length;for(i=0;i<l;i++){if($i(i3GEO.util.PINS[i])){$i(i3GEO.util.PINS[i]).style.display="none"}}},$im:function(g){return i3GEO.configura.locaplic+"/imagens/visual/"+i3GEO.configura.visual+"/"+g},$inputText:function(idPai,larguraIdPai,idInput,titulo,digitos,valor){if(idPai!=""){if(larguraIdPai!=""){$i(idPai).style.width=larguraIdPai+"px"}$i(idPai).style.padding="3";$i(idPai).style.textAlign="center";$i(idPai).onmouseover=function(){this.className="digitarMouseover"};$i(idPai).onmouseout=function(){this.className=""}}var i="<input onmouseover='javascript:this.className=\"digitarOver\";' onmouseout='javascript:this.className=\"digitar\";' onclick='javascript:this.className=\"digitarMouseclick\";' id="+idInput+" title='"+titulo+"' type=text size="+digitos+" class=digitar value='"+valor+"' />";return i},$top:function(id,valor){if(document.getElementById(id).style){if(document.getElementById(id).style.pixelTop){document.getElementById(id).style.pixelTop=valor}else{document.getElementById(id).style.top=valor+"px"}}},$left:function(id,valor){if(document.getElementById(id).style){if(document.getElementById(id).style.pixelLeft){document.getElementById(id).style.pixelLeft=valor}else{document.getElementById(id).style.left=valor+"px"}}},insereMarca:{CONTAINER:new Array(),cria:function(xi,yi,funcaoOnclick,container){try{if(i3GEO.util.insereMarca.CONTAINER.toString().search(container)<0)i3GEO.util.insereMarca.CONTAINER.push(container);if(!$i(container)){var novoel=document.createElement("div");novoel.id=container;var i=novoel.style;i.position="absolute";i.top=parseInt($i("img").style.top);i.left=parseInt($i("img").style.left);document.body.appendChild(novoel)}var container=$i(container);var novoel=document.createElement("div");var i=novoel.style;i.position="absolute";i.zIndex=2000;i.top=(yi-4)+"px";i.left=(xi-4)+"px";i.width="4px";i.height="4px";var novoimg=document.createElement("img");if(funcaoOnclick!=""){novoimg.onclick=funcaoOnclick}else{novoimg.onclick=function(){i3GEO.util.insereMarca.limpa()}}novoimg.src=i3GEO.configura.locaplic+"/imagens/dot1.gif";with(novoimg.style){width="6px";height="6px";zIndex=2000}novoel.appendChild(novoimg);container.appendChild(novoel);if(i3GEO.eventos.NAVEGAMAPA.toString().search("i3GEO.util.insereMarca.limpa()")<0){i3GEO.eventos.NAVEGAMAPA.push("i3GEO.util.insereMarca.limpa()")}}catch(e){alert("Ocorreu um erro. inseremarca"+e)}},limpa:function(){try{var n=i3GEO.util.insereMarca.CONTAINER.length;for(i=0;i<n;i++){if($i(i3GEO.util.insereMarca.CONTAINER[i]))$i(i3GEO.util.insereMarca.CONTAINER[i]).innerHTML=""}i3GEO.util.insereMarca.CONTAINER=new Array();i3GEO.eventos.NAVEGAMAPA.remove("i3GEO.util.insereMarca.limpa()")}catch(e){}}},adicionaSHP:function(path){i3GEO.janela.abreAguarde("i3GEO.atualiza",$trad("o1"));var temp=path.split(".");if((temp[1]=="SHP")||(temp[1]=="shp")){i3GEO.php.adicionaTemaSHP(i3GEO.atualiza,path)}else{i3GEO.php.adicionaTemaIMG(i3GEO.atualiza,path)}},abreCor:function(janela,elemento){i3GEO.janela.cria("400","240",i3GEO.configura.locaplic+"/ferramentas/colorpicker/index.htm?doc="+janela+"&elemento="+elemento,"","","Cor","i3geo_janelaCor",true)},ajaxhttp:function(){try{var objhttp1=new XMLHttpRequest()}catch(ee){try{var objhttp1=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{var objhttp1=new ActiveXObject("Microsoft.XMLHTTP")}catch(E){var objhttp1=false}}}return(objhttp1)},ajaxexecASXml:function(programa,funcao){if(programa.search("http")==0){var h=window.location.host;if(programa.search(h)<0){alert("OOps! Nao e possivel chamar um XML de outro host.\nContacte o administrador do sistema.\nConfigure corretamente o ms_configura.php");return}}var ohttp=i3GEO.util.ajaxhttp();ohttp.open("GET",programa,true);var retorno="";ohttp.onreadystatechange=function(){if(ohttp.readyState==4){var retorno=ohttp.responseText;if(retorno!=undefined){if(document.implementation.createDocument){var parser=new DOMParser();var dom=parser.parseFromString(retorno,"text/xml")}else{var dom=new ActiveXObject("Microsoft.XMLDOM");dom.async="false";dom.load(programa)}}else{var dom="erro"}if(funcao!="volta"){eval(funcao+'(dom)')}else{return dom}}};ohttp.send(null)},aparece:function(id,tempo,intervalo){var n=parseInt(tempo/intervalo);var tempo=n*intervalo;var intervalo=(intervalo*100)/tempo;var obj=$i(id);var opacidade=0;if(navm){obj.style.filter='alpha(opacity=0)'}else{obj.style.opacity=0}obj.style.display="block";var fadei=function(){opacidade+=intervalo;if(navm){obj.style.filter='alpha(opacity='+opacidade+')'}else{obj.style.opacity=opacidade/100}if(opacidade<100)var tempoFade=setTimeout(fadei,tempo);else{clearTimeout(tempoFadei);if(navm){obj.style.filter='alpha(opacity=100)'}else{obj.style.opacity=1}}};var tempoFadei=setTimeout(fadei,tempo)},desaparece:function(id,tempo,intervalo,removeobj){var n=parseInt(tempo/intervalo);var tempo=n*intervalo;var intervalo=(intervalo*100)/tempo;var obj=$i(id);var opacidade=100;if(navm){obj.style.filter='alpha(opacity=100)'}else{obj.style.opacity=1}obj.style.display="block";var fade=function(){opacidade-=intervalo;if(navm){obj.style.filter='alpha(opacity='+opacidade+')'}else{obj.style.opacity=opacidade/100}if(opacidade>0){var tempoFade=setTimeout(fade,tempo)}else{clearTimeout(tempoFade);obj.style.display="none";if(navm){obj.style.filter='alpha(opacity=100)'}else{obj.style.opacity=1}if(removeobj){var p=obj.parentNode;if(p)p.removeChild(obj)}}};var tempoFade=setTimeout(fade,tempo)},wkt2ext:function(wkt,tipo){var tipo=tipo.toLowerCase();ext=false;if(tipo=="polygon"){try{var re=new RegExp("POLYGON","g");var wkt=wkt.replace(re,"");var wkt=wkt.split("(")[2].split(")")[0];var wkt=wkt.split(",");var x=new Array();var y=new Array();for(w=0;w<wkt.length;w++){var temp=wkt[w].split(" ");x.push(temp[0]);y.push(temp[1])}x.sort(i3GEO.util.sortNumber);var xMin=x[0];var xMax=x[(x.length)-1];y.sort(i3GEO.util.sortNumber);var yMin=y[0];var yMax=y[(y.length)-1];return xMin+" "+yMin+" "+xMax+" "+yMax}catch(e){}}return ext},sortNumber:function(a,b){return a-b}};$im=function(g){return i3GEO.util.$im(g)};$inputText=function(idPai,larguraIdPai,idInput,titulo,digitos,valor){return i3GEO.util.$inputText(idPai,larguraIdPai,idInput,titulo,digitos,valor)};$top=function(id,valor){i3GEO.util.$top(id,valor)};$left=function(id,valor){i3GEO.util.$left(id,valor)};