/**
 * Title: Ajuda
 *
 * Manipula&ccedil;&atilde;o das mensagens de ajuda.
 *
 * Permite definir a mensagem padr&atilde;o da janela de mensagens. Abrir a
 * janela e definir seu conte&uacute;do. Controla tamb&eacute;m o letreiro
 * m&oacute;vel que mostra mensagens especiais definidas em cada layer
 * adicionado ao mapa.
 *
 * Namespace:
 *
 * i3GEO.ajuda
 *
 * Exemplos:
 *
 *
 * Para enviar uma mensagem para a janela (quando estiver aberta), utilize
 *
 * i3GEO.ajuda.mostraJanela("texto");
 *
 *
 * Veja:
 *
 * <http://localhost/i3geo/classesjs/classe_ajuda.js>
 */

if (typeof (i3GEO) === 'undefined') {
	var i3GEO = {};
}
i3GEO.ajuda =
	{
		/**
		 * Function: abreDoc
		 *
		 * Abre a documentacao do i3geo em uma nova janela do navegador
		 *
		 * Parametro:
		 *
		 * {string} - url que ser&aacute; adicionada a i3GEO.configura.locaplic
		 */
		abreDoc : function(url) {
			if (!url) {
				url = "/documentacao/index.html";
			}
			window.open(i3GEO.configura.locaplic + url);
		},
		/**
		 * Function: redesSociais
		 *
		 * Abre uma janela com informa&ccedil;&otilde;es sobre a presen&ccedil;a do
		 * i3Geo em redes sociais
		 */
		redesSociais : function() {
			i3GEO.janela.cria(
				"400px",
				"400px",
				i3GEO.configura.locaplic + "/ferramentas/redessociais/index.php",
				"",
				"",
				"<div class='i3GeoTituloJanela'>" + $trad("u5c") + "</div>",
				i3GEO.util.generateId("redes"));
		}
	};