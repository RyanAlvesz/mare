'use strict'

const closeMenu = document.getElementById('close-menu')
const openMenu = document.getElementById('open-menu')

openMenu.addEventListener('click', () => {
    menu.classList.remove('-translate-y-full')
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('-translate-y-full')
})