if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.mapa={BALAOATIVO:true,OPENTIPIFEMPTY:true,TEMASINICIAISLIGADOS:"",TEMASINICIAIS:"",GEOXML:[],itensvisib:function(seletores){$.each(seletores,function(i,v){if($(v).hasClass("itensvisib")){$(v).removeClass("itensvisib")}else{$(v).addClass("itensvisib")}})},limpasel:function({verifica=false}={}){var sel=false;if(verifica==true){sel=i3GEO.arvoreDeCamadas.existeCamadaSel({msg:true})}else{sel=true}if(sel==true){i3GEO.janela.abreAguarde();i3GEO.php.limpasel(function(retorno){i3GEO.janela.fechaAguarde();i3GEO.atualiza();i3GEO.Interface.atualizaMapa()},"")}},infoxy:function(x,y){i3GEO.mapa.dialogo.verificaTipDefault(x,y)},ativaAutoResize:function(){var ativo=true;window.onresize=function(){var Dw,Dh;Dw=window.innerWidth;Dh=window.innerHeight;i3GEO.tamanhodoc=[Dw,Dh];if(ativo===true){setTimeout(function(){i3GEO.reCalculaTamanho();i3GEO.guias.abreFecha("fecha");ativo=true},2000)}ativo=false}},ativaIdentifica:function(){i3GEO.eventos.MOUSECLIQUE=["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"];i3GEO.eventos.adicionaEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"]);i3GEO.eventos.removeEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.verificaTipDefault()"]);i3GEO.eventos.cliquePerm.ativa()},ativaIdentificaBalao:function(){i3GEO.eventos.removeEventos("MOUSECLIQUEPERM",["i3GEO.mapa.dialogo.cliqueIdentificaDefault()"]);i3GEO.eventos.MOUSECLIQUE=["i3GEO.mapa.dialogo.verificaTipDefault()"];i3GEO.eventos.cliquePerm.ativa()},ativaTema:function(codigo){if(codigo){i3GEO.temaAtivo=codigo}},ativaLogo:function(){if(i3GEO.Interface.ATUAL==="googlemaps"){alert($trad("x21"));return}i3GEO.php.ativalogo(i3GEO.atualiza);var cr=$i("i3GEOcopyright");if(cr){if(cr.style.display==="block"){cr.style.display="none"}else{cr.style.display="block"}}},verifica:function(retorno){try{if(retorno.data){retorno=retorno.data}if(retorno.variaveis){retorno=retorno.variaveis}if((retorno==="erro")||(typeof(retorno)==='undefined')){i3GEO.janela.fechaAguarde();i3GEO.mapa.recupera.inicia()}i3GEO.mapa.recupera.TENTATIVA=0}catch(e){if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.janela.fechaAguarde();return}if(this.recupera.TENTATIVA===0){i3GEO.janela.tempoMsg("Erro no mapa. Sera feita uma tentativa de recuperacao.");i3GEO.mapa.recupera.inicia()}else{i3GEO.janela.tempoMsg("Recuperacao impossivel. Sera feita uma tentativa de reiniciar o mapa.");if(this.recupera.TENTATIVA===1){this.recupera.TENTATIVA=2;i3GEO.php.reiniciaMapa(i3GEO.atualiza)}}}},recupera:{TENTATIVA:0,inicia:function(){i3GEO.janela.fechaAguarde();if(this.recupera&&this.recupera.TENTATIVA===0){this.recupera.TENTATIVA++;this.recupera.restaura()}},restaura:function(){i3GEO.php.recuperamapa(i3GEO.atualiza)}},legendaIMAGEM:{obtem:function(funcao){i3GEO.php.criaLegendaImagem(funcao)}},compactaLayerGrafico:function(){var geos=false,geometrias=[],n=0,i,g;if(i3GEO.editorOL&&i3GEO.desenho.layergrafico&&i3GEO.desenho.layergrafico.features){geos=i3GEO.desenho.layergrafico.features;n=geos.length;for(i=0;i<n;i++){g={"atributos":geos[i].attributes,"geometria":geos[i].geometry.toString()};geometrias.push(g)}}g=JSON.stringify(geometrias);return i3GEO.util.base64encode(g)},desCompactaLayerGrafico:function(geometrias){geometrias=JSON.parse(geometrias);if(geometrias.length>0){var inicia=function(){if(!i3GEO.desenho.layergrafico){i3GEO.editorOL.criaLayerGrafico()}i3GEO.editor[i3GEO.Interface.ATUAL].ativaPainel();var n=geometrias.length,i;for(i=0;i<n;i++){i3GEO.editorOL.adicionaFeatureWkt(geometrias[i].geometria,geometrias[i].atributos)}i3GEO.editorOL.sobeLayersGraficos()};if(!i3GEO.editorOL){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/classesjs/compactados/classe_editorol_compacto.js",inicia,"editorol.js",true)}}},restauraGraficos:function(graficos){if(graficos.length>0){var inicia=function(){i3GEOF.graficointerativo.restauraGraficos(graficos)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/graficointerativo/dependencias.php",inicia,"graficointerativo",true)}},restauraTabelas:function(tabelas){if(tabelas.length>0){var inicia=function(){i3GEOF.tabela.restauraTabelas(tabelas)};i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/tabela/dependencias.php",inicia,"tabela",true)}},aplicaPreferencias:function(cookies){var props,nprops,i,temp=[],pint;if(!cookies){cookies=i3GEO.util.pegaDadosLocal("preferenciasDoI3Geo")}if(cookies){props=cookies.split("::");nprops=props.length;for(i=0;i<nprops;i++){try{temp=props[i].split("|");pint=parseInt(temp[1],10);if(temp[1]==='true'||temp[1]==='false'){if(temp[1]==='true'){temp[1]=true}if(temp[1]==='false'){temp[1]=false}eval(temp[0]+" = "+temp[1]+";")}else if(pint+"px"==temp[1]){eval(temp[0]+" = '"+temp[1]+"';")}else if($.isNumeric(pint)){eval(temp[0]+" = "+temp[1]+";")}else{eval(temp[0]+" = '"+temp[1]+"';")}}catch(e){}}}},dialogo:{wms:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.wms()","conectarwms","conectarwms","dependencias.php","i3GEOF.conectarwms.iniciaJanelaFlutuante()")},mascara:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mascara()","mascara","mascara","dependencias.php","i3GEOF.mascara.start()")},html2canvas:function(obj){var temp=function(){i3GEOF.html2canvas.iniciaJanelaFlutuante(obj)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.html2canvas()","html2canvas","html2canvas","dependencias.php",temp)},wkt2layer:function(wkt,texto){var temp=function(){i3GEOF.wkt2layer.start(wkt,texto)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.wkt2layer()","wkt2layer","wkt2layer","dependencias.php",temp)},atalhosedicao:function(idtema){i3GEO.mapa.ativaTema(idtema);i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.atalhosedicao()","atalhosedicao","atalhosedicao","dependencias.php","i3GEOF.atalhosedicao.iniciaJanelaFlutuante()")},geolocal:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.geolocal()","geolocal","geolocal","dependencias.php","i3GEOF.geolocal.iniciaJanelaFlutuante()")},listaDeMapasBanco:function(idonde){if(idonde){i3GEO.guias.CONFIGURA["mapas"].click.call(this,idonde);return}if(i3GEO.guias.CONFIGURA["mapas"]){var temp,janela,id="listaMapa"+Math.random();janela=i3GEO.janela.cria("800px","500px",i3GEO.configura.locaplic+"/mapas/indexnomenu.php","","","<span class='i3GeoTituloJanelaBsNolink' ></span></div>",id)}else{window.open(i3GEO.configura.locaplic+"/rss/rssmapas.php","_blank")}},congelaMapa:function(){var url="",idjanela=i3GEO.util.generateId(),cabecalho=function(){},titulo,minimiza=function(){i3GEO.janela.minimiza(idjanela)};if(i3GEO.Interface.ATUAL==="openlayers"||i3GEO.Interface.ATUAL==="googlemaps"){url=i3GEO.configura.locaplic+"/ferramentas/congelamapa/openlayers3.php?g_sid="+i3GEO.configura.sid+"&ext="+i3GEO.util.extOSM2Geo(i3GEO.parametros.mapexten);titulo="<span class='i3GeoTituloJanelaBsNolink' ></span></div>";i3GEO.janela.cria("520px","370px",url,"","",titulo,idjanela,false,"hd",cabecalho,minimiza,"","","","",false,"","123")}},metaestat:function(largura,altura,topo,esquerda,Interface,conexao){var temp=function(){i3GEOF.metaestat.MULTIPARAMETROS=true;if(Interface){i3GEOF.metaestat.INTERFACE=Interface}if(conexao){i3GEOF.metaestat.CONEXAODEFAULT=conexao}i3GEOF.metaestat.INTERFACE="flutuante";i3GEOF.metaestat.principal.inicia(null,largura,altura,topo,esquerda)};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestat()","metaestat","metaestat","dependencias.php",temp)},cartograma:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.cartograma()","cartograma","cartograma","dependencias.php","i3GEOF.cartograma.start()")},metaestatListaMapas:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.metaestatListaMapas()","metaestat","listamapas","listamapas.js","i3GEOF.listamapas.iniciaJanelaFlutuante()")},preferencias:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.preferencias()","preferencias","preferencias")},locregiao:function(){var temp=function(){i3GEOF.locregiao._parameters.ATIVAFILTRO=false;i3GEOF.locregiao.start()};i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.locregiao()","locregiao","locregiao","dependencias.php",temp)},filtraregiao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.filtraregiao()","locregiao","locregiao","dependencias.php","i3GEOF.locregiao.abreComFiltro()")},filtraperiodo:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.filtraperiodo()","filtraperiodo","filtraperiodo","dependencias.php","i3GEOF.filtraperiodo.iniciaJanelaFlutuante()")},animacao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.animacao()","animacao","animacao","dependencias.php","i3GEOF.animacao.start()")},opacidade:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opacidademapa()","opacidademapa","opacidademapa","dependencias.php","i3GEOF.opacidademapa.start()")},t3d:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.t3d()","3d","t3d")},imprimir:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.imprimir()","imprimir","imprimir","dependencias.php","i3GEOF.imprimir.start()")},mostraexten:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.mostraexten()","mostraexten","mostraexten","dependencias.php","i3GEOF.mostraexten.start()")},outputformat:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.outputformat()","outputformat","outputformat","dependencias.php","i3GEOF.outputformat.iniciaJanelaFlutuante()")},autoredesenha:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.autoredesenha()","opcoes_autoredesenha","opcoesTempo","dependencias.php","i3GEOF.opcoesTempo.iniciaJanelaFlutuante()")},salvamapa:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.salvamapa()","salvamapa","salvamapa","dependencias.php","i3GEOF.salvamapa.start()")},carregamapa:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.carregamapa()","carregamapa","carregamapa","dependencias.php","i3GEOF.carregamapa.start()")},convertews:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertews()","convertews","convertews","dependencias.php","i3GEOF.convertews.start()")},convertemapakml:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.convertekml()","convertemapakml","convertemapakml","dependencias.php","i3GEOF.convertemapakml.start()")},queryMap:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.queryMap()","opcoes_querymap","opcoesQuery","dependencias.php","i3GEOF.opcoesQuery.iniciaJanelaFlutuante()")},template:function(){i3GEO.janela.cria("300px","400px",i3GEO.configura.locaplic+"/ferramentas/template/index.htm","","","<div class='i3GeoTituloJanela'>Template<a class=ajuda_usuario target=_blank href='"+i3GEO.configura.locaplic+"/ajuda_usuario.php?idcategoria=1&idajuda=8' ><b> </b></a></div>")},opcoestamanho:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoestamanho()","opcoestamanho","opcoestamanho","dependencias.php","i3GEOF.opcoestamanho.start()")},tipoimagem:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.tipoimagem()","tipoimagem","tipoimagem","dependencias.php","i3GEOF.tipoimagem.start()")},opcoesfundo:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesfundo()","opcoesfundo","opcoesfundo","dependencias.php","i3GEOF.opcoesfundo.start()")},opcoesescala:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesescala()","opcoesescala","opcoesescala","dependencias.php","i3GEOF.opcoesescala.start()")},opcoeslegenda:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoeslegenda()","opcoeslegenda","opcoeslegenda","dependencias.php","i3GEOF.opcoeslegenda.start()")},opcoesmaparef:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.opcoesmaparef()","opcoesmaparef","opcoesmaparef","dependencias.php","i3GEOF.opcoesmaparef.start()")},gradecoord:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.gradecoord()","gradecoord","gradecoord","dependencias.php","i3GEOF.gradecoord.start()")},inseretxt:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.inseretxt()","inseretxt","inseretxt","dependencias.php","i3GEOF.inseretxt.start()")},selecao:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.selecao()","selecao","selecao","dependencias.php","i3GEOF.selecao.iniciaJanelaFlutuante()")},inserexy2:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.inserexy2()","inserexy2","inserexy2","dependencias.php","i3GEOF.inserexy2.start()")},inseregrafico:function(){i3GEO.util.dialogoFerramenta("i3GEO.mapa.dialogo.inseregrafico()","inseregrafico","inseregrafico","dependencias.php","i3GEOF.inseregrafico.start()")},cliqueIdentificaDefault:function(x,y,tema){if(!x){x=objposicaocursor.ddx;y=objposicaocursor.ddy}var temp=function(){i3GEOF.identifica.start({"x":x,"y":y,"tema":tema})};if(typeof(i3GEOF.identifica)==='undefined'){var js=i3GEO.configura.locaplic+"/ferramentas/identifica/dependencias.php";i3GEO.util.scriptTag(js,temp,"i3GEOF.identifica_script")}else{temp()}},verificaTipDefault:function(x,y){if(i3GEO.mapa.BALAOATIVO==false){return}if(!x){x=objposicaocursor.ddx}if(!y){y=objposicaocursor.ddy}if(x===-1||y===-1||i3GEO.eventos.cliquePerm.ativo===false||i3GEO.eventos.cliquePerm.status===false){return}i3GEO.eventos.cliquePerm.status=false;objposicaocursor.ddx=-1;objposicaocursor.ddy=-1;var ntemas=i3GEO.arvoreDeCamadas.CAMADAS.length;var etiquetas=false;for(var j=0;j<ntemas;j+=1){if(i3GEO.arvoreDeCamadas.CAMADAS[j].etiquetas!==""||i3GEO.arvoreDeCamadas.CAMADAS[j].identifica=="SIM"){etiquetas=true}}if(etiquetas===false){return}if(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.url!=""&&i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.templateModal==""){$.get(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.url+"&xx="+x+"&yy="+y,function(data){i3GEO.janela.closeMsg(data)});return}if(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.templateModal!=""){if(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.url!=""){var temp=i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.url+"&xx="+x+"&yy="+y;temp=i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.templateModal.replace("{{{url}}}",temp);i3GEO.janela.closeMsg(temp)}else{i3GEO.janela.closeMsg(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.templateModal)}return}var b=i3GEO.mapa.createWaitOverlay(x,y);var temp=function(retorno){i3geoOL.removeOverlay(b);i3GEO.mapa.montaTip(retorno,x,y)};i3GEO.php.identifica3(temp,x,y,i3GEO.configura.ferramentas.identifica.resolution,"tip",i3GEO.configura.locaplic,i3GEO.configura.sid,"ligados",i3GEO.parametros.mapexten,"","sim")}},createWaitOverlay:function(x,y){var res=i3GEO.configura.ferramentas.identifica.resolution;var bdiv=document.createElement("div");bdiv.className="waitInfoWindow";bdiv.style.width=res+"px";bdiv.style.height=res+"px";bdiv.style.top=(res/2*-1)+"px";var b=new ol.Overlay({element:bdiv,stopEvent:true,autoPan:false,origem:"balao",autoPanAnimation:false,positioning:"center-center",position:i3GEO.util.projGeo2OSM(new ol.geom.Point([x,y])).getCoordinates()});i3geoOL.addOverlay(b);return b},montaTip:function(retorno,xx,yy){var textCopy=[],textoSimples="",textoTempSimples="",x,y,temp,n,mostra,res,temas,ntemas,titulo,tips,j,ntips,r,ds,nds,s,configura=i3GEO.configura,wkts=[];i3GEO.eventos.cliquePerm.status=true;mostra=true;if(retorno.data){retorno=retorno.data;temp=retorno[0].xy.split(",");x=temp[0]*1;y=temp[1]*1}else{x=xx;y=yy;mostra=true;textoSimples="";wkt=[];if(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.openTipNoData==false){mostra=false}}if(retorno!==""){res="";ntemas=0;temas=retorno;if(temas){ntemas=temas.length}for(j=0;j<ntemas;j+=1){titulo=temas[j].nome;textCopy.push(titulo);var temp1=[];$.each(temas[j].funcoesjs,function(key,value){if(value.tipo=="layer"){var parametros=[x,y,temas[j].tema];$.each(value.parametros,function(key1,value1){parametros.push(ds[s][value1].valor)});parametros="\""+parametros.join("\",\"")+"\"";temp1.push("<a class='toolTipBalaoFuncoes' href='javascript:void(0);' onclick='"+value.funcao+"("+parametros+")' >"+value.titulo+"</a><br>");if(value.script&&value.script!=""){i3GEO.util.scriptTag(value.script,"","funcaolayer"+value.funcao,false)}}});temp1=temp1.join(" ");var mais="<button style='margin: 2px;padding: 0px;vertical-align: middle;position: relative;top: -7px;' class='btn btn-default btn-xs' onclick=\"i3GEO.mapa.dialogo.cliqueIdentificaDefault("+x+","+y+",'"+temas[j].tema+"');return false;\" ><span style='opacity:0.5;vertical-align: middle;padding: 0px;' class='material-icons'>info</span></button>";if(ntemas==1){mais=""}titulo="<div class='toolTipBalaoTitulo'>"+mais+" <b>"+titulo+"</b><br>"+temp1+"</div>";tips=temas[j].resultado.todosItens;ntips=tips.length;ins="";textoTempSimples="";ds=temas[j].resultado.dados;if(ds!==" "&&ds[0]&&ds[0]!=" "){try{nds=ds.length;for(s=0;s<nds;s+=1){textoTempSimples+="<div class='toolTipBalaoTexto'>";for(r=0;r<ntips;r+=1){try{temp="";var alias=ds[s][tips[r]].alias;var valor=ds[s][tips[r]].valor;var link=ds[s][tips[r]].link;var img=ds[s][tips[r]].img;var estilo="tooltip-"+temas[j].tema;if(valor!==""&&link===""){temp+="<span class='"+estilo+"'><label>"+alias+": </label>"+valor+"</span><br>";textCopy.push(alias+":"+valor)}if(valor!==""&&link!==""){temp+="<span class='"+estilo+"'><label>"+alias+" : </label><a style='color:blue;cursor:pointer' target=_blanck href='"+link+"' >"+valor+"</a></span><br>";textCopy.push(alias+":"+valor)}if(img!==""){temp+=img+"<br>"}if(ds[s][tips[r]].tip.toLowerCase()==="sim"){textoTempSimples+=temp}mostra=true}catch(e){}}var temp1=[];$.each(temas[j].funcoesjs,function(key,value){if(value.tipo=="registro"){var parametros=[x,y,temas[j].tema];$.each(value.parametros,function(key1,value1){parametros.push(ds[s][value1].valor)});parametros="\""+parametros.join("\",\"")+"\"";temp1.push("<a class='toolTipBalaoFuncoes' href='javascript:void(0);' onclick='"+value.funcao+"("+parametros+")' >"+value.titulo+"</a><br>");if(value.script&&value.script!=""){i3GEO.util.scriptTag(value.script,"","funcaolayer"+value.funcao,false)}}});temp1=temp1.join(" ");textoTempSimples+=temp1+"</div>";if(ds[s].wkt&&ds[s].wkt.valor!=""){ds[s].tema=temas[j].tema;ds[s].titulo=temas[j].nome;wkts.push(ds[s])}}}catch(e){}}if(textoTempSimples!==""){textoSimples+=titulo+textoTempSimples}}var pixel=i3geoOL.getPixelFromCoordinate(i3GEO.util.projGeo2OSM(new ol.geom.Point([x,y])).getCoordinates());var html=[];textoSimples+=html.join("<br>");textCopy+=html.join("<br>");var afterCreate=function(){var painel=this.painel;var dados={};i3geoOL.forEachFeatureAtPixel(pixel,function(feature,layer){var texto="";var prop=feature.getProperties();if(feature.get("fat")){var fat=feature.get("fat");var chaves=i3GEO.util.listaChaves(fat);var c=chaves.length;$.each(chaves,function(index,element){texto+=element+": "+fat[element]+"<br>"})}else{var chaves=feature.getKeys();var c=chaves.length;for(var i=0;i<c;i++){if(chaves[i]!="geometry"&&chaves[i]!="styleUrl"){texto+=chaves[i]+": "+prop[chaves[i]]+"<br>"}}}if(layer){if(dados[layer.get("name")]){dados[layer.get("name")].push(texto)}else{dados[layer.get("name")]=[texto]}}else if(prop.nameLayer&&prop.nameLayer!=""){if(dados[prop.nameLayer]){dados[prop.nameLayer].push(texto)}else{dados[prop.nameLayer]=[texto]}}},{hitTolerance:i3GEO.configura.ferramentas.identifica.resolution});var html=[];for(let d of Object.keys(dados)){if(i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[d]){html.push("<div class='toolTipBalaoTitulo'><b>"+i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[d].tema+"</b><br></div>")}else{html.push("<div class='toolTipBalaoTitulo'><b>"+d+"</b></div>")}html.push("<div class='toolTipBalaoTexto'>"+dados[d].join("<br>")+"</div>")}if(painel){$(painel).find(".tooltip-conteudo").prepend(html.join(""))}};if(mostra===true){if(i3GEO.Interface[i3GEO.Interface.ATUAL].BALAOPROP.modal==true){i3GEO.janela.closeMsg(textoSimples);return}else{var painel=i3GEO.Interface.openlayers.balao(textoSimples,textCopy,x,y,true,wkts.length,afterCreate)}}}n=wkts.length;if(n>0){i3GEO.desenho.openlayers.criaLayerGrafico();var g,format,f,idunico,c=i3GEO.desenho.layergrafico.getSource();format=new ol.format.WKT();for(r=0;r<n;r+=1){f=format.readFeatures(wkts[r].wkt.valor);f=f[0];g=f.getGeometry();g=i3GEO.util.projGeo2OSM(g);f.setGeometry(g);f.setId(i3GEO.util.uid());i3GEO.editor.setStyleByTypeFeature(f);i3GEO.editor.setStyleDefault(f);wkts[r].wkt="",f.setProperties({fat:wkts[r],origem:"pin"});c.addFeature(f)}}}};