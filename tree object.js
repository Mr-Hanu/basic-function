var tree = {
	type: 'Oak',
	location: 'Central forest',
	condition: true,
	age: 32, 
	
	checkType: function(){
		return this.type;
	}
};

var elType = document.getElementById('treeType');
elType.textContent = tree.checkType();

var elLocation = document.getElementById('location');
elLocation.textContent = tree.location; 