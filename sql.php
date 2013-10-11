<?php 
	$host = "localhost"; 
	$user = "root"; 
	$pass = ""; 
	$r = mysql_connect($host, $user, $pass);
	mysql_select_db("json") or die(mysql_error());
?>