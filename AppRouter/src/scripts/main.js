// This file contains the JavaScript code that adds interactivity to the webpage, handling events and manipulating the DOM.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Example of adding interactivity
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});