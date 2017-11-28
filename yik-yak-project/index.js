$(document).ready(function(){

	var roofRef = firebase.database().ref().child('text');

	roofRef.on("child_added",snap => {

		var snapData = snap.val();
		
		$('#posts').append("<p>" + snapData + "</p>");

	});
});