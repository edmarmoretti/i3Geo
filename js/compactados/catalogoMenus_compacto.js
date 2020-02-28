i3GEO.catalogoMenus={IDSMENUS:[],MENU:"",GRUPO:"",SUBGRUPO:"",config:{"templateDir":"templates/dir.html","templateTema":"templates/tema.html","idOndeMenus":"catalogoMenus","idCatalogoPrincipal":"catalogoPrincipal","idCatalogoNavegacao":"catalogoNavegacao","idOndeMigalha":"catalogoMigalha","folderFirst":"false"},carregaTemplates:function(){var t1=i3GEO.catalogoMenus.config.templateDir,t2=i3GEO.catalogoMenus.config.templateTema,t3=$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).attr("data-template");$.when($.get(t1),$.get(t2),$.get(t3)).done(function(r1,r2,r3){i3GEO.template.dir=r1[0];i3GEO.template.tema=r2[0];i3GEO.template.catalogoMigalha=r3[0];i3GEO.catalogoMenus.listaMenus()}).fail(function(){i3GEO.janela.closeMsg($trad("erroTpl"));return})},aguarde:function(onde){$("#"+onde).html('<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" style="width: 100%; height:5px;"></div>')},atualizaMigalha:function(nome,onclick){var t=Mustache.to_html(i3GEO.template.catalogoMigalha,{"nome":nome,"onclick":onclick});$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).html(t)},escondeCatalogoPrincipal:function(){$("#"+i3GEO.catalogoMenus.config.idCatalogoPrincipal).hide()},mostraCatalogoPrincipal:function(){$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).fadeOut("fast",function(){$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).hide();$("#"+i3GEO.catalogoMenus.config.idCatalogoPrincipal).show()})},adicionaTema:function(tid){var tema=i3GEO.arvoreDeCamadas.pegaTema(tid),ck;if(tema!==""&&tema.plugini3geo.plugin!="parametrossql"){ck=i3GEO.arvoreDeCamadas.capturaCheckBox(tid);if(ck!=false&&ck.onclick){ck.checked=!ck.checked;ck.onclick.call(ck);if(ck.checked==true){i3GEO.janela.tempoMsg($trad("camadaligada"))}else{i3GEO.janela.tempoMsg($trad("camadadesligada"))}}else{i3GEO.janela.tempoMsg($trad("x76"))}}else{i3GEO.mapa.addLayers(false,tid)}},listaMenus:function(config){if(config){$.each(config,function(i,v){i3GEO.catalogoMenus.config[i]=v})}i3GEO.catalogoMenus.aguarde(i3GEO.catalogoMenus.config.idOndeMenus);if(!i3GEO.template.dir||!i3GEO.template.tema||!i3GEO.template.catalogoMigalha){i3GEO.catalogoMenus.carregaTemplates();return}else{config=i3GEO.catalogoMenus.config;if(i3GEO.arvoreDeTemas&&i3GEO.arvoreDeTemas.IDSMENUS&&i3GEO.arvoreDeTemas.IDSMENUS.length>0){i3GEO.catalogoMenus.IDSMENUS=i3GEO.arvoreDeTemas.IDSMENUS}var montaMenus=function(menus){var clone=[],n=i3GEO.catalogoMenus.IDSMENUS.length,t;$.each(menus,function(i,v){if(n===0||i3GEO.catalogoMenus.IDSMENUS.indexOf(v.idmenu)>=0||i3GEO.catalogoMenus.IDSMENUS.indexOf(v.idmenu*1)>=0){v.nome=v.nomemenu;v.descricao=v.desc;v.onclick="i3GEO.catalogoMenus.listaGrupos("+v.idmenu+",'"+v.nome+"')";if(v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}clone.push(v)}});t=Mustache.to_html("{{#data}}"+i3GEO.template.dir+"{{/data}}",{"data":clone});$("#"+config.idOndeMenus).html(i3GEO.catalogoMenus.getUploadBtn()+t)};i3GEO.catalogoMenus.getMenus(montaMenus)}},getMenus:function(after){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{filtraOgc:"nao",filtraDown:"nao",idioma:i3GEO.idioma.ATUAL,funcao:"pegalistademenus"},prog:"/serverapi/catalog/",fn:function(data){if(after){after.call(after,data)}}})},listaGrupos:function(idmenu,nomeMigalha){i3GEO.catalogoMenus.aguarde(i3GEO.catalogoMenus.config.idCatalogoNavegacao);$("#i3GEOguiaMovelConteudo").scrollTop(0);i3GEO.catalogoMenus.MENU=nomeMigalha;i3GEO.catalogoMenus.atualizaMigalha(nomeMigalha,"i3GEO.catalogoMenus.mostraCatalogoPrincipal()");var montaGrupos=function(dados){var grupos=dados.grupos,clone=[],config=i3GEO.catalogoMenus.config,g="",t="",temas=[];$.each(grupos,function(i,v){if(v.id_n1){v.onclick="i3GEO.catalogoMenus.listaSubGrupos("+idmenu+","+v.id_n1+",'"+v.nome+"','"+nomeMigalha+"')";if(v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}clone.push(v)}if(v.temasraiz){temas=v.temasraiz}});g=Mustache.to_html("{{#data}}"+i3GEO.template.dir+"{{/data}}",{"data":clone});clone=[];$.each(temas,function(i,v){v.onclick="i3GEO.catalogoMenus.adicionaTema('"+v.codigo_tema+"')";if(v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}if(v.link&&v.link.trim()!=""){v.link="<a href='"+v.link+"' target='_blank' >Link</a>"}clone.push(v)});t=Mustache.to_html("{{#data}}"+i3GEO.template.tema+"{{/data}}",{"data":clone});$("#"+config.idCatalogoPrincipal).fadeOut("fast",function(){if(config.folderFirst=="false"){$("#"+config.idCatalogoNavegacao).html(t+g)}else{$("#"+config.idCatalogoNavegacao).html(g+t)}$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).show();$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).show()})};i3GEO.catalogoMenus.getGrupos(montaGrupos,idmenu,"nao")},getGrupos:function(after,id_menu,listasgrupos,ordenaNome,filtraOgc,filtraDown){if(!ordenaNome){ordenaNome="nao"}if(!filtraOgc){filtraOgc="nao"}if(!filtraDown){filtraDown="nao"}var filtro="";if(i3GEO.arvoreDeTemas&&i3GEO.arvoreDeTemas.FILTRADOWNLOAD===true){filtro="download"}if(i3GEO.arvoreDeTemas&&i3GEO.arvoreDeTemas.FILTRAOGC===true){filtro="ogc"}i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{funcao:"pegalistadegrupos",idmenu:id_menu,filtraOgc:filtraOgc,filtraDown:filtraDown,ordenaNome:ordenaNome,listasistemas:"nao",listasgrupos:listasgrupos,idioma:i3GEO.idioma.ATUAL,filtro:filtro,editores:""},prog:"/serverapi/catalog/",fn:function(data){if(after){after.call(after,data)}}})},listaSubGrupos:function(idmenu,id_n1,nomeMigalha){$("#i3GEOguiaMovelConteudo").scrollTop(0);i3GEO.catalogoMenus.aguarde(i3GEO.catalogoMenus.config.idCatalogoNavegacao);i3GEO.catalogoMenus.GRUPO=nomeMigalha;i3GEO.catalogoMenus.escondeCatalogoPrincipal();i3GEO.catalogoMenus.atualizaMigalha(nomeMigalha,"i3GEO.catalogoMenus.listaGrupos('"+idmenu+"','"+i3GEO.catalogoMenus.MENU+"')");var montaSubGrupos=function(data){var subgrupos=data.subgrupo,clone=[],g="",t="",temas;$.each(subgrupos,function(i,v){if(v.id_n2){v.onclick="i3GEO.catalogoMenus.listaTemasSubgrupo("+idmenu+","+id_n1+","+v.id_n2+",'"+v.nome+"')";if(v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}clone.push(v)}});g=Mustache.to_html("{{#data}}"+i3GEO.template.dir+"{{/data}}",{"data":clone});clone=[];temas=data.temasgrupo;$.each(temas,function(i,v){v.onclick="i3GEO.catalogoMenus.adicionaTema('"+v.codigo_tema+"')";if(v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}if(v.link&&v.link.trim()!=""){v.link="<a href='"+v.link+"' target='_blank' >Link</a>"}clone.push(v)});t=Mustache.to_html("{{#data}}"+i3GEO.template.tema+"{{/data}}",{"data":clone});if(i3GEO.catalogoMenus.config.folderFirst=="false"){$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).html(t+g)}else{$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).html(g+t)}$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).fadeOut("fast",function(){$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).show();$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).show()})};i3GEO.catalogoMenus.getSubGrupos(montaSubGrupos,idmenu,id_n1)},getSubGrupos:function(after,id_menu,id_grupo){var filtro="";if(i3GEO.arvoreDeTemas.FILTRADOWNLOAD===true){filtro="download"}else if(i3GEO.arvoreDeTemas.FILTRAOGC===true){filtro="ogc"}i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{funcao:"pegalistadeSubgrupos",idmenu:id_menu,grupo:id_grupo,idioma:i3GEO.idioma.ATUAL,filtro:filtro},prog:"/serverapi/catalog/",fn:function(data){if(after){after.call(after,data)}}})},listaTemasSubgrupo:function(idmenu,id_n1,id_n2,nomeMigalha){$("#i3GEOguiaMovelConteudo").scrollTop(0);i3GEO.catalogoMenus.aguarde(i3GEO.catalogoMenus.config.idCatalogoNavegacao);i3GEO.catalogoMenus.SUBGRUPO=nomeMigalha;i3GEO.catalogoMenus.escondeCatalogoPrincipal();i3GEO.catalogoMenus.atualizaMigalha(nomeMigalha,"i3GEO.catalogoMenus.listaSubGrupos("+idmenu+","+id_n1+",'"+i3GEO.catalogoMenus.GRUPO+"')");var montaTemas=function(temas){var clone=[],t="";clone=[];$.each(temas,function(i,v){v.onclick="i3GEO.catalogoMenus.adicionaTema('"+v.codigo_tema+"')";if(v.publicado&&v.publicado.toLowerCase()=="nao"){v.nome=v.nome+" <small>("+$trad("naoPublicado")+")<small>"}if(v.link&&v.link.trim()!=""){v.link="<a href='"+v.link+"' target='_blank' >Link</a>"}clone.push(v)});t=Mustache.to_html("{{#data}}"+i3GEO.template.tema+"{{/data}}",{"data":clone});$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).html("");$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).fadeOut("fast",function(){$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).html(t);$("#"+i3GEO.catalogoMenus.config.idOndeMigalha).show();$("#"+i3GEO.catalogoMenus.config.idCatalogoNavegacao).show()})};i3GEO.catalogoMenus.getTemas(montaTemas,idmenu,id_n1,id_n2)},getTemas:function(after,id_menu,id_grupo,id_subgrupo){i3GEO.request.get({snackbar:false,snackbarmsg:false,btn:false,par:{funcao:"pegalistadetemas",idmenu:id_menu,grupo:id_grupo,subgrupo:id_subgrupo,idioma:i3GEO.idioma.ATUAL},prog:"/serverapi/catalog/",fn:function(data){if(after){after.call(after,data)}}})},comboMenus:function(locaplic,funcaoOnchange,idDestino,idCombo,largura,altura){i3GEO.configura.locaplic=locaplic;var combo=function(retorno){var ins,ig;ins="<select id='"+idCombo+"' SIZE="+altura+" style=width:"+largura+"px onchange='"+funcaoOnchange+"(this.value)' ><option value='' >Escolha um menu:</option>";for(ig=0;ig<retorno.length;ig+=1){if(retorno[ig].publicado!=="nao"&&retorno[ig].publicado!=="NAO"){if(retorno[ig].nomemenu){ins+="<option value="+retorno[ig].idmenu+" >"+retorno[ig].nomemenu+"</option>"}}}$i(idDestino).innerHTML=ins+"</select>";return retorno};i3GEO.catalogoMenus.getMenus(combo)},comboGruposMenu:function(locaplic,funcaoOnchange,idDestino,idCombo,largura,altura,id_menu){i3GEO.configura.locaplic=locaplic;var combo=function(retorno){var ins,ig,obGrupos=retorno;ins="<select id='"+idCombo+"' SIZE="+altura+" style=width:"+largura+"px onchange='"+funcaoOnchange+"(this.value)' ><option value='' >Escolha um grupo:</option>";for(ig=0;ig<obGrupos.grupos.length;ig+=1){if(obGrupos.grupos[ig].nome){ins+="<option value="+obGrupos.grupos[ig].id_n1+" >"+obGrupos.grupos[ig].nome+"</option>"}}$i(idDestino).innerHTML=ins+"</select>"};i3GEO.catalogoMenus.getGrupos(combo,id_menu,"nao")},comboSubGruposMenu:function(locaplic,funcaoOnchange,idDestino,idCombo,idGrupo,largura,altura){if(idGrupo!==""){var combo=function(data){var ins,sg,ig;ins="<select id='"+idCombo+"' size="+altura+" style=width:"+largura+"px onchange='"+funcaoOnchange+"(\""+idGrupo+"\",this.value)' ><option value='' >Escolha um sub-grupo:</option>";if(data.subgrupo){sg=data.subgrupo;for(ig=0;ig<sg.length;ig+=1){ins+="<option value="+sg[ig].id_n2+" >"+sg[ig].nome+"</option>"}}$i(idDestino).innerHTML=ins+"</select>"};i3GEO.catalogoMenus.getSubGrupos(combo,"",idGrupo)}},comboTemasMenu:function(locaplic,funcaoOnchange,idDestino,idCombo,idGrupo,idSubGrupo,largura,altura,id_menu){var combo=function(data){var ins,sg,ig;if(idSubGrupo!=""){ins="<select id='"+idCombo+"' size="+altura+" style=width:"+largura+"px onchange='"+funcaoOnchange+"("+idGrupo+","+idSubGrupo+",this.value)' ><option value='' >Escolha um tema:</option>"}else{ins="<select id='"+idCombo+"' size="+altura+" style=width:"+largura+"px onchange='"+funcaoOnchange+"("+idGrupo+",\"\",this.value)' ><option value='' >Escolha um tema:</option>"}sg=data.length;for(ig=0;ig<sg;ig++){ins+="<option value="+data[ig].tid+" >"+data[ig].nome+"</option>"}$i(idDestino).innerHTML=ins+"</select>"};i3GEO.catalogoMenus.getTemas(combo,id_menu,idGrupo,idSubGrupo)},getUploadBtn:function(){var itens=[];itens.push({title:"Upload",text:"SHP",onclick:"i3GEO.catalogoMenus.shp()"},{title:"Upload",text:"DBF/CSV",onclick:"i3GEO.catalogoMenus.dbfcsv()"},{title:"Upload",text:"GPX",onclick:"i3GEO.catalogoMenus.gpx()"},{title:"Upload",text:"KML",onclick:"i3GEO.catalogoMenus.kml()"});var t=Mustache.to_html("{{#data}}"+i3GEO.template.botoes.opcoes+"{{/data}}",{"data":itens});var btn=""+"<div class='uploadbtn container-fluid container-tools'>"+"<div class='form-group condensed'>"+t+"</div>"+"</div>";return btn},shp:function(){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/uploadshp/dependencias.php","i3GEOF.uploadshp.start()","i3GEOF.uploadshp_script")},dbfcsv:function(){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/uploaddbf/dependencias.php","i3GEOF.uploaddbf.start()","i3GEOF.uploaddbf_script")},gpx:function(){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/uploadgpx/dependencias.php","i3GEOF.uploadgpx.start()","i3GEOF.uploadgpx_script")},kml:function(){i3GEO.util.scriptTag(i3GEO.configura.locaplic+"/ferramentas/uploadkml/dependencias.php","i3GEOF.uploadkml.start()","i3GEOF.uploadkml_script")}};