// const myheading = document.querySelector('h1');
// myheading.textContent = 'Hello World!';

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/life-01.jpg'){
        myImage.setAttribute('src','images/life-02.jpg');
    } else{
        myImage.setAttribute('src','images/life-01.jpg');
    }
}

let myButton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please Enter your name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myheading.innerHTML = 'Dadagrapher is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = 'Dadagrapher is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}