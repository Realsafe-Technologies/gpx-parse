var geomUtils = require('./geomUtils');

/**
* Constructs a gpx route.
* @class
* @classdesc represents a route, an ordered list of waypoints representing a series of turn points leading to a destination.
* @param {string} name The name of the route.
* @param {string} cmt A comment regarding the route.
* @param {string} desc A description of the route.
* @param {object[]} points An array of waypoints representing the route.
**/
function GpxRoute(name, cmt, type, desc, points) {

	name = name || "";
	desc = desc || "";
	cmt = cmt || "";
	type = type || "";
	points = points || [];

	this.__defineGetter__("name", function() {
		return name;
	});

	this.__defineGetter__("cmt", function() {
		return cmt;
	});

	this.__defineGetter__("desc", function() {
		return desc;
	});

	this.__defineGetter__("type", function() {
		return type;
	});

	this.__defineGetter__("points", function() {
		return points;
	});

	this.point = function(index) {
		return points[index];
	};

	/**
	 * Reverses the points within the route
	 **/
	this.reverse = function() {
		this.points.reverse();
	}

	/**
	 * Calculates the length of the route
	 **/
	this.length = function() {
		var total = 0;

		for (var j=0, jl = points.length -1; j<jl; j++) {
					total += geomUtils.calculateDistance(points[j].lat,points[j].lon,points[j+1].lat,points[j+1].lon );
		}

		return total;
	};

}

module.exports = GpxRoute;
