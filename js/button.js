function pindahPage(){
    window.location.href = "yes.html";
}

function jailButton(){
    var x = Math.random() * (window.innerWidth - document.getElementById("noBtn").offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById("noBtn").offsetHeight) - 48;
    document.getElementById("noBtn").style.left = `${x}px`;
    document.getElementById("noBtn").style.top = `${y}px`;
    
}