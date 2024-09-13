const themeSwitch = document.getElementById('theme')

themeSwitch.addEventListener('click', () => {
    themeSwitch.classList.toggle('night')
    document.body.classList.toggle('night__theme')
})
