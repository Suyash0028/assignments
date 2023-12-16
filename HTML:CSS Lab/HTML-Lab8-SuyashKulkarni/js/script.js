
window.onload = shapeTransition;

function shapeTransition(){

    var onClickButton = document.getElementById("Clickme_button");
    onClickButton.addEventListener('click',spinShape);


    // Add styles to the onClickButton on hover
    onClickButton.addEventListener('mouseover', () => {
        onClickButton.style.transform = 'scale(1.2)';
        onClickButton.style.backgroundColor = '#e74c3c';
    });

    // Remove styles on mouseout
    onClickButton.addEventListener('mouseout', () => {
        onClickButton.style.transform = 'scale(1)';
        onClickButton.style.backgroundColor = '#3498db';
    });

    // Function to apply the 'spin' class to the shape
    function spinShape() {
        var shape = document.querySelector('.shape');

        // Add the 'spin' class to the shape
        shape.classList.add('spin');

        // Remove the 'spin' class after the transition ends
        shape.addEventListener('transitionend', () => {
        shape.classList.remove('spin');
        // Remove the styles added on hover after the transition ends
        onClickButton.removeEventListener('mouseover', () => {});
        onClickButton.removeEventListener('mouseout', () => {});
        }, { once: true });
    }
}