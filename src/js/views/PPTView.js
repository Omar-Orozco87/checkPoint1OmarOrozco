const resultArea = document.querySelector("#resultadoJuego")

export const clearArea = (area) => resultArea.innerHTML = ""

export const renderResultView = (result) => {
    const markup = `
        <span>
            ${result}
        </span>
    `
    resultArea.insertAdjacentHTML('beforeend', markup)
}