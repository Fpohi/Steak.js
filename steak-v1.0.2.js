function geoOk () {
    "use strict";
    var UseOk = NaN;
    if (window.navigator.geolocation) {
        UseOk = true;
    } else {
        UseOk = false;
    }
}
function getId (id) {
    "use strict";
document.getElementById(id);
}
function ajaxStart (type, load, async) {
    "use strict";
    var ajax = new XMLHttpRequest();
    ajax.onload = reqListener;
ajax.open(type, load, async);
ajax.send();
}
function getClass (className) {
    "use strict";
    document.getElementsByClassName(className);
}
function effectElement (element) {
    "use strict";
   var setting = document.getElementById(element);
   if (setting.style.display === "none") {
       setting.style.display = "block";
   } else {
       setting.style.display = "none";
   }
}
function getIpAddress (onNewIps) {
    "use strict";
var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection
 || window.webkitRTCPeerConnection;
    var pc = myPeerConnection({
        iceServers: []
    });
    noop = function() {};
    localIPs = {};
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(?:[a-f0-9]{1,4}){7})/g;
    key;
    function iterateIP(ip) {
        if (!localIPs[ip]) {onNewIps(ip);
        localIPs[ip] = true;
    }
    pc.createDataChannel("");
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split("\n").forEach(function(line) {
            if (line.indexOf("candidate") < 0) {return;
            line.match(ipRegex).forEach(iterateIP);
        }});
        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
        // An error occurred, so handle the failure to connect
    });
    pc.onicecandidate = function(ice) {
        var ice2 = ice;
        var c = candidate;
        if (!ice2 || !ice2.c || !ice2.c.c || !ice2.c.c.match(ipRegex)){return;
        ice2.c.c.match(ipRegex).forEach(iterateIP);
    }
}
}
}
function i (file) {
    "use strict";
    const file = import(file);
}
