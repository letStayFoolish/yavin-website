function useScroll() {
  const toTopBtn = document.querySelector('.to-top-btn')
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky')
      toTopBtn.style.opacity = '1'
    } else {
      navbar.classList.remove('navbar-sticky')
      toTopBtn.style.opacity = '0'
    }
  })
}

function incrementStats() {
  const counterList = document.querySelectorAll('.counter')

  counterList.forEach((counter) => {
    counter.innetText = 0

    function updateStats() {
      const dataTarget = +counter.getAttribute('data-target')
      const counterText = +counter.innerText

      const increment = dataTarget / 200

      if (counterText < dataTarget) {
        counter.innerText = Math.ceil(counterText + increment)
        setTimeout(updateStats, 1)
      } else {
        counter.innerText = dataTarget
      }
    }

    updateStats()
    })
}

function toTheTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Event Listeners
document.addEventListener('DOMContentLoaded', useScroll)
document.addEventListener('DOMContentLoaded', incrementStats)
document.querySelector('.to-top-btn').addEventListener('click',toTheTop)