import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"

export function countdown() {
    clearTimeout(state.countdownId)

    if(!state.isRunning) {
        return
    }

    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000); //recursão, chamada da função dentro da função, tem que ter um elemento que para a função dentro dela
} // call back função que puxa outra funcão, como a aerofunction

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes //se não for passado valor de minutos para essa função, ela irá pegar os valores que estão no state.js
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}