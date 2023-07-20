"use strict"

//Get current year
const getYear = () => {

    const date = new Date();
    const year = date.getFullYear();
    document.querySelector('#year').innerText = year;

}

//Get years of development
const getYearsOfDevelopment = () => {
    
    const date = new Date();
    const year = date.getFullYear();
    const difference = year - 2021;
    document.querySelector('#anni').innerText = difference;

}

//Carousel
let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 1
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

getYear();
getYearsOfDevelopment();