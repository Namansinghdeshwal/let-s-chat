var firebaseConfig = {
      apiKey: "AIzaSyBzdkFL1GAeCGQEMWzyrW4d34Ckpw96kQU",
      authDomain: "kwitter-d05d8.firebaseapp.com",
      databaseURL: "https://kwitter-d05d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-d05d8",
      storageBucket: "kwitter-d05d8.appspot.com",
      messagingSenderId: "228727930451",
      appId: "1:228727930451:web:a96708c078cc0335cb10a6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name + "!";
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+ Room_names);
row = "<div class='room' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirectToRoomName(name)
{
      connsole.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }
