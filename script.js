/*
    ====================================================
    ================= CALCULATOR LOGIC =================
    ====================================================
*/ 

// get the result element
let result  = document.getElementById("result");

// Input numbers by key pressed
function input(num){
    let number = result.value;
    result.value = number + num;
}

// Calculator logic
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("¡Erro! Digite valores válidos.")
    }
}

// Reset button
function reset(){
    result.value = "";
}

// Del button
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}

/* _________________*/
function toggleNav() {
    let calculator = document.getElementById("calc-keys");
    let result = document.getElementById("calc-top-result");
    let navConvert = document.getElementById("nav-converter");

    let calculatorTab = document.getElementById("nav-calculator-tab");
    let converterTab = document.getElementById("nav-converter-tab");

    calculator.classList.toggle("d-none");
    navConvert.classList.toggle("d-none");
    result.classList.toggle("d-none");

    calculatorTab.classList.toggle("active");
    converterTab.classList.toggle("active");
}

function setLabels() {

    let option = document.getElementById("converterOpt").value;

    let labelOne = document.getElementById("labelOpOne");
    let labelTwo = document.getElementById("labelOpTwo");


    document.getElementById("numberOne").value = "";
    document.getElementById("numberTwo").value = "";

    switch (option) {
        case 'T':
            //celsius, fahrenheit
            labelOne.innerHTML = "Celsius";
            labelTwo.innerHTML = "Fahrenheit";
            break;
        case 'P':
            //pascal, bar
            labelOne.innerHTML = "Pascal";
            labelTwo.innerHTML = "Bar";
            break;
        case 'M':
            //kg, grams
            labelOne.innerHTML = "Kilogramos";
            labelTwo.innerHTML = "Gramos";
            break;
        case 'L':
            //meter, centimeter
            labelOne.innerHTML = "Metros";
            labelTwo.innerHTML = "Centímetros";
            break;
        default:
            alert("Error! Adicione valores válidos.")

    }
}


function convertOneTwo() {
    // Get the value of the input
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo");

    console.log(numberOne, "numberOne")
    // Get the value of the select
    let option = document.getElementById("converterOpt").value;

    if (isNaN(numberOne) || numberOne == "") {
        numberTwo.value = "";
        return;
    }
    switch (option) {
        case 'T':
            //celsius to fahrenheit
            numberTwo.value = (numberOne * 9 / 5) + 32;
            break;
        case 'P':
            //pascal to bar
            numberTwo.value = numberOne / 100000;
            break;
        case 'M':
            //kg to grams
            numberTwo.value = numberOne * 1000;
            break;
        case 'L':
            //meter to centimeter
            numberTwo.value = numberOne * 100;
            break;
        default:
            alert("Error! Adicione valores válidos.")
    }
}

function convertTwoOne() {
    let numberOne = document.getElementById("numberOne");
    let numberTwo = document.getElementById("numberTwo").value;

    let option = document.getElementById("converterOpt").value;

    if (isNaN(numberTwo) || numberTwo == "") {
        numberOne.value = "";
        return;
    }
    switch (option) {
        case 'T':
            //Fahrenheit to celsius
            numberOne.value = ((numberTwo - 32) * 5 / 9).toFixed(4);

            break;
        case 'P':
            //bar to pascal
            numberOne.value = numberTwo * 100000;
            break;
        case 'M':
            //grams to kg
            numberOne.value = numberTwo / 1000;
            break;
        case 'L':
            //centimeter to meter
            numberOne.value = numberTwo / 100;
            break;
        default:
            alert("Error. Ingrese valores válidos.")
    }

}


/*
    ====================================================
    =================== TOGGLE THEME ===================
    ====================================================
*/

// All colors for differents themes
const theme = {
    defaul(){
        root.style.setProperty('--background'          , '#3a4764');
        root.style.setProperty('--background-dark'     , '#232c43');
        root.style.setProperty('--background-very-dark', '#182034');
        
        root.style.setProperty('--key-color-top'       , '#ffffff');
        root.style.setProperty('--key-color-bottom'    , '#3a4764');
        root.style.setProperty('--key-background'      , '#eae3dc');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#637097');
        root.style.setProperty('--key-blue-shadow'     , '#404e72');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    light(){
        root.style.setProperty('--background'          , '#e6e6e6');
        root.style.setProperty('--background-dark'     , '#d3cdcd');
        root.style.setProperty('--background-very-dark', '#eeeeee');
        
        root.style.setProperty('--key-color-top'       , '#3d3d33');
        root.style.setProperty('--key-color-bottom'    , '#3d3d33');
        root.style.setProperty('--key-background'      , '#e5e4e0');
        root.style.setProperty('--key-background-dark' , '#dfd9d2');
        root.style.setProperty('--key-shadow'          , '#b4a597');

        root.style.setProperty('--key-blue-background' , '#388187');
        root.style.setProperty('--key-blue-shadow'     , '#1c6166');

        root.style.setProperty('--key-red-background'  , '#d03f2f');
        root.style.setProperty('--key-red-shadow'      , '#93261a');
    },
    dark(){
        root.style.setProperty('--background'          , '#17062a');
        root.style.setProperty('--background-dark'     , '#1e0836');
        root.style.setProperty('--background-very-dark', '#1e0836');
        
        root.style.setProperty('--key-color-top'       , '#f7de43');
        root.style.setProperty('--key-color-bottom'    , '#f7de43');
        root.style.setProperty('--key-background'      , '#331b4d');
        root.style.setProperty('--key-shadow'          , '#851c9c');

        root.style.setProperty('--key-blue-background' , '#56077c');
        root.style.setProperty('--key-blue-shadow'     , '#851c9c');

        root.style.setProperty('--key-red-background'  , '#00decf');
        root.style.setProperty('--key-red-shadow'      , '#00decf');
    }
}

// Get the root element
var root = document.querySelector(':root');

// Checking the user themes preference
const darkThemeMq  = window.matchMedia("(prefers-color-scheme: dark)");
const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");

// changing the theme with the results above
if (darkThemeMq.matches) {
    document.getElementById('btnTheme').value = "3";
    theme.dark();
} else if(lightThemeMq.matches){
    document.getElementById('btnTheme').value = "2";
    theme.light();    
} else {
    document.getElementById('btnTheme').value = "1";
    theme.defaul();    
}

// Create a function for recive the value of range input
function myFunction_set(val) {
    // receiving the input type range value
    document.getElementById('btnTheme').value = val; 

    // changing the theme with the results above
    if(val == 1){
        theme.defaul();
    } 
     
    else if(val == 2){
        theme.light();
    }
    
    else{
        theme.dark();
    } 
  
}


