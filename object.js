var hotel = {
	name: 'Quay',								// these are properties
	rooms: 40,
	booked: 25,
	gym: true,
	roomTypes: ['twin', 'double', 'suite'],		//
	
	checkAvailability: function () {			// this is a method
		returns this.rooms - this.booked;
	}
}; 

var hotel = {									// these objects are created using literal notation
	name: 'Quay',
	rooms: 40, 
	booked: 25,
	
	checkAvailability: function(){
		return this.rooms -this.booked;
	}
};

var hotelName = hotel.name; 					// using the dot notation, properties and methods of an object can be accessed
var roomsFree = hotel.checkAvailability();

var hotelName = hotel['name']; 					// using the bracket notation, only properties of an object can be accessed 