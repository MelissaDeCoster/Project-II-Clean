// // Store our API endpoint inside queryUrl
var queryUrlNad = "/api/games";


// set the dimensions and margins of the graph
var margin = {top: 10, right: 50, bottom: 70, left: 50},
    width = 860 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

// // parse the date / time
// var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var navygoals = d3.line()
    .x(function(d) { return x(d.Game_id); })
    .y(function(d) { return y(d.Navy_goals); });

// define the 2nd line
var opponentgoals = d3.line()
    .x(function(d) { return x(d.Game_id); })
    .y(function(d) { return y(d.opponent_goals); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(".img-overlay-wrap").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          
// Get the data
d3.json(queryUrlNad, function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.Game_id = +d.Game_id;
      d.Navy_goals = +d.Navy_goals;
      d.opponent_goals = +d.opponent_goals;

  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.Game_id; }));
  y.domain([0, d3.max(data, function(d) {
	  return Math.max(d.Navy_goals, d.opponent_goals); })]);

  // Add the navygoals path.
  svg.append("path")
      .data([data])
      .attr("class", "rect")
      .attr("id", "blueLine")
      .attr("d", navygoals);

  // Add the opponentgoals path.
  svg.append("path")
      .data([data])
      .attr("class", "rect")
      .style("stroke", "red")
      .attr("id", "redLine")
      .attr("d", opponentgoals);

  // Add the X Axis
  svg.append("g")
      .attr("class", "gameaxis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));


  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y))
      .attr("class", "goalaxis");

      // Add the blue line title
svg.append("text")
.attr("x", 0)             
.attr("y", height + margin.top + 30)    
.attr("class", "goallegend1")
.style("fill", "steelblue")         
.on("click", function(){
    // Determine if current line is visible
    var active   = blueLine.active ? false : true,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    d3.select("#blueLine").style("opacity", newOpacity);
    // d3.select("#blueAxis").style("opacity", newOpacity);
    // Update whether or not the elements are active
    blueLine.active = active;
})
.text("Navy Goals");

// Add the red line title
svg.append("text")
.attr("x", 0)             
.attr("y", height + margin.top + 50)    
.attr("class", "goallegend")
.style("fill", "red")         
.on("click", function(){
    // Determine if current line is visible
    var active   = redLine.active ? false : true ,
      newOpacity = active ? 0 : 1;
    // Hide or show the elements
    d3.select("#redLine").style("opacity", newOpacity);
    // d3.select("#blueAxis").style("opacity", newOpacity);
    // Update whether or not the elements are active
    redLine.active = active;
})
.text("Opponent Goals");


});

// function drawVisualization() {
//    $.get("game_summary_stats.csv", function(csvString) {
//       // transform the CSV string into a 2-dimensional array
//       var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

//       // this new DataTable object holds all the data
//       var data = new google.visualization.arrayToDataTable(arrayData);
//       // CAPACITY - En-route ATFM delay - YY - CHART
//       var crt_ertdlyYY = new google.visualization.ChartWrapper({
//          chartType: 'BubbleChart',
//          containerId: 'correlations',
//          dataTable: data,
//          options:{
//             width: 450, height: 160,
//             title: 'EU-wide en-route ATFM delays (year to date)',
//             titleTextStyle : {color: 'grey', fontSize: 11},
//          }
//       });
//       correlations.draw();
//    });
// }
// google.setOnLoadCallback(drawVisualization)