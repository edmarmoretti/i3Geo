if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.analise={pontos:{xpt:[],ypt:[]},dialogo:{markercluster:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.markercluster()","markercluster","markercluster","dependencias.php","i3GEOF.markercluster.start()")},heatmap:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.heatmap()","heatmap","heatmap","dependencias.php","i3GEOF.heatmap.start()")},graficointerativo:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.graficointerativo()","graficointerativo","graficointerativo","dependencias.php","i3GEOF.graficointerativo.start()")},linhadotempo:function(tema){if(!tema){tema=""}var temp=function(){i3GEOF.linhadotempo.start(tema)};i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.linhadotempo()","linhadotempo","linhadotempo","dependencias.php",temp)},rota:function(){if(i3GEO.Interface.ATUAL!=="googlemaps"){alert("Operacao disponivel apenas na interface Google Maps");return}counterClick=1;var parametrosRota=function(overlay,latlng){var temp,janela;if(counterClick===1){counterClick++;alert("Clique o ponto de destino da rota");pontoRota1=latlng;return}if(counterClick===2){pontoRota2=latlng;counterClick=0;GEvent.removeListener(rotaEvento);janela=i3GEO.janela.cria("300px","300px","","center","","<div class='i3GeoTituloJanela'>"+$trad("x48")+"</div>");janela[2].style.overflow="auto";janela[2].style.height="300px";directions=new GDirections(i3GeoMap,janela[2]);temp=function(){$i("wdoca_corpo").innerHTML="N&atilde;o foi poss&iacute;vel criar a rota"};GEvent.addListener(directions,"error",temp);directions.load("from: "+pontoRota1.lat()+","+pontoRota1.lng()+" to: "+pontoRota2.lat()+","+pontoRota2.lng())}};rotaEvento=GEvent.addListener(i3GeoMap,"click",parametrosRota);i3GEO.janela.tempoMsg("Clique o ponto de origem da rota")},gradepontos:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradepontos()","gradepontos","gradepontos","dependencias.php","i3GEOF.gradepontos.start()")},gradepol:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradepol()","gradepol","gradepol","dependencias.php","i3GEOF.gradepol.start()")},gradehex:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradehex()","gradehex","gradehex","dependencias.php","i3GEOF.gradehex.start()")},pontosdistri:function(){i3GEO.parametros.r==="nao"?i3GEO.janela.tempoMsg($trad("x22")):i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.pontosdistri()","pontosdistri","pontosdistri","dependencias.php","i3GEOF.pontosdistri.start()")},pontoempoligono:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.pontoempoligono()","pontoempoligono","pontoempoligono","dependencias.php","i3GEOF.pontoempoligono.start()")},centromassa:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.centromassa()","centromassa","centromassa","dependencias.php","i3GEOF.centromassa.start()")},nptpol:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.nptpol()","nptpol","nptpol","dependencias.php","i3GEOF.nptpol.start()")},buffer:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.buffer()","buffer","buffer","dependencias.php","i3GEOF.buffer.start()")},distanciaptpt:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.distanciaptpt()","distanciaptpt","distanciaptpt","dependencias.php","i3GEOF.distanciaptpt.start()")},centroide:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.centroide()","centroide","centroide","dependencias.php","i3GEOF.centroide.start()")},dissolve:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.dissolve()","dissolve","dissolve","dependencias.php","i3GEOF.dissolve.start()")},agrupaelementos:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.agrupaelementos()","agrupaelementos","agrupaelementos","dependencias.php","i3GEOF.agrupaelementos.start()")},distancia:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.distancia()","distancia","distancia","dependencias.php","i3GEOF.distancia.start()")},area:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.area()","area","area","dependencias.php","i3GEOF.area.start()")}}};