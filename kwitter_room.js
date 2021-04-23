var firebaseConfig = {
  apiKey: "AIzaSyD6ABB_cuiNix1n70KeFo_0pSxW8883gCA",
  authDomain: "kwitter-c9cd0.firebaseapp.com",
  databaseURL: "https://kwitter-c9cd0-default-rtdb.firebaseio.com",
  projectId: "kwitter-c9cd0",
  storageBucket: "kwitter-c9cd0.appspot.com",
  messagingSenderId: "400267025965",
  appId: "1:400267025965:web:1ffe3c3ab157f2d9e3e2a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding roomname"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_message.html";
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML="";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  Room_names = childKey;
  
  console.log("Room Names -" + Room_names);
  row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+ room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;

  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  likes=message_data['like'];
 name_with_tag="<h4>"+name+"<img src='tick.gif' class='user_tick'></h4>";
 message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
 like_button="<button class='btn btn-primary' id=></button>"+message_id+" value="+likes+" onclick='update(this.id)'>";
 likes="<span class='glyphicon glyphicon-thumbs-up'>like:"+likes+"</span></button><hr>";
 row=name_tag+message_tag+like_button+thumbs;


  });});}
  getData() ;
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",roon_name);
window.location="kwitter_room.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function send(){

  msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({ 
       name:user_name,
       message:msg,
       like:0
 });
msg=document.getElementById("msg").value="";
}
