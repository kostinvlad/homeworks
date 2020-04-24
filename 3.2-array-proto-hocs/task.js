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
    return arr1.every(num => arr1.indexOf(num) === arr2.indexOf(num) && arr1.length === arr2.length);
}

function memorize(fn, limit){       
    const memory = []
    
    return function innerFun(...args){
        if(memory.find(some => compareArrays(some.args, Array.from(arguments)))){
            return memory.find(some => compareArrays(some.args, Array.from(arguments))).result
        }
        else {       
            memory.push({args: Array.from(arguments), result: fn(...args)});        
            if(memory.length > limit){       
            memory.shift(); 
            }
        console.log(memory, limit, fn(...args));
        return fn(...args)
    }
    }   
}

const mSum = memorize(sum, 5);
// mSum(3, 4); // 7
// mSum(1, 3); // 4
// mSum(3, 5);
// mSum(3, 6);
// mSum(3, 56);
// mSum(3, 1);
// mSum(9, 5);
// mSum(9, 6);
// mSum(3, 11);
// mSum(3, 10);

function testCase(testFunction, timerName){
    const sourceArray = [ [1,2,3], [1,2], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time("timerSum");
    for(i = 0; i < 100; i++){        
        sourceArray.forEach(arg => testFunction(...arg));
    }
    console.timeEnd("timerSum");
}

testCase(mSum, "timerSum")





