if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.busca={PALAVRA:"",SERVICO:"http://mapas.mma.gov.br/webservices/geonames.php",SERVICOWMS:"http://mapas.mma.gov.br/webservices/geonameswms.php",config:{"ondeConteiner":"","inputOndePalavra":"","ondeServicosExternos":"","inputServicosExternos":"","inputTemasMapa":"","ondeTemasMapa":"","inputGoogle":"","ondeGoogle":"","templateTemasMapa":"","templateServico":"","templateGoogle":""},nget:0,carregaTemplates:function(){if(i3GEO.busca.nget==0){i3GEO.busca.nget=2;if(!i3GEO.template.buscaEmTemas){$.get(i3GEO.busca.config.templateTemasMapa,function(template){i3GEO.template.buscaEmTemas=template;i3GEO.busca.nget=i3GEO.busca.nget-1;if(i3GEO.busca.nget==0){i3GEO.busca.inicia()}})}else{i3GEO.busca.nget=i3GEO.busca.nget-1}if(!i3GEO.template.buscaEmServico){$.get(i3GEO.busca.config.templateServico,function(template){i3GEO.template.buscaEmServico=template;i3GEO.busca.nget=i3GEO.busca.nget-1;if(i3GEO.busca.nget==0){i3GEO.busca.inicia()}})}else{i3GEO.busca.nget=i3GEO.busca.nget-1}}},aguarde:function(){return'<div class="alert alert-warning" role="alert">'+$trad("o1")+'</div>'},inicia:function(obj){var palavra="",config=i3GEO.busca.config;if(obj){obj=$(obj);if(obj.attr("data-ondeConteiner")!=undefined){config.ondeConteiner=obj.attr("data-ondeConteiner")}if(obj.attr("data-ondeServicosExternos")!=undefined){config.ondeServicosExternos=obj.attr("data-ondeServicosExternos")}if(obj.attr("data-inputServicosExternos")!=undefined){config.inputServicosExternos=obj.attr("data-inputServicosExternos")}if(obj.attr("data-inputTemasMapa")!=undefined){config.inputTemasMapa=obj.attr("data-inputTemasMapa")}if(obj.attr("data-inputTemasMapa")!=undefined){config.ondeTemasMapa=obj.attr("data-ondeTemasMapa")}if(obj.attr("data-inputGoogle")!=undefined){config.inputGoogle=obj.attr("data-inputGoogle")}if(obj.attr("data-inputGoogle")!=undefined){config.ondeGoogle=obj.attr("data-ondeGoogle")}if(obj.attr("data-inputOndePalavra")!=undefined){config.inputOndePalavra=obj.attr("data-inputOndePalavra")}if(obj.attr("data-templateGoogle")!=undefined){config.templateGoogle=obj.attr("data-templateGoogle")}if(obj.attr("data-templateTemasMapa")!=undefined){config.templateTemasMapa=obj.attr("data-templateTemasMapa")}if(obj.attr("data-templateServico")!=undefined){config.templateServico=obj.attr("data-templateServico")}}if(!i3GEO.template.buscaEmTemas||!i3GEO.template.buscaEmServico){i3GEO.busca.carregaTemplates();return}else{var palavra=$(config.ondeConteiner).find(config.inputOndePalavra).val();if(palavra!=""){i3GEO.busca.PALAVRA=i3GEO.util.removeAcentos(palavra)}else{i3GEO.busca.PALAVRA="";return false}if($(config.ondeConteiner).find(config.inputServicosExternos)[0].checked==true){$(config.ondeConteiner).find(config.ondeServicosExternos).html(i3GEO.busca.aguarde());i3GEO.php.buscaRapida(i3GEO.busca.resultadoServico,i3GEO.configura.locaplic,i3GEO.busca.SERVICO,i3GEO.busca.PALAVRA)}if($(config.ondeConteiner).find(config.inputTemasMapa)[0].checked==true){$(config.ondeConteiner).find(config.inputTemasMapa).html(i3GEO.busca.aguarde());i3GEO.php.buscaRapida(i3GEO.busca.resultadoTemas,i3GEO.configura.locaplic,"temas",i3GEO.busca.PALAVRA)}}},resultadoTemas:function(retorno){var t,config=i3GEO.busca.config;try{if(retorno.data){t=Mustache.to_html("{{#data}}"+i3GEO.template.buscaEmTemas+"{{/data}}",{"data":retorno.data});$(config.ondeConteiner).find(config.ondeTemasMapa).html(t)}}catch(e){$(config.ondeConteiner).find(config.ondeTemasMapa).html("")}},resultadoServico:function(retorno){var t,config=i3GEO.busca.config;try{if(retorno.data){t=Mustache.to_html("{{#data}}"+i3GEO.template.buscaEmServico+"{{/data}}",{"data":retorno.data.geonames});$(config.ondeConteiner).find(config.ondeServicosExternos).html(t)}}catch(e){$(config.ondeConteiner).find(config.ondeServicosExternos).html("")}},zoom:function(wkt,layer,gid,nm){var adicionaCamada=function(layer,gid,nm,ext){if(i3GEO.Interface.openlayers.googleLike===false){var s=i3GEO.busca.SERVICOWMS+"?gid="+gid+"&";i3GEO.mapa.adicionaTemaWMS(i3GEO.mapa.refresh,s,layer,"default","EPSG:4618","image/png","1.1.0",nm+" - "+layer,"","nao","")}};var ext=i3GEO.util.wkt2ext(wkt,"polygon");if(ext==false){return}i3GEO.Interface.zoom2ext(ext);adicionaCamada(layer,gid,nm,ext)},mostraxy:function mostraxy(texto,tipo){var ext,b;if(tipo==="wkt"){ext=i3GEO.util.wkt2ext(texto,"polygon")}else{ext=texto}if(ext==false){return}b=ext.split(" ");i3GEO.desenho.addBox(b[0]*1,b[1]*1,b[2]*1,b[3]*1,"boxOndeBusca")},escondexy:function(){i3GEO.desenho.removePins("boxOndeBusca")},zoomExt:function(ext){i3GEO.Interface.openlayers.zoom2ext(ext)}};