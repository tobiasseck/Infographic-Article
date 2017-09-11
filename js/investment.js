//Set up the data
investment = [
{"investee": "Gamer Sensei","datum": "08\/30\/17","summe": 4.0,"investors": 3},
{"investee": "SLIVER.tv","datum": "08\/23\/17","summe": 9.8,"investors": 8},
{"investee": "GawkBox","datum": "08\/10\/17","summe": 3.7,"investors": 4},
{"investee": "Smash.gg","datum": "08\/02\/17","summe": 11.0,"investors": 5},
{"investee": "FanAI","datum": "07\/27\/17","summe": 1.8,"investors": 12},
{"investee": "O'Gaming TV","datum": "07\/25\/17","summe": 2.5,"investors": 1},
{"investee": "Matcherino","datum": "07\/10\/17","summe": 1.5,"investors": 3},
{"investee": "Super League Gaming","datum": "06\/29\/17","summe": 15.0,"investors": 4},
{"investee": "rfrsh entertainment","datum": "06\/28\/17","summe": 8.1,"investors": 3},
{"investee": "Pocket Gems","datum": "05\/11\/17","summe": 90.0,"investors": 1},
{"investee": "DOJO MADNESS","datum": "04\/05\/17","summe": 6.0,"investors": 5},
{"investee": "SLIVER.tv","datum": "03\/17\/17","summe": 16.0,"investors": 5},
{"investee": "Wavedash Games","datum": "03\/02\/17","summe": 6.0,"investors": 7},
{"investee": "Challengermode","datum": "02\/24\/17","summe": 1.3,"investors": 3},
{"investee": "rfrsh entertainment","datum": "12\/22\/16","summe": 4.32,"investors": 3},
{"investee": "boom.tv","datum": "12\/13\/16","summe": 3.5,"investors": 9},
{"investee": "Super League Gaming","datum": "10\/26\/16","summe": 5,"investors": 2},
{"investee": "Critical Force","datum": "09\/05\/16","summe": 4.46,"investors": 1},
{"investee": "SLIVER.tv","datum": "08\/24\/16","summe": 6.2,"investors": 6},
{"investee": "Ninjas in Pyjamas","datum": "08\/23\/16","summe": 0.6,"investors": 1},
{"investee": "Wangyudashi","datum": "08\/10\/16","summe": 23,"investors": 1},
{"investee": "Strafe","datum": "07\/15\/16","summe": 1.53,"investors": 4},
{"investee": "Gamer Sensei","datum": "06\/09\/16","summe": 2.3,"investors": 5},
{"investee": "DOJO MADNESS","datum": "05\/19\/16","summe": 4.5,"investors": 4},
{"investee": "kek.tv","datum": "05\/04\/16","summe": 2.5,"investors": 11},
{"investee": "Zengaming","datum": "04\/21\/16","summe": 2.8,"investors": 1},
{"investee": "Super League Gaming","datum": "04\/20\/16","summe": 5.05,"investors": 10},
{"investee": "Smash.gg","datum": "04\/01\/16","summe": 3,"investors": 2},
{"investee": "SLIVER.tv","datum": "03\/30\/16","summe": 4,"investors": 8},
{"investee": "Matcherino","datum": "12\/17\/15","summe": 1.25,"investors": 3},
{"investee": "Azubu","datum": "12\/09\/15","summe": 55,"investors": 2},
{"investee": "hitbox Entertainment","datum": "11\/02\/15","summe": 4,"investors": 3},
{"investee": "Battle of Glory","datum": "11\/01\/15","summe": 0.1272,"investors": 2},
{"investee": "Super League Gaming","datum": "10\/16\/15","summe": 3.25,"investors": 1},
{"investee": "ESforce Holding","datum": "10\/15\/15","summe": 100,"investors": 1},
{"investee": "Super League Gaming","datum": "09\/01\/15","summe": 4.5,"investors": 3},
{"investee": "Challengermode","datum": "08\/20\/15","summe": 0.71429,"investors": 8},
{"investee": "Matcherino","datum": "08\/07\/15","summe": 0.118,"investors": 2},
{"investee": "Unikrn","datum": "06\/29\/15","summe": 7,"investors": 6},
{"investee": "Strafe","datum": "06\/08\/15","summe": 0.625,"investors": 3},
{"investee": "Super League Gaming","datum": "05\/26\/15","summe": 1.2,"investors": 10},
{"investee": "Pocket Gems","datum": "05\/13\/15","summe": 60,"investors": 2},
{"investee": "Alphadraft","datum": "04\/19\/15","summe": 5,"investors": 12},
{"investee": "Unikrn","datum": "02\/04\/15","summe": 2.5,"investors": 3},
{"investee": "Unikrn","datum": "11\/18\/14","summe": 0.35,"investors": 1},
{"investee": "Azubu","datum": "03\/26\/14","summe": 34.5,"investors": 1},
//{"investee": "Pocket Gems","datum": "12\/15\/10","summe": 5,"investors": 3},
//{"investee": "Astro Gaming","datum": "01\/12\/09","summe": 3.5,"investors": 1}
];

