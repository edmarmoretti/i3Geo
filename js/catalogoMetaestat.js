i3GEO.catalogoMetaestat = {
        WMS: "",
        MIGALHA: [],
        config: {
            'templateDir': 'templates/dir.html',
            'templateTema': 'templates/tema.html',
            'templateAdd': 'templates/temametaestat.html',
            'idCatalogoPrincipal': 'catalogoPrincipal',
            'idCatalogoNavegacao': 'catalogoNavegacao',
            'idOndeMigalha': 'catalogoMigalha'
        },
        _parameters: [],
        carregaTemplates: function(){
            var t1 = i3GEO.catalogoMetaestat.config.templateDir,
            t2 = i3GEO.catalogoMetaestat.config.templateTema,
            t3 = $("#" + i3GEO.catalogoMetaestat.config.idOndeMigalha).attr("data-template"),
            t4 = i3GEO.catalogoMetaestat.config.templateAdd;
            $.when( $.get(t1),$.get(t2),$.get(t3),$.get(t4) ).done(function(r1,r2,r3,r4) {
                i3GEO.template.dir = r1[0];
                i3GEO.template.tema = r2[0];
                i3GEO.template.catalogoMigalha = r3[0];
                i3GEO.template.metaestat.templateAdd = r4[0];
                i3GEO.catalogoMetaestat.inicia();
            }).fail(function() {
                i3GEO.janela.closeMsg($trad("erroTpl"));
                return;
            });
        },
        aguarde: function(){
            $("#" + i3GEO.catalogoMetaestat.config.idCatalogoNavegacao).html($trad("o1"));
        },
        atualizaMigalha: function(){
            var migalha = i3GEO.catalogoMetaestat.MIGALHA;
            var n = migalha.length;
            var nome = migalha[n - 1].nome;
            var onclick = migalha[n - 2].onclick;
            var t = Mustache.to_html(
                    i3GEO.template.catalogoMigalha,
                    {"nome":nome,"onclick":"i3GEO.catalogoMetaestat.MIGALHA.pop();i3GEO.catalogoMetaestat.MIGALHA.pop();" + onclick}
            );

            $("#" + i3GEO.catalogoMetaestat.config.idOndeMigalha).html(t);
            $("#i3GEOguiaMovelConteudo").scrollTop(0);
        },
        escondeCatalogoPrincipal: function(){
            $("#" + i3GEO.catalogoMetaestat.config.idCatalogoPrincipal).hide();
        },
        mostraCatalogoPrincipal: function(){
            $("#" + i3GEO.catalogoMetaestat.config.idCatalogoNavegacao).fadeOut( "fast", function(){
                $("#" + i3GEO.catalogoMetaestat.config.idOndeMigalha).hide();
                $("#" + i3GEO.catalogoMetaestat.config.idCatalogoPrincipal).show();
            });
        },
        inicia: function(config){
            if (typeof (console) !== 'undefined')
                console.info("i3GEO.catalogoMetaestat.inicia");

            i3GEO.catalogoMetaestat._parameters = [];
            if(config){
                $.each( config, function( i,v ) {
                    i3GEO.catalogoMetaestat.config[i] = v;
                });
            }
            i3GEO.catalogoMetaestat.aguarde();
            if(!i3GEO.template.metaestat.templateAdd || !i3GEO.template.dir || !i3GEO.template.tema || !i3GEO.template.catalogoMigalha){
                i3GEO.catalogoMetaestat.carregaTemplates();
                return;
            } else {
                i3GEO.catalogoMetaestat.MIGALHA = [
                    {"nome":"","onclick":"i3GEO.catalogoMetaestat.mostraCatalogoPrincipal()"},
                    {"nome":$trad("x57"),"onclick":"i3GEO.catalogoMetaestat.inicia()"}
                    ];
                i3GEO.catalogoMetaestat.atualizaMigalha();

                config = i3GEO.catalogoMetaestat.config;

                i3GEO.catalogoMetaestat.escondeCatalogoPrincipal();

                var t = Mustache.to_html(
                        i3GEO.template.catalogoMigalha,
                        {"nome":$trad("x57"),"onclick":"i3GEO.catalogoMetaestat.mostraCatalogoPrincipal()"}
                );

                var lista = function(dados){
                    var clone = [],
                    t;

                    $.each( dados, function( i,v ) {
                        v.onclick = "i3GEO.catalogoMetaestat.listaMedidas(" + v.codigo_variavel + ",'" + v.nome + "')";
                        clone.push(v);
                    });
                    t = Mustache.to_html(
                            "{{#data}}" + i3GEO.template.dir + "{{/data}}",
                            {"data":clone}
                    );
                    $("#" + config.idCatalogoNavegacao).html(t);

                    $("#" + i3GEO.catalogoMetaestat.config.idCatalogoPrincipal).fadeOut( "fast", function(){
                        $("#" + i3GEO.catalogoMetaestat.config.idOndeMigalha).show();
                        $("#" + i3GEO.catalogoMetaestat.config.idCatalogoNavegacao).show();
                    });

                };
                i3GEO.catalogoMetaestat.getVariables(lista);
            }
        },
        getVariables: function(after){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getVariables",
                    filtro_esquema: ""
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        listaMedidas: function(codigo_variavel, nome){
            if (typeof (console) !== 'undefined')
                console.info("i3GEO.catalogoMetaestat.listaCamadas");

            i3GEO.catalogoMetaestat.MIGALHA.push({"nome": nome,"onclick":"i3GEO.catalogoMetaestat.listaMedidas(" + codigo_variavel + ",'" + nome + "')"});
            i3GEO.catalogoMetaestat.atualizaMigalha();
            i3GEO.catalogoMetaestat.aguarde();
            var monta = function(data){
                var clone = [],
                g = "",
                temas;
                //monta a lista com proximo nivel
                $.each( data, function( i,v ) {
                    v.onclick = "i3GEO.catalogoMetaestat.openFormAddLayer(" + codigo_variavel + ",'" + nome + "'," + v.id_medida_variavel + ",'" + v.nomemedida + "')";
                    v.nome = v.nomemedida;
                    clone.push(v);
                });
                var t = Mustache.to_html(
                        "{{#data}}" + i3GEO.template.tema + "{{/data}}",
                        {"data":clone}
                );
                $("#" + i3GEO.catalogoMetaestat.config.idCatalogoNavegacao).html(t);
            };
            i3GEO.catalogoMetaestat.getMeasuresVariable(monta,codigo_variavel);
        },
        getMeasuresVariable: function(after,variable){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getMeasuresVariable",
                    variable: variable
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        getRegionsMeasure: function(after,measure){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getRegionsMeasure",
                    measure: measure
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        selectRegionsMeasure: function(measure){
            var temp = function(dados){
                ins = '<h5>'+$trad('selecionaTipoLimiteGeog')+'</h5>';
                ins += "<div style='width: 100%;' class='input-group'>";
                ins += "<select class='form-control' name='regiontype' >";
                for (const d of dados) {
                    ins += "<option title='' value='"+d.codigo_tipo_regiao+"'>"+d.nome_tipo_regiao+"</option>";
                }
                ins += "</select><b class='caret careti'></b></div>";
                $i("i3geoCartoRegioesMedidasVariavel").innerHTML = ins;
                return ins;
            };
            i3GEO.catalogoMetaestat.getRegionsMeasure(temp,measure);
        },
        getClassificationsMeasure: function(after,measure){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getClassificationsMeasure",
                    measure: measure
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        selectClassificationsMeasure: function(measure){
            var temp = function(dados){
                var n = dados.length,
                ins = '<h5>'+$trad('selecionaTipoClassificacao')+'</h5>',
                i;
                ins += "<div style='width: 100%;' class='input-group'>";
                ins += "<select class='form-control' name='classificationtype' >";
                for(i=0;i<n;i++){
                    ins += "<option title='"+dados[i].observacao+"' value='"+dados[i].id_classificacao+"'>"+dados[i].nome+"</option>";
                }
                ins += "</select><b class='caret careti'></b></div>";
                $i("i3geoCartoTipoClassificacao").innerHTML = ins;
            };
            i3GEO.catalogoMetaestat.getClassificationsMeasure(temp,measure);
        },
        getParametersMeasure: function(after,id_medida_variavel){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getParametersMeasure",
                    measure: id_medida_variavel
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        getParametersMeasureValues: function(after,id_parametro_medida){
            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    funcao: "getParametersMeasureValues",
                    parameter: id_parametro_medida
                },
                prog: "/serverapi/catalog/",
                fn: function(data){
                    after.call(after, data);
                }
            });
        },
        listParametersMeasure: function(measure,parameters,nivel){
            var n = parameters.length,
            onde = $i("i3geoCartoParametrosMedidasVariavel"),
            idpar,idcombo,i,novoel,teste;
            getIdPai = function(filho){
                var n = parameters.length,i;
                for(i=0;i<n;i++){
                    if(parameters[i].id_parametro_medida == filho){
                        return parameters[i].id_pai;
                    }
                }
                return false;
            };
            //cria o combo para o parametro cujo id_pai for do nivel escolhido
            for(i=0;i<n;i++){
                if(parameters[i].id_pai == nivel){
                    idpar = "parametro_"+parameters[i].id_parametro_medida;
                    idcombo = "parametro_"+parameters[i].id_parametro_medida+"_"+nivel;
                    teste = getIdPai(parameters[i].id_parametro_medida);
                    if(teste != false){
                        idpar = "parametro_"+teste;
                    }
                    if(!$i(idpar)){
                        novoel = document.createElement("div");
                        novoel.id = idpar;
                        onde.appendChild(novoel);
                    }
                    onde = $i(idpar);
                    if(!$i(idcombo)){
                        novoel = document.createElement("div");
                        novoel.id = idcombo;
                        onde.appendChild(novoel);
                        i3GEO.catalogoMetaestat.listParametersMeasureValues(measure,parameters,parameters[i].id_parametro_medida,parameters[i].nome,nivel,onde,idcombo);
                    }
                }
            }
        },
        listParametersMeasureValues: function(measure,parameters,id_parametro_medida,titulo,nivel,onde,idcombo){
            var getIdFilho = function(pai){
                var n = parameters.length,
                i;
                for(i=0;i<n;i++){
                    if(parameters[i].id_pai == pai){
                        return parameters[i].id_parametro_medida;
                    }
                }
                return false;
            };
            var temp = function(dados){
                var n = dados.length,
                ins = "",
                oc = "'i3GEO.catalogoMetaestat.parametros.combos(\""+id_parametro_medida+"\")'",
                filho = getIdFilho(id_parametro_medida),
                i,novoel;
                ins = "<br><p>"+titulo+"</p>";

                ins += i3GEO.util.checkCombo(
                        "combo"+idcombo,
                        dados,
                        dados,
                        "",
                        ""
                );
                novoel = document.createElement("div");
                novoel.innerHTML = ins;
                $(novoel).find("input").click(function(){
                    i3GEO.catalogoMetaestat.listParametersMeasure(
                            measure,
                            parameters,
                            nivel++
                    );
                });
                onde.appendChild(novoel);
            };
            i3GEO.catalogoMetaestat.getParametersMeasureValues(temp,id_parametro_medida);
        },
        openFormAddLayer: function(variable,namevariable,measure,namemeasure){
            var config = {
                    variable: variable,
                    namevariable: namevariable,
                    measure: measure,
                    namemeasure: namemeasure,
                    adiciona: $trad("g2")
            };
            if (typeof (console) !== 'undefined')
                console.info("i3GEO.catalogoMetaestat.openFormAddLayer");

            i3GEO.catalogoMetaestat.MIGALHA.push({"nome": namemeasure,"onclick":"i3GEO.catalogoMetaestat.listaMedidas(" + variable + ",'" + namevariable + "')"});
            i3GEO.catalogoMetaestat.atualizaMigalha();
            i3GEO.catalogoMetaestat.aguarde();
            var t = Mustache.to_html(
                    "{{#data}}" + i3GEO.template.metaestat.templateAdd + "{{/data}}",
                    {"data":config}
            );
            $("#" + i3GEO.catalogoMetaestat.config.idCatalogoNavegacao).html(t);
            i3GEO.catalogoMetaestat.selectRegionsMeasure(measure);
            i3GEO.catalogoMetaestat.selectClassificationsMeasure(measure);
            var temp = function(parameters){
                i3GEO.catalogoMetaestat._parameters = parameters;
                i3GEO.catalogoMetaestat.listParametersMeasure(measure,parameters,0);
            };
            i3GEO.catalogoMetaestat.getParametersMeasure(temp,measure);
        },
        addLayer: function(btn){
            if (typeof (console) !== 'undefined')
                console.info("i3GEO.catalogoMetaestat.addLayer");

            i3GEO.request.get({
                snackbar: false,
                snackbarmsg: false,
                btn: false,
                par: {
                    measure: i3GEO.catalogoMetaestat._parameters[0].id_medida_variavel,
                    filter: i3GEO.catalogoMetaestat.getFilter(),
                    classification: $("#i3geoCartoTipoClassificacao select").val(),
                    regiontype: $("#i3geoCartoRegioesMedidasVariavel select").val(),
                    opacity: 70
                },
                prog: "/restmapserver/map/" + i3GEO.configura.sid + "/addLayerMetaestatFilter",
                fn: function(){
                    i3GEO.mapa.refresh();
                }
            });
        },
        getFilter: function(){
            if(i3GEO.catalogoMetaestat._parameters == 0){
                return "";
            }
            var i,n,c,val,
            t=[],
            dados = i3GEO.catalogoMetaestat._parameters;
            n = dados.length;
            for(i=0;i<n;i++){
                c = $i("comboparametro_"+dados[i].id_parametro_medida+"_"+dados[i].id_pai);
                if(c){
                    val = i3GEO.util.valoresCheckCombo(c.id);
                    if(val.length > 0){
                        t.push(dados[i].coluna+' * "'+val.join('","')+'"');
                    }
                }
            }
            if(t.length > 0){
                return t.join("|");
            }
            else{
                return "";
            }
        }
};