<!DOCTYPE html>
<html lang="es">
<head>
    <title>
        Team Performance
    </title>
    <link rel="stylesheet" type="text/css" href="Estilos.css">
    <script src="D3/d3.min.js" charset="utf-8"></script>
    <script src="script2.js" charset="utf-8"></script>   
</head>

<body onLoad="Start('name')" link="#FFFFFF" vlink="#FFFFFF" alink="#FFFFFF">
    <div class="cover">
        <div class="cover-center">
            <div class="centrado">
                <h1>TeamPerformanceViz</h1>
            </div>
            <div style="float:right; padding-right:18%; color:#FFFFFF;">
            	<a href="subirJson.php">Subir JSON</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="json.php?t=name">Obtener JSON</a>
            </div>
        </div>
    </div>
    <div class="contenedor">
        <div style="margin-top: 15px;" align="center">
       	<table border="0">
            <tr>
                <td width="80">
                    <div id="divTipo">
            	       Organizar por:<br>
                        <select id="SelectTipo" onChange="ChangeCanvas()">
                            <option value="name">Nombre</option>
                            <option value="finalTarget">Meta</option>
                        </select>
                    </div>
                </td>
            </tr>
        </table>
        </div>
        <div  align="center" style="padding-top:15px">
            <div id="grafico"> 
                
            </div>
        </div>
        <div  align="center" style="padding-top:30px">
            <div id="svg-miniature"> 
            </div>
        </div>
    </div>
</body>
</html>