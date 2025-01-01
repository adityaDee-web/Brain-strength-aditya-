let boxes= document.querySelectorAll('.box');
let ram = document.querySelector('.ram');
let newGame = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container'); 
let msg = document.querySelector('#msg'); 

let turn0 = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box clicked');
        if (turn0) {
            box.innerText = 'o';
            turn0 = false;
        } else{
            box.innerText = 'x';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
   };
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
};
const showWinner = (winner) => {
    msg.innerText = `congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
   for(let pattern of winPatterns){
let pos1value = boxes[pattern[0]].innerText;
let pos2value = boxes[pattern[1]].innerText;
let pos3value = boxes[pattern[2]].innerText;
if (pos1value && pos1value === pos2value && pos1value === pos3value){
    console.log('winner');
   showWinner( pos1value);
    }

}
};
newGame.addEventListener('click', resetGame);
ram.addEventListener('click', resetGame);

 




