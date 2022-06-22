let grid = document.querySelector('.grid')
let restart = document.querySelector('.restart')
let spaces = []
let GameOver = false

restart.addEventListener('click', ()=>{
    window.location.reload()
})


function Random(){
    x = Math.floor(Math.random() * (9 - 0)) + 0;
    return x;
}

function createBoard(){
    for(let x=0; x<9; x++){
        const space = document.createElement('div')
        space.setAttribute('id', x)
        grid.appendChild(space)
        space.classList.add('avaliable')
        spaces.push(space)

        space.addEventListener('click', ()=>{
            if(GameOver == false){
            if (space.classList.contains('avaliable')){
            space.id='h'
            space.classList.remove('avaliable')
            space.innerHTML='X'
            computerPlay()
            }
        }
        })
    }
}

function computerPlay(space){
    check()
    if(GameOver == false){
    x = Random();
    i = 0;
    cout = 0;
    setTimeout(() => {
    do{
    if (spaces[x].classList.contains('avaliable')){
        spaces[x].innerHTML="O"
        i = 1;
        spaces[x].classList.remove('avaliable')
        spaces[x].id='c'
        check()
    }
    else{
     x = Random()   
    }
    for(let y = 0; y < 9; y++){
        if(spaces[y].classList.contains('avaliable')){
        cout = cout+1;
    }
    }
    if(cout === 0){
        i = 1;
    }}
    while(i != 1)
},200)
}
}

function check(){
    console.log(spaces[0].id)
    if(spaces[0].id == spaces[1].id && spaces[0].id == spaces[2].id){
        if(spaces[0].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[0].id == spaces[3].id && spaces[0].id == spaces[6].id){
        if(spaces[0].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[0].id == spaces[4].id && spaces[0].id == spaces[8].id){
        if(spaces[0].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[3].id == spaces[4].id && spaces[3].id == spaces[5].id){
        if(spaces[3].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[6].id == spaces[7].id && spaces[6].id == spaces[8].id){
        if(spaces[6].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[1].id == spaces[4].id && spaces[1].id == spaces[7].id){
        if(spaces[1].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[2].id == spaces[5].id && spaces[2].id == spaces[8].id){
        if(spaces[2].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }
    if(spaces[2].id == spaces[4].id && spaces[2].id == spaces[6].id){
        if(spaces[2].id == 'h'){
            alert('you won')}
        else{
            alert('computer won')
        }
        GameOver = true
    }

}
createBoard()