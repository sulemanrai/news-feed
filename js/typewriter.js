
// A $( document ).ready() block.
$( document ).ready(function() {
    $("#typed").typed({
        strings: ["Hi, I am Suleman Rai.", "I am a Full Stack Web Developer.", "View my personal projects or get in touch."],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 60,
        backDelay: 2000,
        cursorChar: "|",
        loop: false,
        contentType: 'html'
    });
});
