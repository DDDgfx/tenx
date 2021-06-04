$( document ).ready(function() {
    console.log( "ready!" );
    var svg = d3.select("svg");

    var svgJq = $("#stacksvg");

    var suites = svg.selectAll(".suites");
    
    //suites.style("visibility", "hidden");

    suites.on("mouseover", function(event, d) {
        //d3.select(this).selectAll(".suite").classed("suite-hover", true);
        d3.select(this).selectAll(".suite").style("fill-opacity", 1);
        console.log(this);
    })


    suites.on("mouseleave", function(event, d) {
        d3.select(this).selectAll(".suite").style("fill-opacity", .25);

    })

    suites.on("click", function(event, d) {
        console.log(event);
    })

        mapboxgl.accessToken = 'pk.eyJ1IjoiY2l6emxlIiwiYSI6ImNrcDJ0MjhteTE5cGsyb213bms0dHp6c3QifQ.-dc9k9y6KKnDlE5UszjS9A';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/cizzle/ckp5swexc0t0k17qcolpk960i',
        center: [-74.033216, 40.716560], // starting position [lng, lat]
        zoom: 17, // starting zoom
        bearing: -44.68, //bearing
        pitch: 50.50,
        interactive: false
        });


});
