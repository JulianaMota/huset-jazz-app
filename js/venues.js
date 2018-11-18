const template = document.querySelector("#template-venues").content;

function getConcertVenues(){
    fetch(baseLink+"venues?categories=5&_embed").then(res => res.json()).then(showVenues);
}

function showVenues(venuesList){
    console.log(venuesList)
    venuesList.forEach(venue =>{
        console.log(venue);
        const copy = template.cloneNode(true);
        copy.querySelector("h3").textContent=venue.title.rendered;
        copy.querySelector("img").src=venue.acf.menu_photo.sizes.medium;

        document.querySelector("section").appendChild(copy);
    })
}

getConcertVenues()