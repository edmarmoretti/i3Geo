if(typeof(i3GEO)==='undefined'){var i3GEO={}}var cpJSON=new cpaint();cpJSON.set_response_type("JSON");cpJSON.set_transfer_mode("POST");i3GEO.php={verifica:function(){if(i3GEO.configura.locaplic===undefined){i3GEO.janela.tempoMsg("i3GEO.php diz: variavel i3GEO.configura.locaplic n&atilde;o esta definida")}if(i3GEO.configura.sid===undefined){i3GEO.janela.tempoMsg("i3GEO.php diz: variavel i3GEO.configura.sid n&atilde;o esta definida")}},excluitema:function(){},reordenatemas:function(){},criaLegendaHTML:function(funcao,tema,template){},criaLegendaJSON:function(){},inverteStatusClasse:function(){},ligatemas:function(){},pegalistademenus:function(){},pegalistadegrupos:function(){},pegalistadeSubgrupos:function(funcao,id_menu,id_grupo){},pegalistadetemas:function(funcao,id_menu,id_grupo,id_subgrupo){},listaTemas:function(funcao,tipo,locaplic,sid){},listaTemasEditaveis:function(funcao,locaplic,sid){},listaTemasComSel:function(funcao,locaplic,sid){},listatemasTipo:function(funcao,tipo,locaplic,sid){},pegaSistemas:function(funcao){},listadrives:function(funcao){},listaarquivos:function(funcao,caminho){},mudatamanho:function(funcao,altura,largura){},ativalogo:function(funcao,altura,largura){},insereAnnotation:function(){},identificaunico:function(funcao,xy,tema,item){},recuperamapa:function(funcao){},criaLegendaImagem:function(funcao){},referenciadinamica:function(funcao,zoom,tipo,w,h){},pan:function(funcao,escala,tipo,x,y){},zoomponto:function(funcao,x,y,tamanho,simbolo,cor){},localizaIP:function(funcao){},mudaext:function(funcao,tipoimagem,ext,locaplic,sid,atualiza,geo){var retorno;if(arguments.length===3){i3GEO.php.verifica();locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid;atualiza=true;geo=false}if(geo===undefined){geo=false}if(atualiza===undefined){atualiza=true}if(ext===undefined){i3GEO.janela.tempoMsg("extensao nao definida");return}retorno=function(retorno){i3GEO.Interface.zoom2ext(ext);if(funcao){funcao.call(funcao,retorno)}};var p=locaplic+"/classesphp/mapa_controle.php";var par="funcao=mudaext&tipoimagem="+tipoimagem+"&ext="+ext+"&g_sid="+sid+"&geo="+geo;cpJSON.call(p,"mudaext",retorno,par)},mudaescala:function(funcao,escala){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=mudaescala&escala="+escala+"&g_sid="+i3GEO.configura.sid+"&tipoimagem="+i3GEO.configura.tipoimagem,retorno=function(retorno){i3GEO.janela.fechaAguarde("mudaescala");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("mudaescala",$trad("o1"));cpJSON.call(p,"mudaescala",retorno,par)},aplicaResolucao:function(funcao,resolucao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=crialente&resolucao="+resolucao+"&g_sid="+i3GEO.configura.sid+"&ext="+i3GEO.mapa.getExtent().string;cpJSON.call(p,"crialente",funcao,par)},geradestaque:function(funcao,tema,ext){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=geradestaque&tema="+tema+"&g_sid="+i3GEO.configura.sid+"&ext="+ext,retorno=function(retorno){i3GEO.janela.fechaAguarde("geradestaque");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("geradestaque",$trad("o1"));cpJSON.call(p,"geradestaque",retorno,par)},sobetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=sobetema&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("sobetema");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("sobetema",$trad("o1"));cpJSON.call(p,"sobetema",retorno,par)},descetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=descetema&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("descetema");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("descetema",$trad("o1"));cpJSON.call(p,"descetema",retorno,par)},fontetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=fontetema&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"fontetema",retorno,par)},zoomtema:function(funcao,tema){i3GEO.php.verifica();var retorno,p,par;retorno=function(retorno){switch(i3GEO.Interface.ATUAL){case"googlemaps":i3GEO.Interface.googlemaps.zoom2extent(retorno.data.variaveis.mapexten);i3GEO.atualizaParametros(retorno.data.variaveis);break;case"openlayers":i3GEO.Interface.openlayers.zoom2ext(retorno.data.variaveis.mapexten);i3GEO.atualizaParametros(retorno.data.variaveis);break}};p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php";par="funcao=zoomtema&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"zoomtema",retorno,par)},zoomsel:function(funcao,tema){i3GEO.php.verifica();var retorno,p,par;retorno=function(retorno){switch(i3GEO.Interface.ATUAL){case"googlemaps":i3GEO.atualizaParametros(retorno.data.variaveis);i3GEO.Interface.googlemaps.zoom2extent(i3GEO.parametros.mapexten);break;case"openlayers":i3GEO.atualizaParametros(retorno.data.variaveis);i3GEO.Interface.openlayers.zoom2ext(i3GEO.mapa.getExtent().string);break}};p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php";par="funcao=zoomsel&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"zoomsel",retorno,par)},limpasel:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=limpasel&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"limpasel",retorno,par)},invertestatuslegenda:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=invertestatuslegenda&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"invertestatuslegenda",retorno,par)},aplicaCorClasseTema:function(funcao,idtema,idclasse,rgb){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=alteraclasse&opcao=alteracor&tema="+idtema+"&idclasse="+idclasse+"&cor="+rgb+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"aplicaCorClasseTema",retorno,par)},mudatransp:function(funcao,tema,valor){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=mudatransp&tema="+tema+"&valor="+valor+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"mudatransp",retorno,par)},copiatema:function(funcao,tema){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=copiatema&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("copiatema");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("copiatema",$trad("o1"));cpJSON.call(p,"copiatema",retorno,par)},mudanome:function(funcao,tema,valor){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=mudanome&tema="+tema+"&valor="+valor+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"mudanome",retorno,par)},contorno:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=contorno&tema="+tema+"&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"foo",retorno,par)},adicionaTemaWMS:function(funcao,servico,tema,nome,proj,formato,versao,nomecamada,tiporep,suportasld,formatosinfo,locaplic,sid,checked,allitens){var s,p,camadaArvore,par,ck;if(funcao===""){funcao=function(){i3GEO.janela.fechaAguarde();i3GEO.janela.snackBar({content:$trad("camadaadic")});i3GEO.atualiza()}}if(!allitens){allitens="nao"}if(!locaplic||locaplic===""){locaplic=i3GEO.configura.locaplic}if(!sid||sid===""){sid=i3GEO.configura.sid}if(checked||checked==false){s=servico+"&layers="+tema+"&style="+nome;s=s.replace("&&","&");camadaArvore=i3GEO.arvoreDeCamadas.pegaTema(s,"","wmsurl");if(camadaArvore){ck=i3GEO.arvoreDeCamadas.capturaCheckBox(camadaArvore.name);ck.checked=checked;ck.onclick();return}}p=locaplic+"/classesphp/mapa_controle.php",par="g_sid="+sid+"&funcao=adicionatemawms&servico="+servico+"&tema="+tema+"&nome="+nome+"&proj="+proj+"&formato="+formato+"&versao="+versao+"&nomecamada="+nomecamada+"&tiporep="+tiporep+"&suportasld="+suportasld+"&formatosinfo="+formatosinfo+"&allitens="+allitens;cpJSON.call(p,"adicionatemawms",funcao,par)},adicionaTemaSHP:function(funcao,path){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=adicionaTemaSHP&arq="+path,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"adicionaTemaSHP",retorno,par)},adicionaTemaIMG:function(funcao,path){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=adicionaTemaIMG&arq="+path,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"adicionaTemaIMG",retorno,par)},identifica:function(funcao,x,y,resolucao,opcao,locaplic,sid,tema,ext,listaDeTemas,wkt){if(x===null||y===null||(x==0&&y==0)){return}if(arguments.length===4){opcao="tip";locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid;ext="";listaDeTemas="";resolucao=5;wkt="nao"}if(arguments.length===5){locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid;ext="";listaDeTemas="";wkt="nao"}if(listaDeTemas===undefined){listaDeTemas=""}ext=i3GEO.util.extOSM2Geo(ext);var p=locaplic+"/classesphp/mapa_controle.php",par="funcao=identifica&wkt="+wkt+"&opcao="+opcao+"&xy="+x+","+y+"&resolucao="+resolucao+"&g_sid="+sid+"&ext="+ext+"&listaDeTemas="+listaDeTemas;if(opcao!=="tip"){par+="&tema="+tema}cpJSON.call(p,"identifica",funcao,par);return},reiniciaMapa:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=reiniciaMapa&g_sid="+i3GEO.configura.sid,retorno=function(retorno){funcao.call(funcao,retorno)};cpJSON.call(p,"reiniciaMapa",retorno,par)},procurartemas2:function(funcao,procurar,locaplic){if(arguments.length===2){locaplic=i3GEO.configura.locaplic}try{var p=locaplic+"/classesphp/mapa_controle.php",par="funcao=procurartemas2&map_file=&procurar="+procurar+"&idioma="+i3GEO.idioma.ATUAL,retorno=function(retorno){i3GEO.janela.fechaAguarde("procurartemas");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("procurartemas",$trad("o1"));cpJSON.call(p,"procurartemas",retorno,par)}catch(e){}},procurartemasestrela:function(funcao,nivel,fatorestrela,locaplic){if(arguments.length===3){locaplic=i3GEO.configura.locaplic}try{var p=locaplic+"/classesphp/mapa_controle.php",par="funcao=procurartemasestrela&map_file=&nivel="+nivel+"&fatorestrela="+fatorestrela+"&idioma="+i3GEO.idioma.ATUAL,retorno=function(retorno){i3GEO.janela.fechaAguarde("procurartemasestrela");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("procurartemasestrela",$trad("o1"));cpJSON.call(p,"foo",retorno,par)}catch(e){}},adtema:function(funcao,temas,locaplic,sid){if(arguments.length===2){i3GEO.php.verifica();locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}var p=locaplic+"/classesphp/mapa_controle.php",par="funcao=adtema&temas="+temas+"&g_sid="+sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("adtema");funcao.call(funcao,retorno);i3GEO.janela.snackBar({content:$trad("camadaadic")})};i3GEO.janela.abreAguarde("adtema",$trad("o1"));cpJSON.call(p,"adtema",retorno,par)},escalagrafica:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=escalagrafica&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"escalagrafica",funcao,par)},googlemaps:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=googlemaps&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("googlemaps");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("googlemaps",$trad("o1"));cpJSON.call(p,"googlemaps",retorno,par)},openlayers:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=openlayers&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("openlayers");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("openlayers",$trad("o1"));cpJSON.call(p,"openlayers",retorno,par)},corpo:function(funcao,tipoimagem){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=corpo&tipoimagem="+tipoimagem+"&g_sid="+i3GEO.configura.sid+"&interface="+i3GEO.Interface.ATUAL;cpJSON.call(p,"corpo",funcao,par)},converte2googlemaps:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=converte2googlemaps&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("converte2googlemaps");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("converte2googlemaps",$trad("o1"));cpJSON.call(p,"converte2googlemaps",retorno,par)},converte2openlayers:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=converte2openlayers&g_sid="+i3GEO.configura.sid,retorno=function(retorno){i3GEO.janela.fechaAguarde("converte2openlayers");funcao.call(funcao,retorno)};i3GEO.janela.abreAguarde("converte2openlayers",$trad("o1"));cpJSON.call(p,"converte2openlayers",retorno,par)},criamapa:function(funcao,parametros){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=criaMapa&"+parametros,cp=new cpaint();cp.set_response_type("JSON");cp.set_async(true);cp.set_transfer_mode("POST");cp.call(p,"criaMapa",funcao,par)},inicia:function(funcao,w,h){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=inicia&w="+w+"&h="+h+"&g_sid="+i3GEO.configura.sid+"&interface=",cp=new cpaint();if(i3GEO.Interface.openlayers.googleLike===true){par+="googlemaps"}else{par+=i3GEO.Interface.ATUAL}cp.set_response_type("JSON");cp.set_async(true);cp.set_transfer_mode("POST");cp.call(p,"iniciaMapa",funcao,par)},chaveGoogle:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=chavegoogle&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"chavegoogle",funcao,par)},listaRSSwsARRAY:function(funcao,tipo){var p=i3GEO.configura.locaplic+"/classesphp/wscliente.php",par="funcao=listaRSSwsARRAY&rss="+["|"]+"&tipo="+tipo;cpJSON.call(p,"listaRSSwsARRAY",funcao,par)},listaLayersWMS:function(funcao,servico,nivel,id_ws,nomelayer,tipo_ws){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=listaLayersWMS&servico="+servico+"&nivel="+nivel+"&id_ws="+id_ws+"&nomelayer="+nomelayer+"&tipo_ws="+tipo_ws;cpJSON.call(p,"listaLayersWMS",funcao,par)},listaLayersARCGISREST:function(funcao,id_ws,nomelayer){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="funcao=listaLayersARCGISREST&id_ws="+id_ws+"&nomelayer="+nomelayer+"&tipo_ws=ARCGISREST";cpJSON.call(p,"listaLayersARCGISREST",funcao,par)},buscaRapida:function(funcao,locaplic,servico,palavra){var p=locaplic+"/classesphp/mapa_controle.php",par="map_file=&funcao=buscaRapida&palavra="+palavra+"&servico="+servico;cpJSON.call(p,"buscaRapida",funcao,par)},listaItensTema:function(funcao,tema){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=listaitens&tema="+tema+"&ext="+i3GEO.mapa.getExtent().string;cpJSON.call(p,"listaItensTema",funcao,par)},listaValoresItensTema:function(funcao,tema,itemTema){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=listaunica&tema="+tema+"&item="+itemTema+"&ext="+i3GEO.mapa.getExtent().geo;cpJSON.call(p,"listaRegistros",funcao,par)},extRegistros:function(funcao,tema,reg){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=extregistros&registro="+reg+"&tema="+tema;cpJSON.call(p,"listaItensTema",funcao,par)},listaFontesTexto:function(funcao){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=listatruetype";cpJSON.call(p,"listaTrueType",funcao,par)},listaEpsg:function(funcao){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=listaEpsg&map_file=";cpJSON.call(p,"listaEpsg",funcao,par)},pegaData:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=pegadata&tema="+tema;cpJSON.call(p,"pegadata",funcao,par)},pegaMetaData:function(funcao,tema){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=pegametadata&tema="+tema;cpJSON.call(p,"pegametadata",funcao,par)},alteraData:function(funcao,tema,data,removemeta){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="g_sid="+i3GEO.configura.sid+"&funcao=alteradata&tema="+tema+"&novodata="+data+"&removemeta="+removemeta;cpJSON.call(p,"alteradata",funcao,par)},dadosPerfilRelevo:function(funcao,opcao,pontos,amostragem,item){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=dadosPerfilRelevo&opcao="+opcao,cp=new cpaint();cp.set_transfer_mode('POST');cp.set_response_type("JSON");cp.call(p,"foo",funcao,"&pontos="+pontos+"&amostragem="+amostragem+"&item="+item)},funcoesGeometriasWkt:function(funcao,listaWkt,operacao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=funcoesGeometriasWkt&operacao="+operacao,cp=new cpaint();cp.set_transfer_mode('POST');cp.set_response_type("JSON");cp.call(p,"foo",funcao,"&geometrias="+listaWkt)},listaVariavel:function(funcao,filtro_esquema){if(!filtro_esquema){filtro_esquema=""}var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaVariavel&g_sid="+i3GEO.configura.sid+"&filtro_esquema="+filtro_esquema;i3GEO.util.ajaxGet(p,funcao)},listaMedidaVariavel:function(codigo_variavel,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaMedidaVariavel&codigo_variavel="+codigo_variavel+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaParametrosMedidaVariavel:function(id_medida_variavel,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaParametro&id_medida_variavel="+id_medida_variavel+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaRegioesMedidaVariavel:function(id_medida_variavel,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaRegioesMedida&id_medida_variavel="+id_medida_variavel+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaValoresParametroMedidaVariavel:function(id_parametro_medida,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaValoresParametro&id_parametro_medida="+id_parametro_medida+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},relatorioVariavel:function(codigo_variavel,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=relatorioCompleto&codigo_variavel="+codigo_variavel+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaClassificacaoMedida:function(id_medida_variavel,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaClassificacaoMedida&id_medida_variavel="+id_medida_variavel+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaClasseClassificacao:function(id_classificacao,funcao){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaClasseClassificacao&id_classificacao="+id_classificacao;i3GEO.util.ajaxGet(p,funcao)},mapfileMedidaVariavel:function(funcao,id_medida_variavel,filtro,todasascolunas,tipolayer,titulolayer,id_classificacao,agruparpor,codigo_tipo_regiao,opacidade){if(!opacidade){opacidade=""}var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=mapfileMedidaVariavel&formato=json&codigo_tipo_regiao="+codigo_tipo_regiao+"&id_medida_variavel="+id_medida_variavel+"&filtro="+filtro+"&todasascolunas="+todasascolunas+"&tipolayer="+tipolayer+"&titulolayer="+titulolayer+"&id_classificacao="+id_classificacao+"&agruparpor="+agruparpor+"&opacidade="+opacidade+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaTipoRegiao:function(funcao,codigo_tipo_regiao){if(!codigo_tipo_regiao){codigo_tipo_regiao=""}var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaTipoRegiao&codigo_tipo_regiao="+codigo_tipo_regiao+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},mapfileTipoRegiao:function(funcao,codigo_tipo_regiao,outlinecolor,width,nomes){if(!outlinecolor){outlinecolor="255,0,0"}if(!width){width=1}if(!nomes){nome="nao"}var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=mapfileTipoRegiao&codigo_tipo_regiao="+codigo_tipo_regiao+"&g_sid="+i3GEO.configura.sid;p+="&outlinecolor="+outlinecolor+"&width="+width+"&nomes="+nomes;i3GEO.util.ajaxGet(p,funcao)},listaHierarquiaRegioes:function(funcao,codigo_tipo_regiao,codigoregiaopai,valorregiaopai){if(!codigoregiaopai){codigoregiaopai=""}if(!valorregiaopai){valorregiaopai=""}if(!codigo_tipo_regiao){codigo_tipo_regiao=""}var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaHierarquiaRegioes&codigo_tipo_regiao="+codigo_tipo_regiao+"&codigoregiaopai="+codigoregiaopai+"&valorregiaopai="+valorregiaopai+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},aplicaFiltroRegiao:function(funcao,codigo_tipo_regiao,codigo_regiao){var p=i3GEO.configura.locaplic+"/ferramentas/metaestat/analise.php?funcao=aplicaFiltroRegiao&codigo_tipo_regiao="+codigo_tipo_regiao+"&codigo_regiao="+codigo_regiao+"&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaCamadasMetaestat:function(funcao){var p=i3GEO.configura.locaplic+"/ferramentas/metaestat/analise.php?funcao=listaCamadasMetaestat&g_sid="+i3GEO.configura.sid;i3GEO.util.ajaxGet(p,funcao)},listaGruposMapaMetaestat:function(funcao,id_mapa){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaGruposMapa&id_mapa="+id_mapa;i3GEO.util.ajaxGet(p,funcao)},listaTemasMapaMetaestat:function(funcao,id_mapa_grupo){var p=i3GEO.configura.locaplic+"/classesphp/metaestat_controle.php?funcao=listaTemasMapa&id_mapa_grupo="+id_mapa_grupo;i3GEO.util.ajaxGet(p,funcao)},marcadores2shp:function(funcao){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?";par="funcao=marcadores2shp";i3GEO.util.ajaxGet(p+par,funcao)},listaInterfaces:function(funcao){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php",par="&map_file=&funcao=listainterfaces";cpJSON.call(p,"foo",funcao,par)}};