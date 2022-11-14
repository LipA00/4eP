function change(p){
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');

    if(p === 'p1'){
        p1.innerHTML = 'szarość'
        p1.style.color='grey';
        p2.innerHTML = 'Czerwień'
        p2.style.color='red';
    }
    else{
        p2.innerHTML = 'szarość'
        p2.style.color='grey';
        p1.innerHTML = 'Czerwień'
        p1.style.color='red';
    }
}
let fox = document.getElementById('fox');
function toGrey(){
  fox.src='2.png'
}
function toColor(){
    fox.src='1.png'
}
function ToRed(){
    fox.src='zdj.png'
}