if(typeof(i3GEO)==='undefined'){i3GEO=[]}i3GEO.desenho={richdraw:"",criaContainerRichdraw:function(){pontosdistobj={xpt:[],ypt:[],dist:[],xtela:[],ytela:[],ximg:[],yimg:[],linhas:[]};try{var divgeo,renderer;divgeo=i3GEO.desenho.criaDivContainer();divgeo.innerHTML="";try{renderer=new VMLRenderer();i3GEO.desenho.richdraw=new RichDrawEditor(divgeo,renderer)}catch(erro){renderer=new SVGRenderer();i3GEO.desenho.richdraw=new RichDrawEditor(divgeo,renderer)}i3GEO.desenho.richdraw.editCommand('fillcolor','red');i3GEO.desenho.richdraw.editCommand('linecolor','gray');i3GEO.desenho.richdraw.editCommand('linewidth','1px');i3GEO.desenho.richdraw.editCommand('mode','line');divgeo.style.display="block";i3GEO.eventos.ativa(divgeo)}catch(erro){alert("Erro ao tentar criar container richdraw")}},criaDivContainer:function(){if(!$i("divGeometriasTemp")){var pos,novoel,ne;pos=[0,0];pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));novoel=document.createElement("div");novoel.id="divGeometriasTemp";ne=novoel.style;ne.cursor="crosshair";ne.zIndex=0;ne.position="absolute";ne.width=i3GEO.parametros.w;ne.height=i3GEO.parametros.h;ne.border="1px solid black";ne.display="none";ne.top=pos[1];ne.left=pos[0];document.body.appendChild(novoel)}return($i("divGeometriasTemp"))},aplica:function(tipo,objeto,n,texto){var pos,r,elemento,elementos,dy,dx,w;if(i3GEO.desenho.richdraw&&$i(i3GEO.Interface.IDCORPO)){pos=i3GEO.util.pegaPosicaoObjeto($i(i3GEO.Interface.IDCORPO));if((tipo==="resizeLinha")||(tipo==="resizePoligono")&&navn){try{i3GEO.desenho.richdraw.renderer.resize(objeto,0,0,objposicaocursor.imgx,objposicaocursor.imgy)}catch(erro){}}if((tipo==="resizeLinha")&&navm){try{r=$i(i3GEO.desenho.richdraw.container.id);elemento=r.lastChild;if(elemento.innerHTML!==""){elementos=r.childNodes;if(elementos.length>3){elemento=elementos[elementos.length-3]}else{elemento=elementos[elementos.length-2]}}r.removeChild(elemento);dy=objposicaocursor.imgy;dx=objposicaocursor.imgx-(i3GEO.parametros.w/2);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[n-1])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[n-1]-3,dx,dy-3)}catch(erro){}}if((tipo==="resizePoligono")&&navm){try{r=$i(i3GEO.desenho.richdraw.container.id);r.removeChild(r.lastChild);r.removeChild(r.lastChild);dy=objposicaocursor.imgy;dx=objposicaocursor.imgx-(i3GEO.parametros.w/2);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[n-1])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[n-1]-3,dx,dy-3);i3GEO.desenho.richdraw.renderer.create(i3GEO.desenho.richdraw.mode,i3GEO.desenho.richdraw.fillColor,i3GEO.desenho.richdraw.lineColor,i3GEO.desenho.richdraw.lineWidth,(pontosdistobj.ximg[0])-(i3GEO.parametros.w/2)-1,pontosdistobj.yimg[0]-3,dx,dy-3)}catch(erro){}}if(tipo==="insereCirculo"){dx=Math.pow(((pontosdistobj.xtela[n])*1)-((pontosdistobj.xtela[n-1])*1),2);dy=Math.pow(((pontosdistobj.ytela[n])*1)-((pontosdistobj.ytela[n-1])*1),2);w=Math.sqrt(dx+dy);if(navn){try{i3GEO.desenho.richdraw.renderer.create('circ','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1],pontosdistobj.yimg[n-1],w,w)}catch(erro){}}else{try{i3GEO.desenho.richdraw.renderer.create('circ','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1]-w,pontosdistobj.yimg[n-1]-w,w*2,w*2)}catch(erro){}}}if(tipo==="insereTexto"){try{i3GEO.desenho.richdraw.renderer.create('text','','rgb(250,250,250)',i3GEO.desenho.richdraw.lineWidth,pontosdistobj.ximg[n-1],pontosdistobj.yimg[n-1],"","",texto)}catch(erro){}}}}};