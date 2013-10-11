<?php
	include 'sql.php';
	
	

	if (!$r) {
		echo "Could not connect to server\n";
		trigger_error(mysql_error(), E_USER_ERROR);
	} else {
		//mysql_select_db("json") or die(mysql_error()); 
		
		if($_GET['t'] == 'type'){
		//SELECT * FROM pedidos INNER JOIN clientes ON pedidos.clie = clientes.numclie
			$sql = "SELECT * FROM vendedor INNER JOIN objetivos ON vendedor.id = objetivos.v_id WHERE objetivos.type = \"actual\" ORDER BY ".$_GET['t']." ASC";
		}else{
			$sql = "SELECT * FROM vendedor ORDER BY ".$_GET['t']." ASC";
		}
		
		$vendedores = mysql_query($sql); 
	
		while($row = mysql_fetch_row($vendedores)){
			$sql2= "select * from objetivos where v_id=$row[0]";
			$objetivos= mysql_query($sql2);
			while($fila = mysql_fetch_row($objetivos)){
				$array2[] = array('type' => $fila[2],"date" => $fila[3], "amount" => $fila[4]);
			}
			$array[]= array('name' => $row[1],"finalTarget" => $row[3], "goalStatus" => $row[2], "data" => $array2);
			unset($array2);
		}
		$arreglo = array("success" => "true", "teamPerformance" => $array);
		printf(json_encode($arreglo));

	}



?>