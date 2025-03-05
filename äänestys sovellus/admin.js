let current_poll_number = 0;
let poll_details = {};
let uudet_aanestykset = [
];
if(sessionStorage.getItem("Loged_as_user")===true){
    document.getElementById("moderator_panel").style.display="block";
}
for(let x=1;x<localStorage.length;x++){
    uudet_aanestykset.push(localStorage.getItem(`Poll${x}`))
};
document.getElementById("poll_list_container_h2").textContent = "Äänestykset";
document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');

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
    poll_id=current_poll_number;
    aanestyys=`<li><a href="#" role="button" id="poll${poll_id}_link" onclick="createVoteBtn(${poll_id})">${poll_details[poll_id].nimi}</a>
    <a id="votes_for${poll_id}"> Votes for: ${poll_details[poll_id].votesFor} |</a><a id="votes_against${poll_id}"> Votes against: ${poll_details[poll_id].votesAgainst}</a></li>`;
    localStorage.setItem(`Poll${poll_id}`,aanestyys);
    localStorage.setItem(`Kuvaus${poll_id}`,poll_details[poll_id].kuvaus);
    document.getElementById("poll_list_container_h2").textContent = "Äänestykset";
    for(let x=1;x<localStorage.length+1;x++){
        uudet_aanestykset.push(localStorage.getItem(`Poll${x}`))
    };
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

function delete_poll() {
    let poll_numero_prompt = prompt("Syötä äänestyksen numero:");
    localStorage.removeItem(`Poll${poll_numero_prompt}`);
    localStorage.removeItem(`Kuvaus${poll_id}`);
    uudet_aanestykset = [];
    for(let x=0;x<localStorage.length;x++){
        uudet_aanestykset.push(localStorage.getItem(`Poll${x}`))
    };
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

function createVoteBtn(poll_id) {
    document.getElementById("poll_details").innerHTML = "<h2>Äänestyksen yksityiskohdat</h2>";
    document.getElementById("poll_details").innerHTML += `<p>${localStorage.getItem(`Kuvaus${poll_id}`)}</p>`;
    document.getElementById('poll_buttons').innerHTML = `<button id='Vote_ForBtn' onclick='Vote_For(${poll_id})'>Vote for</button>
    <button id='Vote_AgainstBtn' onclick='Vote_Against(${poll_id})'>Vote against</button>`;
}

function Vote_For(poll_id) {
    poll_details[poll_id].votesFor += 1;
    uudet_aanestykset[poll_id] = `<li><a href="#" role="button" id="poll${poll_id}_link" onclick="createVoteBtn(${poll_id})">${poll_details[poll_id].nimi}</a>
    <a id="votes_for${poll_id}"> Votes for: ${poll_details[poll_id].votesFor} |</a><a id="votes_against${poll_id}"> Votes against: ${poll_details[poll_id].votesAgainst}</a></li>`;
    document.getElementById("poll_list").innerHTML ='';
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

function Vote_Against(poll_id) {
    poll_details[poll_id].votesAgainst += 1;
    uudet_aanestykset[poll_id] = `<li><a href="#" role="button" id="poll${poll_id}_link" onclick="createVoteBtn(${poll_id})">${poll_details[poll_id].nimi}</a>
    <a id="votes_for${poll_id}"> Votes for: ${poll_details[poll_id].votesFor} |</a><a id="votes_against${poll_id}"> Votes against: ${poll_details[poll_id].votesAgainst}</a></li>`;
    document.getElementById("poll_list").innerHTML ='';
    document.getElementById("poll_list").innerHTML = uudet_aanestykset.join('');
}

document.getElementById("create_poll").addEventListener("click", createPoll);
document.getElementById("delete_poll").addEventListener("click", delete_poll);