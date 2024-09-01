const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = parseFloat(element.dataset.speed);
        
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})