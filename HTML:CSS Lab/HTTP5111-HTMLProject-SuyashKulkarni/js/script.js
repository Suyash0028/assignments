window.onload = animationProject;

function animationProject() {
  var ball = document.getElementById('ball');
  var raindrop = document.getElementById("raindrop");
  var postBtn = document.getElementById("submit-button");

  postBtn != null ? postBtn.onclick = submitForm : null;

  //maintaining the position of the ball according to the scroll of the page
  document.addEventListener('scroll', function () {
   

    var changedPosition = window.scrollY;
    var startingPosition = window.innerHeight - 50; // Initial position relative to the bottom

    // Calculate the new position based on the scroll
    var currentPosition = startingPosition - changedPosition;

    // Set the new position
    ball.style.bottom = currentPosition + 'px';

    raindrop.style.bottom = currentPosition + 'px';
  });

  // Chaning background color after every 20 mins - Hit refresh to see the change
  var now = new Date();
  var hours = now.getMinutes();
  if (hours >= 0 && hours < 20) {
    document.body.style.backgroundColor = '#f39c12'; // Morning
  } else if (hours >= 20 && hours < 40) {
    document.body.style.backgroundColor = '#3498db'; // Afternoon
  } else {
    document.body.style.backgroundColor = '#34495e'; // Evening/Night

    raindrop != null ? raindrop.style.backgroundColor = "#4682B4" : null;
  }
 
  // On click of post button this function is called and it changes the class and redirects us to home page
  function submitForm() {
    console.log("Clicked");
    var form = document.getElementById('submitForm');
    form != null ? form.classList.add('form-submitted', 'hide') : null;

    setTimeout(function () {
      window.location.href = "../index.html";
    }, 2000);

    return false;
  }
}
