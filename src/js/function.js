"use strict"

const scrollToTop = () => {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
    });
}

//Get current year
const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    document.querySelector('#year').innerText = year;
}

getYear();