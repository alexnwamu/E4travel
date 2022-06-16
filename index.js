 var navbar = document.querySelector('.navbar');


 window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY < 100) { // Just an example
        navbar.style.backgroundColor = 'transparent'; // or default color
    } else {
        navbar.style.backgroundColor = 'whitesmoke';
    }
});
const hamburger = document.getElementsByClassName('hamburger')[0]
const links =  document.getElementsByClassName('links')[0]

hamburger.addEventListener('click',()=> {
    links.classList.toggle('active')
})