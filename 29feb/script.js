document.body.onkeypress = function(){
    document.body.classList.toggle('liked')
}
document.body.onclick = function(){
    document.body.classList.toggle('liked')
}

document.body.ontouchend = function(){
    document.body.classList.toggle('liked')
}
document.addEventListener("DOMContentLoaded", function() {
      document.body.classList.toggle("liked");
});