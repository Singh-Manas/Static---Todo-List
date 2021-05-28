function vaccine_moveToInProgress(){
    var x = document.getElementById("vaccine-todo");
    x.style.visibility = 'hidden';
    var y = document.getElementById("vaccine-inprogress");
    y.style.visibility = 'visible';
}
function vaccine_moveToDone(){
    var x = document.getElementById("vaccine-inprogress");
    x.style.visibility = 'hidden';
    var y = document.getElementById("vaccine-done");
    y.style.visibility = 'visible';
}
function web_moveToInProgress(){
    var x = document.getElementById("web-todo");
    x.style.visibility = 'hidden';
    var y = document.getElementById("web-inprogress");
    y.style.visibility = 'visible';
}
function web_moveToDone(){
    var x = document.getElementById("web-inprogress");
    x.style.visibility = 'hidden';
    var y = document.getElementById("web-done");
    y.style.visibility = 'visible';
}
function db_moveToInProgress(){
    var x = document.getElementById("db-todo");
    x.style.visibility = 'hidden';
    var y = document.getElementById("db-inprogress");
    y.style.visibility = 'visible';
}
function db_moveToDone(){
    var x = document.getElementById("db-inprogress");
    x.style.visibility = 'hidden';
    var y = document.getElementById("db-done");
    y.style.visibility = 'visible';
}