if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.arvoreDeCamadas={FUNCOES:{farolescala:true,excluir:true,sobe:true,desce:true,fonte:true,zoomtema:true,compartilhar:true,opacidade:true,mudanome:true,procurar:true,toponimia:true,etiquetas:true,filtrar:true,tabela:true,grafico:true,editorlegenda:true,destacar:true,cortina:true,sql:true,comentar:true,temporizador:true,wms:true,tme:true,copia:true,storymap:true,animagif:true},CAMADAS:"",FILTRO:"",CAMADASINDEXADAS:[],config:{"idOnde":"listaTemas","aposIniciar":"","templateCamada":"templates/camada.html","idListaFundo":"","templateCamadaFundo":"templates/camadaFundo.html","idListaLayersGr":"","templateCamadaGr":"templates/camadaGr.html","verificaAbrangencia":""},carregaTemplates:function(){var t1=i3GEO.arvoreDeCamadas.config.templateCamada,t2=i3GEO.arvoreDeCamadas.config.templateCamadaFundo,t3=i3GEO.arvoreDeCamadas.config.templateCamadaGr;$.ajax(t1).always(function(r1){i3GEO.template.camada=r1;if(r1.status){i3GEO.template.camada=""}$.ajax(t2).always(function(r2){i3GEO.template.camadaFundo=r2;if(r2.status){i3GEO.template.camadaFundo=""}$.ajax(t3).always(function(r3){i3GEO.template.camadaGr=r3;if(r3.status){i3GEO.template.camadaGr=""}i3GEO.arvoreDeCamadas.inicia()})})})},inicia:function(config){if(config){$.each(config,function(i,v){if(v!=undefined){i3GEO.arvoreDeCamadas.config[i]=v}})}if(!i3GEO.template.camada||!i3GEO.template.camadaFundo){i3GEO.arvoreDeCamadas.carregaTemplates();return}else{config=i3GEO.arvoreDeCamadas.config;var novoel,temp;i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS);if(!$i(config.idOnde)){return}if(config.verificaAbrangencia!=""){i3GEO.eventos.adicionaEventos("NAVEGAMAPA",["i3GEO.arvoreDeCamadas.verificaAbrangenciaTemas()"])}if(config.aposIniciar!==""){if(jQuery.isFunction(config.aposIniciar)){config.aposIniciar.call()}}}},adicionaLayersGr:function(){if(i3GEO.Interface.ATUAL!="openlayers"){return}var temp=$i(i3GEO.arvoreDeCamadas.config.idListaLayersGr),layers=i3geoOL.getLayersGr(),lista=[],camada={};if(temp){$.each(layers,function(i,layer){var p=layer.getProperties();camada={...i3GEO.idioma.OBJETOIDIOMA};camada.name=p.name;camada.tema=p.title;camada.locaplic=i3GEO.configura.locaplic;if(layer.getVisible()==true){camada.checked="checked"}else{camada.checked=""}lista.push(camada)});var t=Mustache.render("{{#data}}"+i3GEO.template.camadaGr+"{{/data}}",{"data":lista});$(temp).html(t);$(".listaLayersGrBtn").draggable({helper:"clone",appendTo:$("body"),start:function(event,ui){$(this).hide()},stop:function(event,ui){$(this).css({"position":"absolute","top":(ui.position.top),"left":(ui.position.left)});$(".layersGrForm").css({"background":"white","max-height":"300px","overflow":"auto"});$("body").append($(this));$(this).show();$(this).css("display","")}})}},existeCamadaSel:function({msg=true}={}){var sel=false;$.each(i3GEO.arvoreDeCamadas.CAMADAS,function(i,v){sel=v.sel.toLowerCase()!=="sim"?false:true});if(msg==true&&sel==false){i3GEO.janela.snackBar({content:$trad("nenhumaSel")})}return sel},verifyFilter:function(camada,f){if(!f){f=i3GEO.arvoreDeCamadas.FILTRO}if(f==""){return true}var mostra=true;if(f==="desligados"&&camada.status!=0){mostra=false}if(f==="ligados"&&camada.status==0){mostra=false}if(f==="selecionados"&&camada.sel.toLowerCase()!=="sim"){mostra=false}if(f==="download"&&camada.download.toLowerCase()!=="sim"){mostra=false}if(f==="wms"&&camada.connectiontype*1!==7){mostra=false}if(f==="raster"&&camada.type*1!==3){mostra=false}if(f==="toponimia"&&camada.type*1!==4){mostra=false}return mostra},atualiza:function(temas,forca){if(i3GEO.template.camada==undefined||i3GEO.template.camada==false){return}if(arguments.length===0){temas=i3GEO.arvoreDeCamadas.CAMADAS;i3GEO.arvoreDeCamadas.CAMADAS="";forca=false}var clone=[],camada={},config=i3GEO.arvoreDeCamadas.config,temp;temp=$i(config.idOnde);if(temp){if(forca===true){temp.innerHTML=""}if(temp.innerHTML!==""){if(i3GEO.arvoreDeCamadas.comparaTemas(temas,i3GEO.arvoreDeCamadas.CAMADAS)){i3GEO.arvoreDeCamadas.CAMADAS=temas;return}}}i3GEO.arvoreDeCamadas.CAMADAS=temas;i3GEO.arvoreDeCamadas.CAMADASINDEXADAS=[];$.each(i3GEO.arvoreDeCamadas.CAMADAS,function(i,tema){var mostra=true;i3GEO.pluginI3geo.aplicaPropriedades(tema);camada={};camada.name=tema.name;camada.tema=tema.tema;if(tema.status!=0){camada.checked="checked"}else{camada.checked=""}if(tema.sel&&tema.sel.toLowerCase()==="sim"){camada.classeCss="camadaSelecionada"}else{camada.classeCss=""}if(temp&&i3GEO.arvoreDeCamadas.FILTRO!==""){mostra=i3GEO.arvoreDeCamadas.verifyFilter(tema)}if(temp&&mostra==true){i3GEO.arvoreDeCamadas.montaIconesTema(tema,camada);i3GEO.arvoreDeCamadas.montaOpcoesTema(tema,camada);i3GEO.arvoreDeCamadas.montaParametrosTema(tema,camada);if(tema.iconetema!==""){camada.iconetema="<img class='i3GEOiconeTema' src='"+tema.iconetema+"' />"}if(tema.maxscaledenom&&(tema.maxscaledenom*1>i3GEO.parametros.mapscale*1&&tema.minscaledenom*1<i3GEO.parametros.mapscale*1)){camada.rangeScale="out";camada.rangeScaleMsg=$trad("rangeScaleMsg")}else{camada.rangeScale="in"}if(tema.escondido.toLowerCase()!=="sim"){clone.push(camada)}}i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[camada.name]=tema});if(temp){var t=Mustache.render("{{#data}}"+i3GEO.template.camada+"{{/data}}",{"data":clone});$("#"+config.idOnde).html(t);$("#"+config.idOnde).sortable({scroll:false,axis:"y",revert:true,update:function(event,ui){var els=i3GEO.arvoreDeCamadas.listaLigadosDesligadosArvore(config.idOnde);var lista=els[2].join(",");var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true)};i3GEO.php.reordenatemas(temp,lista)}})}i3GEO.arvoreDeCamadas.adicionaCamadasDeFundo(config);i3GEO.arvoreDeCamadas.adicionaLayersGr();i3GEO.eventos.executaEventos(i3GEO.eventos.ATUALIZAARVORECAMADAS)},adicionaCamadasDeFundo:function(config){if(i3GEO.Interface.ATUAL=="openlayers"){var temp=temp=$i(config.idOnde);if(temp&&$("#"+config.idListaFundo).html()==""){clone=[];$.each(i3GEO.Interface.openlayers.LAYERSADICIONAIS,function(i,layer){camada={};temp=layer.getProperties();camada.name="camadaDeFundo";if(temp.preview){camada.preview=temp.preview}else{camada.preview=""}camada.value=temp.name;camada.title=temp.title;if(temp.visible===true){camada.checked="checked"}else{camada.checked=""}clone.push(camada)});var t=Mustache.to_html("{{#data}}"+i3GEO.template.camadaFundo+"{{/data}}",{"data":clone});$("#"+config.idListaFundo).html(t);$("#"+config.idListaFundo+" label").tooltip({animation:false,trigger:"hover",placement:"auto",html:true,template:"<div class='tooltip ' ><div class='tooltip-inner'></div></div>"});$.each(clone,function(i,v){var slide=$i("slideFundo"+v.value);noUiSlider.create(slide,{connect:"lower",start:[100],range:{'min':[0],'max':[100]},name:v.value});slide.noUiSlider.on('update',function(values,handle){i3GEO.Interface.aplicaOpacidade(values[0]*1,this.options.name)})})}}},ligaDesligaTemas:function(lista,status){},atualizaLegenda:function(idtema){},montaTextoTema:function(tema){if(i3GEO.tema.TEMPORIZADORESID[tema.name]==undefined&&tema.temporizador!=""){i3GEO.tema.temporizador(tema.name,tema.temporizador)}return(html)},montaOpcoesTema:function(temaObj,camada){vetor="hidden";if((temaObj.type<3)&&(temaObj.connectiontype!==7)){vetor=""}if(temaObj.plugini3geo&&(temaObj.plugini3geo.plugin=="layerkml"||temaObj.plugini3geo.plugin=="layergeojson")){vetor="hidden"}camada.isnotvetor=vetor;camada.ferramentasTexto=$trad("u15a");camada.ferramentasTitle=$trad("ferramCamadas");camada.removerTexto=$trad("t12");camada.removerTitle=$trad("t12a");camada.sobeTexto=$trad("t13");camada.sobeTitle=$trad("t14");camada.desceTexto=$trad("t15");camada.desceTitle=$trad("t16");camada.tabelaTexto=$trad("tabela");camada.tabelaTitle=$trad("t30");camada.limpaselTexto=$trad("t4");camada.zoomSelTexto=$trad("t4a");camada.linkTexto=$trad("a9");camada.editorlegendaTexto=$trad("t33");camada.procurarTexto=$trad("t23");camada.topoTexto=$trad("t25");camada.etiquetasTexto=$trad("t27");camada.filtroTexto=$trad("t29");camada.selecaoTexto=$trad("x51");camada.graficoTexto=$trad("t37");camada.wmsTexto="WMS-OGC";camada.tmeTexto=$trad("t49");camada.topoTexto=$trad("x56");camada.nomeCamada=camada.tema;camada.opaCamada=camada.transparency;camada.editorlegendaTexto=$trad("t33");camada.coresTexto=$trad("esquemadecores");camada.copiaTexto=$trad("copiaCamada");camada.contornoTexto=$trad("contorno");camada.opacidade=$trad("t20");camada.cortina=$trad("t42");camada.variaEscala=$trad("variaEscala");camada.opaCamada=temaObj.transparency;if(temaObj.zoomtema.toLowerCase()==="sim"){camada.zoomtemaTexto=$trad("t17");camada.zoomtemaTitle=$trad("t18")}else{camada.zoomtema="hidden"}if(temaObj.sel.toLowerCase()==="sim"){camada.selTexto=$trad("t5");camada.selTitle=$trad("t4")}else{camada.sel="hidden"}if(temaObj.sel.toLowerCase()==="sim"){camada.zoomSelTexto=$trad("t4a")}else{camada.zoomsel="hidden"}if(temaObj.link_tema!=""&&temaObj.features.toLowerCase()!=="sim"&&temaObj.name!="mundo"){camada.linkTexto=$trad("a9");camada.linkTitle=$trad("a9")}else{camada.link="hidden"}if(temaObj.download.toLowerCase()==="sim"||temaObj.download===""&&temaObj.features.toLowerCase()!=="sim"){camada.downloadTexto="Download";camada.downloadTitle=$trad("t6")}else{camada.download="hidden"}if(temaObj.permiteogc.toLowerCase()==="sim"){camada.permiteogcTexto="OGC"}else{camada.permiteogc="hidden"}return camada},montaParametrosTema:function(temaObj,camada){if(temaObj.ferramentas){var html="",fer="",fers=temaObj.ferramentas;for(fer in fers){if(i3GEO.configura.ferramentasLayers[fer]&&i3GEO.configura.ferramentasLayers[fer].parametrosForm){html+=i3GEO.configura.ferramentasLayers[fer].parametrosForm(temaObj)}}camada.formsFerramentas=html}},montaIconesTema:function(temaObj,camada){camada.farol="hidden";if(temaObj.escala!=0){if(temaObj.escala*1<i3GEO.parametros.mapscale*1){camada.farol="green";camada.farolTitle=$trad("t9")}if(temaObj.escala*1>i3GEO.parametros.mapscale*1){camada.farol="red";camada.farolTitle=$trad("t10")}if(temaObj.escala===0){camada.farol="yellow";camada.farolTitle=$trad("t11")}}if(temaObj.contextoescala.toLowerCase()==="sim"){camada.contextoescala="";camada.contextoescalaTitle=$trad("t36")}else{camada.contextoescala="hidden"}if(temaObj.plugini3geo){var iconePlugin=i3GEO.pluginI3geo.clickArvoreDeCamadas(temaObj);if(iconePlugin!=false){camada.iconePlugin=iconePlugin}}if(temaObj.ferramentas){var html="",fer="",fers=temaObj.ferramentas;for(fer in fers){if(i3GEO.configura.ferramentasLayers[fer]&&i3GEO.configura.ferramentasLayers[fer].icone){html+=i3GEO.configura.ferramentasLayers[fer].icone(temaObj.name)}}camada.iconeFerramentas=html}return camada},atualizaFarol:function(mapscale){var cor,farol,l,ltema,escala,iu=i3GEO.util,im=i3GEO.configura.locaplic+"/imagens/",camadas=i3GEO.arvoreDeCamadas.CAMADAS;farol="maisamarelo.png";cor="yellow";l=camadas.length-1;if(l>=0){do{ltema=camadas[l];escala=ltema.escala;if(escala!=0){if(escala*1<mapscale*1){farol="maisverde.png";cor="green"}if(escala*1>mapscale*1){farol="maisvermelho.png";cor="red"}if(escala*1===0){farol="maisamarelo.png";cor="yellow"}$("#farol"+ltema.name).css("color",cor)}}while(l--)}},aplicaTemas:function(tipo){if(arguments.length===0){tipo="normal"}var t="",temp;if(tipo==="normal"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem")}if(tipo==="ligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca")}if(tipo==="desligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca")}temp=function(){i3GEO.atualiza();i3GEO.janela.fechaAguarde("redesenha")};if(tipo==="normal"){i3GEO.php.ligatemas(temp,t[1].toString(),t[0].toString());return}if(tipo==="ligartodos"){i3GEO.php.ligatemas(temp,"",t[2].toString());return}if(tipo==="desligartodos"){i3GEO.php.ligatemas(temp,t[2].toString(),"")}},listaLigadosDesligados:function(){if(!i3GEO.arvoreDeCamadas.CAMADAS){return[[],[],[],[]]}var i=0,filtrados=[],ligados=[],desligados=[],todos=[],camada,camadas=i3GEO.arvoreDeCamadas.CAMADAS;i=camadas.length;while(i>0){i-=1;camada=camadas[i];todos.push(camada["name"]);if(parseInt(camada["status"],10)===2){ligados.push(camada["name"])}else{desligados.push(camada["name"])}if(i3GEO.arvoreDeCamadas.verifyFilter(camada)==true){filtrados.push(camada["name"])}}return([ligados,desligados,todos,filtrados])},listaLigadosDesligadosArvore:function(onde){if(!i3GEO.arvoreDeCamadas.CAMADAS){return[[],[],[]]}var n,i,ligados=[],desligados=[],todos=[],camada,camadas;camadas=$i(onde).getElementsByTagName("input");n=camadas.length;for(i=0;i<n;i++){camada=camadas[i];todos.push(camada.value);if(camada.checked==true){ligados.push(camada["name"])}else{desligados.push(camada["name"])}}return([ligados,desligados,todos])},capturaCheckBox:function(tema){var onde=$i(i3GEO.arvoreDeCamadas.config.idOnde),camadas,n,i;if(onde){camadas=onde.getElementsByTagName("input");n=camadas.length;for(i=0;i<n;i++){if(camadas[i].name==tema){return camadas[i]}}}return false},comparaTemas:function(novo,atual){try{var novon=novo.length,i;if(novon!==atual.length){return(false)}for(i=0;i<novon;i+=1){if(novo[i].name!==atual[i].name){return(false)}if(novo[i].tema!==atual[i].tema){return(false)}if(novo[i].sel!==atual[i].sel){return(false)}if(novo[i].status!==atual[i].status){return(false)}}return(true)}catch(e){return true}},pegaTema:function(valor,camadas,parametro){var i;if(!camadas||camadas==""){camadas=i3GEO.arvoreDeCamadas.CAMADAS}else{camadas=i3GEO.arvoreDeCamadas.converteChaveValor2normal(camadas)}if(!parametro){parametro="name"}i=camadas.length;while(i>0){i-=1;if(camadas[i][parametro]===valor){return camadas[i]}}return""},filtraCamadas:function(propriedade,valor,operador,camadas){if(!camadas){camadas=i3GEO.arvoreDeCamadas.CAMADAS}var resultado,i=0,temp,nelementos=camadas.length,ltema;resultado=[];if(nelementos>0){do{ltema=camadas[i];if(ltema.escondido.toLowerCase()!=="sim"){temp=ltema[propriedade];if(operador==="igual"){if(temp+"".toLowerCase()==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="diferente"){if(temp+"".toLowerCase()!==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="menor"){if(temp+"".toLowerCase()<valor+"".toLowerCase()){resultado.push(ltema)}}}i+=1}while(i<nelementos)}return resultado},alteraPropCamadas:function(propriedade,valor,camada){var i=0,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.name===camada){ltema[propriedade]=valor}i+=1}while(i<nelementos)}},verificaAbrangenciaTemas:function(){var nos=$("#"+i3GEO.arvoreDeCamadas.config.idOnde).find("input");$.each(nos,function(i,no){var ltema=i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[no.value];var temp=ltema.exttema;if(temp!==""&&temp!=undefined){if(i3GEO.util.intersectaBox(temp,i3GEO.parametros.mapexten)===false){$(no).addClass(i3GEO.arvoreDeCamadas.config.verificaAbrangencia)}else{$(no).removeClass(i3GEO.arvoreDeCamadas.config.verificaAbrangencia)}}})},verificaAplicaExtensao:function(){var i=0,temp="",nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;try{if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.aplicaextensao.toLowerCase()==="sim"){temp=ltema.name}i+=1}while(i<nelementos)}}catch(e){return""}return temp},converteChaveValor2normal:function(obj){if(obj.chaves){var i,tema,j,t,chaves=obj.chaves,temas=obj.valores,ntemas=temas.length,nchaves=chaves.length,novo=[];for(i=0;i<ntemas;i++){tema=temas[i];t={};for(j=0;j<nchaves;j++){t[chaves[j]]=tema[j]}novo.push(t)}return novo}else{return obj}},registaCamadas:function(obj){var i;obj=i3GEO.arvoreDeCamadas.converteChaveValor2normal(obj);i3GEO.arvoreDeCamadas.CAMADAS=obj;i3GEO.arvoreDeCamadas.CAMADASINDEXADAS=[];$.each(i3GEO.arvoreDeCamadas.CAMADAS,function(i,tema){i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[tema.name]=tema})},dialogo:{filtro:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.filtro()","filtroarvore","filtroarvore","dependencias.php","i3GEOF.filtroarvore.start()")},excluir:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.excluir()","excluirarvore","excluirarvore","dependencias.php","i3GEOF.excluirarvore.start()")}}};