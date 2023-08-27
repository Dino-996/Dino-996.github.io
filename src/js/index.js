"use strict";

let currentYear = () => {
    let date = new Date();
    return `&copy; ${date.getFullYear()}`;
};

let currentDevYear = () => {
    let date = new Date();
    return `${date.getFullYear() - 2020}`;
};

const main = () => {
    document.querySelector("#copy").innerHTML = currentYear();
    document.querySelector("#devYear").innerHTML = currentDevYear();
};

main();