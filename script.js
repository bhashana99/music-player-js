let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let isPlaying = false;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(isPlaying){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
    isPlaying = !isPlaying; // Toggle the isPlaying variable
}

song.addEventListener("play", function(){
    isPlaying = true;
    updateProgressBar();
});

song.addEventListener("pause", function(){
    isPlaying = false;
});

function updateProgressBar(){
    setInterval(() => {
        if (isPlaying) {
            progress.value = song.currentTime;
        }
    }, 500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
