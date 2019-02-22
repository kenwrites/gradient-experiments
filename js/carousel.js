const next_btn = document.querySelector('#carousel-next')
const prev_btn = document.querySelector('#carousel-prev')
const experiments = document.querySelectorAll('.ex-div')
const $title = $('#experiment-title')
const faders = document.querySelectorAll('.fader')

const last_slide = experiments.length - 1

var this_slide = 0;
var prev_slide;

function animate_title() {
    let slide_title
    slide_title = '"' + experiments[this_slide].title + '"'
    $title.
        stop().
        hide().
        delay(250).
        text(slide_title).
        fadeIn(500).
        delay(3000).
        fadeOut(500).
        stop()
}

function fade_out(slide) {
    // console.log("fade in")
    // console.log("this slide: " + this_slide)
    faders[slide].style.backgroundColor = "rgba(255, 255, 255, 1)"
}

function fade_in(slide) {
    // console.log("fade in")
    // console.log("this slide: " + this_slide)
    faders[slide].style.backgroundColor = "rgba(255, 255, 255, 0)"
}

next_btn.addEventListener('click', () => {
    prev_slide = this_slide;
    fade_out(this_slide)
    window.setTimeout(() => {
        experiments[this_slide].style.display = "none"
        this_slide++;
        experiments[this_slide].style.display = "flex"
        fade_in(this_slide)
        animate_title()
        if (this_slide === last_slide) {
            next_btn.style.display = "none"
            faders[this_slide].style.display = "none"
        }
        if (this_slide === 1) {
            prev_btn.style.display = "block"
        }    
    }, 250)
    
})

prev_btn.addEventListener('click', () => {
    fade_out(this_slide)
    window.setTimeout(() => {
        experiments[this_slide].style.display = "none"
        this_slide--;
        experiments[this_slide].style.display = "flex"
        fade_in(this_slide)
        animate_title()
        if (this_slide === 0) {
            prev_btn.style.display = "none"
        }
        if (this_slide === last_slide - 1) {
            next_btn.style.display = "block"
        } 
    } )
    
})

// On page load

fade_in(this_slide)
animate_title()