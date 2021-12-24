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

username=localStorage.getItem("user_name");
roomname=localStorage.getItem("roomname");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message']
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;       
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(roomname).child(message_id).update({
          like : updated_likes  
 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
window.location.replace("index.html");
}
