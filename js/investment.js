//Set up the data
investment = [
  {"investee": " ","datum": "2018-05-01" ,"summe": 	0	,"investors":	0	},
  {"investee": "Gosu.ai","datum": "2018-03-21" ,"summe": 	1.90	,"investors":	3	},
  {"investee": "Play2Live","datum": "2018-03-21","summe": 	30.00	,"investors":	"unkown"	},
  {"investee": "Huya TV","datum": "2018-03-09","summe": 	461.60	,"investors":	1	},
  {"investee": "Douyu TV","datum": "2018-03-08","summe": 	632.00	,"investors":	1	},
  {"investee": "Vision Esports","datum": "2018-02-22","summe": 	38.00	,"investors":	4	},
  {"investee": "FanAI","datum": "2018-02-22","summe": 	2.50	,"investors":	11	},
  {"investee": "Female Legends","datum": "2018-02-19","summe": 	0.66	,"investors":	1	},
  {"investee": "Kakao Games","datum": "2018-02-15","summe": 	130.00	,"investors":	4	},
  {"investee": "Game Digital","datum": "2018-02-12","summe": 	4.50	,"investors":	1	},
  {"investee": "Shanda Games","datum": "2018-02-07","summe": 	474.00	,"investors":	1	},
  {"investee": "Team Vitality","datum": "2018-02-06","summe": 	3.10	,"investors":	3	},
  {"investee": "Epics.gg","datum": "2018-01-31","summe": 	2.00	,"investors":	6	},
  {"investee": "Esports One","datum": "2018-01-23","summe": 	3.00	,"investors":	3	},
  {"investee": "Millennial Esports","datum": "2018-01-15","summe": 	12.12	,"investors":	"unkown"	},
  {"investee": "Chushou","datum": "2018-01-03","summe": 	76.00	,"investors":	4	},
  {"investee": "Manticore Games","datum": "2017-12-12","summe": 	15.00	,"investors":	6	},
  {"investee": "Winstrike","datum": "2017-11-17","summe": 	10.00	,"investors":	2	},
  {"investee": "OPSkins","datum": "2017-11-13","summe": 	41.00	,"investors":	"unkown"	},
  {"investee": "Unikrn","datum": "2017-10-23","summe": 	40.00	,"investors":	5	},
  {"investee": "Cloud9","datum": "2017-09-13","summe": 	19.70	,"investors":	21	},
  {"investee": "Genvid Technologies","datum": "2017-09-11","summe": 	2.50	,"investors":	2	},
  {"investee": "GAMURS","datum": "2017-09-11","summe": 	3.50	,"investors":	1	},
  {"investee": "Guilded","datum": "2017-09-08","summe": 	3.20	,"investors":	10	},
  {"investee": "Taunt","datum": "2017-09-07","summe": 	1.75	,"investors":	2	},
  {"investee": "Maestro","datum": "2017-09-07","summe": 	3.00	,"investors":	3	},
  {"investee": "Gamer Sensei","datum": "2017-08-30","summe": 	4.00	,"investors":	3	},
  {"investee": "SLIVER.tv","datum": "2017-08-23","summe": 	9.80	,"investors":	8	},
  {"investee": "Znipe.tv","datum": "2017-08-22","summe": 	3.70	,"investors":	3	},
  {"investee": "GawkBox","datum": "2017-08-10","summe": 	3.70	,"investors":	4	},
  {"investee": "Team EnVyUs","datum": "2017-08-08","summe": 	35.00	,"investors":	1	},
  {"investee": "Super Evil Megacorp","datum": "2017-08-08","summe": 	19.00	,"investors":	"unkown"	},
  {"investee": "Smash.gg","datum": "2017-08-02","summe": 	11.00	,"investors":	5	},
  {"investee": "FanAI","datum": "2017-07-27","summe": 	1.80	,"investors":	12	},
  {"investee": "O'Gaming TV","datum": "2017-07-25","summe": 	2.50	,"investors":	1	},
  {"investee": "Guilded","datum": "2017-07-11","summe": 	0.12	,"investors":	1	},
  {"investee": "Matcherino","datum": "2017-07-10","summe": 	1.50	,"investors":	3	},
  {"investee": "Game Scorekeeper","datum": "2017-07-07","summe": 	0.24	,"investors":	1	},
  {"investee": "Pandascore","datum": "2017-07-06","summe": 	2.90	,"investors":	4	},
  {"investee": "Super League Gaming","datum": "2017-06-29","summe": 	15.00	,"investors":	4	},
  {"investee": "rfrsh entertainment","datum": "2017-06-28","summe": 	8.10	,"investors":	3	},
  {"investee": "Pocket Gems","datum": "2017-05-11","summe": 	90.00	,"investors":	1	},
  {"investee": "DOJO MADNESS","datum": "2017-04-05","summe": 	6.00	,"investors":	5	},
  {"investee": "SLIVER.tv","datum": "2017-03-17" ,"summe": 	16.00	,"investors":	5	},
  {"investee": "Wavedash Games","datum": "2017-03-02","summe": 	6.00	,"investors":	7	},
  {"investee": "Challengermode","datum": "2017-02-24","summe": 	1.30	,"investors":	3	},
  {"investee": "rfrsh entertainment","datum": "2016-12-22","summe": 	4.32	,"investors":	3	},
  {"investee": "boom.tv","datum": "2016-12-13","summe": 	3.50	,"investors":	9	},
  {"investee": "Super League Gaming","datum": "2016-10-26","summe": 	5.00	,"investors":	2	},
  {"investee": "Critical Force","datum": "2016-09-05","summe": 	4.46	,"investors":	1	},
  {"investee": "Genvid Technologies","datum": "2016-08-29","summe": 	1.50	,"investors":	2	},
  {"investee": "SLIVER.tv","datum": "2016-08-24","summe": 	6.20	,"investors":	6	},
  {"investee": "Ninjas in Pyjamas","datum": "2016-08-23","summe": 	0.6	,"investors":	1	},
  {"investee": "Wangyudashi","datum": "2016-08-10","summe": 	23.00	,"investors":	2	},
  {"investee": "Strafe","datum": "2016-07-15","summe": 	1.53	,"investors":	4	},
  {"investee": "Gamer Sensei","datum": "2016-06-09","summe": 	2.30	,"investors":	5	},
  {"investee": "DOJO MADNESS","datum": "2016-05-19","summe": 	4.50	,"investors":	4	},
  {"investee": "kek.tv","datum": "2016-05-04","summe": 	2.50	,"investors":	11	},
  {"investee": "Zengaming","datum": "2016-04-21","summe": 	2.80	,"investors":	1	},
  {"investee": "Super League Gaming","datum": "2016-04-20","summe": 	5.05	,"investors":	10	},
  {"investee": "Smash.gg","datum": "2016-04-01","summe": 	3.00	,"investors":	2	},
  {"investee": "SLIVER.tv","datum": "2016-03-30" ,"summe": 	4.00	,"investors":	8	},
  {"investee": "Matcherino","datum": "2015-12-17","summe": 	1.25	,"investors":	3	},
  {"investee": "Azubu","datum": "2015-12-09","summe": 	55.00	,"investors":	2	},
  {"investee": "hitbox Entertainment","datum": "2015-11-02","summe": 	4.00	,"investors":	3	},
  {"investee": "Battle of Glory","datum": "2015-11-01","summe": 	0.13	,"investors":	2	},
  {"investee": "Super League Gaming","datum": "2015-10-16","summe": 	3.25	,"investors":	"unkown"	},
  {"investee": "ESforce Holding","datum": "2015-10-15","summe": 	100.00	,"investors":	1	},
  {"investee": "Super League Gaming","datum": "2015-09-01","summe": 	4.50	,"investors":	3	},
  {"investee": "Challengermode","datum": "2015-08-20","summe": 	0.71	,"investors":	8	},
  {"investee": "Matcherino","datum": "2015-08-07","summe": 	0.12	,"investors":	2	},
  {"investee": "Unikrn","datum": "2015-06-29","summe": 	7.00	,"investors":	6	},
  {"investee": "Strafe","datum": "2015-06-08","summe": 	0.63	,"investors":	3	},
  {"investee": "Super League Gaming","datum": "2015-05-26","summe": 	1.20	,"investors":	10	},
  {"investee": "Pocket Gems","datum": "2015-05-13","summe": 	60.00	,"investors":	2	},
  {"investee": "Alphadraft","datum": "2015-04-19","summe": 	5.00	,"investors":	12	},
  {"investee": "Unikrn","datum": "2015-02-04","summe": 	2.50	,"investors":	3	},
  {"investee": "Unikrn","datum": "2014-11-18","summe": 	0.35	,"investors":	"unkown"	},
  {"investee": "Azubu","datum": "2014-03-26" ,"summe": 	34.50	,"investors":	1	},
];

