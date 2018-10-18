function GeoOk () {
    var UseOk = NaN
    if (navigator.geolocation) {
        UseOk = true
    } else {
        UseOk = false
    }
}
function getId (id) {
document.getElementById(id)
}
function ajaxStart (type, load, async) {
    var ajax = new XMLHttpRequest()
    ajax.onload = reqListener
ajax.open(type, load, async)
ajax.send()
}