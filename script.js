    var h = 480;
    var w = 940;
	var Tipo = "name";
    var finalTarget = [];
    var actual= [];
    var names= [];
    var cuatrimestres = [];
    var length;
    var maxDataPoint;
    var tmpx;
	var CoorXyH = [];
	var TSelect;
    var div = d3.select("#grafico").append("div").attr("id", "tooltip");
	
	function ChangeCanvas(){
		div.remove("#tooltip");
		TSelect = document.getElementById("SelectTipo");
		TSelect = TSelect.value;
		document.getElementById("canvas").remove("#canvas");
		document.getElementById("canvas").remove("#canvas");
		Start(TSelect);
	}

    function Start(TSelect){
        h = 480;
        w = 940;
        finalTarget = [];
        actual= [];
        names= [];
        cuatrimestres = [];
		//d3.json('target.json', read);
		d3.json('json.php?t=' + TSelect, read);
    }
    function randomColor() { 
        var letters = '0123456789ABCDEF'.split(''); 
        var color = '#';
        for (var i = 0; i < 6; i++ ) { 
            color += letters[Math.round(Math.random() * 15)]; 
        } 
        return color; 
    }

    function read(jsondata) {
        var estacion=jsondata.teamPerformance[0].data[5].date;
        est=estacion.split('-')[1];
        for(var i = 0; i < jsondata.teamPerformance.length; i++){
            finalTarget[i] = jsondata.teamPerformance[i].finalTarget;
            actual[i]=jsondata.teamPerformance[i].data[jsondata.teamPerformance[i].data.length-1].amount;
            names[i]=jsondata.teamPerformance[i].name;
            cuatrimestres[i] = [];
            for(var j = 1; j < jsondata.teamPerformance[i].data.length-1; j++){
                cuatrimestres[i][j] = jsondata.teamPerformance[i].data[j].amount;
            }
        }
        length=jsondata.teamPerformance.length;
        createEscale();       
    }

    function createEscale(){
        var minDataPoint = d3.min(finalTarget);
        if (d3.max(finalTarget)>d3.max(actual)){
            maxDataPoint = d3.max(finalTarget);    
        }else{
            maxDataPoint = d3.max(actual)*1.3;       
        }
        var linearScale = d3.scale.linear()
                            .domain([0,maxDataPoint])
                            .range([0,h]);
        createCanvas(linearScale);
    }

    function createCanvas(linearScale){
		var svg = d3.select("#grafico").append("svg");
        //Adecua el svg donde se va a dibujar
        svg.attr("id", "canvas")
           .attr("width", w)
           .attr("height", h)
           .attr("viewBox", "0 0 960 480");

        createAxis(svg);
        newData(svg, linearScale);
    }

    function createAxis(svg){
    	svg.attr("id", "canvas")
           .attr("width", w)
		   .attr("height", h)
		   .attr("viewBox", "0 0 960 480");
        
        var y = d3.scale.linear()
                  .domain([maxDataPoint,0])
                  .range([0,h]);
        
        //Posible svg vacio
        svg.append("svg:svg")
           .attr("height", h)
           .attr("width", w);
        
        var vis = svg.append("svg:g")
                     .attr("transform", "translate(50,0)");

        var rules = vis.append("svg:g")
                       .classed("rules", true);
        
        rules.append("svg:g")
             .classed("grid y_grid", true)
             .call(make_y_axis(y)
                    .tickSize(-w,0,0)
                    .tickFormat("")
             );

        rules.append("svg:g")
             .classed("labels y_labels", true)
             .call(make_y_axis(y)
                    .tickSubdivide(0)
                    .tickSize(0, 10, 0)
             )
    }

    function make_y_axis(y) {
            return d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(12)
        }

    function newData(svg, linearScale){
    	var x = 0;
        var separacion = 20;
        var newFinalTarget = [];
        var newActual= [];
        var newCuatrimestres = [];
        //Inicializa las variables utilizadas para dibujar.
        for(var i = length-1; i >=0; i--){
            //Escala los objetivos finales y el acumulado.
            newFinalTarget[i] = linearScale(finalTarget[i]);
            newActual[i] = linearScale(actual[i]);
            //Calcula el tamaño horizontal del contenido del camvas.
            x += newFinalTarget[i]*1.25-separacion;
            
            //Escala las lineas de los cuatrimestres.
            newCuatrimestres[i] = [];
            for(var j = 1; j < cuatrimestres[i].length-1; j++){
                newCuatrimestres[i][j] = linearScale(cuatrimestres[i][j]);
            }
        }
        //Recorre la coordenada en x para no ocultar las escalas del lado izquierdo.
        x+=separacion+55;
        //Variable que guarda el tamaño horizontal en todo momento (No debería ser modificada).
        tmpx = x;
        
        //Crea un grupo donde se dibujará todo para cuando se necesiten hacer transformaciones (Scroll).
        var svg = svg.append("g").attr("id", "Contenido");
        drawBackground(svg, x, separacion, newFinalTarget, newActual, newCuatrimestres);
    }

    function drawBackground(svg, x, separacion, newFinalTarget, newActual, newCuatrimestres){
        for(var i = 0; i < x/940+1; i++){
            svg.append("image")
                .attr("width", w)
                .attr("height", h)
                .attr("x", i*939)
                .attr("xlink:href", "assets/background-mountains.svg")
                .attr("id", "elimina");

            if(est>=3 && est<6){//primavera
            svg.append("image")
                .attr("width", w)
                .attr("height", h)
                .attr("x", i*939)
                .attr("xlink:href", "assets/background-sky.svg");    
            }
            else if (est>=6 && est<9){//verano
                svg.append("image")
                    .attr("width", w)
                    .attr("height", h)
                    .attr("x", i*939)
                    .attr("xlink:href", "assets/background-sky-verano.svg"); 

            }
            else if(est>=9 && est<12) { //otoño
                svg.append("image")
                    .attr("width", w)
                    .attr("height", h)
                    .attr("x", i*939)
                    .attr("xlink:href", "assets/background-sky-otono.svg"); 
            }
            else{//invierno
                svg.append("image")
                    .attr("width", w)
                    .attr("height", h)
                    .attr("x", i*939)
                    .attr("xlink:href", "assets/background-sky-invierno.svg"); 

            }
        }
        drawMountains(svg, x, separacion, newFinalTarget, newActual, newCuatrimestres);
    }

    function drawMountains(svg, x, separacion, newFinalTarget, newActual, newCuatrimestres){
        var selectedMount;
        //Dibuja las montañas de acuerdo a las estaciones
        if(est>=3 && est<9){
            selectedMount="assets/green-mountain.svg";
        }
        else if (est>=9 && est<12){
            selectedMount="assets/green-mountain.svg";   
        }
        else{
            selectedMount="assets/mountain-invierno.svg";
        }
        //Dibuja todas las montañas junto con sus elementos
        for(var i = length-1; i >=0; i--){
            //Se inicializan las variables globales utilizadas despues en el scrollbar
            drawCloud(svg, x, i);

            //drawMountainBase(svg, x, i, newFinalTarget, finalTarget, newActual, selectedMount);
            if(newActual[i]>newFinalTarget[i]){
                drawBalloon(svg, x, i, newFinalTarget, newActual);
                drawMountainBase(svg, x, i, newFinalTarget, finalTarget, newActual, selectedMount);
                drawMountain(svg, x, i, newFinalTarget, newActual, selectedMount);
                //Linea vertical hacia el globo
                svg.append("line").attr("x1", x-(newFinalTarget[i]*1.25/2)).attr("x2", x-(newFinalTarget[i]*1.25/2)).attr("y1", h-newFinalTarget[i]).attr("y2", h-newFinalTarget[i]).style("stroke-width", "2").style("stroke", "white")
                .transition().delay(300).duration(1000).attr("y1", h-newFinalTarget[i]).attr("y2", h-newActual[i]+15);
                //Circulos en caso de que se haya superado el objetivo.
                svg.append("svg:g").append("circle").attr("cx", x).attr("cy", h).attr("r", 10).attr("numero", i).on("click", tooltip)
                .transition().delay(100).duration(1000) .attr("cx", x-(newFinalTarget[i]*1.25/2)).attr("cy", h-newActual[i]+10).style("fill",randomColor());
                svg.append("svg:g").append("circle").attr("cx",  x).attr("cy", h).attr("r", 4).style("fill","white").attr("numero", i).on("click", tooltip)
                .transition().delay(100).duration(1000).attr("cx", x-(newFinalTarget[i]*1.25/2)).attr("cy", h-newActual[i]+10)
            }
            else if (newActual[i]==newFinalTarget[i]){
                drawMountainBase(svg, x, i, newFinalTarget, finalTarget, newActual, selectedMount);
                drawFlag(svg, x, i, newFinalTarget, newActual);
                drawMountain(svg, x, i, newFinalTarget, newActual, selectedMount);
                drawLineActual(svg, x, i, newFinalTarget, newActual);
                drawCircleProgress(svg, x, i, newActual);
            }
            else{
                drawMountainBase(svg, x, i, newFinalTarget, finalTarget, newActual, selectedMount);
                drawMountain(svg, x, i, newFinalTarget, newActual, selectedMount);
                drawLineActual(svg, x, i, newFinalTarget, newActual);
                drawCircleProgress(svg, x, i, newActual);
            }
            drawLines(svg, x, newFinalTarget, newCuatrimestres, i);
            drawText(svg, x, i, newFinalTarget, newActual, separacion);
            x -= newFinalTarget[i]*1.25-separacion;
        }//Termina for principal
        scrollbar();
    }

    function scrollbar(){
        //Crea una copia del canvas original
        var node=document.getElementById("canvas").cloneNode(true);
        //Adecua la copia para crear la miniatura
        node.style.height=100;
        //Escala la vista de la miniatura
        node.setAttribute("viewBox", "0 0 "+ tmpx.toString() +" 480");
        //Elinia elementos innecesario en la miniatura
        var tmp = node.getElementById("elimina");
        tmp.parentNode.removeChild(tmp);
        var tmp = node.getElementsByClassName("rules")[0];
        tmp.parentNode.removeChild(tmp);
        //Agrega la miniatura dentro de la página
        document.getElementById("svg-miniature").appendChild(node);
        var svgContainer = d3.select("#svg-miniature").select("svg");
        var d = [{
            x: 0,
            y: 0
        }];
        //Crea el rectangula que señala el area visible en la miniatura
        var g = d3.select("#svg-miniature").select("svg").data(d).append("rect")
            .attr("id", "CuadroSlider")
            .attr("width", 960)
            .attr("height", 480)
            .style("stroke", "black")
            .attr("fill", "white")
            .attr("x", "0")
            .attr("y", "0")
            .style("stroke-width", "20")
            .attr("opacity", .40)
            .call(d3.behavior.drag().on("drag", dragHandler).on("dragend", dropHandler))
        //Bandera utilizada en el scrollbar
        var wasMoved = false;
    }

    function drawBalloon(svg, x, i, newFinalTarget, newActual){
        svg.append("image")
                .attr("width", 60)
                .attr("height", 84)
                .attr("x", x-(newFinalTarget[i]*1.25/2)-30)
                .attr("y", h-newActual[i]-84+200)
                .transition()
                .delay(210)
                .duration(1000) 
                .attr("y", h-newActual[i]-84)
                .attr("xlink:href", "assets/balloon.svg");
    }

    function drawFlag(svg, x, i, newFinalTarget, newActual){
        svg.append("image")
            .attr("width", 37.193)
            .attr("height", 44.126)
            .attr("x", x-(newFinalTarget[i]*1.25/2))
            .attr("y", h-newFinalTarget[i]-44.126+100)
            .transition()
            .delay(200)
            .duration(1000) 
            .attr("y", h-newFinalTarget[i]-44.126)
            .attr("cx", x-(newFinalTarget[i]*1.25/2))
            .attr("cy", h-newActual[i])
            .attr("xlink:href", "assets/flag-annual-target.svg");
    }

    function drawMountainBase(svg, x, i, newFinalTarget, finalTarget, newActual, selectedMount){
        svg.append("image")
            .attr("width", newFinalTarget[i]*1.25)
            .attr("height", newFinalTarget[i])
            .attr("x", x-newFinalTarget[i]*1.25)
            .attr("y", h-newFinalTarget[i])
            .attr("meta", finalTarget[i])
            .attr("numero", i)
            .on("click", tooltip)
            .attr("cx", x-(newFinalTarget[i]*1.6))
            .attr("cy", h-newActual[i]-195)
            .attr("xlink:href", selectedMount);
    }

    function drawMountain(svg, x, i, newFinalTarget, newActual, selectedMount){
        svg.append("image")
            .attr("width", newFinalTarget[i]*1.25)
            .attr("height", newFinalTarget[i])
            .attr("x", x-newFinalTarget[i]*1.25)
            .attr("y", h-newFinalTarget[i])
            .attr("numero", i)
            .on("click", tooltip)
            .attr("cx", x-(newFinalTarget[i]*1.25/2))
            .attr("cy", h-newActual[i])
            .transition()
            .delay(100)
            .duration(1000) 
            .attr("height", newFinalTarget[i]-newActual[i])
            .attr("xlink:href", "assets/mountain.svg");

        svg.append("image")
            .attr("width", newFinalTarget[i]*1.25)
            .attr("height", newFinalTarget[i])
            .attr("x", x-newFinalTarget[i]*1.25)
            .attr("y", h-newFinalTarget[i])
            .attr("numero", i)
            .on("click", tooltip)
            .attr("cx", x-(newFinalTarget[i]*1.25/2))
            .attr("cy", h-newActual[i]+15)
            .attr("xlink:href", "assets/TransMountain.svg");
    }

    function drawCircleProgress(svg, x, i, newActual){
        svg.append("svg:g")
                .append("circle")
                .attr("cx",  x )
                .attr("cy", h)
                .attr("r", 10)
                .style("fill",randomColor())
                .attr("numero", i)
                .on("click", tooltip)
                .transition()
                .delay(100)
                .duration(1000) 
                .attr("cx",  x - (newActual[i])/1.6)
                .attr("cy", h-newActual[i])
                .style("fill",randomColor());

                svg.append("svg:g")
                .append("circle")
                .attr("cx", x)
                .attr("cy", h)
                .attr("r", 5)
                .style("fill","white")
                .attr("numero", i)
                .on("click", tooltip)
                .transition()
                .delay(100)
                .duration(1000) 
                .attr("cx",  x - (newActual[i])/1.6)
                .attr("cy", h-newActual[i]);
    }

    function drawLineActual(svg, x, i, newFinalTarget, newActual){
        svg.append("svg:g")
                .append("line")
                .attr("x1", x)
                .attr("x2", x - newFinalTarget[i]*1.25)  
                .attr("y1", h)
                .attr("y2", h)
                .style("stroke-width", "2")
                .style("stroke", "white")
                .transition()
                .delay(100)
                .duration(1000)
                .attr("x1", x  - (newActual[i])/1.6)
                .attr("y1", h - newActual[i])
                .attr("x2", x-newFinalTarget[i]*1.25+(newActual[i]/1.6))
                .attr("y2", h - newActual[i]);
    }

    function drawCloud(svg, x, i){
            svg.append("image")
            .attr("width", 50)
            .attr("height", 300)
            .attr("x", Math.random()*tmpx)
            .attr("y", h-(Math.random()*480 +200))
            .attr("id", "#nube")
            .attr("xlink:href", "assets/cloud-01.svg");

            svg.append("image")
            .attr("width", 100)
            .attr("height", 100)
            .attr("x", Math.random()*tmpx)
            .attr("y", h-(Math.random()*480 +200))
            .attr("xlink:href", "assets/cloud-02.svg");
    }

	function dropHandler() {
		if (wasMoved) {
			wasMoved = false;
		}

	}
	var t = 0;

	function dragHandler(d) {
		wasMoved = d3.event.dx || d3.event.dy
		if (wasMoved) {
			t = d.x += d3.event.dx;
			if(d.x >= 0 && d.x < tmpx-960){
                //d.x += d3.event.dx;
                //alert(d3.select("#CuadroSlider"));
                t = d.x;
				d3.select("#CuadroSlider").attr("x", t);
				d3.select("#Contenido").attr("transform", "translate(" + (-d.x) + ")");
                div.remove("#tooltip"); 
			}	
            else if(d.x < 0){
                d.x = 0;
            }
            else if(d.x >=tmpx-960){
                d.x = ((960*4) + (960*.35))-1;
            }
		}
	}
		
    function drawLines(svg, x, newFinalTarget, newCuatrimestres, i){
        //Animar lineas de cuatrimestres
        for(var j = 1; j < cuatrimestres[i].length-1; j++){
            svg.append("line")
            .attr("x1", x)
            .attr("x2", x - newFinalTarget[i]*1.25)  
            .attr("y1", h)
            .attr("y2", h)
            .style("stroke-width", "2")
            .style("stroke", "#FFA11C")
            .transition()
            .delay(100)
            .duration(1000)
            .attr("x1", x - (newCuatrimestres[i][j])/1.6)
            .attr("y1", h - newCuatrimestres[i][j])
            .attr("x2", x - (newCuatrimestres[i][j])/1.6 - (newFinalTarget[i] - newCuatrimestres[i][j])*1.25)
            .attr("y2", h - newCuatrimestres[i][j])
            .attr("numero", i)    
            .style("stroke-dasharray", ("10"));
        }
    }

    function drawText(svg, x, i, newFinalTarget, newActual, separacion){
        var nombre= names[i];
        var text = svg.append("text")
                      .text(function() {        
                            var nomb =nombre.split(" ");
                            var string="";
                            if(nomb[0].length >= 10){
                                string += nomb[0][0]+". ";
                            } 
                            else{
                                string += nomb[0]+" ";  
                            }
                            for(var j=1; j<nomb.length;j++){
                                string += nomb[j] + " " ;
                            }
                            return string;
                      })//Termina funcion de .text
                      .attr("x", function() {return x-(newFinalTarget[i]*1.25/2);})
                      .attr("text-anchor","middle")
                      .attr("y", h-separacion)
                      .attr("font-family","serif")
                      .attr("font-size","11")
                      .attr("numero", i)
                      .attr("fill", "white");
    }//Termina funcion draw text

    var div = d3.select("#grafico").append("div");

    function tooltip() {
        div.remove("#tooltip");
        div = d3.select("#grafico").append("div")
                .attr("class", "tooltip")
                .style("opacity", 1e-6)
                .attr("id", "tooltip");

        div.transition()
           .duration(500)
           .style("opacity", 1);

        var ancho = (document.body.clientWidth);
        var i = d3.select(this).attr("numero");
        var last=actual[i]/1000;
        var meta=finalTarget[i]/1000;
        var promedio=last/meta*100;
        var cx = d3.select(this).attr("cx");
        if(ancho >940){
             var origenX=(ancho-940)/2;
        }else{
            var origenX=0;
        }
        cx=cx/1-10;
        cx+=origenX;
		if(d3.select("#Contenido").attr("transform") !== null){
            cx += parseInt(d3.select("#Contenido").attr("transform").substring(10, d3.select("#Contenido").attr("transform").length - 1));
        }
        var cy = d3.select(this).attr("cy");
        cy -= 78;		
        if(cy < 180){
            cy += 190;
        }
        div.html("<font size='6'><b>" + names[i] + "</font><br><font size='5'>Sales Performance</font><br><font size='2' color='#7c8185'>Attainment vs Annual Goal</font><br><br><font size='4' color='#38761d'>"+ last+"K</font></b> of <b><font size='4' color='#1c4587'>"+meta+"K</font><br><br><font size='2' color='#7c8185'>% of Annual Goal Met</font><br><font size='5' color='#38761d'>"+promedio.toFixed(2)+"%</font></b>")
           .style("left", parseInt(cx) + "px")
           .style("top", (cy) + "px");
    }
