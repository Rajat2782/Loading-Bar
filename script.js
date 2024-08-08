const counter1 = document.querySelector(".counter");

const FrontBar = document.querySelector(".loading-bar-front");

let  index = 0;

updateNum();

function updateNum(){
    counter1.innerText = index + "%";
    FrontBar.style.width = index + "%";
    index++;

    if (index < 101) {
        setTimeout(updateNum, 20);
    }
}

