    
window.onload = sunrise;
function sunrise(){
    var sky = document.getElementById('stage');
    var sun = document.getElementById('ball');
    var button = document.getElementById("startstop");

    var isPaused = false;

    button.onclick = playPause;

    function playPause(){
        if (isPaused) {
            sky.style.animationPlayState = 'running';
            sun.style.animationPlayState = 'running';
        } else {
            sky.style.animationPlayState = 'paused';
            sun.style.animationPlayState = 'paused';
        }
        isPaused = !isPaused;
    }
}    