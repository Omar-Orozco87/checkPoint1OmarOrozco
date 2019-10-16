const PPT = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    let ppt = "";
    switch (randomNumber) {
        case 1:
            ppt = "piedra";
            break;
        case 2:
            ppt = "papel";
            break;
        case 3:
            ppt = "tijeras";
            break;
        default:
            ppt= "error"
            break;
    }
    return ppt
}
const resultadoJuego = (jugador) => {
    let resultado = "";
    let computadora = PPT();
    console.log(`PPT . Computadora es: ${computadora}`);   
    console.log(`PPT . Jugador es: ${jugador}`);     

    if (jugador === computadora){
        resultado = "EMPATE"
    }
    else{
        switch (jugador){
            case "piedra":
                if (computadora == "papel"){
                    resultado = "PERDISTE"
                }else{
                    resultado = "GANASTE"
                }
                break;
            case "papel":
                if (computadora == "tijeras"){
                    resultado = "PERDISTE"
                }else{
                    resultado = "GANASTE"
                }
                break;
            case "tijeras":
                if (computadora == "piedra"){
                    resultado = "PERDISTE"
                }else{
                    resultado = "GANASTE"
                }
                break;
            default:
                break;
        }
    }
    return resultado
}

export default resultadoJuego

