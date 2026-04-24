let videos=document.getElementsByClassName("video-box");
current=0;
function change(){
videos[current].style.display="none";
current++;
if(current== 4){
    current=0
}
videos[current].style.display="block";
}
let phones=document.getElementsByClassName("phone")
function vanish1(){
phones[1].style.display="none";
phones[0].style.display="block";
    
}

function vanish2(){
        phones[0].style.display="none";
        phones[1].style.display="block";
}
const boxes = document.querySelectorAll(".box");

    window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (boxTop < triggerPoint) {
        box.classList.add("show");
        } else {
        box.classList.remove("show");
        }
    });
    });
    