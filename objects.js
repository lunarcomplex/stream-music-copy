// objects (also kinda just setting up some setup stuff aswell)
//
//
//
//

music_player = document.createElement("audio");
new_song = song_list[Math.floor(Math.random()*(song_list.length))];
music_player.src = "music/" + new_song + ".mp3";
music_player.setAttribute("preload", "auto");
music_player.setAttribute("controls", "none");
music_player.style.display = "none";
music_player.volume = 0.18;
document.body.appendChild(music_player);

main_context.font = text_size + "px Helvetica";

song_info.title = new_song;
song_info.duration = 10000;
song_info.size = main_context.measureText(new_song).width*textSizeMod;
song_info.x = main_canvas.width-song_info.size;
song_info.y = main_canvas.height/16;
song_info.dx = song_info.size;

document.addEventListener("click", function(){
	if(!first_time_play){
		first_time_play = true;
		music_player.play();
	}else{
		music_player.pause();
		new_song = song_list[Math.floor(Math.random()*(song_list.length))];
		music_player.src = "music/" + new_song + ".mp3";
		music_player.play();

		main_context.font = text_size + "px Helvetica";

		song_info.title = new_song;
		song_info.duration = 10000;
		song_info.size = main_context.measureText(new_song).width*textSizeMod;
		song_info.x = main_canvas.width-song_info.size;
		song_info.y = main_canvas.height/16;
		song_info.dx = song_info.size;
	}
}, false);

document.addEventListener("wheel", event => {
    const delta = Math.sign(event.deltaY);
    music_player.volume += (-delta)/100;

    volume_text.duration = 1000;
});