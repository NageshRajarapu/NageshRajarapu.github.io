// const myHeading = 
// document.querySelector('h1');
// myHeading.textContent = 
// 'Hello World!';

// let welcomeMessage = "Hello World!";
// console.log(welcomeMessage);
// console.log(2%3);

// let firstName = 'Nagesh'
// let lastName = 'Rajarapu'
// let fullName = firstName + ' ' +lastName
// console.log(firstName, lastName);
// console.log(fullName);

/*let iceCream = 'butterscotch'
if (iceCream === 'butterscotch') {
    console.log('Yay, I love butterscotch ice cream!');
}
else {
    console.log('Awww, but butterscotch is good');
}*/

/*function multiplyTwoNumbers(num1, num2) {
    let result = num1 * num2;
    return result;
}

let result = multiplyTwoNumbers(3,5);
result = multiplyTwoNumbers(2.5,5);
console.log(result);*/

/*document.querySelector('html').
addEventListener('click' , function() {
    alert('Ouch Stop poking me!');
});*/
 
/*let myHtml = document.querySelector('html');
 myHtml.addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
 });*/

 /*let myHTML = document.querySelector('html');
 myHTML.addEventListener('click', ()=> {
    alert('Ouch! Stop clicking me!');
 });*/
 let myImage = document.querySelector('img');
 myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src', 
        'images/firefox-logo2.png');
    }
    else {
        myImage.setAttribute('src', 
        'images/firefox-logo.png');
    }
 }

 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');

 function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    }
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ', +myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' +storedName;
}

myButton.onclick = function() {
    setUserName();
}