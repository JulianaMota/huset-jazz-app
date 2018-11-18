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

        if(jamS.acf.instrument_1.sizes){
            copy.querySelector(".instrument-1").src=jamS.acf.instrument_1.sizes.thumbnail;
        }else{
            copy.querySelector(".instrument-1").remove();
        }

        if(jamS.acf.instrument_2.sizes){
            copy.querySelector(".instrument-2").src=jamS.acf.instrument_2.sizes.thumbnail;
        }else{
            copy.querySelector(".instrument-2").remove();
        }

        if(jamS.acf.instrument_3.sizes){
            copy.querySelector(".instrument-3").src=jamS.acf.instrument_3.sizes.thumbnail;
        }else{
            copy.querySelector(".instrument-3").remove();
        }

        if(jamS.acf.instrument_4.sizes){
            copy.querySelector(".instrument-4").src=jamS.acf.instrument_4.sizes.thumbnail;
        }else{
            copy.querySelector(".instrument-4").remove();
        }


        document.querySelector(".jam-session").appendChild(copy);
    })
}

getJamSessions();