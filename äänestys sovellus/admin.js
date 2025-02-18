let current_poll_number = 0;
let uudet_aanestykset = [];
let poll_details = {}; 
import {panel_visiblity} from './main.js';

function Panel_Visible(){
    if(panel_visiblity===false){
        document.getElementById("moderator_panel").innerHTML='';
    }
}
Panel_Visible();

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
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

function delete_poll() {
    let a = 0;
    let poll_nimi_prompt = prompt("Syötä äänestyksen nimi:");
    for (let x in poll_details) {
        if (poll_details[x].nimi === poll_nimi_prompt) {
            delete poll_details[x];
            uudet_aanestykset.splice(a, 1);
            document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
            break;
        } else {
            a += 1;
        }
    }
}

function createVoteBtn(poll_id) {
    let poll = poll_details[poll_id];
    document.getElementById("poll_details").innerHTML = "<h2>Äänestyksen yksityiskohdat</h2>";
    document.getElementById("poll_details").innerHTML += `<p>${poll.kuvaus}</p>`;
    document.getElementById('poll_buttons').innerHTML = `
        <button id='Vote_ForBtn' onclick='Vote_For(${poll_id})'>Vote for</button>
        <button id='Vote_AgainstBtn' onclick='Vote_Against(${poll_id})'>Vote against</button>`;
}

function Vote_For(poll_id) {
    poll_details[poll_id].votesFor += 1;
    uudet_aanestykset[poll_id - 1] = `<li><a href="#" role="button" id="poll${poll_id}_link" onclick="createVoteBtn(${poll_id})">${poll_details[poll_id].nimi}</a>
        <a id="votes_for${poll_id}"> Votes for: ${poll_details[poll_id].votesFor} |</a><a id="votes_against${poll_id}"> Votes against: ${poll_details[poll_id].votesAgainst}</a></li>`;
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

function Vote_Against(poll_id) {
    poll_details[poll_id].votesAgainst += 1;
    uudet_aanestykset[poll_id - 1] = `<li><a href="#" role="button" id="poll${poll_id}_link" onclick="createVoteBtn(${poll_id})">${poll_details[poll_id].nimi}</a>
        <a id="votes_for${poll_id}"> Votes for: ${poll_details[poll_id].votesFor} |</a><a id="votes_against${poll_id}"> Votes against: ${poll_details[poll_id].votesAgainst}</a></li>`;
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

document.getElementById("create_poll").addEventListener("click", createPoll);
document.getElementById("delete_poll").addEventListener("click", delete_poll);
