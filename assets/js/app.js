const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const mainDish = $('.menu-2.menu-main');
const drinkDish = $('.menu-2.menu-drinks');
const desertDish = $('.menu-2.menu-desserts');
const coffeDish =  $('.product-coffe');
var inputRadioElement  = $$('.payment label input[type=radio]');
var introducElement = $$(".container__introduction")



var handleProduct = function() {
    var menuElement = $$('.sub-menu');
    
    if(menuElement) {
        menuElement.forEach(element => {
            element.onclick = function() {
                var activeMenu = $('.sub-menu.active')
                if(activeMenu) {
                    activeMenu.classList.remove('active')
                    // if(activeMenu.textContent === 'Main Dish') {
                        //     mainDish.style.display = 'none';
                        // }
                    }
                    if(element.textContent === 'Main Dish') {
                        handleMaindish();
                    }else if(element.textContent === 'Drinks') {
                        handleDrinksdish();
                    }else if(element.textContent === 'Desserts') {
                        handleDessertdish();
                    }else {
                        handleCoffee();
                    }
                    element.classList.add('active')
                }
            });
        }
    }
    
    var handleMaindish = function() {
        mainDish.style.display = 'flex';
        mainDish.style.animation = 'load 0.1s ease';
        drinkDish.style.display = 'none';
        desertDish.style.display = 'none';
        coffeDish.style.display = 'none';
    }
    var handleDrinksdish = function() {
        drinkDish.style.display = 'flex';
        drinkDish.style.animation = 'load 0.1s ease';
        mainDish.style.display = 'none';
        desertDish.style.display = 'none';
        coffeDish.style.display = 'none';
        
    }
    var handleDessertdish = function() {
        desertDish.style.display = 'flex';
        desertDish.style.animation = 'load 0.1s ease';
        mainDish.style.display = 'none';
        drinkDish.style.display = 'none';
        coffeDish.style.display = 'none';
    }
    var handleCoffee = function() {
        coffeDish.style.display = 'flex';
        coffeDish.style.animation = 'load 0.1s ease';
        desertDish.style.display = 'none';
        mainDish.style.display = 'none';
        drinkDish.style.display = 'none';
    }
    
    
    // var handleSlide = function() {
    //     var slideCircle = $$('.slide-circle');
    //     for (let index = 0; index < slideCircle.length; index++) {
    //         setInterval(() => {
    //             introducElement[index].classList.add('active');
    //             // console.log(index)
    //         }, 2000);
    //         introducElement[index].classList.remove('active');

    //         }
    // }
    
    
    // handleSlide();
    var handleMenuMobile = function() {
        var menuMobile = $('.mobile-menu');
        menuMobile.onclick = function() {
            if($('.mobile__nav-bar.active')) {
                $('.mobile__nav-bar').classList.remove('active');
                
            }else{
                $('.mobile__nav-bar').classList.add('active');
            }
            
        }
    }
    handleMenuMobile();
    handleProduct();