function GeoOk () {
    var UseOk = NaN
    if (navigator.geolocation) {
        UseOk = true
    } else {
        UseOk = false
    }
}
