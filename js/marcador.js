/**
 * Title: Marcador
 *
 * Gerencia os marcadores espaciais que o usuario pode definir e compartilhar
 *
 * Os marcadores sao mantidos como cookies
 *
 * Namespace:
 *
 * i3GEO.marcador
 *
 *  Veja:
 *
 * <http://localhost/i3geo/classesjs/classe_marcador.js>
 */
if (typeof (i3GEO) === 'undefined') {
    var i3GEO = {};
}
i3GEO.marcador =
{
	renderFunction: i3GEO.janela.formModal,
	//para efeitos de compatibilidade
	inicia: function(obj){
	    this.start(obj);
	},
	start: function(){
	    var template = i3GEO.template.botoes.opcoes;
	    if(i3GEO.template.marcador != false){
		template = i3GEO.template.marcador;
	    }
	    var t = Mustache.to_html(
		    "{{#data}}" + template + "{{/data}}",
		    {"data":i3GEO.marcador.botoes()}
	    );
	    t += "<h4>" + $trad("x79") + ":</h4>";
	    var opcoes = Mustache.to_html(
		    "{{#data}}" + i3GEO.template.listaopcoes + "{{/data}}",
		    {"data":i3GEO.marcador.itensMenu()}
	    );
	    t += "<div>" + opcoes + "</div>";
	    i3GEO.marcador.renderFunction.call(
		    this,
		    {
			texto: t
		    });
	},
	redesenha: function(){
	    this.start();
	},
	/**
	 * Function: prompt
	 *
	 * Pergunta ao usuario o nome do marcador e armazena O Cookie utilizado chama-se marcadoresDoI3Geo
	 */
	prompt : function() {
	    i3GEO.janela.prompt($trad("x77"), i3GEO.marcador.armazena, "");
	},
	/**
	 * Armazena um novo marcador no cookie Os cookies sao separados por : O valor contem o nome seguido por = e o valor da extensao
	 * geografica
	 */
	armazena : function() {
	    var coords, point, temp, cookies = i3GEO.util.pegaCookie("marcadoresDoI3Geo"), ext = i3GEO.mapa.getExtent().string, nome = "Marcador", valor;

	    temp = ext.split(" ");
	    ext = "";
	    if (i3GEO.Interface.openlayers.googleLike === true) {
		point = new ol.geom.Point([temp[0]*1, temp[1]*1]);
		point.transform("EPSG:3857","EPSG:4326");
		ext = point.getCoordinates()[0] + " " + point.getCoordinates()[1];
		point = new ol.geom.Point([temp[2], temp[3]]);
		point.transform("EPSG:3857","EPSG:4326");
		ext += " " + point.getCoordinates()[0] + " " + point.getCoordinates()[1];
	    }
	    if ($i("i3GEOjanelaprompt")) {
		nome = $i("i3GEOjanelaprompt").value;
	    }
	    valor = nome + "|" + ext;
	    if (cookies) {
		cookies += ":";
	    } else {
		cookies = "";
	    }
	    valor = cookies + valor;
	    i3GEO.util.insereCookie("marcadoresDoI3Geo", valor, 365);
	    i3GEO.marcador.redesenha();
	},
	exporta : function() {
	    i3GEO.util.copyToClipboard(i3GEO.util.pegaCookie("marcadoresDoI3Geo"));
	},
	importa : function() {
	    var temp = function() {
		var cookies = i3GEO.util.pegaCookie("marcadoresDoI3Geo"), novos = "";
		if ($i("i3GEOjanelaprompt")) {
		    novos = $i("i3GEOjanelaprompt").value;
		}
		if (cookies) {
		    cookies += ":";
		} else {
		    cookies = "";
		}
		novos = cookies + novos;
		i3GEO.util.insereCookie("marcadoresDoI3Geo", novos, 365);
		i3GEO.marcador.redesenha();
	    };
	    i3GEO.janela.prompt($trad("x83"), temp, "");
	},
	remove : function(nomeMarcador) {
	    var cookie = i3GEO.util.pegaCookie("marcadoresDoI3Geo"), valores = cookie.split(":"), n = valores.length, i, temp, novos = [];
	    for (i = 0; i < n; i++) {
		temp = valores[i].split("|");
		if (temp[0] && temp[0] !== nomeMarcador) {
		    novos.push(valores[i]);
		}
	    }
	    i3GEO.util.insereCookie("marcadoresDoI3Geo", novos.join(":"), 365);
	    i3GEO.marcador.redesenha();
	},
	recuperaZoom : function(nomeMarcador) {
	    var cookie = i3GEO.util.pegaCookie("marcadoresDoI3Geo"), valores = cookie.split(":"), n = valores.length, i, temp;
	    for (i = 0; i < n; i++) {
		temp = valores[i].split("|");
		if (temp[0] && temp[0] === nomeMarcador) {
		    i3GEO.navega.zoomExt("", "", "", temp[1]);
		    return;
		}
	    }
	},
	itensMenu : function() {
	    var itens = [], cookie = i3GEO.util.pegaCookie("marcadoresDoI3Geo"), valores, n, i, temp;
	    if (cookie) {
		valores = cookie.split(":");
		n = valores.length;
		for (i = 0; i < n; i++) {
		    temp = valores[i].split("|");
		    if (temp.length === 2) {
			itens.push({
			    nome : temp[0],
			    url : "javascript:i3GEO.marcador.recuperaZoom('" + temp[0] + "')",
			    opcional: "<a href='javascript:void(0)' onclick='i3GEO.marcador.remove(\"" + temp[0]
			+ "\")' class='btn btn-xs' role='button'><span class='material-icons md-18'>delete_forever</span></a>"
			});
		    }
		}
	    }
	    return itens;
	},
	botoes : function() {
	    var itens = [];
	    itens.push({
		title : $trad("x82"),
		text: $trad("x82"),
		onclick : "javascript:i3GEO.marcador.prompt()"
	    }, {
		title : $trad("x80"),
		text: $trad("x80"),
		onclick : "javascript:i3GEO.marcador.exporta()"
	    }, {
		title : $trad("x81"),
		text: $trad("x81"),
		onclick : "javascript:i3GEO.marcador.importa()"
	    });
	    return itens;
	}
};