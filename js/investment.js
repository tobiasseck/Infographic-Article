//Set up the data
investment = [
  {"investee": "Gosu.ai","datum": " 3 \/ 21 \/ 18 ","summe": 	1.90	,"investors":	3	},
  {"investee": "Play2Live","datum": "	3	\/	21	\/	18	","summe": 	30.00	,"investors":	"unkown"	},
  {"investee": "Huya TV","datum": "	3	\/	9	\/	18	","summe": 	461.60	,"investors":	1	},
  {"investee": "Douyu TV","datum": "	3	\/	8	\/	18	","summe": 	632.00	,"investors":	1	},
  {"investee": "Vision Esports","datum": "	2	\/	22	\/	18	","summe": 	38.00	,"investors":	4	},
  {"investee": "FanAI","datum": "	2	\/	22	\/	18	","summe": 	2.50	,"investors":	11	},
  {"investee": "Female Legends","datum": "	2	\/	19	\/	18	","summe": 	0.66355	,"investors":	1	},
  {"investee": "Kakao Games","datum": "	2	\/	15	\/	18	","summe": 	130.00	,"investors":	4	},
  {"investee": "Game Digital","datum": "	2	\/	12	\/	18	","summe": 	4.50	,"investors":	1	},
  {"investee": "Shanda Games","datum": "	2	\/	7	\/	18	","summe": 	474.00	,"investors":	1	},
  {"investee": "Team Vitality","datum": "	2	\/	6	\/	18	","summe": 	3.10	,"investors":	3	},
  {"investee": "Epics.gg","datum": "	1	\/	31	\/	18	","summe": 	2.00	,"investors":	6	},
  {"investee": "Esports One","datum": "	1	\/	23	\/	18	","summe": 	3.00	,"investors":	3	},
  {"investee": "Millennial Esports","datum": "	1	\/	15	\/	18	","summe": 	12.12	,"investors":	"unkown"	},
  {"investee": "Chushou","datum": "	1	\/	3	\/	18	","summe": 	76.00	,"investors":	4	},
  {"investee": "Manticore Games","datum": "	12	\/	12	\/	17	","summe": 	15.00	,"investors":	6	},
  {"investee": "Winstrike","datum": "	11	\/	17	\/	17	","summe": 	10.00	,"investors":	2	},
  {"investee": "OPSkins","datum": "	11	\/	13	\/	17	","summe": 	41.00	,"investors":	"unkown"	},
  {"investee": "Unikrn","datum": "	10	\/	23	\/	17	","summe": 	40.00	,"investors":	5	},
  {"investee": "Cloud9","datum": "	9	\/	13	\/	17	","summe": 	19.70	,"investors":	21	},
  {"investee": "Genvid Technologies","datum": "	9	\/	11	\/	17	","summe": 	2.50	,"investors":	2	},
  {"investee": "GAMURS","datum": "	9	\/	11	\/	17	","summe": 	3.50	,"investors":	1	},
  {"investee": "Guilded","datum": "	9	\/	8	\/	17	","summe": 	3.20	,"investors":	10	},
  {"investee": "Taunt","datum": "	9	\/	7	\/	17	","summe": 	1.75	,"investors":	2	},
  {"investee": "Maestro","datum": "	9	\/	7	\/	17	","summe": 	3.00	,"investors":	3	},
  {"investee": "Gamer Sensei","datum": "	8	\/	30	\/	17	","summe": 	4.00	,"investors":	3	},
  {"investee": "SLIVER.tv","datum": "	8	\/	23	\/	17	","summe": 	9.80	,"investors":	8	},
  {"investee": "Znipe.tv","datum": "	8	\/	22	\/	17	","summe": 	3.70	,"investors":	3	},
  {"investee": "GawkBox","datum": "	8	\/	10	\/	17	","summe": 	3.70	,"investors":	4	},
  {"investee": "Team EnVyUs","datum": "	8	\/	8	\/	17	","summe": 	35.00	,"investors":	1	},
  {"investee": "Super Evil Megacorp","datum": "	8	\/	8	\/	17	","summe": 	19.00	,"investors":	"unkown"	},
  {"investee": "Smash.gg","datum": "	8	\/	2	\/	17	","summe": 	11.00	,"investors":	5	},
  {"investee": "FanAI","datum": "	7	\/	27	\/	17	","summe": 	1.80	,"investors":	12	},
  {"investee": "O'Gaming TV","datum": "	7	\/	25	\/	17	","summe": 	2.50	,"investors":	1	},
  {"investee": "Guilded","datum": "	7	\/	11	\/	17	","summe": 	0.12	,"investors":	1	},
  {"investee": "Matcherino","datum": "	7	\/	10	\/	17	","summe": 	1.50	,"investors":	3	},
  {"investee": "Game Scorekeeper","datum": "	7	\/	7	\/	17	","summe": 	0.23833	,"investors":	1	},
  {"investee": "Pandascore","datum": "	7	\/	6	\/	17	","summe": 	2.90	,"investors":	4	},
  {"investee": "Super League Gaming","datum": "	6	\/	29	\/	17	","summe": 	15.00	,"investors":	4	},
  {"investee": "rfrsh entertainment","datum": "	6	\/	28	\/	17	","summe": 	8.10	,"investors":	3	},
  {"investee": "Pocket Gems","datum": "	5	\/	11	\/	17	","summe": 	90.00	,"investors":	1	},
  {"investee": "DOJO MADNESS","datum": "	4	\/	5	\/	17	","summe": 	6.00	,"investors":	5	},
  {"investee": "SLIVER.tv","datum": "	3	\/	17	\/	17	","summe": 	16.00	,"investors":	5	},
  {"investee": "Wavedash Games","datum": "	3	\/	2	\/	17	","summe": 	6.00	,"investors":	7	},
  {"investee": "Challengermode","datum": "	2	\/	24	\/	17	","summe": 	1.30	,"investors":	3	},
  {"investee": "rfrsh entertainment","datum": "	12	\/	22	\/	16	","summe": 	4.32	,"investors":	3	},
  {"investee": "boom.tv","datum": "	12	\/	13	\/	16	","summe": 	3.50	,"investors":	9	},
  {"investee": "Super League Gaming","datum": "	10	\/	26	\/	16	","summe": 	5.00	,"investors":	2	},
  {"investee": "Critical Force","datum": "	9	\/	5	\/	16	","summe": 	4.46	,"investors":	1	},
  {"investee": "Genvid Technologies","datum": "	8	\/	29	\/	16	","summe": 	1.50	,"investors":	2	},
  {"investee": "SLIVER.tv","datum": "	8	\/	24	\/	16	","summe": 	6.20	,"investors":	6	},
  {"investee": "Ninjas in Pyjamas","datum": "	8	\/	23	\/	16	","summe": 	0.6	,"investors":	1	},
  {"investee": "Wangyudashi","datum": "	8	\/	10	\/	16	","summe": 	23.00	,"investors":	2	},
  {"investee": "Strafe","datum": "	7	\/	15	\/	16	","summe": 	1.53	,"investors":	4	},
  {"investee": "Gamer Sensei","datum": "	6	\/	9	\/	16	","summe": 	2.30	,"investors":	5	},
  {"investee": "DOJO MADNESS","datum": "	5	\/	19	\/	16	","summe": 	4.50	,"investors":	4	},
  {"investee": "kek.tv","datum": "	5	\/	4	\/	16	","summe": 	2.50	,"investors":	11	},
  {"investee": "Zengaming","datum": "	4	\/	21	\/	16	","summe": 	2.80	,"investors":	1	},
  {"investee": "Super League Gaming","datum": "	4	\/	20	\/	16	","summe": 	5.05	,"investors":	10	},
  {"investee": "Smash.gg","datum": "	4	\/	1	\/	16	","summe": 	3.00	,"investors":	2	},
  {"investee": "SLIVER.tv","datum": "	3	\/	30	\/	16	","summe": 	4.00	,"investors":	8	},
  {"investee": "Matcherino","datum": "	12	\/	17	\/	15	","summe": 	1.25	,"investors":	3	},
  {"investee": "Azubu","datum": "	12	\/	9	\/	15	","summe": 	55.00	,"investors":	2	},
  {"investee": "hitbox Entertainment","datum": "	11	\/	2	\/	15	","summe": 	4.00	,"investors":	3	},
  {"investee": "Battle of Glory","datum": "	11	\/	1	\/	15	","summe": 	0.1272	,"investors":	2	},
  {"investee": "Super League Gaming","datum": "	10	\/	16	\/	15	","summe": 	3.25	,"investors":	"unkown"	},
  {"investee": "ESforce Holding","datum": "	10	\/	15	\/	15	","summe": 	100.00	,"investors":	1	},
  {"investee": "Super League Gaming","datum": "	9	\/	1	\/	15	","summe": 	4.50	,"investors":	3	},
  {"investee": "Challengermode","datum": "	8	\/	20	\/	15	","summe": 	0.71429	,"investors":	8	},
  {"investee": "Matcherino","datum": "	8	\/	7	\/	15	","summe": 	0.118	,"investors":	2	},
  {"investee": "Unikrn","datum": "	6	\/	29	\/	15	","summe": 	7.00	,"investors":	6	},
  {"investee": "Strafe","datum": "	6	\/	8	\/	15	","summe": 	0.625	,"investors":	3	},
  {"investee": "Super League Gaming","datum": "	5	\/	26	\/	15	","summe": 	1.20	,"investors":	10	},
  {"investee": "Pocket Gems","datum": "	5	\/	13	\/	15	","summe": 	60.00	,"investors":	2	},
  {"investee": "Alphadraft","datum": "	4	\/	19	\/	15	","summe": 	5.00	,"investors":	12	},
  {"investee": "Unikrn","datum": "	2	\/	4	\/	15	","summe": 	2.50	,"investors":	3	},
  {"investee": "Unikrn","datum": "	11	\/	18	\/	14	","summe": 	0.35	,"investors":	"unkown"	},
  {"investee": "Azubu","datum": "	3	\/	26	\/	14	","summe": 	34.50	,"investors":	1	},
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
		.domain([0,16])
    .range([h - padding, padding]);

//Select the svg
var svg = d3.select("svg");

//Define and set up the tooltip
var tip = d3.tip()
    .attr('class', 'tooltip')
    .offset([-4, 0])
    .html(function (d){if (d.investors > 1) {return "<strong>" + d.investee + "</strong><hr style='margin-top: 6px; margin-bottom: 2px' /><span style='font-size:11px'>Raised: " + d.summe + " M. USD<br />by " + d.investors + " Investors.<br />Datum: " + d.datum + "</span>";} else {return "<strong>" + d.investee + "</strong><hr style='margin-top: 6px; margin-bottom: 2px' /><span style='font-size:11px'>Raised: " + d.summe + " M. USD<br />by " + d.investors + " Investor.<br />Datum: " + d.datum + "</span>";}});

svg.call(tip);


//Set up the circles
diag_circles = svg.selectAll("circle");

diag_circles.data(investment)
.enter()
.append("circle")
.attr("cx", function(d){return xScale(getDate(d));})
.attr("cy", function(d){return yScale(d.summe);})
.attr("r", function(d){return Math.sqrt(d.summe*20);})
.style("fill", function(d){
  if (d.datum < "2015") {return "#42FF48";}
  else if (d.datum < "2016") {return "#2FA2F7";}
  else {return "#0A30CA";}})
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
})
.style("pointer-events","none");
