function kaprekarNumbers(p, q) {
    
    let kaprekarNumbersExist = 0;
    
    let foundKaprekars = [];
   
         
    for(let n = p; n <= q;  n++){
        
         let digits = 0;
         let digitsOfN = 0;
        
                
        let sumOfTheParts = 0;
        
        digits = n.toString()
        digitsOfN = digits.length;
        
        let powerOfN = Math.pow(n,2); 
        
        
        let powerOfNAsString = powerOfN.toString(); 
        
      //daqui          
      let secondPositionFromTheEnd = powerOfNAsString.length - digitsOfN;
      let lastPosition = powerOfNAsString.length -1;
      
      
     let firstPowerOfNSubstring = powerOfNAsString.substring(0, secondPositionFromTheEnd);
      
    let secondPowerOfNSubstring = powerOfNAsString.substring(secondPositionFromTheEnd);
            
       firstPowerOfNSubstring = parseInt(firstPowerOfNSubstring);
       secondPowerOfNSubstring = parseInt(secondPowerOfNSubstring);
      
    
      sumOfTheParts = firstPowerOfNSubstring + secondPowerOfNSubstring;
      
      if(n === 1){
          sumOfTheParts = 1;
      }
         
        if(n == sumOfTheParts){
            kaprekarNumbersExist += 1;
            foundKaprekars.push(n);
        }
    }

     if(kaprekarNumbersExist > 0){
         let kaprekarList = foundKaprekars.join(' ');
         console.log(kaprekarList);
     }
        
    if(kaprekarNumbersExist <= 0){
     console.log('INVALID RANGE');
    }
}
    
    

/*
 * Expected output for p = 1 and q = 100
 * 1, 9, 45, 55, 99
 * */
