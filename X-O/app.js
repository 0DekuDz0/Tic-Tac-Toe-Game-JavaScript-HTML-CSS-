const carre = document.querySelectorAll('div');


const namePlayer = document.getElementById('playerWin');
const newGame = document.getElementById('winOrLose');
const backdrop = document.getElementById('backdrop');
const playerOneCounter = document.getElementById('player-one-point');
const playerTwoCounter = document.getElementById('player-two-point');
const endgame = document.getElementById('endparty');
const btnEndGame = document.getElementById('restart-game');
const containerGame = document.getElementById('container');
const pointTable = document.getElementById('point');
const textWinner = document.getElementById('end-winner');
const gift = document.getElementById('gift-img');
const cmpMode = document.getElementById('cmpMode');
const playerMode = document.getElementById('playerMode');
const startMenu = document.getElementById('start-menu')

console.log(carre)


let playerOnePoint = 0;
let playerTwoPoint = 0;
let playerOneWin;
let playerTwoWin;
let playerNumber = 0;
let win;
let carreNbr = 0;
let withComputer;


function gameStart(){
    containerGame.classList.toggle('visible');
    pointTable.classList.toggle("visible");
    startMenu.classList.toggle('visible')
}

function newGameToggle(){
    newGame.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

function jeToggle(){
    newGame.className = 'playerWinOrLose visible'
    backdrop.className = "backdrop visible"
}


function resetBox(){
    for (let i = 0; i < 9; i++) {
        carre[i].className = 'carre';
    }
    
}

function newParty(){
    if(playerOnePoint >= 10 || playerTwoPoint >= 10){
        endgame.classList.toggle('visible');
        containerGame.classList.toggle('visible');
        pointTable.classList.toggle('visible');
        if(playerOnePoint > playerTwoPoint){
            textWinner.textContent = 'One '
            textWinner.className = 'blue'
        }else{
            textWinner.textContent = 'Two '
            textWinner.className = 'red'
        }
        btnEndGame.addEventListener('click',()=>{
            window.location.reload()
        })

    }else{
        newGameToggle();
        const btnConfirmRestar = document.getElementById('restar-yes');
        const btnCancelRestart = document.getElementById('restar-no');
        btnConfirmRestar.addEventListener('click',()=>{
        resetGame();
        jeToggle()
        console.log('appui')
    })
    btnCancelRestart.addEventListener('click', () => {jeToggle()} )
    }
}

function resetGame(){
    resetBox();
    playerNumber = 0;
    win = false;
    carreNbr = 0;
    console.log(carreNbr)
    carreDS = [false, false, false, false, false, false, false, false, false]

}


function updateConteur(one, two){
    playerOneCounter.textContent = playerOnePoint;
    playerTwoCounter.textContent = playerTwoPoint;
}

function checkWin(){
    if((
        (carre[0].className === 'carre o' && carre[1].className === 'carre o' && carre[2].className === 'carre o')||
        (carre[3].className === 'carre o' && carre[4].className === 'carre o' && carre[5].className === 'carre o')||
        (carre[6].className === 'carre o' && carre[7].className === 'carre o' && carre[8].className === 'carre o')||
        (carre[0].className === 'carre o' && carre[3].className === 'carre o' && carre[6].className === 'carre o')||
        (carre[1].className === 'carre o' && carre[4].className === 'carre o' && carre[7].className === 'carre o')||
        (carre[2].className === 'carre o' && carre[5].className === 'carre o' && carre[8].className === 'carre o')||
        (carre[0].className === 'carre o' && carre[4].className === 'carre o' && carre[8].className === 'carre o')||
        (carre[2].className === 'carre o' && carre[4].className === 'carre o' && carre[6].className === 'carre o')
        ) || (
        (carre[0].className === 'carre x' && carre[1].className === 'carre x' && carre[2].className === 'carre x')||
        (carre[3].className === 'carre x' && carre[4].className === 'carre x' && carre[5].className === 'carre x')||
        (carre[6].className === 'carre x' && carre[7].className === 'carre x' && carre[8].className === 'carre x')||
        (carre[0].className === 'carre x' && carre[3].className === 'carre x' && carre[6].className === 'carre x')||
        (carre[1].className === 'carre x' && carre[4].className === 'carre x' && carre[7].className === 'carre x')||
        (carre[2].className === 'carre x' && carre[5].className === 'carre x' && carre[8].className === 'carre x')||
        (carre[0].className === 'carre x' && carre[4].className === 'carre x' && carre[8].className === 'carre x')||
        (carre[2].className === 'carre x' && carre[4].className === 'carre x' && carre[6].className === 'carre x')
        ))
        {
        win = true;
        
        if(playerNumber % 2 === 0){
            namePlayer.textContent = 'PLAYER TWO \n WIN';
            playerTwoPoint++;
            updateConteur(playerOnePoint, playerTwoPoint);
            newParty();
            console.log('win')
        }else{
            namePlayer.textContent = 'PLAYER ONE \n WIN';
            playerOnePoint++;
            updateConteur(playerOnePoint, playerTwoPoint);
            newParty();
            console.log('win')
        }
        }else if(carreNbr === 8){
            namePlayer.textContent = 'DRAW';
            newParty();
        }

            
}


let carreDS = [false, false, false, false, false, false, false, false, false]

carre[0].addEventListener('click', ()=>{
    if(carreDS[0] === false){// am a shit i can use pointer event in css 
        checkBox(0);
        carreDS[0] = true
    }
    
})

carre[1].addEventListener('click', ()=>{
    if(carreDS[1] === false){
        checkBox(1);
        carreDS[1] = true
    }
})

carre[2].addEventListener('click', ()=>{
    if(carreDS[2] === false){
        checkBox(2);
        carreDS[2] = true
    }
})

carre[3].addEventListener('click', ()=>{
    if(carreDS[3] === false){
        checkBox(3);
        carreDS[3] = true
    }
})

carre[4].addEventListener('click', ()=>{
    if(carreDS[4] === false){
        checkBox(4);
        carreDS[4] = true
    }
})

carre[5].addEventListener('click', ()=>{
    if(carreDS[5] === false){
        checkBox(5);
        carreDS[5] = true
    }
})

carre[6].addEventListener('click', ()=>{
    if(carreDS[6] === false){
        checkBox(6);
        carreDS[6] = true
    }
})

carre[7].addEventListener('click', ()=>{
    if(carreDS[7] === false){
        checkBox(7);
        carreDS[7] = true
    }
})

carre[8].addEventListener('click', ()=>{
    if(carreDS[8] === false){
        checkBox(8);
        carreDS[8] = true
    }

})

cmpMode.addEventListener('click',()=>{
    withComputer = true;
    alert('Still in Dev, sorry')
    swal('still in dev')
    //gameStart();
})

playerMode.addEventListener('click',()=>{
    withComputer = false;
    gameStart();
})


function checkBox(index){
    
    if(playerNumber % 2 === 0){
        carre[index].classList.toggle('x')
        if(withComputer === true){
            cmpPlay();
        }
    }else{
        carre[index].classList.toggle('o')
           
    }
    playerNumber++
    checkWin();
    console.log('avant',carreNbr)
    carreNbr++
    console.log('apres',carreNbr)
    
    
    
}



function getRandomNumber(min, max) {
    // Generate a random number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random()* (max - min + 1) + min);
}

//with computer

/*function checkBoxForCmp(index){
    carre[index].classList.toggle('o')
    playerNumber++
    checkWin();
    console.log('avant',carreNbr)
    carreNbr++
    console.log('apres',carreNbr)
}

function cmpPlay(){
    
    let cmpNbr;
        do{
            cmpNbr = getRandomNumber(0,8);
        }while(carreDS[cmpNbr] === true);
        console.log('cmpNbr',cmpNbr)
        checkBoxForCmp(cmpNbr);
    
    
    
}*/

