var message;
var prefix = "Javascript";
var messanger = getPrefixedMessanger("Javascript");
message = messanger();
function showMessage(){
    document.getElementById("content").innerText = message;
}


