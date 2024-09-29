function addNums(a , b){
   var c = a+b;
    console.log(c);
    
}
addNums( 34,567);
// console.log(c);
console.log('---');



const getAvg = function(m1,m2,m3){
    var avg = (m1+m2+m3)/3; 
    // console.log(avg);
    return avg
    
}
  const result = getAvg(4,8,6)
  console.log(result);
  console.log('---');
  

  const factorial = (n) =>{
    let fact = 1;

    for(let i=2; i<=n; i++){
        fact = fact*i
    }
return fact;

  }
  
const f1 = factorial(5);
console.log(f1);




