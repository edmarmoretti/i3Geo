if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.arvoreDeCamadas={FUNCOES:{farolescala:true,excluir:true,sobe:true,desce:true,fonte:true,zoomtema:true,compartilhar:true,opacidade:true,mudanome:true,procurar:true,toponimia:true,etiquetas:true,filtrar:true,tabela:true,grafico:true,editorlegenda:true,destacar:true,cortina:true,sql:true,comentar:true,temporizador:true,wms:true,tme:true,copia:true,storymap:true,animagif:true},CAMADAS:"",VERIFICAABRANGENCIATEMAS:false,CONFIG:{"idOnde":"","aposIniciar":"","idTemplateCamada":"","idListaFundo":"","idTemplateCamadaFundo":""},inicia:function(config){if(config){$.each(config,function(i,v){i3GEO.arvoreDeCamadas.CONFIG[i]=v})}config=i3GEO.arvoreDeCamadas.CONFIG;var novoel,temp;if(!$i(config.idOnde)){return}i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS);if(config.aposIniciar!==""){if(jQuery.isFunction(config.aposIniciar)){config.aposIniciar.call()}}},atualiza:function(temas,forca){if(arguments.length===0){temas=i3GEO.arvoreDeCamadas.CAMADAS;i3GEO.arvoreDeCamadas.CAMADAS="";forca=false}var clone=[],camada={},config=i3GEO.arvoreDeCamadas.CONFIG,temp;temp=$i(config.idOnde);if(temp){if(forca===true){temp.innerHTML=""}if(temp.innerHTML!==""){if(i3GEO.arvoreDeCamadas.comparaTemas(temas,i3GEO.arvoreDeCamadas.CAMADAS)){i3GEO.arvoreDeCamadas.CAMADAS=temas;return}}}else{return}i3GEO.arvoreDeCamadas.CAMADAS=temas;$.each(i3GEO.arvoreDeCamadas.CAMADAS,function(i,tema){i3GEO.pluginI3geo.aplicaPropriedades(tema);camada={};camada.name=tema.name;camada.tema=tema.tema;if(tema.status!=0){camada.checked="checked"}else{camada.checked=""}if(tema.sel&&tema.sel.toLowerCase()==="sim"){camada.classeCss="camadaSelecionada"}else{camada.classeCss=""}i3GEO.arvoreDeCamadas.montaIconesTema(tema,camada);i3GEO.arvoreDeCamadas.montaOpcoesTema(tema,camada);if(tema.iconetema!==""){camada.iconetema="<img class='i3GEOiconeTema' src='"+tema.iconetema+"' />"}if(tema.escondido.toLowerCase()!=="sim"){clone.push(camada)}});var t=Mustache.render("{{#data}}"+$("#"+config.idTemplateCamada).html()+"{{/data}}",{"data":clone});$("#"+config.idOnde).html(t);$("#"+config.idOnde).sortable({scroll:false,axis:"y",revert:true,update:function(event,ui){var els=i3GEO.arvoreDeCamadas.listaLigadosDesligados();var lista=els[2].join(",");var temp=function(retorno){i3GEO.atualiza(retorno);if(i3GEO.Interface.ATUAL==="openlayers"){i3GEO.Interface.openlayers.ordenaLayers()}i3GEO.arvoreDeCamadas.atualiza(i3GEO.arvoreDeCamadas.CAMADAS,true)};i3GEO.php.reordenatemas(temp,lista)}});if(i3GEO.Interface.ATUAL=="openlayers"){if($("#"+config.idListaFundo).html()==""){clone=[];$.each(i3GEO.Interface.openlayers.LAYERSADICIONAIS,function(i,layer){camada={};temp=layer.getProperties();camada.name="camadaDeFundo";camada.value=temp.name;camada.title=temp.title;if(temp.visible===true){camada.checked="checked"}else{camada.checked=""}clone.push(camada)});var t=Mustache.to_html("{{#data}}"+$("#"+config.idTemplateCamadaFundo).html()+"{{/data}}",{"data":clone});$("#"+config.idListaFundo).html(t)}}},ligaDesligaTemas:function(lista,status){},mostraLegenda:function(node){var retorna,idtema=node.data.id;retorna=function(retorno){var original={data:""},i,re,tabela="",linhas,linha,colunas,incluir,elementos,nelementos,inputs,desativar,nindices;if(retorno.data&&retorno.data.legenda){original=retorno;retorno=retorno.data.legenda;if(retorno[0]){if((navn)&&(!retorno[0].imagem)){tabela=retorno}else{i=retorno[0].imagem;re=new RegExp("tiff","g");i=i.replace(re,'png');tabela="<img src='"+i+"' />"}retorno=""}else{linhas=retorno.split("#");if(linhas.length>1){linhas=retorno.split("|");tabela="<table>";linha=linhas.length-1;if(linha>=0){do{colunas=linhas[linha].split("#");re=new RegExp("'","g");tabela+="<tr style='border-top:1px solid rgb(240,240,240);'><td><img src='"+colunas[4]+"' </td><td style='text-align:left'>"+colunas[2]+"</td></tr>"}while(linha--)}tabela+="</table><br>"}else if(retorno){tabela=retorno}}}else if(retorno&&retorno.data){tabela="<img src='"+retorno.data[0].imagem+"' />"}incluir="<div style='text-align:left' id='"+idtema+"verdiv"+"'>"+tabela+"</div>";new YAHOO.widget.HTMLNode({html:incluir,enableHighlight:false,expanded:false},node);node.loadComplete();elementos=document.getElementById(idtema+"verdiv").getElementsByTagName("input");nelementos=elementos.length;inputs=[];i=0;if(nelementos>0){do{if(elementos[i].type==="checkbox"){inputs.push(elementos[i])}i++}while(i<nelementos)}if(original&&original.data&&original.data.desativar&&original.data.desativar[idtema]){desativar=original.data.desativar[idtema];nindices=desativar.length;i=0;if(nindices>0){do{inputs[desativar[i]].checked=false;i++}while(i<nindices)}}};if(i3GEO.arvoreDeCamadas.TEMPLATELEGENDA!==""){i3GEO.php.criaLegendaHTML(retorna,idtema,i3GEO.arvoreDeCamadas.TEMPLATELEGENDA)}else{i3GEO.php.criaLegendaHTML(retorna,idtema)}},atualizaLegenda:function(idtema){},escolheCorClasse:function(leg){var obj,novoel;leg=leg.parentNode.getElementsByTagName("input")[0];if(!$i("tempinputcorclasse")){novoel=document.createElement("input");novoel.id="tempinputcorclasse";novoel.style.display="none";novoel.alt="objeto criado para guardar dados da funcao escolohercorclasse";novoel.onchange="";document.body.appendChild(novoel)}obj=$i("tempinputcorclasse");obj.value="";obj.tema=leg.name;obj.idclasse=leg.value;obj.onchange=function(){var obj=$i("tempinputcorclasse");i3GEO.tema.alteracorclasse(obj.tema,obj.idclasse,obj.value)};i3GEO.util.abreCor("","tempinputcorclasse")},montaTextoTema:function(tema){if(i3GEO.tema.TEMPORIZADORESID[tema.name]==undefined&&tema.temporizador!=""){i3GEO.tema.temporizador(tema.name,tema.temporizador)}return(html)},montaOpcoesTema:function(temaObj,camada){camada.ferramentasTexto=$trad("u15a");camada.ferramentasTitle=$trad("ferramCamadas");camada.removerTexto=$trad("t12");camada.removerTitle=$trad("t12a");camada.sobeTexto=$trad("t13");camada.sobeTitle=$trad("t14");camada.desceTexto=$trad("t15");camada.desceTitle=$trad("t16");camada.tabelaTexto=$trad("tabela");camada.tabelaTitle=$trad("t30");camada.editorlegendaTexto=$trad("t33");if(temaObj.zoomtema.toLowerCase()==="sim"){camada.zoomtemaTexto=$trad("t17");camada.zoomtemaTitle=$trad("t18")}else{camada.zoomtema="hidden"}if(temaObj.sel.toLowerCase()==="sim"){camada.selTexto=$trad("t5");camada.selTitle=$trad("t4")}else{camada.sel="hidden"}if(temaObj.sel.toLowerCase()==="sim"){camada.zoomSelTexto=$trad("t5");camada.zoomselTitle=$trad("t4a")}else{camada.zoomsel="hidden"}if(temaObj.link_tema!=""&&temaObj.features.toLowerCase()!=="sim"&&temaObj.name!="mundo"){camada.linkTexto=$trad("a9");camada.linkTitle=$trad("a9")}else{camada.link="hidden"}if(temaObj.download.toLowerCase()==="sim"||temaObj.download===""&&temaObj.features.toLowerCase()!=="sim"){camada.downloadTexto="Download";camada.downloadTitle=$trad("t6")}else{camada.download="hidden"}if(temaObj.permiteogc.toLowerCase()==="sim"){camada.permiteogcTexto="OGC"}else{camada.permiteogc="hidden"}return camada},montaIconesTema:function(temaObj,camada){if(temaObj.escala!=0){if(temaObj.escala*1<i3GEO.parametros.mapscale*1){camada.farol="green";camada.farolTitle=$trad("t9")}if(temaObj.escala*1>i3GEO.parametros.mapscale*1){camada.farol="red";camada.farolTitle=$trad("t10")}if(temaObj.escala===0){camada.farol="yellow";camada.farolTitle=$trad("t11")}}else{camada.farol="hidden"}if(temaObj.contextoescala.toLowerCase()==="sim"){camada.contextoescala="";camada.contextoescalaTitle=$trad("t36")}else{camada.contextoescala="hidden"}if(temaObj.plugini3geo){var iconePlugin=i3GEO.pluginI3geo.clickArvoreDeCamadas(temaObj);if(iconePlugin!=false){camada.iconePlugin=iconePlugin}}if(temaObj.ferramentas){var html="",fer="",fers=temaObj.ferramentas;for(fer in fers){if(i3GEO.configura.ferramentasLayers[fer]){html+=i3GEO.configura.ferramentasLayers[fer].icone(temaObj.name)}}camada.iconeFerramentas=html}return camada},atualizaFarol:function(mapscale){var farol,l,ltema,escala,iu=i3GEO.util,im=i3GEO.configura.locaplic+"/imagens/",camadas=i3GEO.arvoreDeCamadas.CAMADAS;farol="maisamarelo.png";l=camadas.length-1;if(l>=0){do{ltema=camadas[l];escala=ltema.escala;if(escala*1<mapscale*1){farol="maisverde.png"}if(escala*1>mapscale*1){farol="maisvermelho.png"}if(escala*1===0){farol="maisamarelo.png"}iu.defineValor("farol"+ltema.name,"src",im+farol)}while(l--)}},aplicaTemas:function(tipo){if(arguments.length===0){tipo="normal"}var t="",temp;if(tipo==="normal"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("mantem")}if(tipo==="ligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("marca");return}if(tipo==="desligartodos"){t=i3GEO.arvoreDeCamadas.listaLigadosDesligados("desmarca");return}temp=function(){i3GEO.atualiza();i3GEO.janela.fechaAguarde("redesenha")};if(tipo==="normal"){i3GEO.php.ligatemas(temp,t[1].toString(),t[0].toString());return}if(tipo==="ligartodos"){i3GEO.php.ligatemas(temp,"",t[2].toString());return}if(tipo==="desligartodos"){i3GEO.php.ligatemas(temp,t[2].toString(),"")}},listaLigadosDesligados:function(tipo){if(!$i(i3GEO.arvoreDeCamadas.CONFIG.idOnde)){return[[],[],[]]}if(arguments.length===0){tipo="manter"}var nos=$("#"+i3GEO.arvoreDeCamadas.CONFIG.idOnde).find("input"),ligados=[],desligados=[],todos=[];$.each(nos,function(i,no){todos.push(no.value);if(no.checked==true){ligados.push(no.value)}else{desligados.push(no.value)}});return([ligados,desligados,todos])},capturaCheckBox:function(tema){},comparaTemas:function(novo,atual){try{var novon=novo.length,i;if(novon!==atual.length){return(false)}for(i=0;i<novon;i+=1){if(novo[i].name!==atual[i].name){return(false)}if(novo[i].tema!==atual[i].tema){return(false)}if(novo[i].sel!==atual[i].sel){return(false)}if(novo[i].status!==atual[i].status){return(false)}}return(true)}catch(e){return true}},pegaTema:function(valor,camadas,parametro){var i;if(!camadas||camadas==""){camadas=i3GEO.arvoreDeCamadas.CAMADAS}else{camadas=i3GEO.arvoreDeCamadas.converteChaveValor2normal(camadas)}if(!parametro){parametro="name"}i=camadas.length;while(i>0){i-=1;if(camadas[i][parametro]===valor){return camadas[i]}}return""},filtraCamadas:function(propriedade,valor,operador,camadas){if(!camadas){camadas=i3GEO.arvoreDeCamadas.CAMADAS}var resultado,i=0,temp,nelementos=camadas.length,ltema;resultado=[];if(nelementos>0){do{ltema=camadas[i];if(ltema.escondido.toLowerCase()!=="sim"){temp=ltema[propriedade];if(operador==="igual"){if(temp+"".toLowerCase()==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="diferente"){if(temp+"".toLowerCase()!==valor+"".toLowerCase()){resultado.push(ltema)}}if(operador==="menor"){if(temp+"".toLowerCase()<valor+"".toLowerCase()){resultado.push(ltema)}}}i+=1}while(i<nelementos)}return resultado},alteraPropCamadas:function(propriedade,valor,camada){var i=0,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.name===camada){ltema[propriedade]=valor}i+=1}while(i<nelementos)}},verificaAbrangenciaTemas:function(){if(i3GEO.arvoreDeCamadas.VERIFICAABRANGENCIATEMAS===false){return}try{var i=0,temp,nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];temp=ltema.exttema;if(temp!==""){if(i3GEO.util.intersectaBox(temp,i3GEO.parametros.mapexten)===false){$i("ArvoreTituloTema"+ltema.name).style.color="gray"}else{$i("ArvoreTituloTema"+ltema.name).style.color="black"}}i+=1}while(i<nelementos)}}catch(e){}},verificaAplicaExtensao:function(){var i=0,temp="",nelementos=i3GEO.arvoreDeCamadas.CAMADAS.length,ltema;try{if(nelementos>0){do{ltema=i3GEO.arvoreDeCamadas.CAMADAS[i];if(ltema.aplicaextensao.toLowerCase()==="sim"){temp=ltema.name}i+=1}while(i<nelementos)}}catch(e){return""}return temp},converteChaveValor2normal:function(obj){if(obj.chaves){var i,tema,j,t,chaves=obj.chaves,temas=obj.valores,ntemas=temas.length,nchaves=chaves.length,novo=[];for(i=0;i<ntemas;i++){tema=temas[i];t={};for(j=0;j<nchaves;j++){t[chaves[j]]=tema[j]}novo.push(t)}return novo}else{return obj}},registaCamadas:function(obj){obj=i3GEO.arvoreDeCamadas.converteChaveValor2normal(obj);i3GEO.arvoreDeCamadas.CAMADAS=obj},dialogo:{filtro:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.filtro()","filtroarvore","filtroarvore","dependencias.php","i3GEOF.filtroarvore.iniciaJanelaFlutuante()")},excluir:function(){i3GEO.util.dialogoFerramenta("i3GEO.arvoreDeCamadas.dialogo.excluir()","excluirarvore","excluirarvore")}}};