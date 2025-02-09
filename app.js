$(document).ready(function () {
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });
    $(window).on('scroll', function () {
        $('section').each(function () {
            let top = $(window).scrollTop();
            let height = $(this).outerHeight();
            let offset = $(this).offset().top - 150;
            let id = $(this).attr('id');
            if (top >= offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $(`.navbar a[href="#${id}"]`).addClass('active');
            }
        });
    });
});

function animateCount(countElement) {
    const targetNumber = +countElement.getAttribute('data-target');
    const duration = +countElement.getAttribute('data-duration');
    let currentNumber = 0;
    const incrementStep = targetNumber / (duration / 10);
    const interval = setInterval(() => {
        currentNumber += incrementStep;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(interval);
        }
        countElement.textContent = Math.round(currentNumber) + "+";
    }, 10);
}

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
