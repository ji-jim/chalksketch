
// data to firebase-database

function postMessage() {

	var input = document.getElementById('input').value;
	var posts = document.getElementById('posts');

	/*var newP = document.createElement("p");
	var newText = document.createTextNode(input);
	newP.appendChild(newText);   

	posts.appendChild(newP);*/
	
	document.getElementById('myForm').reset();

		/* link with firebase database below */

	var firebaseRef = firebase.database().ref();

	var newMessage = input.value;

	firebaseRef.child('text').push().set(input);

}

// retrieve data


