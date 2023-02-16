document.addEventListener('keydown', callback);

function callback(evt){
    if(evt.keyCode ===65){
        alert("you press this key:'a' ");
        return;
    
}else{
    console.log(evt.keyCode)
    console.log(String.fromCharCode(evt.which))
}
}