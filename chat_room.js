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
        firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "welcome" + user_name + "!";

function addRoom() {
      roomname = document.getElementById("room_name");
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });

      localStorage.setItem("roomname", roomname);
      window.location = "chatpage.html";
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room-name-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>/#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
      
      console.log(name)
      localStorage.setItem("roomname", name);
      window.location = "chat_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html"
}
