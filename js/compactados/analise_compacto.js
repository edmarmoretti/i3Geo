if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.analise={pontos:{xpt:[],ypt:[]},dialogo:{markercluster:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.markercluster()","markercluster","markercluster","dependencias.php","i3GEOF.markercluster.start()")},heatmap:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.heatmap()","heatmap","heatmap","dependencias.php","i3GEOF.heatmap.start()")},saiku:function(){if(i3GEO.parametros.statusFerramentas&&i3GEO.parametros.statusFerramentas.saiku===false){i3GEO.janela.tempoMsg($trad("naoInstalado"));return}i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.saiku()","saiku","saiku")},saikuMapa:function(){if(i3GEO.parametros.statusFerramentas&&i3GEO.parametros.statusFerramentas.saiku===false){i3GEO.janela.tempoMsg($trad("naoInstalado"));return}i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.saiku()","saiku","saiku","index.js","i3GEOF.saiku.iniciaJanelaFlutuante2()")},graficointerativo:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.graficointerativo()","graficointerativo","graficointerativo","dependencias.php","i3GEOF.graficointerativo.start()")},linhadotempo:function(){i3GEO.janela.cria("650px","450px",i3GEO.configura.locaplic+"/ferramentas/linhadotempo/index.php","","","<span class='i3GeoTituloJanelaBsNolink' >"+$trad("d30")+"</span></div>","i3GEOFlinhaDoTempo",false,"hd","","","",true,"","","","","88");i3GEO.analise.atualizaLinhaDoTempo=function(){var doc="",ifr="";try{ifr=$i("i3GEOF.linhaDoTempoi");if(navn){if(ifr){doc=ifr.contentDocument}}else{if(document.frames("i3GEOF.linhaDoTempoi")){doc=document.frames("i3GEOF.linhaDoTempoi").document}}doc.getElementById("tl")?window.parent["i3GEOF.linhaDoTempoi"].carregaDados():i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.analise.atualizaLinhaDoTempo()"])}catch(e){i3GEO.eventos.removeEventos("NAVEGAMAPA",["i3GEO.analise.atualizaLinhaDoTempo()"])}};i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.analise.atualizaLinhaDoTempo()"]);var ifr=$i("i3GEOF.linhaDoTempoi");if(ifr){ifr.style.width="100%"}},perfil:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.perfil()","perfil","perfil")},rota:function(){if(i3GEO.Interface.ATUAL!=="googlemaps"){alert("Operacao disponivel apenas na interface Google Maps");return}counterClick=1;var parametrosRota=function(overlay,latlng){var temp,janela;if(counterClick===1){counterClick++;alert("Clique o ponto de destino da rota");pontoRota1=latlng;return}if(counterClick===2){pontoRota2=latlng;counterClick=0;GEvent.removeListener(rotaEvento);janela=i3GEO.janela.cria("300px","300px","","center","","<div class='i3GeoTituloJanela'>"+$trad("x48")+"</div>");janela[2].style.overflow="auto";janela[2].style.height="300px";directions=new GDirections(i3GeoMap,janela[2]);temp=function(){$i("wdoca_corpo").innerHTML="N&atilde;o foi poss&iacute;vel criar a rota"};GEvent.addListener(directions,"error",temp);directions.load("from: "+pontoRota1.lat()+","+pontoRota1.lng()+" to: "+pontoRota2.lat()+","+pontoRota2.lng())}};rotaEvento=GEvent.addListener(i3GeoMap,"click",parametrosRota);i3GEO.janela.tempoMsg("Clique o ponto de origem da rota")},melhorcaminho:function(){if(i3GEO.parametros.statusFerramentas&&i3GEO.parametros.statusFerramentas.melhorcaminho===false){i3GEO.janela.tempoMsg($trad("naoInstalado"));return}i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.melhorcaminho()","melhorcaminho","melhorcaminho")},gradepontos:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradepontos()","gradepontos","gradepontos","dependencias.php","i3GEOF.gradepontos.start()")},gradepol:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradepol()","gradepol","gradepol","dependencias.php","i3GEOF.gradepol.start()")},gradehex:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.gradehex()","gradehex","gradehex","dependencias.php","i3GEOF.gradehex.start()")},analisaGeometrias:function(){i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.tabela()","analisageometrias","analisaGeometrias","dependencias.php","i3GEOF.analisaGeometrias.iniciaJanelaFlutuante()")},pontosdistri:function(){i3GEO.parametros.r==="nao"?i3GEO.janela.tempoMsg($trad("x22")):i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.pontosdistri()","pontosdistri","pontosdistri","dependencias.php","i3GEOF.pontosdistri.start()")},pontoempoligono:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.pontoempoligono()","pontoempoligono","pontoempoligono","dependencias.php","i3GEOF.pontoempoligono.start()")},centromassa:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.centromassa()","centromassa","centromassa","dependencias.php","i3GEOF.centromassa.start()")},nptpol:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.nptpol()","nptpol","nptpol","dependencias.php","i3GEOF.nptpol.start()")},buffer:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.buffer()","buffer","buffer","dependencias.php","i3GEOF.buffer.start()")},distanciaptpt:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.distanciaptpt()","distanciaptpt","distanciaptpt","dependencias.php","i3GEOF.distanciaptpt.start()")},centroide:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.centroide()","centroide","centroide","dependencias.php","i3GEOF.centroide.start()")},dissolve:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.dissolve()","dissolve","dissolve","dependencias.php","i3GEOF.dissolve.start()")},agrupaelementos:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.agrupaelementos()","agrupaelementos","agrupaelementos","dependencias.php","i3GEOF.agrupaelementos.start()")},distancia:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.distancia()","distancia","distancia","dependencias.php","i3GEOF.distancia.start()")},area:function(){i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.area()","area","area","dependencias.php","i3GEOF.area.start()")},juntamedidasvariavel:function(tema){if(!tema){tema=i3GEO.temaAtivo}var temp=function(){i3GEOF.juntamedidasvariavel.iniciaJanelaFlutuante(tema)};i3GEO.util.dialogoFerramenta("i3GEO.analise.dialogo.juntamedidasvariavel()","juntamedidasvariavel","juntamedidasvariavel","dependencias.php",temp)}}};