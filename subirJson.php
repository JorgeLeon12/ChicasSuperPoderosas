<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <form action="subirJson.php" method="post" enctype="multipart/form-data">
    <input type="file" name="archivo" id="archivo"></input>
    <input type="submit" value="Subir archivo"></input>
    </form>
<?php 
include 'sql.php';
if(isset($_FILES['archivo'])){
	if ($_FILES['archivo']["error"] > 0){
		echo "Error: " . $_FILES['archivo']['text'] . "<br>";
	}else{
		copy($_FILES['archivo']['tmp_name'],$_FILES['archivo']['name']);
		//echo $_FILES['archivo']['name'];
		// Lee el fichero en una variable,
		// y convierte su contenido a una estructura de datos
		$str_datos = file_get_contents($_FILES['archivo']['name']);
		$ArchJson = json_decode($str_datos,true);
		
		//$vendedores = [];
		
		for($i=0; $i < (count($ArchJson["teamPerformance"]))-1;$i++){
			
			//echo "Nom ".$ArchJson["teamPerformance"][$i]["name"]."<br>";
			
			$vendedores = '(\''.$ArchJson["teamPerformance"][$i]["name"].'\',\''.$ArchJson["teamPerformance"][$i]["goalStatus"].'\',\''.$ArchJson["teamPerformance"][$i]["finalTarget"].'\')';
			//echo $vendedores;
			
			mysql_query('INSERT INTO vendedor(name, goalStatus, finalTarget) VALUES '.$vendedores)or die(mysql_error());
			$id=mysql_insert_id();
			//echo $id."<br>";
			for($j=0; $j < count($ArchJson["teamPerformance"][$i]["data"]); $j++){
				$datos = '(\''.$id.'\',\''.$ArchJson["teamPerformance"][$i]["data"][$j]["type"].'\',\''.$ArchJson["teamPerformance"][$i]["data"][$j]["date"].'\',\''.$ArchJson["teamPerformance"][$i]["data"][$j]["amount"].'\')';
				//echo $datos;
				
				mysql_query('INSERT INTO objetivos(v_id, type, date, amount) VALUES '.$datos);
				//echo "Datos ".$ArchJson["teamPerformance"][$i]["data"][$j]["amount"]."<br>";
			}
		 }
		// $vendedores[$i] = '(\''.$ArchJson["teamPerformance"][$i]["name"].'\',\''.$ArchJson["teamPerformance"][$i]["goalStatus"].'\',\''.$ArchJson["teamPerformance"][$i]["finalTarget"].'\')';
		// echo $vendedores[$i];
		
		//echo mysql_insert_id($r);
		
		$fh = fopen("datos_out.json", 'w')
			  or die("Error al abrir fichero de salida");
		fwrite($fh, json_encode($ArchJson,JSON_UNESCAPED_UNICODE));
		fclose($fh);
		echo "Archivo Actualizado!";
	}
}
?>
</body>
</html>
