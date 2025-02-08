$(document).ready(function () {
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
});



// counting the number animation
function animateCount(countElement) {
    const targetNumber = +countElement.getAttribute('data-target');
    const duration = +countElement.getAttribute('data-duration');
    let currentNumber = 0;
    // incerases the value
    const incrementStep = targetNumber / (duration / 10);
    const interval = setInterval(() => {
        currentNumber += incrementStep;

        // Stops when it reaches the target
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
        }

        countElement.textContent = Math.round(currentNumber) + "+";
    }, 10);
}

// when we scroll down and see the section we see the animation
document.addEventListener("DOMContentLoaded", () => {
    const counts = document.querySelectorAll('.count');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                animateCount(entry.target);


                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counts.forEach(count => observer.observe(count));
});

// End of counting