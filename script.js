//example function call to display a dialog box
//let's comment out the code below, which is top-level code 
//that automatically runs when the script is loaded
//alert("welcome, this is a javascript popup alert");

function submitForm(name, hometown) {
  // search the DOM for a specfic tag with the id "guestlist"
  var guestlist = document.getElementById("guestlist");
  var n = document.getElementById("name");
  var h = document.getElementById("hometown");
  // saveLocal(name, hometown);
  saveRemote(name, hometown);
  guestlist.innerHTML += "<li>" + name + ". " + hometown + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false;
}

function saveLocal(name, hometown) {
  var currentguestlist = localStorage.getItem("guestlist");
  localStorage.setItem("guestlist", currentguestlist + "<li>" + name + ". " + hometown + "</li>");
}

function saveRemote(name, hometown) {
  $.get("save.php",{"name":name, "hometown":hometown});
}

function loadRemote() {
  $.get("load.php",{},function(data) { 
    data = JSON.parse(data);
    console.log(data);
    console.log("row by row:");
    var html = "";
    for (var i in data) {
      console.log(data[i]);
      if (data[i])
      html += "<li>" + data[i] + "</li>";
    }
    $("#guestlist").html(html);
  });
}

function clearStorageGB() {
  //var guestlist = document.getElementById("guestlist");
  //guestlist.innerHTML = "";
  $("#guestlist").html("The guestbook has been cleared.");
  localStorage.setItem("guestlist","");
}

function checkStorageGB() {
  var guestlist = document.getElementById("guestlist");
  var currentguestlist = localStorage.getItem("guestlist");
  guestlistlist.innerHTML = currentguestlist;
}

function clearStorage() {
  var answerlist = document.getElementById("answerlist");
  answerlist.innerHTML = "";
  localStorage.setItem("answerlist","");
}

function checkStorage() {
  var answerlist = document.getElementById("answerlist");
  var currentanswers = localStorage.getItem("answerlist");
  answerlist.innerHTML = currentanswers;
}

function submitAnswer(answer) {
  // search the DOM for a specfic tag with the id "answerlist"
  var answerlist = document.getElementById("answerlist");
  var currentanswers = localStorage.getItem("answerlist");
  localStorage.setItem("answerlist", currentanswers + "<br />" + answer.value);
  answerlist.innerHTML += "<br />" + answer.value;
  answer.value = "";
  answer.focus();
  return false;
}