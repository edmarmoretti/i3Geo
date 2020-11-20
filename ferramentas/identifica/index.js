if (typeof (i3GEOF) === 'undefined') {
    var i3GEOF = {};
}
i3GEOF.identifica = {
        resolution: 8,
        renderFunction: i3GEO.janela.formModal,
        /*
         * Propriedade: mostraSistemasAdicionais
         *
         * Mostra ou n&atilde;o a lista de sistemas adicionais de busca de dados.
         *
         * Type: {boolean}
         */
        mostraSistemasAdicionais : true,
        _sistemasAdicionais : [],
        _export: [],
        _parameters : {
            "x": 0,
            "y": 0,
            "tema": "",
            "mustache": "",
            "mustachesistemas": "",
            "mustachedados": "",
            "marca": false,
            "idContainer": "i3GEOidentificaguiasContainer"
        },
        /*
         * Para efeitos de compatibilidade antes da vers&atilde;o 4.7 que n&atilde;o tinha dicion&aacute;rio
         */
        start : function({x, y, tema = ""} = {}) {
            i3GEOF.identifica._parameters = {
                    ...i3GEOF.identifica._parameters,
                    "x": x,
                    "y": y,
                    "tema": tema
            };
            var p = i3GEOF.identifica._parameters;
            if(p.mustache === ""){
                i3GEO.janela.abreAguarde();
                var t1 = i3GEO.configura.locaplic + "/ferramentas/identifica/template_mst.html",
                t2 = i3GEO.configura.locaplic + "/ferramentas/identifica/template_sistemas_mst.html",
                t3 = i3GEO.configura.locaplic + "/ferramentas/identifica/template_dados_mst.html";
                $.when( $.get(t1),$.get(t2),$.get(t3) ).done(function(r1,r2,r3) {
                    i3GEO.janela.fechaAguarde();
                    var p = i3GEOF.identifica._parameters;
                    p.mustache = r1[0];
                    p.mustachesistemas = r2[0];
                    p.mustachedados = r3[0];
                    i3GEOF.identifica.html();
                }).fail(function() {
                    i3GEO.janela.fechaAguarde();
                    i3GEO.janela.tempoMsg($trad("erroTpl"));
                });
            } else {
                i3GEOF.identifica.html();
            }
        },
        html : function() {
            var p = i3GEOF.identifica._parameters;
            var hash = i3GEO.idioma.objetoIdioma(i3GEOF.identifica.dicionario);
            hash["locaplic"] = i3GEO.configura.locaplic;
            hash["resolution"] = i3GEOF.identifica.resolution;
            hash["namespace"] = "identifica";
            hash["idContainer"] = p.idContainer;
            //var xy = i3GEO.util.extGeo2OSM(p.x + " " + p.y, true);
            hash["x"] = p.x;
            hash["y"] = p.y;

            i3GEOF.identifica.renderFunction.call(this,{texto: Mustache.render(p.mustache, hash)});

            i3GEO.guias.mostraGuiaFerramenta("i3GEOidentificaguia1", "i3GEOidentificaguia");

            $i("i3GEOidentificaguia1").onclick = function() {
                i3GEO.guias.mostraGuiaFerramenta("i3GEOidentificaguia1", "i3GEOidentificaguia");
            };
            $i("i3GEOidentificaguia4").onclick = function() {
                i3GEO.util.copyToClipboard(i3GEOF.identifica._export.join("\n"));
            }
            $i("i3GEOidentificaguia5").onclick =
                function() {
                i3GEO.guias.mostraGuiaFerramenta("i3GEOidentificaguia5", "i3GEOidentificaguia");
                var ins = "<h5 class='copyToMemory' onclick='i3GEO.util.copyToClipboard(this.innerHTML);return false;'>X: " + p.x + " Y: " + p.y + "</h5>";
                $i("i3GEOidentificacoord").innerHTML = ins;
            };
            $i("i3GEOidentificaguia6").onclick = function() {
                var p = i3GEOF.identifica._parameters;
                var gh = i3GEO.coordenadas.geohash.encodeGeoHash(p.y,p.x);
                var linhas = [
                    {
                        "nome": "GeoHack",
                        "click": "i3GEOF.identifica.abreLinkGeohack()"
                    },{
                        "nome": "GeoHash " + gh,
                        "click": "window.open('http://geohash.org/" + gh +"')"
                    }
                    ];
                var ins = Mustache.render("{{#data}}" + p.mustachesistemas + "{{/data}}", {"data":linhas});
                $i("i3GEOidentificaSis").innerHTML = ins;
                i3GEO.guias.mostraGuiaFerramenta("i3GEOidentificaguia6", "i3GEOidentificaguia");
                if (i3GEOF.identifica.mostraSistemasAdicionais === true) {
                    i3GEO.janela.abreAguarde();
                    if (i3GEOF.identifica._sistemasAdicionais.length == 0) {
                        i3GEO.request.get({
                            snackbar: false,
                            snackbarmsg: false,
                            btn: false,
                            par: {
                                idioma: i3GEO.idioma.ATUAL,
                                funcao: "GETSIDENTIFY"
                            },
                            prog: "/serverapi/miscellaneous/",
                            fn: function(data){
                                i3GEOF.identifica.montaListaSistemas(data);
                            }
                        });
                    } else {
                        i3GEOF.identifica.montaListaSistemas("");
                    }
                }
            };
            i3GEOF.identifica.getData();
        },
        buffer: function(form){
            var par = i3GEO.util.getFormData(form);
            par.g_sid = i3GEO.configura.sid;
            if (par.distancia*1 !== 0){
                i3GEO.janela.abreAguarde();
                i3GEO.janela._formModal.block();
                $.get(
                        i3GEO.configura.locaplic+"/ferramentas/buffer/exec.php",
                        par
                )
                .done(
                        function(data, status){
                            i3GEO.janela._formModal.unblock();
                            i3GEO.janela.fechaAguarde();
                            i3GEO.janela.snackBar({content: $trad('feito')});
                            i3GEO.mapa.refresh();
                        }
                )
                .fail(
                        function(data){
                            i3GEO.janela._formModal.unblock();
                            i3GEO.janela.fechaAguarde();
                            i3GEO.janela.snackBar({content: data.statusText, style:'red'});
                        }
                );
            }
            else{
                i3GEO.janela.tempoMsg($trad('erroDistancia',i3GEOF.identifica.dicionario));
            }
        },
        abreLinkGeohack : function() {
            var b, x, y, w, s, param;
            b = i3GEO.calculo.dd2dms(i3GEOF.identifica._parameters.x, i3GEOF.identifica._parameters.y);
            x = b[0].split(" ");
            y = b[1].split(" ");
            w = "W";
            s = "S";
            if (x[0] * 1 > 0) {
                w = "L";
            }
            if (y[0] * 1 > 0) {
                s = "N";
            }
            if (x[0] * 1 < 0) {
                x[0] = x[0] * -1;
            }
            if (y[0] * 1 < 0) {
                y[0] = y[0] * -1;
            }
            param = y[0] + "_" + y[1] + "_" + y[2] + "_" + s + "_" + x[0] + "_" + x[1] + "_" + x[2] + "_" + w;
            window.open("http://tools.wikimedia.de/~magnus/geo/geohack.php?params=" + param);
        },
        /*
         * Function: montaListaSistemas
         *
         * Obt&eacute;m a lista de sistemas especiais de consulta.
         *
         * O resultado &eacute; inserido no div com id "listaSistemas".
         *
         * Cada sistema consiste em uma URL para a qual ser&atilde;o passados os parametros x e y.
         *
         */
        montaListaSistemas : function(data) {
            i3GEO.janela.fechaAguarde();
            var l, divins, ig, sistema, pub, exec, temp, t, linhas = [], ltema, i;
            if (data !== undefined ) {
                if (data && i3GEOF.identifica._sistemasAdicionais.length == 0) {
                    sis = data;
                    for (ig = 0; ig < sis.length; ig++) {
                        if (sis[ig].PUBLICADO && sis[ig].PUBLICADO.toLowerCase() == "sim" ) {
                            sistema = sis[ig].NOME;
                            exec = sis[ig].ABRIR;
                            temp = exec.split("?");
                            if (temp.length !== 2) {
                                exec += "?";
                            }
                            t = "blank";
                            if (sis[ig].TARGET) {
                                t = sis[ig].TARGET;
                            }
                            i3GEOF.identifica._sistemasAdicionais.push(sistema + "," + exec + "," + t);
                        }
                    }
                }
                if (i3GEOF.identifica._sistemasAdicionais.length > 0) {
                    divins = $i("i3GEOidentificalistaSistemas");
                    linhas = [];
                    if (divins) {
                        for (l = 0; l < i3GEOF.identifica._sistemasAdicionais.length; l++) {
                            ltema = i3GEOF.identifica._sistemasAdicionais[l].split(",");
                            if (ltema.length > 1) {
                                linhas.push({
                                    "nome": ltema[0],
                                    "click": "i3GEOF.identifica.mostraDadosSistema('" + ltema[1] + "','" + ltema[2] + "')"
                                });
                            }
                        }
                        temp = Mustache.render("{{#data}}" + i3GEOF.identifica._parameters.mustachesistemas + "{{/data}}", {"data":linhas});
                        divins.innerHTML = temp;
                    }
                }
            }
        },
        getData : function() {
            i3GEO.janela.abreAguarde();
            var p = i3GEOF.identifica._parameters;
            var f = function(retorno) {
                i3GEO.janela.fechaAguarde();
                if(retorno){
                    i3GEOF.identifica.mostraDadosTema(retorno);
                }
            };
            i3GEO.identify.identifica({
                after: f,
                x: p.x,
                y: p.y,
                resolution: i3GEO.configura.ferramentas.identifica.resolution,
                layerNames: p.tema,
                allColumns: true
            });
        },
        /*
         * Function: mostraDadosSistema
         *
         * Obt&eacute;m os dados de um sistema para o ponto de coordenadas clicado no mapa
         *
         * Parametros:
         *
         * exec {String} - url que ser&aacute; aberta
         *
         * target {String} (depreciado) - _self|self| onde a url ser&aacute; aberta. Se for "self", ser&aacute; aberta na mesma janela, caso
         * contr&aacute;rio, em uma nova p&aacute;gina do navegador
         */
        mostraDadosSistema : function(exec, target) {
            exec += "&x=" + i3GEOF.identifica._parameters.x + "&y=" + i3GEOF.identifica._parameters.y;
            window.open(exec);
        },
        mostraDadosTema : function(retorno) {
            console.log("i3GEOF.identifica.mostraDadosTema()");

            var classeTemp="",codigo_tipo_regiao = "",alvo, filtro, camada, idreg, idsalva, paramsalva, i, res = "", ntemas, resultados, nres, cor, j, nitens, k, inicio =
                0, numResultados = 0, tip, link, textovalor;

            if (retorno == undefined || retorno == "") {
                $i("i3GEOidentificaguia1obj").innerHTML = $trad('msgNadaEncontrado', i3GEOF.identifica.dicionario);
                return;
            }
            var lista = [];
            if (retorno !== undefined) {
                for (const layerName of Object.keys(retorno.layers)) {
                    var layer = retorno.layers[layerName];
                    classeTemp = "hidden";
                    var dadosTema = {
                            "nome": layer.layerTitle,
                            "codigoTema": layerName,
                            "textoRemoveFiltro": $trad('removeFiltro', i3GEOF.identifica.dicionario),
                            "registros" : []
                    };
                    i3GEOF.identifica._export.push(layerName);
                    resultados = layer.data;
                    var registros = [];
                    //for (j = inicio; j < nres; j++) {
                    for (let j of resultados){
                        var linha = {};
                        linha.colunas = [];
                        for (let k of Object.keys(j.values)){
                            tip = "&nbsp;&nbsp;";
                            textovalor = j.values[k].value;
                            var coluna = {
                                    "tip": "",
                                    "textovalor": textovalor,
                                    "classeCssEditavel": "hidden"
                            };
                            coluna.etiquetaAtiva = $trad('etiquetaAtiva', i3GEOF.identifica.dicionario);
                            if (j.values[k].tip && j.values[k].tip.toLowerCase() == "sim") {
                                coluna.classeCssTip = "";
                            } else {
                                coluna.classeCssTip = "hidden";
                            }
                            coluna.item = j.values[k].column;
                            coluna.valor = j.values[k].value;
                            coluna.filtraValor = $trad('filtraValor', i3GEOF.identifica.dicionario);
                            coluna.tema = layerName;
                            // verifica se o texto possui tags de abertura e
                            // fechamento html
                            if (textovalor && (textovalor.search(">") >= 0 || textovalor.search("<") >= 0)) {
                                filtro = "";
                                coluna.classeCssFiltro = "hidden";
                            }
                            // o mesmo problema pode ocorrer em raster,
                            // que possuem o nome da classe como valor
                            if (j.values[k].alias.search(">") >= 0 || j.values[k].alias.search("<") >= 0) {
                                filtro = "";
                                coluna.classeCssFiltro = "hidden";
                            }

                            if (j.values[k].link === "") {
                                coluna.alias = j.values[k].alias;
                                coluna.textovalor = textovalor;
                                coluna.link = "";
                                coluna.classeCssLink = "hidden";
                            } else {
                                link = j.values[k].link;
                                if(j.values[k].idIframe){
                                    alvo = j.values[k].idIframe;
                                }
                                else{
                                    alvo = "_blank";
                                }
                                coluna.alias = k.alias;
                                coluna.link = link;
                                coluna.textovalor = textovalor;
                                coluna.alvo = alvo;
                                coluna.classeCssLink = "";
                            }
                            coluna.classeCssImg = "hidden";
                            coluna.img = "";
                            if (j.values[k].img !== "") {
                                coluna.classeCssImg = "";
                                coluna.img = j.values[k].img;
                            }
                            linha.colunas.push(coluna);
                            i3GEOF.identifica._export.push(coluna.alias + ":" + coluna.textovalor);
                        }
                        registros.push(linha);
                    }
                    dadosTema.registros = registros;
                    lista.push(dadosTema);
                }
                temp = Mustache.render("{{#data}}" + i3GEOF.identifica._parameters.mustachedados + "{{/data}}", {"data":lista});
                $i("i3GEOidentificaguia1obj").innerHTML = temp;
                i3GEO.guias.mostraGuiaFerramenta("i3GEOidentificaguia1", "i3GEOidentificaguia");
            }
        },
        filtrar : function(tema, item, valor) {
            i3GEO.janela.abreAguarde();
            $.get(
                    i3GEO.configura.locaplic+"/ferramentas/filtro/exec.php",
                    {
                        g_sid: i3GEO.configura.sid,
                        base64: "sim",
                        funcao: "inserefiltro",
                        tema: tema,
                        filtro: i3GEO.util.base64encode("(*[" + item + "]* = *" + valor + "*)")
                    }
            )
            .done(
                    function(data, status){
                        i3GEO.janela.fechaAguarde();
                        i3GEO.Interface.atualizaTema(data, tema);
                    }
            )
            .fail(
                    function(data){
                        i3GEO.janela.fechaAguarde();
                        i3GEO.janela.snackBar({content: data.statusText, style:'red'});
                    }
            );
        },
        removeFiltro : function(tema) {
            i3GEO.janela.abreAguarde();
            $.get(
                    i3GEO.configura.locaplic+"/ferramentas/filtro/exec.php",
                    {
                        g_sid: i3GEO.configura.sid,
                        funcao: "inserefiltro",
                        tema: tema,
                        filtro: ""
                    }
            )
            .done(
                    function(data, status){
                        i3GEO.janela.fechaAguarde();
                        i3GEO.Interface.atualizaTema(data, tema);
                    }
            )
            .fail(
                    function(data){
                        i3GEO.janela.fechaAguarde();
                        i3GEO.janela.snackBar({content: data.statusText, style:'red'});
                    }
            );
        }
};
//aplica ao codigo i3GEOF definicoes feitas na interface do mapa
//isso permite a substituicao de funcoes e parametros
if(i3GEO.configura.ferramentas.hasOwnProperty("identifica")){
    jQuery.each( i3GEO.configura.ferramentas.identifica, function(index, value) {
        i3GEOF.identifica[index] = i3GEO.configura.ferramentas.identifica[index];
    });
}
