if(typeof(i3GEO)==='undefined'){i3GEO=[]}cpJSON=new cpaint();cpJSON.set_response_type("JSON");i3GEO.php={verifica:function(){if(i3GEO.configura.locaplic===undefined){alert("variavel i3GEO.configura.locaplic n�o esta definida")}if(i3GEO.configura.sid===undefined){alert("variavel i3GEO.configura.locaplic n�o esta definida")}},insereSHPgrafico:function(funcao,tema,x,y,itens,shadow_height,width,inclinacao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=insereSHPgrafico&tipo=pizza&tema="+tema+"&x="+x+"&y="+y+"&itens="+itens+"&shadow_height="+shadow_height+"&width="+width+"&inclinacao="+inclinacao+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"insereSHPgrafico",funcao)},insereSHP:function(funcao,tema,item,valoritem,xy){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=insereSHP&item="+item+"&valor="+valoritem+"&tema="+tema+"&xy="+xy+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"insereSHPgrafico",funcao)},pegaMensagens:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegaMensagens&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"pegaMensagem",funcao)},areaPixel:function(funcao,g_celula){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=areaPixel&celsize="+g_celula+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"areaPixel",funcao)},excluitema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.arvoreDeCamadas.LOCAPLIC+"/classesphp/mapa_controle.php?funcao=excluitema&temas="+tema+"&g_sid="+i3GEO.arvoreDeCamadas.SID;cpJSON.call(p,"excluitema",funcao)},reordenatemas:function(funcao,lista){i3GEO.php.verifica();var p=i3GEO.arvoreDeCamadas.LOCAPLIC+"/classesphp/mapa_controle.php?funcao=reordenatemas&lista="+lista+"&g_sid="+i3GEO.arvoreDeCamadas.SID;cpJSON.call(p,"reordenatemas",funcao)},criaLegendaHTML:function(funcao,tema,template){i3GEO.php.verifica();if(arguments.length===1){tema="";template="legenda2.htm"}if(arguments.length===2){template="legenda2.htm"}var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=criaLegendaHTML&tema="+tema+"&templateLegenda="+template+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"criaLegendaHTML",funcao)},inverteStatusClasse:function(funcao,tema,classe){i3GEO.php.verifica();var p=i3GEO.arvoreDeCamadas.LOCAPLIC+"/classesphp/mapa_controle.php?funcao=inverteStatusClasse&g_sid="+i3GEO.arvoreDeCamadas.SID+"&tema="+tema+"&classe="+classe;cpJSON.call(p,"inverteStatusClasse",funcao)},ligatemas:function(funcao,desligar,ligar,adicionar){i3GEO.php.verifica();if(arguments.length===3){adicionar="nao"}var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=ligatemas&desligar="+desligar+"&ligar="+ligar+"&adicionar="+adicionar+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"ligaDesligaTemas",funcao)},pegalistademenus:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegalistademenus&g_sid="+i3GEO.configura.sid+"&map_file=";cpJSON.call(p,"pegalistademenus",funcao)},pegalistadegrupos:function(funcao,id_menu,listasgrupos){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegalistadegrupos&map_file=&g_sid="+i3GEO.configura.sid+"&idmenu="+id_menu+"&listasistemas=nao&listasgrupos="+listasgrupos;cpJSON.call(p,"pegalistadegrupos",funcao)},pegalistadeSubgrupos:function(funcao,id_menu,id_grupo){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegalistadeSubgrupos&g_sid="+i3GEO.configura.sid+"&idmenu="+id_menu+"&grupo="+id_grupo+"&map_file=";cpJSON.call(p,"pegalistadeSubgrupos",funcao)},pegalistadetemas:function(funcao,id_menu,id_grupo,id_subgrupo){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegalistadetemas&g_sid="+i3GEO.configura.sid+"&idmenu="+id_menu+"&grupo="+id_grupo+"&subgrupo="+id_subgrupo+"&map_file=";cpJSON.call(p,"pegalistadetemas",funcao)},listaTemas:function(funcao,tipo,locaplic,sid){if(arguments.length===2){locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}var p=locaplic+"/classesphp/mapa_controle.php?funcao=listatemas&g_sid="+sid+"&tipo="+tipo;cpJSON.call(p,"listaTemas",funcao)},pegaSistemas:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegaSistemas&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"pegaSistemas",funcao)},listadrives:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=listaDrives&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"listaDrives",funcao)},listaarquivos:function(funcao,caminho){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=listaArquivos&diretorio="+caminho;cpJSON.call(p,"listaArquivos",funcao)},geo2utm:function(funcao,x,y){i3GEO.php.verifica();if($i("aguardeGifAberto")){return}var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=geo2utm&x="+x+"&y="+y+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"geo2utm",funcao)},desativacgi:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=desativacgi&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"desativacgi",funcao)},pegaMapas:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pegaMapas&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"pegaSistemas",funcao)},mudatamanho:function(funcao,altura,largura){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=mudatamanho&altura="+altura+"&largura="+largura+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"pegaSistemas",funcao)},ativalogo:function(funcao,altura,largura){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=ativalogo&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"ativalogo",funcao)},insereAnnotation:function(funcao,pin,xy,texto,position,partials,offsetx,offsety,minfeaturesize,mindistance,force,shadowcolor,shadowsizex,shadowsizey,outlinecolor,cor,sombray,sombrax,sombra,fundo,angulo,tamanho,fonte){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=inserefeature&pin="+pin+"&tipo=ANNOTATION&xy="+xy+"&texto="+texto+"&position="+position+"&partials="+partials+"&offsetx="+offsetx+"&offsety="+offsety+"&minfeaturesize="+minfeaturesize+"&mindistance="+mindistance+"&force="+force+"&shadowcolor="+shadowcolor+"&shadowsizex="+shadowsizex+"&shadowsizey="+shadowsizey+"&outlinecolor="+outlinecolor+"&cor="+cor+"&sombray="+sombray+"&sombrax="+sombrax+"&sombra="+sombra+"&fundo="+fundo+"&angulo="+angulo+"&tamanho="+tamanho+"&fonte="+fonte+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"inserefeature",funcao)},identificaunico:function(funcao,xy,tema,item){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=identificaunico&xy="+xy+"&resolucao=5&tema="+tema+"&item="+item+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"identificaunico",funcao)},recuperamapa:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=recuperamapa&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"recuperamapa",funcao)},criaLegendaImagem:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=criaLegendaImagem&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"criaLegendaImagem",funcao)},referenciadinamica:function(funcao,zoom,tipo){i3GEO.php.verifica();if(arguments.length===2){tipo="dinamico"}var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=referenciadinamica&g_sid="+i3GEO.configura.sid+"&zoom="+zoom+"&tipo="+tipo;cpJSON.call(p,"retornaReferenciaDinamica",funcao)},referencia:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=referencia&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"retornaReferencia",funcao)},pan:function(funcao,escala,tipo,x,y){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=pan&escala="+escala+"&tipo="+tipo+"&x="+x+"&y="+y+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"pan",funcao)},aproxima:function(funcao,nivel){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=aproxima&nivel="+nivel+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"aproxima",funcao)},afasta:function(funcao,nivel){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=afasta&nivel="+nivel+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"afasta",funcao)},zoomponto:function(funcao,x,y){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=zoomponto&pin=pin&xy="+x+" "+y+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"zoomponto",funcao)},localizaIP:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=localizaIP&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"localizaIP",funcao)},mudaext:function(funcao,tipoimagem,ext,locaplic,sid){var retorno,p;if(arguments.length===3){i3GEO.php.verifica();locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}if(ext==='undefined'){alert("extensao nao definida");return}retorno=function(retorno){if(i3GEO.Interface.ATUAL==="googlemaps"){i3GEO.Interface.googlemaps.zoom2extent(ext);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.zoom2ext(ext);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="padrao"){funcao.call()}};p=locaplic+"/classesphp/mapa_controle.php?funcao=mudaext&tipoimagem="+tipoimagem+"&ext="+ext+"&g_sid="+sid;cpJSON.call(p,"mudaext",retorno)},mudaescala:function(funcao,escala){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=mudaescala&escala="+escala+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"mudaescala",funcao)},aplicaResolucao:function(funcao,resolucao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=crialente&resolucao="+resolucao+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"crialente",funcao)},geradestaque:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=geradestaque&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"geradestaque",funcao)},selecaopt:function(funcao,tema,xy,tipo,tolerancia){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=selecaopt&tema="+tema+"&tipo="+tipo+"&xy="+xy+"&tolerancia="+tolerancia+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"selecaoPT",funcao)},selecaobox:function(funcao,tema,tipo,box){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=selecaobox&ext="+box+"&g_sid="+i3GEO.configura.sid+"&tipo="+tipo+"&tema="+tema;cpJSON.call(p,"selecaobox",funcao)},sobetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=sobetema&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"sobetema",funcao)},descetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?&funcao=descetema&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"descetema",funcao)},fontetema:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=fontetema&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"fontetema",funcao)},zoomtema:function(funcao,tema){i3GEO.php.verifica();var retorno,p;retorno=function(retorno){if(i3GEO.Interface.ATUAL==="googlemaps"){eval(retorno.data.variaveis);i3GEO.Interface.googlemaps.zoom2extent(mapexten);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="openlayers"){eval(retorno.data.variaveis);i3GEO.Interface.openlayers.zoom2ext(mapexten);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="padrao"){funcao.call()}};p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=zoomtema&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"zoomtema",retorno)},zoomsel:function(funcao,tema){i3GEO.php.verifica();var retorno,p;retorno=function(retorno){if(i3GEO.Interface.ATUAL==="googlemaps"){eval(retorno.data.variaveis);i3GEO.Interface.googlemaps.zoom2extent(mapexten);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="openlayers"){eval(retorno.data.variaveis);i3GEO.Interface.openlayers.zoom2ext(mapexten);i3GEO.janela.fechaAguarde()}if(i3GEO.Interface.ATUAL==="padrao"){funcao.call()}};p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=zoomsel&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"zoomsel",retorno)},limpasel:function(funcao,tema){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=limpasel&tema="+tema+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"limpasel",funcao)},mudatransp:function(funcao,tema,valor){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=mudatransp&tema="+tema+"&valor="+valor+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"mudatransp",funcao)},mudanome:function(funcao,tema,valor){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=mudanome&tema="+tema+"&valor="+valor+"&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"mudanome",funcao)},adicionaTemaWMS:function(funcao,servico,tema,nome,proj,formato,versao,nomecamada,tiporep,suportasld,formatosinfo,locaplic,sid){if(arguments.length===11){i3GEO.php.verifica();locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}var p=locaplic+"/classesphp/mapa_controle.php?g_sid="+sid+"&funcao=adicionatemawms&servico="+servico+"&tema="+tema+"&nome="+nome+"&proj="+proj+"&formato="+formato+"&versao="+versao+"&nomecamada="+nomecamada+"&tiporep="+tiporep+"&suportasld="+suportasld+"&formatosinfo="+formatosinfo;cpJSON.call(p,"adicionatemawms",funcao)},adicionaTemaSHP:function(funcao,path){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=adicionaTemaSHP&arq="+path;cpJSON.call(p,"adicionaTemaSHP",funcao)},adicionaTemaIMG:function(funcao,path){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?g_sid="+i3GEO.configura.sid+"&funcao=adicionaTemaIMG&arq="+path;cpJSON.call(p,"adicionaTemaIMG",funcao)},identifica:function(funcao,x,y,resolucao,locaplic,sid){var p=locaplic+"/classesphp/mapa_controle.php?funcao=identifica&opcao=tip&xy="+x+","+y+"&resolucao=5&g_sid="+sid;cpJSON.call(p,"identifica",funcao)},identifica2:function(funcao,x,y,resolucao,opcao,locaplic,sid,tema){if(arguments.length===4){opcao="tip";locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}if(arguments.length===5){locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}var p=locaplic+"/classesphp/mapa_controle.php?funcao=identifica2&opcao="+opcao+"&xy="+x+","+y+"&resolucao=5&g_sid="+sid;if(opcao!=="tip"){p+="&tema="+tema}cpJSON.call(p,"identifica",funcao)},reiniciaMapa:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=reiniciaMapa&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"reiniciaMapa",funcao)},procurartemas:function(funcao,procurar,locaplic){if(arguments.length===2){locaplic=i3GEO.configura.locaplic}var p=locaplic+"/classesphp/mapa_controle.php?funcao=procurartemas&map_file=&procurar="+procurar;cpJSON.call(p,"procurartemas",funcao)},adtema:function(funcao,temas,locaplic,sid){if(arguments.length===2){i3GEO.php.verifica();locaplic=i3GEO.configura.locaplic;sid=i3GEO.configura.sid}var p=locaplic+"/classesphp/mapa_controle.php?funcao=adtema&temas="+temas+"&g_sid="+sid;cpJSON.call(p,"adtema",funcao)},escalagrafica:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=escalagrafica&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"escalagrafica",funcao)},flamingo:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=montaFlamingo&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"montaFlamingo",funcao)},openlayers:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=openlayers&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"openlayers",funcao)},corpo:function(funcao,tipoimagem){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=corpo&tipoimagem="+tipoimagem+"&g_sid="+i3GEO.configura.sid+"&interface="+i3GEO.Interface.ATUAL;cpJSON.call(p,"corpo",funcao)},criamapa:function(funcao,parametros){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=criaMapa&"+parametros;cpJSON.call(p,"criaMapa",funcao)},inicia:function(funcao,embedLegenda,w,h){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=inicia&embedLegenda="+embedLegenda+"&w="+w+"&h="+h+"&g_sid="+i3GEO.configura.sid+"&interface="+i3GEO.Interface.ATUAL;cpJSON.call(p,"iniciaMapa",funcao)},chaveGoogle:function(funcao){i3GEO.php.verifica();var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=chavegoogle&g_sid="+i3GEO.configura.sid;cpJSON.call(p,"chavegoogle",funcao)},listaRSSwsARRAY:function(funcao,tipo){var p=i3GEO.configura.locaplic+"/classesphp/wscliente.php?funcao=listaRSSwsARRAY&rss="+["|"]+"&tipo="+tipo;cpJSON.call(p,"listaRSSwsARRAY",funcao)},listaLayersWMS:function(funcao,servico,nivel,id_ws,nomelayer){var p=i3GEO.configura.locaplic+"/classesphp/mapa_controle.php?funcao=listaLayersWMS&servico="+servico+"&nivel="+nivel+"&id_ws="+id_ws+"&nomelayer="+nomelayer;cpJSON.call(p,"listaLayersWMS",funcao)},buscaRapida:function(funcao,locaplic,servico,palavra){var p=locaplic+"/classesphp/mapa_controle.php?map_file=&funcao=buscaRapida&palavra="+palavra+"&servico="+servico;cpJSON.call(p,"buscaRapida",funcao)}};