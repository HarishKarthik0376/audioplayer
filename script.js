var playing = 0;
var previous = 4;
var next = 0;
var audio = document.getElementById("vikram1");
let prog = document.getElementById("rang");
let search = document.getElementById("search");
document.getElementById("add").addEventListener("click", function(){
    const array = ["vikram1","chaleya","closer","sodakku"];
    for(i=0;i<array.length;i++)
    { 
        if(array[i].includes(search.value))
               
            {       audio = document.getElementById(array[i]);
                    document.getElementById("box").style.display = "block"
                    document.getElementById("box1").style.display = "none"
                    document.getElementsByClassName("musicicon")[0].style.display = "none";
                    document.getElementsByClassName("musicicon")[i].style.display = "block";
                    document.getElementById("mainpage").style.display = "none"; 
                }
    } 
console.log(array);
   
   
})


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
    audio.pause();
    audio.currentTime = prog.value;
    audio.play();
    document.getElementById("play1").style.display = "none";
    document.getElementById("pause").style.display = "block";
    document.querySelector("#pause").addEventListener("click",function(){
        audio.pause();
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
    })
    
})
prog.addEventListener("touchmove",function(){
    audio.pause();
    audio.currentTime = prog.value;
    audio.play();
    document.getElementById("play1").style.display = "none";
    document.getElementById("pause").style.display = "block";
    document.querySelector("#pause").addEventListener("click",function(){
        audio.pause();
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
    })
    
})
prog.addEventListener("touchend",function(){
    audio.pause();
    audio.currentTime = prog.value;
    audio.play();
    document.getElementById("play1").style.display = "none";
    document.getElementById("pause").style.display = "block";
    document.querySelector("#pause").addEventListener("click",function(){
        audio.pause();
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        playing=0;
    })
   
})


document.getElementById("playsong").addEventListener("click",function(){
        document.getElementById("box1").style.display = "none";
        document.getElementById("box").style.display = "block";
        document.getElementById("song1").style.display = "block";
        audio =  document.getElementById("vikram1");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        console.log(audio);
        next = 0;
     
        
})
document.getElementById("playsong1").addEventListener("click",function(){
        document.getElementById("box1").style.display = "none";
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.display = "block";
        document.getElementById("song2").style.display = "block";
        audio =  document.getElementById("chaleya");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        console.log(audio);
        next = 1;
        previous = 4;

})
document.getElementById("playsong2").addEventListener("click",function(){
        document.getElementById("box1").style.display = "none";
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.display = "block";
        document.getElementById("song3").style.display = "block";
        audio =  document.getElementById("closer");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        console.log(audio);
        next = 2;
        previous = 3;
   
})
document.getElementById("playsong3").addEventListener("click",function(){
        document.getElementById("box1").style.display = "none";
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.display = "block";
        document.getElementById("song4").style.display = "block";
        audio =  document.getElementById("sodakku");
        document.getElementById("play1").style.display="block";
        document.getElementById("pause").style.display="none";
        console.log(audio);
        next = 3;
        previous = 2;

        
})
document.getElementById("goback").addEventListener("click",function(){
    audio.currentTime = 0;
    audio=0;
    playing=0;
    document.getElementById("box").style.display = "none";
    document.getElementById("song1").style.display="none"
    document.getElementById("song2").style.display="none"
    document.getElementById("song3").style.display="none"
    document.getElementById("song4").style.display="none"
    document.getElementById("box1").style.display = "block";
    document.getElementById("allsongs").style.display = "block";
    console.log(audio);
})
document.getElementById("available").addEventListener("click",function(){
    document.getElementById("mainpage").style.display = "none";
    document.getElementById("allsongs").style.display = "block";
})
document.getElementById("goback1").addEventListener("click",function(){
    document.getElementById("allsongs").style.display = "none";
    document.getElementById("mainpage").style.display = "block";
    search.value="";
})


