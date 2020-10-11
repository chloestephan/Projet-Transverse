//MONTRER INSCRIPTION OU MONTRER CONNEXION
//display aucun des deux au debut
window.onload = showNone();

function showNone() {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("connexion").style.display = "none";
}

function showInscription() {
    document.getElementById("inscription").style.display = "block";
    document.getElementById("connexion").style.display = "none";
}

//to show the table with the tasks and not the form and list of users
function showConnexion() {
    document.getElementById("inscription").style.display = "none";
    document.getElementById("connexion").style.display = "block";
}

