
/*

<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYkEYtHT76-eZ-PUN9m1C-f4puXSaoGOA",
    authDomain: "yak-yick-clone.firebaseapp.com",
    databaseURL: "https://yak-yick-clone.firebaseio.com",
    projectId: "yak-yick-clone",
    storageBucket: "",
    messagingSenderId: "687414347586"
  };
  firebase.initializeApp(config);
</script>

*/

// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAYkEYtHT76-eZ-PUN9m1C-f4puXSaoGOA",
    authDomain: "yak-yick-clone.firebaseapp.com",
    databaseURL: "https://yak-yick-clone.firebaseio.com",
    projectId: "yak-yick-clone",
    storageBucket: "",
    messagingSenderId: "687414347586"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;