const FizzBuzz = (fizzBuzzInput) => {
    let resultado = ""
    
    let array = []
    while (array.length < fizzBuzzInput){
        array.push(Math.floor(Math.random() * 18) + 1)
    }

    array.map(element => {
        console.log(`Numero random es: ${element}`);
        
        if (element % 3 == 0  && element % 5 == 0) {
            resultado += `${element} es FizzBuzz <br>`
        }
        else if (element % 3 == 0) {
            resultado += `${element} es Fizz <br>`
        }
        else if (element % 5 == 0) {
            resultado += `${element} es Buzz <br>`
        }
        else{
            resultado += `${element} <br>`
        }
    })
    
    return resultado
}
export default FizzBuzz
