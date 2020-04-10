
function getAnimalSound(animal) {
    if(animal === undefined){
        return null
    }
    else if(animal !== undefined){
        let sound = animal["sound"];
        return sound
    }    
}


//  Задача 2 


function getAverageMark(marks) {
    let average = 0;
    console.log(marks)
    for(let i = 0; i < marks.length; i++){
        average += marks[i] / marks.length;
    }
    let roundedAverage = Math.round(average);
    return roundedAverage;
} 

getAverageMark([2, 4, 5])

//  Зaдача 3

let now = Date.now();

let dateBirthday = new Date(1995, 7, 16, 3, 00);
let birthday = +dateBirthday;


function checkBirthday(birthday) {
    let diff = +now - birthday;
    let age = diff / 31536000000;
    if(age > 18){
        return true
    }
}
checkBirthday(birthday);