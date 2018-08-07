if(typeof(i3GEOF) === 'undefined'){
    var i3GEOF = {};
}
i3GEOF.uploadshp = {
	renderFunction: i3GEO.janela.formModal,
	_parameters : {
	    "mustache": "",
	    "idContainer": "i3GEOuploadshp",
	    "namespace": "uploadshp",
	    "dataForm": ""
	},
	start : function(){
	    var p = this._parameters,
	    i3f = this,
	    t1 = i3GEO.configura.locaplic + "/ferramentas/"+p.namespace+"/template_mst.html";
	    if(p.mustache === ""){
		i3GEO.janela.abreAguarde();
		$.get(t1).done(function(r1) {
		    p.mustache = r1;
		    i3f.html();
		    i3GEO.janela.fechaAguarde();
		    if(p.dataForm.errorMsg && p.dataForm.errorMsg != ""){
			i3GEO.janela.snackBar({content: p.dataForm.errorMsg, style:'red'});
			i3GEO.janela.fechaAguarde();
			i3f.destroy();
		    }
		}).fail(function(data) {
		    i3GEO.janela.snackBar({content: "Erro. " + data.status, style:'red'});
		    i3f.destroy();
		});
	    } else {
		i3f.html();
	    }
	},
	destroy: function(){
	    //nao use this aqui
	},
	html:function() {
	    var p = this._parameters,
	    i3f = this,
	    hash = {
		    locaplic: i3GEO.configura.locaplic,
		    namespace: p.namespace,
		    sid: i3GEO.configura.sid,
		    idContainer: p.idContainer,
		    ...i3GEO.idioma.objetoIdioma(i3f.dicionario)
	    };
	    i3f.renderFunction.call(
		    this,
		    {
			texto: Mustache.render(p.mustache, hash),
			onclose: i3f.destroy
		    });
	    i3GEO.util.comboEpsg("uploadEPSG","i3GEOuploadListaepsg");
	},
	/*
	Function: submete

	Submete o arquivo ao servidor
	 */
	submete: function(btn){
	    i3GEO.janela.abreAguarde();
	    $(btn).prop("disabled",true).find("span").removeClass("hidden");
	    $("#" + this._parameters.idContainer + " form").submit();
	}
};