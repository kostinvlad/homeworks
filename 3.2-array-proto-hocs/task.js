function sleep(milliseconds){
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {       
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);    
  }

  function compareArrays(arr1, arr2){ 
    if(arr1.length === arr2.length){
        return arr1.every(num =>  num === arr2[arr1.indexOf(num)]         
        )
    }  
    else {
       return false
   }
}

function memorize(fn, limit){       
    const memory = []
    
    return function innerFun(...args){
            let resultFind = memory.find(some => compareArrays(some.args, Array.from(arguments) ))
            if(resultFind !== undefined){
                console.log(`Найдено:${resultFind.result}`)
                return resultFind.result
            }

            else {
                const currentFn = fn(...args);       
                memory.push({args: Array.from(arguments), result: currentFn});               

                if(memory.length > limit){       
                    memory.shift(); 
                }

            console.log(`Добавлено:${currentFn}`)   
            return currentFn            
        }
    }   
}

const mSum = memorize(sum, 5); 
// mSum(3, 4); // 7                  
// mSum(1, 3); // 4
// mSum(3, 4);
// mSum(1, 3);
// mSum(3, 56);
// mSum(3, 1);
// mSum(3, 56);
// mSum(9, 6);
// mSum(3, 11);
// mSum(3, 10);

function testCase(testFunction, timerName){
    const sourceArray = [ [1,2,3], [1,2], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time("timerSum");
    for(i = 0; i < 10; i++){        
        sourceArray.forEach(arg => testFunction(...arg));
    }
    console.timeEnd("timerSum");
}

testCase(mSum, "timerSum")





