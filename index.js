//For Parallax
const translate = document.querySelectorAll(".translate");

//For About Section
const gridContainers = document.querySelectorAll(".about-grid-template-based-on-screen-size");
const order = document.querySelectorAll(".reorder-for-screen-size");

//For Portfolio Section
const portfolioGrid = document.querySelector(".portfolio-grid-container");
const minPortfolioItemWidth = 450;

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

    updatePortfolioGrid();
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

//Update portolio grid layout based on screen size
function updatePortfolioGrid(){
    //How many sections will fit in the window
    var numHorizontalItems = Math.floor(portfolioGrid.getBoundingClientRect().width / minPortfolioItemWidth);

    //The column template for the portfolio grid
    var gridColumnTemplate = " ";

    //Concatenate the coumn template for each horizontal item.
    for (let i = 0; i < numHorizontalItems; i++){
        console.log("in for loop");
        var gridColumnTemplate = gridColumnTemplate.concat("1fr ");
    }

    console.log(numHorizontalItems);
    console.log(gridColumnTemplate);

    //Set the grid column template to what we just defined
    portfolioGrid.style.gridTemplateColumns = gridColumnTemplate;
}