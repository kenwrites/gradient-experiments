const next_btn = document.querySelector('#carousel-next')
const prev_btn = document.querySelector('#carousel-prev')
const experiments = document.querySelectorAll('.ex-div')
const $title = $('#experiment-title')

const last_slide = experiments.length - 1

var slide = 0;

function animate_title() {
    let slide_title
    slide_title = '"' + experiments[slide].title + '"'
    $title.stop().hide().text(slide_title).fadeIn(500).delay(2000).fadeOut(500)
}

next_btn.addEventListener('click', () => {
    experiments[slide].style.display = "none"
    slide++;
    experiments[slide].style.display = "flex"
    animate_title()
    if (slide === last_slide) {
        next_btn.style.display = "none"
    }
    if (slide === 1) {
        prev_btn.style.display = "block"
    }
})

prev_btn.addEventListener('click', () => {
    experiments[slide].style.display = "none"
    slide--;
    experiments[slide].style.display = "flex"
    animate_title()
    if (slide === 0) {
        prev_btn.style.display = "none"
    }
    if (slide === last_slide - 1) {
        next_btn.style.display = "block"
    }
})

// On page load

animate_title()