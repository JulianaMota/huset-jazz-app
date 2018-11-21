const template = document.querySelector("#event-detail-template").content;
const eventID = param.get("jazzid");
console.log(eventID)

function loadOneEvent(eventID){
    fetch(baseLink+"music/"+eventID+"?_embed").then(e=>e.json()).then(showOneEvent);
}

function showOneEvent(data){
    console.log(data)
    const copy = template.cloneNode(true);

    if(data._embedded['wp:featuredmedia'][0].media_details.sizes.large){
        copy.querySelector(".feature-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    }else{
        copy.querySelector(".feature-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
    }
    copy.querySelector("h2").textContent=data.title.rendered;
    copy.querySelector(".date").textContent=data.acf.date;
    copy.querySelector(".hour").textContent=data.acf.hour;
    copy.querySelector(".door-hour span").textContent=data.acf.door_hour;
    copy.querySelector(".venue").textContent=data.acf.venue;
    copy.querySelector(".buy-ticket").href=data.acf.link_ticket;

    if(data.acf.online_price){
        copy.querySelector(".o-price span").textContent = data.acf.online_price;
        copy.querySelector(".free").remove();
    }else{
        copy.querySelector(".o-price").remove();
        copy.querySelector(".free").textContent = data.acf.gratis_event;

    }

    if(data.acf.door_price) {
        copy.querySelector(".d-price span").textContent = data.acf.door_price;
    }else{
        copy.querySelector(".d-price").remove();
    }
    copy.querySelector(".access span").textContent=data.acf.building_acess;
    copy.querySelector(".description").innerHTML=data.content.rendered;

    if(data.acf.artist_photos){
        copy.querySelector(".artist-img").src=data.acf.artist_photos.sizes.medium;
    }else{
        copy.querySelector(".artist-img").remove();
    }

    copy.querySelector(".art-names").innerHTML=data.acf.musicians_names;

    if(data.acf.artist_description){
        copy.querySelector(".small-bio").innerHTML=data.acf.artist_description;
    }else{
        copy.querySelector(".small-bio").remove();
    }
    if(data.acf.apply_jam){
        copy.querySelector(".apply-jam").href=data.acf.apply_jam;
    }else{
        copy.querySelector(".apply-jam").remove();
    }

    copy.querySelector(".website").href=data.acf.artist_website;
    copy.querySelector(".link-web").textContent=data.acf.artist_website;
    copy.querySelector(".link-face").href=data.acf.artist_facebook;
    copy.querySelector(".link-inst").href=data.acf.artist_instagram;
    copy.querySelector(".album").innerHTML=data.acf.artist_album;


    document.querySelector("article").appendChild(copy);
}

loadOneEvent(eventID);