if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.editor={inicia:function(){i3GEO.eventos.cliquePerm.desativa();i3GEO.editor[i3GEO.Interface.ATUAL].inicia("janelaEditorVetorial")},googlemaps:{inicia:function(idjanela){var temp=function(){var cabecalho,minimiza,fecha,janela=YAHOO.i3GEO.janela.manager.find("i3GEOjanelaEditor");if(janela){janela.destroy()}cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("i3GEOjanelaEditor")};janela=i3GEO.janela.cria("350px","100px","","","","<div class='i3GeoTituloJanela'>Editor</div>","i3GEOjanelaEditor",false,"hd",cabecalho,minimiza);$i("i3GEOjanelaEditor_corpo").style.backgroundColor="white";i3GEO.editorGM.inicia("i3GEOjanelaEditor_corpo");fecha=function(){var temp=window.confirm($trad("x94"));if(i3GEO.eventos){i3GEO.eventos.cliquePerm.ativa()}if(temp===true){i3GEO.desenho.googlemaps.destroyFeatures(i3GEO.desenho.googlemaps.shapes)}};$(janela[0].close).click(fecha)};if(!i3GEO.editorGM){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/editorgm/editorgm_compacto.js",temp,"editorgm.js",true)}else{temp.call()}}},openlayers:{inicia:function(idjanela){if(!i3GEO.editorOL){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/editorol/editorol.js","i3GEO.editor.openlayers.ativaPainel('"+idjanela+"')","editorol.js",true)}else{if(!i3GEO.desenho.layergrafico){i3GEO.desenho.openlayers.criaLayerGrafico();i3GEO.editorOL.mapa.addLayers([i3GEO.desenho.layergrafico])}if(!i3GEO.editorOL.backup){i3GEO.editorOL.backup=new ol.layer.Vector({source:new ol.source.Vector({features:new ol.Collection(),useSpatialIndex:false,name:"Backup"}),visible:false});i3GEO.editorOL.backup.setMap(i3geoOL);i3GEO.editorOL.backup.getFeatures=function(){return i3GEO.editorOL.backup.getSource().getFeatures()}}i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes)}},criaJanela:function(){if($i("i3GEOjanelaEditor")){return"i3GEOjanelaEditor"}var janela,divid,titulo,cabecalho,minimiza;cabecalho=function(){};minimiza=function(){i3GEO.janela.minimiza("i3GEOjanelaEditor")};titulo="<div class='i3GeoTituloJanela'>"+$trad("u29")+"</div>";janela=i3GEO.janela.cria("300px","200px","","","",titulo,"i3GEOjanelaEditor",false,"hd",cabecalho,minimiza);divid=janela[2].id;$i("i3GEOjanelaEditor_corpo").style.backgroundColor="white";$i("i3GEOjanelaEditor_corpo").style.textAlign="left";return divid},ativaPainel:function(idjanela){i3GEO.editorOL.fundo="";i3GEO.editorOL.mapa=i3geoOL;i3GEO.editorOL.maxext="";i3GEO.editorOL.controles=[];i3GEO.editorOL.botoes={'zoomin':false,'zoomout':false,'pan':false,'zoombox':false,'zoomtot':false,'legenda':false,'distancia':false,'area':false,'identifica':false,'linha':true,'ponto':true,'poligono':true,'texto':true,'corta':true,'edita':true,'listag':true,'selecao':true,'selecaotudo':true,'apaga':true,'procura':false,'propriedades':true,'salva':true,'ajuda':true,'fecha':true,'tools':true,'undo':true,'frente':true};if(!i3GEO.desenho.layergrafico){i3GEO.desenho.openlayers.criaLayerGrafico()}if(idjanela){i3GEO.editorOL.criaBotoes(i3GEO.editorOL.botoes)}}}};