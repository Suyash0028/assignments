//LAB 12 - SVG WINTER SCENE
window.onload = SVGElements;

//Calling wrapper function
function SVGElements(){
    
    // Extra Challenge: Dynamic Scene
    document.addEventListener('click', function() {
        // Change snowman's nose color on click
        var nose = document.querySelector('#nose');
        nose.setAttribute('fill', getRandomColor());
    });

    // Extra Extra Challenge: It Moved!
    animateSnowman();
    // To generate the random color for nose
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function animateSnowman() {
        var circle1 = document.getElementById('circle1');
        var circle2 = document.getElementById('circle2');
        var circle3 = document.getElementById('circle3');

        setInterval(function() {
            moveSnowman(circle1, 5);
            moveSnowman(circle2, 3);
            moveSnowman(circle3, 2);
        }, 1000);
    }

    function moveSnowman(element, amount) {
        var currentY = parseFloat(element.getAttribute('cy'));
        var newY = currentY + amount;
        if (newY > 400) {
            newY = -20;
        }
        element.setAttribute('cy', newY);
    }
}