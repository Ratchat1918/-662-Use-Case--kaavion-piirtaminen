//Button variables
const registerBtn=document.getElementById("registerBtn");
const loginBtn=document.getElementById("loginBtn");
//registration name and password
const nimi_registration=document.getElementById("nimi_registration");
const salasana_registration=document.getElementById("salasana_registration");
//login name and password
const nimi_login=document.getElementById("nimi_login");
const salasana_login=document.getElementById("salasana_login");
//current user password and login
let user_sopiva_salasana=undefined;
let user_sopiva_nimi=undefined;
//current admin password and login
let admin_sopiva_salasana=undefined;
let admin_sopiva_nimi=undefined;
//defining whether user sees moderator panel or not
function Register(){
    if(document.getElementById("user_checkbox").checked===true){
        user_sopiva_nimi=nimi_registration.value;
        user_sopiva_salasana=salasana_registration.value;
        if(user_sopiva_nimi!==undefined &&user_sopiva_salasana!==undefined){
            window.alert("Rekiströiti onnistui!");
        }
    }
    else if(document.getElementById("admin_checkbox").checked===true){
        admin_sopiva_nimi=nimi_registration.value;
        admin_sopiva_salasana=salasana_registration.value;
        if(admin_sopiva_nimi!==undefined &&admin_sopiva_salasana!==undefined){
            window.alert("Rekiströiti onnistui!");
        }
    }
}

function Login(){
    if(document.getElementById("user_checkbox").checked===true){
        if(nimi_login.value===user_sopiva_nimi && salasana_login.value===user_sopiva_salasana){
            sessionStorage.setItem("Loged_as_user",true);
            window.alert("Kirjautuminen onnistui!");
            window.location.href = "admin_page.html";
        }else{
            window.alert("Kirjautuminen epäonnistui");
        }
    }
    else if(document.getElementById("admin_checkbox").checked===true){
        if(nimi_login.value===admin_sopiva_nimi && salasana_login.value===admin_sopiva_salasana){
            sessionStorage.setItem("Loged_as_user",false);
            window.alert("Kirjautuminen onnistui!");
            window.location.href = "admin_page.html";
        }else{
            window.alert("Kirjautuminen epäonnistui");
        }
    }
}

function unCheckOther(checked_box){//varmistaa ettei voi valita kaksi vaihtoehtoja samana aikana
    document.getElementById(checked_box).checked=false;
}


document.getElementById("user_checkbox").addEventListener("change", () => unCheckOther("admin_checkbox"));
document.getElementById("admin_checkbox").addEventListener("change", () => unCheckOther("user_checkbox"));
registerBtn.addEventListener("click",Register);
loginBtn.addEventListener("click",Login);
