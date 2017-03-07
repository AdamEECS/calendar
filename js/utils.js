const log = function() {
    console.log.apply(console, arguments)
}

const e = function(selector) {
    return document.querySelector(selector)
}

const toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

const now = function() {
    var d = new Date()
    var nm = d.getFullYear()
    var yt = d.getMonth() + 1
    var ri = d.getDate()
    var ui = d.getHours()
    var ff = d.getMinutes()
    var mc = d.getSeconds()

    return `${nm}/${yt}/${ri} ${ui}:${ff}:${mc}`
}

const getDateTimeById = function(dateId, timeId){
    var date = new Date(e(`#${dateId}`).value)
    var [hour, minute] = ['00', '00']
    var timeArray = e(`#${timeId}`).value.split(':')
    if(timeArray.length == 2) {
        [hour, minute] = timeArray
    }
    date.setHours(hour)
    date.setMinutes(minute)
    if(date == 'Invalid Date') {
        return null
    }else {
        return date
    }
}

const format10 = function(num) {
    if(num < 10){
        return '0' + num
    }else {
        return num
    }
}

const timeFormat = function(time) {
    var d = new Date(time)
    var nm = d.getFullYear()
    var yt = format10(d.getMonth() + 1)
    var ri = format10(d.getDate())
    var ui = format10(d.getHours())
    var ff = format10(d.getMinutes())
    var mc = format10(d.getSeconds())

    return `${nm}/${yt}/${ri} ${ui}:${ff}:${mc}`
}

const dateFormat = function(time) {
    var d = new Date(time)
    var nm = d.getFullYear()
    var yt = format10(d.getMonth() + 1)
    var ri = format10(d.getDate())

    return `${nm}-${yt}-${ri}`
}

const hourMinuteFormat = function(time) {
    var d = new Date(time)

    var ui = format10(d.getHours())
    var ff = format10(d.getMinutes())

    return `${ui}:${ff}`
}
