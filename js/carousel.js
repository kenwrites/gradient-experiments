const next_btn = document.querySelector('#carousel-next')
const prev_btn = document.querySelector('#carousel-prev')
const experiments = document.querySelectorAll('.ex-div')
const $title = $('#experiment-title')
const faders = document.querySelectorAll('.fader')

const last_slide = experiments.length - 1

var slide = 0;

function animate_title() {
    let slide_title
    slide_title = '"' + experiments[slide].title + '"'
    $title.stop().hide().delay(250).text(slide_title).fadeIn(500).delay(3000).fadeOut(500).stop()
}

function fade_out() {
    faders[slide].style.backgroundColor = "rgba(255, 255, 255, 1)"
}

function fade_in() {
    faders[slide].style.backgroundColor = "rgba(255, 255, 255, 0)"
}

next_btn.addEventListener('click', () => {
    fade_out()
    window.setTimeout(() => {
        experiments[slide].style.display = "none"
        slide++;
        experiments[slide].style.display = "flex"
        fade_in()
        animate_title()
        if (slide === last_slide) {
            next_btn.style.display = "none"
        }
        if (slide === 1) {
            prev_btn.style.display = "block"
        }    
    }, 250)
    
})

prev_btn.addEventListener('click', () => {
    fade_out()
    window.setTimeout(() => {
        experiments[slide].style.display = "none"
        slide--;
        experiments[slide].style.display = "flex"
        fade_in()
        animate_title()
        if (slide === 0) {
            prev_btn.style.display = "none"
        }
        if (slide === last_slide - 1) {
            next_btn.style.display = "block"
        } 
    } )
    
})

// On page load

fade_in()
animate_title()