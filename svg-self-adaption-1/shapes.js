let svg = document.getElementById('base-svg');
svg.setAttribute('style','background-color:lightgrey');

var svgWidth = svg.getBoundingClientRect().width;
var svgHeight = svg.getBoundingClientRect().height;



// generate random color function 
function makeRGB(redInputValue,greenInputValue,blueInputValue){
    
    let redOutputValue = redInputValue ?? Math.round(   Math.random()*255   );
    let greenOutputValue = greenInputValue ?? Math.round(   Math.random()*255   );
    let blueOutputValue = blueInputValue ?? Math.round(   Math.random()*255   );

    return 'RGB(' + redOutputValue + ',' + greenOutputValue +',' + blueOutputValue +')';
}


// square 

function drawSquare(){
    let newSquare = document.createElementNS("http://www.w3.org/2000/svg","rect");
    let strokeWidth = 2;
   
    newSquare.setAttribute("x",30);
    newSquare.setAttribute("y",30);
    newSquare.setAttribute("width",40);
    newSquare.setAttribute("height",40);
    newSquare.setAttribute("stroke","black");
    newSquare.setAttribute("stroke-width",strokeWidth);
    newSquare.setAttribute("fill", "rgba(100,100,100,0)");//fill with 0 transparency

    svg.appendChild(newSquare);
}


const generateSquaresButton = document.getElementById("generate-square-button");
generateSquaresButton.addEventListener("click", function(e) {
    svg.replaceChildren();
    drawSquare();
    
});



//circle


function drawCircle(){
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
   
    newCircle.setAttribute("cx",50);
    newCircle.setAttribute("cy",50);
    newCircle.setAttribute("r",40);
    newCircle.setAttribute("stroke-width","2");
    newCircle.setAttribute("stroke","black");
    newCircle.setAttribute("fill", "rgba(100,100,100,0)");//fill with 0 transparency

    svg.appendChild(newCircle);
    

}

const generateCircleButton = document.getElementById("generate-circle-button");
generateCircleButton.addEventListener("click", function(e) {

    
    svg.replaceChildren();

    drawCircle();
});



// ellipse 

function drawEllipse(){
    let newEllipse = document.createElementNS("http://www.w3.org/2000/svg","ellipse");

    newEllipse.setAttribute("cx",50);
    newEllipse.setAttribute("cy",50);
    newEllipse.setAttribute("rx",40);
    newEllipse.setAttribute("ry",20);
    newEllipse.setAttribute("stroke","black");
    newEllipse.setAttribute("stroke-width","2");
    newEllipse.setAttribute("fill","none");

    svg.appendChild(newEllipse);

    
}

const generateEllipseButton = document.getElementById("generate-ellipse-button");
generateEllipseButton.addEventListener("click",function(e){

    svg.replaceChildren();
    drawEllipse();
})






// remove all shapes from base svg 

const removeShapesButton = document.getElementById("remove-shapes-button");
removeShapesButton.addEventListener("click",function(e){
    svg.replaceChildren();

});


//change color constantly 
function changeColor(){
    let lastShape = svg.lastElementChild;
    lastShape.setAttribute("fill", makeRGB());
}

const generateColorButton = document.getElementById("generate-color-button");
generateColorButton.addEventListener("click", function(e) {
    changeColor();

});




