$(document).ready(function () {
    console.log("ready steady!");
    var diagramDiv = d3.select("#building-diagram");

    diagramDiv.html(buildingsvg);
    svg = d3.select("#stack-svg");
    console.log(svg);

    var suites = svg.selectAll(".suites");

    //suites.style("visibility", "hidden");

    suites.on("mouseover", function (event, d) {
        //d3.select(this).selectAll(".suite").classed("suite-hover", true);
        d3.select(this).selectAll(".suite").style("fill-opacity", 1);
        console.log(this);
    })


    suites.on("mouseleave", function (event, d) {
        d3.select(this).selectAll(".suite").style("fill-opacity", .25);

    })

    suites.on("click", function (event, d) {
        console.log(event);
    })



    ////MAPBOX

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


const buildingsvg = '<svg id="stack-svg" viewBox="0 0 288 560" preserveAspectRatio="xMinYMin meet">' +
    '<g id="base">' +
    '<path class="base" d="M270.8,547.2H131l0.6-30.4c3.9,1.6,137.7,5.6,137.7,5.6L270.8,547.2z"/>' +
    '<polygon class="base" points="131.9,499.5 131.6,516.8 131.5,516.8 13.9,520.6 14.7,509.3 131.9,499.5 	"/>' +
    '<polygon class="base" points="131.6,516.8 131,547.2 12,547.2 13.9,520.6 131.5,516.8 	"/>' +
    '<path class="base" d="M269.2,522.4c0,0-133.8-4-137.7-5.6l0.3-17.4l17.5,1.8c0,0,115.6,2.2,118.8,4.9c0,0,0,0,0,0L269.2,522.4z"/>' +
    '<path class="base" d="M268.2,506.1c-3.2-2.7-118.8-4.9-118.8-4.9l-17.5-1.8l0.3-17.4l12.6,1.5c89.6,0.2,122.5,7.8,122.5,7.8' +
    'L268.2,506.1z"/>' +
    '<path class="base" d="M267.3,491.4c0,0-32.9-7.6-122.5-7.8l-12.6-1.5l0.3-18.3c0,0,15.6,2.4,16.9,2.4c1.2,0,97.3-1.7,116.9,9.2' +
    'L267.3,491.4z"/>' +
    '<path class="base" d="M266.3,475.4c-19.6-10.9-115.7-9.2-116.9-9.2c-1.2,0-16.9-2.4-16.9-2.4l0.3-17l13.5,1.4' +
    'c99.9-2.7,119,12.9,119,12.9L266.3,475.4z"/>' +
    '<path class="base" d="M265.4,461.1c0,0-19.2-15.6-119-12.9l-13.5-1.4l0.3-18l14.3,2c0,0,91.7-5.8,108,12l8.8,0.7L265.4,461.1z"/>' +
    '<path class="base" d="M264.3,443.5l-8.8-0.7c-16.4-17.8-108-12-108-12l-14.3-2l0.3-17.8l18.2,2.9c97.9-9.8,102,12.7,102,12.7' +
    'l9.7,2.2L264.3,443.5z"/>' +
    '<path class="base" d="M263.4,428.8l-9.7-2.2c0,0-4.1-22.5-102-12.7l-18.2-2.9l0.3-14.7l22.2,5.6c0,0,73.3-8.2,88,9.2v6.7l18.7-0.4' +
    'L263.4,428.8z"/>' +
    '<path class="base" d="M251.1,231.5l-19.6-7.4c-14.5-27.9-68.4-15.8-68.4-15.8l-25.7-9.6l0.3-14.3l25.2,9.1' +
    'c60.9-10.5,66.9,16.5,66.9,16.5l20.5,8L251.1,231.5z"/>' +
    '<path class="base" d="M250.3,218.1l-20.5-8c0,0-6-27-66.9-16.5l-25.2-9.1l0.2-13.6l25.7,8.3c60.9-10.5,66.4,17.9,66.4,17.9l19.5,7' +
    'L250.3,218.1z"/>' +
    '<path class="base" d="M249.4,204.1l-19.5-7c0,0-5.5-28.4-66.4-17.9l-25.7-8.3l0.3-15.2l25.9,9.1c57.8-10.4,64.5,19.1,64.5,19.1l20,8' +
    'L249.4,204.1z"/>' +
    '<path class="base" d="M248.7,191.9l-20-8c0,0-6.7-29.4-64.5-19.1l-25.9-9.1l0.2-13.4l30.2,11.6c0,0,46.6-6.7,53.4,14.4v0l0.1,1.7' +
    'l25.9,11.7L248.7,191.9z"/>' +
    '<polygon class="base" points="248,181.7 222.1,170 222,168.3 222,168.3 221.3,158.6 219.9,157 219.9,151.8 237.3,159 237.3,170.2 ' +
    '247.6,174.4 	"/>' +
    '<polygon class="base" points="237.3,144.7 237.3,159 219.9,151.8 219.9,136.2 	"/>' +
    '<path class="base" d="M237.3,130.1v14.7l-17.4-8.5v-6.4c-7.5-24.7-52.8-16.4-52.8-16.4l-17.7-7.9V90.8l0.7,0.3l4.1,1.6l2.3,0.9' +
    'L160,95l6,2.4l2,0.8c0,0,18.8-2.4,31.6,0.7c0.3,0.1,0.7,0.2,1,0.3c3.2,0.9,5.9,2.1,7.8,3.9c9.6,5.8,10.5,11.4,10.5,11.4v8' +
    'L237.3,130.1z"/>' +
    '<polygon class="base" points="160,75.5 160,81.7 159.6,81.7 150.1,91.1 149.4,90.8 148.5,90.5 	"/>' +
    '<polygon class="base" points="149.4,90.8 149.4,105.6 61.5,215.7 61.5,204.8 148.5,90.5 	"/>' +
    '<polygon class="base" points="149.4,105.6 149.4,120.3 141.4,129.1 138.7,127.9 61.5,220.8 61.5,215.7 	"/>' +
    '<polygon class="base" points="138.7,127.9 138.4,142.3 40.6,257.4 40.9,250.9 61.5,227 61.5,220.8 	"/>' +
    '<polygon class="base" points="138.4,142.3 138.2,155.7 39.9,268.8 40.6,257.4 	"/>' +
    '<polygon class="base" points="138.2,155.7 137.9,170.9 39.3,279.9 39.9,268.8 	"/>' +
    '<polygon class="base" points="137.9,170.9 137.7,184.5 38.7,290.2 39.3,279.9 	"/>' +
    '<polygon class="base" points="137.7,184.5 137.4,198.7 38.1,300.6 38.7,290.2 	"/>' +
    '<polygon class="base" points="136.8,228.2 136.6,242.4 36.3,332.5 36.8,322.2 	"/>' +
    '<polygon class="base" points="134.4,361 134.1,379.1 20.3,432.4 21.1,421.2 	"/>' +
    '<polygon class="base" points="133.8,396.2 133.5,411 18.8,452.9 19.4,444.4 	"/>' +
    '<polygon class="base" points="133.5,411 133.2,428.8 18,464.7 18.8,452.9 	"/>' +
    '<polygon class="base" points="133.2,428.8 132.8,446.7 17.2,475.4 18,464.7 	"/>' +
    '<polygon class="base" points="132.8,446.7 132.5,463.8 16.3,487 17.2,475.4 	"/>' +
    '<polygon class="base" points="132.5,463.8 132.2,482.1 15.5,498.4 16.3,487 	"/>' +
    '<polygon class="base" points="132.2,482.1 131.9,499.5 131.9,499.5 14.7,509.3 15.5,498.4 	"/>' +
    '<polygon class="base" points="149.4,120.3 149.4,132.7 141.4,129.1 	"/>' +
    '<path class="base" d="M196.8,10.3v54.4c-2-0.8-4.8-1.5-8.2-1.8L196.8,10.3z"/>' +
    '<path class="base" d="M196.8,98.2l2.8,0.7c-12.8-3.2-31.6-0.7-31.6-0.7l-2-0.8l-6-2.4l-3.6-1.4l-2.3-0.9l-4.1-1.6l9.5-9.4h0.4v-6.2' +
    'c11.4-13.5,24.4-13,27.7-12.6c0.5,0.1,0.8,0.1,0.8,0.1l0-0.1c3.5,0.2,6.2,1,8.2,1.8V98.2z"/>' +
    '<path class="base" d="M208.3,76.6v26.5c-1.9-1.8-4.6-3-7.8-3.9l0-3.5l0-5.1l0-5.8l0-6.2l0-11.9l0.2-56.4v56.5' +
    'C203.9,69,208.3,76.6,208.3,76.6z"/>' +
    '<path class="base" d="M200.8,10.3l-0.2,56.4c-0.4-0.3-1.7-1.1-3.9-2V10.3H200.8z"/>' +
    '<path class="base" d="M200.6,66.7l0,11.9c-1.1-0.8-2.4-1.5-3.8-2.1V64.7C198.9,65.5,200.2,66.4,200.6,66.7z"/>' +
    '<path class="base" d="M200.6,78.6l0,6.2c-1.3-0.7-2.5-1.3-3.8-1.7v-6.6C198.2,77.1,199.5,77.8,200.6,78.6z"/>' +
    '<path class="base" d="M200.6,84.8l0,5.8c-1.3-0.6-2.5-1-3.8-1.4v-6.1C198,83.5,199.3,84.1,200.6,84.8z"/>' +
    '<path class="base" d="M200.6,90.5l0,5.1c-1.2-0.5-2.5-0.9-3.8-1.2v-5.3C198,89.5,199.3,90,200.6,90.5z"/>' +
    '<path class="base" d="M200.5,95.7l0,3.5c-0.3-0.1-0.6-0.2-1-0.3l-2.8-0.7v-3.8C198,94.8,199.3,95.2,200.5,95.7z"/>' +
    '<path class="base" d="M188.5,62.9c-0.3,0-0.5,0-0.8,0"/>' +
    '<path class="base" d="M200.6,78.6c5.4,3.7,7.8,8.5,7.8,8.5"/>' +
    '<path class="base" d="M160,81.7h4.6c14.7-8.8,25.2-8.3,32.2-5.3"/>' +
    '<polyline class="base" points="160,95 160,93.6 160,87.6 160,81.7 	"/>' +
    '<line class="base" x1="148.5" y1="90.5" x2="148.4" y2="90.5"/>' +
    '<path class="base" d="M222,168.3c-6.8-21-53.4-14.4-53.4-14.4l-30.2-11.6l0.3-14.5l2.7,1.2l8,3.6l18.7,7.8' +
    'c46.7-5.4,51.8,14.9,51.8,14.9v1.6l1.3,1.7L222,168.3z"/>' +
    '<path class="base" d="M219.9,143.1v12.3c0,0-5.2-20.3-51.8-14.9l-18.7-7.8v-12.4l18.2,8.8C167.6,129.1,207.9,118.3,219.9,143.1z"/>' +
    '<path class="base" d="M219.9,129.9v13.2c-12-24.7-52.3-14-52.3-14l-18.2-8.8v-14.7l17.7,7.9C167.1,113.5,212.4,105.1,219.9,129.9z"' +
    '/>' +
    '<line class="base" x1="14.7" y1="509.3" x2="14.6" y2="509.3"/>' +
    '<path class="base" d="M208.4,91.1c-2.4-2.8-5.1-4.8-7.8-6.3"/>' +
    '<path class="base" d="M196.8,83.1c-15.4-5.5-32,4.5-32,4.5H160l-5.9,5.1"/>' +
    '<path class="base" d="M208.4,95.8c-2.5-2.3-5.1-4-7.8-5.2"/>' +
    '<path class="base" d="M196.8,89.1c-15.9-4.7-32.8,4.5-32.8,4.5h-4h-3.6"/>' +
    '<path class="base" d="M208.4,100.6c-2.4-2.2-5-3.8-7.8-4.9"/>' +
    '<path class="base" d="M166,97.4c0,0,16.4-6.6,30.8-3"/>' +
    '<line class="base" x1="13.9" y1="520.6" x2="13.4" y2="520.7"/>' +
    '<polygon class="base" points="61.5,346 61.5,360.4 23.6,386.7 24.6,373.1 	"/>' +
    '<polygon class="base" points="133.8,396.2 133.5,411 18.8,452.9 19.4,444.4 	"/>' +
    '</g>' +
    '<g id="f_x5F_8" class="suites">' +
    '<path class="suite" d="M263.4,428.8l-9.7-2.2c0,0-4.1-22.5-102-12.7l-18.2-2.9l0.3-14.7l22.2,5.6c0,0,73.3-8.2,88,9.2v6.7l18.7-0.4' +
    'L263.4,428.8z"/>' +
    '<polygon class="suite" points="133.8,396.2 133.5,411 18.8,452.9 19.4,444.4 	"/>' +
    '</g>' +
    '<g id="f_x5F_9" class="suites">' +
    '<path class="suite" d="M244,417.6V411c-14.7-17.4-88-9.2-88-9.2l-22.2-5.6l0.3-17.2l21.9,5.1c82.5-6.5,87.2,11.1,87.2,11.1v6h18.6' +
    'l1,15.8L244,417.6z"/>' +
    '<polygon class="suite" points="134.1,379.1 133.8,396.2 19.4,444.4 20.3,432.4 	"/>' +
    '</g>' +
    '<g id="f_x5F_10" class="suites">' +
    '<path class="suite" d="M243.1,401.4v-6c0,0-4.7-17.6-87.2-11.1l-21.9-5.1l0.3-18l20.7,6c0,0,87.6-8.7,87.8,16.7l17.7,0.2l1.1,17.4' +
    'H243.1z"/>' +
    '<polygon class="suite" points="134.4,361 134.1,379.1 20.3,432.4 21.1,421.2 	"/>' +
    '</g>' +
    '<g id="f_x5F_11" class="suites">' +
    '<path class="suite" d="M260.6,384l-17.7-0.2c-0.2-25.4-87.8-16.7-87.8-16.7l-20.7-6l0.3-17l20.6,5.1c87.2-6.6,87.4,17.2,87.4,17.2' +
    'l17,1.8L260.6,384z"/>' +
    '<polygon class="suite" points="134.7,344.1 134.4,361 21.1,421.2 22,409.2 134.7,344.1 	"/>' +
    '</g>' +
    '<g id="f_x5F_12" class="suites">' +
    '<path class="suite" d="M259.6,368.2l-17-1.8c0,0-0.1-23.8-87.4-17.2l-20.6-5.1l0.3-17.4l21.4,5.8c0,0,78.9-11.4,85.6,17.4l16.6,1.3' +
    'L259.6,368.2z"/>' +
    '<polygon class="suite" points="135,326.7 134.7,344.1 134.7,344.1 22,409.2 22.8,397.8 	"/>' +
    '</g>' +
    '<g id="f_x5F_13" class="suites">' +
    '<path class="suite" d="M258.6,351.2l-16.6-1.3c-6.7-28.8-85.6-17.4-85.6-17.4l-21.4-5.8l0.3-17.6l19.9,5.8' +
    'c89.2-8.7,85.2,17.6,85.2,17.6l17.1,2.5L258.6,351.2z"/>' +
    '<polygon class="suite" points="135.4,309.1 135,326.7 22.8,397.8 23.6,386.7 135.4,309.1 	"/>' +
    '</g>' +
    '<g id="f_x5F_14" class="suites">' +
    '<path class="suite" d="M240.5,332.5c0,0,4-26.3-85.2-17.6l-19.9-5.8l0.3-17.8l20.9,7.3c0,0,71.8-13.1,83.8,16.8l16,2.3l1.1,17.4' +
    'L240.5,332.5z"/>' +
    '<polygon class="suite" points="135.7,291.2 135.4,309.1 135.4,309.1 23.6,386.7 24.6,373.1 	"/>' +
    '</g>' +
    '<g id="f_x5F_15" class="suites">' +
    '<path class="suite" d="M256.5,317.6l-16-2.3c-12-29.9-83.8-16.8-83.8-16.8l-20.9-7.3l0.3-18l21.1,6.7c77.3-9.1,83.1,18.6,83.1,18.6' +
    'l15.3,3.4L256.5,317.6z"/>' +
    '<polygon class="suite" points="136,273.2 135.7,291.2 24.6,373.1 25.4,362 	"/>' +
    '</g>' +
    '<g id="f_x5F_16" class="suites">' +
    '<path class="suite" d="M255.5,302l-15.3-3.4c0,0-5.8-27.7-83.1-18.6l-21.1-6.7l0.3-17.4l22.1,6.9c0,0,68.4-12,80.5,20.3l15.6,3.3' +
    'L255.5,302z"/>' +
    '<polygon class="suite" points="136.3,255.8 136,273.2 25.4,362 26.2,351 35.6,344.1 35.8,341.2 	"/>' +
    '</g>' +
    '<g id="f_x5F_17" class="suites">' +
    '<path class="suite" d="M254.5,286.3l-15.6-3.3c-12-32.3-80.5-20.3-80.5-20.3l-22.1-6.9l0.2-13.4l24,8.5c67.5-8.7,71.1,14.9,71.1,14.9' +
    'l22,7.4L254.5,286.3z"/>' +
    '<polygon class="suite" points="136.6,242.4 136.3,255.8 35.8,341.2 36.3,332.5 	"/>' +
    '</g>' +
    '<g id="f_x5F_18" class="suites">' +
    '<path class="suite" d="M253.7,273.2l-22-7.4c0,0-3.6-23.6-71.1-14.9l-24-8.5l0.3-14.3l25.1,8.2c0,0,59.1-9.6,69.6,15.4l21.2,5.6' +
    'L253.7,273.2z"/>' +
    '<polygon class="suite" points="159.8,235.7 159.4,250.5 136.6,242.4 136.8,228.2 	"/>' +
    '<polygon class="suite" points="136.8,228.2 136.6,242.4 36.3,332.5 36.8,322.2 	"/>' +
    '</g>' +
    '<g id="f_x5F_19" class="suites">' +
    '<path class="suite" d="M252.7,257.4l-21.2-5.6c-10.5-25-69.6-15.4-69.6-15.4l-25.1-8.2l0.3-14.3l25.3,8.2c67.6-8,68.4,16.3,68.4,16.3' +
    'l21.1,6.7L252.7,257.4z"/>' +
    '<polygon class="suite" points="137.1,213.9 136.8,228.2 36.8,322.2 37.5,311.5 	"/>' +
    '</g>' +
    '<g id="f_x5F_20" class="suites">' +
    '<path class="suite" d="M252,245.1l-21.1-6.7c0,0-0.9-24.3-68.4-16.3l-25.3-8.2l0.3-15.2l25.7,9.6c0,0,53.9-12,68.4,15.8l19.6,7.4' +
    'L252,245.1z"/>' +
    '<polygon class="suite" points="137.4,198.7 137.1,213.9 37.5,311.5 38.1,300.6 	"/>' +
    '</g>' +
    '<g id="f_x5F_21" class="suites">' +
    '<path class="suite" d="M251.1,231.5l-19.6-7.4c-14.5-27.9-68.4-15.8-68.4-15.8l-25.7-9.6l0.3-14.3l25.2,9.1' +
    'c60.9-10.5,66.9,16.5,66.9,16.5l20.5,8L251.1,231.5z"/>' +
    '<polygon class="suite" points="137.7,184.5 137.4,198.7 38.1,300.6 38.7,290.2 	"/>' +
    '</g>' +
    '<g id="lines" class="huh">' +
    '<path class="detail-lines" d="M270.8,547.2H131l0.6-30.4c3.9,1.6,137.7,5.6,137.7,5.6L270.8,547.2z"/>' +
    '<polygon class="detail-lines" points="131.9,499.5 131.6,516.8 131.5,516.8 13.9,520.6 14.7,509.3 131.9,499.5 	"/>' +
    '<polygon class="detail-lines" points="131.6,516.8 131,547.2 12,547.2 13.9,520.6 131.5,516.8 	"/>' +
    '<path class="detail-lines" d="M269.2,522.4c0,0-133.8-4-137.7-5.6l0.3-17.4l17.5,1.8c0,0,115.6,2.2,118.8,4.9c0,0,0,0,0,0L269.2,522.4z"/>' +
    '<path class="detail-lines" d="M268.2,506.1c-3.2-2.7-118.8-4.9-118.8-4.9l-17.5-1.8l0.3-17.4l12.6,1.5c89.6,0.2,122.5,7.8,122.5,7.8' +
    'L268.2,506.1z"/>' +
    '<path class="detail-lines" d="M267.3,491.4c0,0-32.9-7.6-122.5-7.8l-12.6-1.5l0.3-18.3c0,0,15.6,2.4,16.9,2.4c1.2,0,97.3-1.7,116.9,9.2' +
    'L267.3,491.4z"/>' +
    '<path class="detail-lines" d="M266.3,475.4c-19.6-10.9-115.7-9.2-116.9-9.2c-1.2,0-16.9-2.4-16.9-2.4l0.3-17l13.5,1.4' +
    'c99.9-2.7,119,12.9,119,12.9L266.3,475.4z"/>' +
    '<path class="detail-lines" d="M265.4,461.1c0,0-19.2-15.6-119-12.9l-13.5-1.4l0.3-18l14.3,2c0,0,91.7-5.8,108,12l8.8,0.7L265.4,461.1z"/>' +
    '<path class="detail-lines" d="M264.3,443.5l-8.8-0.7c-16.4-17.8-108-12-108-12l-14.3-2l0.3-17.8l18.2,2.9c97.9-9.8,102,12.7,102,12.7' +
    'l9.7,2.2L264.3,443.5z"/>' +
    '<path class="detail-lines" d="M263.4,428.8l-9.7-2.2c0,0-4.1-22.5-102-12.7l-18.2-2.9l0.3-14.7l22.2,5.6c0,0,73.3-8.2,88,9.2v6.7l18.7-0.4' +
    'L263.4,428.8z"/>' +
    '<path class="detail-lines" d="M244,417.6V411c-14.7-17.4-88-9.2-88-9.2l-22.2-5.6l0.3-17.2l21.9,5.1c82.5-6.5,87.2,11.1,87.2,11.1v6h18.6' +
    'l1,15.8L244,417.6z"/>' +
    '<path class="detail-lines" d="M243.1,401.4v-6c0,0-4.7-17.6-87.2-11.1l-21.9-5.1l0.3-18l20.7,6c0,0,87.6-8.7,87.8,16.7l17.7,0.2l1.1,17.4' +
    'H243.1z"/>' +
    '<path class="detail-lines" d="M260.6,384l-17.7-0.2c-0.2-25.4-87.8-16.7-87.8-16.7l-20.7-6l0.3-17l20.6,5.1c87.2-6.6,87.4,17.2,87.4,17.2' +
    'l17,1.8L260.6,384z"/>' +
    '<path class="detail-lines" d="M259.6,368.2l-17-1.8c0,0-0.1-23.8-87.4-17.2l-20.6-5.1l0.3-17.4l21.4,5.8c0,0,78.9-11.4,85.6,17.4l16.6,1.3' +
    'L259.6,368.2z"/>' +
    '<path class="detail-lines" d="M258.6,351.2l-16.6-1.3c-6.7-28.8-85.6-17.4-85.6-17.4l-21.4-5.8l0.3-17.6l19.9,5.8' +
    'c89.2-8.7,85.2,17.6,85.2,17.6l17.1,2.5L258.6,351.2z"/>' +
    '<path class="detail-lines" d="M240.5,332.5c0,0,4-26.3-85.2-17.6l-19.9-5.8l0.3-17.8l20.9,7.3c0,0,71.8-13.1,83.8,16.8l16,2.3l1.1,17.4' +
    'L240.5,332.5z"/>' +
    '<path class="detail-lines" d="M256.5,317.6l-16-2.3c-12-29.9-83.8-16.8-83.8-16.8l-20.9-7.3l0.3-18l21.1,6.7c77.3-9.1,83.1,18.6,83.1,18.6' +
    'l15.3,3.4L256.5,317.6z"/>' +
    '<path class="detail-lines" d="M255.5,302l-15.3-3.4c0,0-5.8-27.7-83.1-18.6l-21.1-6.7l0.3-17.4l22.1,6.9c0,0,68.4-12,80.5,20.3l15.6,3.3' +
    'L255.5,302z"/>' +
    '<path class="detail-lines" d="M254.5,286.3l-15.6-3.3c-12-32.3-80.5-20.3-80.5-20.3l-22.1-6.9l0.2-13.4l24,8.5c67.5-8.7,71.1,14.9,71.1,14.9' +
    'l22,7.4L254.5,286.3z"/>' +
    '<path class="detail-lines" d="M253.7,273.2l-22-7.4c0,0-3.6-23.6-71.1-14.9l-24-8.5l0.3-14.3l25.1,8.2c0,0,59.1-9.6,69.6,15.4l21.2,5.6' +
    'L253.7,273.2z"/>' +
    '<path class="detail-lines" d="M252.7,257.4l-21.2-5.6c-10.5-25-69.6-15.4-69.6-15.4l-25.1-8.2l0.3-14.3l25.3,8.2c67.6-8,68.4,16.3,68.4,16.3' +
    'l21.1,6.7L252.7,257.4z"/>' +
    '<path class="detail-lines" d="M252,245.1l-21.1-6.7c0,0-0.9-24.3-68.4-16.3l-25.3-8.2l0.3-15.2l25.7,9.6c0,0,53.9-12,68.4,15.8l19.6,7.4' +
    'L252,245.1z"/>' +
    '<path class="detail-lines" d="M251.1,231.5l-19.6-7.4c-14.5-27.9-68.4-15.8-68.4-15.8l-25.7-9.6l0.3-14.3l25.2,9.1' +
    'c60.9-10.5,66.9,16.5,66.9,16.5l20.5,8L251.1,231.5z"/>' +
    '<path class="detail-lines" d="M250.3,218.1l-20.5-8c0,0-6-27-66.9-16.5l-25.2-9.1l0.2-13.6l25.7,8.3c60.9-10.5,66.4,17.9,66.4,17.9l19.5,7' +
    'L250.3,218.1z"/>' +
    '<path class="detail-lines" d="M249.4,204.1l-19.5-7c0,0-5.5-28.4-66.4-17.9l-25.7-8.3l0.3-15.2l25.9,9.1c57.8-10.4,64.5,19.1,64.5,19.1l20,8' +
    'L249.4,204.1z"/>' +
    '<path class="detail-lines" d="M248.7,191.9l-20-8c0,0-6.7-29.4-64.5-19.1l-25.9-9.1l0.2-13.4l30.2,11.6c0,0,46.6-6.7,53.4,14.4v0l0.1,1.7' +
    'l25.9,11.7L248.7,191.9z"/>' +
    '<polygon class="detail-lines" points="248,181.7 222.1,170 222,168.3 222,168.3 221.3,158.6 219.9,157 219.9,151.8 237.3,159 237.3,170.2 ' +
    '247.6,174.4 	"/>' +
    '<polygon class="detail-lines" points="237.3,144.7 237.3,159 219.9,151.8 219.9,136.2 	"/>' +
    '<path class="detail-lines" d="M237.3,130.1v14.7l-17.4-8.5v-6.4c-7.5-24.7-52.8-16.4-52.8-16.4l-17.7-7.9V90.8l0.7,0.3l4.1,1.6l2.3,0.9' +
    'L160,95l6,2.4l2,0.8c0,0,18.8-2.4,31.6,0.7c0.3,0.1,0.7,0.2,1,0.3c3.2,0.9,5.9,2.1,7.8,3.9c9.6,5.8,10.5,11.4,10.5,11.4v8' +
    'L237.3,130.1z"/>' +
    '<polygon class="detail-lines" points="160,75.5 160,81.7 159.6,81.7 150.1,91.1 149.4,90.8 148.5,90.5 	"/>' +
    '<polygon class="detail-lines" points="149.4,90.8 149.4,105.6 61.5,215.7 61.5,204.8 148.5,90.5 	"/>' +
    '<polygon class="detail-lines" points="149.4,105.6 149.4,120.3 141.4,129.1 138.7,127.9 61.5,220.8 61.5,215.7 	"/>' +
    '<polygon class="detail-lines" points="138.7,127.9 138.4,142.3 40.6,257.4 40.9,250.9 61.5,227 61.5,220.8 	"/>' +
    '<polygon class="detail-lines" points="138.4,142.3 138.2,155.7 39.9,268.8 40.6,257.4 	"/>' +
    '<polygon class="detail-lines" points="138.2,155.7 137.9,170.9 39.3,279.9 39.9,268.8 	"/>' +
    '<polygon class="detail-lines" points="137.9,170.9 137.7,184.5 38.7,290.2 39.3,279.9 	"/>' +
    '<polygon class="detail-lines" points="137.7,184.5 137.4,198.7 38.1,300.6 38.7,290.2 	"/>' +
    '<polygon class="detail-lines" points="137.4,198.7 137.1,213.9 37.5,311.5 38.1,300.6 	"/>' +
    '<polygon class="detail-lines" points="137.1,213.9 136.8,228.2 36.8,322.2 37.5,311.5 	"/>' +
    '<polygon class="detail-lines" points="136.8,228.2 136.6,242.4 36.3,332.5 36.8,322.2 	"/>' +
    '<polygon class="detail-lines" points="136.6,242.4 136.3,255.8 35.8,341.2 36.3,332.5 	"/>' +
    '<polygon class="detail-lines" points="136.3,255.8 136,273.2 25.4,362 26.2,351 35.6,344.1 35.8,341.2 	"/>' +
    '<polygon class="detail-lines" points="136,273.2 135.7,291.2 24.6,373.1 25.4,362 	"/>' +
    '<polygon class="detail-lines" points="135.7,291.2 135.4,309.1 135.4,309.1 23.6,386.7 24.6,373.1 	"/>' +
    '<polygon class="detail-lines" points="135.4,309.1 135,326.7 22.8,397.8 23.6,386.7 135.4,309.1 	"/>' +
    '<polygon class="detail-lines" points="135,326.7 134.7,344.1 134.7,344.1 22,409.2 22.8,397.8 	"/>' +
    '<polygon class="detail-lines" points="134.7,344.1 134.4,361 21.1,421.2 22,409.2 134.7,344.1 	"/>' +
    '<polygon class="detail-lines" points="134.4,361 134.1,379.1 20.3,432.4 21.1,421.2 	"/>' +
    '<polygon class="detail-lines" points="134.1,379.1 133.8,396.2 19.4,444.4 20.3,432.4 	"/>' +
    '<polygon class="detail-lines" points="133.8,396.2 133.5,411 18.8,452.9 19.4,444.4 	"/>' +
    '<polygon class="detail-lines" points="133.5,411 133.2,428.8 18,464.7 18.8,452.9 	"/>' +
    '<polygon class="detail-lines" points="133.2,428.8 132.8,446.7 17.2,475.4 18,464.7 	"/>' +
    '<polygon class="detail-lines" points="132.8,446.7 132.5,463.8 16.3,487 17.2,475.4 	"/>' +
    '<polygon class="detail-lines" points="132.5,463.8 132.2,482.1 15.5,498.4 16.3,487 	"/>' +
    '<polygon class="detail-lines" points="132.2,482.1 131.9,499.5 131.9,499.5 14.7,509.3 15.5,498.4 	"/>' +
    '<polygon class="detail-lines" points="149.4,120.3 149.4,132.7 141.4,129.1 	"/>' +
    '<path class="detail-lines" d="M196.8,10.3v54.4c-2-0.8-4.8-1.5-8.2-1.8L196.8,10.3z"/>' +
    '<path class="detail-lines" d="M196.8,98.2l2.8,0.7c-12.8-3.2-31.6-0.7-31.6-0.7l-2-0.8l-6-2.4l-3.6-1.4l-2.3-0.9l-4.1-1.6l9.5-9.4h0.4v-6.2' +
    'c11.4-13.5,24.4-13,27.7-12.6c0.5,0.1,0.8,0.1,0.8,0.1l0-0.1c3.5,0.2,6.2,1,8.2,1.8V98.2z"/>' +
    '<path class="detail-lines" d="M208.3,76.6v26.5c-1.9-1.8-4.6-3-7.8-3.9l0-3.5l0-5.1l0-5.8l0-6.2l0-11.9l0.2-56.4v56.5' +
    'C203.9,69,208.3,76.6,208.3,76.6z"/>' +
    '<path class="detail-lines" d="M200.8,10.3l-0.2,56.4c-0.4-0.3-1.7-1.1-3.9-2V10.3H200.8z"/>' +
    '<path class="detail-lines" d="M200.6,66.7l0,11.9c-1.1-0.8-2.4-1.5-3.8-2.1V64.7C198.9,65.5,200.2,66.4,200.6,66.7z"/>' +
    '<path class="detail-lines" d="M200.6,78.6l0,6.2c-1.3-0.7-2.5-1.3-3.8-1.7v-6.6C198.2,77.1,199.5,77.8,200.6,78.6z"/>' +
    '<path class="detail-lines" d="M200.6,84.8l0,5.8c-1.3-0.6-2.5-1-3.8-1.4v-6.1C198,83.5,199.3,84.1,200.6,84.8z"/>' +
    '<path class="detail-lines" d="M200.6,90.5l0,5.1c-1.2-0.5-2.5-0.9-3.8-1.2v-5.3C198,89.5,199.3,90,200.6,90.5z"/>' +
    '<path class="detail-lines" d="M200.5,95.7l0,3.5c-0.3-0.1-0.6-0.2-1-0.3l-2.8-0.7v-3.8C198,94.8,199.3,95.2,200.5,95.7z"/>' +
    '<path class="detail-lines" d="M188.5,62.9c-0.3,0-0.5,0-0.8,0"/>' +
    '<path class="detail-lines" d="M200.6,78.6c5.4,3.7,7.8,8.5,7.8,8.5"/>' +
    '<path class="detail-lines" d="M160,81.7h4.6c14.7-8.8,25.2-8.3,32.2-5.3"/>' +
    '<polyline class="detail-lines" points="160,95 160,93.6 160,87.6 160,81.7 	"/>' +
    '<line class="detail-lines" x1="148.5" y1="90.5" x2="148.4" y2="90.5"/>' +
    '<path class="detail-lines" d="M222,168.3c-6.8-21-53.4-14.4-53.4-14.4l-30.2-11.6l0.3-14.5l2.7,1.2l8,3.6l18.7,7.8' +
    'c46.7-5.4,51.8,14.9,51.8,14.9v1.6l1.3,1.7L222,168.3z"/>' +
    '<path class="detail-lines" d="M219.9,143.1v12.3c0,0-5.2-20.3-51.8-14.9l-18.7-7.8v-12.4l18.2,8.8C167.6,129.1,207.9,118.3,219.9,143.1z"/>' +
    '<path class="detail-lines" d="M219.9,129.9v13.2c-12-24.7-52.3-14-52.3-14l-18.2-8.8v-14.7l17.7,7.9C167.1,113.5,212.4,105.1,219.9,129.9z"' +
    '/>' +
    '<line class="detail-lines" x1="14.7" y1="509.3" x2="14.6" y2="509.3"/>' +
    '<path class="detail-lines" d="M208.4,91.1c-2.4-2.8-5.1-4.8-7.8-6.3"/>' +
    '<path class="detail-lines" d="M196.8,83.1c-15.4-5.5-32,4.5-32,4.5H160l-5.9,5.1"/>' +
    '<path class="detail-lines" d="M208.4,95.8c-2.5-2.3-5.1-4-7.8-5.2"/>' +
    '<path class="detail-lines" d="M196.8,89.1c-15.9-4.7-32.8,4.5-32.8,4.5h-4h-3.6"/>' +
    '<path class="detail-lines" d="M208.4,100.6c-2.4-2.2-5-3.8-7.8-4.9"/>' +
    '<path class="detail-lines" d="M166,97.4c0,0,16.4-6.6,30.8-3"/>' +
    '<line class="detail-lines" x1="13.9" y1="520.6" x2="13.4" y2="520.7"/>' +
    '<polygon class="detail-lines" points="159.8,235.7 159.4,250.5 136.6,242.4 136.8,228.2 	"/>' +
    '<polygon class="detail-lines" points="136.8,228.2 136.6,242.4 36.3,332.5 36.8,322.2 	"/>' +
    '<polygon class="detail-lines" points="61.5,346 61.5,360.4 23.6,386.7 24.6,373.1 	"/>' +
    '<polygon class="detail-lines" points="134.4,361 134.1,379.1 20.3,432.4 21.1,421.2 	"/>' +
    '<polygon class="detail-lines" points="133.8,396.2 133.5,411 18.8,452.9 19.4,444.4 	"/>' +
    '</g>' +
    '<g id="outline">' +
    '<path class="building-outline" d="M269.2,522.4l-1-16.3c0,0,0,0,0,0l-0.9-14.7l-1-16l-0.9-14.3l-1.1-17.5l-0.9-14.7l-0.7-11.6l-1-15.8l-1.1-17.4' +
    'l-1-15.8l-1-16.9l-1-16.3l-1.1-17.4l-1-15.6l-1-15.6l-0.8-13.1l-1-15.8l-0.8-12.3l-0.8-13.6l-0.8-13.4l-0.9-14l-0.8-12.2l-0.6-10.2' +
    'l-0.5-7.3l-10.3-4.2V159v-14.2v-14.7l-18.5-7.6v-8c0,0-0.9-5.6-10.5-11.4V76.6c0,0-4.5-7.6-7.6-9.8V10.3h-4l-8.2,52.6l0,0.1' +
    'c0,0-0.3-0.1-0.8-0.1c-3.3-0.4-16.4-0.9-27.7,12.6l-11.5,15L61.5,204.8v10.9v5.1v6.2l-20.5,23.9l-0.4,6.5l-0.7,11.4l-0.6,11.1' +
    'l-0.6,10.2l-0.6,10.5l-0.6,10.9l-0.6,10.7l-0.6,10.2l-0.5,8.7l-0.2,2.9l-9.4,6.9l-0.8,11l-0.8,11.1l-1,13.6l-0.8,11.2L22,409.2' +
    'l-0.9,12l-0.8,11.1l-0.9,12l-0.6,8.5L18,464.7l-0.8,10.7L16.3,487l-0.8,11.4l-0.8,10.9l-0.8,11.4L12,547.2h119h139.8L269.2,522.4z"' +
    '/>' +
    '</g>' +
    '</svg>'