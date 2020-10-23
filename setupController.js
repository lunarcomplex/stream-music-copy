// setup controller
//
//
//
//

var delta = 0;
var then = Date.now();
var single_second = 0;
var ten_second = 0;

// build the canvases
var main_canvas = document.getElementById("main_canvas");
var main_context = main_canvas.getContext("2d");
	main_canvas.width = 1920;
	main_canvas.height = 1080;

var hud_canvas = document.getElementById("hud_canvas");
var hud_context = hud_canvas.getContext("2d");
	hud_canvas.width = 1920;
	hud_canvas.height = 1080;

var hidden_canvas = document.getElementById("hidden_canvas");
var hidden_context = hidden_canvas.getContext("2d");
	hidden_canvas.width = 0;
	hidden_canvas.height = 0;

var resized_ratio = 1;

var first_time_play = false;

var song_info = {
	title: "",
	duration: 0,
	x: main_canvas.width,
	y: main_canvas.height/8,
	xx: 0,
	tox: 200
};

var volume_text = {
	duration: 0
};

var shine = {
	x: main_canvas.width/2,
	y: main_canvas.height/16
};

var textSizeMod = 1.25;
var text_size = 32;


// in windows; to quickly get a text list of all the music filenames... (of mp3s)
// 1. open cmd
// 2. navigate to this file path and into the music folder
// 3. command to use: dir > text.txt
// 4. this will list out all the filenames (with some extra data) in a text doc you can
// 		copy and paste into this array below. (text editor sublime to remove the extra data easily)
var song_list = [
	// "some song filename",
	// "some other song filename",
	// "another song filename"
];