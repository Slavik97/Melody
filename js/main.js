$(document).ready(function () {
    var currentFloor = 2;//переменная для хранения текущего этажа
    var counterUp = $(".counter-up"); //кнопка увеличения этажа
    var counterDown = $(".counter-down"); //кнопка уменьшения этажа
    var foorPath = $(".home-image path")

    //Функция при наведении мышкой (и если водить курсором по этажам) на этаж дома подсвечиваеться этаж
    foorPath.on("mouseover", function (){        
        currentFloor = ($(this).attr('data-floor'));//удаляем активный клас у этажей
        $(".counter").text(currentFloor);//получаем значение текущего этажа
        foorPath.removeClass("current-floor");//Записываем значение этажа в счетчик
    });

    //клик по кнопке вверх счетчика
    counterUp.on("click", function (){
        if(currentFloor < 18){//проверяем значение этажа (не должно быть больше 18)
            currentFloor++;//прибавляем к переменной 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, 
                useGrouping: false});//форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor);//записываем значение этажа в переменную
            foorPath.removeClass("current-floor");//удаляем активный клас у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвечиваем текущий этаж
        }
    });

    //клик по кнопке вниз счетчика
    counterDown.on("click", function (){
        if(currentFloor > 2){
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, 
                useGrouping: false});
            $(".counter").text(usCurrentFloor);
            foorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    })
});