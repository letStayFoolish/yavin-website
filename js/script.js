function useScroll() {
  const navbar = document.querySelector('.navbar');


  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky')
    } else {
      navbar.classList.remove('navbar-sticky')
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



// Event Listeners
document.addEventListener('DOMContentLoaded', useScroll)
document.addEventListener('DOMContentLoaded', incrementStats)