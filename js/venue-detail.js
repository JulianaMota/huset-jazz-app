const template = document.querySelector("#venue-detail-template").content;
const venueID = param.get("venueid");
console.log(venueID);

function loadOneVenue(venueID){
    fetch(baseLink+"venues/"+venueID+"?_embed").then(e=>e.json()).then(showOneVenue);
}

function showOneVenue(data){
    console.log(data);
    const copy = template.cloneNode(true);

    if(data._embedded['wp:featuredmedia'][0].media_details.sizes.large){
        copy.querySelector(".venue-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    }else{
        copy.querySelector(".venue-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    }
    copy.querySelector("h2").textContent=data.title.rendered;
    copy.querySelector(".room-location").textContent=data.acf.venue_location;
    copy.querySelector(".venue-text").innerHTML=data.content.rendered;
    copy.querySelector(".name-EO").textContent=data.acf.event_organizer_name;
    copy.querySelector(".email-EO").textContent=data.acf.event_organizer_email;
    copy.querySelector(".phone-EO").textContent=data.acf.event_organizer_contact;
    copy.querySelector(".usage span").textContent=data.acf.usage;
    copy.querySelector(".rent span").textContent=data.acf.price;
    copy.querySelector(".capacity span").textContent=data.acf.max_capacity;
    copy.querySelector(".sound span").textContent=data.acf.soundproofing;
    copy.querySelector(".acoustic span").textContent=data.acf.acoustic;
    copy.querySelector(".stage span").textContent=data.acf.stage_area;
    copy.querySelector(".a-room span").textContent=data.acf.artist_room;
    copy.querySelector(".catering span").textContent=data.acf.catering;
    copy.querySelector(".clean span").textContent=data.acf.cleaning;
    copy.querySelector(".access span").textContent=data.acf.building_acess;
    copy.querySelector(".facilities span").textContent=data.acf.venue_facilities;
    copy.querySelector(".mixer span").innerHTML=data.acf.mixer;
    copy.querySelector(".pa span").innerHTML=data.acf.pa;
    copy.querySelector(".monitors span").innerHTML=data.acf.monitors;
    copy.querySelector(".lights span").innerHTML=data.acf.lights;
    copy.querySelector(".mics span").innerHTML=data.acf.mics;


    document.querySelector("main").appendChild(copy);
}

loadOneVenue(venueID);