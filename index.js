const jedan = document.getElementsByClassName("one");
const dva = document.getElementsByClassName("two");
const tri = document.getElementsByClassName("tree");

let scoreHome = 0;
let scoreGuest = 0;

//document.getElementById('home').textContent = score;

function add1Home(){
    scoreHome += 1
    const showResult = document.getElementById('home')
    showResult.innerHTML = scoreHome        
    }
    
function add2Home(){
    scoreHome += 2
    const showResult = document.getElementById('home')
    showResult.innerHTML = scoreHome         
    }

function add3Home(){
    scoreHome += 3
    const showResult = document.getElementById('home')
    showResult.innerHTML = scoreHome        
    }
    
function add1Guest(){
    scoreGuest += 1
    const showResult = document.getElementById('guest')
    showResult.innerHTML = scoreGuest        
    }
    
function add2Guest(){
    scoreGuest += 2
    const showResult = document.getElementById('guest')
    showResult.innerHTML = scoreGuest        
    }

function add3Guest(){
    scoreGuest += 3
    const showResult = document.getElementById('guest')
    showResult.innerHTML = scoreGuest         
    }