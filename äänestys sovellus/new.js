function checkDisplay(){//making sure that user doesn't see moderator's panel
    admin_panel=document.getElementById("moderator_panel");
    if(sessionStorage.getItem("Loged_as_user")===true){
        admin_panel.innerHtml.style.visibility='hidden';
    };
}
checkDisplay();

amount_of_polls=1;
poll_details={};
poll_list=[];
function createExamplePolls(){
    poll_details[1]={
        Poll_number:1,
        Poll_name:'Javascript vs Python',
        Poll_description:'Javascript is better than Python',
        Votes_for_poll:0,
        Votes_against_poll:0
    };
    sessionStorage.setItem('Poll1',`<li><a href="#" role="button" id="poll${poll_details[1].Poll_number}_link" onclick="createVoteBtn(${poll_details[1].Poll_number})">Javascript id better than Python</a>
    <a id="votes_for${poll_details[1].Poll_number}"> Votes for: ${poll_details[1].Votes_for_poll} |</a><a id="votes_against${poll_details[1].Poll_number}"> Votes against: ${poll_details[1].Votes_against_poll}</a></li>`);
    sessionStorage.setItem('Kuvaus1',poll_details[1].Poll_description);
    for(let x=0;x<amount_of_polls;x++){
        poll_list.push(sessionStorage.getItem('Poll1'));
    }
    document.getElementById("poll_list").innerHTML = poll_list.join('');
}
createExamplePolls()
function createVoteBtn(poll_id) {
    document.getElementById("poll_details").innerHTML = "<h2>Äänestyksen yksityiskohdat</h2>";
    description=sessionStorage.getItem(`Kuvaus${poll_id}`);
    document.getElementById("poll_details").innerHTML += `<p>${sessionStorage.getItem(`${description}`)}</p>`;
    document.getElementById('poll_buttons').innerHTML = `<button id='Vote_ForBtn' onclick='Vote_For(${poll_id})'>Vote for</button>
    <button id='Vote_AgainstBtn' onclick='Vote_Against(${poll_id})'>Vote against</button>`;
}
function Vote_For(poll_id) {
    poll_details[poll_id].Votes_for_poll += 1;
    poll_list[poll_id] = `<li><a href="#" role="button" id="poll${poll_details[poll_id].Poll_number}_link" onclick="createVoteBtn(${poll_details[poll_id].Poll_number})">${poll_details[poll_id].Poll_name}</a>
    <a id="votes_for${poll_details[poll_id].Poll_number}"> Votes for: ${poll_details[poll_id].Votes_for_poll} |</a><a id="votes_against${poll_details[poll_id].Poll_number}> Votes against: ${poll_details[poll_id].Votes_against_poll}</a></li>`;
    document.getElementById("poll_list").innerHTML ='';
    document.getElementById("poll_list").innerHTML = poll_list.join('');
}

function Vote_Against(poll_id) {
    poll_details[poll_id].Votes_against_poll += 1;
    poll_list[poll_id] = `<li><a href="#" role="button" id="poll${poll_details[poll_id].Poll_number}_link" onclick="createVoteBtn(${poll_details[poll_id].Poll_number})">${poll_details[poll_id].Poll_name}</a>
    <a id="votes_for${poll_details[poll_id].Poll_number}"> Votes for: ${poll_details[poll_id].Poll_number.Votes_for_poll} |
    </a><a id="votes_against${poll_details[poll_id].Poll_number}> Votes against: ${poll_details[poll_id].Votes_against_poll}</a></li>`;
    document.getElementById("poll_list").innerHTML ='';
    document.getElementById("poll_list").innerHTML = poll_list.join('');
}

//document.getElementById("create_poll").addEventListener("click", createPoll);
//document.getElementById("delete_poll").addEventListener("click", delete_poll);