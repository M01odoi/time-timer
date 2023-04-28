function addNumbersClock() {
    const arrNumb = [0,5,10,15,20,25,30,35,40,45,50,55]
    const imgWrp = document.querySelector('.clock__numbers')
    imgWrp.innerHTML = arrNumb
        .map((el,index) => `<span style="--rot:${index*30}deg">${el}</span>`).join('')
}

addNumbersClock()