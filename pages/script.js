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

//script for the form validation
let field=document.querySelector('#email')
field.addEventListener('input',function () {//listener is on input
    let email=field.value.trim();//advanced
    let textError=document.querySelector('.error')
    if(!isValidEmail(email)){
        textError.style.display = 'block';//new display is a property not a method//isnt auto shown
        email.classList.add('invalid')
    }
    else{//very important , so it fixes itself when a correct input is typed after an incorrect one
        textError.style.display='none';
        email.classList.remove('invalid')
    }
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/*
Regular Expression:

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
This is a regular expression (regex) pattern that defines the rules for what constitutes a valid email address. Let's break down this regex:
^: Asserts the start of the string.
[^\s@]+:
[^...] defines a negation, meaning "not these characters."
\s matches any whitespace character.
@ is the @ symbol.
+ means "one or more" of the preceding characters (so, "one or more characters that are not whitespace or @").
@: Requires an @ symbol after the local part (before the domain).
[^\s@]+: Again matches one or more characters that are not whitespace or @ (this will be the domain name).
\.: Escapes the dot (.) character, which is required between the domain name and the domain extension (e.g., ".com").
[^\s@]+: Matches one or more characters that are not whitespace or @ (this will be the domain extension, like "com" in "example.com").
$: Asserts the end of the string.
 */