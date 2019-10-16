const resultArea = document.querySelector("#resultado")

export const getInputNumA = document.querySelector("#numA")
export const getInputNumB = document.querySelector("#numB")

export const parseInputs = (input) => parseInt(input.value)

export const clearArea = (area) => resultArea.innerHTML = ""

export const renderMultView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `
    resultArea.insertAdjacentHTML('beforeend', markup)
}