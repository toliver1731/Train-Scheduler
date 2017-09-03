
 $(document).ready(function(){
   


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCykw_KR3tvZ55vEI9_k1IcyQDLTN00rO8",
    authDomain: "train-scheduler-61381.firebaseapp.com",
    databaseURL: "https://train-scheduler-61381.firebaseio.com",
    projectId: "train-scheduler-61381",
    storageBucket: "train-scheduler-61381.appspot.com",
    messagingSenderId: "1042450288272"
  };
  firebase.initializeApp(config);

      
        var database = firebase.database();
        
$("#submit").on("click", function() {

    var name = $('#name-input').val().trim();
    var destintation = $('#destination-input').val().trim();
    var time = $('#trainTime-inpu').val().trim();
    var frequency = $('#frequency-input').val().trim();


  database.ref().push({
    name: name,
    destintation: destination,
      time: time,
      frequency: frequency,
      timeAdded: firebase.database.ServerValue.TIMESTAMP
  });
  
  $("input").val('');
    return false;
});


database.ref().on("child_added", function(childSnapshot){
  // console.log(childSnapshot.val());
  var name = childSnapshot.val().name;
  var dest = childSnapshot.val().dest;
  var time = childSnapshot.val().time;
  var freq = childSnapshot.val().freq;

 var date = "2017 -09-03"
 var format = "LLLL"
 var result = moment(date).format(format);
 console.log(result);
});


}); 