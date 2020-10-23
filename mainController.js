// main controller
//
//
//
//



function main(){

	gameLoop();

	function gameLoop(){
		var now = Date.now();
		delta = now-then;

		updateCounters();
		updateObjects();
		updateGraphics();

		then = now;
			
		requestAnimationFrame(gameLoop);
	}

	function updateCounters(){
		single_second += delta;
		if(single_second > 1000){
			single_second = 0;
		}
		ten_second += delta;
		if(ten_second > 10000){
			ten_second = 0;
		}
		if(song_info.duration > 0){
			song_info.duration -= delta;
			song_info.dx *= 0.95;
		}
		if(volume_text.duration > 0){
			volume_text.duration -= delta;
		}
	}

	function updateObjects(){
		if(music_player.ended){
			new_song = song_list[Math.floor(Math.random()*(song_list.length))];
			// console.log("now starting " + new_song);
			music_player.src = "music/" + new_song + ".mp3";
			music_player.play();

			main_context.font = text_size + "px Helvetica";

			song_info.title = new_song;
			song_info.duration = 10000;
			song_info.size = main_context.measureText(new_song).width*textSizeMod;
			song_info.x = main_canvas.width-song_info.size;
			song_info.y = main_canvas.height/16;
			song_info.dx = song_info.size;
			console.log(song_info);
		}
		if(shine.x < main_canvas.width+100){
			shine.x += 10;
		}else{
			shine.x = main_canvas.width/2;
		}
	}

	function updateGraphics(){
		// clear canvases
		main_context.clearRect(0, 0, main_canvas.width, main_canvas.height);
		hud_context.clearRect(0, 0, hud_canvas.width, hud_canvas.height);
		

		if(song_info.duration > 0){
			offset = song_info.size;
			baseAlpha = 0.8;
			if(song_info.duration/1000 < 0.8){
				baseAlpha = song_info.duration/1000;
			}



			hiddenStart(main_canvas.width, main_canvas.height);
			drawSquare(hidden_context,
				song_info.x+song_info.dx+(offset/2),
				song_info.y,
				offset, 45,
				0, 0, 0, 255, 255, 255, baseAlpha);

			hiddenType("destination-out");
			drawText(hidden_context, song_info.title,
				song_info.x+song_info.dx+(offset/2),
				song_info.y+3,
				"center", "middle", 225, 225, 225,
				song_info.duration/1000, text_size, "Helvetica", false);
			hiddenEnd();



			hiddenStart(main_canvas.width, main_canvas.height);
			drawText(hidden_context, song_info.title,
				song_info.x+song_info.dx+(offset/2),
				song_info.y+3,
				"center", "middle", 255, 255, 255,
				song_info.duration/1000, text_size, "Helvetica", false);

			hiddenType("destination-in");
			drawLine(hidden_context,
				shine.x, shine.y-50,
				shine.x+30, shine.y+50,
				50,
				255, 255, 255, 1);
			hiddenEnd();
		}


		if(volume_text.duration > 0){
			drawText(main_context, Math.floor(music_player.volume*100) + "%",
				main_canvas.width-60,
				song_info.y+main_canvas.height/16,
				"center", "middle", 255, 255, 255,
				volume_text.duration/1000, 48, "Helvetica", true);
		}

	}
}