var red_color_stops = {}
var green_color_stops = {}
var blue_color_stops = {}
var gradient = ''
var start_color_input = '0E4698'
var start_colors = {}
var end_color_input = 'F4A8D9'
var end_colors = {}
var color_objects = {}
var color_ranges = {}
var intervals = 10;
var color_iterator = ["red", "green", "blue"]
var all_color_stops = {
    red: '',
    green: '',
    blue: ''
}
var rgb_color_stops = []

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
    // console.log("step = " + step)
    for (let i = 0; i < intervals; i++) {
        let color_stop
        color_stop = start_colors[color] + (step * i)
        // console.log("color_stop = " + color_stop)
        color_stops.push(color_stop)
        // console.log("color_stops = " + color_stops)
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

// Extract individual color codes

start_colors = parse_rgb(start_color_input)
end_colors = parse_rgb(end_color_input)

// Convert to decimal

color_obj_to_decimal(start_colors)
color_obj_to_decimal(end_colors)

// Assign to color_objects, for input to get_color_ranges function

color_objects.start = start_colors
color_objects.end = end_colors

// Get color ranges

color_ranges = get_color_ranges(color_objects)

// Calculate color stops

for (var color in all_color_stops) {
    all_color_stops[color] = make_color_stops(color)
}

// Convert to RGB statements

for (let i = 0; i < intervals; i++) {
    rgb_color_stops.push(write_rgb(i))
}
    
// Write gradient statement 


