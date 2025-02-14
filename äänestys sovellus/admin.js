let current_poll_number=0;
let uudet_aanestykset='';
function createPoll(){
    current_poll_number+=1;
    let poll_name=prompt("Syöttä äänestyksen nimi:");
    let poll_kuvaus=prompt("Syöttä äänestyksen kuvaus:");
    let vote_for=0; let votes_against=0;
    uudet_aanestykset+=`<li><a href="#" id="poll${current_poll_number}_link" role="button">${poll_name}
    </a><a id="votes_for${current_poll_number}"> Votes for: ${vote_for} |</a><a id="votes_against${current_poll_number}"> Votes against: ${votes_against}</a></li>`
    document.getElementById("poll_list_container_h2").textContent="Äänestykset"
    document.getElementById("poll_list").innerHTML=uudet_aanestykset;
    function returnPoll_kuvaus(){
        return poll_kuvaus
    }
    returnPoll_kuvaus()
}

function createVoteBtn(){
    let kuvaus=returnPoll_kuvaus();
    document.getElementById("poll_details").innerHTML="<h2>Äänestyksen yksityiskohdat</h2>"
    document.getElementById("aanestyys_kuvaus").textContent=`${kuvaus}`;
}

function Vote(){

}





document.getElementById("create_poll").addEventListener("click",createPoll);
//tarkistaa joka 5 sek jos on uusia äänestyksiä ja antaa äänestämään
window.setInterval(function(){
    for(let x=0;x<current_poll_number;x++){
        document.getElementById(`poll${current_poll_number}_link`).addEventListener("click",createVoteBtn);
    }
},5000);
