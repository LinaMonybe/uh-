document.addEventListener('DOMContentLoaded', function() {
let yes=document.getElementById('yes');
yes.addEventListener('click',function(){
    alert("Haha I knoooow idiot! >~<");
})

let no = document.getElementById('no');
no.addEventListener('mouseover', function() {
    no.style.position = 'absolute';
    let x=Math.random()*(window.innerWidth-no.offsetWidth);
    let y=Math.random()*(window.innerHeight-no.offsetHeight);
    no.style.left= x+'px';
    no.style.top=y+'px';

});
})
