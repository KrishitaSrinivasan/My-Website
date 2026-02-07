//Makes JavaScript more sensitive to errors so it is easier to debug in the future
'use strict';
//helps select the variable button
const switcher = document.body.querySelector('.btn');
//helps conduct the click function
switcher.addEventListener('click', function() {
     //helps to toggle the light-theme class in the body
    document.body.classList.toggle('light-theme');
    //helps to toggle the dark-theme class in the body
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "dark";
    }
    else {
        this.textContent = "light";
    }
});
