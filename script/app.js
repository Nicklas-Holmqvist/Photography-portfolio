window.addEventListener('load', main)

function main() {
    addEventListeners()
}


let mainBg = document.querySelector('main')   
let asideBg = document.querySelector('aside')   
const switchMode = document.querySelector('#mode') 


function addEventListeners() {
    
    switchMode.addEventListener('click', switchModes)

}

function switchModes() {
    console.log('nope')
    if(!mainBg.classList.contains("dark-mode")) {
        mainBg.classList.add("dark-mode")
        asideBg.classList.add("dark-mode-aside")
        console.log(mainBg)
    } else {
        mainBg.classList.remove("dark-mode");
        asideBg.classList.remove("dark-mode-aside")
    }
}




