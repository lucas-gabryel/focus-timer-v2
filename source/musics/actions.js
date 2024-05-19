import * as sounds from "./sounds.js"
import state from "../musics/state.js"

export function floresta() {
    if(state.musicOn) {
        musicReset()
        return
    }
    sounds.floresta.play()        
    state.musicOn = true
    state.registroCaminho = floresta
    document.querySelector('#floresta').classList.add('focus')
}

export function chuva() {
    if(state.musicOn) {
        musicReset()
        return
    }
    sounds.chuva.play()        
    state.musicOn = true
    state.registroCaminho = chuva
    document.querySelector('#chuva').classList.add('focus')
}

export function lareira() {
    if(state.musicOn) {
        musicReset()
        return
    }
    sounds.lareira.play()        
    state.musicOn = true
    state.registroCaminho = lareira
    document.querySelector('#lareira').classList.add('focus')
}

export function cafeteria() {
    if(state.musicOn) {
        musicReset()
        return
    }
    sounds.cafeteria.play()        
    state.musicOn = true
    state.registroCaminho = cafeteria
    document.querySelector('#cafeteria').classList.add('focus')
}

function musicReset() {
    sounds.floresta.pause()
    sounds.chuva.pause()
    sounds.lareira.pause()
    sounds.cafeteria.pause()

    state.musicOn = false

    document.querySelector('#floresta').classList.remove('focus')
    document.querySelector('#chuva').classList.remove('focus')
    document.querySelector('#lareira').classList.remove('focus')
    document.querySelector('#cafeteria').classList.remove('focus')
}
