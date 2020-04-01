"use strict"

function getResult(a,b,c){
    let x = [];
    let D = Math.pow(b, 2) - (4 * a * c);

    if(D > 0){
        
        x.push((-b + Math.sqrt(D)) / (2 * a));
        x.push((-b - Math.sqrt(D)) / (2 * a)); 
    }

    else if(D === 0){
        x.push(-b / (2 * a));
    }

    return x;
    
};

function getAverageMark(marks){
    console.log(marks);
    let evalWhole = 0;

    if(marks.length === 0){
        return 0;
    }
    
    else {
        console.log(marks);
        marks = marks.slice(0, 5)
        for(let i = 0; i < marks.length; i++){
            evalWhole += parseInt(marks[i]); 
            }
            return evalWhole / marks.length;
   }
}

function askDrink(name, dateOfBirthday){
    let result = (`Не желаете ли олд-фэшн, ${name}?`);
    let result2 = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
   
    let dateNow = new Date();
    
    let age = dateNow.getFullYear() - dateOfBirthday.getFullYear();
    if(age > 18){
       alert(result);
       return result;
    }
    else{
      alert(result2);
      return result2;
    }
    //   let result = age > 18 ? alert(`Не желаете ли олд-фэшн, ${name}?`) : alert(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    
    // return result;
}