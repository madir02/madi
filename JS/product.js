const productImages = document.querySelectorAll(".product-images img"); // выбор всех изображения
const productImageSlide = document.querySelector(".image-slider"); // выбор элемента слайдера изображения

let activeImageSlide = 0; // изображение слайдера

productImages.forEach((item, i) => { // зацикливание на каждом изображении
    item.addEventListener('click', () => { //  добав. события щелчка к каждой миниатюре изоб.
        productImages[activeImageSlide].classList.remove('active'); // удаление активного класса
        item.classList.add('active'); // добав. активного класса к текущему или нажатому изоб.
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // настр. фонового изоб. слайдера
        activeImageSlide = i; // обновление переменной слайдера изоб.
    })
})

// кнопки переключения размеров

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // выбор размера кнопок
let checkedBtn = 0; // текущая выбранная кнопка

sizeBtns.forEach((item, i) => { // зацикливание на каждой 
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // удаление класса проверки из текущей кнопки
        item.classList.add('check'); // добав. класса проверки в нажатую кнопку
        checkedBtn = i; // обнов. переменной
    })
})