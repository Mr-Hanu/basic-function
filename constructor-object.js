var hotel = new Object();

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25:

hotel.checkAvailability = function(){
	return this.rooms - this.ooked;
};