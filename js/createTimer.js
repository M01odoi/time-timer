function createTimer() {
    const deg = 6

    startBtn.onclick = startTimer
    pauseBtn.onclick = null
    startBtn.style.opacity = '1'
    pauseBtn.style.opacity = '0.5'

    stopBtn.onclick = stopTimer
    setInterval(()=> {
        if (minute === 60){
            document.querySelector('#sound').play()
            minute = 0
        }
        if(!isPaused) {
            minute++
            const minutes = minute * deg;

            minuteArrow.style.transform = `rotateZ(${minutes}deg)`

            bgDeg.style.setProperty('--deg', `${minutes}deg`)
        }
    }, 60000)
}
createTimer()