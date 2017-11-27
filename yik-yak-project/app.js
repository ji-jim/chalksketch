
function postMessage() {
	var input = document.getElementById('input').value;
	var posts = document.getElementById('posts');

	var newP = document.createElement("p");
	var newText = document.createTextNode(input);
	newP.appendChild(newText);   

	posts.appendChild(newP);

	document.getElementByIdv('myForm').reset();

}