myID = document.getElementById("stickyMenu");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 650) {
    myID.className = "bottomMenu show"
  } else {
    myID.className = "bottomMenu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
