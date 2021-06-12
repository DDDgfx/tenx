$(document).ready(function () {

    console.log("ready steady!");
    var diagramDiv = d3.select("#building-diagram");

    diagramDiv.html(buildingsvg);
    svg = d3.select("#stack-svg");

    var suites = svg.selectAll(".suites");
    var floors = svg.selectAll(".floors");
    suites.selectAll(".suite").style("fill-opacity", 0);
    suites.selectAll(".diagram-label").style("fill-opacity", 0);
    floors.selectAll(".floor").style("fill-opacity", 0);
    floors.selectAll(".diagram-label").style("fill-opacity", 0);

    //suites.style("visibility", "hidden");
    //1. Look throught the table and find the current list of columns and availabilities.
    var aTableContainer = d3.select("#availability-table-container");//Get the container for the table
    console.log(aTableContainer);
    var aTableHeaders = aTableContainer.select(".atr-header").selectAll("div");//get the div that holds the column headers
    var aTableHeaderList = [];//make an array of the table headers.
    console.log(aTableHeaderList);
    aTableHeaders.each(function(d,i){aTableHeaderList.push(this.innerHTML.toLowerCase());}); //push the column headers into it
    var aItems = aTableContainer.selectAll(".availability-item"); //get rows of the table
    //for each row in the teble
    aItems.each(function(d, i) {
        var item = d3.select(this);
       
        var rowLink = item.select("a").attr("href") //the click link for the row
        const itemData = new Map();
        item.select(".availability-table-row").selectAll("div").each(function(d, i) {
            itemData.set(aTableHeaderList[i], this.innerHTML.toLowerCase());
        })
        console.log(itemData);
        var suitePolygon = svg.select("#s-" + itemData.get("suite"));
        var floorPolygon = svg.select("#f-" + itemData.get("floor"));

        suitePolygon.selectAll(".suite").style("fill-opacity", .25);
        //floorPolygon.selectAll(".floor").style("fill-opacity", .1);


        suitePolygon.on("mouseover", function (event, d) {
            d3.select(this).selectAll(".suite").style("fill-opacity", 1);
            aItems.style("opacity", .3);
            item.style("opacity", 1);
        })
    
        suites.on("mouseleave", function (event, d) {
            d3.select(this).selectAll(".suite").style("fill-opacity", .25);
            aItems.style("opacity", 1);
        })
    
        suites.on("click", function (event, d) {
            window.open(rowLink, "_top");
        })


        item.on("mouseover", function (event, d) {
            aItems.style("opacity", .3);
            d3.select(this).style("opacity", 1);
            suitePolygon.selectAll(".suite").style("fill-opacity", 1);
        })
    
        item.on("mouseleave", function (event, d) {
            aItems.style("opacity", 1);
            suitePolygon.selectAll(".suite").style("fill-opacity", .25);
    
        })
    
        item.on("click", function (event, d) {
            console.log(event);
        })


    })



    //















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


const buildingsvg = '<svg id="stack-svg" viewBox="0 0 562.17 987.1" preserveAspectRatio="xMidYMid meet">' +
'<g id="f-28" class="floors">' +
'<path class="floor" d="M490.87,219.47,399.58,338.25v4.92l73.55-91.83,7,2.88,10.5-9h8.49s29.35-17.76,56.58-8l6.76,3a50.41,50.41,0,0,1,13.74,11.18V231.71c-4.9-8.87-13.81-15.57-13.81-15.57l-6.69-3.44c-30.94-13.62-57.28,11-57.28,11Z" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(397.55 137.26)">28</text>' +
'</g>' +
'<g id="f-27" class="floors">' +
'<path class="floor" d="M576.19,272.58c-3.34-3.13-8.19-5.35-13.81-6.91-.57-.16-1.15-.32-1.74-.46-22.55-5.57-55.81-1.29-55.81-1.29L494.66,260l-14.54-5.76,10.5-9h8.49s29.35-17.76,56.58-8l6.76,3a50.41,50.41,0,0,1,13.74,11.18" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(397.55 160.87)">27</text>' +
'</g>' +
'<g id="f-26" class="floors">' +
'<polyline class="floor" points="414.56 199.46 443.91 212.85 443.91 238.78 415.61 224.89"/>' +
'<polygon class="floor" points="288.39 143.47 288.39 169.48 132.85 364.25 132.85 344.94 286.83 142.85 288.39 143.47"/>' +
'<path class="floor" d="M504.83,291.21l-32.92-14.29v-26l1.19.48,7.18,2.83,4,1.59,6.33,2.51,10.68,4.21,3.53,1.4s33.26-4.28,55.81,1.29c.59.14,1.17.3,1.74.46,5.62,1.56,10.47,3.78,13.81,6.91,16.94,10.26,21.89,20.71,21.89,20.71l.71,28.23a36.25,36.25,0,0,0-14-19.29c-11.1-7.61-24.67-11.42-44.08-12.73A163,163,0,0,0,504.83,291.21Z" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(449.17 233.11)">26</text>' +
'</g>' +
'<g id="f-25" class="floors">' +
'<polyline class="floor" points="415.61 224.89 443.91 238.78 443.91 263.91 416.23 252.46"/>' +
'<polygon class="floor" points="288.39 169.48 288.39 195.52 274.19 211.06 269.46 208.93 132.85 373.32 132.85 364.25 288.39 169.48"/>' +
'<path class="floor" d="M599.34,343.68c-21.29-43.76-94.2-25.24-94.2-25.24L471.91,303v-26l32.92,14.29s80.64-13.44,94,30.31" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(448.93 258.25)">25</text>' +
'</g>' +
'<g id="f-24" class="floors">' +
'<path class="floor" d="M599.89,365.63S587.53,329.06,505,338.68l-33.11-13.76V303l33.23,15.49s72.91-18.52,94.2,25.24Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="416.23 252.64 443.91 264.09 443.91 283.83 416.8 272.17 416.23 252.64"/>' +
'<polygon class="floor" points="274.27 211.11 288.26 195.61 288.34 217.27 274.27 211.11"/>' +
'<text class="diagram-label" transform="translate(450.16 281.12)">24</text>' +
'</g>' +
'<g id="f-23" class="floors">' +
'<polygon class="floor" points="416.63 272.01 417.01 283.44 462.85 304.15 462.06 291.31 443.91 283.83 416.63 272.01"/>' +
'<polygon class="floor" points="269.46 208.92 268.99 234.55 95.92 438.04 97.31 414.79 132.85 373.32 132.85 373.32 269.46 208.92"/>' +
'<path class="floor" d="M600.32,387.9c-12.07-37.21-94.41-25.42-94.41-25.42L452.51,342l.48-25.63,4.72,2.14,14.2,6.42L505,338.68c82.51-9.62,94.87,26.95,94.87,26.95Z" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(469.45 300.49)">23</text>' +
'</g>' +
'<g id="f-22" class="floors">' +
'<path class="floor" d="M647.49,429.59,612.06,415.4s-11.83-52-114.13-33.71l-45.85-16.06.43-23.64,53.4,20.49s82.34-11.79,94.41,25.42v0l.21,2.95,45.84,20.71Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="268.99 234.55 268.56 258.2 94.76 458.15 95.92 438.04 268.99 234.55"/>' +
'<text class="diagram-label" transform="translate(469.96 319.96)">22</text>' +
'</g>' +
'<g id="f-21" class="floors">' +
'<path class="floor" d="M648.83,451.18,613,438.4s-8.3-49.9-115.93-31.27l-45.45-14.67.49-26.83,45.85,16.06c102.3-18.32,114.13,33.71,114.13,33.71l35.43,14.19Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="268.56 258.2 268.07 285.03 93.64 477.83 94.76 458.15 268.56 258.2"/>' +
'<text class="diagram-label" transform="translate(471.98 339.13)">21</text>' +
'</g>' +
'<g id="f-20" class="floors">' +
'<path class="floor" d="M650.37,476,614,461.83s-10.65-47.7-118.29-29.18l-44.6-16.17.44-24L497,407.13C604.67,388.5,613,438.4,613,438.4l35.86,12.78Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="268.07 285.03 267.63 309.05 92.6 495.96 93.64 477.83 268.07 285.03"/>' +
'<text class="diagram-label" transform="translate(472.05 363.08)">20</text>' +
'</g>' +
'<g id="f-19" class="floors">' +
'<path class="floor" d="M651.85,499.75l-36.91-14.44C589.31,436,496.16,458.68,496.16,458.68l-45.47-17,.46-25.24,44.6,16.17C603.39,414.13,614,461.83,614,461.83L650.37,476Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="267.63 309.05 267.17 334.29 91.54 514.5 92.6 495.96 267.63 309.05"/>' +
'<text class="diagram-label" transform="translate(472.47 386.46)">19</text>' +
'</g>' +
'<g id="f-18" class="floors">' +
'<path class="floor" d="M653.34,523.73,616,511.9s-1.52-43-121-28.77l-44.78-14.6.5-26.81,45.47,17S589.31,436,614.94,485.31l36.91,14.44Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="267.17 334.29 266.67 361.1 90.42 533.81 91.54 514.5 267.17 334.29"/>' +
'<text class="diagram-label" transform="translate(474.31 411.01)">18</text>' +
'</g>' +
'<g id="f-17" class="floors">' +
'<path class="floor" d="M654.7,545.47l-37.51-9.92c-18.54-44.15-123-27.2-123-27.2l-44.45-14.58.46-25.24L495,483.13c119.51-14.21,121,28.77,121,28.77l37.34,11.83Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="266.67 361.1 266.21 386.34 89.33 552.72 90.42 533.81 266.67 361.1"/>' +
'<text class="diagram-label" transform="translate(476.33 434.98)">17</text>' +
'</g>' +
'<g id="f-16" class="floors">' +
'<path class="floor" d="M656.44,573.42l-38.35-12.86s-6.81-42-126.28-26.58l-42.54-15,.46-25.22,44.45,14.58s104.47-17,123,27.2l37.51,9.92Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="266.21 386.34 265.75 411.56 88.3 570.85 89.33 552.72 266.21 386.34"/>' +
'<text class="diagram-label" transform="translate(478.81 457.21)">16</text>' +
'</g>' +
'<g id="f-15" class="floors">' +
'<path class="floor" d="M657.89,596.66l-27.68-5.91c-21.3-57.16-141.07-35.83-141.07-35.83l-40.31-12.26.44-23.67,42.54,15c119.47-15.37,126.28,26.59,126.28,26.59l38.35,12.86Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="265.75 411.56 265.31 435.23 87.42 586.25 88.3 570.85 265.75 411.56"/>' +
'<text class="diagram-label" transform="translate(481.59 483.21)">15</text>' +
'</g>' +
'<g id="f-14" class="floors">' +
'<path class="floor" d="M659.6,624.27l-28.28-6.54s-5.38-48.59-142.18-32.46l-40.88-11.85.57-30.76,40.31,12.26s119.77-21.33,141.07,35.83l27.68,5.91Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="265.31 435.23 264.74 465.98 69.14 622.95 70.79 600.39 87.42 586.25 87.42 586.25 265.31 435.23"/>' +
'<text class="diagram-label" transform="translate(484.27 509.5)">14</text>' +
'</g>' +
'<g id="f-13" class="floors">' +
'<path class="floor" d="M661.32,651.91l-28.81-4.22c-21.29-52.83-143.37-29.63-143.37-29.63l-41.46-12.72.58-31.92,40.88,11.85c136.8-16.13,142.18,32.46,142.18,32.46l28.28,6.54Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="264.74 465.98 264.16 497.91 67.71 642.67 69.15 622.95 264.74 465.98"/>' +
'<text class="diagram-label" transform="translate(486.96 536.66)">13</text>' +
'</g>' +
'<g id="f-12" class="floors">' +
'<path class="floor" d="M633.56,678.3s-6.46-46.66-144.42-31l-42-10.43.57-31.54,41.46,12.72s122.08-23.2,143.37,29.63l28.81,4.22,1.91,30.7Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="264.16 497.91 263.59 529.44 263.57 529.44 65.96 666.69 67.71 642.67 264.16 497.91"/>' +
'<text class="diagram-label" transform="translate(489.12 566.44)">12</text>' +
'</g>' +
'<g id="f-11" class="floors">' +
'<path class="floor" d="M665,711.39l-30.28-2.47c-11.83-50.85-146.06-30.64-146.06-30.64L446.53,668l.58-31.16,42,10.43c138.13-16,144.42,31,144.42,31l29.67,4.31Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="263.59 529.44 263.01 560.61 64.53 686.41 65.96 666.69 263.57 529.44 263.59 529.44"/>' +
'<text class="diagram-label" transform="translate(491.8 596.2)">11</text>' +
'</g>' +
'<g id="f-10" class="floors">' +
'<path class="floor" d="M666.87,741.35l-30.72-3.13s-4.78-43.83-147.48-30L446,698.78l.55-30.74,42.14,10.24s134.23-20.21,146.06,30.64L665,711.39Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="263.01 560.61 262.46 591.35 262.44 591.35 63.08 706.5 64.53 686.41 263.01 560.61"/>' +
'<text class="diagram-label" transform="translate(493.6 624.01)">10</text>' +
'</g>' +
'<g id="f-9" class="floors">' +
'<path class="floor" d="M668.62,769.33,637.3,769C636.89,724,488.67,739.5,488.67,739.5l-43.25-10.74.56-30,42.69,9.47c144-13.54,147.48,30,147.48,30l30.72,3.13Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="262.46 591.35 261.9 621.33 61.52 727.78 63.08 706.5 262.44 591.35 262.46 591.35"/>' +
'<text class="diagram-label" transform="translate(497.37 652.56)">9</text>' +
'</g>' +
'<g id="f-8" class="floors">' +
'<path class="floor" d="M638.18,800.09l-.49-10.63s-3.14-31.55-149-20.13l-43.84-8.65.59-31.92,43.25,10.74S636.89,724,637.3,769l31.32.37,1.91,30.76Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="261.9 621.33 261.31 653.25 60.09 747.48 61.52 727.78 261.9 621.33"/>' +
'<text class="diagram-label" transform="translate(498.5 682.19)">8</text>' +
'</g>' +
'<g id="f-gr" class="floors">' +
'<path class="floor" d="M686.57,1058.08H439.39l1-53.75c6.83,2.78,243.48,9.86,243.48,9.86Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="257.42 866.14 256.86 896.9 256.84 896.9 48.74 903.62 50.2 883.55 257.4 866.14 257.42 866.14"/>' +
'<polygon class="floor" points="256.86 896.9 255.86 950.65 45.32 950.65 48.74 903.62 256.84 896.9 256.86 896.9"/>' +
'<path class="floor" d="M683.85,1014.19s-236.65-7.08-243.48-9.86l.57-30.75,43.48,3.09s192,4,197.62,8.72a0,0,0,0,0,0,0Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="floor" d="M682.05,985.39c-5.66-4.7-197.63-8.72-197.63-8.72l-43.48-3.09.55-30.74L484.42,946c158.49.39,196,13.37,196,13.37Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="floor" d="M680.44,959.37s-37.53-13-196-13.37l-42.93-3.16.6-32.33s41.51,5.41,43.68,5.41S644,911.76,678.67,931Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="floor" points="258.57 803.07 257.97 835.4 51.6 864.25 53.07 844.05 258.57 803.07"/>' +
'<polygon class="floor" points="257.97 835.4 257.42 866.14 257.4 866.14 50.2 883.55 51.6 864.25 257.97 835.4"/>' +
'<text class="diagram-label" transform="translate(510.57 880.08)">G<tspan class="cls-3" x="10.94" y="0">r</tspan><tspan x="16.16" y="0">ound</tspan></text>' +
'</g>' +
'<g id="s-1820" class="suites">' +
'<path class="suite" d="M577.6,483.85c-17.9-3.94-44.15-5.3-82.63-.72l-44.78-14.6.5-26.81,45.47,17s44.68-10.86,80.67-1.17Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="267.17 334.29 266.67 361.1 90.42 533.81 91.54 514.5 267.17 334.29"/>' +
'<text class="diagram-label" transform="translate(316.56 367.31)">1820</text>' +
'</g>' +
'<g id="s-1740" class="suites">' +
'<path class="suite" d="M578.54,484.06C615.32,492.47,616,511.9,616,511.9l37.34,11.83,1.36,21.74-37.51-9.92c-6-14.19-20.79-22.06-38.17-26.22Z" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(415.66 412.74)">1740</text>' +
'</g>' +
'<g id="s-1710" class="suites">' +
'<path class="suite" d="M578,509.1c-36.59-8.42-83.85-.75-83.85-.75l-44.45-14.58.46-25.24L495,483.13c38.6-4.59,64.9-3.21,82.8.75Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="266.67 361.1 266.21 386.34 89.33 552.72 90.42 533.81 266.67 361.1"/>' +
'<text class="diagram-label" transform="translate(250.67 388.29)">1710</text>' +
'</g>' +
'<g id="s-1420" class="suites">' +
'<polygon class="suite" points="178.38 535.29 69.14 622.95 70.79 600.39 87.42 586.25 87.42 586.25 178.78 508.69 178.38 535.29"/>' +
'<text class="diagram-label" transform="translate(160.6 538.41)">1420</text>' +
'</g>' +
'<g id="s-1200" class="suites">' +
'<path class="suite" d="M633.56,678.3s-6.46-46.66-144.42-31l-42-10.43.57-31.54,41.46,12.72s122.08-23.2,143.37,29.63l28.81,4.22,1.91,30.7Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="264.16 497.91 263.59 529.44 263.57 529.44 65.96 666.69 67.71 642.67 264.16 497.91"/>' +
'<text class="diagram-label" transform="translate(369.25 529.9)">1200</text>' +
'</g>' +
'<g id="s-1100" class="suites">' +
'<path class="suite" d="M665,711.39l-30.28-2.47c-11.83-50.85-146.06-30.64-146.06-30.64L446.53,668l.58-31.16,42,10.43c138.13-16,144.42,31,144.42,31l29.67,4.31Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="263.59 529.44 263.01 560.61 64.53 686.41 65.96 666.69 263.57 529.44 263.59 529.44"/>' +
'<text class="diagram-label" transform="translate(369.25 560.19)">1100</text>' +
'</g>' +
'<g id="s-1090" class="suites">' +
'<path class="suite" d="M666.87,741.35l-30.72-3.13s-4.78-43.83-147.48-30L446,698.78l.55-30.74,42.14,10.24s134.23-20.21,146.06,30.64L665,711.39Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="263.01 560.61 262.46 591.35 262.44 591.35 210.79 621.18 211.27 593.4 263.01 560.61"/>' +
'<text class="diagram-label" transform="translate(369.25 591.01)">1090</text>' +
'</g>' +
'<g id="s-1010" class="suites">' +
'<polygon class="suite" points="210.24 621.5 154.45 653.68 154.98 629.15 211.03 593.61 210.24 621.5"/>' +
'<text class="diagram-label" transform="translate(165.66 628.77)">1010</text>' +
'</g>' +
'<g id="s-830" class="suites">' +
'<path class="suite" d="M590.09,739.89c26.12,3.86,47.06,12.22,47.21,29.07l31.32.37,1.91,30.76H638.18l-.49-10.63s-1.39-14-45.53-20Z" transform="translate(-183.52 -107.43)"/>' +
'<text class="diagram-label" transform="translate(423.38 660.92)">830</text>' +
'</g>' +
'<g id="s-810a" class="suites">' +
'<polygon class="suite" points="174.79 693.66 91.88 732.6 92.52 711.32 175.25 666.98 174.79 693.66"/>' +
'<text class="diagram-label" transform="translate(114.96 706.93)">810a</text>' +
'</g>' +
'<g id="s-800" class="suites">' +
'<path class="suite" d="M591.73,769.42c-22.07-2.94-54.73-3.87-103.06-.09l-43.84-8.65.59-31.92,43.25,10.74s58.89-5.9,102.41.53Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="suite" points="261.9 621.33 261.31 653.25 180.22 691.23 180.44 664.6 261.9 621.33"/>' +
'<text class="diagram-label" transform="translate(292.25 651.72)">800</text>' +
'</g>' +
'<g id="s-gr60" class="suites">' +
'<polygon class="suite" points="201.22 950.34 160.2 951.11 161.1 876.67 202.62 873.87 201.22 950.34"/>' +
'<text class="diagram-label" transform="translate(160.99 922.73)">GR60</text>' +
'</g>' +
'<g id="s-gr10" class="suites">' +
'<polygon class="suite" points="125.5 949.54 84.48 950.31 85.39 880.66 126.9 877.86 125.5 949.54"/>' +
'<text class="diagram-label" transform="translate(87.66 924.32)">GR10</text>' +
'</g>' +
'<g id="s-gr00" class="suites">' +
'<polygon class="suite" points="502.4 949.59 436.24 949.83 437.3 873.05 497.75 875.05 502.4 949.59"/>' +
'<text class="diagram-label" transform="translate(448.21 922.36)">GR00</text>' +
'</g>' +
'<g id="detail-lines">' +
'<line class="detail-lines" x1="2.31" y1="950.64" x2="531.31" y2="950.64"/>' +
'<rect class="detail-lines" x="255.17" y="957.64" width="2.15" height="7.29"/>' +
'<rect class="detail-lines" x="270.35" y="957.64" width="2.36" height="7.97"/>' +
'<rect class="detail-lines" x="288.65" y="957.64" width="2.59" height="8.84"/>' +
'<rect class="detail-lines" x="308.25" y="957.64" width="2.6" height="9.73"/>' +
'<rect class="detail-lines" x="330.94" y="957.64" width="3.05" height="10.81"/>' +
'<rect class="detail-lines" x="357.52" y="957.64" width="3.22" height="12.02"/>' +
'<rect class="detail-lines" x="390.78" y="957.64" width="3.16" height="13.56"/>' +
'<rect class="detail-lines" x="430.39" y="957.64" width="3.61" height="15.46"/>' +
'<rect class="detail-lines" x="478.67" y="957.64" width="3.61" height="17.68"/>' +
'<rect class="detail-lines" x="526.7" y="957.64" width="4.61" height="19.51"/>' +
'<polyline class="detail-lines" points="0.13 981.1 243.22 967.01 243.46 966.93 531.31 979.64"/>' +
'<polyline class="detail-lines" points="0.35 986.98 243.03 968.29 243.06 968.29 531.31 986.98"/>' +
'<line class="detail-lines" x1="482.4" y1="960.41" x2="526.7" y2="960.64"/>' +
'<line class="detail-lines" x1="434.14" y1="960.16" x2="478.67" y2="960.39"/>' +
'<line class="detail-lines" x1="393.94" y1="959.95" x2="430.39" y2="960.14"/>' +
'<line class="detail-lines" x1="360.73" y1="959.77" x2="390.78" y2="959.93"/>' +
'<line class="detail-lines" x1="333.99" y1="959.63" x2="357.52" y2="959.76"/>' +
'<line class="detail-lines" x1="310.85" y1="959.51" x2="330.94" y2="959.62"/>' +
'<line class="detail-lines" x1="291.24" y1="959.41" x2="308.25" y2="959.5"/>' +
'<line class="detail-lines" x1="272.71" y1="959.31" x2="288.65" y2="959.4"/>' +
'<line class="detail-lines" x1="257.32" y1="959.23" x2="270.35" y2="959.3"/>' +
'<line class="detail-lines" x1="270.35" y1="961.87" x2="257.32" y2="961.63"/>' +
'<line class="detail-lines" x1="288.65" y1="962.2" x2="272.89" y2="961.91"/>' +
'<line class="detail-lines" x1="308.25" y1="962.55" x2="291.43" y2="962.25"/>' +
'<line class="detail-lines" x1="330.94" y1="962.96" x2="310.85" y2="962.6"/>' +
'<line class="detail-lines" x1="357.52" y1="963.43" x2="333.99" y2="963.01"/>' +
'<line class="detail-lines" x1="390.78" y1="964.03" x2="360.73" y2="963.49"/>' +
'<line class="detail-lines" x1="430.39" y1="964.75" x2="393.94" y2="964.09"/>' +
'<line class="detail-lines" x1="478.67" y1="965.62" x2="434.01" y2="964.81"/>' +
'<line class="detail-lines" x1="526.7" y1="966.48" x2="482.42" y2="965.69"/>' +
'<line class="detail-lines" x1="482.48" y1="971.62" x2="526.7" y2="973.1"/>' +
'<line class="detail-lines" x1="434.12" y1="970" x2="478.6" y2="971.49"/>' +
'<line class="detail-lines" x1="394.03" y1="968.65" x2="430.32" y2="969.87"/>' +
'<line class="detail-lines" x1="360.81" y1="967.53" x2="390.68" y2="968.54"/>' +
'<line class="detail-lines" x1="334.09" y1="966.64" x2="357.45" y2="967.42"/>' +
'<line class="detail-lines" x1="311.06" y1="965.86" x2="330.88" y2="966.53"/>' +
'<line class="detail-lines" x1="291.39" y1="965.2" x2="308.25" y2="965.77"/>' +
'<line class="detail-lines" x1="272.89" y1="964.58" x2="288.65" y2="965.11"/>' +
'<line class="detail-lines" x1="257.32" y1="964.06" x2="270.35" y2="964.49"/>' +
'<rect class="detail-lines" x="255.31" y="957.64" width="2" height="7.29"/>' +
'<rect class="detail-lines" x="240.98" y="957.64" width="2.2" height="7.97"/>' +
'<rect class="detail-lines" x="223.74" y="957.64" width="2.41" height="8.84"/>' +
'<rect class="detail-lines" x="205.49" y="957.64" width="2.42" height="9.73"/>' +
'<rect class="detail-lines" x="183.96" y="957.64" width="2.84" height="10.81"/>' +
'<rect class="detail-lines" x="159.07" y="957.64" width="2.99" height="12.02"/>' +
'<rect class="detail-lines" x="128.18" y="957.64" width="2.94" height="13.56"/>' +
'<rect class="detail-lines" x="90.89" y="957.64" width="3.36" height="15.46"/>' +
'<rect class="detail-lines" x="45.98" y="957.64" width="3.36" height="17.68"/>' +
'<rect class="detail-lines" x="0.35" y="957.64" width="4.29" height="19.51"/>' +
'<line class="detail-lines" x1="45.86" y1="960.41" x2="4.64" y2="960.64"/>' +
'<line class="detail-lines" x1="90.77" y1="960.16" x2="49.34" y2="960.39"/>' +
'<line class="detail-lines" x1="128.18" y1="959.95" x2="94.25" y2="960.14"/>' +
'<line class="detail-lines" x1="159.07" y1="959.77" x2="131.12" y2="959.93"/>' +
'<line class="detail-lines" x1="183.96" y1="959.63" x2="162.07" y2="959.76"/>' +
'<line class="detail-lines" x1="205.49" y1="959.51" x2="186.8" y2="959.62"/>' +
'<line class="detail-lines" x1="223.74" y1="959.41" x2="207.91" y2="959.5"/>' +
'<line class="detail-lines" x1="240.99" y1="959.31" x2="226.15" y2="959.4"/>' +
'<line class="detail-lines" x1="255.31" y1="959.23" x2="243.18" y2="959.3"/>' +
'<line class="detail-lines" x1="243.18" y1="961.87" x2="255.31" y2="961.63"/>' +
'<line class="detail-lines" x1="226.15" y1="962.2" x2="240.82" y2="961.91"/>' +
'<line class="detail-lines" x1="207.91" y1="962.55" x2="223.56" y2="962.25"/>' +
'<line class="detail-lines" x1="186.8" y1="962.96" x2="205.49" y2="962.6"/>' +
'<line class="detail-lines" x1="162.07" y1="963.43" x2="183.96" y2="963.01"/>' +
'<line class="detail-lines" x1="131.12" y1="964.03" x2="159.07" y2="963.49"/>' +
'<line class="detail-lines" x1="94.25" y1="964.75" x2="128.18" y2="964.09"/>' +
'<line class="detail-lines" x1="49.34" y1="965.62" x2="90.89" y2="964.81"/>' +
'<line class="detail-lines" x1="4.64" y1="966.48" x2="45.85" y2="965.69"/>' +
'<line class="detail-lines" x1="45.79" y1="971.62" x2="4.64" y2="973.1"/>' +
'<line class="detail-lines" x1="90.79" y1="970" x2="49.39" y2="971.49"/>' +
'<line class="detail-lines" x1="128.1" y1="968.65" x2="94.32" y2="969.87"/>' +
'<line class="detail-lines" x1="159.01" y1="967.53" x2="131.21" y2="968.54"/>' +
'<line class="detail-lines" x1="183.87" y1="966.64" x2="162.13" y2="967.42"/>' +
'<line class="detail-lines" x1="205.3" y1="965.86" x2="186.85" y2="966.53"/>' +
'<line class="detail-lines" x1="223.6" y1="965.2" x2="207.91" y2="965.77"/>' +
'<line class="detail-lines" x1="240.81" y1="964.58" x2="226.15" y2="965.11"/>' +
'<line class="detail-lines" x1="255.31" y1="964.06" x2="243.18" y2="964.49"/>' +
'<line class="detail-lines" x1="266.3" y1="212.73" x2="257.4" y2="710.69"/>' +
'<line class="detail-lines" x1="262.66" y1="217.12" x2="252.73" y2="712.41"/>' +
'<line class="detail-lines" x1="248.12" y1="714.1" x2="258.24" y2="222.43"/>' +
'<line class="detail-lines" x1="254.22" y1="227.27" x2="243.98" y2="715.62"/>' +
'<line class="detail-lines" x1="240.1" y1="717.04" x2="250.6" y2="231.62"/>' +
'<line class="detail-lines" x1="246.76" y1="236.25" x2="236.06" y2="718.53"/>' +
'<line class="detail-lines" x1="232.02" y1="720.01" x2="242.83" y2="240.98"/>' +
'<line class="detail-lines" x1="238.73" y1="245.91" x2="227.89" y2="721.53"/>' +
'<line class="detail-lines" x1="223.43" y1="723.16" x2="234.33" y2="251.2"/>' +
'<line class="detail-lines" x1="218.54" y1="724.96" x2="229.44" y2="257.04"/>' +
'<line class="detail-lines" x1="213.55" y1="726.57" x2="224.23" y2="263.36"/>' +
'<line class="detail-lines" x1="208.1" y1="728.64" x2="218.54" y2="270.21"/>' +
'<line class="detail-lines" x1="199.67" y1="870.9" x2="213.55" y2="276.21"/>' +
'<line class="detail-lines" x1="194.85" y1="870.9" x2="208.51" y2="282.27"/>' +
'<line class="detail-lines" x1="188.8" y1="871.91" x2="202.57" y2="289.86"/>' +
'<line class="detail-lines" x1="182.93" y1="872.2" x2="195.58" y2="297.04"/>' +
'<line class="detail-lines" x1="179.62" y1="741.17" x2="189.99" y2="304.56"/>' +
'<line class="detail-lines" x1="174.23" y1="741.17" x2="184.05" y2="311.31"/>' +
'<line class="detail-lines" x1="168.78" y1="743.17" x2="178.79" y2="318.04"/>' +
'<line class="detail-lines" x1="162.79" y1="745.08" x2="172.93" y2="325.09"/>' +
'<line class="detail-lines" x1="157.34" y1="746.92" x2="167.25" y2="331.93"/>' +
'<line class="detail-lines" x1="151.89" y1="748.83" x2="162.33" y2="337.86"/>' +
'<line class="detail-lines" x1="146.44" y1="750.94" x2="157.96" y2="343.11"/>' +
'<line class="detail-lines" x1="142.11" y1="752.65" x2="153.21" y2="348.82"/>' +
'<line class="detail-lines" x1="137.91" y1="754.21" x2="148.74" y2="354.21"/>' +
'<line class="detail-lines" x1="132.63" y1="756.29" x2="144.59" y2="359.2"/>' +
'<line class="detail-lines" x1="127.64" y1="758.11" x2="140.74" y2="363.84"/>' +
'<line class="detail-lines" x1="123.31" y1="759.7" x2="136.98" y2="368.56"/>' +
'<line class="detail-lines" x1="119.19" y1="761.37" x2="134.06" y2="372.9"/>' +
'<line class="detail-lines" x1="114.72" y1="762.83" x2="129.37" y2="377.72"/>' +
'<line class="detail-lines" x1="111.27" y1="764.09" x2="125.6" y2="381.78"/>' +
'<line class="detail-lines" x1="107.96" y1="765.3" x2="121.78" y2="386.24"/>' +
'<line class="detail-lines" x1="104.42" y1="766.6" x2="118.44" y2="390.14"/>' +
'<line class="detail-lines" x1="100.92" y1="767.88" x2="115.01" y2="394.14"/>' +
'<line class="detail-lines" x1="97.65" y1="768.8" x2="112.07" y2="397.56"/>' +
'<line class="detail-lines" x1="94.03" y1="770.4" x2="108.33" y2="401.93"/>' +
'<line class="detail-lines" x1="90.58" y1="771.66" x2="104.72" y2="406.14"/>' +
'<line class="detail-lines" x1="86.4" y1="773.27" x2="101.12" y2="410.34"/>' +
'<line class="detail-lines" x1="82.03" y1="774.78" x2="98.61" y2="413.26"/>' +
'<line class="detail-lines" x1="78.61" y1="776.03" x2="87.42" y2="586.25"/>' +
'<line class="detail-lines" x1="74.67" y1="777.47" x2="84.3" y2="588.9"/>' +
'<line class="detail-lines" x1="71.15" y1="779.12" x2="80.45" y2="592.17"/>' +
'<line class="detail-lines" x1="67.1" y1="780.24" x2="77.17" y2="594.83"/>' +
'<line class="detail-lines" x1="63.35" y1="781.61" x2="74.67" y2="597.08"/>' +
'<line class="detail-lines" x1="61.03" y1="783.61" x2="72.35" y2="599.08"/>' +
'<line class="detail-lines" x1="275.79" y1="211.79" x2="267.92" y2="710.13"/>' +
'<line class="detail-lines" x1="276.29" y1="711.02" x2="282.83" y2="214.97"/>' +
'<line class="detail-lines" x1="290.15" y1="218.22" x2="285.25" y2="711.87"/>' +
'<line class="detail-lines" x1="295.55" y1="713.19" x2="298.29" y2="221.6"/>' +
'<polyline class="detail-lines" points="311.62 227.14 311.38 273.2 311.38 445.77"/>' +
'<line class="detail-lines" x1="318.25" y1="229.89" x2="318.25" y2="273.2"/>' +
'<line class="detail-lines" x1="304.51" y1="224.18" x2="305.62" y2="447.25"/>' +
'<line class="detail-lines" x1="456.18" y1="288.89" x2="482.46" y2="735.48"/>' +
'<line class="detail-lines" x1="475.27" y1="735.19" x2="449.35" y2="284.08"/>' +
'<line class="detail-lines" x1="443.91" y1="283.83" x2="467.57" y2="722.62"/>' +
'<line class="detail-lines" x1="460.5" y1="719.24" x2="438" y2="281.3"/>' +
'<polyline class="detail-lines" points="441.51 473.38 431.83 278.65 431.83 207.24"/>' +
'<line class="detail-lines" x1="438" y1="281.98" x2="438" y2="209.78"/>' +
'<line class="detail-lines" x1="426.29" y1="302.31" x2="426.29" y2="204.64"/>' +
'<line class="detail-lines" x1="419.56" y1="201.75" x2="419.56" y2="293.49"/>' +
'<line class="detail-lines" x1="206.96" y1="736.86" x2="182.22" y2="745.08"/>' +
'<line class="detail-lines" x1="282.83" y1="150.32" x2="282.83" y2="214.75"/>' +
'<line class="detail-lines" x1="277.87" y1="157.17" x2="277.87" y2="212.73"/>' +
'<line class="detail-lines" x1="272.73" y1="163.83" x2="272.73" y2="210.56"/>' +
'<line class="detail-lines" x1="267.7" y1="170.34" x2="267.7" y2="210.91"/>' +
'<line class="detail-lines" x1="263.41" y1="216.21" x2="263.41" y2="175.89"/>' +
'<line class="detail-lines" x1="258.85" y1="181.8" x2="258.85" y2="222.11"/>' +
'<line class="detail-lines" x1="254.22" y1="187.79" x2="254.22" y2="227.69"/>' +
'<line class="detail-lines" x1="249.73" y1="193.61" x2="249.73" y2="232.68"/>' +
'<line class="detail-lines" x1="245.59" y1="198.96" x2="245.59" y2="238.36"/>' +
'<line class="detail-lines" x1="241.1" y1="204.78" x2="241.1" y2="243.59"/>' +
'<line class="detail-lines" x1="236.52" y1="210.74" x2="236.52" y2="248.78"/>' +
'<line class="detail-lines" x1="232.65" y1="215.71" x2="232.65" y2="253.86"/>' +
'<line class="detail-lines" x1="228.1" y1="258.7" x2="228.37" y2="221.26"/>' +
'<line class="detail-lines" x1="224.23" y1="226.62" x2="223.6" y2="264.12"/>' +
'<line class="detail-lines" x1="220.1" y1="231.97" x2="220.07" y2="268.36"/>' +
'<line class="detail-lines" x1="216.06" y1="237.29" x2="215.66" y2="273.2"/>' +
'<line class="detail-lines" x1="212.07" y1="242.37" x2="211.77" y2="278.35"/>' +
'<line class="detail-lines" x1="208.12" y1="247.48" x2="207.75" y2="283.19"/>' +
'<line class="detail-lines" x1="204.39" y1="252.31" x2="204.02" y2="287.68"/>' +
'<line class="detail-lines" x1="200.5" y1="257.35" x2="200.5" y2="292.3"/>' +
'<line class="detail-lines" x1="193.41" y1="266.53" x2="193.41" y2="300.45"/>' +
'<line class="detail-lines" x1="197.02" y1="296.11" x2="197.19" y2="261.64"/>' +
'<line class="detail-lines" x1="189.99" y1="270.95" x2="189.63" y2="305"/>' +
'<line class="detail-lines" x1="186.42" y1="275.59" x2="185.87" y2="309.53"/>' +
'<line class="detail-lines" x1="183.01" y1="280" x2="182.21" y2="313.93"/>' +
'<line class="detail-lines" x1="178.79" y1="318.04" x2="179.41" y2="284.66"/>' +
'<line class="detail-lines" x1="175.9" y1="289.2" x2="175.48" y2="322.03"/>' +
'<line class="detail-lines" x1="172.02" y1="326.19" x2="172.55" y2="293.54"/>' +
'<line class="detail-lines" x1="169.37" y1="297.66" x2="168.61" y2="330.29"/>' +
'<line class="detail-lines" x1="165.29" y1="334.29" x2="166.01" y2="302.01"/>' +
'<line class="detail-lines" x1="162.91" y1="306.02" x2="162.33" y2="337.86"/>' +
'<line class="detail-lines" x1="159.7" y1="310.18" x2="159.16" y2="341.67"/>' +
'<line class="detail-lines" x1="155.96" y1="345.52" x2="156.77" y2="313.97"/>' +
'<line class="detail-lines" x1="153.45" y1="318.28" x2="152.82" y2="349.29"/>' +
'<line class="detail-lines" x1="149.82" y1="352.91" x2="150.45" y2="322.15"/>' +
'<line class="detail-lines" x1="147.54" y1="325.92" x2="146.68" y2="356.69"/>' +
'<line class="detail-lines" x1="144.46" y1="329.91" x2="143.83" y2="360.11"/>' +
'<line class="detail-lines" x1="141.61" y1="333.6" x2="140.74" y2="363.84"/>' +
'<line class="detail-lines" x1="138.74" y1="337.31" x2="137.99" y2="367.14"/>' +
'<line class="detail-lines" x1="135.66" y1="341.31" x2="135.25" y2="370.44"/>' +
'<path class="detail-lines" d="M598.08,306.9s-4.72-16-27.7-25.5c-19.93-8.21-48.32-7.26-65.48-3.14l-33-13.05-155.48,197" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M504.9,305.05a139.47,139.47,0,0,1,55.74-1.17c29.75,5.69,38.53,27.25,38.49,28.44" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M504.9,329s28.48-6.34,57.48,0c31.4,6.87,37.07,25.29,37.07,25.29" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M600.32,377.33c-2.24-7.13-13-17.43-28.66-22.33-29-10.17-66.2-2.46-66.2-2.46l-52.74-21.76L280,535.7" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M613.28,447.33S606.7,426,567.16,419c-35.41-6.27-69.21,2.33-69.21,2.33l-46.58-16.7L276.7,593.32" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M615.49,497.86S609,476.7,568.6,469.7C532.46,463.44,498,472,498,472l-47.52-16.4L274.54,631" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M616.58,522.22S610,502,569.25,495.35c-36.47-6-71.3,2.23-71.3,2.23l-48-14.85L273.39,650.79" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M497.93,523.73s35.14-9.6,71.92-3.62c41.07,6.68,47.71,26.87,47.71,26.87" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M618.23,572.35s-6.68-20.19-48-26.87c-37-6-71.57-1-71.57-1l-.73.15-48.91-13L271.28,687.77" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M614.47,473.33c-3.52-9.17-17.48-24.5-44.31-29.16-37.67-6.61-72.23,2.33-72.23,2.33l-47-16.91L275.64,611.81" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M506.3,380.32s22.9-7.39,47.43-4,33.46,10.54,39.63,15.39" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M630.65,602.38c-6-12.92-22.67-29-57.89-34-36.52-5.19-83.62,2.28-83.62,2.28l-40.88-11.78L253.53,718.44" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M632,632.45c-6-12.92-22.88-29-58.43-34-36.85-5.19-84.38,2.28-84.38,2.28L448.26,590,252,739.88" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M632.9,660.44c-7.69-12-24.93-25.29-57.43-29.75-37.7-5.19-86.33,2.28-86.33,2.28l-42-11.93L250.46,760.68" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M634.2,689.92c-7.76-12-25.15-25.28-58-29.75-38-5.18-87.11,2.28-87.11,2.28l-42.34-8.8-198,129.48" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M635.41,720.49c-7.83-12-25.36-25.29-58.43-29.75-38.36-5.19-87.84,2.28-87.84,2.28l-42.9-8.46L247.34,803.67" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M636.4,750.93c-5.66-12-19-23.31-58.57-28.5-38.72-5.08-88.69.54-88.69.54l-43.72-8.3L245.79,825.08" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M637.47,778.55C631.66,767,615.24,756.86,579.33,753c-39.66-4.26-90.19,1.34-90.19,1.34l-44.31-10.72L244.38,844.37" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M638.41,802.94c-8.66-8.63-25.57-15.73-55.45-18.81-41.25-4.26-93.82,1.34-93.82,1.34L444.54,777,242.86,865.32" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M620.15,821.23c-8.95-2.84-20.22-5.08-34.27-6.49-42.53-4.26-96.74,1.34-96.74,1.34l-44.86-7.75-203,78.17" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="382.12" y1="159.25" x2="384.91" y2="273.63"/>' +
'<line class="detail-lines" x1="388.66" y1="162.2" x2="392.04" y2="275.66"/>' +
'<line class="detail-lines" x1="395.26" y1="166.78" x2="398.36" y2="278.03"/>' +
'<line class="detail-lines" x1="401.25" y1="171.09" x2="404.19" y2="280.83"/>' +
'<polyline class="detail-lines" points="406.17 175.36 409.1 283.66 412.44 452.31"/>' +
'<line class="detail-lines" x1="409.09" y1="178.36" x2="412.43" y2="286.12"/>' +
'<line class="detail-lines" x1="375.41" y1="157.38" x2="377.8" y2="272.18"/>' +
'<line class="detail-lines" x1="367.64" y1="156.04" x2="370.4" y2="271.16"/>' +
'<line class="detail-lines" x1="360.27" y1="155.31" x2="362.08" y2="270.52"/>' +
'<line class="detail-lines" x1="352.11" y1="154.95" x2="354.85" y2="270.35"/>' +
'<line class="detail-lines" x1="344.6" y1="154.94" x2="346.77" y2="270.52"/>' +
'<line class="detail-lines" x1="336.83" y1="155.58" x2="338.4" y2="271.05"/>' +
'<line class="detail-lines" x1="329" y1="155.72" x2="330.67" y2="271.83"/>' +
'<line class="detail-lines" x1="426.02" y1="301.78" x2="431.83" y2="463.06"/>' +
'<line class="detail-lines" x1="419.16" y1="292.21" x2="424.09" y2="457.78"/>' +
'<polyline class="detail-lines" points="419.15 455.18 414.57 287.84 412.44 182.47"/>' +
'<line class="detail-lines" x1="402.25" y1="279.83" x2="404.19" y2="449.58"/>' +
'<line class="detail-lines" x1="393.37" y1="276.11" x2="394.67" y2="447.25"/>' +
'<line class="detail-lines" x1="383.02" y1="273.2" x2="386.24" y2="445.77"/>' +
'<line class="detail-lines" x1="374.19" y1="271.99" x2="376.38" y2="444.58"/>' +
'<line class="detail-lines" x1="364.08" y1="270.72" x2="366.27" y2="443.83"/>' +
'<line class="detail-lines" x1="353.54" y1="270.35" x2="355.72" y2="443.19"/>' +
'<line class="detail-lines" x1="343.51" y1="270.72" x2="345.69" y2="443.54"/>' +
'<line class="detail-lines" x1="333.57" y1="271.57" x2="335.75" y2="443.98"/>' +
'<line class="detail-lines" x1="322.78" y1="273.2" x2="324.96" y2="444.93"/>' +
'<line class="detail-lines" x1="403.22" y1="449.58" x2="409.8" y2="711.24"/>' +
'<line class="detail-lines" x1="443.21" y1="476.03" x2="452.39" y2="716.73"/>' +
'<line class="detail-lines" x1="448.34" y1="715.77" x2="439.4" y2="470.56"/>' +
'<line class="detail-lines" x1="434.71" y1="465.55" x2="443.21" y2="714.76"/>' +
'<polyline class="detail-lines" points="437.18 713.79 428.54 460.61 423.14 297.11"/>' +
'<line class="detail-lines" x1="421.62" y1="456.42" x2="429.47" y2="712.83"/>' +
'<line class="detail-lines" x1="413.03" y1="452.54" x2="421.01" y2="712.03"/>' +
'<line class="detail-lines" x1="393.37" y1="446.99" x2="397.35" y2="710.86"/>' +
'<line class="detail-lines" x1="383.02" y1="445.32" x2="385.86" y2="706.13"/>' +
'<line class="detail-lines" x1="372.08" y1="444.89" x2="374.92" y2="705.71"/>' +
'<line class="detail-lines" x1="360.22" y1="443.83" x2="363.8" y2="705.71"/>' +
'<line class="detail-lines" x1="348.14" y1="443.54" x2="351.72" y2="705.41"/>' +
'<line class="detail-lines" x1="336.75" y1="444.02" x2="340.33" y2="706.45"/>' +
'<line class="detail-lines" x1="325.88" y1="444.89" x2="329.46" y2="707.02"/>' +
'<line class="detail-lines" x1="315.16" y1="446.03" x2="317.97" y2="707.59"/>' +
'<path class="detail-lines" d="M316.38,483.06" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="321.94 269.42 269.09 249.05 95.31 448.6"/>' +
'<polyline class="detail-lines" points="321.73 260.25 268.79 239.8 95.92 441.26"/>' +
'<path class="detail-lines" d="M316.37,485.63" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M452.8,326.36" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="268.89" y1="244.71" x2="95.52" y2="444.94"/>' +
'<polyline class="detail-lines" points="314.43 279.69 268.56 263.25 94.76 460.52"/>' +
'<line class="detail-lines" x1="94.48" y1="463.11" x2="268.38" y2="268.36"/>' +
'<polyline class="detail-lines" points="314.41 304.09 268.07 288.89 93.64 480.13"/>' +
'<line class="detail-lines" x1="93.37" y1="482.56" x2="267.92" y2="293.2"/>' +
'<line class="detail-lines" x1="443.91" y1="283.83" x2="416.72" y2="272.18"/>' +
'<polyline class="detail-lines" points="314.43 331.4 267.45 314.46 92.43 498.91"/>' +
'<line class="detail-lines" x1="92.43" y1="501.77" x2="267.45" y2="318.28"/>' +
'<polyline class="detail-lines" points="91.29 517.48 267.08 339.05 314.43 356.38"/>' +
'<line class="detail-lines" x1="266.98" y1="344.23" x2="91.29" y2="520.23"/>' +
'<polyline class="detail-lines" points="90.42 536.54 266.57 366.43 314.41 381"/>' +
'<line class="detail-lines" x1="266.48" y1="371.46" x2="90.09" y2="539.64"/>' +
'<polyline class="detail-lines" points="314.41 416.3 266.48 403.11 88.82 561.75"/>' +
'<polyline class="detail-lines" points="89.33 555.22 266.12 391.54 314.41 406.68"/>' +
'<line class="detail-lines" x1="266.01" y1="397.47" x2="89.01" y2="558.32"/>' +
'<polyline class="detail-lines" points="88.14 573.59 265.66 416.3 314.41 428.82"/>' +
'<line class="detail-lines" x1="265.58" y1="420.69" x2="88.14" y2="576.69"/>' +
'<polyline class="detail-lines" points="305.62 453.19 265.2 441.26 70.52 604.08"/>' +
'<line class="detail-lines" x1="70.52" y1="607.24" x2="265.11" y2="446.03"/>' +
'<polyline class="detail-lines" points="68.93 625.88 264.74 472.07 305.62 483.57"/>' +
'<line class="detail-lines" x1="264.53" y1="477.83" x2="68.72" y2="628.87"/>' +
'<polyline class="detail-lines" points="305.62 515.65 264.06 503.69 67.45 646.35"/>' +
'<line class="detail-lines" x1="67.45" y1="649.75" x2="263.96" y2="509.26"/>' +
'<polyline class="detail-lines" points="305.62 544.48 263.49 535.23 65.75 669.56"/>' +
'<line class="detail-lines" x1="65.55" y1="672.37" x2="263.38" y2="541.07"/>' +
'<polyline class="detail-lines" points="64.53 689.4 263.01 566.7 305.62 576.81"/>' +
'<line class="detail-lines" x1="262.79" y1="572.73" x2="64.53" y2="692.66"/>' +
'<polyline class="detail-lines" points="305.62 605.44 262.37 596.06 62.84 709.81"/>' +
'<line class="detail-lines" x1="62.57" y1="713.48" x2="262.27" y2="601.57"/>' +
'<polyline class="detail-lines" points="61.31 730.73 261.9 626.62 305.62 637.51"/>' +
'<line class="detail-lines" x1="261.71" y1="631.59" x2="61.31" y2="733.72"/>' +
'<polyline class="detail-lines" points="60.09 750.94 261.21 658.87 305.62 667.3"/>' +
'<line class="detail-lines" x1="261.11" y1="664.58" x2="59.59" y2="754.37"/>' +
'<polyline class="detail-lines" points="305.62 697.4 260.76 689.4 58.55 772.23"/>' +
'<line class="detail-lines" x1="58.55" y1="775.57" x2="260.54" y2="695.57"/>' +
'<polyline class="detail-lines" points="97.09 418.28 269.38 213.77 321.73 235.19"/>' +
'<line class="detail-lines" x1="269.28" y1="218.93" x2="97.09" y2="421.82"/>' +
'<polyline class="detail-lines" points="283.58 215.26 288.39 208.92 321.94 221.6"/>' +
'<line class="detail-lines" x1="288.39" y1="201.08" x2="277.87" y2="212.73"/>' +
'<line class="detail-lines" x1="288.44" y1="205.2" x2="280.95" y2="214.12"/>' +
'<polyline class="detail-lines" points="321.73 197.53 288.44 183.6 132.85 371.46"/>' +
'<polyline class="detail-lines" points="132.85 366.43 288.34 174.66 321.31 187.79"/>' +
'<line class="detail-lines" x1="288.39" y1="179.4" x2="132.85" y2="368.56"/>' +
'<polyline class="detail-lines" points="132.85 348.2 288.44 148.37 321.31 160.71"/>' +
'<line class="detail-lines" x1="288.44" y1="153.58" x2="132.85" y2="351.04"/>' +
'<line class="detail-lines" x1="302.25" y1="148.95" x2="302.25" y2="119.26"/>' +
'<line class="detail-lines" x1="296.76" y1="146.77" x2="296.76" y2="125.76"/>' +
'<line class="detail-lines" x1="292.01" y1="131.99" x2="292.01" y2="144.9"/>' +
'<line class="detail-lines" x1="287.05" y1="138.45" x2="287.05" y2="144.9"/>' +
'<line class="detail-lines" x1="282.83" y1="143.94" x2="282.83" y2="150.32"/>' +
'<line class="detail-lines" x1="278.31" y1="149.82" x2="278.31" y2="156.84"/>' +
'<line class="detail-lines" x1="273.71" y1="155.73" x2="273.71" y2="162.75"/>' +
'<line class="detail-lines" x1="269.34" y1="161.41" x2="269.34" y2="168.43"/>' +
'<line class="detail-lines" x1="265.18" y1="166.83" x2="265.18" y2="173.85"/>' +
'<line class="detail-lines" x1="260.87" y1="172.38" x2="260.87" y2="179.4"/>' +
'<line class="detail-lines" x1="256.68" y1="177.8" x2="256.68" y2="184.82"/>' +
'<line class="detail-lines" x1="252.55" y1="183.21" x2="252.55" y2="190.23"/>' +
'<line class="detail-lines" x1="248.36" y1="188.97" x2="248.36" y2="195.52"/>' +
'<line class="detail-lines" x1="244.37" y1="194.13" x2="244.37" y2="200.67"/>' +
'<line class="detail-lines" x1="240.4" y1="199.25" x2="240.4" y2="205.8"/>' +
'<line class="detail-lines" x1="236.52" y1="204.19" x2="236.52" y2="210.74"/>' +
'<line class="detail-lines" x1="232.65" y1="209.16" x2="232.65" y2="215.71"/>' +
'<line class="detail-lines" x1="228.84" y1="214.32" x2="228.84" y2="220.86"/>' +
'<line class="detail-lines" x1="225.12" y1="219.16" x2="225.12" y2="225.71"/>' +
'<line class="detail-lines" x1="221.59" y1="223.35" x2="221.59" y2="229.89"/>' +
'<line class="detail-lines" x1="217.9" y1="228.35" x2="217.9" y2="234.89"/>' +
'<line class="detail-lines" x1="415.27" y1="214.09" x2="443.91" y2="225.32"/>' +
'<line class="detail-lines" x1="443.54" y1="216.44" x2="415.03" y2="204.64"/>' +
'<line class="detail-lines" x1="415.79" y1="238.78" x2="443.91" y2="250.84"/>' +
'<line class="detail-lines" x1="443.91" y1="242.67" x2="415.61" y2="230.37"/>' +
'<line class="detail-lines" x1="443.91" y1="273.63" x2="416.5" y2="263.04"/>' +
'<line class="detail-lines" x1="443.91" y1="266.97" x2="416.23" y2="256.25"/>' +
'<line class="detail-lines" x1="462.37" y1="296.32" x2="416.79" y2="276.85"/>' +
'<line class="detail-lines" x1="463.45" y1="313.84" x2="422.57" y2="296.32"/>' +
'<line class="detail-lines" x1="463.09" y1="307.97" x2="417.31" y2="288.35"/>' +
'<path class="detail-lines" d="M648.11,439.64,612.5,426c-.1-2.52-7-23.08-44-31.5-33.46-7.62-70.56,1.33-70.56,1.33l-45.85-16.57L277.77,574.52" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="464.15" y1="325.16" x2="428.92" y2="311.34"/>' +
'<line class="detail-lines" x1="466.03" y1="355.32" x2="430" y2="343.01"/>' +
'<line class="detail-lines" x1="465.54" y1="347.44" x2="429.67" y2="335.24"/>' +
'<line class="detail-lines" x1="467.57" y1="380.09" x2="430.99" y2="366.91"/>' +
'<line class="detail-lines" x1="467.06" y1="371.95" x2="430.63" y2="358.28"/>' +
'<line class="detail-lines" x1="469.09" y1="404.53" x2="432.08" y2="393.03"/>' +
'<line class="detail-lines" x1="468.61" y1="396.75" x2="431.83" y2="383.95"/>' +
'<line class="detail-lines" x1="470.46" y1="426.6" x2="433.06" y2="416.93"/>' +
'<line class="detail-lines" x1="470.05" y1="419.95" x2="432.76" y2="409.36"/>' +
'<line class="detail-lines" x1="472.02" y1="451.49" x2="434.04" y2="441.13"/>' +
'<line class="detail-lines" x1="471.42" y1="441.93" x2="433.73" y2="432.76"/>' +
'<line class="detail-lines" x1="473.64" y1="477.63" x2="438.96" y2="469.57"/>' +
'<line class="detail-lines" x1="473.1" y1="468.95" x2="434.84" y2="459.32"/>' +
'<line class="detail-lines" x1="475.2" y1="502.63" x2="447.13" y2="496.49"/>' +
'<line class="detail-lines" x1="474.61" y1="493.17" x2="446.85" y2="487.52"/>' +
'<line class="detail-lines" x1="476.95" y1="530.78" x2="448.34" y2="526.27"/>' +
'<line class="detail-lines" x1="476.34" y1="520.99" x2="447.92" y2="515.25"/>' +
'<line class="detail-lines" x1="478.7" y1="559.01" x2="449.47" y2="555.33"/>' +
'<line class="detail-lines" x1="478.06" y1="548.73" x2="449.06" y2="544.9"/>' +
'<line class="detail-lines" x1="480.6" y1="589.55" x2="450.68" y2="586.69"/>' +
'<line class="detail-lines" x1="480.03" y1="580.34" x2="450.28" y2="576.36"/>' +
'<line class="detail-lines" x1="482.45" y1="619.32" x2="451.89" y2="615.79"/>' +
'<line class="detail-lines" x1="481.79" y1="608.83" x2="451.42" y2="605.9"/>' +
'<line class="detail-lines" x1="484.23" y1="648.05" x2="452.87" y2="645.74"/>' +
'<line class="detail-lines" x1="483.61" y1="638.07" x2="452.57" y2="635.55"/>' +
'<line class="detail-lines" x1="486.06" y1="677.3" x2="453.95" y2="676.8"/>' +
'<line class="detail-lines" x1="485.19" y1="666.6" x2="453.55" y2="666.08"/>' +
'<line class="detail-lines" x1="488.05" y1="709.38" x2="455.34" y2="707.35"/>' +
'<line class="detail-lines" x1="487.32" y1="697.67" x2="454.99" y2="698.18"/>' +
'<line class="detail-lines" x1="489.31" y1="728.84" x2="473.48" y2="728.39"/>' +
'<line class="detail-lines" x1="204.07" y1="733.6" x2="182.38" y2="741.17"/>' +
'<line class="detail-lines" x1="205.79" y1="764.09" x2="180.88" y2="771.01"/>' +
'<line class="detail-lines" x1="205.17" y1="801.03" x2="179.82" y2="805.19"/>' +
'<line class="detail-lines" x1="204.23" y1="834.48" x2="178.32" y2="837.5"/>' +
'<polyline class="detail-lines" points="500.33 906.75 503.05 950.65 255.86 950.65 256.85 896.9"/>' +
'<line class="detail-lines" x1="48.74" y1="903.62" x2="50.2" y2="883.55"/>' +
'<polyline class="detail-lines" points="257.4 866.14 257.42 866.14 256.86 896.9 256.84 896.9"/>' +
'<polyline class="detail-lines" points="256.86 896.9 255.86 950.65 45.32 950.65 48.74 903.62"/>' +
'<polyline class="detail-lines" points="256.85 896.9 257.42 866.14 300.9 869.23"/>' +
'<path class="detail-lines" d="M682,985.39a0,0,0,0,0,0,0l1.79,28.78" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="474.31 764.4 491.64 767.22 493.57 798.26 498.54 877.98"/>' +
'<path class="detail-lines" d="M484.42,852.13" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="259.12" y1="772.92" x2="259.7" y2="741.17"/>' +
'<path class="detail-lines" d="M484.42,883.84" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M659,896.27" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="260.29" y1="709.63" x2="300.9" y2="714.1"/>' +
'<path class="detail-lines" d="M443.22,848.6" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="490.04 738.89 491.64 767.22 474.31 764.4"/>' +
'<path class="detail-lines" d="M656.44,844.66" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M673.56,846.32l-17.12-.72v-.94s30.13-37.88-172-23.13l-40.61-4.46.47-26,45.2,8.7s123.33-13.4,149.35,17.34" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="488.96" y1="724.09" x2="489.81" y2="735.81"/>' +
'<path class="detail-lines" d="M638.83,817.07c-26-30.74-149.35-17.34-149.35-17.34l-45.2-8.7.55-30.35,43.84,8.65c145.88-11.42,149,20.13,149,20.13l.49,10.63h32.35l2,31.43" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M638.18,800.09l-.49-10.63s-3.14-31.55-149-20.13l-43.84-8.65.59-31.92,43.25,10.74S636.89,724,637.3,769l31.32.37,1.91,30.76Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M668.62,769.33,637.3,769C636.89,724,488.67,739.5,488.67,739.5l-43.25-10.74.56-30,42.69,9.47c144-13.54,147.48,30,147.48,30l30.72,3.13Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M666.87,741.35l-30.72-3.13s-4.78-43.83-147.48-30L446,698.78l.55-30.74,42.14,10.24s134.23-20.21,146.06,30.64L665,711.39Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M665,711.39l-30.28-2.47c-11.83-50.85-146.06-30.64-146.06-30.64L446.53,668l.58-31.16,42,10.43c138.13-16,144.42,31,144.42,31l29.67,4.31Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M633.56,678.3s-6.46-46.66-144.42-31l-42-10.43.57-31.54,41.46,12.72s122.08-23.2,143.37,29.63l28.81,4.22,1.91,30.7Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M661.32,651.91l-28.81-4.22c-21.29-52.83-143.37-29.63-143.37-29.63l-41.46-12.72.58-31.92,40.88,11.85c136.8-16.13,142.18,32.46,142.18,32.46l28.28,6.54Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M659.6,624.27l-28.28-6.54s-5.38-48.59-142.18-32.46l-40.88-11.85.57-30.76,40.31,12.26s119.77-21.33,141.07,35.83l27.68,5.91Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M656.35,572.11l1.54,24.55-27.68-5.91c-21.3-57.16-141.07-35.83-141.07-35.83l-40.31-12.26.44-23.67,48.31,12.81c112-12.81,120.51,28.76,120.51,28.76" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M449.27,519l.46-25.22,48.2,15s100.72-17.39,119.26,26.76l37.51,9.92,1.67,26.88-38.14-9.73" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M654.7,545.47l-37.51-9.92c-18.54-44.15-119.26-26.76-119.26-26.76l-48.2-15,.46-25.24L498,483.78C617.46,469.58,616,511.9,616,511.9l37.34,11.83Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M653.34,523.73,616,511.9s1.46-42.32-118-28.12l-47.76-15.25.5-26.81,46.8,17.78S589.31,436,614.94,485.31l36.91,14.44Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M651.85,499.75l-36.91-14.44C589.31,436,497.49,459.5,497.49,459.5l-46.8-17.78.46-25.24,46.34,17.75C605.13,415.71,614,461.83,614,461.83L650.37,476Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M650.37,476,614,461.83s-8.91-46.12-116.55-27.6l-46.34-17.75.44-24L497,407.13C604.67,388.5,613,438.4,613,438.4l35.86,12.78Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M648.83,451.18,613,438.4s-8.3-49.9-115.93-31.27l-45.45-14.67.49-26.83,45.85,16.06c102.3-18.32,114.13,33.71,114.13,33.71l35.43,14.19Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M647.49,429.59,612.06,415.4s-11.83-52-114.13-33.71l-45.85-16.06.43-23.64,53.4,20.49S585,352.13,600.32,387.9v0l.21,2.95,45.84,20.71Z" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="416.23 252.46 443.91 263.91 443.91 283.83 462.06 291.31 462.85 304.15 417.01 283.44 416.8 280.49 416.8 280.47"/>' +
'<polyline class="detail-lines" points="415.61 224.89 443.91 238.78 443.91 263.91 416.23 252.46"/>' +
'<path class="detail-lines" d="M504.83,291.21l-32.92-14.29v-26l1.19.48,7.18,2.83,4,1.59,6.33,2.51,10.68,4.21,3.53,1.4s33.26-4.28,55.81,1.29c.59.14,1.17.3,1.74.46,5.62,1.56,10.47,3.78,13.81,6.91,16.94,10.26,21.89,20.71,21.89,20.71" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="414.56 199.46 443.91 212.85 443.91 238.78 415.61 224.89"/>' +
'<polyline class="detail-lines" points="307.35 112.04 307.1 127.3 306.41 127.3 289.57 143.94 288.39 143.47 288.44 143.48"/>' +
'<polygon class="detail-lines" points="288.39 143.47 288.39 169.48 132.85 364.25 132.85 344.94 288.44 143.49 288.39 143.47"/>' +
'<polygon class="detail-lines" points="288.39 169.48 288.39 195.52 274.19 211.06 269.46 208.93 132.85 373.32 132.85 364.25 288.39 169.48"/>' +
'<polygon class="detail-lines" points="269.46 208.92 268.99 234.55 95.92 438.04 96.58 426.54 97.31 414.79 132.85 373.32 269.46 208.92"/>' +
'<polygon class="detail-lines" points="268.99 234.55 268.56 258.2 94.76 458.15 95.92 438.04 268.99 234.55"/>' +
'<polygon class="detail-lines" points="268.56 258.2 268.07 285.03 93.64 477.83 94.76 458.15 268.56 258.2"/>' +
'<polygon class="detail-lines" points="268.07 285.03 267.63 309.05 92.6 495.96 93.64 477.83 268.07 285.03"/>' +
'<polygon class="detail-lines" points="267.63 309.05 267.17 334.29 91.54 514.5 92.6 495.96 267.63 309.05"/>' +
'<polygon class="detail-lines" points="267.17 334.29 266.67 361.1 90.42 533.81 91.54 514.5 267.17 334.29"/>' +
'<polygon class="detail-lines" points="266.67 361.1 266.21 386.34 89.33 552.72 90.42 533.81 266.67 361.1"/>' +
'<polygon class="detail-lines" points="266.21 386.34 265.75 411.56 88.3 570.85 89.33 552.72 266.21 386.34"/>' +
'<polygon class="detail-lines" points="265.75 411.56 265.31 435.23 87.42 586.25 88.3 570.85 265.75 411.56"/>' +
'<polygon class="detail-lines" points="265.31 435.23 264.74 465.98 69.14 622.95 70.79 600.39 87.42 586.25 87.42 586.25 265.31 435.23"/>' +
'<polygon class="detail-lines" points="264.74 465.98 264.16 497.91 67.71 642.67 69.15 622.95 264.74 465.98"/>' +
'<polygon class="detail-lines" points="264.16 497.91 263.59 529.44 263.57 529.44 65.96 666.69 67.71 642.67 264.16 497.91"/>' +
'<polygon class="detail-lines" points="263.59 529.44 263.01 560.61 64.53 686.41 65.96 666.69 263.57 529.44 263.59 529.44"/>' +
'<polygon class="detail-lines" points="263.01 560.61 262.46 591.35 262.44 591.35 63.08 706.5 64.53 686.41 263.01 560.61"/>' +
'<polygon class="detail-lines" points="262.46 591.35 261.9 621.33 61.52 727.78 63.08 706.5 262.44 591.35 262.46 591.35"/>' +
'<polygon class="detail-lines" points="261.9 621.33 261.31 653.25 60.09 747.48 61.52 727.78 261.9 621.33"/>' +
'<polygon class="detail-lines" points="261.31 653.25 260.76 683.6 58.55 768.8 60.09 747.48 261.31 653.25"/>' +
'<polyline class="detail-lines" points="57.45 783.85 58.55 768.8 260.76 683.6 260.29 709.63"/>' +
'<path class="detail-lines" d="M656.44,845.86" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="176.35 742.32 53.07 786.77 53.07 785.37 176.2 740.36 176.35 742.32"/>' +
'<polygon class="detail-lines" points="288.39 195.52 288.39 217.49 274.19 211.06 288.39 195.52"/>' +
'<path class="detail-lines" d="M555.69,108.43v96.22a49.71,49.71,0,0,0-14.57-3.17Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M494.73,221.5c2.45-4.53,7.88-9.14,7.88-9.14,16.48-12.17,32.33-11.49,37.06-11,.94.11,1.43.22,1.43.22l0-.15a49.71,49.71,0,0,1,14.57,3.17v59.27l4.95,1.29c-22.55-5.57-55.81-1.29-55.81-1.29l-3.53-1.4-10.68-4.21-6.33-2.51-4-1.59-7.18-2.83,16.83-16.65h.69l.25-15.26" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="314.89 153.95 314.89 153.1 314.89 116.27 307.35 112.04 216.06 230.82 216.06 235.74 216.06 237.29"/>' +
'<path class="detail-lines" d="M576.19,225.68v46.9c-3.34-3.13-8.19-5.35-13.81-6.91l0-6.26v-9l0-10.17,0-11,0-21.07.26-99.7v99.9C568.3,212.27,576.19,225.68,576.19,225.68Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M541.12,201.48c-.48,0-1,0-1.45-.07" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M562.78,208.33l-.26-.2" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M562.47,229.2a43.49,43.49,0,0,1,13.72,15" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M490.62,234.73h8.19c26-15.6,44.5-14.73,56.88-9.3" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="307.1 150.88 307.1 148.37 307.1 137.75 307.1 127.3"/>' +
'<line class="detail-lines" x1="288.44" y1="143.48" x2="288.34" y2="143.45"/>' +
'<path class="detail-lines" d="M600.32,387.9c-14.5-35-94.41-25.42-94.41-25.42L452.51,342l.48-25.63,4.72,2.14,14.2,6.42L505,338.68c82.51-9.62,94.87,26.95,94.87,26.95" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M599.34,343.68c-21.29-43.76-94.2-25.24-94.2-25.24L471.91,303v-26l32.92,14.29s80.64-13.44,94,30.31" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M576.19,251.38a50.41,50.41,0,0,0-13.74-11.18" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M480.28,254.21l10.34-9h8.49s29.35-17.76,56.58-8" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M576.19,259.58a50.87,50.87,0,0,0-13.78-9.21" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M555.69,247.88c-28.08-8.3-58.06,7.92-58.06,7.92H484.29" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M576.19,268.14a43.44,43.44,0,0,0-13.79-8.73" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M501.3,262.52s28.94-11.73,54.39-5.29" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M598.08,293.29" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="321.3" y1="156.48" x2="321.94" y2="273.01"/>' +
'<path class="detail-lines" d="M598.08,293.29" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="414.56 185.85 417.01 283.44 417.31 290.32"/>' +
'<line class="detail-lines" x1="428.54" y1="307.97" x2="435.12" y2="465.98"/>' +
'<line class="detail-lines" x1="446.68" y1="483.32" x2="455.74" y2="717.65"/>' +
'<line class="detail-lines" x1="314.41" y1="274.26" x2="314.41" y2="446.03"/>' +
'<line class="detail-lines" x1="305.62" y1="447.25" x2="305.62" y2="713.43"/>' +
'<path class="detail-lines" d="M498.41,223.7s26.34-24.62,57.28-11" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M562.38,216.14s8.91,6.7,13.81,15.57" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M494.67,221.61" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="300.9" y1="721.23" x2="300.9" y2="950.65"/>' +
'<line class="detail-lines" x1="379.26" y1="1.32" x2="372.17" y2="1.32"/>' +
'<polyline class="detail-lines" points="55.94 804.66 57.07 789.6 53.07 786.77"/>' +
'<line class="detail-lines" x1="467.57" y1="722.62" x2="488.91" y2="723.3"/>' +
'<path class="detail-lines" d="M484.42,823.83s184.38-17.51,172,20.83l10.72,213.42" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="260.29" y1="718.53" x2="259.7" y2="741.17"/>' +
'<path class="detail-lines" d="M386.78,840.12l3.71,4.18L446,825l38.44,3.67s74.91-9,127.91-3.59c20,1.92,43.46,6.7,44.11,19.58" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M446,825a22.28,22.28,0,0,0-2.17-5.5v-2.43L386.73,838l0,2.1,57-20.62,40.61,4.33" transform="translate(-183.52 -107.43)"/>' +
'<polyline class="detail-lines" points="177.11 872.89 182.38 741.17 176.2 740.36"/>' +
'<polyline class="detail-lines" points="176.34 742.13 179.14 746.92 177.64 747.48 57.07 789.6"/>' +
'<line class="detail-lines" x1="179.14" y1="746.92" x2="173.87" y2="873.02"/>' +
'<line class="detail-lines" x1="206.96" y1="736.86" x2="203.21" y2="871.16"/>' +
'<path class="detail-lines" d="M362.58,900.2" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="206.06" y1="757.89" x2="259.7" y2="741.17"/>' +
'<path class="detail-lines" d="M239.46,912.1" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="259.7" y1="741.17" x2="259.12" y2="772.92"/>' +
'<polyline class="detail-lines" points="54.55 823.61 53.07 844.05 50.2 883.55 49.98 883.56"/>' +
'<path class="detail-lines" d="M362.75,900.16" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="305.7" y1="150.32" x2="307.1" y2="225.26"/>' +
'<line class="detail-lines" x1="313.97" y1="153.58" x2="314.89" y2="228.5"/>' +
'<line class="detail-lines" x1="297.5" y1="147.07" x2="298.29" y2="221.6"/>' +
'<path class="detail-lines" d="M656.37,572.35" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M449.27,519" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M652.92,841.18V863a37,37,0,0,0-7-4c-.3-14.85-1-21.93-1-21.93S648.23,837.59,652.92,841.18Z" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="465.42" y1="731.16" x2="465.71" y2="753.14"/>' +
'<path class="detail-lines" d="M645.6,847.77s5.82,2.22,7.32,3.35" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M634.73,832.08s-11.94-2.94-17.3-3.45v23.89s13.77,2,18.11,3.82C635.33,839,634.73,832.08,634.73,832.08Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M633.37,834l-14.29-2.79v19.5s12.43,2.27,14.81,3C633.73,842,633.37,834,633.37,834Z" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="442.96" y1="725.22" x2="442.96" y2="744.68"/>' +
'<line class="detail-lines" x1="435.56" y1="733.58" x2="450.17" y2="736.36"/>' +
'<path class="detail-lines" d="M584,825.5s15.1.41,22.71,1.17c0,12,.67,24.14.67,24.14s-16.75-1.19-22.69-1.87C584.64,834.5,584,825.5,584,825.5Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="402.43 720 421.62 720.82 421.93 741.17 402.74 739.98 402.43 720"/>' +
'<line class="detail-lines" x1="412.12" y1="720.41" x2="412.43" y2="740.34"/>' +
'<path class="detail-lines" d="M605.3,838.59s-15.41-1-19.35-1.09" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M537.41,825.5s23-.86,25.84-.42c.35,9,0,23.07,0,23.07s-18,.21-25.21,0C538,834,537.41,825.5,537.41,825.5Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="355.71 719.56 377.98 719.24 377.98 738.89 356.06 739.25 355.71 719.56"/>' +
'<line class="detail-lines" x1="366.84" y1="719.4" x2="366.84" y2="738.89"/>' +
'<line class="detail-lines" x1="355.88" y1="729.24" x2="377.98" y2="729.24"/>' +
'<path class="detail-lines" d="M515.89,826.84l.58,22-23.21,1.21L493,828.59S512.2,826.79,515.89,826.84Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="310.86 722.31 330.79 720.65 331.29 739.76 311.27 741.17 310.86 722.31"/>' +
'<line class="detail-lines" x1="321.08" y1="721.46" x2="321.44" y2="740.45"/>' +
'<line class="detail-lines" x1="331.04" y1="730.15" x2="311.07" y2="731.72"/>' +
'<polygon class="detail-lines" points="296.92 722.02 275.79 720.01 275.21 740.88 296.36 742.66 296.92 722.02"/>' +
'<polygon class="detail-lines" points="294.9 723.16 277.7 721.52 277.19 738.89 294.9 740.88 294.9 723.16"/>' +
'<line class="detail-lines" x1="286.35" y1="722.35" x2="286.35" y2="739.88"/>' +
'<line class="detail-lines" x1="277.44" y1="730.15" x2="294.9" y2="731.96"/>' +
'<path class="detail-lines" d="M501.49,851.08v58.78l4.84-.22v-58.8Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M548,849.81v58.84h4.84V849.82Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M594.8,852l1.73,58,3.75.25-1.71-57.81C597.34,852.28,596.09,852.12,594.8,852Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M625.87,857.66,627.51,913l3.1.43-1.64-55C628,858.17,627,857.92,625.87,857.66Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M648.27,865l1.55,52,1.88.47-1.53-51.5C649.6,865.61,649,865.29,648.27,865Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M491.16,915.76v88.71l32,1.21v-90.5C508.24,915.26,496.72,915.58,491.16,915.76Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M536.87,915.17v91l32,1.22V915.73C557.62,915.38,546.78,915.22,536.87,915.17Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M584.28,916.34V1008l28.41,1.08V918.19C603.32,917.39,593.75,916.79,584.28,916.34Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M619.87,918.84v90.51l22,.83-2.08-89C633.41,920.3,626.72,919.51,619.87,918.84Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M656,923.92c-3-.59-6.13-1.15-9.33-1.67l2.47,88.21,9.92.37Z" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="329.22" y1="807.85" x2="329.22" y2="897.86"/>' +
'<line class="detail-lines" x1="319.11" y1="808.02" x2="319.11" y2="897.43"/>' +
'<line class="detail-lines" x1="307.64" y1="838.59" x2="339.64" y2="838.94"/>' +
'<line class="detail-lines" x1="307.64" y1="869.38" x2="339.64" y2="870.15"/>' +
'<line class="detail-lines" x1="363.74" y1="807.74" x2="364.51" y2="899.19"/>' +
'<line class="detail-lines" x1="374.94" y1="808.02" x2="375.75" y2="899.62"/>' +
'<line class="detail-lines" x1="353.35" y1="870.15" x2="385.35" y2="871.44"/>' +
'<line class="detail-lines" x1="353.35" y1="838.94" x2="385.35" y2="838.94"/>' +
'<path class="detail-lines" d="M584.28,948.37s21.23.23,28.41,1.28" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M584.28,979.37s17,.15,28.41,1" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="410.02" y1="809.39" x2="411.28" y2="900.96"/>' +
'<line class="detail-lines" x1="419.13" y1="809.98" x2="421.15" y2="900.96"/>' +
'<line class="detail-lines" x1="442.35" y1="812.03" x2="443.66" y2="901.64"/>' +
'<line class="detail-lines" x1="450.09" y1="812.94" x2="452.01" y2="902.75"/>' +
'<path class="detail-lines" d="M619.87,950.71a148.18,148.18,0,0,1,20.7,2" transform="translate(-183.52 -107.43)"/>' +
'<line class="detail-lines" x1="436.35" y1="873.25" x2="457.72" y2="874.21"/>' +
'<line class="detail-lines" x1="466.47" y1="815.37" x2="468.82" y2="902.75"/>' +
'<line class="detail-lines" x1="470.21" y1="816.05" x2="473.49" y2="903.32"/>' +
'<line class="detail-lines" x1="464.75" y1="874.58" x2="474.53" y2="874.58"/>' +
'<line class="detail-lines" x1="464.03" y1="846.07" x2="473.57" y2="847.35"/>' +
'<polyline class="detail-lines" points="473.11 741.17 484.76 742.56 484.76 766.17"/>' +
'<polyline class="detail-lines" points="473.11 743.69 482.62 744.68 482.62 765.25"/>' +
'<line class="detail-lines" x1="482.62" y1="754.47" x2="473.48" y2="753.67"/>' +
'<line class="detail-lines" x1="476.6" y1="743.69" x2="476.97" y2="764.83"/>' +
'<polyline class="detail-lines" points="474.07 734.95 496.35 736.36 496.35 737.23 473.77 735.74"/>' +
'<line class="detail-lines" x1="496.35" y1="737.22" x2="489.92" y2="738.89"/>' +
'<line class="detail-lines" x1="267.69" y1="718.07" x2="266.3" y2="866.77"/>' +
'<polygon class="detail-lines" points="249.92 724.58 257.93 721.74 257.69 739.98 249.92 742.12 249.92 724.58"/>' +
'<polygon class="detail-lines" points="235.97 729.51 243.99 726.67 243.99 744.68 235.97 747.06 235.97 729.51"/>' +
'<polygon class="detail-lines" points="220.23 734.77 228.24 731.93 228.24 749.53 220.23 752.32 220.23 734.77"/>' +
'<polygon class="detail-lines" points="206.97 739.07 214.98 736.23 214.75 753.89 206.11 756.62 206.97 739.07"/>' +
'<line class="detail-lines" x1="142.89" y1="777.62" x2="142.89" y2="762.76"/>' +
'<line class="detail-lines" x1="139.94" y1="763.77" x2="139.94" y2="778.53"/>' +
'<line class="detail-lines" x1="87.66" y1="794.8" x2="87.66" y2="781.67"/>' +
'<line class="detail-lines" x1="85.03" y1="782.57" x2="85.03" y2="795.61"/>' +
'<line class="detail-lines" x1="120.44" y1="784.6" x2="120.44" y2="770.45"/>' +
'<line class="detail-lines" x1="117.67" y1="771.4" x2="117.67" y2="785.46"/>' +
'<line class="detail-lines" x1="131.54" y1="781.15" x2="131.54" y2="766.64"/>' +
'<line class="detail-lines" x1="128.84" y1="767.57" x2="128.84" y2="781.99"/>' +
'<line class="detail-lines" x1="109.26" y1="788.08" x2="109.26" y2="774.27"/>' +
'<line class="detail-lines" x1="106.52" y1="775.21" x2="106.52" y2="788.93"/>' +
'<line class="detail-lines" x1="79.06" y1="797.47" x2="79.06" y2="784.62"/>' +
'<line class="detail-lines" x1="76.69" y1="785.43" x2="76.69" y2="798.21"/>' +
'<line class="detail-lines" x1="65.83" y1="801.59" x2="65.83" y2="789.15"/>' +
'<line class="detail-lines" x1="63.73" y1="789.87" x2="63.73" y2="802.24"/>' +
'<line class="detail-lines" x1="71.62" y1="799.79" x2="71.62" y2="787.17"/>' +
'<line class="detail-lines" x1="69.57" y1="787.87" x2="69.57" y2="800.42"/>' +
'<line class="detail-lines" x1="98.12" y1="791.54" x2="98.12" y2="778.09"/>' +
'<line class="detail-lines" x1="95.1" y1="779.12" x2="95.1" y2="792.48"/>' +
'<line class="detail-lines" x1="154.39" y1="774.04" x2="154.39" y2="758.82"/>' +
'<line class="detail-lines" x1="151.3" y1="759.88" x2="151.3" y2="775"/>' +
'<polygon class="detail-lines" points="174.58 751.9 166.37 754.72 166.37 770.31 174.78 767.7 174.78 751.84 174.58 751.9"/>' +
'<polygon class="detail-lines" points="154.39 758.82 154.39 774.04 162.79 771.43 162.79 755.94 154.39 758.82"/>' +
'<polygon class="detail-lines" points="142.89 762.76 142.89 777.62 151.3 775 151.3 759.88 142.89 762.76"/>' +
'<polygon class="detail-lines" points="131.54 766.64 131.54 781.15 139.94 778.53 139.94 763.77 131.54 766.64"/>' +
'<polygon class="detail-lines" points="120.44 770.45 120.44 784.6 128.84 781.99 128.84 767.57 120.44 770.45"/>' +
'<polygon class="detail-lines" points="109.26 774.27 109.26 788.08 117.67 785.46 117.67 771.4 109.26 774.27"/>' +
'<polygon class="detail-lines" points="98.12 778.09 98.12 791.54 106.52 788.93 106.52 775.21 98.12 778.09"/>' +
'<polygon class="detail-lines" points="87.66 781.67 87.66 794.8 95.1 792.48 95.1 779.12 87.66 781.67"/>' +
'<polygon class="detail-lines" points="79.06 784.62 79.06 797.47 85.03 795.61 85.03 782.57 79.06 784.62"/>' +
'<polygon class="detail-lines" points="71.62 787.16 71.62 799.78 76.69 798.21 76.69 785.43 71.62 787.16"/>' +
'<polygon class="detail-lines" points="65.83 789.15 65.83 801.59 69.57 800.42 69.57 787.87 65.83 789.15"/>' +
'<polygon class="detail-lines" points="61.03 790.79 61.03 803.08 63.73 802.24 63.73 789.87 61.03 790.79"/>' +
'<line class="detail-lines" x1="54.54" y1="823.8" x2="55.93" y2="804.67"/>' +
'<polyline class="detail-lines" points="259.12 773.27 258.57 803.07 257.42 866.14"/>' +
'<polyline class="detail-lines" points="66.23 882.22 68.52 820.12 65.81 820.8 62.8 882.5"/>' +
'<polygon class="detail-lines" points="243.99 776.25 243.99 867.59 249.92 867.11 249.92 774.76 243.99 776.25"/>' +
'<polygon class="detail-lines" points="233.96 778.75 232.91 868.5 239.22 867.98 239.22 777.44 233.96 778.75"/>' +
'<polygon class="detail-lines" points="224.1 781.22 223.27 869.3 228.26 868.89 229.11 779.97 224.1 781.22"/>' +
'<polygon class="detail-lines" points="214.19 783.7 213.57 870.32 218.55 869.96 219.08 782.75 214.19 783.7"/>' +
'<polygon class="detail-lines" points="207.15 785.46 205.79 870.9 209.7 870.57 210.82 784.58 207.15 785.46"/>' +
'<polygon class="detail-lines" points="170.83 794.54 168.49 873.81 171.61 873.55 174.53 793.61 170.83 794.54"/>' +
'<polygon class="detail-lines" points="163.08 796.48 160.78 874.44 163.91 874.18 166.79 795.55 163.08 796.48"/>' +
'<polygon class="detail-lines" points="155.11 798.47 152.84 875.09 155.98 874.84 158.8 797.55 155.11 798.47"/>' +
'<polygon class="detail-lines" points="147.48 800.38 146.62 875.61 149.77 875.35 151.16 799.46 147.48 800.38"/>' +
'<polygon class="detail-lines" points="140.23 802.19 138.48 876.27 142.34 875.96 143.77 801.31 140.23 802.19"/>' +
'<polygon class="detail-lines" points="132.9 804.02 131.58 876.84 134.96 876.56 136.39 803.15 132.9 804.02"/>' +
'<polygon class="detail-lines" points="126.41 805.65 124.69 877.41 128.09 877.13 129.84 804.79 126.41 805.65"/>' +
'<polygon class="detail-lines" points="119.83 807.29 117.43 878.01 121.14 877.7 123.09 806.48 119.83 807.29"/>' +
'<polygon class="detail-lines" points="113.5 808.88 110.96 878.54 114.15 878.28 116.48 808.13 113.5 808.88"/>' +
'<polygon class="detail-lines" points="107.37 810.41 105.05 879.02 107.89 878.79 110.54 809.62 107.37 810.41"/>' +
'<polygon class="detail-lines" points="101.56 811.86 99.22 879.5 101.67 879.3 104.22 811.2 101.56 811.86"/>' +
'<polygon class="detail-lines" points="95.69 813.33 93.41 879.98 96.03 879.77 98.31 812.67 95.69 813.33"/>' +
'<polygon class="detail-lines" points="89.88 814.78 87.65 880.46 90.15 880.25 92.44 814.14 89.88 814.78"/>' +
'<polygon class="detail-lines" points="84.46 816.14 82.34 880.9 84.72 880.7 86.89 815.53 84.46 816.14"/>' +
'<polygon class="detail-lines" points="78.78 817.56 76.61 881.37 78.73 881.19 81.66 816.84 78.78 817.56"/>' +
'<polygon class="detail-lines" points="73.86 818.79 71.47 881.79 73.67 881.61 76.23 818.2 73.86 818.79"/>' +
'<polygon class="detail-lines" points="68.52 820.12 66.23 882.22 68.73 882.02 71.14 819.47 68.52 820.12"/>' +
'<polygon class="detail-lines" points="63.19 821.46 60.42 882.7 62.8 882.5 65.81 820.8 63.19 821.46"/>' +
'<line class="detail-lines" x1="257.4" y1="866.77" x2="50.2" y2="883.55"/>' +
'<polygon class="detail-lines" points="291.2 950.65 291.2 899.19 272.71 898.33 272.71 950.65 291.2 950.65"/>' +
'<polygon class="detail-lines" points="231.06 897.73 231.06 950.65 204.17 950.65 204.17 898.62 231.06 897.73"/>' +
'<polygon class="detail-lines" points="192.63 950.65 192.63 898.97 167.76 899.96 166.79 950.65 192.63 950.65"/>' +
'<path class="detail-lines" d="M340.32,1007.57l-.16,50.51H310.79v-49.56l-2.63.08s0-15.1,9.35-20.27c9.94-5.53,24.37-1.42,25.79,19.14Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M310.79,1008.52a35.22,35.22,0,0,1,3.7-14c3.67-7.33,13.36-8.92,18.93-6.17" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="117.99 901.09 117.43 950.65 92.44 950.65 93.41 902.18 117.99 901.09"/>' +
'<polygon class="detail-lines" points="83.61 902.45 82.34 950.65 57.45 950.65 57.45 950.65 59.31 903.28 83.61 902.45"/>' +
'<path class="detail-lines" d="M461.57,988.3a3.66,3.66,0,1,0,3.65-4A3.85,3.85,0,0,0,461.57,988.3Z" transform="translate(-183.52 -107.43)"/>' +
'<ellipse class="detail-lines" cx="229.12" cy="883.09" rx="3.79" ry="5.09"/>' +
'<path class="detail-lines" d="M385.76,992.32c0,2.67-1.61,4.83-3.6,4.83s-3.6-2.16-3.6-4.83,1.61-4.84,3.6-4.84S385.76,989.65,385.76,992.32Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M355.25,993.88c0,2.41-1.45,4.36-3.24,4.36s-3.25-2-3.25-4.36,1.45-4.36,3.25-4.36S355.25,991.48,355.25,993.88Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M303.73,998.24c0,2.06-1.24,3.73-2.78,3.73s-2.78-1.67-2.78-3.73,1.25-3.73,2.78-3.73S303.73,996.18,303.73,998.24Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M275.28,999.69c0,2.07-1.24,3.74-2.78,3.74s-2.78-1.67-2.78-3.74S271,996,272.5,996,275.28,997.63,275.28,999.69Z" transform="translate(-183.52 -107.43)"/>' +
'<path class="detail-lines" d="M246.21,1001.52c0,1.69-1,3.05-2.27,3.05s-2.27-1.36-2.27-3.05,1-3,2.27-3S246.21,999.84,246.21,1001.52Z" transform="translate(-183.52 -107.43)"/>' +
'<polygon class="detail-lines" points="307.6 900.04 307.22 950.65 339.64 950.65 339.56 901.34 307.6 900.04"/>' +
'<polygon class="detail-lines" points="353.35 901.86 353.35 950.65 385.35 950.65 385.35 903.01 353.35 901.86"/>' +
'<polygon class="detail-lines" points="400.76 903.32 429.31 904.51 429.31 950.65 400.76 950.65 400.76 903.32"/>' +
'<polygon class="detail-lines" points="458.39 905.45 458.39 950.65 436.35 950.65 436.35 904.74 458.39 905.45"/>' +
'<polygon class="detail-lines" points="465.68 905.68 465.68 950.65 477.06 950.65 475.54 905.99 465.68 905.68"/>' +
'</g>' +
'<g id="outline">' +
'<path class="building-outline" d="M670.53,800.25l1.9,30.48.05.79.85,11.68,6.54.6v.9l-6.31,1.62,1.61,28.34,1.68,27.06h0l.24,4L678.67,931l1.77,28.33,1.61,26h0a0,0,0,0,0,0,0l1.79,28.78,2.72,43.89H228.84l3.42-47L233.72,991l1.4-19.3h0l1.47-20.19h0L238.07,931l1.39-18.94L240.54,897l-3.93-2.78v-1.44l4.37-1.48,1.09-15,1.54-21.31L245,835.21l1.56-21.27,1.45-20.09h0l1.43-19.73,1.75-24,1.44-19.72h0l1.64-22.57,16.63-14.13.88-15.41h0l1-18.13,1.09-18.91,1.12-19.31,1.06-18.53,1-18.13h0l1.12-19.69,1.16-20.11,1.39-23.25,35.54-41.46h0V452.37l83.2-109.2v-4.92l91.29-118.78,3.86,2c2.45-4.53,7.88-9.14,7.88-9.14,16.48-12.17,32.33-11.49,37.06-11,.94.11,1.43.22,1.43.22l0-.15h0l14.57-93v.32h7.09v99.58c5.52,3.94,13.41,17.35,13.41,17.35v46.9h0c16.94,10.26,21.89,20.71,21.89,20.71l.36,13.77,29,13.23v71l18.15,7.48.79,12.84h0l1.12,18,1.34,21.59L650.37,476l1.48,23.75,1.49,24h0l1.36,21.74h0l1.74,27.95h0l1.45,23.24,1.71,27.61,1.72,27.64,1.91,30.7L665,711.39l1.86,30,1.75,28,1.91,30.76Z" transform="translate(-183.52 -107.43)"/>' +
'<line class="building-outline" x1="2.31" y1="950.64" x2="531.31" y2="950.64"/>' +
'<path class="building-outline-lite" d="M270.94,693.69h0l177.89-151,40.31,12.26s119.77-21.33,141.07,35.83l27.68,5.91" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M576.19,272.58c-3.34-3.13-8.19-5.35-13.81-6.91l-6.69-1.75,4.95,1.29c-22.55-5.57-55.81-1.29-55.81-1.29l-3.53-1.4-10.68-4.21-6.33-2.51-4-1.59-7.18-2.83-1.19-.48,0,0L316.38,452.37" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M600.32,387.9" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M278.28,565.58l173.8-200,45.85,16.06c102.3-18.32,114.13,33.71,114.13,33.71l35.43,14.19" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M638.83,817.07" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M484.42,823.83" transform="translate(-183.52 -107.43)"/>' +
'<path class="building-outline-lite" d="M679.87,843.8l-22.28-1.41,0-.06c2.62-8-1.88-33.3-173.19-20.8l-40.61-4.46h0L386.73,838l0,2.1.81.91L365.9,848.6l-6.18-.8-123.13,45" transform="translate(-183.52 -107.43)"/>' +
'</g>' +
'</svg>'