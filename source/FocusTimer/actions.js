import { countdown } from "./timer.js"
import state from "./state.js"

export function toggleRunning() {
    countdown()
}

export function reset() {
}

export function moreFive() {
    console.log('mais cindo')
}

export function minusFive() {
    console.log('menos cinco')
}