console.log("Running Script")
const arr = [[0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]]
let turnO = true
let b = document.querySelectorAll(".box")
const disableBox = () => {
    b.forEach(box => {
        box.classList.add('disabled')
    })
}
let hide=document.querySelector('.hidden')
const newGame =(winner)=>{
    hide.querySelector('#abd').innerText=`Congratulations for Winning ${winner} `
    hide.classList.remove('hide')
}
const chkWin = () => {
    for (const element in arr) {
        // console.log(arr[element][0]+ " "+ arr[element][1]+ " "+ arr[element][2])
        if (!(b[arr[element][0]].innerText == "") || !(b[arr[element][1]].innerText == "") || !(b[arr[element][2]].innerText == "")) {
            if ((b[arr[element][0]].innerText == b[arr[element][1]].innerText) && (b[arr[element][1]].innerText == b[arr[element][2]].innerText)) {
                disableBox();
                newGame(b[arr[element][0]].innerText);
                return true;

            }
        }
    }
    // arr.forEach((element)=>{
    //     console.log(element[])
    // })
}
const draw=()=>{
    hide.classList.remove('hide')
    hide.querySelector('#abd').innerText=`The game is draw `
    counter=0

}
var counter=0;
console.log(b.innerText)
b.forEach((element) => {
    element.addEventListener("click", () => {
        counter++;
        if (turnO) {
            element.innerText = 'O'
            turnO = false;
        }
        else {
            element.innerText = 'X'
            turnO = true
        }
        element.classList.add("disabled")
        if (chkWin()) {
            console.log("you won the game")
            return
        }
        if(counter==9){
            draw();
        }
    })
});
let newButton=document.querySelector('.new-game')
let button=document.querySelector('.btn')
const reset=()=>{
    console.log("reset")
    counter=0
    for (const element of b) {
        
        element.classList.remove('disabled')
        element.innerText=""
    }
}
newButton.addEventListener("click",()=>{
     hide.querySelector('#abd').innerText=``
     hide.classList.add('hide')
     button.classList.remove("hide")
     document.querySelector(".container").classList.remove("hide")
    reset()
})
button.addEventListener("click",()=>{
     hide.querySelector('#abd').innerText=``
     hide.classList.add('hide')
    reset()
})
hide.classList.remove('hide')