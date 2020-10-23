// graphics controller
//
//
//
//



function drawText(context, text, x, y, align, baseline, red, green, blue, alpha, size, font, shadow){
	if(shadow){
		context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
		context.font = (size*resized_ratio) + "px " + font;
		context.textAlign = align;
		context.textBaseline = baseline;
		context.fillText(text, (x+2)*resized_ratio, (y+2)*resized_ratio);
	}
	context.fillStyle = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
	context.font = (size*resized_ratio) + "px " + font;
	context.textAlign = align;
	context.textBaseline = baseline;
	context.fillText(text, x*resized_ratio, y*resized_ratio);
}

function drawSquare(context, x, y, width, height, revolve, rotation_angle, rotation_distance, red, green, blue, alpha){
	x *= resized_ratio;
	y *= resized_ratio;
	width *= resized_ratio;
	height *= resized_ratio;
	rotation_distance *= resized_ratio;

	x += Math.cos(rotation_angle)*rotation_distance;
	y += Math.sin(rotation_angle)*rotation_distance;

	context.save();

	context.globalAlpha = alpha;

	context.translate((x), (y));
	context.rotate(revolve);
	context.translate((x)*(-1), (y)*(-1));

	context.beginPath();
	context.rect(x-width/2, y-height/2, width, height);
	context.fillStyle = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
	context.fill();

	context.restore();
}

function drawLine(context, x1, y1, x2, y2, thickness, red, green, blue, alpha){
	x1 *= resized_ratio;
	y1 *= resized_ratio;
	x2 *= resized_ratio;
	y2 *= resized_ratio;
	thickness *= resized_ratio;

	var tempLineWidth = context.lineWidth;

	context.beginPath();
	context.lineWidth = thickness;
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeStyle = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
	context.stroke();
	
	context.lineWidth = tempLineWidth;
}

function hiddenStart(width, height){
	// step 1: setup the hidden canvas sizes then clear it
	hidden_canvas.width = width;
	hidden_canvas.height = height;

	hidden_context.clearRect(0, 0, main_canvas.width, main_canvas.height);
}
function hiddenType(type){// string: "destination-out", "destination-in", "source-out", "source-in"
	// step 3: which type of keying?
	hidden_context.globalCompositeOperation = type;
}
function hiddenEnd(){
	// step 5: pull image data from hidden_canvas
	main_context.drawImage(hidden_canvas, 0, 0);
}