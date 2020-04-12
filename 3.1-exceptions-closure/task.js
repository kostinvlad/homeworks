function parseCount(number){
    const parsedNumber = Number.parseInt(number, 10)
    if(isNaN(parsedNumber) || parsedNumber === undefined) throw new Error ('Невалидное значение');
    else {
        return Number.parseInt(number, 10)
    }
    
}

const validateCount = (number) => {
    
    try {
       return parseCount(number);
    }
    catch (e){
        return (e);
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
            if(a > b + c || b > a + c || c > a + b) throw new Error('Треугольник с такими сторонами не существует');
            this.sideA = a, 
            this.sideB = b,
            this.sideC = c        
            
    }

    getPerimeter() {
            const p = this.sideA + this.sideB + this.sideC;
            return p
    }

    getArea(){
            let P = this.getPerimeter() / 2;
            let S = Math.sqrt(P * (P - this.sideA) * (P - this.sideB) * (P - this.sideC));
            return +S.toFixed(3);
    }
}



function getTriangle(a, b, c){
    try {
        
        const triangle = new Triangle(a, b, c);
        return triangle
    }
    catch(e) {
        return triangle = {
            getPerimeter: function (){               
                    return "Ошибка! Неправильный треугольник"
            },
        
            getArea: function(){           
                    return "Ошибка! Неправильный треугольник"
            }
        }
    }
}
