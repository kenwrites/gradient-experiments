const next_btn = document.querySelector('#carousel-next')
const prev_btn = document.querySelector('#carousel-prev')
const experiments = document.querySelectorAll('.ex-div')
const title = document.querySelector('#experiment-title')

const last_slide = experiments.length - 1

var slide = 0;

next_btn.addEventListener('click', () => {
    experiments[slide].style.display = "none"
    slide++;
    experiments[slide].style.display = "flex"
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
    if (slide === 0) {
        prev_btn.style.display = "none"
    }
    if (slide === last_slide - 1) {
        next_btn.style.display = "block"
    }
})
