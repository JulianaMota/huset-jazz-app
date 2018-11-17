const template = document.querySelector("#template-events").content;

function getJazzMusic(){
    fetch(baseLink+"music?categories=2&_embed").then(res => res.json()).then(showEvents);
}

function showEvents(eventsList){
    console.log(eventsList);
    eventsList.forEach(event =>{
        console.log(event);
        const copy = template.cloneNode(true);
        copy.querySelector("h3").textContent=event.title.rendered;

        if(event._embedded['wp:featuredmedia']){
            copy.querySelector("img").src=event._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
        }else {
            copy.querySelector("img").remove();
        }
        copy.querySelector(".date").textContent=event.acf.date;
        copy.querySelector(".hour").textContent=event.acf.hour;
        copy.querySelector(".price span").textContent=event.acf.door_price;
        console.log(event.id)
        copy.querySelector(".detail-link").href="event-detail.html?jazzid="+event.id;

        document.querySelector("section").appendChild(copy);
        }
    )
}

getJazzMusic();
