if(typeof(i3GEOF) === 'undefined'){
    var i3GEOF = {};
}
i3GEOF.conectargeorss = {
	renderFunction: i3GEO.janela.formModal,
	_parameters : {
	    "mustache": "",
	    "idContainer": "i3GEOconectargeorssContainer",
	    "namespace": "conectargeorss",
	    "lista": ""
	},
	start : function(){
	    var p = this._parameters,
	    i3f = this,
	    t1 = i3GEO.configura.locaplic + "/ferramentas/"+p.namespace+"/template_mst.html",
	    t2 = i3GEO.configura.locaplic+"/classesphp/wscliente.php?funcao=listaRSSwsARRAY&tipo=GEORSS";
	    if(p.mustache === ""){
		i3GEO.janela.abreAguarde();
		$.when( $.get(t1),$.get(t2)).done(function(r1,r2) {
		    i3GEO.janela.fechaAguarde();
		    p.mustache = r1[0];
		    p.lista = r2[0].data;
		    i3f.html();
		}).fail(function(data) {
		    i3GEO.janela.fechaAguarde();
		    i3GEO.janela.snackBar({content: "Erro. " + data.status, style:'red'});
		    i3f.destroy();
		});
	    } else {
		i3f.html();
	    }
	},
	destroy: function(){
	    //nao use this aqui
	    i3GEOF.conectargeorss._parameters.mustache = "";
	    i3GEOF.conectargeorss._parameters.lista = "";
	    i3GEO.arvoreDeTemas.dialogo.conectaservico();
	},
	html:function() {
	    var p = this._parameters,
	    i3f = this,
	    hash = {
		    locaplic: i3GEO.configura.locaplic,
		    namespace: p.namespace,
		    idContainer: p.idContainer,
		    botao: $trad("p14"),
		    ...i3GEO.idioma.objetoIdioma(i3f.dicionario)
	    };
	    i3f.renderFunction.call(
		    this,
		    {
			texto: Mustache.render(p.mustache, hash),
			onclose: i3f.destroy
		    });
	    i3GEO.janela.applyScrollBar(p.idContainer);
	    i3f.comboLista();
	},
	comboLista: function(){
	    var p = this._parameters,
	    raiz,nraiz,i,combo;
	    raiz = p.lista.canais;
	    nraiz = raiz.length;
	    combo = "<select class='form-control' >";
	    combo += "<option value=''>---</option>";
	    for (i=0;i<nraiz; i++){
		combo += "<option value='"+raiz[i].link+"'>"+raiz[i].title+"</option>";
	    }
	    combo += "</select>";
	    $("#i3GEO" + p.namespace + "Combo").html(combo);
	    $("#i3GEO" + p.namespace + "Combo").find("select").change(function(){
		$("#conectargeorssurl").val($(this).val());
	    });
	},
	getFormData: function(){
	    var data = i3GEO.util.getFormData("#" + this._parameters.idContainer + " form");
	    return data
	},
	adiciona: function(btn){
	    i3GEO.janela.abreAguarde();
	    $(btn).button("disable").find("span").removeClass("hidden");
	    var par = this.getFormData(),
	    i3f = this;
	    par.g_sid = i3GEO.configura.sid;
	    par.funcao = "adicionaTemaGeoRSS";
	    $.post(
		    i3GEO.configura.locaplic+"/ferramentas/" + i3f._parameters.namespace + "/exec.php",
		    par
	    )
	    .done(
		    function(data, status){

			i3GEO.janela.fechaAguarde();
			if(data.errorMsg != ""){
			    i3GEO.janela.snackBar({content: data.errorMsg, style:'red'});
			} else {
			    i3GEO.atualiza();
			    i3GEO.janela.snackBar({content: $trad("concluido",i3f.dicionario)});
			    i3f.destroy();
			}
		    }
	    )
	    .fail(
		    function(data){
			i3GEO.janela.fechaAguarde();
			i3GEO.janela.snackBar({content: data.status, style:'red'});
			i3f.destroy();
		    }
	    );
	}
};