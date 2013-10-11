<!DOCTYPE html>
<html lang="es">
<head>
    <title>
        Team Performance
    </title>
    <link rel="stylesheet" type="text/css" href="Estilos.css">
    <script src="D3/d3.min.js" charset="utf-8"></script>
    <script src="script.js" charset="utf-8"></script>   
</head>

<body onLoad="Start('name')" link="#FFFFFF" vlink="#FFFFFF" alink="#FFFFFF">
    <div class="cover">
        <div class="cover-center">
            <div class="centrado">
                <h1>TeamPerformanceViz</h1>
            </div>
            <div style="float:right; padding-right:18%; color:#FFFFFF;">             	<a href="index.php">Grafica</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           	<a href="subirJson.php">Subir JSON</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="verJson.php?t=name">Obtener JSON</a></div>
        </div>
    </div>
    <div class="contenedor">
        <div style="margin-top: 15px;" align="center">
<?php
include 'json.php';
?>
        </div>
    </div>
</body>
</html>