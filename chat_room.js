const firebaseConfig = {
    apiKey: "AIzaSyCS1NqH5Ul2APU5BEe9K2X1flrQeMXrjDk",
    authDomain: "let-s-chat-app-d4791.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-d4791-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-d4791",
    storageBucket: "let-s-chat-app-d4791.appspot.com",
    messagingSenderId: "374200941464",
    appId: "1:374200941464:web:41a2d725ecb4d5a738c9ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*  */


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();