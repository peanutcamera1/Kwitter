//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDgXMZQqx01lxV6bwrF7I_YGhhIwcq3L8g",
      authDomain: "kwitter-f8567.firebaseapp.com",
      projectId: "kwitter-f8567",
      storageBucket: "kwitter-f8567.appspot.com",
      messagingSenderId: "869012844867",
      appId: "1:869012844867:web:fca52214a2496cfacdbff6"
    };
 firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("UserName");
roomname=localStorage.getItem("roomname");
 function send() {
       msg=document.getElementById("message").value;
       firebase.database().ref(roomname).push({
             name:username,
            message:msg,
            likes: 0
       });
       document.getElementById("message").value= "";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name']; 
message= message_data['message'];
like= message_data['likes'];
name_with_tags= "<h5>"+ name + "<img class='user_tick' src='tick.png'> </h5>";
message_with_tag= "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spam_with_tag= "<spam class='glyphicon glyphicon-thumbs-up'> Like:"+ like + "</spam> </button> <hr>";

row=name_with_tags+message_with_tag+like_button+spam_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updatelike(message_id) {
      console.log("Button id is= "+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(roomname).child(message_id).update({
            likes:updated_likes
      });
}
function logout() {
      localStorage.removeItem("UserName");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}