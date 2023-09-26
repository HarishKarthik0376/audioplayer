var playing = 0;
var previous = 4;
var next = 0;
var audio = document.getElementById("vikram1");
let prog = document.getElementById("rang");
audio.onloadedmetadata = function(){
    prog.max=audio.duration;
    prog.value=audio.currentTime;
}
document.getElementById("play1").addEventListener("click",function(){
    if(playing==0)
    {    audio.play();
        document.getElementById("play1").style.display="none";
        document.getElementById("pause").style.display="block";
        playing=1;
        setInterval(() => {
            prog.value = audio.currentTime;
        }, 500);
        
    }
    document.querySelector("#pause").addEventListener("click",function(){
        if(playing==1)
    {   audio.pause();
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
    }
    })
})
document.getElementById("forward").addEventListener("click",function(){
    audio.currentTime=0;
    if(next==0){
        audio.pause();
        document.getElementById("song1").style.display = "none";
        document.getElementById("song2").style.display = "block";
        audio =  document.getElementById("chaleya");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
        next=1;
        previous=4;
    }
    else if(next==1)
        {
            audio.pause();
            document.getElementById("song2").style.display = "none";
            document.getElementById("song3").style.display = "block";
            audio =  document.getElementById("closer");
            document.getElementById("play1").style.display="block";
            document.getElementById("pause").style.display="none";
            playing=0;
            next=2;
            previous=3;
        }
    else if(next==2)
        {
            audio.pause();
            document.getElementById("song3").style.display = "none";
            document.getElementById("song4").style.display = "block";
            audio =  document.getElementById("sodakku");
            document.getElementById("play1").style.display="block";
            document.getElementById("pause").style.display="none";
            playing=0;
            next=3;
            previous=2;
        }

})
    document.getElementById("backward").addEventListener("click",function(){
        audio.currentTime=0;
        
    if(previous==4)
    {
    audio.pause();
    document.getElementById("song2").style.display = "none";
    document.getElementById("song1").style.display = "block";
    audio =  document.getElementById("vikram1");
    document.getElementById("play1").style.display="block";
    document.getElementById("pause").style.display="none";
    playing=0;
    next=0;
    }
    else if(previous==3)
    {
        audio.pause();
        document.getElementById("song3").style.display = "none";
        document.getElementById("song2").style.display = "block";
        audio =  document.getElementById("chaleya");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
        next=1;
        previous=4;
    }
    else if(previous==2)
    {
        audio.pause();
        document.getElementById("song4").style.display = "none";
        document.getElementById("song3").style.display = "block";
        audio =  document.getElementById("closer");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
        next=1;
        previous=3;
    }

})
prog.addEventListener("click",function(){
    audio.currentTime = prog.value;
    audio.play();
})
prog.addEventListener("touchmove",function(){
    audio.currentTime = prog.value;
    audio.play();
})

    

