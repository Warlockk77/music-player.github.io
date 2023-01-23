const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

const cover = document.getElementById('cover');


//song titles
const songs = ['one', 'two', 'three'] ;


//Kepp track of song 

let songIndex = 0 ;


//Inititally load dong details into Dom 

laodSong(songs[songIndex]) ;

//Update song detail 

function laodSong(song){
    title.innerText = song;
    audio.src =`music/${song}.mp3` ;
    cover.src = `img/${song}.jpg`;

}

//Play Song 

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();

    


}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
   


}

//Prev song

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;

    }

    laodSong(songs[songIndex]);

    playSong();
}



//Next Song
 

function nextSong() {
    songIndex++ ;

    if(songIndex>songs.length - 1) {
        songIndex = 0 ;

    }

    laodSong(songs[songIndex]);

    playSong();
}


//Update progress bar

function updateProgress(e) {
    const { duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`;


}


//Set progress abr 
function setProgressBar(e) {
    const width = this.clientWidth;

    const clickX = e.offsetX;
    

    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


//Event listner 


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong() ;
    }

    else {
        playSong();
    }




    

});


prevBtn.addEventListener('click', prevSong); 

nextBtn.addEventListener('click', nextSong); 


//Time Song Update 

audio.addEventListener('timeupdate', updateProgress);

//click on PROGRESS bar 

progressContainer.addEventListener('click', setProgressBar) ;

// Song ends 
audio.addEventListener('ended', nextSong) ;




