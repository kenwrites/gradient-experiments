
var color_stops = {}
var gradient = ''
var start_color_input = '0E4698'
var start_colors = {}
var end_color_input = 'F4A8D9'
var end_colors = {}
var color_objects = {}
var color_ranges = {}
var intervals;

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
    let formatted_hex = '0x'
    let decimal;
    formatted_hex += hex_num
    decimal = parseInt(formatted_hex)
    return decimal
}

function get_color_ranges(colors) {
    let color_ranges = {
        red: '',
        green: '',
        blue: ''
    }
    return color_ranges
}

start_colors = parse_rgb(start_color_input)
end_colors = parse_rgb(end_color_input)
color_objects.start = start_colors
color_objects.end = end_colors
color_ranges = get_color_ranges(color_objects)


