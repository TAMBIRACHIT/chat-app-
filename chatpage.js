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
      /*  */
      

username=localStorage.getItem("username");
roomname=localStorage.getItem("roomname");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:user_name,
            message:msg,
            like:0

      });

      document.getElementById("msg").value=" ";
      

}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
