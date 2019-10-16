const resultArea = document.querySelector("#resultadoFizzBuzz")

export const clearArea = (area) => resultArea.innerHTML = ""

export const getInputFizzBuzz = document.querySelector("#muestra")
export const parseInputs = (input) => parseInt(input.value)

export const renderResultView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `
    resultArea.insertAdjacentHTML('beforeend', markup)
}