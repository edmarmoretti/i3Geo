if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.mapa={TEMASINICIAISLIGADOS:"",TEMASINICIAIS:"",GEOXML:[],limpasel:function(){i3GEO.php.limpasel(function(retorno){i3GEO.atualiza();i3GEO.Interface.atualizaMapa()},"")},ativaAutoResize:function(){var ativo=true;window.onresize=function(){var Dw,Dh;Dw=window.innerWidth;Dh=window.innerHeight;i3GEO.tamanhodoc=[Dw,Dh];if(ativo===true){setTimeout(function(){i3GEO.reCalculaTamanho();i3GEO.guias.abreFecha("fecha");ativo=true},2000)}ativo=false}},ativaIdentifica:function(){i3GEO.eventos.MOUSECLIQUE=["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"];i3GEO.eventos.adicionaEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"]);i3GEO.eventos.removeEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.verificaTipDefault()"]);i3GEO.eventos.cliquePerm.ativa()},ativaIdentificaBalao:function(){if(i3GEO.arvoreDeCamadas.filtraCamadas("etiquetas","","diferente",i3GEO.arvoreDeCamadas.CAMADAS)===""){i3GEO.janela.tempoMsg($trad("d31"));return}i3GEO.eventos.removeEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"]);i3GEO.eventos.MOUSECLIQUE=["i3GEO.mapa.dialogo.verificaTipDefault()"];i3GEO.eventos.cliquePerm.ativa()},ativaTema:function(codigo){if(codigo){i3GEO.temaAtivo=codigo}},ativaLogo:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){alert($trad("x21"));return}i3GEO.php.ativalogo(i3GEO.atualiza);var cr=$i("i3GEOcopyright");if(cr){if(cr.style.display==="block"){cr.style.display="none"}else{cr.style.display="block"}}},verifica:function(retorno){try{if(retorno.data){retorno=retorno.data}if(retorno.variaveis){retorno=retorno.variaveis}if((retorno==="erro")||(typeof(retorno)==='undefined')){i3GEO.janela.fechaAguarde();i3GEO.mapa.recupera.inicia()}i3GEO.mapa.recupera.TENTATIVA=0}catch(e){if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.janela.fechaAguarde();return}if(this.recupera.TENTATIVA===0){i3GEO.janela.tempoMsg("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia()}else{i3GEO.janela.tempoMsg("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");if(this.recupera.TENTATIVA===1){this.recupera.TENTATIVA=2;i3GEO.php.reiniciaMapa(i3GEO.atualiza)}}}},recupera:{TENTATIVA:0,inicia:function(){i3GEO.janela.fechaAguarde();if(this.recupera.TENTATIVA===0){this.recupera.TENTATIVA++;this.recupera.restaura()}},restaura:function(){i3GEO.php.recuperamapa(i3GEO.atualiza)}},legendaIMAGEM:{obtem:function(funcao){i3GEO.php.criaLegendaImagem(funcao)}},compactaLayerGrafico:function(){var geos=false,geometrias=[],n=0,i,g;if(i3GEO.editorOL&&i3GEO.desenho.layergrafico&&i3GEO.desenho.layergrafico.features){geos=i3GEO.desenho.layergrafico.features;n=geos.length;for(i=0;i<n;i++){g={"atributos":geos[i].attributes,"geometria":geos[i].geometry.toString()};geometrias.push(g)}}g=JSON.stringify(geometrias);return i3GEO.util.base64encode(g)},desCompactaLayerGrafico:function(geometrias){geometrias=JSON.parse(geometrias);if(geometrias.length>0){var inicia=function(){if(!i3GEO.desenho.layergrafico){i3GEO.editorOL.criaLayerGrafico()}i3GEO.editor[i3GEO.Interface.ATUAL].ativaPainel();var n=geometrias.length,i;for(i=0;i<n;i++){i3GEO.editorOL.adicionaFeatureWkt(geometrias[i].geometria,geometrias[i].atributos)}i3GEO.editorOL.sobeLayersGraficos()};if(!i3GEO.editorOL){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/classesjs/compactados/classe_editorol_compacto.js",inicia,"editorol.js",true)}}},restauraGraficos:function(graficos){if(graficos.length>0){var inicia=function(){i3GEOF.graficointerativo1.restauraGraficos(graficos)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/graficointerativo1/dependencias.php",inicia,"graficointerativo1",true)}},restauraTabelas:function(tabelas){if(tabelas.length>0){var inicia=function(){i3GEOF.tabela.restauraTabelas(tabelas)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/tabela/dependencias.php",inicia,"tabela",true)}},aplicaPreferencias:function(cookies){var props,nprops,i,temp=[],pint;if(!cookies){cookies=i3GEO.util.pegaDadosLocal("preferenciasDoI3Geo")}if(cookies){props=cookies.split("::");nprops=props.length;for(i=0;i<nprops;i++){try{temp=props[i].split("|");pint=parseInt(temp[1],10);if(temp[1]==='true'||temp[1]==='false'){if(temp[1]==='true'){temp[1]=true}if(temp[1]==='false'){temp[1]=false}eval(temp[0]+" = "+temp[1]+";")}else if(pint+"px"==temp[1]){eval(temp[0]+" = '"+temp[1]+"';")}else if($.isNumeric(pint)){eval(temp[0]+" = "+temp[1]+";")}else{eval(temp[0]+" = '"+temp[1]+"';")}}catch(e){}}}},dialogo:{listaLayersWms:function(servico){i3GEO.janela.cria("400px","300px",i3GEO.configura.locaplic+"/ferramentas/conectarwms/listalayers.php?servico="+servico,"","","<div class='i3GeoTituloJanela'>"+$trad("a4")+"<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=4&idajuda=28' ><b> </b></a></div>","i3GEO.conectarwms",false,"hd","","","",true)},mascara:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mascara()","mascara","mascara","dependencias.php","i3GEOF.mascara.iniciaJanelaFlutuante()")},ferramentas:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.ferramentas()","atalhosmapa","atalhosmapa","dependencias.php","i3GEOF.atalhosmapa.iniciaJanelaFlutuante()")},html2canvas:function(obj){var temp=function(){i3GEOF.html2canvas.iniciaJanelaFlutuante(obj)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.html2canvas()","html2canvas","html2canvas","dependencias.php",temp)},wkt2layer:function(wkt,texto){var temp=function(){i3GEOF.wkt2layer.iniciaJanelaFlutuante(wkt,texto)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.wkt2layer()","wkt2layer","wkt2layer","dependencias.php",temp)},atalhosedicao:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.atalhosedicao()","atalhosedicao","atalhosedicao","dependencias.php","i3GEOF.atalhosedicao.iniciaJanelaFlutuante()")},geolocal:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.geolocal()","geolocal","geolocal","dependencias.php","i3GEOF.geolocal.iniciaJanelaFlutuante()")},listaDeMapasBanco:function(idonde){if(idonde){i3GEO.guias.CONFIGURA["mapas"].click.call(this,idonde);return}if(i3GEO.guias.CONFIGURA["mapas"]){var janela,divid;if($i("i3GEOFsalvaMapaLista")){return}janela=i3GEO.janela.cria("600px","350px","","","","","i3GEOFsalvaMapaLista",false,"hd");divid=janela[2].id;i3GEO.guias.CONFIGURA["mapas"].click.call(this,divid)}else{window.open(i3GEO.configura.locaplic+"/admin/rssmapas.php","_blank")}},congelaMapa:function(){var url="",idjanela=i3GEO.util.generateId(),cabecalho=function(){},titulo,minimiza=function(){i3GEO.janela.minimiza(idjanela)};if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){url=i3GEO.configura.locaplic+"/ferramentas/congelamapa/openlayers3.php?g_sid="+i3GEO.configura.sid+"&ext="+i3GEO.util.extOSM2Geo(i3GEO.parametros.mapexten);titulo="<div class='i3GeoTituloJanela'><span class='i3GEOiconeFerramenta i3GEOiconeCongela'></span>"+"Mapa"+"<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=6&idajuda=123' ><b> </b></a></div>";i3GEO.janela.cria("500px","350px",url,"","",titulo,idjanela,false,"hd",cabecalho,minimiza,"","","","",false)}},metaestat:function(largura,altura,topo,esquerda){var temp=function(){i3GEOF.metaestat.MULTIPARAMETROS=true;i3GEOF.metaestat.comum.iniciaDicionario(null,largura,altura,topo,esquerda)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestat()","metaestat","metaestat","index.js",temp)},metaestatListaMapas:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestatListaMapas()","metaestat","listamapas","listamapas.js","i3GEOF.listamapas.iniciaJanelaFlutuante()")},preferencias:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.preferencias()","preferencias","preferencias")},locregiao:function(largura,altura,topo,esquerda){var temp=function(){i3GEOF.locregiao.iniciaDicionario(largura,altura,topo,esquerda)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.locregiao()","metaestat","locregiao","locregiao.js",temp)},filtraregiao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.filtraregiao()","metaestat","locregiao","locregiao.js","i3GEOF.locregiao.abreComFiltro()")},animacao:function(){i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.animacao()","animacao","animacao","dependencias.php","i3GEOF.animacao.iniciaJanelaFlutuante()")},opacidade:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opacidade()","opacidademapa","opacidademapa")},t3d:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.t3d()","3d","t3d")},imprimir:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.imprimir()","imprimir","imprimir","dependencias.php","i3GEOF.imprimir.iniciaJanelaFlutuante()")},mostraExten:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mostraExten()","mostraexten","mostraExten","dependencias.php","i3GEOF.mostraExten.iniciaJanelaFlutuante()")},outputformat:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.outputformat()","outputformat","outputformat","dependencias.php","i3GEOF.outputformat.iniciaJanelaFlutuante()")},autoredesenha:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.autoredesenha()","opcoes_autoredesenha","opcoesTempo","dependencias.php","i3GEOF.opcoesTempo.iniciaJanelaFlutuante()")},salvaMapa:function(){if(i3GEO.parametros===""){i3GEO.janela.tempoMsg("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.salvaMapa()","salvamapa","salvaMapa","dependencias.php","i3GEOF.salvaMapa.iniciaJanelaFlutuante()")},carregaMapa:function(){i3GEO.util.dialogoFerramenta("i3GEO.tema.dialogo.carregaMapa()","carregamapa","carregaMapa","dependencias.php","i3GEOF.carregaMapa.iniciaJanelaFlutuante()")},convertews:function(){if(i3GEO.parametros.mapfile===""){i3GEO.janela.tempoMsg("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertews()","convertews","converteMapaWS","dependencias.php","i3GEOF.converteMapaWS.iniciaJanelaFlutuante()")},convertekml:function(){if(i3GEO.parametros.mapfile===""){alert("Essa opcao nao pode ser ativada. Consulte o administrador do sistema. Mapfile nao esta exposto.");return}i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertekml()","convertemapakml","converteMapaKml","dependencias.php","i3GEOF.converteMapaKml.iniciaJanelaFlutuante()")},queryMap:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.queryMap()","opcoes_querymap","opcoesQuery","dependencias.php","i3GEOF.opcoesQuery.iniciaJanelaFlutuante()")},template:function(){i3GEO.janela.cria("300px","400px",i3GEO.configura.locaplic+"/ferramentas/template/index.htm","","","<div class='i3GeoTituloJanela'>Template<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=8' ><b> </b></a></div>")},tamanho:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tamanho()","opcoes_tamanho","opcoesTamanho","dependencias.php","i3GEOF.opcoesTamanho.iniciaJanelaFlutuante()")},tipoimagem:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tipoimagem()","tipoimagem","tipoimagem","dependencias.php","i3GEOF.tipoimagem.iniciaJanelaFlutuante()")},corFundo:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.corFundo()","opcoes_fundo","opcoesFundo","dependencias.php","i3GEOF.opcoesFundo.iniciaJanelaFlutuante()")},opcoesEscala:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesEscala()","opcoes_escala","opcoesEscala","dependencias.php","i3GEOF.opcoesEscala.iniciaJanelaFlutuante()")},opcoesLegenda:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesLegenda()","opcoes_legenda","opcoesLegenda","dependencias.php","i3GEOF.opcoesLegenda.iniciaJanelaFlutuante()")},gradeCoord:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.gradeCoord()","gradecoord","gradeCoord","dependencias.php","i3GEOF.gradeCoord.iniciaJanelaFlutuante()")},cliqueTexto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueTexto()","inseretxt","inseretxt","dependencias.php","i3GEOF.inseretxt.iniciaJanelaFlutuante()")},selecao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.selecao()","selecao","selecao")},cliquePonto:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliquePonto()","inserexy2","inserexy","dependencias.php","i3GEOF.inserexy.iniciaJanelaFlutuante()")},cliqueGrafico:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cliqueGrafico()","inseregrafico","insereGrafico","dependencias.php","i3GEOF.insereGrafico.iniciaJanelaFlutuante()")},cliqueIdentificaDefault:function(x,y){if(i3GEO.eventos.cliquePerm.ativo===false){return}if(typeof(i3GEOF.identifica)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/identifica/dependencias.php",temp=function(){if(x){i3GEOF.identifica.criaJanelaFlutuante(x,y)}else{i3GEOF.identifica.criaJanelaFlutuante(objposicaocursor.ddx,objposicaocursor.ddy)}};i3GEO.util.scriptTag(js,temp,"i3GEOF.identifica_script")}else{if(x){i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo,x,y)}else{i3GEOF.identifica.buscaDadosTema(i3GEO.temaAtivo,objposicaocursor.ddx,objposicaocursor.ddy)}return}},verificaTipDefault:function(e){if(i3GEO.eventos.cliquePerm.ativo==false){return}if(i3GEO.eventos.cliquePerm.status===false){return}else{i3GEO.eventos.cliquePerm.status=false}var ntemas,etiquetas,j,x=objposicaocursor.ddx,y=objposicaocursor.ddy;if(x===-1||y===-1){return}objposicaocursor.ddx=-1;objposicaocursor.ddy=-1;ntemas=i3GEO.arvoreDeCamadas.CAMADAS.length;etiquetas=false;for(j=0;j<ntemas;j+=1){if(i3GEO.arvoreDeCamadas.CAMADAS[j].etiquetas!==""){etiquetas=true}}if(etiquetas===false){return}i3GEO.php.identifica3(i3GEO.mapa.montaTip,x,y,i3GEO.configura.ferramentas.identifica.resolution,"tip",i3GEO.configura.locaplic,i3GEO.configura.sid,"ligados",i3GEO.parametros.mapexten,"","nao")}},montaTip:function(retorno){var textoCompleto="",textoSimples="",textoTempCompleto="",textoTempSimples="",x,y,classeCor,temp,n,mostra,res,temas,ntemas,titulo,tips,j,ntips,r,ds,nds,s,configura=i3GEO.configura,wkts=[];i3GEO.eventos.cliquePerm.status=true;mostra=false;retorno=retorno.data;temp=retorno[0].xy.split(",");x=temp[0]*1;y=temp[1]*1;if(retorno!==""){res="";temas=retorno;if(!temas){return}ntemas=temas.length;for(j=0;j<ntemas;j+=1){titulo=temas[j].nome;titulo="<div class='toolTipBalaoTitulo'><b>"+titulo+"</b></div>";tips=temas[j].resultado.todosItens;ntips=tips.length;ins="";textoTempCompleto="";textoTempSimples="";ds=temas[j].resultado.dados;if(ds!==" "&&ds[0]&&ds[0]!=" "){try{nds=ds.length;classeCor="toolTipBalaoTexto";for(s=0;s<nds;s+=1){textoTempCompleto+="<div class='"+classeCor+"'>";textoTempSimples+="<div class='"+classeCor+"'>";for(r=0;r<ntips;r+=1){try{temp="";var alias=ds[s][tips[r]].alias;var valor=ds[s][tips[r]].valor;var link=ds[s][tips[r]].link;var img=ds[s][tips[r]].img;if(valor!==""&&link===""){temp+="<span>"+alias+" :"+valor+"</span><br>"}if(valor!==""&&link!==""){temp+="<span>"+alias+" : <a style='color:blue;cursor:pointer' target=_blanck href='"+link+"' >"+valor+"</a></span><br>"}if(img!==""){temp+=img+"<br>"}if(ds[s][tips[r]].tip.toLowerCase()==="sim"){textoTempSimples+=temp}textoTempCompleto+=temp;mostra=true}catch(e){}}if(classeCor==="toolTipBalaoTexto"){classeCor="toolTipBalaoTexto1"}else{classeCor="toolTipBalaoTexto"}textoTempCompleto+="</div>";textoTempSimples+="</div>";if(ds[s].wkt&&ds[s].wkt.valor!=""){wkts.push(ds[s].wkt.valor)}}}catch(e){}}if(textoTempSimples!==""){textoCompleto+=titulo+textoTempCompleto;textoSimples+=titulo+textoTempSimples}}if(mostra===true){res=textoSimples;i3GEO.Interface[i3GEO.Interface.ATUAL].balao(textoSimples,textoCompleto,x,y)}}n=wkts.length;if(n>0){i3GEO.desenho[i3GEO.Interface.ATUAL].criaLayerGrafico();var g,format,f,idunico,c=i3GEO.desenho.layergrafico.getSource();if(i3GEO.Interface.ATUAL=="openlayers"){format=new ol.format.WKT();for(r=0;r<n;r+=1){f=format.readFeatures(wkts[r]);f=f[0];f.setProperties({origem:"pin"});g=f.getGeometry();g=i3GEO.util.projGeo2OSM(g);f.setGeometry(g);c.addFeature(f)}}}}};