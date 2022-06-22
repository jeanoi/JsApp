const rock = document.querySelector(".rockbtn")
const paper = document.querySelector(".paperbtn")
const sci= document.querySelector(".scibtn")
const restart = document.querySelector(".restartbtn")
let HumanCounter = 0;
let ComputerCounter = 0;


function Score(CC, HC){
    document.getElementById("CS").innerHTML=CC
    document.getElementById("HS").innerHTML=HC
    if(CC < 1 || HC < 1){
        document.getElementById("result").innerHTML=""
    }
    if (HC == 3){
        document.getElementById("result").innerHTML="You Won"
    }
    if(CC == 3){
        document.getElementById("result").innerHTML="The Machine Won"
    }
}

restart.addEventListener('click', ()=>{
    let hey = Play("", 1);
    let C_counter = hey[1];
    let H_counter= hey[0];
    Score(C_counter, H_counter)
    document.getElementById("CS").innerHTML=0
    document.getElementById("HS").innerHTML=0
    document.getElementById("result").innerHTML=""
})

rock.addEventListener('click', () => {
    let hey = Play("ROCK");
    let C_counter = hey[1];
    let H_counter= hey[0];
    Score(C_counter, H_counter)
});


paper.addEventListener('click', () => {
    let hey = Play("PAPER");
    let C_counter = hey[1];
    let H_counter= hey[0];
    Score(C_counter, H_counter)
});

sci.addEventListener('click', () => {
    let hey = Play("SCISSORS");
    let C_counter = hey[1];
    let H_counter= hey[0];
    Score(C_counter, H_counter)
});

function makePlay(){
    let y = "";
    x = Math.floor(Math.random() * (3 - 0)) + 0;
    if (x == 0){alert("Computer played rock"); y = 'ROCK'}
    if (x == 1){alert("Computer played paper");y = 'PAPER'}
    if (x == 2){alert("Computer played scissors");y = 'SCISSORS'}
    return y;
}

function Play(choice, restart){
    if (restart != null){
        let c = [HumanCounter, ComputerCounter]
        HumanCounter = 0;
        ComputerCounter = 0;
        return c;
    }
    CP = makePlay();
    HP = choice
    if(HP == CP){
        document.getElementById("result").innerHTML="Tie"
        return
    }
    document.getElementById("result").innerHTML=""
    if (HP != CP){

    if (HP == 'ROCK'){
        if(CP == 'PAPER'){ComputerCounter = ComputerCounter+1;}
        else{   
            HumanCounter = HumanCounter+1;
        }
    }
    if (HP == 'PAPER'){
        if(CP == 'SCISSORS'){ComputerCounter = ComputerCounter+1;}
        else{   
            HumanCounter = HumanCounter+1;
        }
    }
    if (HP == 'SCISSORS'){
        if(CP == 'ROCK'){ComputerCounter = ComputerCounter+1;}
        else{   
            HumanCounter = HumanCounter+1;
        }
    }
    let c = [HumanCounter, ComputerCounter]
    if ( HumanCounter == 3 || ComputerCounter == 3){
        HumanCounter = 0;
        ComputerCounter = 0;
    }
    return c
    }
}