//Set constants

var w = 800, h = 600, padding = 60;
var scalehelper = 16;

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
.style("fill", function(d){
  if (d.datum.valueOf() < "2015") {return "#EFAAAF";}
  else if (d.datum.valueOf() < "2016") {return "#DF5F72";}
  else if (d.datum.valueOf() < "2017") {return "#CF1E44";}
  else if (d.datum.valueOf() < "2018") {return "#893B46";}
  else {return "#443132";}})
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

  if (scalehelper < 17) {
      scalehelper = 100;
			yScale.domain([0,scalehelper])
      svg.select(".yaxis")
      .transition().duration(2500).ease("sin-in-out")
      .call(yAxis);

    d3.selectAll(".rbutton")
      .classed("disabled", false);
    d3.selectAll(".lbutton")
    	.classed("disabled", false);
    d3.selectAll(".inhalt1")
    	.classed("invisible", true);
    d3.selectAll(".inhalt2")
    	.classed("invisible", false);
    d3.selectAll(".inhalt3")
      .classed("invisible", true);

    d3.selectAll("circle")
      .transition()
      .duration(2500).ease("sin-in-out")
      .attr("cx", function(d){return xScale(getDate(d));})
      .attr("cy", function(d){return yScale(d.summe);})
      .attr("r", function(d){return Math.sqrt(d.summe*20);})
      .style("fill", function(d) {
        if (d.datum.valueOf() < "2015") {return "#EFAAAF";}
        else if (d.datum.valueOf() < "2016") {return "#DF5F72";}
        else if (d.datum.valueOf() < "2017") {return "#CF1E44";}
        else if (d.datum.valueOf() < "2018") {return "#893B46";}
        else {return "#443132";}})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
    }
    else {
      scalehelper = 700;
      yScale.domain([0,scalehelper])
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
    	.classed("invisible", true);
    d3.selectAll(".inhalt3")
      .classed("invisible", false);

    d3.selectAll("circle")
      .transition()
      .duration(2500).ease("sin-in-out")
      .attr("cx", function(d){return xScale(getDate(d));})
      .attr("cy", function(d){return yScale(d.summe);})
      .attr("r", function(d){return Math.sqrt(d.summe*20);})
      .style("fill", function(d) {
        if (d.datum.valueOf() < "2015") {return "#EFAAAF";}
        else if (d.datum.valueOf() < "2016") {return "#DF5F72";}
        else if (d.datum.valueOf() < "2017") {return "#CF1E44";}
        else if (d.datum.valueOf() < "2018") {return "#893B46";}
        else {return "#443132";}})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
    }
  ;}

 function Previous() {
   if (scalehelper < 101){
     scalehelper = 16;
			yScale.domain([0,scalehelper])
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
    d3.selectAll(".inhalt3")
      .classed("invisible", true);

    d3.selectAll("circle")
      .transition()
      .duration(2500).ease("sin-in-out")
      .attr("cx", function(d){return xScale(getDate(d));})
      .attr("cy", function(d){return yScale(d.summe);})
      .attr("r", function(d){return Math.sqrt(d.summe*20);})
      .style("fill", function(d) {
        if (d.datum.valueOf() < "2015") {return "#EFAAAF";}
        else if (d.datum.valueOf() < "2016") {return "#DF5F72";}
        else if (d.datum.valueOf() < "2017") {return "#CF1E44";}
        else if (d.datum.valueOf() < "2018") {return "#893B46";}
        else {return "#443132";}})
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);
    }
    else {
      scalehelper = 100;
 			yScale.domain([0,scalehelper])
       svg.select(".yaxis")
       .transition().duration(2500).ease("sin-in-out")
       .call(yAxis);

     d3.selectAll(".lbutton")
       .classed("disabled", false);
     d3.selectAll(".rbutton")
     	.classed("disabled", false);
     d3.selectAll(".inhalt1")
     	.classed("invisible", true);
     d3.selectAll(".inhalt2")
     	.classed("invisible", false);
     d3.selectAll(".inhalt3")
      .classed("invisible", true);

     d3.selectAll("circle")
       .transition()
       .duration(2500).ease("sin-in-out")
       .attr("cx", function(d){return xScale(getDate(d));})
       .attr("cy", function(d){return yScale(d.summe);})
       .attr("r", function(d){return Math.sqrt(d.summe*20);})
       .style("fill", function(d) {
         if (d.datum.valueOf() < "2015") {return "#EFAAAF";}
         else if (d.datum.valueOf() < "2016") {return "#DF5F72";}
         else if (d.datum.valueOf() < "2017") {return "#CF1E44";}
         else if (d.datum.valueOf() < "2018") {return "#893B46";}
         else {return "#443132";}})
       .on('mouseover', tip.show)
       .on('mouseout', tip.hide);
    }
  ;}

svg.append('svg:image')
.attr({
  'xlink:href': 'http://tobiasseck.de/teo_acronym_logotype_black-TEO-professional.png',
  x: 250,
  y: 150,
  width: 300,
  height: 300,
  opacity: 0.2
})
.style("pointer-events","none");
