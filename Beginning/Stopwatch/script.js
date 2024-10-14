const start = document.getElementById("Start");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");

let passerttid = 0;
let interval; 
let kjører = false; 



start.addEventListener("click", function(){
    StartTimer();
})

stop.addEventListener("click", function(){
    StopTimer();
})

reset.addEventListener("click",function(){
    ResetTimer();
})






function timeformatering(ms){
    const timer = Math.floor(ms/3600000);
    const minutter = Math.floor((ms%3600000)/60000);
    const sekunder = Math.floor((ms%60000)/1000);

    return(
        (timer<10 ? "0" + timer : timer)+ ":"+ 
        (minutter<10 ? "0" + minutter: minutter) + ":"+
        (sekunder< 10 ? "0" + sekunder: sekunder)
    )

}

function StartTimer(){
    if(!kjører){
        kjører = true; 
        const Starttid = Date.now()-passerttid;


        interval = setInterval(()=> {
            passerttid = Date.now()-Starttid;
            document.getElementById("Timer").textContent = timeformatering(passerttid);
        },1000);

    }
}

function StopTimer(){
    if(kjører){
        kjører = false;
        clearInterval(interval);
    }
}

function ResetTimer(){
    kjører = false; 
    clearInterval(interval);
    passerttid = 0; 
    document.getElementById("Timer").textContent = "00:00:00";
}