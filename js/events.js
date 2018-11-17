const template = document.querySelector("#template-events").content;

function getJazzMusic(){
    fetch(baseLink+"music?categories=2").then(res => res.json()).then(showEvents);
}

function showEvents(eventsList){
    console.log(eventsList)
}

getJazzMusic();