//Set constants

var w = 800, h = 600, padding = 60;

//Create adaptable scales
function getDate(d) {return new Date(d.datum);}

var minDate = getDate(investment[0]),
    maxDate = getDate(investment[investment.length-1]);
            
var xScale = d3.time.scale()
.domain([maxDate, minDate])
.range([padding, w - padding]);

/** var xScale = d3.scale.linear()
    .domain([0, d3.max(investment, function (d) {
    return d3.max([d.datum]);
})])
    .range([padding, w - padding]); */

var yScale = d3.scale.linear()
    /**.domain([0, d3.max(investment, function (d) {
    return d3.max([d.summe, d.investors]);
})]) */
		.domain([0,17])
    .range([h - padding, padding]);

//Select the svg
var svg = d3.select("svg");

//Define and set up the tooltip
var tip = d3.tip()
    .attr('class', 'tooltip')
    .offset([-4, 0])
    .html(function (d){if (d.investors > 1) {return "<strong>" + d.investee + "</strong><hr style='margin-top: 6px; margin-bottom: 2px' /><span style='font-size:11px'>Raised: " + d.summe + " M. USD<br />by " + d.investors + " Investors.</span>";} else {return "<strong>" + d.investee + "</strong><hr style='margin-top: 6px; margin-bottom: 2px' /><span style='font-size:11px'>Raised: " + d.summe + " M. USD<br />by " + d.investors + " Investor.</span>";}});

svg.call(tip);


//Set up the circles
diag_circles = svg.selectAll("circle");

diag_circles.data(investment)
.enter()
.append("circle")
.attr("cx", function(d){return xScale(getDate(d));})
.attr("cy", function(d){return yScale(d.summe);})
.attr("r", function(d){return Math.sqrt(d.summe*20);})
.style("fill", function(d){if (d.summe < 1) {return "#42FF48";} else if (d.summe < 5) {return "#05C70B";} else if (d.summe < 10) {return "#33FFFF";} else if (d.summe < 30) {return "#1BC0C0";} else if (d.summe < 60) {return "#2FA2F7";} else {return "#0A30CA";}})
.on('mouseover', tip.show)
.on('mouseout', tip.hide);


//Set up the axes

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "yaxis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);
    

// titles to the axes
svg.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "translate("+ (padding/2) +","+(h/2)+")rotate(-90)")
  .text("Amount in Million USD");

svg.append("text")
  .attr("text-anchor", "middle")
  .attr("transform", "translate("+ (w/2) +","+(h-(padding/3))+")")
  .text("Date"); 
  


function Next() {
			yScale.domain([0,100])
      svg.select(".yaxis")
      .transition().duration(2500).ease("sin-in-out")
      .call(yAxis);
      
    d3.selectAll(".rbutton")
      .classed("disabled", true);
    d3.selectAll(".lbutton")
    	.classed("disabled", false);
    d3.selectAll(".inhalt1")
    	.classed("invisible", true);
    d3.selectAll(".inhalt2")
    	.classed("invisible", false);
    
    d3.selectAll("circle")
      .transition()
      .duration(2500).ease("sin-in-out")    
      .attr("cx", function(d){return xScale(getDate(d));})
      .attr("cy", function(d){return yScale(d.summe);})
      .attr("r", function(d){return Math.sqrt(d.summe*20);})
      .style("fill", function(d){if (d.summe < 1) {return "#42FF48";} else if (d.summe < 5) {return "#05C70B";} 				else if (d.summe < 10) {return "#33FFFF";} else if (d.summe < 30) {return "#1BC0C0";} else if (d.summe < 					60) {return "#2FA2F7";} else {return "#0A30CA";}})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  ;}
  
 function Previous() {
			yScale.domain([0,17])
      svg.select(".yaxis")
      .transition().duration(2500).ease("sin-in-out")
      .call(yAxis);
      
    d3.selectAll(".lbutton")
      .classed("disabled", true);
    d3.selectAll(".rbutton")
    	.classed("disabled", false);
    d3.selectAll(".inhalt1")
    	.classed("invisible", false);
    d3.selectAll(".inhalt2")
    	.classed("invisible", true);
    
    d3.selectAll("circle")
      .transition()
      .duration(2500).ease("sin-in-out")
      .attr("cx", function(d){return xScale(getDate(d));})
      .attr("cy", function(d){return yScale(d.summe);})
      .attr("r", function(d){return Math.sqrt(d.summe*20);})
      .style("fill", function(d){if (d.summe < 1) {return "#42FF48";} else if (d.summe < 5) {return "#05C70B";} 				else if (d.summe < 10) {return "#33FFFF";} else if (d.summe < 30) {return "#1BC0C0";} else if (d.summe < 					60) {return "#2FA2F7";} else {return "#0A30CA";}})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
  ;} 

svg.append('svg:image')
.attr({
  'xlink:href': 'http://tobiasseck.com/teo_acronym_logotype_black-TEO-professional.png',
  x: 250,
  y: 150,
  width: 300,
  height: 300,
  opacity: 0.2
});
