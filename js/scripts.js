$(document).ready(function(){

// sample play function (for testing)
// $(".play").on("click", function(){
// 	$("#audio-source")[0].play();
// });

// empty songs array
var songs = [];

// song constructor function
function Song(artist, title, year, genre, link, image){
	this.artist = artist;
	this.title = title;
	this.year = year;
	this.genre = genre;
	this.link = link;
	this.image = image;
	this.playCount = 0;
	songs.push(this);
}

// a bunch of Song instances to preload into songs array

var song01 = new Song("Chromatics", "Cherry", "2012", "electro-pop", "media/chromatics-cherry.mp3", "images/chromatics.jpg");

var song02 = new Song("FEMME", "Fever Boy", "2014", "pop", "media/femme-fever_boy.mp3", "images/femme.jpg");

var song03 = new Song("Duvchi", "Unfamiliar Love", "2015", "electro-pop", "media/duvchi-unfamiliar_love.mp3", "images/duvchi.jpg");

var song04 = new Song("Sales", "Jamz", "2016", "indie pop", "media/sales-jamz.mp3", "images/sales.jpg");

var song05 = new Song("Radiohead", "Burn The Witch", "2016", "alternative", "media/radiohead-burn_the_witch.mp3", "images/radiohead.jpg");

var song06 = new Song("Arthur Beatrice", "Since We Were Kids", "2016", "alternative", "media/arthur_beatrice-since_we_were_kids.mp3", "images/arthur_beatrice.jpg");

var song07 = new Song("Dua Lipa", "Hotter Than Hell", "2016", "pop", "media/dua_lipa-hotter_than_hell.mp3", "images/dua_lipa.jpg");

var song08 = new Song("Yumi Zouma", "Keep It Close To Me", "2016", "dream pop", "media/yumi_zouma-keep_it_close_to_me.mp3", "images/yumi_zouma.jpg");

// var song09 = new Song("Champanes", "Days Away", "2016", "dream pop", "media/champanes-daysaway.mp3", "images/champanes.jpg");

// var song10 = new Song("Maria Usbeck", "Moai Y Yo", "2016", "dream pop", "media/maria_usbeck-moai_y_yo.mp3", "images/maria_usbeck.jpg");

// var song11 = new Song("Stefan Weich", "Holy Nights", "2016", "dream pop", "media/stefan_weich-holy_nights.mp3", "images/stefan_weich.jpg");

// var song12 = new Song("Ela Minus", "Kiddo", "2015", "electro-pop", "media/ela_minus-kiddo.mp3", "images/ela_minus.jpg");

// var song13 = new Song("Programm", "Like The Sun", "2015", "shoegaze", "media/programm-like_the_sun.mp3", "images/programm.jpg");

// var song14 = new Song("Natacha Atlas", "Mon Amie La Rose", "1999", "world beat", "media/natacha_atlas-mon_amie_la_rose.mp3", "images/natacha_atlas.jpg");

// songs array hardcoded with two songs (for testing)
// var songs = [{artist:"Chromatics", title:"Cherry", year:"2012", link:"media/chromatics-cherry.mp3", genre:"electro-pop", image:"images/chromatics.jpg"}, {artist:"FEMME", title:"Fever Boy", year:"2014", link:"media/femme-fever_boy.mp3", genre:"pop", image:"images/femme.jpg"}];

// random number function for songs array
function randomSong(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Jukebox(songs) {
	this.songs = songs;
	this.counter = 0;
	this.currentSong = this.songs[0];

	this.play = function(){
		$("#audio-source").attr("src", this.currentSong.link);
		$("#audio-source")[0].play();
		$("#audio-source")[0].duration = length;
		var minutes = Math.floor(length/60);
		var seconds = length - minutes * 60;
		if(seconds < 10){
			seconds = "0" + seconds;
		}
		$("#artist").text(this.currentSong.artist);
		$("#title").text(this.currentSong.title);
		$("#year").text(this.currentSong.year);
		$("#genre").text(this.currentSong.genre);
		$("#track-length").text(minutes + ":" + seconds);
		$("#play-count").text(this.currentSong.playCount);
		$("#image").html("<img src='" + this.currentSong.image + "'>")
		this.currentSong.playCount += 1;
		// this.counter += 1;
	}

	this.pause = function(){
		$("#audio-source")[0].pause();
		// $("#pause").attr("class", "unpause");
	}

	// this.unpause = function(){
	// 	$("#audio-source")[0].play();
	// }

	this.stop = function(){
		$("#audio-source")[0].pause();
		this.counter = 0;
		this.currentSong = this.songs[this.counter];
	}

	this.next = function(){
		if(this.counter == this.songs.length - 1) {
			this.counter = 0;
		} else {
		this.counter += 1;
		}
		this.currentSong = this.songs[this.counter];
		this.play();
	}

	this.previous = function(){
		if(this.counter == 0) {
			this.counter = this.songs.length - 1;
		} else {
		this.counter -= 1;
		}
		this.currentSong = this.songs[this.counter];
		this.play();
	}

	this.shuffle = function(){
		this.counter = randomSong(0, this.songs.length);
		this.currentSong = this.songs[this.counter];
		this.play();
	}

	this.load = function(songObject){
		this.songs.push(songObject);
	}

}

$("#audio-source")[0].onended = function(){
	juke.next();
};

// creating an instance of Jukebox, preloaded with songs array:
var juke = new Jukebox(songs);

// play function
$(".play").on("click", function(){
	juke.play();
});

// pause function
$(".pause").on("click", function(){
	juke.pause();
});

// $(".unpause").on("click", function(){
// 	juke.unpause();
// });

// stop function
$(".stop").on("click", function(){
	juke.stop();
});

// previous function
$(".previous").on("click", function(){
	juke.previous();
});

// next function
$(".next").on("click", function(){
	juke.next();
});

$(".random").on("click", function(){
	juke.shuffle();
})

$(".submit").on("click", function(){
	console.log(addartist);
	var newSong = new Song(addartist, addtitle, addyear, addgenre, addlink, addimage);
})

});