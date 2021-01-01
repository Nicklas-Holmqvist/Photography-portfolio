window.addEventListener('load', main)

function main() {
    addEventListeners()
}


let mainBg = document.querySelector('main')   
let asideBg = document.querySelector('aside')   
const switchMode = document.querySelector('#mode') 
const changeLogo = document.querySelector('.logo')
const menuActive = document.querySelectorAll('li')
const nonActive = document.querySelectorAll('.non-active')
const active = document.querySelector('.active')
const navHome = document.querySelector('#nav-home')
const navBuilding = document.querySelector('#nav-building')
const navLandscape = document.querySelector('#nav-landscape')
const navAbout = document.querySelector('#nav-about')
const mainSection = document.querySelectorAll('.main-section')
const building = document.querySelector('.building')
const landscape = document.querySelector('.landscape')
const home = document.querySelector('.start-image')
const buildingGallery = document.querySelector('.building-gallery')
const landscapeGallery = document.querySelector('.landscape-gallery')
const btnBuilding = document.querySelector('.btn-building')
const btnLandscape = document.querySelector('.btn-landscape')

const fadeInSum = document.querySelectorAll('.summary')
const fadeInImg = document.querySelectorAll('.image-container .image')

console.log(fadeInImg)




function addEventListeners() {
    
    switchMode.addEventListener('click', switchModes)
    navHome.addEventListener('click', goToHome)
    navBuilding.addEventListener('click', goToBuildingGallery)
    navLandscape.addEventListener('click', goToLandscapeGallery)
    btnBuilding.addEventListener('click', goToBuildingGallery)
    btnLandscape.addEventListener('click', goToLandscapeGallery)

}

function switchModes() {
    console.log('nope')
    if(!mainBg.classList.contains("dark-mode")) {
        mainBg.classList.add("dark-mode")
        asideBg.classList.add("dark-mode-aside")
        changeLogo.src = "./style/img/logo-daymode.png";
        console.log(mainBg)
    } else {
        mainBg.classList.remove("dark-mode");
        asideBg.classList.remove("dark-mode-aside")
        changeLogo.src = "./style/img/logo-darkmode.png";
    }
}

function goToHome() {
    if(!home.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        home.classList.add('active')        
    }
}

function goToBuilding() {
    if(!building.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        building.classList.add('active')        
    }
}

function goToLandscape() {
    if(!landscape.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        landscape.classList.add('active')        
    }
}

function goToBuildingGallery() {
    if(!buildingGallery.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        buildingGallery.classList.add('active')        
    }
}

function goToLandscapeGallery() {
    if(!landscapeGallery.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        landscapeGallery.classList.add('active')        
    }
}

const appearOptions = {
    treshold: 1,
    rootMargin: "0px 0px -300px 0px"
};

const appearOnScroll = new IntersectionObserver (
    function(
        entries, 
        appearOnScroll
        ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {                
                return;
            } else {
                // entry.target.classList.remove("hidden");
                entry.target.classList.add("fadein-image");
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

fadeInImg.forEach(fader => {
    appearOnScroll.observe(fader)
});

fadeInSum.forEach(fader => {
    setTimeout(appearOnScroll.observe(fader), 1000)    
});


