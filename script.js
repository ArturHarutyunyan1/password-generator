const slider = document.querySelector('.slider')
const passwordLength = document.querySelector('.value')

slider.addEventListener('input', function(e) {
    let value = e.target.value
    passwordLength.textContent = value
    val = value
    value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #a3ffaf 0%, #a3ffaf ' + value + '%, #08070be6 ' + value + '%, #08070be6 100%)'
})

