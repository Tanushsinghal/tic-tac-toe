console.log("Welcome to Tic Tac Toe")
let turn = "X"
let isgameover = false;

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

const checkWin = ()=>{
    let btext = document.getElementsByClassName('btext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((btext[e[0]].innerText === btext[e[1]].innerText) && (btext[e[2]].innerText === btext[e[1]].innerText) && (btext[e[0]].innerText !== "") ){
            document.querySelector('.info2').innerText = btext[e[0]].innerText + " Won"
            isgameover = true
        }
    })
}

let b = document.getElementsByClassName("b");
Array.from(b).forEach(element =>{
    let btext = element.querySelector('.btext');
    element.addEventListener('click', ()=>{
        if(btext.innerText === ''){
            btext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info2")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', ()=>{
    let btext = document.querySelectorAll('.btext');
    Array.from(btext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line2").style.width = "0vw";
    document.getElementsByClassName("info2")[0].innerText  = "Turn for " + turn;
})