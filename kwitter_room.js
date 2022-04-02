
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDgXMZQqx01lxV6bwrF7I_YGhhIwcq3L8g",
      authDomain: "kwitter-f8567.firebaseapp.com",
      projectId: "kwitter-f8567",
      storageBucket: "kwitter-f8567.appspot.com",
      messagingSenderId: "869012844867",
      appId: "1:869012844867:web:fca52214a2496cfacdbff6"
    };
 firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("UserName");
    document.getElementById("Welcome_Name").innerHTML= "Welcome"+ user_name +"!";
    function addRoom() {
      room_name=document.getElementById("RoomName").value;
      firebase.database().ref("/").child(room_name).update({
            Purpose:"addRoomName"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
    }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToNextPage(this.id)'>#" + Room_names + "</div>";
      document.getElementById("output").innerHTML=Room_names;
      //End code
      });});}
      getData();
      function redirectToNextPage(name) {
            console.log(name);
            localStorage.setItem("RoomName",name);
            window.location="kwitter_page.html";
      }
function Logout() {
      localStorage.removeItem("UserName");
      localStorage.removeItem("roomname");
      window.location="index.html";
}