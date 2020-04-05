
// задача 1

function getSolutions (a, b, c){ // коэф-ты квадратного уравнения

    let D = Math.pow(b, 2) - (4 * a * c);
    let x = (-b / (2 * a));
    let x1 = ((-b + Math.sqrt(D)) / (2 * a));
    let x2 = ((-b - Math.sqrt(D)) / (2 * a));
    let answerObj = {};

    if(D < 0){
        answerObj.D = D;
        answerObj.roots = [];
        return answerObj;
    }
    else if(D === 0) {
        answerObj.D = D;
        answerObj.roots = [x];
        return answerObj;
    }
    else{
        answerObj.D = D;
        answerObj.roots = [x1, x2];
        return answerObj;
    }    
    };

    function showSolutionsMessage(a, b, c){
        if(a === 0){
            console.log("Вы пытаетесь решить линейное уравнение");
            return
        }
        let result = getSolutions(a, b, c);
        console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
        console.log(`Значение дискриминанта: ${result.D}`);
        if(result.roots.length === 2){
            console.log(`Уравнение имеет два корня. x¹ = ${result.roots[0]}, x² = ${result.roots[1]} `);
        }
        else if(result.roots.length === 1){
            console.log(`Уравнение имеет один корень. x = ${result.roots[0]}`);
        }
        else{
            console.log("Уравнение не имеет вещественных корней");
        }
    }

// задача 1, вариант 2



//задача 2

let data = {
    algebra : [],
    geometry : [2, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4] 
  };

function getAverageScore(data){
    let averageScore = {};
    for(let values in data){
      averageScore[values] = getAverageMark(data[values]);
    }
    averageScore.average = getAverageMark(objCore(averageScore));
    return averageScore;
  }

function getAverageMark(marks){
    wholeMarks = 0;
    for(let i = 0; i < marks.length; i++){
        wholeMarks += marks[i] / marks.length;
    }
    return wholeMarks;
}

function objCore(object){
    let averageArray = [];
    for(let entity in object){
        averageArray.push(object[entity]);

    }
    return averageArray;
}
console.log(getAverageScore(data));


// Zadacha 3

secretData = {
    aaa: 1,
    bbb: 0,
}

   function getDecodedValue(secret){
    if(secret === 0){
        return "Родриго";
    }
    else {
        return "Эмильо";
    }
}

function getPersonData(secretData) {
    let arr = {
        firstName: getDecodedValue(secretData["aaa"]),
       lastName: getDecodedValue(secretData["bbb"])
    }
    return arr;
   };
getPersonData(secretData);