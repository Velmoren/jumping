const mario = document.getElementById('mario')
const mushroom = document.getElementById('mushroom')
const btn = document.getElementById('start-btn')

const events = ['keydown']

let interval

const activeJump = () => {
    if (!mario.classList.contains('active')) {
        mario.classList.add('active')
    }

    setTimeout(() => {
        mario.classList.remove('active')
    }, 300)
}

const startGame = () => {
    mushroom.classList.add('animate')

    events.forEach((event) => {
        document.addEventListener(event, () => {
            activeJump()
        })
    })

    interval = setInterval(() => {
        let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'))
        let mushroomLeft = parseInt(window.getComputedStyle(mushroom).getPropertyValue('left'))

        if (mushroomLeft < 50 && mushroomLeft > 0 && marioTop >= 140) {
            endGame()
            alert('GAME OVER!')
        }
    }, 10)
}

const endGame = () => {
    mushroom.classList.remove('animate')
    clearInterval(interval)
}

btn.addEventListener('click', () => {
    startGame()
})