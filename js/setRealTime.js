function setRealTime() {
    const date = new Date()
    const hour = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
    const minute =  date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
    const second =  date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()
    TIME.innerText = `${hour}:${minute}:${second}`
}

setRealTime()
setInterval(setRealTime,1000)