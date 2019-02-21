// Input Variables

var start_color = '0932C6'
var end_color = 'FFB100'
var intervals = 10;

// Script Variables

var start_colors = {}
var end_colors = {}
var color_objects = {}
var color_ranges = {}
var all_color_stops = {
    red: '',
    green: '',
    blue: ''
}
var rgb_color_stops = []
var gradient_statement = ''

const start_color_input = document.querySelector('#start-color-input')
const end_color_input = document.querySelector('#end-color-input')
const stripes_input = document.querySelector('#stripes-input')
const make_gradient_btn = document.querySelector('#make-gradient-btn')
const hide_form_btn = document.querySelector('#hide-form-btn')
const show_form_btn = document.querySelector('#show-form-btn')
const ex4 = document.querySelector('#ex4')

// Functions

function parse_rgb(hex_value) {
    let colors = {
        red: '',
        green: '',
        blue: ''
    }
    colors.red = hex_value.substring(0,2)
    colors.green = hex_value.substring(2,4)
    colors.blue = hex_value.substring(4,6)
    return colors;
}

function hex_to_decimal(hex_num) {
    let formatted_hex = '0x'+ hex_num
    let decimal = parseInt(formatted_hex)
    return decimal
}

function color_obj_to_decimal(color_obj) {
    for (var color in color_obj) {
        color_obj[color] = hex_to_decimal(color_obj[color])
    }
}

function get_color_ranges(colors) {
    let color_ranges = {
        red: '',
        green: '',
        blue: ''
    }
    color_ranges.red = colors.end.red - colors.start.red
    color_ranges.green = colors.end.green - colors.start.green
    color_ranges.blue = colors.end.blue - colors.start.blue
    return color_ranges
}

function make_color_stops(color) {
    let step
    let color_stops = []
    step = color_ranges[color] / intervals
    for (let i = 0; i < intervals; i++) {
        let color_stop
        color_stop = start_colors[color] + (step * i)
        color_stops.push(color_stop)
    }
    return color_stops
}

function write_rgb(stop) {
    let rgb = 'rgb(' 
    rgb += all_color_stops.red[stop] + ", "
    rgb += all_color_stops.green[stop] + ", "
    rgb += all_color_stops.blue[stop] + ")"
    return rgb
}

function write_gradient_statement() {
    let step
    step = 100 / intervals
    gradient_statement = "linear-gradient(to right"
    let stripe = false   
    for (let i = 0; i < rgb_color_stops.length; i++) {  
        if (stripe) {
            stripe = !stripe
            gradient_statement += ", " + rgb_color_stops[i] + " " + (step * i - 1) + "%"
            gradient_statement += ", #fff " + (step * i) + "%"
            gradient_statement += ", #fff " + (step * (i + 1) -1) + "%"
        } else {
            stripe = !stripe
            gradient_statement += ", " + rgb_color_stops[i] + " " + (step * i) + "%"
        }
    }
    gradient_statement += ")"
}

function get_user_input() {
    start_color = start_color_input.value 
    end_color = end_color_input.value
    intervals = stripes_input.value * 2
    console.log("start color: " + start_color)
    console.log("end color: " + end_color)
    console.log("intervals: " + intervals)
}

function make_new_gradient() {
    
    // Extract individual color codes and convert to decimal

    start_colors = parse_rgb(start_color)
    end_colors = parse_rgb(end_color)
    color_obj_to_decimal(start_colors)
    color_obj_to_decimal(end_colors)

    // Get color ranges

    color_objects.start = start_colors
    color_objects.end = end_colors
    color_ranges = get_color_ranges(color_objects)

    // Calculate color stops

    for (var color in all_color_stops) {
        all_color_stops[color] = make_color_stops(color)
    }

    // Write gradient statement

    for (let i = 0; i < intervals; i++) {
        rgb_color_stops.push(write_rgb(i))
    }
    console.log("intervals: " + intervals)
    console.log("rgb_color_stops: " + rgb_color_stops)
    write_gradient_statement()
    console.log("gradient statement: " + gradient_statement)
    ex4.style.backgroundImage = gradient_statement
    rgb_color_stops = []

}

// Script

make_new_gradient()

make_gradient_btn.addEventListener('click', () => {
    get_user_input()
    make_new_gradient()
})