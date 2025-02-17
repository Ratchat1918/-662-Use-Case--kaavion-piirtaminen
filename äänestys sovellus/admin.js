let current_poll_number = 0;
let uudet_aanestykset = [];
let poll_details = {}; 

function createPoll() {
    current_poll_number += 1;
    let poll_name = prompt("Syötä äänestyksen nimi:");
    let poll_kuvaus = prompt("Syötä äänestyksen kuvaus:");
    let vote_for = 0;
    let votes_against = 0;
    poll_details[current_poll_number] = {
        nimi: poll_name,
        kuvaus: poll_kuvaus,
        votesFor: vote_for,
        votesAgainst: votes_against
    };
    uudet_aanestykset.push(`<li><a href="#" role="button" id="poll${current_poll_number}_link" onclick="createVoteBtn(${current_poll_number})">${poll_name}</a>
    <a id="votes_for${current_poll_number}"> Votes for: ${vote_for} |</a><a id="votes_against${current_poll_number}"> Votes against: ${votes_against}</a></li>`);
    document.getElementById("poll_list_container_h2").textContent = "Äänestykset";
    document.getElementById("poll_list").innerHTML = uudet_aanestykset;
}
function delete_poll() {
    let a=0;
    poll_nimi_prompt=prompt("Syötä äänestyksen nimi:");
    for(let x in poll_details){
        if(poll_details[x].nimi===poll_nimi_prompt){
            delete poll_details[x];
            uudet_aanestykset.splice(a);
            document.getElementById("poll_list").innerHTML = uudet_aanestykset;
            break;
        }else{
            a+=1;
        }
    }
}

function createVoteBtn(poll_id) {
    let poll = poll_details[poll_id];
    document.getElementById("poll_details").innerHTML = "<h2>Äänestyksen yksityiskohdat</h2>";
    document.getElementById("poll_details").innerHTML += `<p>${poll.kuvaus}</p>`;
    document.getElementById("poll_buttons").innerHTML='<button id="Vote_ForBtn">Vote for</button><button id="Vote_ForBtn">Vote against</button>';
}

function Vote_For() {
}
function Vote_Against(){

}

document.getElementById("create_poll").addEventListener("click", createPoll);
document.getElementById("delete_poll").addEventListener("click", delete_poll);
