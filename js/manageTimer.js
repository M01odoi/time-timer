function pauseTimer() {
    isPaused = true
    startBtn.onclick = startTimer
    pauseBtn.onclick = null
    pauseBtn.style.opacity = '0.5'
    startBtn.style.opacity = '1'
}

function startTimer() {
    startBtn.onclick = null
    pauseBtn.onclick = pauseTimer
    startBtn.style.opacity = '0.5'
    pauseBtn.style.opacity = '1'
    document.querySelector('#sound').load()
    isPaused = false
}

function stopTimer() {
    const sound = document.querySelector('#stop')
    sound.play()
    stopBtn.style.opacity = '0.5'
    stopBtn.onclick = null
    minute = 0
    isPaused = true
    bgDeg.style.setProperty('--deg', '0deg')
    minuteArrow.style.transform = `rotateZ(0)`
}