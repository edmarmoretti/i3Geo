if(typeof(i3GEO)==='undefined'){var i3GEO={}}i3GEO.timer={ativa:function(){this.mapa.ativa();this.layers.ativa()},mapa:{_id:"",_intervalo:0,_timeout:false,_counter:false,_snackbar:"",ativa:function({id="tempoRedesenho",intervalo=0}={}){var me=i3GEO.timer.mapa,onde;me._id=id;me._intervalo=intervalo;if(me._id=="tempoRedesenho"&&me._intervalo>0){var html="<span class='text-center'> Timer. "+$trad("clickparar")+" </span><span id='tempoRedesenho' class='text-center'></span>";me._snackbar=i3GEO.janela.snackBar({content:html,onClose:function(){i3GEO.timer.mapa.desativa()},timeout:0})}me.reinicia()},reinicia:function(){var me=i3GEO.timer.mapa,onde;clearTimeout(me._counter);clearTimeout(me._timeout);onde=$i(me._id);if(me._intervalo>0){if(onde){onde.innerHTML=me._intervalo/1000;me._counter=setTimeout(me.contagem,1000)}me._timeout=setTimeout(me.redesenha,me._intervalo)}},desativa:function(){var me=i3GEO.timer.mapa,onde=$i(me._id);onde.innerHTML="";me._intervalo=0;clearTimeout(me._counter);clearTimeout(me._timeout);me._counter=false;me._timeout=false;$(me._snackbar).snackbar("hide");me._snackbar=""},prompt:function(){var me=i3GEO.timer.mapa;if(me._snackbar!=""||me._counter!=false){return}var funcaoOk=function(){var v=$i("i3GEOjanelaprompt").value*1;if(typeof v=="number"){i3GEO.timer.mapa.ativa({intervalo:v*1000})}};i3GEO.janela.prompt($trad("intervalo_s"),funcaoOk,15)},redesenha:function(){var me=i3GEO.timer.mapa,onde=$i(me._id);if(onde){onde.innerHTML=""}clearTimeout(me._counter);clearTimeout(me._timeout);me.reinicia();i3GEO.Interface.openlayers.atualizaMapa()},contagem:function(){var me=i3GEO.timer.mapa,onde=$i(me._id);if(onde){onde.innerHTML=parseInt(onde.innerHTML,10)-1}me._counter=setTimeout(me.contagem,1000)}},layers:{ativa:function(){}}};