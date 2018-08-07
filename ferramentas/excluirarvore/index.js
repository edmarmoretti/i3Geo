if(typeof(i3GEOF) === 'undefined'){
    var i3GEOF = {};
}
i3GEOF.excluirarvore = {
	renderFunction: i3GEO.janela.formModal,
	_parameters : {
	    "mustache": "",
	    "idContainer": "i3GEOexcluirarvoreContainer",
	    "namespace": "excluirarvore",
	    "idlista": "i3GEOFexcluirarvoreLista"
	},
	start: function(iddiv){
	    var i3f = this,
	    p = i3f._parameters;
	    if(p.mustache === ""){
		$.get(i3GEO.configura.locaplic + "/ferramentas/" + p.namespace +"/template_mst.html", function(template) {
		    p.mustache = template;
		    i3f.html();
		});
		return;
	    } else {
		i3f.html();
	    }
	},
	html:function(){
	    var p = i3GEOF.excluirarvore._parameters;
	    var hash = i3GEO.idioma.objetoIdioma(i3GEOF.excluirarvore.dicionario);
	    hash["locaplic"] = i3GEO.configura.locaplic;
	    hash["namespace"] = p.namespace;
	    hash["idContainer"] = p.idContainer;
	    hash["idlista"] = p.idlista;
	    i3GEO.janela.formModal({texto: Mustache.render(p.mustache, hash)});
	    i3GEOF.excluirarvore.renderFunction.call(this,{texto: Mustache.render(p.mustache, hash)});
	    i3GEOF.excluirarvore.lista();
	    //i3GEO.janela.applyScrollBar(p.idContainer);
	},
	lista: function(){
	    var camadas = i3GEO.arvoreDeCamadas.CAMADAS,
	    n = camadas.length, ins = "";
	    while(n > 0){
		n -= 1;
		if(camadas[n].tema !== ""){
		    ins += '<div class="checkbox text-left"><label>'
			+ '<input name="' + camadas[n].name + '" type="checkbox">'
			+ '<span class="checkbox-material noprint"><span class="check"></span></span> '
			+ camadas[n].tema
			+ '</label></div>';
		}
	    }
	    $i("i3GEOFexcluirarvoreLista").innerHTML = ins;
	},
	excluir: function(objeto){
	    var excluir = [],
	    temp,
	    camadas = $i("i3GEOFexcluirarvoreLista").getElementsByTagName("input"),
	    n = camadas.length;
	    while(n > 0){
		n -= 1;
		if(camadas[n].checked === true){
		    excluir.push(camadas[n].name);
		}
	    }
	    //obtem os possiveis nomes de grupos
	    $.each(excluir, function( index, name ) {
		var camada = i3GEO.arvoreDeCamadas.CAMADASINDEXADAS[name];
		$.each(i3GEO.arvoreDeCamadas.CAMADAS, function( index, v ) {
		    if((camada.group != "" && camada.group == v.group) || camada.name == v.group){
			excluir.push(v.name);
		    }
		});
	    });
	    temp = function(){
		i3GEO.janela.formModal();
		i3GEO.atualiza();

	    };
	    if(excluir.length > 0){
		i3GEO.php.excluitema(temp,excluir);
	    } else {
		i3GEO.janela.formModal();
	    }
	}
};
