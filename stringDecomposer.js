function separateString(string){
    
    let firstOutput = "";
    let secondOutput = "";

    for (index in string) {
        
        if (index % 2 == 0){
            firstOutput += string[index];
        }
        else if(index % 2 != 0){
            secondOutput += string[index];
        }
    }

    let finalOutput = firstOutput + ' ' + secondOutput;
    
    console.log(finalOutput);
    
}

/*The input is a string, formed by an int, wich is the number of test cases that will be processed 
 * , followed by a new line  character (\n), followed by the test cases, being each one of 
 *the separated by a new line character (\n).
 *
 *sample input
 *
 *2
 *Jon
 *Program
 *
 *The input  string will look like:
 * 
 * input = '2\nJon\nProgram';
 * 
 * So the idea is to break the input string at the '\n' and store each part inside of an
 * index of an array. After that, work with each of the indexes separatedly
 */

function processData(input) {

    let inputToArray = input.split('\n'); 

    let arrayLength = inputToArray[0];

    let inputString = "";

    for (let i = 1; i <= arrayLength; i++){
        
            inputString = array[i];
            
            separateString(inputString);
            
    }
}
