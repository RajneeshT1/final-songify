 $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    
	//<!---------------------------PLAY/PAUSE OF SONG------------------------------------------>
					function toggleSong() {
								var song = document.querySelector('audio');
								if(song.paused == true) {
								console.log('Playing');
								$('.play-icon').removeClass('fa-play').addClass('fa-pause');
								song.play();
								}
								else {
								console.log('Pausing');
								$('.play-icon').removeClass('fa-pause').addClass('fa-play');
								song.pause();
								}
								}
								
		//<!------------------------------------calling a toggle function-------------------------------->	
								$('.play-icon').on('click', function() {
									toggleSong();
									});

								$('body').on('keypress',function(event) {
									if (event.keyCode == 32)
									{
									toggleSong();
									}
									}); 
	<!----------------------------------fancyTimeFormat of curenttime--------------------------->						
									
									function fancyTimeFormat(time)
{   
											// Hours, minutes and seconds
											var hrs = ~~(time / 3600);
											var mins = ~~((time % 3600) / 60);
											var secs = time % 60;

											// Output like "1:01" or "4:03:59" or "123:03:59"
											var ret = "";

											if (hrs > 0) {
												ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
											}

											ret += "" + mins + ":" + (secs < 10 ? "0" : "");
											ret += "" + secs;
											return ret;
										}
																			
		//<!---------------------------------------------------adding current time and duration of song-------------->							
									
									function updateCurrentTime() {
												var song = document.querySelector('audio');
												var currentTime = Math.floor(song.currentTime);
												currentTime = fancyTimeFormat(currentTime);
												var duration = Math.floor(song.duration);
												duration = fancyTimeFormat(duration)
												$('.time-elapsed').text(currentTime);
												$('.song-duration').text(duration);
											}
												
      // <!-------------------------------------adding list of song to your app-------------------------------------------->
												
																						
				
                                
											
										var songs = [{
										'name': 'Anaconda',
										'artist': 'Nicky+minaj',
										'album': 'my anaconda',
										'duration': '4:20',
									      'fileName': 'song1.mp3',
										'image':'song1.jpg'											   
											   
											},
											{
												'name': 'on the floor',
											'artist': 'pitbul',
												'album': 'stepp',
												'duration': '4:45',
												'fileName': 'song2.mp3',
												'image':'song2.jpg'	
												
												
											},
											{
												'name': 'let me love u',
												'artist': 'justin bieber',
												'album': 'dj snake',
												'duration': '3:24',
												'fileName': 'song3.mp3',
												'image':'song3.jpg'	
												
												
											},
											{
										'name': 'no problem',
										'artist': 'chris brown',
										'album': 'strange lady',
										'duration': '3:25',
										'fileName': 'song4.mp3',
										'image':'song4.jpg'	
											
												
											}]
									
	                                     //<!------RESTARTING THE SONG FROM WHERE IT PAUSED------------------------------->												
		                                    
											function addSongNameClickEvent(songObj,position) {
													 var songName = songObj.fileName; // New Variable
													var id = '#song' + position;
												$(id).click(function() {
												var audio = document.querySelector('audio');
												var currentSong = audio.src;
												if(currentSong.search(songName) != -1)
												{
												toggleSong();
                                                                                                 
												}
												else {
												audio.src = songName;
												toggleSong();
												changeCurrentSongDetails(songObj); // Function Call
												}
												});
												}
												
					//=================changing the	current image of the song============================//						
											
											function changeCurrentSongDetails(songObj) {
										$('.current-song-image').attr('src','img/' + songObj.image)
											$('.current-song-name').text(songObj.name)
											$('.current-song-album').text(songObj.album)
                                                 }
												

												
							window.onload = function() {
                                                        changeCurrentSongDetails(songs[0]);
		                                        for(var i =0; i < songs.length;i++) {
							var obj = songs[i];
							var name = '#song' + (i+1);
							var song = $(name);
							song.find('.song-name').text(obj.name);
							song.find('.song-artist').text(obj.artist);
							song.find('.song-album').text(obj.album);
							song.find('.song-length').text(obj.duration);
														
							addSongNameClickEvent(obj,i+1);
														
														
														
							}
													
														
							updateCurrentTime(); 
							setInterval(function() {
							updateCurrentTime()
							},1000);
                            $('#songs').DataTable({
							paging: false
							    });
							}
												
	
		                               
									   
											
