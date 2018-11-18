const template = document.querySelector("#jam-template").content;

function getJamSessions(){
    fetch(baseLink+"jam_session").then(res => res.json()).then(showJamS);
}

function showJamS(jamList){
    console.log(jamList);
    jamList.forEach(jamS => {
        console.log(jamS);
        const copy = template.cloneNode(true);
        copy.querySelector("h3").textContent=jamS.title.rendered;
        copy.querySelector(".date").textContent=jamS.acf.date;
        copy.querySelector(".hour").textContent=jamS.acf.hour;
        copy.querySelector(".music-1").textContent=jamS.acf.musician_1;
        copy.querySelector(".music-2").textContent=jamS.acf.musician_2;
        copy.querySelector(".music-3").textContent=jamS.acf.musician_3;
        copy.querySelector(".music-4").textContent=jamS.acf.musician_4;

        document.querySelector(".jam-session").appendChild(copy);
    })
}

getJamSessions();