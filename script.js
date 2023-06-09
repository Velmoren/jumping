const player = document.getElementById('player')
const damper = document.getElementById('damper')
const btn = document.getElementById('start-btn')

const events = ['keydown']

let interval

const activeJump = () => {
    if (!player.classList.contains('active')) {
        player.classList.add('active')
    }

    setTimeout(() => {
        player.classList.remove('active')
    }, 300)
}

const startGame = () => {
    damper.classList.add('animate')

    events.forEach((event) => {
        document.addEventListener(event, activeJump)
    })

    interval = setInterval(() => {
        let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
        let damperLeft = parseInt(window.getComputedStyle(damper).getPropertyValue('left'))

        if (damperLeft < 50 && damperLeft > 0 && playerTop >= 140) {
            endGame()
            alert('GAME OVER!')
        }
    }, 10)
}

const endGame = () => {
    damper.classList.remove('animate')
    
    clearInterval(interval)

    events.forEach((event) => {
        document.removeEventListener(event, activeJump)
    })
}

btn.addEventListener('click', () => {
    startGame()
})