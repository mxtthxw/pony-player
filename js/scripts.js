$(document).ready(function(){

	$(".twilight-sparkle").on("click", function(){
		// $(".headline").css("color", "#653188");
		$(".t1").css("color", "#653188");
		$(".t2").css("color", "#653188");
		$(".t3").css("color", "#653188");
		$(".t4").css("color", "#653188");
		$(".t5").css("color", "#653188");
		$(".t6").css("color", "#653188");
		$(".pony-buttons").css("color", "#EE4D90");
		$("body").css("background", "#D0A1E1");
		$(".player").css("border", "10px solid #653188");
		$(".artist-image").css("border", "5px solid #653188");
		$(".info").css("color", "#EE4D90");
		$("#pony-image").attr("src", "images/twilight_sparkle2.png");
	})

	$(".applejack").on("click", function(){
		// $(".headline").css("color", "#F5EFB3");
		$(".t1").css("color", "#F5EFB3");
		$(".t2").css("color", "#F5EFB3");
		$(".t3").css("color", "#F5EFB3");
		$(".t4").css("color", "#F5EFB3");
		$(".t5").css("color", "#F5EFB3");
		$(".t6").css("color", "#F5EFB3");
		$(".pony-buttons").css("color", "#EA403F");
		$("body").css("background", "#F8B968");
		$(".player").css("border", "10px solid #F5EFB3");
		$(".artist-image").css("border", "5px solid #F5EFB3");
		$(".info").css("color", "#EA403F");
		$("#pony-image").attr("src", "images/applejack1.png");
	})

	$(".rainbow-dash").on("click", function(){
		// $(".headline").css("color", "#FFF");
		$(".t1").css("color", "#F13E32");
		$(".t2").css("color", "#F67634");
		$(".t3").css("color", "#F5EB7E");
		$(".t4").css("color", "#7AC240");
		$(".t5").css("color", "#1A96D4");
		$(".t6").css("color", "#662E8A");
		$(".pony-buttons").css("color", "#0193CF");
		$("body").css("background", "#9DD9F8");
		$(".player").css("border", "10px solid #0193CF");
		$(".artist-image").css("border", "5px solid #0193CF");
		// $(".info").css("color", "#FFF");
		$("#pony-image").attr("src", "images/rainbow_dash1.png");
	})

	$(".rarity").on("click", function(){
		// $(".headline").css("color", "#F5EFB3");
		$(".t1").css("color", "#654F9D");
		$(".t2").css("color", "#654F9D");
		$(".t3").css("color", "#654F9D");
		$(".t4").css("color", "#654F9D");
		$(".t5").css("color", "#654F9D");
		$(".t6").css("color", "#654F9D");
		$(".pony-buttons").css("color", "#75D7FD");
		// $("body").css("background", "#E8EDF0");
		$("body").css("background", "#FFF");
		$(".player").css("border", "10px solid #654F9D");
		$(".artist-image").css("border", "5px solid #654F9D");
		$(".info").css("color", "#75D7FD");
		$("#pony-image").attr("src", "images/rarity1.png");
	})

	$(".fluttershy").on("click", function(){
		// $(".headline").css("color", "#F5EFB3");
		$(".t1").css("color", "#F9BED3");
		$(".t2").css("color", "#F9BED3");
		$(".t3").css("color", "#F9BED3");
		$(".t4").css("color", "#F9BED3");
		$(".t5").css("color", "#F9BED3");
		$(".t6").css("color", "#F9BED3");
		$(".pony-buttons").css("color", "#EC90AE");
		$("body").css("background", "#FDF2AE");
		$(".player").css("border", "10px solid #F9BED3");
		$(".artist-image").css("border", "5px solid #F9BED3");
		$(".info").css("color", "#EC90AE");
		$("#pony-image").attr("src", "images/fluttershy1.png");
	})

	$(".pinkie-pie").on("click", function(){
		// $(".headline").css("color", "#F5EFB3");
		$(".t1").css("color", "#EF519A");
		$(".t2").css("color", "#EF519A");
		$(".t3").css("color", "#EF519A");
		$(".t4").css("color", "#EF519A");
		$(".t5").css("color", "#EF519A");
		$(".t6").css("color", "#EF519A");
		$(".pony-buttons").css("color", "#C52270");
		$("body").css("background", "#F7C2DA");
		$(".player").css("border", "10px solid #EF519A");
		$(".artist-image").css("border", "5px solid #EF519A");
		$(".info").css("color", "#C52270");
		$("#pony-image").attr("src", "images/pinkie_pie1.png");
	})

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

	// var song09 = new Song("Champanes", "Daysaway", "2016", "dream pop", "media/champanes-daysaway.mp3", "images/champanes.jpg");

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

		this.addDuration = function(){
			console.log($("#audio-source")[0].duration);
		}

		this.play = function(){
			$("#audio-source").attr("src", this.currentSong.link);
			$("#audio-source")[0].onloadedmetadata = function() {
	  		var length = $("#audio-source")[0].duration;
				var minutes = Math.floor(length/60);
				var seconds = Math.floor(length) - minutes * 60;
				if(seconds < 10){
					seconds = "0" + seconds;
				}
				$("#track-length").text(minutes + ":" + seconds);
			};
			// console.log($("#audio-source")[0].duration);
			$("#audio-source")[0].play();
			// console.log($("#audio-source")[0].duration);
			
			$("#artist").text(this.currentSong.artist);
			$("#title").text(this.currentSong.title);
			$("#year").text(this.currentSong.year);
			$("#genre").text(this.currentSong.genre);
			$("#play-count").text(this.currentSong.playCount);
			$("#image").html("<img class='artist-image' src='" + this.currentSong.image + "'>")
			this.currentSong.playCount += 1;
			// this.addDuration();
			// this.counter += 1;
		}

		this.pause = function(){
			// if ($("#audio-source")[0].isPlaying) {
			if (!$("#audio-source")[0].paused) {
				$("#audio-source")[0].pause();
				$("#pause").html("Resume");
			} else {
				$("#audio-source")[0].play();
				$("#pause").html("Pause");
			}
		}

		this.stop = function(){
			$("#audio-source")[0].pause();
			this.counter = 0;
			this.currentSong = this.songs[this.counter];
			$("#artist").text("");
			$("#title").text("");
			$("#year").text("");
			$("#genre").text("");
			$("#track-length").text("");
			$("#play-count").text("");
			$("#image").html("");
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
		console.log(juke.songs);
		var newSong = new Song($(".addartist").val(), $(".addtitle").val(), $(".addyear").val(), $(".addgenre").val(), $(".addlink").val(), $(".addimage").val());
		console.log(juke.songs);
		// juke.load(newSong);
		console.log("test");
		// $(".new-form").reset;
		$(".addmessage").html($(".addartist").val() + ' - "' + $(".addtitle").val() + '" has been added to Pony Player!');
		$(".addartist").val("");
		$(".addtitle").val("");
		$(".addyear").val("");
		$(".addgenre").val("");
		$(".addlink").val("");
		$(".addimage").val("");
		return false;
	})

});