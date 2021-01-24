window.addEventListener('load', main)

/**
 * Main function that runs at window load
 */
function main() {
    addEventListeners()
}
 
const switchMode = document.querySelector('#mode') 
const switchModeMobile = document.querySelector('.mode') 

const setLink = document.querySelectorAll('li p')

const nonActive = document.querySelectorAll('.non-active')
const active = document.querySelector('.active')
const navHome = document.querySelector('#nav-home')
const navBuilding = document.querySelector('#nav-building')
const navLandscape = document.querySelector('#nav-landscape')
const navAbout = document.querySelector('#nav-about')

const btnBuilding = document.querySelector('.btn-building')
const btnLandscape = document.querySelector('.btn-landscape')

const fadeInInfo = document.querySelectorAll('.information')
const fadeInMainImage = document.querySelectorAll('.main-image')
const fadeInSum = document.querySelectorAll('.summary')
const fadeInImg = document.querySelectorAll('.image-container .image')

/**
 * runs all the functions, this function is running in the main-function
 */
function addEventListeners() {    
    switchMode.addEventListener('click', switchModes)
    navHome.addEventListener('click', goToHome)
    navBuilding.addEventListener('click', goToBuildingGallery)
    navLandscape.addEventListener('click', goToLandscapeGallery)
    navAbout.addEventListener('click', goToAboutMe)
    btnBuilding.addEventListener('click', goToBuildingGallery)
    btnLandscape.addEventListener('click', goToLandscapeGallery)
    openMenu()
    closMenu()
}


/**
 * Function to switch dark and daymode
 * There is an css option on the specific classes that are gonna change when switches
 * mix-blend-mode: difference;
 */
function switchModes() {
    
    let mainBg = document.querySelector('main')   
    let asideBg = document.querySelector('aside')  

    const changeLogo = document.querySelector('.logo')

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

/**
 *  Function to show home screen
 */
function goToHome() {
    const home = document.querySelector('.start-image')

    if(!home.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        home.classList.add('active')   
    }
}

/**
 * Function to show building screen
 */
function goToBuilding() {
    const building = document.querySelector('.building')

    if(!building.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        building.classList.add('active')        
    }
}

/**
 * Function to show landscape screen
 */
function goToLandscape() {
    const landscape = document.querySelector('.landscape')

    if(!landscape.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        landscape.classList.add('active')        
    }
}

/**
 * Function to show about me screen
 */
function goToAboutMe() {
    const aboutMe = document.querySelector('.about-section')

    if(!aboutMe.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        aboutMe.classList.add('active')        
    }
}

/**
 * Function that goes to building gallery from the button on start
 */
function goToBuildingGallery() {
    const buildingGallery = document.querySelector('.building-gallery')
    const setLinkBuilding = document.querySelector('#nav-building p')

    if(!buildingGallery.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
                setLink.forEach((i) => {
                    if(i.classList.contains('li-active')) {
                        i.classList.remove('li-active')
                    } else {
                        setLinkBuilding.classList.add('li-active')
                    }
                })
            }
        })
        buildingGallery.classList.add('active')        
    }
}

/**
 * Function that goes to landscape gallery from the button on start
 */
function goToLandscapeGallery() {
    const landscapeGallery = document.querySelector('.landscape-gallery')
    const setLinkLandscape = document.querySelector('#nav-landscape p')

    if(!landscapeGallery.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
                setLink.forEach((i) => {
                    if(i.classList.contains('li-active')) {
                        i.classList.remove('li-active')
                    } else {
                        setLinkLandscape.classList.add('li-active')
                    }
                })
            }
        })
        landscapeGallery.classList.add('active')        
    }
}

/**
 * Function that sets an underline at active link in menu
 */
setLink.forEach((e) => {

    e.addEventListener('click', () => {        
        if (e.classList.contains('li-active')) {
            e.classList.remove('li-active')
        }
        else if (!e.classList.contains('li-active')) {   
            setLink.forEach((i) => {
                i.classList.remove('li-active')
            })
            e.classList.add('li-active')
        }
    })
})    

/**
 * Open up the hamburger menu
 */
function openMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-container')
    let hamburgerMenu = document.querySelector('aside')    

    hamburgerBtn.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open-menu')
        switchModeMobile.classList.toggle('mobile-switch-theme');       
    })
}

/**
 * Close the hamburger menu when clicked anywhere on the screen
 */
function closMenu() {
    let hamburgerMenu = document.querySelector('aside')
    hamburgerMenu.addEventListener('click', () => {
        if (!hamburgerMenu.classList.contains('open-menu')) {
            hamburgerMenu.classList.add('open-menu')   
            switchModeMobile.classList.remove('mobile-switch-theme');    
        } else {
            return            
        }
    })
}

// intersection options
const appearOptions = {
    treshold: 0.8,
    rootMargin: "0px 0px -200px 0px"
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

// intersection fadein for images in gallery
fadeInImg.forEach(fader => {
    appearOnScroll.observe(fader)
});

// intersection fadein for text in gallery
fadeInSum.forEach(fader => {
    setTimeout(appearOnScroll.observe(fader), 1000)    
});

// intersection fadein for images in start
fadeInMainImage.forEach(fader => {
    appearOnScroll.observe(fader)
});

// intersection fadein for text in start
fadeInInfo.forEach(fader => {
    setTimeout(appearOnScroll.observe(fader), 1000)    
});