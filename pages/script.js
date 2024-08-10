let backButton = document.querySelector('.back')

function clickBehaviour () {
    event.preventDefault()//not defaultPrevented
        window.scrollTo({
            top :0,
            behavior:"smooth"
        })
    
}

function scrollBehaviour () {
    if(window.scrollY>200){
        backButton.classList.add('visible')//or    backToTopBtn.style.display = 'block';
    }
    else {
        backButton.classList.remove('visible') //backToTopBtn.style.display = 'none';
    }
}
//different listener ways
// backButton.addEventListener('click',()=>{})
// backButton.addEventListener('click',function(){})
/*    toggleThemeBtn.onclick = function() {

        }
    };*/ 
backButton.addEventListener('click',clickBehaviour)
window.addEventListener('scroll',scrollBehaviour)

//styling dark mode
let theme=document.querySelector('.dark')

function themeBehaviour () {
    document.body.classList.toggle('dark-mode')//new toggle usedfor buttons//here this line is unnecessary becuase we arent styling body only .top
    document.querySelector('.top').classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        theme.textContent="🌙";//new
    }
    else{
        theme.textContent='☀️';//textContent is a property not a function
    }
}

theme.addEventListener('click',themeBehaviour)