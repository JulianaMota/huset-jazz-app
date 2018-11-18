const templateAbout = document.querySelector("#template-about").content;
const templateContacts = document.querySelector("#template-contacts").content;

function getAboutInfo(){
    fetch(baseLink+"about_huset?_id=58&_embed").then(res => res.json()).then(showAbout);
    fetch(baseLink+"contacts?_id=68").then(res => res.json()).then(showContacts);
}

function showAbout(dataList){
    console.log(dataList);
    dataList.forEach(data =>{
        console.log(data);
        const copy = templateAbout.cloneNode(true);

        if(data._embedded['wp:featuredmedia'][0].media_details.sizes.large){
            copy.querySelector(".huset-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
        }else{
            copy.querySelector(".huset-img").src=data._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
        }

        copy.querySelector("h2").textContent=data.title.rendered;
        copy.querySelector(".huset-d").textContent=data.acf.intro_text;
        copy.querySelector(".storage").textContent=data.acf.storage_and_transport_of_gear;
        copy.querySelector(".rehearsal").textContent=data.acf.live_performance_rehearsal;
        copy.querySelector(".contact-reh span").textContent=data.acf.contact_rehearsal;
        copy.querySelector(".release").innerHTML=data.acf.release_concerts;
        copy.querySelector(".contact-rel span").textContent=data.acf.contact_release;
        copy.querySelector(".pay").innerHTML=data.acf.payment_info;
        copy.querySelector(".pr").innerHTML=data.acf.pr;


        document.querySelector("#about").appendChild(copy);

    })


}

function showContacts(contactList){
    contactList.forEach(contact => {
        console.log(contact);
        const clone = templateContacts.cloneNode(true);

        clone.querySelector("h2").textContent=contact.title.rendered;
        clone.querySelector(".map").innerHTML=contact.acf.map;
        clone.querySelector("h3").textContent=contact.acf.place_name;
        clone.querySelector(".address").textContent=contact.acf.address;
        clone.querySelector(".post").textContent=contact.acf.postal_code;
        clone.querySelector(".phone").textContent=contact.acf.main_phone_number;
        clone.querySelector(".o-hours span").textContent=contact.acf.office_opening_hour;
        clone.querySelector(".v-hours span").textContent=contact.acf.venues_opening_hours;


        document.querySelector("#contacts").appendChild(clone);

    })

}

getAboutInfo();