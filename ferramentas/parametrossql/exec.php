<?php
include_once(dirname(__FILE__)."/../inicia.php");
//
//faz a busca da fun&ccedil;&atilde;o que deve ser executada
//
$retorno = ""; //string que ser&aacute; retornada ao browser via JSON
switch (strtoupper($funcao))
{
	/*
	 Valor: PARAMETROSPLUGIN

	Obtem a string do plugin
	*/
	case "PARAMETROSPLUGIN":
		//no mashup o nome do tema e sempre o nome do mapfile
		if (file_exists($locaplic."/temas/".$tema.".map")){
			$map1 = @ms_newMapObj($locaplic."/temas/".$tema.".map");
			$layer1 = $map1->getlayerbyname($tema);
		}
		else{
			//nesse caso, o mapfile vem da secao php
			$map = ms_newMapObj($map_file);
			$layer = $map->getlayerbyname($tema);
			//os parametros do plugin sao obtidos do mapfile original
			if (file_exists($locaplic."/temas/".$layer->getmetadata("nomeoriginal").".map")){
				$map1 = @ms_newMapObj($locaplic."/temas/".$layer->getmetadata("nomeoriginal").".map");
				$layer1 = $map1->getlayerbyname($layer->getmetadata("nomeoriginal"));
			}
		}
		if($map1){
			if($layer1 != ""){
				$c = $layer1->getmetadata("PLUGINI3GEO");
				if($c == ""){
					$retorno = "erro";
				}
				else{
					if (!mb_detect_encoding($c,"UTF-8",true)){
						$c = utf8_encode($c);
					}
					$retorno = json_decode($c,true);
				}
			}
			else{
				$retorno = "layer nao encontrado em temas";
			}
		}
		else{
			$retorno = "Erro ao criar o mapa";
		}
		break;
		/*
		 Valor: APLICAR

		Aplica a substituicao de chaves pelos valores enviados no parametro $valores com os valores separados por virgulas na sequencia das chaves
		*/
	case "APLICAR":
		$map = ms_newMapObj($map_file);
		//pega o layer
		$layer = $map->getlayerbyname($tema);
		$map1 = @ms_newMapObj($locaplic."/temas/".$layer->getmetadata("nomeoriginal").".map");
		if($map1){
			$layer1 = $map1->getlayerbyname($layer->getmetadata("nomeoriginal"));
			if($layer1 != ""){
				$data = $layer1->data;
				$c = $layer1->getmetadata("PLUGINI3GEO");
				if($c == ""){
					$retorno = "erro";
				}
				if($c != ""){
					$cs = json_decode($c,true);
					$cs = $cs["parametros"];
					$chaves = array();
					foreach($cs as $c){
						$chaves[] = $c["chave"];
					}
					$chaves = implode(",",$chaves);
					$filtro = $layer1->getFilterString();
					if(!empty($valores)){
						$chaves = str_ireplace(array(" and ", " or ", "select","from","where","update","delete","insert","--","drop",";"),"",$chaves);
						$chaves = explode(",",$chaves);
						$valores = str_ireplace(array(" and ", " or ", "select","from","where","update","delete","insert","--","drop",";"),"",$valores);
						$valores = explode(",",strip_tags($valores));
						$n = count($chaves);
						for($i = 0; $i < $n; $i++){
							if($chaves[$i] != ""){
								$v = $valores[$i];
								$data = str_replace($chaves[$i],$v,$data);
								if($filtro != ""){
									$filtro = str_replace($chaves[$i],$v,$filtro);
								}
							}
						}
						if($filtro != ""){
							$layer->setfilter($filtro);
						}
						$layer->set("data",$data);
					}
					$layer->set("status",MS_DEFAULT);
					$layer->setmetadata("PLUGINI3GEO",'{"plugin":"parametrossql","ativo":"sim"}');
					$layer->setmetadata("TEMA",$layer1->getmetadata("TEMA")." - ".implode(",",$valores));
					//$layer->set("name","plugin".nomeRandomico());
					$layer->setmetadata("nomeoriginal",$layer1->name);
					if (connection_aborted()){
						exit();
					}
					$salvo = $map->save($map_file);
					$retorno = "ok";
				}
			}
			else{
				$retorno = "layer $nomeLayer nao encontrado";
			}
		}
		else{
			$retorno = "mapfile nao encontrado em temas";
		}
		break;
	case "REMOVER":
		$map = ms_newMapObj($map_file);
		$layer = $map->getlayerbyname($tema);
		if($layer != ""){
			$layer->set("status",MS_DELETE);
			$salvo = $map->save($map_file);
		}
		$retorno = "ok";
		break;
	/*
	 * Retorna os valores obtidos de um programa PHP incluido nos parametros do plugin
	 * Utilizado para pegar a lista de valores que sera apresentada ao usuario
	 */
	case "INCLUDEPROG":
		if(file_exists($locaplic."/".$prog)){
			include($locaplic."/".$prog);
		}
		break;
}
if (!connection_aborted()){
	cpjson($retorno);
}
else{
	exit();
}

?>