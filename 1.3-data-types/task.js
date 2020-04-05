"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    for (let arg of arguments){
        if(isNaN(arg) || arg === null || arg === undefined){
            alert("Вводите числовое положительное значение");
            return
        }
    }
    let dateNow = new Date();
    
    let S = amount - contribution; // итоговая сумма займа
    let P = percent / 12 / 100 // коэффициент месячного процента 
    let n = Math.floor((date.getTime() - dateNow.getTime()) / 2592000000); // разница дат в миллисекундах, разделённая на количество миллисекунд в 31 сутках.
    console.log(n);
    let salary = S*(P+P/(((1+P)**n)-1)); // Ежемесячная оплата 
    let sumWhole = (salary * n).toFixed(2);
    console.log(sumWhole);
    return +sumWhole;
    


}

function getGreeting(name) {
    console.log(typeof name)
    if(name === undefined || name === null || name === ""){
        name = "Аноним";
    }
    console.log(`Привет, мир! Меня зовут ${name}`);
    return (`Привет, мир! Меня зовут ${name}`);
}