// IMPORTACIONES
import Sum from './models/Sum'
import Res from './models/Res'
import Mult from './models/Mult'
import Div from './models/Div'
import PPT from './models/PPT'
import FizzBuzz from './models/FizzBuzz'

import * as sumView from './views/SumView'
import * as resView from './views/ResView'
import * as multView from './views/MultView'
import * as divView from './views/DivView'
import * as pptView from './views/PPTView'
import * as fizzbuzzView from './views/FizzBuzzView'

import Empresa from './Empresa'
import Empleado from './Empleado'

import styles from '../css/style.css'
import sassStyles from '../scss/style.scss'

//Calculadora
document.querySelector("#sumar").addEventListener(("click"), () => {
    event.preventDefault()

    sumView.clearArea()

    const numA = sumView.parseInputs(sumView.getInputNumA)
    const numB = sumView.parseInputs(sumView.getInputNumB)

    const resultado = Sum(numA, numB)

    return sumView.renderSumView(resultado)
})

document.querySelector("#restar").addEventListener(("click"), () => {
    event.preventDefault()

    resView.clearArea()

    const numA = resView.parseInputs(resView.getInputNumA)
    const numB = resView.parseInputs(resView.getInputNumB)

    const resultado = Res(numA, numB)

    return resView.renderResView(resultado)
})

document.querySelector("#multiplicar").addEventListener(("click"), () => {
    event.preventDefault()

    multView.clearArea()

    const numA = multView.parseInputs(multView.getInputNumA)
    const numB = multView.parseInputs(multView.getInputNumB)

    const resultado = Mult(numA, numB)

    return multView.renderMultView(resultado)
})

document.querySelector("#dividir").addEventListener(("click"), () => {
    event.preventDefault()

    divView.clearArea()

    const numA = divView.parseInputs(divView.getInputNumA)
    const numB = divView.parseInputs(divView.getInputNumB)

    const resultado = Div(numA, numB)

    return divView.renderDivView(resultado)
})
//Fin calculadora

//Piedra , papel o tijeras.
document.querySelector("#piedra").addEventListener(("click"), () => {
    event.preventDefault()

    pptView.clearArea()

    const resultado = PPT('piedra')

    pptView.renderResultView(resultado)
})

document.querySelector("#papel").addEventListener(("click"), () => {
    event.preventDefault()

    pptView.clearArea()

    const resultado = PPT('papel')

    pptView.renderResultView(resultado)
})
document.querySelector("#tijeras").addEventListener(("click"), () => {
    event.preventDefault()

    pptView.clearArea()

    const resultado = PPT('tijeras')

    pptView.renderResultView(resultado)
})

document.querySelector("#nuevoJuego").addEventListener(("click"), () => {
    event.preventDefault()

    pptView.clearArea()
})
//Fin Piedra , papel o tijeras.

//Fizz Buzz
document.querySelector("#fizzBuzzStart").addEventListener(("click"), () => {
    event.preventDefault()

    fizzbuzzView.clearArea()

    const fizzBuzzInput = fizzbuzzView.parseInputs(fizzbuzzView.getInputFizzBuzz)

    const resultado = FizzBuzz(fizzBuzzInput)

    fizzbuzzView.renderResultView(resultado)
})
//Fin Fizz Buzz

//Empresa
let empresa = new Empresa("Bedu")

let isValidStringInput = (value) => {
    let isValid = false;
    if (value != null && value.length > 0 && isNaN(value)) {
        isValid = true;
    }
    return isValid;
}

let isValidNmberInput = (value) => {
    console.log(value);

    let isValid = false;
    if (value != null && value.length > 0 && !isNaN(value)) {
        isValid = true;
    }
    return isValid;
}

document.querySelector("#calcularSueldo").addEventListener(("click"), () => {
    let area = prompt("Ingresa el area");
    let nomina = empresa.calcularNominas(area)
    alert(`La nomina es de : ${nomina}`)
})

document.querySelector("#agregarEmpleado").addEventListener(("click"), () => {
    let nombre = prompt("Ingresa el nombre : ");
    let salario = prompt("Ingresa el salario : ");
    let area = prompt("Ingresa el area : ");

    if (isValidStringInput(nombre) && isValidStringInput(area) &&
        isValidNmberInput(salario)) {
        let empleado = new Empleado(nombre, salario, area)
        empresa.agregarEmpleado(empleado)
        alert(`Empleado ${nombre} fue agregado exitosamente`)
    }
    else {
        alert("Algun valor no fue ingresado en el formato adecuado. Empleado no agregado")
    }
})
//Fin Empresa