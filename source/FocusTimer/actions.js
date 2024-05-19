import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
    if(document.querySelector('.running')) {
        return
    }

    document.documentElement.classList.add('running')

    state.isRunning = true
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function moreFive() {
    state.minutes = state.minutes + 5

    if (state.minutes > 60) {
        state.minutes = 60
    }

    timer.updateDisplay()
}

export function minusFive() {
    state.minutes = state.minutes - 5

    if(state.minutes < 0) {
        state.minutes = 0
    }

    timer.updateDisplay()
}

/* export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
    
} */

/* export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
} */