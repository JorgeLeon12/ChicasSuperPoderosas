<!DOCTYPE html>
<html lang="es">
<head>
    <title>
        TeamPerformanceViz
    </title>
    <link rel="stylesheet" type="text/css" href="Estilos.css">
    <script src="D3/d3.min.js" charset="utf-8"></script>
    <script src="script.js" charset="utf-8"></script>   
</head>
<body onLoad="DibujarTodo('name')">
    <div class="cover">
        <div class="cover-center">
            <div class="centrado">
                <h1>TeamPerformanceViz</h1>
            </div>
        </div>
    </div>
    <div class="contenedor">
        <div style="margin-top: 15px;" align="center">
       	<table border="0">
        <tr><td width="80">
            <div id="divTipo">
            	Organizar por:<br>
                <select id="SelectTipo" onChange="CambiarTipo()">
                    <option value="name">Nombre</option>
                    <option value="finalTarget">Meta</option>
                    <option value="type">Actual</option>
                </select>
            </div>
        </td><td width="150" align="left">
            <div id="divName">
            	Enfocar en:<br>
                <select id="SelectName" onChange="CambiarNombre()">
                    <?php
                        include 'sql.php';
                        $Nombre = mysql_query('SELECT name FROM vendedor ORDER BY name ASC')or die(mysql_error());
                        $Cont = 0;
                        while($rowNombre = mysql_fetch_row($Nombre)){
                            echo '<option value="'.$Cont.'">'.$rowNombre[0].'</option>';
                            $Cont++;
                        }
                    ?>
                </select>
            </div>
       </td></tr></table>

        </div>
        <div  align="center" style="padding-top:15px">
            <div id="grafico">
                
                
            </div>
        </div>
        <div  align="center" style="padding-top:30px">
            <div id="paste"> 
            </div>
        </div>
    </div>
</body>
</html>