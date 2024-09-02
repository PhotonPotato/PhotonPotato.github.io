const translate = document.querySelectorAll(".translate");
const gridContainers = document.querySelectorAll(".grid-template-based-on-screen-size");
const order = document.querySelectorAll(".reorder-for-screen-size")

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = parseFloat(element.dataset.speed);
        
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
})

checkScreenSizeForGridReorder();

window.addEventListener('resize', () => {
    checkScreenSizeForGridReorder();
})

//Check to reorder and set grid layouts based on screen size
function checkScreenSizeForGridReorder(){
    if (window.innerWidth < 900){
        switchToRows();
        
        order.forEach(element =>{
            element.style.order = -1;
        })
    }else{
        console.log("ordering2");

        switchToColumns();
        
        order.forEach(element =>{
            element.style.order = 1;
        })
    }
}

//Switch grid layouts to rows
function switchToRows(){
    gridContainers.forEach(element => {
        element.style.gridTemplateColumns = 'none';
        element.style.gridTemplateRows = '1fr 1fr';
    })
}

//Switch grid layouts to columns
function switchToColumns(){
    console.log("switch to coluns");

    gridContainers.forEach(element => {
        element.style.gridTemplateColumns = '1fr 1fr';
        element.style.gridTemplateRows = 'none';
    })
}