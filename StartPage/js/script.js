function openLabCard(card){
    let menuParent = card.parentElement;
    let subMenu = menuParent.querySelector(".labSubmenu");

    if(subMenu.style.display === "flex"){
        subMenu.style.display = "none";
        
        card.style.borderRadius = "10px";
    }
    else{
        subMenu.style.display = "flex";

        card.style.borderBottomLeftRadius = "0px";
        card.style.borderBottomRightRadius = "0px";
    }
}

function changePreview(link, imagePath){
    let block = link.closest(".labBlock");
    let prevImg = block.querySelector(".labPreview");

    prevImg.src = imagePath;
}

const body = document.querySelector("body");

function petalFall(){
    const minWidthPadding = 110;
    const minHeightPadding = 310;
    
    const widthCont = window.innerWidth - minWidthPadding;
    const heightCont = window.innerHeight - minHeightPadding;

    let newPetal = document.createElement("div");

    newPetal.classList.add("petal");

    const ramdomLeft = Math.random() * widthCont;
    const ramdomTop = Math.random() * heightCont;
    const randTime = Math.random() * 10 + 5;

    newPetal.style.left = ramdomLeft + "px";
    newPetal.style.top = ramdomTop + "px";
    newPetal.style.animationDuration = randTime + "s";

    body.appendChild(newPetal);

    setTimeout(() => {
        newPetal.remove();
    }, randTime * 1000);
}

setInterval(petalFall, 500);