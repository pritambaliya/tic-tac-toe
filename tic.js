let current = "O"
const box = document.querySelectorAll(".box");
let value = false;
let hide = document.querySelector(".hide")
let h1 = document.querySelector("h1");
let restart = document.querySelector(".restart")
let snew = document.querySelector(".new")
let hide1 = document.querySelector(".hide1")

let arr = [
    [0,4,8],[0,1,2],[0,3,6],[6,7,8],[2,5,8],[2,4,6],[1,4,7],[3,4,5]
];

box.forEach(btn => {
btn.addEventListener("click", () => {
    if(value === true) {
    btn.innerText = "X";
    btn.style.color = "#0100ff"
    value = false;
    } else {
        btn.innerText = "O"
        value = true;
        btn.style.color = "#ff0001"
    }
    btn.disabled = true;
    winPattern();
});
});

const enable = () => {
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerText = "";
    }
}

const disable = () => {
    for(let boxes of box){
        boxes.disabled = true;
    }
}

const hideimg = () => {

}

const winPattern = () => {
    for(let win of arr) {
        let box1 = box[win[0]].innerText;
        let box2 = box[win[1]].innerText;
        let box3 = box[win[2]].innerText;

        if(box1!="" && box2!="" && box3!="") {
            if(box1 === box2 && box2 === box3) {
                hide.style.display= "block"
                
                h1.innerText = `Congratulation..! ${box2} is Winner..!`
                disable();
            }
        }
    }
} 

snew.addEventListener("click", () =>{
    enable();
     hide.style.display = "none";
     
})

restart.addEventListener("click", () =>{
    enable();
})
